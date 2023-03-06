import React ,{useEffect,useState} from 'react';
 import axios from "axios";
//import UserTable from './UserTabel';
import { Link } from "react-router-dom";



const Api = () => {
 

  const [data, setData] = useState(null);
  
 const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Hmmm


  

  useEffect(() => {
    getData()
    
  }, []);

  async function getData() {
    await axios(
      "https://jsonplaceholder.typicode.com/users"
    )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }




  if (loading) return "Loading...";
  if (error) return "Error!";
  return (
    <div>
          {/* <UserTable data={data} /> */}
        

<table>
<thead>
  <tr>
    <th>S.No</th>
    <th>Name</th>
    <th>Email</th>
    <th>City</th>
  </tr>
</thead>
<tbody>
  {data.map((use) => (
    <tr key={use.id}>
     <td>{use.id}</td>
     <td>

     <Link to={`/next/${use.id}`} >{use.name}</Link> 
     </td>
      <td>{use.email}</td>
      <td>{use.address.city}</td>
      
    </tr>
  ))}
</tbody>
</table>


        
  

    </div>
  )
}

export default Api

// import React from 'react';
// import { useRef, useState } from "react";
//  import UserTable from './UserTabel';



// function Api() {
//   const baseURL="https://jsonplaceholder.typicode.com/users"
  
//   const get_id = useRef(null);

//   async function getDataById() {
//     const id = get_id.current.value;

//     if (id) {
//       try {
//         const res = await fetch(`${baseURL}/tutorials/${id}`);

//         if (!res.ok) {
//           const message = `An error has occured: ${res.status} - ${res.statusText}`;
//           throw new Error(message);
//         }

//         const data = await res.json();

//         const result = {
//           data: data,
//           status: res.status,
//           statusText: res.statusText,
//           headers: {
//             "Content-Type": res.headers.get("Content-Type"),
//             "Content-Length": res.headers.get("Content-Length"),
//           },
//         };

//         setGetResult(fortmatResponse(result));
//       } catch (err) {
//         setGetResult(err.message);
//       }
//     }
//   }
  
  


//   return (
//     <div>
//           <UserTable data={data} />

//     </div>
//   )
// }

// export default Api

