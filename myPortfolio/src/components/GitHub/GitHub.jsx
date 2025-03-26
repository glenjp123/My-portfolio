import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data,setData] =useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/glenjp123')
        .then(response =>response.json())
        .then(data =>{
            console.log(data)
            setData(data)
        })
    },[])
  return (
    <div className= " text-center bg-gray-700 text-3xl text-white p-4 max-w-full bg-[url('https://t4.ftcdn.net/jpg/13/36/05/13/360_F_1336051399_C93MGq2VkJivK7gquAQSvUNSh479BwCU.webp')] bg-cover bg-center">
      GitHub Followers : {data.followers}
      <img className="mx-auto mt-4 rounded-lg" src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default GitHub
