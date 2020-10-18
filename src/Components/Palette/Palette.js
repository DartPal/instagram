import React from "react";
import instaService from "../../services/instaService";
import Error from "../Error/Error";

export default class Palette extends React.Component {
    instaService = new instaService();

    state = {
        error: false,
        photos: [],
    }

    componentDidMount() {
        this.updatePhotos()
    }

    updatePhotos() {
        this.instaService.getAllPhoto()
            .then(this.onPhotosLoaded)
            .catch(this.onError)
    }

    onError = () => {
        this.setState({
            error: true,
        })
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            error: false,
            photos: photos,
        })
    }


    renderItems(arr) {
        return arr.map(item => {
            const {src, alt, id} = item;

            return (
                <img key={id} src={src} alt={alt} />
            )
        })
    }

    render() {
        const {error, photos} = this.state;

        if(error) {
            return <Error />
        }

        const items = this.renderItems(photos);

        return (
            <div className='palette'>
                {items}
            </div>
        )
    }
}
