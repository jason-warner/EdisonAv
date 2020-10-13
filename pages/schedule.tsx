import Navbar from '../components/Navbar/Navbar';
import React from 'react';
import {useState } from 'react';



const Schedule = () => {
    const [buttonClicked, buttonIs] = useState(false);

    return(
        <div>
            <Navbar/>
            <h1>Schedule</h1>
            <button onClick={()=> buttonIs(!buttonClicked)}>
                Message
            </button>
            { buttonClicked && <h1>Coming soon!</h1>}
        </div>
    );
}
export default Schedule;
