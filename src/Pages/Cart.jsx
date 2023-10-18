import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";
import styles from "./Cart.module.css";
import {useSelector, useDispatch} from "react-redux"
import { getCart, clearCart, deleteItem, getCurrentQuantityById, increaseItemQuantity, decreaseItemQuantity, getTotalCartPrice } from "../ReducersSlice/CartSlice";
import {Link} from "react-router-dom";

function Cart(){
   return(
    <>
    <Header />
    <NavBar />
    <CartItems />
    <Footer />
    <CopyRight />
    </>
   )
}
export default Cart

function CartItems(){
   const totalPrice=useSelector(getTotalCartPrice);
    const cart=useSelector(getCart);
    const dispatch=useDispatch();
    if(!cart.length) return <EmptyCart />

   return(
    <>
      <hr />
      <div className={styles.cart}>
         <Link to="/shop">&larr; Back to Shop</Link>
         <p>Your Cart,</p>
         <ul>
            {cart.map((item)=>(
                <div className={styles.productDetails} key={item.productId}>
                  <div  className={styles.productImg}>
                    <img src={item.image} alt="Image" />
                    <h4>{item.name}</h4>
                  </div>
                  <div className={styles.productPrice}>
                    <h5>Rs{item.totalPrice}</h5>
                    <UpdateItemQuantity productId={item.productId} dispatch={dispatch}/>
                    <button className={styles.deleteBtn}  onClick={()=>dispatch(deleteItem(item.productId))}>
                      <i className="fi fi-rs-trash"></i></button>
                  </div>
                </div>
            ))}
         </ul>
         <div className={styles.cartTotal}>
         <div className={styles.btns}>
            <Link to="/checkout">Checkout</Link>
            <button className={styles.clearBtn} onClick={()=>dispatch(clearCart())}>Clear Cart</button>
         </div>
         <div className={styles.totalPrice}>
            <h4>Subtotal: &nbsp;</h4>
            <h5>Rs{totalPrice}</h5>
         </div>
      </div>
      </div>
    </>
   )
}

function UpdateItemQuantity({productId, dispatch}){
     const currentQuantity=useSelector(getCurrentQuantityById(productId));

     return(
        <div className={styles.updateQuantity}>
            <button className={styles.inQuantityBtn} onClick={()=>dispatch(decreaseItemQuantity(productId))}>-</button>
            <span>{currentQuantity}</span>
            <button   className={styles.decQuantityBtn} onClick={()=>dispatch(increaseItemQuantity(productId))}>+</button>
        </div>
     )
}


function EmptyCart(){
    return(
        <div className={styles.cart}>
            <Link to="/shop" >&larr; Back to Shop</Link>
            <p>Your cart is still empty, Start adding some products.</p>
        </div>
    )
}