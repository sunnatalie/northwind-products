interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    imageName: string;
    image: FileList; //filelist is an interface
}

export default Product;