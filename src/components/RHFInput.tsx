import { useFormContext } from "react-hook-form";

export function RHFInput({
  name,
  type,
  label,
  options,
  placeholder,
  className,
}: {
  name: string;
  type?: string;
  label: string;
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
      <input
        type={type || "text"}
        placeholder={placeholder}
        {...register(name, options)}
        style={{ width: "100%", height: "100%" }}
      />
      {/* {errors ? <p style={{ color: "red" }}>{errors[name]?.message}</p> : null} */}
    </div>
  );
}
