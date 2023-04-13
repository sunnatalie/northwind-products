import React, { FC } from 'react';
import FormGroupWithError from '../../FormGroupWithError/FormGroupWithError';
import Button from '../../Button/Button';
import { useForm } from 'react-hook-form';
import * as Auth from '../../../auth/authSlice'
import User from '../../../models/User';
import styles from './Register.module.scss';
import { useAppDispatch } from '../../../hooks';
import { registerAsync } from '../../../fetch/auth';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {

    const dispatch = useAppDispatch();

    const {register,handleSubmit} = useForm<User>();

    const registerHandler = async (user:User) => {
        try{
            const token = await registerAsync(user);
            console.log(token);
            dispatch(Auth.register(token));
        }catch(err){
            console.log(err);
        }
    }

    return(
        <div className={`Box ${styles.Register}`}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit(registerHandler)}>
                <FormGroupWithError>
                    <label>First Name:</label>
                    <input type="text" {...register('firstName')}/>
                </FormGroupWithError>

                <FormGroupWithError>
                    <label>Last Name:</label>
                    <input type="text" {...register('lastName')}/>
                </FormGroupWithError>

                <FormGroupWithError>
                    <label>User Name:</label>
                    <input type="text" {...register('username')}/>
                </FormGroupWithError>

                <FormGroupWithError>
                    <label>Password Name:</label>
                    <input type="password" {...register('password')}/>
                </FormGroupWithError>
    
                <Button>Register</Button>
            </form>
        </div>
    );
}


export default Register;
