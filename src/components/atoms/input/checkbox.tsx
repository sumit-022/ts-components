import clsx from "clsx";
import React, { ChangeEvent, useState } from "react";
import { TiTick } from "react-icons/ti";

interface CheckboxProps {
  checked?: boolean;
  onChange?: (checked: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked = false, onChange }) => {
  const [check, setCheck] = useState(checked);
  return (
    <>
      <div
        className={clsx(
          "h-6 w-6 rounded-full border border-black flex items-center justify-center",
          check && "bg-pink"
        )}
        onClick={() => {
          setCheck(!check);
          if (onChange) {
            onChange({
              target: { checked: !check },
            } as ChangeEvent<HTMLInputElement>);
          }
        }}
      >
        {check && <TiTick className="text-white" />}
      </div>
      <input type="checkbox" className="sr-only" />
    </>
  );
};

export default Checkbox;
