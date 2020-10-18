import React from "react";
import User from "../User/User";
import instaService from "../../services/instaService";
import Error from "../Error/Error";

class Users extends React.Component{
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
            const {name, altname, photo, id} = item

            return (
                <User id={id} key={id} name={name} altname={altname} src={photo} min/>
            )

        });
    }

    render() {
        const {error, posts} = this.state;

        if(error) {
            return <Error />
        }

        const items = this.renderItems(posts);

        return (
            <div className='right'>
                <User
                    name='jessy_john'
                    altname='Jessy'
                    src='https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg'
                />
                <div className='users__block'>
                    {items}
                </div>
            </div>
        )
    }
}

export default Users;