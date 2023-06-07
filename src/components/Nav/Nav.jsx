import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";

class Nav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <SearchBar onSearch={this.props.onSearch} />
                <Link to="/About">
                    <p>About</p>
                </Link>

                <Link to="/Home">
                    <p>Home</p>
                </Link>
            </div>
        )
    }
}

export default Nav;