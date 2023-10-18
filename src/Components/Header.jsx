import {Link, useNavigate} from "react-router-dom";
import styles from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { password, resetForm, message, username } from "../ReducersSlice/FormSlice";

function Header(){
  return(
     <div className={styles.header}>
          <div className={styles.headerText}>
            <p>12th Year Anniversary.<Link to="https://www.eziline.com/">Eziline Software House</Link>  has completed 12 years of working with 7262 clients. Thanks all for your unconditional support.</p>
          </div>
          <div className={styles.loginCont}>
             <Login />
          </div>
     </div>
  )
}
export default Header

function Login(){
    const navigate=useNavigate();
    const form =useSelector((state)=> state.formdata)
    const dispatch=useDispatch();
  
    const showMessage=()=>{
    dispatch(message("Successfully Login"));
    dispatch(resetForm()); 
      setTimeout(() => {
            dispatch(message(""));
              navigate("/shop");
        }, 3000);
    }

    function handleSubmit(e){
       e.preventDefault();
       showMessage();

    }
  return(
    <div className={styles.login}>
        <div className={styles.loginText}>
            <i className="fi fi-rs-users"></i>
            <Link to=""><span>Login</span>/ <span>SignUp</span></Link>
        </div>
        <div className={styles.loginForm}>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" required value={form.username} onChange={(e)=>dispatch(username(e.target.value))}/>
                <label>Password</label>
                <input type="password" required value={form.password} onChange={(e)=>dispatch(password(e.target.value))} />
                <button className={styles.btn}>Login</button>
            </form>
            <p className={styles.message}>{form.message}</p>
            <Link className={styles.forgot} to="/forgotPassword">Forgot Your Password?</Link>
        </div>
    </div>
  )
} 