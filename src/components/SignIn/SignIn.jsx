
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";

export default function SignInComponente(){
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            height:"100vh",
            alignItems:"center"
        }}>
        <SignIn/>
        </div>
    )
}