import React from 'react';
import { useRouter } from 'next/router';

const ComponentName = () => {
    const router=useRouter()
    const id= router.query.id;
  return (
    <div>
      {id}
    </div>
  );
};

export default ComponentName;