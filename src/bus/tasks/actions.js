import { types } from "./types";
import { api } from "../../api";

export const taskActions = Object.freeze({
  selectTask: (payload) => {
    return {
      type: types.TASK_SELECT,
      payload,
    };
  },
  fill: (payload) => {
    return {
      type: types.TASK_FILL,
      payload,
    };
  },
  toggleForm: (payload) => {
    return {
      type: types.TASK_TOGGLE_FORM,
      payload,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.TASK_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },
  startFetching: () => {
    return {
      type: types.TASK_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.TASK_STOP_FETCHING,
    };
  },

  //Async
  fetchAsync: () => async (dispatch) => {
    dispatch({
      type: types.TASK_FETCH_ASYNC,
    });

    dispatch(taskActions.startFetching());

    try {
      const response = await api.todo.fetch();
      if (response.status === 200) {
        const result = await response.json();
        dispatch(taskActions.fill(result));
      }
    } catch (error) {
      dispatch(taskActions.setFetchingError(error));
    }

    dispatch(taskActions.stopFetching());
  },

  //Tasks

  createTask: (payload) => async (dispatch) => {
    dispatch({
      type: types.TASK_CREATE,
      payload,
    });
    dispatch(taskActions.fetchAsync());
    // const response = await api.todo.create(payload);
    // if(response.status === 201) {
    // batch(() => {
    //   dispatch(taskActions.createTask());
    //   dispatch(taskActions.fetchAsync());
    // })
    // } else {
    //   const error ={
    //     status: response.status
    //   }
    // dispatch(taskActions.setFetchingError(error));
    // }
    // dispatch(taskActions.stopFetching());
  },
});
