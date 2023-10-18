import { useDispatch, useSelector } from 'react-redux';
import { nextPagination, prevPagination} from '../ReducersSlice/PaginationSlice';
import styles from './Pagination.module.css'; 

function Pagination() {
  const dispatch = useDispatch();
  const { currentPage, totalPages} = useSelector((state) => state.pagination);

  const handleNext = () => {
    dispatch(nextPagination());
  };

  const handlePrev = () => {
    dispatch(prevPagination());
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrev} className={styles.btn} disabled={currentPage === 1}>
        Prev
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} className={styles.btn} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
