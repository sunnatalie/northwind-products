import React, { FC, useEffect, useState } from 'react';
import Product from '../../models/Product';
import { getProducts } from '../../utils/fetch';
import Loader from '../Loader/Loader';
import Products from './Products/Products';
import styles from './ProductsArea.module.scss';

interface ProductsAreaProps { 

}

const ProductsArea: FC<ProductsAreaProps> = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        setIsLoading(true);

        getProducts().then((products) => {
            setProducts(products)

        }).catch((err) => {

            console.log(err.message)
        }).finally(() => {
            setIsLoading(false);
        });


    }, []);

    const addProductHandler = (product:Product) => {
        setProducts((prevProducts) => {
            // never mutate the state directly!!!
            const productsToUpdate = [...prevProducts];
            productsToUpdate.push(product);

            return productsToUpdate;
        });
    }


    if (isLoading) {
        return (
            <div className={styles.ProductsArea__loaderContainer}>
                <Loader />
            </div>
        )
    }

    return (
        <div className={styles.ProductsArea}>
            <Products onAddProduct={addProductHandler} products={products} />
        </div>
    )
}






export default ProductsArea;
