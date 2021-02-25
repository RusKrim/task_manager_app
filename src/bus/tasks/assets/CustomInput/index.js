import React from 'react';

export const CustomInput = (props) => {
    const {
        name,
        type,
        placeholder,
        cx,
        value,
        onChange,
    } = props;

    const inputValue = value || '';

    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            className={cx}
            value={inputValue}
            onChange={onChange}
        />
    );
};