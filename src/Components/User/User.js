import React from "react";
import {Link} from "react-router-dom";

const User = (props) => {

    const {min, altname, name, id, src} = props;

    return (
        <Link to='/profile' className={min ? "user min" : "user"}>
            <img src={src} alt={altname}/>
            <div>
                {name}
            </div>
        </Link>
    )
}

export default User;