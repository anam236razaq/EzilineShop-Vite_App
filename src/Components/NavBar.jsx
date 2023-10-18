import styles from "./NavBar.module.css";
import Cart from "./CartOverview"
import { useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { useEffect, useReducer} from "react";

const initialState={
    searchQuery: "",
    filteredProducts: [],
}
function reducer(state, action){
    switch(action.type){
        case "SearchQuery":
        return{
            ...state,
            searchQuery: action.payload
        }
        case "FilteredProducts":
        return{
            ...state,
          filteredProducts: action.payload
        }
        case "ClearSearch":
        return{
            ...state,
            searchQuery: "",
        }
        default:
        return state;
    }
}
function NavBar(){
    const products=useSelector((state)=>state.fetch.products)
   return(
    <div className={styles.nav}>
        <div className={styles.logo}>
            <img src="/src/assets/HomeImgs/header-logo.png" />
        </div>
        <div className={styles.search}>
            <SearchBar product={products} />
        </div>
        <div className={styles.cart}>
           <Cart />
        </div>
    </div>
   )
}
export default NavBar

function SearchBar({product}){
const navigate=useNavigate();
const[{searchQuery, filteredProducts}, dispatch]=useReducer(reducer, initialState);

useEffect(()=>{
  const filtered= searchQuery=== ""? []: product.filter((product)=>product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    dispatch({type: "FilteredProducts", payload: filtered});
}, [product, searchQuery])

function handleSubmit(e){
    e.preventDefault();
}

 return(
     <div className={styles.searchCont}>
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <input type="text" placeholder="search for products" value={searchQuery}
             onChange={(e)=>dispatch({type: "SearchQuery", payload: e.target.value })}/>
            <button className={styles.btn} type="submit" onClick={()=>navigate("/shop")}><i className="fi fi-rs-search"></i></button>
        </form>
        {searchQuery ? (
          filteredProducts.length===0 ?(
            <p>No results Found</p>
        ) :(
        <div className={styles.searchResults}>
            <div className={styles.searchProduct}>
                {filteredProducts.map((product)=>(
                    <div className={styles.productDetails} key={product.id}>
                        <Link className={styles.productLink} to={`/products/${product.id}`}
                         onClick={()=>dispatch({type: "ClearSearch"})}>
                            <div className={styles.productImg} >
                                <img src={product.image} alt={product.name}/>
                             </div>
                            <div className={styles.productDesc}>
                                <h6>{product.name}</h6>
                                <p>{product.description.slice(0, 100)}...</p>
                            </div>
                        </Link>
                    </div>
                ))}
         </div>
      </div>)):null}
  </div>
 )
}