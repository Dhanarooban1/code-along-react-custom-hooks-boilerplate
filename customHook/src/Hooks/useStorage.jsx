import { useEffect } from "react";
import Input from "../Input";

export default function useStorage(text) {
 useEffect(()=>{
    if(text){
        localStorage.setItem('Text',text)
    }
 },[text])
}