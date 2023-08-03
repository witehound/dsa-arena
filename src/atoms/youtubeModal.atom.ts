import { atom } from "recoil"

type youtubeModalState = {
    isOpen: boolean
    videoId : string | undefined
}

const initialatomYoutubeModalState: youtubeModalState = {
    isOpen: true,
    videoId : undefined
}


export const youtubeAtomModalState = atom<youtubeModalState>({
    key: "youtubeModalState",
    default : initialatomYoutubeModalState
})