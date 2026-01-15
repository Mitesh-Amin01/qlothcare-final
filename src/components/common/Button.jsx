import React from 'react';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className = '',
  disabled,
  ...props
}) => {
  
  // Base transition and shape logic
  const baseStyles = "inline-flex items-center cursor-pointer justify-center font-bold transition-all duration-200 rounded-xl active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed";

  // ClothCare Theme Variants
  const variants = {
    primary: "bg-[#E46F33] text-white hover:bg-[#CC5F2B] shadow-lg shadow-[#E46F33]/20",
    outline: "border-2 border-[#D1D3CF] text-[#3C4249] hover:border-[#E46F33] hover:text-[#E46F33]",
    dark: "bg-[#2F343A] text-white hover:bg-[#3C4249]",
    ghost: "text-[#778582] hover:bg-[#D1D3CF]/20",
  };

  // Sizing scale
  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
    xl: "px-10 py-5 text-xl gap-3 rounded-2xl"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        // Spinner for loading states
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <>
          {LeftIcon && <LeftIcon size={size === 'sm' ? 16 : 22} />}
          {children}
          {RightIcon && <RightIcon size={size === 'sm' ? 16 : 22} />}
        </>
      )}
    </button>
  );
};

export default Button;