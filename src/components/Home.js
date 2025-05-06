import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/ProductsSlice";

const Home = () => {

    const dispatch = useDispatch()

    const product = useSelector((state) => state.data)

    console.log(product)

    useEffect(() => {
      dispatch(getProducts())
    },[dispatch])
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