import { ReactNode } from "react";
import styles from "./AccordionSummary.module.css";

export interface AccordionSummaryProps {
  children: ReactNode;
}

export const AccordionSummary = ({ children }: AccordionSummaryProps) => {
  return <div className={styles["root"]}>{children}</div>;
};
