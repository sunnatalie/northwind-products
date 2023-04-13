import React, { FC, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Product from '../../../models/Product';
import Input from '../../HomeArea/Input/Input';
import validation from './validation';
import styles from './EditProduct.module.scss';
import FormGroupWithError from '../../FormGroupWithError/FormGroupWithError';
import Button from '../../Button/Button';
import Modal from '../../Modal/Modal';
import { productSlice } from '../productsSlice';
import { updateProduct } from '../productsSlice';
import { updateProduct as updateProductAsync } from '../../../utils/fetch';
import { useAppDispatch } from '../../../hooks';

interface EditProductProps { 
    onClose:() => void;
    // onEditProduct:(product:Product) => void;
    product:Product;
}

//curring

const EditProduct: FC<EditProductProps> = ({onClose, product}) => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState, setValue } = useForm<Product>();

    const submitProductHandler = (product: Product) => {
        updateProductAsync(product).then(response => {
            dispatch(updateProduct(product));
            onClose();
        }).catch(err => {
            console.log(err)
        })
    }

    console.log(product);

    useEffect(() => {
        setValue("id",product.id);
        setValue("name",product.name);
        setValue("price",product.price);
        setValue("stock",product.stock);
    },[]);

    console.log(formState.errors.name?.message); // have to add question mark in order to state that the error may not appear at all in the .message. if the name is adequate, then undefined is returned

    return (
        
        <Modal onClose={onClose}>
            <div className={styles.Edit}>
                <h2>Edit Product</h2>
                <form onSubmit={handleSubmit(submitProductHandler)} >

                    <input type="hidden" {...register("id")}/>

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

                    <Button>Edit</Button>

                </form>

            </div>
        </Modal>
    )
}



export default EditProduct;







