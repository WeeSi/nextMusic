export default function MnInput({
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
  return (
    <div className="relative w-full">
      <label className="text-stone-300">
        {label}
        {required && "*"}
      </label>
      <input
        type={type}
        autoComplete={autocomplete}
        id={label}
        placeholder={placeholder}
        className={`flex grow w-${w} outline-hidden focus:outline-none p-2`}
        {...register(name, {
          required: required,
          pattern: pattern,
        })}
      />
      {error && (
        <span style={{ color: "#ff4d6f" }} className="error text-sm">
          {error.message}
        </span>
      )}
    </div>
  );
}
