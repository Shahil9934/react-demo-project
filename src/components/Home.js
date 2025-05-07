import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/ProductsSlice";

function Home(){

    const dispatch = useDispatch()
    const product = useSelector((state) => state.data)
    console.log(product)

    useEffect(() => {
      dispatch(getProducts())
    },[dispatch])

    function sum(){
      const obj = {};

      return function(a,b){
        console.log('obj is :', obj)
        if(!obj[`${a},${b}`]){
          console.log("inside if");
          obj[`${a},${b}`] = a + b
        }
        return obj[`${a},${b}`]
      }
    }

   
   const memoizedSum = sum();

   console.log(memoizedSum(3,4))
   console.log(memoizedSum(3,4))
    

  
    return(
        <div className="grid-container">
        {product.map((prod) => {
          return(
            <div className="card" key={prod.id}>
             <img className="card img " src={prod.image} alt="Avatar" style= {{width:"100%"}} />
            <div className="container">
               <h6><b>{prod.price}</b></h6> 
             <h6><b>{prod.title}</b></h6> 
               <p>{prod.category}</p> 
             </div>
          </div>
          )
        })}
        </div>
    )
}


export default Home;