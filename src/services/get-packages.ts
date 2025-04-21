import { api } from "@/lib/axios-instance"

export const getPackages = async() =>{
    try {
        const res =   await api.get("subscription/get_packages")
        return res.data
    } catch (error) {
        
    }


}