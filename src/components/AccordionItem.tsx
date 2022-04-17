import { ReactNode } from "react";
import styles from "./AccordionItem.module.css";
import clsx from "clsx";

export interface AccordionItemProps {
  children: ReactNode;
}

export const AccordionItem = ({ children }: AccordionItemProps) => {
  const rootClasses = clsx(styles["root"], styles["active"]);

  return <div className={rootClasses}>{children}</div>;
};
