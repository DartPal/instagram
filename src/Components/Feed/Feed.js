import React from "react";
import Posts from "../Posts/Posts";
import Users from "../Users/Users";

class Feed extends React.Component{
    render () {
        return (
            <div className='container feed'>
                <Posts />
                <Users />
            </div>
        );
    }
}


export default Feed;