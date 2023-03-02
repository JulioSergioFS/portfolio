import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { AnimateComponent } from "../components/AnimateComponent";
import { RHFInput } from "../components/RHFInput";
import { RHFTextArea } from "../components/RHFTextArea";
import useLocales from "../hooks/useLocales";
import useSnackbar from "../hooks/useSnackbar";
import "../styles/sections/contact.scss";

type FormValuesProps = {
  email: string;
  password: string;
};

export function Contact() {
  const { t } = useLocales();
  const { openSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = useState(false);

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required(
      t("sections.contact.fields.name.errors.required")
    ),
    email: Yup.string()
      .email(t("sections.contact.fields.email.errors.email"))
      .required(t("sections.contact.fields.email.errors.required")),
    subject: Yup.string().required(
      t("sections.contact.fields.subject.errors.required")
    ),
    message: Yup.string().required(
      t("sections.contact.fields.message.errors.required")
    ),
  });

  const defaultValues = {
    name: "",
    email: undefined,
    subject: "",
    message: "",
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
        openSnackbar({
          type: "success",
          message: t("sections.contact.messages.success") as string,
        });
      } else {
        openSnackbar({
          type: "error",
          message: t("sections.contact.messages.error") as string,
        });
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
            <AnimateComponent>
              <h2 className="title">{t("sections.contact.title")}</h2>
            </AnimateComponent>

            <AnimateComponent>
              <p className="text text-secondary">
                {t("sections.contact.subtitle")}
              </p>
            </AnimateComponent>

            <AnimateComponent className="first-row">
              <RHFInput
                name="name"
                label={t("sections.contact.fields.name.label")}
                placeholder={t("sections.contact.fields.name.placeholder")}
                className="name"
              />
              <RHFInput
                name="email"
                label={t("sections.contact.fields.email.label")}
                placeholder={t("sections.contact.fields.email.placeholder")}
                className="email"
              />
            </AnimateComponent>

            <AnimateComponent>
              <RHFInput
                name="subject"
                label={t("sections.contact.fields.subject.label")}
                placeholder={t("sections.contact.fields.subject.placeholder")}
              />
            </AnimateComponent>

            <AnimateComponent>
              <RHFTextArea
                name="message"
                label={t("sections.contact.fields.message.label")}
                placeholder={t("sections.contact.fields.message.placeholder")}
                className="message"
              />
            </AnimateComponent>
            <AnimateComponent>
              <button className="button-primary send" type="submit">
                {t("sections.contact.button")}
              </button>
            </AnimateComponent>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
