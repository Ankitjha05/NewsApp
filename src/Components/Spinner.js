import React,{Component} from "react";
import spineer from "./Spinner-3.gif";
export default class Spinner extends Component{
    render(){
        return(
           <div className="text-center">
            <img src={spineer} alt="loading" />
           </div> 
        )
    }
}