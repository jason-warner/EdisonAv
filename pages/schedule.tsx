import { Fragment } from "react";
import Navbar from '../components/Navbar/Navbar';
// import React, { useEffect } from 'react';
// import dynamic from 'next/dynamic';
import {useState } from 'react';



const Schedule = () => {
    // const DynamicComponentWithNoSSR = dynamic(
    //     () => import('../components/AudioVisualizer/AudioVisualizer'),
    //     { ssr: false }
    //   );
    const [buttonClicked, buttonIs] = useState(false);
    // const audioVisualizer = <DynamicComponentWithNoSSR {splash: apl} />

    return(
        <Fragment>
            <Navbar/>
            <h1>Schedule</h1>
            <button onClick={()=> buttonIs(!buttonClicked)}>
                Play
            </button>
            {/* { buttonClicked && audioVisualizer } */}

        </Fragment>
    );
}
export default Schedule;
