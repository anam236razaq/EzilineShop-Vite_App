import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {motion} from "framer-motion";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";
import styles from "./Home.module.css";
import { useSelector,useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import StarRating from "../Components/StarRating";
import { filterCategory, filterCourses, filterFYP, filterHardware, filterServices } from "../ReducersSlice/SortSlice";

function Home(){
   const product=useSelector((state)=>state.fetch.products);

    return(
        <>
           <Header />
           <NavBar />
           <HeroSlider />
           <Logos />
           <Services />
           <EziProducts  product={product}/>
           <EziServices product={product} />
           <EziCourses product={product} />
           <FYP product={product} />
           <Hardware product={product} />
           <Technology />
           <Footer />
           <CopyRight />
        </>
    )
}
export default Home

function HeroSlider(){
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

   return(
     <>
       <hr />
       <div className={styles.hero} >
           <Slider {...settings}>
         <div className={styles.slides}>
             <div className={styles.textContainer}>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}} transition={{duration: "0.4", delay: "0.2" }}>E</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "0.2" }}>Z</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "0.4" }}>I</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "0.6" }}>L</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "0.8" }}>I</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "1" }}>N</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "1.2" }}>E</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}} transition={{duration: "0.4", delay: "1.4" }}>&nbsp;</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "1.6" }}>P</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "1.8" }}>R</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "2" }}>O</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "2.2" }}>D</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "2.4" }}>U</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "2.6" }}>C</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "2.8" }}>T</motion.span>
               <motion.span initial={{translateX: 100, opacity:0, }} animate={{translateX: 0, opacity:1,}}  transition={{duration: "0.4", delay: "3" }}>S</motion.span>
             </div>
             <div className={styles.slideImgs}>
               <motion.div  initial={{translateX: 100, opacity: 0}} animate={{translateX: 0, opacity:1}} transition={{duration: "1", delay: "1"}} className={`${styles.ImgCont} ${styles.animateRight1}`}>
                  <img className={styles.animatedImg} src="/src/assets/HomeImgs/HeroSlider/slider-img2.png" alt="SliderImgs" />
               </motion.div>
               <motion.div  initial={{translateX: 100, opacity: 0}} animate={{translateX: 0, opacity:1}} transition={{duration: "1", delay: "1.75"}} className={`${styles.ImgCont} ${styles.animateRight2}`}>
                  <img className={styles.animatedImg} src="/src/assets/HomeImgs/HeroSlider/slider-img3.png" alt="SliderImgs" />
             </motion.div>
             <motion.div initial={{translateX: 100, opacity: 0}} animate={{translateX: 0, opacity:1}} transition={{duration: "1", delay: "2.50"}} className={`${styles.ImgCont} ${styles.animateRight3}`}>
                  <img className={styles.animatedImg} src="/src/assets/HomeImgs/HeroSlider/slider-img4.png" alt="SliderImgs" />
            </motion.div>
            <motion.div initial={{translateX: 100, opacity: 0}} animate={{translateX: 0, opacity:1}} transition={{duration: "1", delay: "3.25"}} className={`${styles.ImgCont} ${styles.animateRight4}`}>
                  <img className={styles.animatedImg} src="/src/assets/HomeImgs/HeroSlider/slider-img5.png" alt="SliderImgs" />
            </motion.div>
            <motion.div initial={{translateX: 100, opacity: 0}} animate={{translateX: 0, opacity:1}} transition={{duration: "1", delay: "4"}} className={`${styles.ImgCont} ${styles.animateRight5}`}>
               <img className={styles.animatedImg} src="/src/assets/HomeImgs/HeroSlider/slider-img6.png" alt="SliderImgs" />
            </motion.div>
         </div>
       </div>
          <div className={styles.slide2}>
            <img src="/src/assets/HomeImgs/HeroSlider/slider-img7.png" alt="SliderImgs" />
          </div>
           <div className={styles.slide2}>
              <img src="/src/assets/HomeImgs/HeroSlider/slider-img8.png" alt="SliderImgs" />
          </div>
           <div className={styles.slide2}>
              <img src="/src/assets/HomeImgs/HeroSlider/slider-img9.png" alt="SliderImgs" />
          </div>
           <div className={styles.slide2}>
              <img src="/src/assets/HomeImgs/HeroSlider/slider-img10.png" alt="SliderImgs" />
          </div>
           <div className={styles.slide2}>
              <img src="/src/assets/HomeImgs/HeroSlider/slider-img11.png" alt="SliderImgs" />
          </div>
          </Slider>
       </div>
     </>
   )
}
 

function Logos(){
      const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
   return(
       <div className={styles.logos}>
           <Slider {...settings}>
           <img src="/src/assets/HomeImgs/Logos/logo-1.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-2.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-3.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-4.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-5.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-6.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-7.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-8.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-9.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-10.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-11.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-12.png" alt="LogoImgs" />
           <img src="/src/assets/HomeImgs/Logos/logo-13.png" alt="LogoImgs" />
           </Slider>
       </div>
   )
}

