import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalPages } from '../ReducersSlice/PaginationSlice';
import { Link } from 'react-router-dom';
import StarRating from './StarRating'; 
import Pagination from './Pagination'; 
import styles from './ProductDetails.module.css';
import { sortProducts } from '../ReducersSlice/SortSlice';

function ProductDetails({ product }) {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector((state) => state.pagination);
  const isGridView=useSelector((state)=>state.sort.gridview);
  const sortValue=useSelector((state)=>state.sort.sortValue);
  const products=useSelector((state)=>state.sort.products);
  const selectedTech=useSelector((state)=>state.sort.filterTechnology);

  const filterProducts=products.filter((product)=>
   selectedTech? product.technology === selectedTech: true
   );

  useEffect(() => {
    const calcTotalPages = Math.ceil(filterProducts.length / itemsPerPage);
    dispatch(setTotalPages(calcTotalPages));
  }, [dispatch, itemsPerPage, filterProducts]);
            
  useEffect(()=>{
        dispatch(sortProducts({products: product, sortValue: sortValue}));
  }, [dispatch, sortValue, product])
  return (
    <>
      {isGridView? (
      <div className={styles.productContBox}>
        {filterProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => (
          <div className={styles.productDetails} key={product.id}>
            <Link to={`/products/${product.id}`}>
              <div className={styles.productImg}>
                <img src={product.image} alt={product.name} />
              </div>
            </Link>
            <div className={styles.productDesc}>
              <p>{product.name}</p>
              <StarRating />
              <h5>Rs{product.price}</h5>
            </div>
          </div>
        ))}
      </div> ):(
      <div className={styles.productListBox}>
        {products.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage).map((product)=>(
          <div className={styles.productListDetails} key={product.id}>
            <Link to={`/products/${product.id}`}>
                <div className={styles.productListImg}>
                    <img src={product.image} alt={product.name} />
                </div>
            </Link>
                 <div className={styles.productDescription}>
                    <h4>{product.name}</h4>
                    <p>{(product.description).slice(0, 148)}</p>
                    <StarRating />
                    <h5>{product.price}</h5>
                </div>
          
          </div> 
        ))}

      </div>
      )}
      {selectedTech? null :  <Pagination />}
    </>
  );
}

export default ProductDetails;
