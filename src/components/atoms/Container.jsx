"use client";
import classNames from "classnames";

const Container = ({ className, children }) => {
  const containerClass = classNames(
    "max-w-3xl rounded-lg shadow-lg bg-white rounded mx-auto my-16 px-4 py-6",
    className
  );
  return <div className={containerClass}>{children}</div>;
};

export default Container;
