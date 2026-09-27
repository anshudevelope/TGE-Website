"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LeadModalContextType {
  isOpen: boolean;
  openModal: (defaultQueryType?: string) => void;
  closeModal: () => void;
  selectedQueryType: string;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(
  undefined
);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQueryType, setSelectedQueryType] = useState("Want to Buy - Plot");

  const openModal = (defaultQueryType = "Want to Buy - Plot") => {
    setSelectedQueryType(defaultQueryType);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <LeadModalContext.Provider
      value={{ isOpen, openModal, closeModal, selectedQueryType }}
    >
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}