import React from 'react';
import { useRouter } from 'next/router';

import MeetupDetail from '../components/meetups/MeetupDetail';
const ComponentName = () => {
    const router=useRouter()
    const id= router.query.id;
  return (
    <div>
      <MeetupDetail 
         title="firstmeet"
         address="nagpur"
         image="/meetplace.jpg"
         description="tell me something"

      ></MeetupDetail>
    </div>
  );
};



export default ComponentName;

 export  async function  getStaticPaths(){

  return {
    fallback:true,
    paths:[
      {params:{id:"m1"}},
      {params:{id:"m2"}},
      {params:{id:"m3"}}
    ]
  }
 }

 export   async function getStaticProps(context){
  const id=context.params.id;

  //   fetch data  
  return{
      props:{
        title:"firstmeet",
        address:"nagpur",
        image:"/meetplace.jpg",
        description:"tell me something"

      }
  }
     

 }