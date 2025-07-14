import React from 'react';
import { ButtonProps } from '../interfaces/index';

const Button: React.FC<ButtonProps> = ({
  title,
  size = 'medium',
  shape = 'md',
  variant = 'primary',
  className = '',
  onClick,
}) => {
  // Size classes
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  // Shape classes
  const shapeClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    full: 'rounded-full',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  return (
    <button
      className={`font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
        ${sizeClasses[size]} 
        ${shapeClasses[shape]} 
        ${variantClasses[variant]} 
        ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;