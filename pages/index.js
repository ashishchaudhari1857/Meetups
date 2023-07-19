import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const  meetups=[
    {id:'m1',image:"/meetplace.jpg", title:"firstmeet" ,address:"nagpur"},
    {id:'m2',image:"/meetplace.jpg", title:"secondmeet" ,address:"delhi"},
    {id:'m3',image:"/meetplace.jpg", title:"thirdmeet" ,address:"mumbai"}
]

const Homepage = () => {
  return (
    <div>
      <MeetupList meetups={meetups}></MeetupList>
    </div>
  );
};

export default Homepage;