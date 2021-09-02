import React from 'react';
import Room from '../Room/Room';
import './Home.css';

const Home = () => {

    const divStyle = {
        width: "95%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "spaceBetween",
        margin: "20px"
    }

    const rooms = [
        {
            title: "Standard Single Room",
            description: "Its like enough for you if you like a big room for you. You have everything that you desire for you .",
            imgURl: "https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg",
            bed: 1,
            capacity: 1,
            bedType: "Single",
            avatar: "S",
            price: 119
        },
        {
            title: "Power Couple Room",
            description: "If you are with your love ones and you wanna stay then you are at the right palce. Here you will have all the facility that you desire.",
            imgURl: "https://corinthiahotelswebblob.blob.core.windows.net/production-media-cache/a/e/4/8/7/5/ae4875707f4425df9cc24a12a2e24c41ef4e439c.jpg",
            bed: 1,
            capacity: 2,
            bedType: "Queen Size",
            avatar: "C",
            price: 249
        },
        {
            title: "Grand Family Room",
            description: "Wanna spend a family holiday and need a place where you wanna stay comfortably? Then sir you are exactly at the right place..",
            imgURl: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1191,w_2121,x_0,y_223/f_auto,q_auto,w_1100/v1555272928/shape/mentalfloss/50569-istock-486178472.jpg",
            bed: 2,
            capacity: 4,
            bedType: "King Size",
            avatar: "F",
            price: 370
        }
    ]
    return (
        <div className="div-style" style={divStyle}>
            {
                rooms.map(room => <Room key={room.bedType} room={room}></Room>)
            }
        </div>
    );
};

export default Home;