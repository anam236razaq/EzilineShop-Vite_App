import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "./SingleProduct.module.css";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import CopyRight from "../Components/CopyRight";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import { addItem, getCurrentQuantityById } from "../ReducersSlice/CartSlice";

function SingleProduct(){
    const products=useSelector((state)=> state.fetch.products);
    const {productId}=useParams();
    const product=products.find(product=>product.id===productId);

    useEffect(()=>{
       window.scrollTo(0,0)
    },[]);

return(
    <>
        <Header />
        <NavBar />
        <ProductDetails status={status} product={product}/>
        <Footer />
        <CopyRight />
    </>
)}

export default SingleProduct

function ProductDetails({status, product}){

    if(!product){
        return( <div>{status==="loading" && <Loader />}</div> )}

 return(
    <>
     <ProductHero product={product} />
     <ProductFeatures product={product}/>
     <ProductOffer product={product}/>
     <ProductTech product={product} />
     <ProductSupport product={product} />
     </>
 )
}

function ProductHero({product}){
    const{id, name, price, image }=product;
    const currentQuantity=useSelector(getCurrentQuantityById(id));
    const isInCart=currentQuantity>0
    const dispatch=useDispatch();
    

    function handleAddToCart(){
      const newItem={productId: id, name, quantity:1, price, totalPrice: price*1, image}
       dispatch(addItem(newItem));
    }

    return(
        <div className={styles.hero}>
            <div className={styles.heroImg}><img src={product.mainImage} alt={product.name}/></div>
            <div className={styles.heroText}>
                <div>
                    <h1>{product.name}</h1>
                    <h2>{product.singleName}</h2>
                    <h4>{product.singlePrice}</h4>
                </div>
                <div>
                   <p>Fill your basic details and</p>  
                   <div>
                    <button className={styles.demobtn}>Get Demo Access!</button>
                    {!isInCart && <button className={styles.cartbtn} onClick={handleAddToCart}>Add to Cart</button>}
                  </div>    
                </div>
                <div>
                    <img className={styles.icons} src="/src/assets/SingleProductImgs/icon-img1.png" />
                    <img className={styles.icons} src="/src/assets/SingleProductImgs/icon-img2.png" />
                    <img className={styles.icons} src="/src/assets/SingleProductImgs/icon-img3.png" />
                </div>
                <div>
                    <Link className={styles.links} to="">Home</Link>
                    <Link className={styles.links}  to="">Softwares</Link>
                    <Link className={styles.links}  to="">WhatsApp Clone</Link>
                </div>
            </div>
            <div className={styles.description}>
                <p>{product.description}</p>
            </div>
        </div>
    )
}

function ProductFeatures({product}){
    const[activeTab, setActiveTab]=useState(0);
 return(
    <div className={styles.productFeatures}>
        <div className={styles.options}>
            <div className={styles.optionsCol}>
                <p>SEO Friendly</p>
                <p>Social Media Sharing</p>
                <p>Group Chat</p>
            </div>
            <div  className={styles.optionsCol}>
                <p>Chat History</p>
                <p>Responsive Website(Mobile friendly)</p>
                <p>White Labeled Script</p>
            </div>
        </div>
        <div className={styles.features}>
            <h1>Get to Know Our Amazing Features</h1>
            <p>{product.features}</p>
        </div>
        <div className={styles.featuresTab}>
            <Tab num={0} activeTab={activeTab} onClick= {setActiveTab} tabName="User Features"  />
            <Tab num={1} activeTab={activeTab} onClick={setActiveTab} tabName="Admin Panel" />
            {activeTab===0 && <UserFeatures product={product} />}
            {activeTab===1 && <AdminPanel />}
        </div>
    </div>
 )}

 function Tab({activeTab, onClick, num, tabName}){
return <button className={`${styles.tabBtn} ${activeTab===num? styles.active: ""}`} 
          onClick={()=>onClick(num)}>{tabName}</button>
 }

 function UserFeatures({product}){
  return(
    <>
    <hr />
     <div className={styles.userFeatures}>
        <div className={styles.featureImg}>
            <img src={product.featureImg} alt={product.name} />
        </div>
        <div className={styles.featureText}>
            <div className={styles.featureCol}>
                {product.featurePoints.map((product)=>(
                <div className={styles.featuresRow} key={product.id} >
                    <h4>{product.featureText}</h4>
                    <div className={styles.toolTip}>{product.featureDesc}</div>
                </div>
                ))}
            </div>
        </div>
     </div>
     </>
  )
 }

 function AdminPanel(){
  return (
        <>
          <hr />
          <div className={styles.admin}></div>
        </>
 )}


 function ProductOffer({product}){
    return(
    <>
      <div className={styles.productOffer}>
          <h2>{product.offerHead}</h2>
          <p>{product.offerText1}</p>
          <p>{product.offerText2}</p>
      </div>
       <div className={styles.features}>
            <h1>{product.partner}</h1>
            <button className={styles.btn}>Why Eziline</button>
        </div>
    </>
    )}

function ProductTech({product}){
  return(
    <div className={styles.ProductTech}>
        <h1><span>Used Technologies</span> and Server Requirements</h1>
        <div className={styles.techColumns}>
            <div className={styles.techCol}>
                <div className={styles.techRows}>
                {product.tech.map((product)=>(
                <div className={styles.techIcons} key={product.id}>
                    <div className={styles.img}>
                    <img src={product.techIcon} alt={product.name} />
                    </div>
                    <p>{product.techText}</p>
                </div>
                ))}
                </div>
            </div>
            <div className={styles.techCol}>
                <div className={styles.techDescRows}>
                    {product.techDetails.map((product)=>(
                        <div className={styles.techDetails} key={product.id}>
                            <h4>{product.techHead}</h4>
                            <p>{product.techDesc}</p>
                         </div>
                     ))}
                </div>
            </div>
        </div>
    </div>
  )
}

function ProductSupport({product}){
  const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
     <>
       <div className={styles.support}>
           <h2>What <span>support</span> you will get?</h2>
           <div className={styles.supportIcons}>
             <div className={styles.iconsContainer}>
                {product.support.map((product)=>(
                    <div className={styles.iconsDetails} key={product.id}>
                        <div className={styles.iconImg}>
                            <img src={product.iconImg} key={product.name} />
                        </div>
                        <p>{product.iconText}</p>
                    </div>
                ))}
             </div>
            </div>
       </div>

       <div className={styles.clone}>
            <h2>WhatsApp Clone Features</h2>
            <div className={styles.cloneImgs}>
                <div className={styles.imgSlides}>
                     <Slider {...settings}>
                        {product.cloneImgs.map((product)=>(
                            <div key={product.id}>
                                <img src={product.cloneImg} alt={product.name} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>  
       </div>

       <div className={styles.popularExp}>
            <div className={styles.popular}>
                <h2>Other Popular Software&apos;s</h2>
                 <div className={styles.popularContainer}>
                    <div className={styles.popularCol}>
                        {product.popular.map((product)=>(
                             <div className={styles.popularDetails} key={product.id}>
                                <h4>{product.popularityHead}</h4>
                                <p>{product.popularityText}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.exp}>
                <h2>Are you ready to find your perfect digital experience?</h2>
                <p>Am libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                   id quod maxime placeat facere possimus.</p>
                <button className={styles.btn}>Enquire Now</button>
            </div>
       </div>
     </>
    )
}