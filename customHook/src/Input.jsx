import React,{useState,useEffect} from "react";
import "./App.css";
import useStorage from "./Hooks/UseStorage";
export default function Input() {
  const[text,setText] = useState("")

  useEffect(() => {
    setText(localStorage.getItem("Text"))
  },[])

  useStorage(text)

return (
  <div>
    <input type="text" onChange={(e) =>setText(e.target.value)} value={text}/>
  </div>
);
}