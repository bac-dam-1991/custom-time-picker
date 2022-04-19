import { cloneElement, ReactElement } from "react";

export interface FieldProps {
  children: ReactElement;
}

export const Field = ({ children }: FieldProps) => {
  return cloneElement(children, { ...children.props });
};
