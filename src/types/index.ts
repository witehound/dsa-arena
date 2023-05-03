import { ChangeEventHandler } from "react"



export type ButtonProps = {
    style: string,
    type: "button" | "submit" | "reset" | undefined,
    text: any,
    handleClick?: () => void 
}

export type InputProps = {
    type : string,
    id : string,
    placeholder: string,
    style?: string,
    label: string
    handleInputChange?: ChangeEventHandler<HTMLInputElement>,
    formik?: any
}

export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};


export type loginType = "login"
export type registerType = "register"
export type forgotPasswordType = "forgotpassword"

export type AuthModaltypes = loginType | registerType| forgotPasswordType 




