import React from "react";
import styles from "./styles.module.scss";
import { Formik, Form, ErrorMessage } from "formik";
// import { useSelector } from "react-redux";
import { validationSchema } from "./YupValidation";
import "react-datepicker/dist/react-datepicker.css";
import {
  InputField,
  CustomDatePicker,
  CheckList,
  Checkbox,
  Tag,
} from "../../assets";
import { availableTags } from "../../availableTags";
import { useCheckboxToggle, useCreateTask } from "../../hooks";
import cx from "classnames";

export const TaskForm = ({ isOpenned }) => {
  const initialValues = {
    taskTitle: "",
    description: "",
    checklist: [],
    tag: "",
    deadline: "",
    completed: false,
  };
  // const isTaskIsEmpty = isObjectEmpty(task);

  const { box, toggleCheckBox } = useCheckboxToggle();
  const { saveTask } = useCreateTask();

  const submitForm = (values) => {
    saveTask(values);
    console.log(values);
  };
  const formCn = cx(styles.form, {
    [styles.editorOpened]: isOpenned === true,
    [styles.editorClosed]: isOpenned === false,
  });

  return (
    <>
      <div className={formCn}>
        <Formik
          initialValues={initialValues}
          onSubmit={submitForm}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {(props) => {
            const {
              values,
              handleChange,
              getFieldProps,
              setFieldValue,
              setValues,
            } = props;
            const { taskTitle, description, checklist, deadline } = values;

            const setTag = (tag) => {
              setFieldValue("tag", tag);
            };

            const buttonCompleteTaskCX = cx(styles.buttonComplete, {
              completed: values && values.completed,
            });

            const tagsJSX =
              availableTags &&
              availableTags.map((tag, index) => (
                <Tag
                  type={tag}
                  key={index}
                  cb={setTag}
                  selected={values && values.tag === tag}
                />
              ));

            const completeTask = () => {
              toggleCheckBox();
              setValues({
                ...values,
                completed: !values.completed,
              });
            };

            return (
              <Form>
                <div className={styles.complete}>
                  <div className={styles.completed}>
                    <Checkbox
                      {...getFieldProps("box")}
                      isChecked={box}
                      value={box}
                      onClick={completeTask}
                      label="Mark as complete"
                    />
                  </div>
                </div>
                <div className={styles.formInputs}>
                  <InputField
                    name="taskTitle"
                    type="text"
                    placeholder="Title"
                    value={taskTitle}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="taskTitle" />
                  <CustomDatePicker
                    type="text"
                    name="deadline"
                    label="Due to"
                    placeholder="Select the deadline date"
                    setFieldValue={setFieldValue}
                    {...getFieldProps("deadline")}
                  />
                  <ErrorMessage name="deadline" />
                  <InputField
                    label="Description"
                    name="description"
                    type="text"
                    placeholder="Описание"
                    value={description}
                    onChange={handleChange}
                  />
                  <CheckList
                    label="Checklist"
                    name="checklist"
                    type="text"
                    isChecked={box}
                    value={box}
                    onClick={completeTask}
                    getFieldProps={getFieldProps}
                    box={box}
                  />
                  {tagsJSX}
                  <button type="submit" className={styles.button}>
                    Создать
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
