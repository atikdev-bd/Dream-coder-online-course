import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {

    const details = useLoaderData()
    console.log(details);
    return (
        <div>
          
            <h1>{details?.length}</h1>
        </div>
    );
};

export default CourseDetails;