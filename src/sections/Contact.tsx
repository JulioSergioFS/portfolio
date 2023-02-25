import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { RHFInput } from "../components/RHFInput";
import { RHFTextArea } from "../components/RHFTextArea";
import useSnackbar from "../hooks/useSnackbar";
import "../styles/sections/contact.scss";

type FormValuesProps = {
  email: string;
  password: string;
};

export function Contact() {
  const { openSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);

  const ContactSchema = Yup.object().shape({
    email: Yup.string()
      .email("O e-mail deve ser um endereço de e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("Senha é obrigatória"),
  });

  const defaultValues = {
    email: localStorage.getItem("login") || undefined,
    password: undefined,
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(ContactSchema),
    defaultValues,
  });

  const { reset, handleSubmit, watch } = methods;
  const values = watch();

  const onSubmit = async (data: FormValuesProps) => {
    try {
      if (data.email === "admin@gmail.com" && data.password === "password") {
        console.log("login feito com sucesso");
        localStorage.setItem("email", values?.email);
        localStorage.setItem("name", "Admin User");
        openSnackbar({ type: "success", message: "Login feito com sucesso" });
      } else {
        console.log("erro ao fazer login");
        openSnackbar({ type: "error" });
      }
      console.log(data);
    } catch (error) {
      reset();
    }
  };

  return (
    <div className="content">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="fields">
            <h2 className="title">Contact Me</h2>
            <p className="text">Fill in the fields below to get in contact</p>
            <div className="first-row">
              <RHFInput
                name="name"
                label="Name"
                placeholder="Write your name"
                className="name"
              />
              <RHFInput
                name="email"
                label="E-mail"
                placeholder="email@example.com"
                className="email"
              />
            </div>
            <RHFInput
              name="subject"
              label="Subject"
              placeholder="Write the subject here"
            />
            <RHFTextArea
              name="message"
              label="Message"
              placeholder="Write your message here"
              className="message"
            />
            <button className="button-primary send" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
