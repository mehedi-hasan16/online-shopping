import Product from "../components/Products-data/products.json";
import { getShoppingCart } from "../fakedb";
const cartProductLoader = () =>{
    const storedCart = getShoppingCart();
    const savedCart= [];
    for (const id in storedCart){
        const addProduct = Product.find(pd=>pd.id ===id);
        if(addProduct){
            const quantity = storedCart[id];
            addProduct.quantity= quantity;
            savedCart.push(addProduct)
        }
        
    }
    return savedCart;
}

export default cartProductLoader;