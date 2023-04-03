import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import { BASE_API_URL } from '../../../config';
import Product from '../models/Product';
import { deleteProduct as deleteProductAsync, getProduct } from '../../../utils/fetch';
import Loader from '../../Loader/Loader';
import EditProduct from '../EditProduct/EditProduct';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { setProduct } from '../productsSlice';
import { deleteProduct} from '../productsSlice';
import styles from './ProductDetails.module.scss';

interface ProductDetailsProps { }

const ProductDetails: FC<ProductDetailsProps> = () => {
    const dispatch = useAppDispatch();
    const [showEditProduct, setShowEditProduct] = useState(false);
    const params = useParams();
    const navigate = useNavigate();
    const { product } = useAppSelector((state) => state.productsState);
    // const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);

    const modalToggleHandler = () => {
        setShowEditProduct((prevState) => !prevState);
    }

    // const editProductHandler = (product:Product) => {
    //     // setProduct((prevProduct) => {
    //     //     const updatedProduct = {...prevProduct,...product} //spread operator on both just in case
    //     //     return updatedProduct;
    //     // })
    // }

    const deleteProductHandler = async () => {
        if(params.prodId){
            const productId = +params.prodId;
            setLoading(true);
            try{
                const success = await deleteProductAsync(+params.prodId);
                if(success){
                    alert('the product was deleted')
                    dispatch(deleteProduct(productId));
                    navigate('/products')
                }
            }catch(err){
                console.log('delete error',err)
            }finally{

            }
        }
    }

    useEffect(() => {
        if (params.prodId) {

            getProduct(+params.prodId).then((product) => {

                dispatch(setProduct(product));

                // setProduct(product);

            }).catch((err) => {
                console.log(err);

            }).finally(() => {
                setLoading(false);
            })

        }
    }, []);

    const renderProduct = () => {
        if (product) {
            const imgSrc = `${BASE_API_URL}/products/images/${product.imageName}`;

            return (
                <div className={styles.ProductDetails__product}>
                    <div className={styles.ProductDetails__imgContainer}>
                        <img src={imgSrc} />
                    </div>

                    <div className={styles.ProductDetails__content}>
                        <h3>Name:{product.name}</h3>
                        <h3>Price:{product.price}</h3>
                        <h3>Stock:{product.stock}</h3>
                        <NavLink to="/products">Back</NavLink>
                        <span>|</span>
                        <NavLink onClick={modalToggleHandler} to="#">Edit</NavLink>
                        <span>|</span>
                        <NavLink onClick={deleteProductHandler} to="#">Delete</NavLink>
                    </div>

                </div>
            )



        }
    }


    if (loading) return <Loader />

    return (
        <div className={styles.ProductDetails}>
            <header className={styles.ProductDetails__header}>
                {/* <h2>Product Details</h2> */}
            </header>

            <div className={styles.ProductDetails__body}>
                {renderProduct()}
            </div>
            {(showEditProduct && product) && <EditProduct onClose={modalToggleHandler} product={product}/>}

        </div>
    )
}



export default ProductDetails;
