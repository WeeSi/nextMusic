export default function NmBtn({ action, svg = false, label = "Label" }) {
  return (
    <div className="flex border rounded-sm border-stone-300">
      <button>{label}</button>
    </div>
  );
}
