import axios from '../axios';
import Product from '../models/Product';
// import { BASE_API_URL } from '../config';



export const getProducts = async (): Promise<Product[]> => {
    //ajax request
    const response = await axios.get<Product[]>(`/products`); //don't need baseAPIURL because we are getting it from axios

    //extract products

    const products = response.data;

    // return products;

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(products)
        }, 2000);


    });

}

export const getProduct = async (id: number): Promise<Product> => {

    //ajax req
    const response = await axios.get(`/products/${id}`);
    const product = response.data;

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(product)
        }, 1500);
    });

}

    // REST API methods

    // GET - get data/resource from the server
    // POST - add new data to the server
    // PUT - update full data in the server
    // PATCH - update partial data in the server - update one or a few properties
    // DELETE - delete data from the server

export const addProduct = async (product:Product):Promise<Product> => {
        
    // AJAX request - sending a new product to the server / receiving back the added product

    // we want to work with files

    const formData = new FormData(); //can contain string and/or files

    formData.append('name',product.name)
    formData.append('price',product.price.toString()) //cannot stringify a number, so we tack on toString
    formData.append('stock',product.stock.toString())
    formData.append('image',product.image[0]) //image = filelist[0] = File / Blob (big like object binary)

    const response = await axios.post<Product>(`/products/`,formData);

    const addedProduct = response.data;

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(addedProduct)
        }, 1500);
    });
}

export const updateProduct = async (product:Product):Promise<Product> => {

    const formData = new FormData();

    formData.append('name',product.name)
    formData.append('price',product.price.toString()) 
    formData.append('stock',product.stock.toString())
    formData.append('image',product.image[0]) 

    const response = await axios.put<Product>(`/products/${product.id}`,formData);

    const updatedProduct = response.data;

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(updatedProduct)
        }, 1500);
    });
}

export const deleteProduct = async (id:number):Promise<boolean> => {
    await axios.delete(`/products/${id}`);

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(true)
        }, 1500);
    });
}