import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

const data = useLoaderData()

// const [data, setData] = React.useState([])
// useEffect(()=>{
//   fetch("https://api.github.com/users/philipokeniyi")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data)
      
//       setData(data)})
//     .catch((error) => console.error(error));
// },[])



  return (
    <div className="text-center m-4 bg-blue-950 text-white p-4 text-3lx">
      <h1>Github Name: {data.name}</h1>
      <img src={data.avatar_url} alt="avatar" className="rounded w-32 h-32 mx-auto"width={300} />
    </div>
  );
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/philipokeniyi")
 return response.json()
}