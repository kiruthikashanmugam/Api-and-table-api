// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import { useParams } from 'react-router-dom';


// function Next() {
//     const [post,setPost]=useState("")


//  //   const {id}=useParams()
   
//  const [loading,setLoading]=useState(true);
//      const [error, setError] = useState(null);

//     //  useEffect(()=>{
//     //   fetch(`https://jsonplaceholder.typicode.com/users/${match.params.pid}`)
//     //   .then(response =>response.json())
//     //   .then(json=>setPost(json))
//     //   .then(json=>setLoading(false))
//     //   console.log(match);

//     //  },[]);

//     useEffect(() => {
//         getDatas()
        
//       }, []);
    
//       async function getDatas() {
//         if({match}){
//         await axios(        

//            `https://jsonplaceholder.typicode.com/users/${match.params.id}`
//         )
//           .then((response) => {
//             setPost(response.data);
            
//           })
//           .catch((error) => {
//             console.error("Error fetching data: ", error);
//             setError(error)
//             console.log(error);
//           })
//             .finally(() => {
//               setLoading(false);
//             });
//             console.log(match);
//       }}


//         if (loading) return "Loading...";
//        if (error) return "Error!";

//   return (
//      <div>
//        <h1>{post.id}</h1>
//        <p>{post.name}</p>
//        <p>{post.username}</p>
//        <p>{post.email}</p>
//       <p>{post.address}</p>

//     </div>
//   )
// }

// export default Next



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';


function Next() {
  const { id } = useParams();
  const [post, setPost] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setPost(response.data);
        console.log(setPost);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return "Error!";
  }

  return (
    <div>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>company</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{post.id}</td>
          <td>{post.name}</td>
          <td>{post.username}</td>
          <td>{post.email}</td>
          <td>{post.address.city}</td>
          <td>{post.company.name}</td>

        </tr>
      
     
      </tbody>
    </Table>
  

    
    </div>
  );
}

export default Next;



