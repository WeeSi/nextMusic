import { useEffect } from "react";

export default function NmInput({
  type = "text",
  w = "full",
  label = "label",
  name,
  register,
  required = false,
  pattern = "",
  error,
  placeholder,
  autocomplete = "email",
}) {
  useEffect(() => {}, [error]);

  return (
    <div className="flex flex-col w-full space-y-2">
      <label className="text-stone-300 text-sm font-medium tracking-wide">
        <span style={{ color: error && "#dc2626" }}>
          {label}
          {required && " *"}
        </span>
      </label>
      <input
        type={type}
        autoComplete={autocomplete}
        id={label}
        placeholder={placeholder}
        className={`p-2 rounded-md focus:outline-none`}
        style={{
          color: error && "#b91c1c",
          boxShadow: error && "inset 0 0 .3rem #b91c1c",
        }}
        {...register(name, {
          required: required,
          pattern: pattern,
        })}
      />
      {/* {
        <span style={{ color: !error ? "#fff" : "#dc2626" }}>
          {!error ? placeholder : error.message}
        </span>
      } */}
      {error && (
        <span style={{ color: "#b91c1c" }} className="">
          {error.message}
        </span>
      )}
    </div>
  );
}
