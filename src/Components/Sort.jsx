import { useDispatch, useSelector } from "react-redux";
import styles from "./Sort.module.css";
import { gridView, sorting } from "../ReducersSlice/SortSlice";
import { useEffect } from "react";

function Sort(){
    const {currentPage, totalPages, itemsPerPage}=useSelector((state)=>state.pagination);
    const sortProducts=useSelector((state)=>state.sort.products)
    const gridview=useSelector((state)=>state.sort.gridview);
    const sortValue=useSelector((state)=>state.sort.sortValue);
    const dispatch=useDispatch();
    const selectedTech=useSelector((state)=>state.sort.filterTechnology);

    const filteredProducts=sortProducts.filter((product)=>
      selectedTech? product.technology===selectedTech: true
    );

    useEffect(()=>{
       dispatch(gridView(true));
    }, [dispatch]);

 return(
  <div className={styles.sortProducts}>
    <div className={styles.sortContainer}>
        <div className={styles.grid}>
           <button onClick={()=>dispatch(gridView(true))} className={gridview? `${styles.sortBtn} ${styles.active}`: styles.sortBtn}><i className="fi fi-ss-grid"></i></button>
        </div>
        <div className={styles.list}>
          <button onClick={()=>dispatch(gridView(false))}  className={!gridview? `${styles.sortBtn} ${styles.active}`: styles.sortBtn}><i className="fi fi-ss-list"></i></button>
        </div>
        <div className={styles.sorting}>
            <select onChange={(e)=>dispatch(sorting(e.target.value))} value={sortValue}>
                <option value="default">Sort by default</option>
                <option disabled></option>
                <option value="popularity">Sort by popularity</option>
                <option disabled></option>
                <option value="latest">Sort by latest</option>
                <option disabled></option>
                <option value="lowest price">Sort by price: low to high</option>
                <option disabled></option>
                <option value="highest price">Sort by price: high to low</option>
            </select>
        </div>
    </div>
    <div className={styles.results}>
        <p>Showing {((currentPage-1)*itemsPerPage)+1}-{currentPage===totalPages ? filteredProducts.length: currentPage*itemsPerPage} 0f {filteredProducts.length} results</p>
    </div>
  </div>
 )
}
export default Sort;