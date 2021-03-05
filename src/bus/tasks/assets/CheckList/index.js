import React from "react";
import cx from "classnames";
import styles from "./styles.module.scss";
import { Checkbox, InputField } from "../";

export const CheckList = ({
  box,
  getFieldProps,
  value,
  label,
  className,
  isChecked,
  title,
  ...props
}) => {
  return (
    <>
      <Checkbox
        {...getFieldProps("box")}
        isChecked={box}
        value={box}
        onClick={props.onClick}
      />
    </>
  );
};
