import styles from "./CopyRight.module.css";
import {Link} from "react-router-dom";

function CopyRight(){
  return(
    <div className={styles.copyright}>
     <hr />
     <div className={styles.copyRightText}>
        <p>&copy; {new Date().getFullYear()} E-Shop. All Rights Reserved by <Link to="https://www.eziline.com/">Eziline</Link> </p>
     </div>
    </div>
  )
}

export default CopyRight