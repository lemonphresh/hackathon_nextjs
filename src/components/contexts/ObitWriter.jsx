"use client";
import React, { createContext, useState, useContext } from "react";

const ObitWriterContext = createContext();

export const ObitWriterProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfDeath: "",
    obituary: "",
    age: "",
    stateOfDeath: "",
    cityOfDeath: "",
    countryOfDeath: "",
    hasService: "",
  });

  const updateFormData = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <ObitWriterContext.Provider value={{ formData, updateFormData }}>
      {children}
    </ObitWriterContext.Provider>
  );
};

export const useObitWriter = () => {
  const context = useContext(ObitWriterContext);
  if (!context) {
    throw new Error("useObitWriter must be used within an ObitWriterProvider");
  }
  return context;
};
