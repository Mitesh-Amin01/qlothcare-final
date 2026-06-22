import React from "react";

const Button = ({
  children,
  icon: Icon,
  iconPosition = "right",
  iconClassName = "",
  iconWrapperClassName = "",
  iconSize,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-clothcare-primary text-text-primary hover:bg-clothcare-primaryDark shadow-clothcareSoft",
    secondary:
      "bg-clothcare-darker text-text-primary hover:bg-clothcare-primaryDark",
    outline:
      "border border-border-accent text-text-accent hover:bg-clothcare-primary/10",
    ghost:
      "text-text-accent hover:bg-clothcare-primary/10",
    danger:
      "bg-status-danger text-text-primary hover:opacity-90",
    special:
      "bg-clothcare-primary text-text-primary hover:bg-clothcare-primaryDark shadow-clothcareSoft pr-2 rounded-full",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5 text-sm",
    lg: "h-12 px-6 text-base",
  };

  const isSpecial = variant === "special";

  const renderIcon = () => {
    if (!Icon || loading) return null;

    if (isSpecial) {
      return (
        <div
          className={`
            flex items-center justify-center rounded-full
            h-7 w-7 shrink-0
            ${iconWrapperClassName}
          `}
        >
          <Icon size={iconSize ?? 16} className={iconClassName} />
        </div>
      );
    }

    return (
      <span className={`inline-flex ${iconWrapperClassName}`}>
        <Icon size={iconSize ?? 18} className={iconClassName} />
      </span>
    );
  };

 
  return (
    <button
      disabled={disabled || loading}
      className={`
        group inline-flex items-center justify-center gap-2 cursor-pointer
         font-medium transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {Icon && iconPosition === "left" && renderIcon()}

      {loading && (
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      )}

      <span>{children}</span>

      {Icon && iconPosition === "right" && renderIcon()}
    </button>
  );
};

export default Button;