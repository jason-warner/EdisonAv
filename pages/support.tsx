import Navbar from '../components/Navbar/Navbar';
import {useState } from 'react';

const Support = () => {
    const [buttonClicked, buttonIs] = useState(false);
    return(
        <div>
            <Navbar/>
            <h1>Support</h1>
            <button onClick={()=> buttonIs(!buttonClicked)}>
                Message
            </button>
            { buttonClicked && <h1>Coming soon!</h1>}
        </div>
    );
}

export default Support;