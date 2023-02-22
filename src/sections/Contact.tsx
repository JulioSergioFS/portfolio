import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { RHFInput } from "../components/RHFInput";
import useSnackbar from "../hooks/useSnackbar";
import "../styles/sections/contact.scss";

type FormValuesProps = {
  email: string;
  password: string;
};

export default function Contact() {
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
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="content">
          <h2 className="title">Contact Me</h2>
          <RHFInput name="email" placeholder="E-mail" />
          <RHFInput name="password" type="password" placeholder="Senha" />
          <button className="button-primary" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
