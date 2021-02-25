import moment from 'moment';

export const initialTaskValues = {
    taskTitle: "",
    description: "",
    checklist: [],
    tag: "",
    deadline: moment().endOf('day').format(),
    completed: false
  }