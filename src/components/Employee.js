import React from 'react'

function Employee() {
  return (
    <>
     <div className='row p-2 m-2'>
      <div className='col-8'>
        <h2 className='text-primary '>Employee List</h2>
      </div>
      <div className='col-4'>
        <a className='btn btn-success'data-target="#newEmployee" data-toggle="modal"><i className="fa fa-plus"></i> Add New Employee</a>
      </div>
      </div>
      <div className='row border p-2 m-2'>
        <table className='table table-stripped table-bordered table-hover table-active'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Address</td>
              <td>Salary</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Employee