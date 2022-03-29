export default function NmBtn({
  action,
  svg = false,
  label = "Label",
  type = "button",
}) {
  return (
    <div className="flex w-24 border rounded-sm border-stone-300">
      <button onClick={action} type={type}>
        {label}
      </button>
    </div>
  );
}
