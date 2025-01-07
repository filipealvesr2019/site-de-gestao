import ProductList from "../../../components/ProductList/ProductList";
import Login from "../../Login";

export default function Dashboard({params}){
    const { plan } = params || {}; // Garante que params não seja undefined
  
    return (
        <div >
            <Login />
        <ProductList />

        </div>
    )
}