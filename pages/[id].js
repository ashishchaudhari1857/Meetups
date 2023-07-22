import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { MongoClient,ObjectId } from 'mongodb';

import MeetupDetail from '../components/meetups/MeetupDetail';
const ComponentName = (props) => {
    const router=useRouter()
    const id= router.query.id;
  return (
    <div>
<Head>
  <title>{props.meetup.title}</title>
  <meta  name='description'  content={props.meetup.description}></meta>
</Head>
      <MeetupDetail 
         title={props.meetup.title}
         address={props.meetup.address}
         image={props.meetup.image}
         description={props.meetup.description}

      ></MeetupDetail>
    </div>
  );
};



export default ComponentName;

 export  async function  getStaticPaths(){
  const username = "ashishchaudhari1857";
  const password = "pass@123";
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${encodeURIComponent(
      password
    )}@cluster0.nuhh21u.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupscollections = db.collection("meetups");
   const idarray = await meetupscollections.find({},{_id:1}).toArray();
   client.close();
  return {
    fallback:true,
   paths:idarray.map((meet)=>({params:{id: meet._id.toString()} }))
  }
  }
 

 export   async function getStaticProps(context){
  const id=context.params.id;

  const username = "ashishchaudhari1857";
  const password = "pass@123";
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${encodeURIComponent(
      password
    )}@cluster0.nuhh21u.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupscollections = db.collection("meetups");
  const selecteddata = await meetupscollections.findOne({ _id: new ObjectId(id)});
  //   fetch data  
  client.close();
  return{
      props:{meetup:{
        title:selecteddata.title,
        image:selecteddata.image,
        address:selecteddata.address,
        description:selecteddata.description,
        id:selecteddata._id.toString()
      }} 
  }
     

 }