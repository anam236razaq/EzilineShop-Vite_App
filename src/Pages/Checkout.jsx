import { address, lastname, message, phoneNo, resetCheckoutForm, username } from "../ReducersSlice/FormSlice";
import styles from "./Checkout.module.css";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { clearCart } from "../ReducersSlice/CartSlice";

function Order(){
    const form=useSelector((state)=>state.formdata);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const showMessage=()=>{
       dispatch(message("Your order has been placed"));
       dispatch(resetCheckoutForm());
       setTimeout(()=>{
        dispatch(message(""));
          navigate("/shop");
          dispatch(clearCart());
       }, 3000);
    }

    function handleSubmit(e){
        e.preventDefault();
        showMessage();
    }
    return(
        <div className={styles.checkout}>
          <h3>Checkout</h3>
          <div>
          <h4>Shipping Address</h4>
          <form className={styles.checkoutForm} onSubmit={handleSubmit}>
             <input type="text" placeholder="First name" required value={form.username} onChange={(e)=>dispatch(username(e.target.value))}/>
             <input type="text" placeholder="Last Name" required value={form.lastname} onChange={(e)=>dispatch(lastname(e.target.value))}/>
             <input type="text" placeholder="Full address" required  value={form.address} onChange={(e)=>dispatch(address(e.target.value))}/>
             <input type="text" placeholder="Phone" required value={form.phoneNo} onChange={(e)=>dispatch(phoneNo(e.target.value))}/>
             <button className={styles.btn}>Order Now</button>
          </form>
          <div className={styles.message}>{form.message}</div>
          </div>
        </div>
    )
}
export default Order
