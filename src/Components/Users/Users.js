import React from "react";
import User from "../User/User";

const Users = (props) => {

    return (
        <div className='right'>
            <User
                name='jessy_john'
                alt='man'
                src='https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg'/>
                <div className='users__block'>
                    <User
                        name='jessy_john'
                        alt='man'
                        src='https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg'
                        min/>
                    <User
                        name='jessy_john'
                        alt='man'
                        src='https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg'
                        min/>
                    <User
                        name='jessy_john'
                        alt='man'
                        src='https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg'
                        min/>
                    <User
                        name='jessy_john'
                        alt='man'
                        src='https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg'
                        min/>
                </div>
        </div>
    )
}

export default Users;