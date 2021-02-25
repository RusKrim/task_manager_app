import React from "react";
import styles from "./styles.module.scss";
// import cx from 'classnames';
import {Checkbox, Tag} from '../../../../assets';

export const Task = ({ title, deadline, isChecked, tag}) => {
  // const [selected, setSelect] = useState(isChecked);
  // const checkboxCn = cx(styles.checkbox, {
  //   [styles.checkbox_checked]: isChecked === true,
  //   [styles.checkbox_notChecked]: isChecked === false,
  // });
  return (
    <div className={styles.task}>
      <Checkbox label={title} isChecked={isChecked} />
      <p>{deadline}</p>
      <Tag type={tag} />
    </div>
  );
};
