import { atom } from "recoil"

type youtubeModalState = {
    isOpen: boolean
    videoId : string | undefined
}

const initialatomYoutubeModalState: youtubeModalState = {
    isOpen: false,
    videoId : undefined
}


export const youtubeAtomModalState = atom<youtubeModalState>({
    key: "AuthModalState",
    default : initialatomYoutubeModalState
})