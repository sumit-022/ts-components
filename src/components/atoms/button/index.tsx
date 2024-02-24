import clsx from "clsx";
import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  completed?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  loading,
  disabled,
  completed,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 bg-blue-primary text-white rounded-md py-2 hover:bg-blue-primary/80 transition-all duration-300 font-semibold disabled:bg-[#757579a4] disabled:text-[#7e7e81] disabled:cursor-not-allowed",
        loading && "bg-repeating-linear-gradient scale-95",
        className
      )}
      disabled={disabled}
    >
      {loading ? (
        <div className="flex gap-3">
          <span>Loading...</span>
        </div>
      ) : completed ? (
        "Completed"
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
