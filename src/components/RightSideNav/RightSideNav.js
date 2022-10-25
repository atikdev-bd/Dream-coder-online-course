import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RightSideNav = () => {
   const [info , setInfo] = useState([])

   useEffect(()=>{
  fetch('http://localhost:4000/courses')
  .then(res => res.json())
  .then(data =>setInfo(data))

   },[])
    return (
        <div className='mt-20'>
            {
                info.map(d => <Link key={d.id} to = {`/course/${d.id}`}>
                    <p className='mt-6' key={d.id}><button className="btn btn-active btn-link">{d.name}</button></p></Link>)
            }
        </div>
    );
};

export default RightSideNav;