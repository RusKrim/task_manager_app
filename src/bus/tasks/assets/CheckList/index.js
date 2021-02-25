import React from 'react';
import cx from 'classnames';
import styles from './styles.module.scss';
import {Checkbox} from '../';

export const CheckList = ({box, getFieldProps, value, label, className, isChecked, title= "Add more", ...props}) => {
    return (
      <>
          <Checkbox 
          {...getFieldProps('box')}
          isChecked={box}
          value={box}
          onClick={props.onClick}
          label={title} />
    </>
    )
}