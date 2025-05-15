"use client";
import React from "react";
import Button from "../atoms/Button";
import { useToast } from "../contexts/Toast";

const LeadIn = ({ bgColor, bgImage, enableShare = true, title }) => {
  const { addToast } = useToast();
  const handleShareClick = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        addToast("URL copied to clipboard!", "success");
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

  const backgroundStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div
      className={`p-6 sm:p-12 mb-4 w-full ${bgColor}`}
      style={backgroundStyle}
    >
      <h1 className="text-4xl font-bold tracking-tighter">{title}</h1>
      {enableShare && (
        <Button className="my-6" onClick={handleShareClick}>
          Share
        </Button>
      )}
    </div>
  );
};

export default LeadIn;
