import { FormEventHandler, ReactNode } from "react";

export interface FormProps {
  children: ReactNode;
}

export const Form = ({ children }: FormProps) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};
