import styles from "./Error.module.css";

function Error(){
 return(
    <div className={styles.errorContainer} >
     <p className={styles.error}>
      <span>💥</span>There was an error in fecthing products.
     </p>
    </div>
 );
}
export default Error