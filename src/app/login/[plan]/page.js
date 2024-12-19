import { SignIn } from "@clerk/nextjs";

export default function login({params}){
    const {plan} = params
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            height:"100vh",
            alignItems:"center"
        }}>
        <SignIn 
                     fallbackRedirectUrl={`/dashboard/${plan}`}
/>
        </div>
    )
}