import React, { forwardRef } from "react";

const Checkbox = forwardRef(({ className = "", checked, onChange, disabled, ...props }, ref) => {
  return (
    <input
      type="checkbox"
      ref={ref}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={`
        h-4 
        w-4 
        rounded 
        border 
        border-gray-300
        bg-white
        text-primary
        focus:outline-none 
        focus:ring-2 
        focus:ring-primary 
        focus:ring-offset-2
        disabled:cursor-not-allowed 
        disabled:opacity-50
        cursor-pointer
        ${className}
      `}
      {...props}
    />
  );
});

Checkbox.displayName = "Checkbox";

export { Checkbox };