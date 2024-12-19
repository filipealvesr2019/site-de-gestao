import ProductList from "../../../components/ProductList/ProductList";
import Login from "../../Login";

export default function Dashboard({params}){
    const { plan } = params || {}; // Garante que params não seja undefined
    const handleToggleProductComponent = () =>{
        switch(plan){
            case "free":
                return <ProductList />
                
            // case "month" || "year":
            //     return <ProductListForSubscribed />
                
            default:
                return <ProductList />
        }
    }
    return (
        <div >
            <Login />
        {handleToggleProductComponent()}

        </div>
    )
}