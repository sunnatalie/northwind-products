import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Product from '../../../models/Product';
import AddProduct from '../AddProduct/AddProduct';
import ProductItem from './ProductItem/ProductItem';
import styles from './Products.module.scss';


interface ProductsProps {
    products: Product[]
    onAddProduct:(product:Product) => void;
}

const Products: FC<ProductsProps> = ({ products, onAddProduct }) => {

    const [showAddProduct,setShowAddProduct] = useState(false);

    const modalToggleHandler = () => {
        setShowAddProduct((prevState) => !prevState); //truthy, falsy, or boolean as we decided in the useState(wrote false as the starting value). prev state when we start the app is false, and then we get the opposite of this state
    }


    const renderProducts = () => {
        return products.map((product) => {
            const { id } = product;
            return <ProductItem key={id} product={product} />
        });
    }

    return (
        <div className={styles.Products}>
            <NavLink onClick={modalToggleHandler} to="#"> Add new product </NavLink>
            <ul className={styles.Products__list}>
                {renderProducts()}
            </ul>
            { showAddProduct && <AddProduct onAddProduct={onAddProduct} onClose={modalToggleHandler} /> }
        </div>
    )
}




export default Products;
