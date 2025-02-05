// components/ui/alert.jsx
import React from "react";

const Alert = ({ children, className = "", variant = "default", ...props }) => {
  const baseStyles = "rounded-lg border p-4 shadow-sm";
  
  const variantStyles = {
    default: "bg-white border-gray-200",
    destructive: "border-red-500 text-red-600 bg-red-50",
    warning: "border-yellow-500 text-yellow-600 bg-yellow-50",
    success: "border-green-500 text-green-600 bg-green-50"
  };

  return (
    <div
      role="alert"
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

const AlertTitle = ({ children, className = "", ...props }) => {
  return (
    <h5
      className={`
        mb-1 
        font-medium 
        leading-none 
        tracking-tight
        ${className}
      `}
      {...props}
    >
      {children}
    </h5>
  );
};

const AlertDescription = ({ children, className = "", ...props }) => {
  return (
    <div
      className={`
        text-sm 
        text-gray-600
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export { Alert, AlertTitle, AlertDescription };