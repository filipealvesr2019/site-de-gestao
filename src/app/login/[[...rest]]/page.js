import { SignIn } from "@clerk/nextjs";

export default function login(){
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            height:"100vh",
            alignItems:"center"
        }}>
        <SignIn />
        </div>
    )
}