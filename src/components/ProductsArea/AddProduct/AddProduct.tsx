import React, { FC } from 'react';
import { useForm } from "react-hook-form";
import Product from '../../../models/Product';
import Input from '../../HomeArea/Input/Input';
import styles from './AddProduct.module.scss';

interface AddProductProps { }

//curring

const AddProduct: FC<AddProductProps> = () => {
    const { register, handleSubmit } = useForm<Product>();

    const submitProductHandler = (product: Product) => {
        console.log(product)
    }


    return (
        <div className={styles.AddProduct}>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(submitProductHandler)} >

                {/* <Input type="text" {...register('name')} /> */}

                <label>Name:</label>
                <input type="text" {...register('name')} />
                <br />
                <label>Price::</label>
                <input type="number" {...register('price')} />
                <br />
                <label>Stock:</label>
                <input type="number" {...register('stock')} />
                <br />
                <button>Add</button>

            </form>

        </div>
    )
}



export default AddProduct;







