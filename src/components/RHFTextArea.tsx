import { useFormContext } from "react-hook-form";

export function RHFTextArea({
  name,
  label,
  options,
  placeholder,
  className,
}: {
  name: string;
  label: string;
  type?: string;
  options?: any;
  placeholder: string;
  className?: string;
}) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className={`${className || ""} input`}>
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        {...register(name, options)}
        style={{ width: "100%", height: "100%" }}
      />
      {"string" === typeof errors[name]?.message ? (
        // @ts-ignore
        <p style={{ color: "red" }}>{errors[name]?.message}</p>
      ) : null}
    </div>
  );
}
