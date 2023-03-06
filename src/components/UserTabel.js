import React from "react";
import { Link } from "react-router-dom";


const UserTable = ({ data }) => {
  return (
    <>
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
            <tr>
             <td>{use.id}</td>
             <Link to={`/next/${use.id}`} ><td>{use.name}</td></Link> 
              <td>{use.email}</td>
              <td>{use.address.city}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserTable;
