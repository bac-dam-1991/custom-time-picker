import { ReactNode } from "react";
import styles from "./Accordion.module.css";
import clsx from "clsx";

export interface AccordionProps {
  children: ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
  const rootClasses = clsx(styles["root"]);

  return <div className={rootClasses}>{children}</div>;
};
