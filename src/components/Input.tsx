import { InputProps } from "../utility/types";

const Input = ({ value, handleValue, label, inputType = "text" }: InputProps) => {
  return (
    <>
      <label className="text-sm" htmlFor={label}>
        {label}
      </label>
      {inputType === "text" ? (
        <input
          value={value}
          id={label.toLowerCase()}
          type={inputType}
          onChange={(e) => {
            const name = e.target.id;
            const value = e.target.value;
            handleValue(name, value);
          }}
          className="w-64 h-8 px-2 py-4 bg-white border-2 border-slate-900 rounded-md"
        />
      ) : (
        <input
          id={label.toLowerCase()}
          value={value}
          onChange={(e) => {
            const name = e.target.id;
            const value = e.target.value;
            handleValue(name, value);
          }}
          className="w-64 h-8 px-2 py-4 bg-white border-2 border-slate-900 rounded-md"
          type="number"
          onKeyPress={(e) => {
            if (e.currentTarget.value.length > 12) e.currentTarget.value = e.currentTarget.value.slice(0, 12);
          }}
        />
      )}
    </>
  );
};

export default Input;
