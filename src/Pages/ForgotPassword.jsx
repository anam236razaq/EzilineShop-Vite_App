import CopyRight from "../Components/CopyRight"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import NavBar from "../Components/NavBar"
import styles from "./ForgotPassword.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { email, message, resetEmail} from "../ReducersSlice/FormSlice";


function ForgotPassword(){
  return(
    <>
      <Header />
      <NavBar />
      <ForgotPswd />
      <Footer />
      <CopyRight />
    </>
  )
}
export default ForgotPassword

function ForgotPswd(){
    const form=useSelector((state)=>state.formdata);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const showMessage=()=>{
        dispatch(message("We have sent you an email. Check your MailBox."));
        dispatch(resetEmail());
        setTimeout(()=>{
            dispatch(message(""));
              navigate("/");
        }, 3000)
    }

    function handleSubmit(e){
      e.preventDefault();
      showMessage();
    }

    return(
        <>
        <hr />
        <div className={styles.forgot}>
           <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
           <form className={styles.forgotForm} onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" required  value={form.email} onChange={(e)=>dispatch(email(e.target.value))}/>
            <button>Reset Password</button>
           </form>
           <div className={styles.message}>{form.message}</div>
           <p>There are many benefits of employing essayists. They’re capable of studying your subject matter and collecting relevant sources. They also can draw compelling conclusion. After gathering all the relevant information, you can begin writing your essay. A draft is produced that contains the essay’s introduction, body, and final. This draft is proofread and edited in order to <Link to="https://asianmoviepulse.com/2021/11/surviving-college-freshman-year-useful-lifestyle-tips-and-tricks/">https://asianmoviepulse.com/2021/11/surviving-college-freshman-year-useful-lifestyle-tips-and-tricks/</Link> incorporate the thesis and other important parts. After that, the paper is checked for plagiarism for quality and uniqueness. Those who need urgent assistance with their essay should think about hiring an essay expert.</p>
        </div>
     </>
    )
}