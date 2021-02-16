import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

function SignIn() {
    const [user] = useAuthState(auth);
  return (
      <div className='container mt-5 '>
          <button onClick={signInWithGoogle} className='btn btn-info'>Auth with google</button>
      </div>
  );
}

export default SignIn;
