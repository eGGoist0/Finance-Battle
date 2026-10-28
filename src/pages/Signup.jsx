import React from "react";
import ReactDOM from "react-dom/client";
import { Link } from 'react-router-dom';
import "/Users/рс/OneDrive/PROJECTS/FINANCE_BATTLE/finance_battle/src/css/App.css";

class Signup extends React.Component{
    render(){
        return(
            <div>
                <h1>Sign Up</h1>
                <Link to="/">
                    <button>Back to</button>
                </Link>
            </div>
        )
    }
}

export default Signup;