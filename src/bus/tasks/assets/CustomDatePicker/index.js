import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import styles from './styles.module.scss';
// import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.scss';

export const CustomDatePicker = ({label, setFieldValue, placeholder, ...rest}) => {
    const handleChange = (value) => {
        setFieldValue('deadline',
        moment(value).endOf('day').format());
    };
    const selectedDay = moment(rest.value)
    .endOf('day')
    .toDate();
    const today = moment().endOf('day').toDate();
    const value = rest.value && selectedDay;
    
    return (
        <div className={styles.deadline}>
            <span className={styles.label}>Due to</span>
            <span className={styles.date}>
                <DatePicker value={value}
                minDate={today}
                selected={value || null}
                onChange={handleChange}
                dateFormat="MMMM d, yyyy"
                placeholderText={placeholder}
                />
            </span>
        </div>
    )
}