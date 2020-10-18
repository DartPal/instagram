import React from "react";
import User from "../User/User";

const Users = (props) => {

    return (
        <div className='right'>
            <User
                name='jessy_john'
                alt='Jessy'
                src='https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg'/>
                <div className='users__block'>
                    <User
                        name='abracham_mvp'
                        alt='Abby'
                        src='https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg'
                        min/>
                    <User
                        name='real_eggs'
                        alt='eggs'
                        src='https://www.washingtonpost.com/resizer/1RhnmRzobv_b5lzu2YIz381sV8s=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4ZLH33AYAAI6TOHGKZYZBQX5BA.jpg'
                        min/>
                    <User
                        name='katefromlviv'
                        alt='Kate'
                        src='https://cdn.lifehack.org/wp-content/uploads/2015/01/alpha-woman-1024x768.jpeg'
                        min/>
                    <User
                        name='smoothiemaker'
                        alt='Smoothie'
                        src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=480:*'
                        min/>
                </div>
        </div>
    )
}

export default Users;