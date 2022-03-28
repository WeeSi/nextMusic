export default function NmBtn({
  action,
  svg = false,
  label = "Label",
  type = "button",
  variant = undefined,
}) {
  const getClassname = (variant) => {
    switch (variant) {
      case "text":
        return "hover:text-amber-500";
      default:
        return "p-2 border rounded-md border-stone-300";
    }
  };

  return (
    <div className={`flex ${getClassname(variant)}`}>
      <button onClick={action} type={type}>
        {label}
      </button>
    </div>
  );
}
