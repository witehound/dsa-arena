import { AuthModaltypes } from "@/types"
import { LOGIN } from "@/constants"
import { atom } from "recoil"

type AuthModalState = {
    isOpen: boolean
    type : AuthModaltypes
}


const initialAuthModalState: AuthModalState = {
    isOpen: false,
    type : LOGIN
}


export const authModalState = atom<AuthModalState>({
    key: "authModalState",
    default : initialAuthModalState
})