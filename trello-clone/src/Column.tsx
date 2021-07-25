import React from "react";

import { FC } from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
  text?: string;
  children?: any;
};

export const Column: FC<ColumnProps> = ({ text, children }:ColumnProps) => {
  return (
    <ColumnContainer>
      {" "}
      <ColumnTitle>{text}</ColumnTitle> {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};