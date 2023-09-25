import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<{
    id: string;
    informations?: any;
  }>({ id: "" });
  function ShowModal(modalName: string, informations: any) {
    setModalState({ id: modalName, informations });
  }

  function GetModalInformations() {
    return modalState;
  }

  function HideModal() {
    setModalState({ id: "" });
  }

  return (
    <ModalContext.Provider
      value={{
        ShowModal,
        GetModalInformations,
        HideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function ModalFullContext() {
  const context = useContext(ModalContext);
  return context as any;
}
