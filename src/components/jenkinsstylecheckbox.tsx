import { useState } from "react";
const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`flex items-center cursor-pointer relative select-none ${isChecked ? "text-blue-600" : "text-black"}`}
      onClick={handleCheckboxChange}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-colors duration-300 ease-in-out ${
          isChecked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-400"
        }`}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 text-white animate-checkmark"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
      <span className="ml-3 text-sm font-medium">Check me!</span>
    </div>
  );
};

export default Checkbox;
