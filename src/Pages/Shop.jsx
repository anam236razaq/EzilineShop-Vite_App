import styles from "./Shop.module.css"
import { useDispatch, useSelector } from "react-redux"
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";
import Header from "../Components/Header";
import { useEffect } from "react";
import NavBar from "../Components/NavBar";
import Sort from "../Components/Sort";
import ProductDetails from "../Components/ProductDetails";
import Loader from "../Components/Loader";
import Error from "../Components/Error";
import { filterTechnology } from "../ReducersSlice/SortSlice";


function Shop(){
    const products=useSelector((state)=> state.fetch.products);
    const status=useSelector((state)=>state.fetch.status);

    useEffect(()=>{
       window.scrollTo(0,0);
    },[]);

    return(
      <>
        <Header />
        <NavBar />
        <Products product={products} status={status}/>
        <Footer />
        <CopyRight />
     </>
    )
}
export default Shop

function Products({product, status}){
    const dispatch=useDispatch();
    const extractUniqueTech=(product)=>{
     return product.reduce((uniqueTech, product)=>{
        uniqueTech.add(product.technology);
        return uniqueTech;
      },new Set());
    }
    const uniqueTechnologies=Array.from(extractUniqueTech(product));

    function handlefilterTech(technology){
      dispatch(filterTechnology(technology));
    }

  return(
     <>
       <hr />
       <div className={styles.products}>
          {status==="loading" && <Loader />}
          {status==="error" && <Error />}
          {status==="ready" &&(
            <>
             <div className={styles.filterProducts}>
               <h4>Filter By Technology</h4>
                <div className={styles.btns}>
                  {uniqueTechnologies.map((technology, index)=>(
                    <button className={styles.techBtn}
                    name="technology"
                    key={index}
                    type="button"
                    value={technology}
                    onClick={()=>handlefilterTech(technology)}>{technology}</button>
                  ))}
                </div>
             </div>
             <div className={styles.productsContainer}>
                <div className={styles.sortFilter}>
                  <Sort product={product} />
                </div>
                <div className={styles.mainProducts}>
                  <ProductDetails product={product}/>
                </div>
            </div>
          </>
         )}
       </div> 
    </>       
  )
}



