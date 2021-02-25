import {useState, useCallback, useRef, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskActions } from "../../actions";

export const useToggleForm = () => {
  const firstUpdate = useRef(true);
  const {isFormOpenned} = useSelector(state=>state.taskList);
  const [isOpen, setFormOpen] = useState(isFormOpenned);
  const dispatch = useDispatch();

  const toggle = useCallback(
    () => setFormOpen(!isOpen),
    [isOpen, setFormOpen],
  );

  useEffect(() => {
    if(firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    dispatch(taskActions.toggleForm(isOpen))
  }, [isOpen, dispatch]);

  return {
    isFormOpenned: isOpen,
    toggle,
  }
}

  
