import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer(){
 return(
    <div className={styles.footer}>
       <div className={styles.footerCol}>
          <img className={styles.footerLogo} src="/src/assets/HomeImgs/footer-logo.png" alt="Footer-logo" />
          <p>E-Shop is presented by Eziline Software House which showcase all digital, software and hardware products with detailed documentation and free demo request.</p>
          <div className={styles.socialIcons}>
              <div className={`${styles.facebook} ${styles.icons}`}>
                 <div className={styles.toolTip}>Facebook</div>
                 <Link to="https://web.facebook.com/ezilinepk?_rdc=1&_rdr"><i className="fi fi-brands-facebook"></i></Link>
              </div>
              <div className={`${styles.twitter} ${styles.icons}`}>
                 <div className={styles.toolTip}>Twitter</div>
                   <Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Feziline"><i className="fi fi-brands-twitter"></i></Link>
              </div>
               <div className={`${styles.youtube} ${styles.icons}`}>
                 <div className={styles.toolTip}>YouTube</div>
                   <Link to="https://www.youtube.com/ezilinepk"><i className="fi fi-brands-youtube"></i></Link>
              </div>
          </div>
       </div>
       <div className={styles.footerCol}>
          <h2>Links</h2>
          <div className={styles.links}>
            <Link to="" >Most Demanded Products</Link>
            <Link to="" >Domain Registration</Link>
            <Link to="" >Project Registration</Link>
            <Link to="" >Terms & Conditions</Link>
            <Link to="" >Contact Us</Link>
          </div>
       </div>
       <div className={styles.footerCol}>
         <h2>Payment Methods</h2>
         <div className={styles.paymentMethods}>
            <img src="/src/assets/HomeImgs/payment-method-1.png" alt="Payment Methods" />
            <img src="/src/assets/HomeImgs/payment-method-2.png" alt="Payment Methods" />
            <img src="/src/assets/HomeImgs/payment-method-3.png" alt="Payment Methods" />
         </div>
       </div>
       <div className={styles.footerCol}>
         <h2>Contact Details</h2>
         <div>
            <p>Eziline Software House Pvt Ltd Office 304-B Amna Plaza Near Radio Pakistan Peshawar Road Rawalpindi</p>
            <p>+923212225212 / 051-8772888</p>
            <p>info@eziline.com</p>
         </div>
       </div>
    </div>
 )
}
export default Footer