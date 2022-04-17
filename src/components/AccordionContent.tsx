import { ReactNode } from "react";
import styles from "./AccordionContent.module.css";

export interface AccordionContentProps {
  children: ReactNode;
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  return <div className={styles["root"]}>{children}</div>;
};
