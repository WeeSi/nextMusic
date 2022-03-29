import { useState } from "react";

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
      default:
        return "flex p-2 justify-center bg-blue-500 rounded-md";
    }
  };

  return (
    <div
      className={`flex w-full ${getClassname(variant)}`}
      style={{ marginTop: styles.marginTop }}
    >
      <button className="flex w-full" onClick={action} type={type}>
        <div
          className="flex w-full space-x-2 hover:font-semibold"
          style={{ justifyContent: !variant ? "center" : "start" }}
        >
          <span>{label}</span>
          {svg && svg}
        </div>
      </button>
    </div>
  );
}
