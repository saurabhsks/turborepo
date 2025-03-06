"use client";
import useToggleStore from "../store/toggleStore";

const Toggle = () => {
  const { isOn, toggle } = useToggleStore();

  return (
    <button
      onClick={toggle}
      className={`p-3 w-24 text-white rounded transition ${
        isOn ? "bg-green-500" : "bg-gray-500"
      }`}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
};

export default Toggle;
