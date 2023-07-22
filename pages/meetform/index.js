import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';
const MeetForm = () => {
  const router=useRouter();
    const onAddMeetup= async (newmeet)=>{
        try
        { 

           const res= await fetch('/api/meetform',{
              method:'POST',
              body: JSON.stringify(newmeet),
              headers:{
                'Content-Type':'application/json'
              }
           })

            const data = await res.json()
            console.log(data)
        }
        catch(err){
          console.log(err);
        }

        router.push('/')
    }
  return (
    <div>
      <Head>
        <title>Addform</title>
        <meta name='description' content='here u can add the meet ups'></meta>
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>
    </div>
  );
};

export default MeetForm;