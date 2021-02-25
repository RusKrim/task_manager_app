import * as Yup from "yup";
import {availableTags} from '../../availableTags';

export const validationSchema = Yup.object().shape({
  taskTitle: Yup.string().max(70, "Слишком длинное название").required("Обязательно!"),
  deadline: Yup.date().required("Обязательно для заполнения").nullable(),
  box: Yup.boolean(),
  tag: Yup.mixed()
  .oneOf(availableTags, 'Tag type is invalid')
  .required('Task tag field is required'),
  checklist: Yup.array()
        .of(
            Yup.object().shape({
                title: Yup.string()
                    .min(3, 'Sub-task title is too short')
                    .required('Sub-task title field is required'),
            })
        )
        .required(`Task doesn't contain any sub-tasks`)
});
