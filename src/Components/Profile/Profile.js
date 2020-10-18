import React from "react";
import User from "../User/User";
import Palette from "../Palette/Palette";

const Profile = () => {
    return(
        <div className='container profile'>
            <User
                name='jessy_john'
                alt='man'
                src='https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg'
            />
            <Palette />
        </div>
    );
}

export default Profile;