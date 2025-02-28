import React from 'react'
import { useParams } from 'react-router'

function User() {

    const {userid}=useParams();
  return (
    <div className='bg-amber-600 text-black text-3xl text-center py-8'>The User: {userid}</div>
  )
}

export default User