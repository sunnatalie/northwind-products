import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Product from '../../../models/Product';
import ProductItem from './ProductItem/ProductItem';
import styles from './Products.module.scss';


interface ProductsProps {
    products: Product[]
}

const Products: FC<ProductsProps> = ({ products }) => {

    const renderProducts = () => {
        return products.map((product) => {
            const { id } = product;
            return <ProductItem key={id} product={product} />
        });
    }

    return (
        <div className={styles.Products}>
            <NavLink to="/products/new"> Add new product </NavLink>
            <ul className={styles.Products__list}>
                {renderProducts()}
            </ul>
        </div>
    )
}




export default Products;
