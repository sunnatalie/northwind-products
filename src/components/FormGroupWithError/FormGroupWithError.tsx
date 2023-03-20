
import React, { FC,ReactNode } from 'react';
import styles from './FormGroupWithError.module.scss';

interface FormGroupWithErrorProps {
    children:ReactNode,
    error?: string; //error is optional
}

const FormGroupWithError: FC<FormGroupWithErrorProps> = (props) => {

    const {error,children} = props;

    return(
        <div className={styles.FormGroupWithError}>
            {/* we want the label and input to be children in the form */}
            {children}
            {error && <span className={styles.FormGroupWithError__error}>{ error }</span>}
        </div>
      );
}


export default FormGroupWithError;
