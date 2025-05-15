"use client";

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({
  variant = "default",
  children,
  onClick,
  className,
  icon: Icon,
  circular = true,
  iconPosition = "left",
  ...props
}) => {
  const buttonClass = classNames(
    "px-4 py-2 font-semibold focus:outline-none transition-all flex items-center justify-center gap-2",
    {
      "bg-[var(--primary)] text-white hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)]":
        variant === "default",
      "bg-[var(--secondary)] text-gray-700 hover:bg-[var(--secondary-hover)] active:bg-[var(--secondary-active)] border border-gray-800":
        variant === "secondary",
      "bg-[var(--danger)] text-white hover:bg-[var(--danger-hover)] active:bg-[var(--danger-active)]":
        variant === "danger",
      "bg-[var(--success)] text-white hover:bg-[var(--success-hover)] active:bg-[var(--success-active)]":
        variant === "success",
      "bg-transparent text-inherit hover:bg-transparent active:bg-transparent":
        variant === "clear",
      rounded: !circular,
      "!rounded-full": circular,
      "!p-2": circular && !children,
    },
    className
  );

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      {...props}
    >
      {iconPosition === "left" && Icon && (
        <Icon className="w-5 h-5" aria-hidden="true" />
      )}
      {children}
      {iconPosition === "right" && Icon && (
        <Icon className="w-5 h-5" aria-hidden="true" />
      )}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "default",
    "secondary",
    "danger",
    "success",
    "clear",
  ]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.elementType,
  circular: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export default Button;