function Services(){
   return(
      <div className={styles.services}>
       <div className={`${styles.serviceCol} ${styles.bkgColor1}`}>
           <i className="fi fi-ss-refresh"></i>
           <div>
              <h3>Customizable</h3>
             <p>Configure product as per your need.</p>
           </div>
       </div>
         <div className={`${styles.serviceCol} ${styles.bkgColor2}`}>
         <i className="fi fi-rs-circle-microphone"></i>
           <div>
               <h3>Fast Track Support</h3>
             <p>24 hrs Free Support Service.</p>
           </div>
       </div>
        <div className={`${styles.serviceCol} ${styles.bkgColor3}`}>
        <i className="fi fi-rs-laptop-mobile"></i>
           <div>
               <h3>Best Technology</h3>
               <p>Implemented Secure Technology</p>
           </div>
       </div>
      </div>
   )
}

function EziProducts({product}){
   const category = useSelector((state)=>state.sort.filterCategory);
   const eziProductsData=product.filter((item)=>item.category==="Ezi Products");
   const productCategories= [...new Set (eziProductsData.map((item)=>item.productCategory))];
   const dispatch=useDispatch();

   function handleCategoryFilter(value){
      dispatch(filterCategory(value));
   }
     const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
   return(
      <div className={styles.products}>
         <div className={styles.proCategoryCol}>
             <button className={styles.headBtn}><i className="fi fi-rs-box-open"></i>Ezi Products</button>
             <div>{productCategories.map((productCategory, index)=>{
               return<button  className={`${styles.categoryButtons} ${category===productCategory? styles.activeProducts: ''}`}
               type="button" 
               name="productCategory" 
               key={index}
                value={productCategory} onClick={()=>handleCategoryFilter(productCategory)}>{productCategory}</button>
             })}
             </div>
         </div>
         <div className={styles.productContBox}>
             <Slider {...settings}>
             {eziProductsData.filter((product)=>{
               if(category==='Web Application'){
                  return product.productCategory==="Web Application";
               }
               return product.productCategory===category;
            }).map((product) => (
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
          </Slider>
      </div>
   </div>
   )
}

function EziServices({ product }) {
  return (
    <ProductCategory categoryTitle="Ezi Services" categoryKey="filterServices" filterAction={filterServices}
      product={product}/>
  )}

function EziCourses({ product }) {
  return (
    <ProductCategory categoryTitle="Ezi Courses" categoryKey="filterCourses" filterAction={filterCourses}
      product={product}
    />
  )}

function FYP({ product }) {
  return (
    <ProductCategory categoryTitle="Final Year Project" categoryKey="filterFYP" filterAction={filterFYP}
      product={product}/>
  )}

function Hardware({ product }) {
  return (
    <ProductCategory categoryTitle="Hardware" categoryKey="filterHardware" filterAction={filterHardware}
      product={product}
    />
  )}

const ProductCategory = ({ categoryTitle, categoryKey, filterAction, product }) => {
  const category = useSelector((state) => state.sort[categoryKey]);
  const eziProductsData = product.filter((item) => item.category === categoryTitle);
  const productCategories = [...new Set(eziProductsData.map((item) => item.productCategory))];
  const dispatch = useDispatch();

  function handleCategoryFilter(value) {
    dispatch(filterAction(value));
  }

  return (
    <div className={styles.products}>
      <div className={styles.proCategoryCol}>
        <button className={styles.headBtn}>
          <i className="fi fi-rs-box-open"></i>
          {categoryTitle}
        </button>
        <div>
          {productCategories.map((productCategory, index) => (
            <button
              className={`${styles.categoryButtons} ${
                category === productCategory ? styles.activeProducts : ""
              }`}
              type="button"
              name="productCategory"
              key={index}
              value={productCategory}
              onClick={() => handleCategoryFilter(productCategory)}
            >
              {productCategory}
            </button>
          ))}
        </div>
      </div>
      <div className={`${styles.productContBox} ${styles.proCont}`}>
        {eziProductsData
          .filter((product) => {
            if (category === categoryTitle) {
              return product.productCategory === categoryTitle;
            }
            return product.productCategory === category;
          })
          .map((product) => (
            <div className={styles.proDetails} key={product.id}>
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
      </div>
    </div>
  );
};

function Technology(){
      const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
   return (
    <div className={styles.tech}>
      <div className={styles.proCategoryCol}>
        <button className={styles.headBtn}>
          <i className="fi fi-rs-box-open"></i>
          Technology
        </button>
      </div>
      <div className={styles.techImgs}>
          <Slider {...settings}>
             <div><img src="/src/assets/HomeImgs/Tech/tech-1.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-2.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-3.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-4.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-5.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-6.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-7.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-8.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-9.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-10.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-11.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-12.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-13.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-14.png" alt="Technology" /></div>
             <div><img src="/src/assets/HomeImgs/Tech/tech-15.png" alt="Technology" /></div>
       </Slider>
      </div>
    </div>
  )}