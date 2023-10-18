import { useState } from "react";
import styles from "./StarRating.module.css";

function StarRating(){
const[rating, setRating]= useState(0);
const maxRating=5;
 return(
    <div className={styles.container}>
        <div className={styles.starContainer}>
            {Array.from({length: maxRating}, (_, i)=><Star key={i} onRate={()=>setRating(i+1)} full={rating?
             rating >= i + 1 : ""} />)}
        </div>
    </div>
 )
}
export default StarRating

function Star({onRate, full}){
    return(
    <div>
        <span className={styles.star} onClick={onRate}>
             {full? <i className="fi fi-ss-star" ></i>: <i className="fi fi-rs-star"></i>}
        </span>
    </div>
    )}