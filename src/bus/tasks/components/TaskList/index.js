import React from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { Task } from "../Task";
import { useTaskFetch } from "../../hooks";
import moment from "moment/moment";
import image from "../../../../images/illustration.png";
import cx from "classnames";

export const TaskList = ({ isOpenned }) => {
  const listCn = cx(styles.taskList, {
    [styles.normal]: isOpenned === true,
    [styles.full]: isOpenned === false,
  });
  const { isFetching, error } = useTaskFetch();
  const emptyTasksResponse = <img src={image} alt="Empty Tasks"></img>;
  const { dataArray } = useSelector((state) => state.taskList);
  const loader = isFetching && <p>Loading data from API...</p>;
  const errorMessage = error.status === 404 && <p>Not found!</p>;
  const taskListJSX = dataArray.map((task) => {
    return (
      <Task
        key={task.hash}
        deadline={moment(task.deadline).format("DD MMM YYYY")}
        title={task.title}
        isChecked={task.completed}
        tag={task.tag}
      />
    );
  });

  return (
    <div className={listCn}>
      {loader}
      {errorMessage}
      {isFetching || dataArray.length ? (
        dataArray.map((task) => {
          return (
            <Task
              key={task.hash}
              deadline={moment(task.deadline).format("DD MMM YYYY")}
              title={task.title}
              isChecked={task.completed}
              tag={task.tag}
            />
          );
        })
      ) : (
        <>
          {emptyTasksResponse}
          <h1>No2 tasks found!?</h1>
          <p>
            Try to assign more tasks to your employees or create a new project
            from scratch
          </p>
        </>
      )}
    </div>
  );
};
