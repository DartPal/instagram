import React from "react";
import User from "../User/User";


const Post = (props) => {
        return (
            <div key={props.id} className='post'>
                <User
                    name={props.name}
                    alt={props.altname}
                    src={props.photo}
                    min/>
                <img src={props.src} alt={props.alt} />
                <div className='post__name'>
                    {props.name}
                </div>
                <div className='post__descr'>
                    {props.descr}
                </div>
            </div>
        )
}

export default Post;