import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb/lib/mongo_client";

const Homepage = (props) => {
  return (
    <div>
      <MeetupList meetups={props.meetups}></MeetupList>
    </div>
  );
};

export default Homepage;

//  export async function getServerSideProps(context){
//   const req= context.req;
//   const res=context.res;

//   //  fetch
//   return{
//     props:{meetups:meetups}

//  };
//  }

export async function getStaticProps() {
  //  fetch daataconst username = "ashishchaudhari1857";
  const username = "ashishchaudhari1857";
  const password = "pass@123";
  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${encodeURIComponent(
      password
    )}@cluster0.nuhh21u.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupscollections = db.collection("meetups");

  const meetups = await meetupscollections.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
