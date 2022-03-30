export default function NmBtn({
  action,
  svg = false,
  label = "Label",
  type = "button",
  variant = undefined,
  styles = {},
}) {
  const getClassname = (variant) => {
    switch (variant) {
      case "text":
        return "hover:text-blue-500 hover:underline";
      case "outline":
        return "flex px-5 py-2 justify-center text-white rounded-full border border-blue-500";
      default:
        return "flex px-5 py-2 justify-center bg-blue-500 rounded-full";
    }
  };

  return (
    <div
      className={`flex ${getClassname(variant)} cursor-pointer`}
      style={{ marginTop: styles.marginTop }}
    >
      <button className="flex w-full" onClick={action} type={type}>
        <div
          className="flex w-full space-x-2"
          style={{ justifyContent: !variant ? "center" : "start" }}
        >
          <span className="text-md">{label}</span>
          {svg && <div className="flex items-center pb-1 w-6 h-6">{svg}</div>}
        </div>
      </button>
    </div>
  );
}
