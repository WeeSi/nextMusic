export default function MnInput({
  type = "text",
  w = "full",
  reg,
  placeholder,
}) {
  return (
    <input
      type={type}
      className={`flex grow w-${w} outline-hidden focus:outline-none p-2`}
      placeholder={placeholder}
    />
  );
}
