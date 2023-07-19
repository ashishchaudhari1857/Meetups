import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
 
const MeetForm = () => {
    const onAddMeetup=(newmeet)=>{
     console.log(newmeet)
    }
  return (
    <div>
      <NewMeetupForm onAddMeetup={onAddMeetup}></NewMeetupForm>
    </div>
  );
};

export default MeetForm;