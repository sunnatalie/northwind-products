import React, { FC } from 'react';
import { useForm } from "react-hook-form";
import Product from '../models/Product';
import Input from '../../HomeArea/Input/Input';
import validation from './validation';
import styles from './AddProduct.module.scss';
import FormGroupWithError from '../../FormGroupWithError/FormGroupWithError';
import Button from '../../Button/Button';
import { useAppDispatch } from '../../../hooks';
import { addProduct } from '../productsSlice';
import Modal from '../../Modal/Modal';
import { addProduct as addProductAsync } from '../../../utils/fetch';

interface AddProductProps { 
    onClose:() => void;
    // onAddProduct:(product:Product) => void;
}

//curring

const AddProduct: FC<AddProductProps> = ({onClose}) => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState } = useForm<Product>();

    const submitProductHandler = (product: Product) => {
        addProductAsync(product).then((_product) => {
            // onAddProduct(_product);
            dispatch(addProduct(product));
            onClose();
        }).catch((err) => {
        console.log(err);
        });
    }

    console.log(formState.errors.name?.message); // have to add question mark in order to state that the error may not appear at all in the .message. if the name is adequate, then undefined is returned

    return (
        
        <Modal onClose={onClose}>
            <div className={styles.AddProduct}>
                <h2>Add Product</h2>
                <form onSubmit={handleSubmit(submitProductHandler)} >

                    <FormGroupWithError error={formState.errors.name?.message}>
                        <label>Name:</label>
                        <input type="text" {...register('name',validation.name)} />
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







