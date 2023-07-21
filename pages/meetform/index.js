import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
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
      <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>
    </div>
  );
};

export default MeetForm;