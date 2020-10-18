import React from "react";
import instaService from "../../services/instaService";
import Error from "../Error/Error";
import Post from "../Post/Post";

export default class Posts extends React.Component{
    instaService = new instaService();

    state = {
        posts: [],
        error: false,
    }


    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.instaService.getAllPosts()
            .then(this.onPostsLoaded)
            .catch(this.onError);
    }

    onPostsLoaded = posts => {
        this.setState({
            posts,
            error: false,
        })
    }

    onError = error => {
        this.setState({
            error: true,
        })
    }

    renderItems(arr) {
        return arr.map(item => {
           const {name, altname, photo, src, id, descr, alt} = item

            return (
                <Post name={name} alt={alt} src={src} altname={altname} descr={descr} id={id} photo={photo}/>
            )

        });
    }

    render () {
        const {error, posts} = this.state;

        if(error) {
            return <Error />
        }

        const items = this.renderItems(posts);

        return (
            <div className='left'>
                {items}
            </div>
        );
    }
}