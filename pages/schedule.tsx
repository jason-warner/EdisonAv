import { Fragment } from "react";
import Navbar from '../components/Navbar/Navbar';
// import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/AudioVisualizer/AudioVisualizer'),
    { ssr: false }
  )


const Schedule = () => {
    

    return(
        <Fragment>
            <Navbar/>
            <h1>Schedule</h1>
            <DynamicComponentWithNoSSR />

        </Fragment>
    );
}
export default Schedule;
