import { AuthModaltypes } from "@/types"
import { LOGIN } from "@/constants"
import { atom } from "recoil"

type atomAuthModalState = {
    isOpen: boolean
    type : AuthModaltypes
}


const initialatomAuthModalState: atomAuthModalState = {
    isOpen: false,
    type : LOGIN
}


export const atomAuthModalState = atom<atomAuthModalState>({
    key: "atomAuthModalState",
    default : initialatomAuthModalState
})