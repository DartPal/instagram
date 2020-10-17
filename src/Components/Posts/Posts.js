import React from "react";
import Post from "../Post/Post";

export default class Posts extends React.Component{
    render () {
        return (
            <div className='left'>
                <Post src='https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg' alt='first'/>
                <Post src='https://leeflowerfarm.com/assets/images/lee-flower-home-cover-01-1920x1080.jpg' alt='second'/>
            </div>
        );
    }
}