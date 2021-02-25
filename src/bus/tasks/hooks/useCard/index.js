import {useFormik} from 'formik';
import {validationSchema} from '../../components/TaskForm/YupValidation';
import {initialTaskValues} from './initialTaskValues';
import moment from 'moment';

export const useCard = () => {
    const {
        getFieldProps,
        resetForm,
        setValues,
        values,
        setFieldValue,
        errors,
        dirty,
        isValid
    } = useFormik({
        initialValues: initialTaskValues,
        enableReinitialize: true,
        validationSchema: validationSchema
    });

    const initTaskData = {
        completed: false,
        title: null,
        description: null,
        tag: null,
        checklist: [],
        deadline: moment().
    }
}