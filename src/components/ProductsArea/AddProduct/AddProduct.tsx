import React, { FC, useEffect, useState, useRef } from 'react';
import { useForm } from "react-hook-form";
import Product from '../../../models/Product';
import Input from '../../HomeArea/Input/Input';
import validation from './validation';
import styles from './AddProduct.module.scss';
import FormGroupWithError from '../../FormGroupWithError/FormGroupWithError';
import Button from '../../Button/Button';
import { useAppDispatch } from '../../../hooks';
import { addProduct } from '../productsSlice';
import Modal from '../../Modal/Modal';
import { addProduct as addProductAsync } from '../../../utils/fetch';
import Alert from '../../Alert/Alert';

type User = {
    name: string;
    age: number;
}

interface AddProductProps { 
    onClose: () => void;
    // onAddProduct:(product:Product) => void;
}

//curring

const AddProduct: FC<AddProductProps> = ({onClose}) => {
    const dispatch = useAppDispatch();
    const [user, setUser] = useState({
        name: 'yogev',
        age: 35
    })
    const { register, handleSubmit, formState } = useForm<Product>();
    const [error, setError] = useState<any>(null);
    const [showError, setShowError] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null); //always returns field with the name current. Current does not refresh when the component refreshes
    const prevStateRef = useRef<User>(user);
    let prevStateWithoutRef: User = user;

    const submitProductHandler = (product: Product) => {
        addProductAsync(product).then((_product) => {
            // onAddProduct(_product);
            dispatch(addProduct(product));
            onClose();
        }).catch((err) => {
            setShowError(true);
            setError(err);
            // console.log(err);
        });
    }


    // useEffect(() => {
    //     prevStateRef.current = user;
        
    // },[])

    console.log('prevStateRef',prevStateRef)
    console.log('prevStateWithourRef',prevStateWithoutRef)

    useEffect(() => {

        if(inputRef.current){
            inputRef.current.focus();
        }
        console.log('use effect', inputRef)
    }, []);

    // useEffect(() => {

    //     const input = document.getElementById('input1');
    //     console.log(input);
    //     if (input){
    //         input.focus();
    //     }
    //     console.log('useEffectttt')
    // },[]);

    console.log('add product component render', inputRef)

    console.log(error);

    console.log(formState.errors.name?.message); // have to add question mark in order to state that the error may not appear at all in the .message. if the name is adequate, then undefined is returned

    return (
        
        <Modal onClose={onClose}>
            {error && showError && 
                <Alert error={'it seems that you are trying to do something...'} onClose={() => setShowError(false)}>
                    <button onClick={() => {
                        window.location.reload();
                    }}>refresh</button>
                </Alert>}
            <div className={styles.AddProduct}>
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit(submitProductHandler)} >

                    <label htmlFor="">Focus</label>
                    <input type="text" ref={inputRef}/>
                    <button onClick={() => {
                        setUser({
                            name: 'Johney',
                            age: 20
                        })
                    }}>user</button>

                    <FormGroupWithError error={formState.errors.name?.message}>
                        <label>Name:</label>
                        <input id="input1" type="text" {...register('name',validation.name)} />
                    </FormGroupWithError>

                    <FormGroupWithError error={formState.errors.price?.message}>
                        <label>Price:</label>
                        <input type="number" {...register('price',validation.price)} />
                    </FormGroupWithError>

                    <FormGroupWithError error={formState.errors.stock?.message}>
                        <label>Stock:</label>
                        <input type="number" {...register('stock',validation.stock)} />
                    </FormGroupWithError>

                    <FormGroupWithError error={formState.errors.image?.message}>
                        <label>Image:</label>
                        <input type="file" accept="image/" {...register('image')} />
                    </FormGroupWithError>

                    <Button>Add</Button>

                </form>

            </div>
        </Modal>
    )
}



export default AddProduct;







