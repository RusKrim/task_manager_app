import React from "react";
import { TaskList, TaskForm } from "./components";
import { NewTaskButton } from "./assets/NewTaskButton";
import styles from "./styles.module.scss";
import { useToggleForm } from "./hooks";

export const TasksMainComponent = () => {
  const { toggle, isFormOpenned } = useToggleForm();
  return (
    <>
      <div className={`${styles.container} ${styles.wrap}`}>
        <NewTaskButton
          onClick={toggle}
          buttonLabel={isFormOpenned ? "Close" : "Create New Task"}
        />
        <div className={styles.row}>
          <TaskList isOpenned={isFormOpenned} />
          <TaskForm isOpenned={isFormOpenned} />
        </div>
      </div>
    </>
  );
};
