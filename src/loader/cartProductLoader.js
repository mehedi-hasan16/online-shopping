import { getShoppingCart } from "../fakedb";
const cartProductLoader = async() =>{
    const loadedProducts = await fetch('http://localhost:5000/products');
    const products = await loadedProducts.json();


    const storedCart = getShoppingCart();
    const savedCart= [];
    for (const id in storedCart){
        const addProduct = products.find(pd=>pd._id ===id);
        if(addProduct){
            const quantity = storedCart[id];
            addProduct.quantity= quantity;
            savedCart.push(addProduct)
        }
        
    }
    return savedCart;
}

export default cartProductLoader;