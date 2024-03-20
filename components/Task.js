import React from 'react'
import './Task.css';
const Task = (props) => {
  return (
    <div className="user-profile">
    <h2>Register</h2>
  <center> <table>
      <tbody>
        <tr>
          <td><strong>CompanyName:</strong></td>
          <td>{props.comapnyName}</td>
        </tr>
        <tr>
          <td><strong>OwnerName:</strong></td>
          <td>{props.ownerName}</td>
        </tr>
        <tr>
          <td><strong>RollNo:</strong></td>
          <td>{props.rollNo}</td>
        </tr>
        <tr>
          <td><strong>OwnerEmail:</strong></td>
          <td>{props.owneremail}</td>
        </tr>
        <tr>
          <td><strong>AccessCode:</strong></td>
          <td>{props.accessCode}</td>
        </tr>
        
      </tbody>
    </table> </center> 
  </div>
  )
}

export default Task
