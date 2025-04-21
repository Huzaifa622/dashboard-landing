import { api } from "@/lib/axios-instance"

export const SignUp = async(data:any) =>{
    try {
        const res =   await api.post("subscription/signup_with_package/" , 
data
        )
        return res.data
    } catch (error) {
        
    }


}