import { useDispatch } from "react-redux";

import { taskActions } from "../../actions";

export const useCreateTask = () => {
  const dispatch = useDispatch();

  const saveTask = (task) => {
    if (!task.hash) {
      dispatch(taskActions.createTask(task));
    }
  };

  return {
    saveTask,
  };
};
