import React from "react";
import User from "../User/User";


export default class Post extends React.Component{
    render () {
        return (
            <div className='post'>
                <User
                    name='jessy_john'
                    alt='man'
                    src='https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg'
                    min/>
                <img src={this.props.src} alt={this.props.alt} />
                <div className='post__name'>
                    Some account
                </div>
                <div className='post__descr'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit in necessitatibus numquam quos.
                    Adipisci deserunt dolore eius ex in inventore necessitatibus nisi quo rem tempora, tempore totam vero voluptatem voluptates!
                </div>
            </div>
        )
    }
}