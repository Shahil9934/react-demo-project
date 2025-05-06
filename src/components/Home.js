import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/ProductsSlice";

const Home = () => {

    const dispatch = useDispatch()

    const product = useSelector((state) => state.data)

    console.log(product)

    useEffect(() => {
      dispatch(getProducts())
    },[])
    return(
        <>
         <h5>Home Component</h5>
        </>
    )
}


export default Home;