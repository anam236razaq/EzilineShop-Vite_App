import { useSelector } from 'react-redux';
import { getTotalCartPrice, getTotalCartQuantity } from "../ReducersSlice/CartSlice";
import styles from "./CartOverview.module.css";
import {Link} from "react-router-dom";

function Cart(){
    const totalCartQuantity=useSelector(getTotalCartQuantity);
    const totalPrice=useSelector(getTotalCartPrice);

return(
    <div className={styles.cart}>
            <i className="fi fi-rs-shopping-cart"></i>
        <Link to="/cart">
            <span>{totalCartQuantity} items -</span>
            <span className={styles.cartPrice}>Rs{totalPrice.toFixed(2)}</span>
        </Link>
    </div>
)
}
export default Cart