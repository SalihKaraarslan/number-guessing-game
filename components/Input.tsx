import { FaCaretDown } from "react-icons/fa";

export default function Input({
  label,
  value,
  setValue,
  step = 1,
  min = 0,
  max,
}) {
  return (
    <div className="flex flex-col justify-between items-center w-full h-14 pt-1 rounded-lg border border-gray-700 bg-gradient-to-r from-[#171C24] to-[#242B36]">
      <div className="text-gray-400 text-xs">{label}</div>
      <div className="flex justify-between w-full mb-1">
        <button
          className="p-1 mx-2 text-gray-400 hover:text-white border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-700"
          onClick={() => setValue((prev) => Math.max(min, prev - step))}
          aria-label={`Decrease ${label}`}
        >
          <FaCaretDown
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "2px",
              marginRight: "2px",
              color: "#fff", // Changed color to hex
            }}
          />
        </button>
        <input
          value={
            typeof value === "number"
              ? Math.min(max ?? Infinity, value).toFixed(step < 1 ? 2 : 0) // Ensure the input value does not exceed max
              : value
          }
          type="number"
          onChange={(e) => {
            const newValue = Math.max(
              min,
              Math.min(
                max ?? Infinity,
                Number(parseFloat(e.target.value).toFixed(step < 1 ? 2 : 0))
              )
            );
            setValue(newValue);
          }}
          className="rounded-lg w-full border border-black text-white font-medium bg-black text-center"
          step={step}
          min={min}
          aria-label={label}
        />
        <button
          className="p-1 mx-2 text-gray-400 hover:text-white border border-gray-700 rounded-md bg-gray-800 hover:bg-gray-700"
          onClick={() =>
            setValue((prev) => Math.min(max ?? Infinity, prev + step))
          } // Ensure the new value does not exceed max
          aria-label={`Increase ${label}`}
        >
          <FaCaretDown
            style={{
              width: "20px",
              height: "20px",
              marginLeft: "2px",
              marginRight: "2px",
              color: "#fff", // Changed color to hex
              transform: "rotate(180deg)",
            }}
          />
        </button>
      </div>
    </div>
  );
}
