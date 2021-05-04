import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import "./Dashboard.css"


const Table = () => {
   const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
  ];
  
   const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
   ];

   return (
      // <div style={{ height: 500, width: '100%' }}>
      //    <br />
      //     <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      // </div>
<div>

    <h2 class='tablehead'>Students</h2>
      <div class="card border-light shadow-sm mb-4">
          <div class="card-body">
              <div class="table-responsive">
              <table class="table table-centered table-nowrap mb-0 rounded">
                      <thead class="thead-light">
                          <tr>
                              <th class="border-0">#</th>
                              <th class="border-0">First Name</th>
                              <th class="border-0">Last Name</th>
                              <th class="border-0">Email</th>
                              <th class="border-0">Password</th>
                              <th class="border-0">Mobile Number</th>
                              <th class="border-0">Gender</th>
                          </tr>
                      </thead>
                      <tbody>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">1</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class="text-success">
                                  Female
                              </td>
                          </tr>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">2</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                              <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class="text-success">
                                  Male                             
                              </td>
                          </tr>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">3</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                  <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class='text-success'>
                                  Female                                
                              </td>
                          </tr>
                         
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">4</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                  <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                                  123-456-789
                              </td>
                              <td class="text-success">
                                  Male                             
                              </td>
                          </tr>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">5</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                  <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                              1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class='text-success'>
                                  Female                                
                              </td>
                          </tr>
                          
                      </tbody>
                  </table>
              </div>
          </div>
      </div>

        <h2 class='tablehead'>Teachers</h2>
        <div class="card border-light shadow-sm mb-4">
          <div class="card-body">
              <div class="table-responsive">
              <table class="table table-centered table-nowrap mb-0 rounded">
                      <thead class="thead-light">
                          <tr>
                              <th class="border-0">#</th>
                              <th class="border-0">First Name</th>
                              <th class="border-0">Last Name</th>
                              <th class="border-0">Email</th>
                              <th class="border-0">Password</th>
                              <th class="border-0">Mobile Number</th>
                              <th class="border-0">Gender</th>
                          </tr>
                      </thead>
                      <tbody>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">1</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class="text-success">
                                  Female
                              </td>
                          </tr>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">2</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                              <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class="text-success">
                                  Male                             
                              </td>
                          </tr>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">3</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                  <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class='text-success'>
                                  Female                                
                              </td>
                          </tr>
                         
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">4</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                  <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                                  123-456-789
                              </td>
                              <td class="text-success">
                                  Male                             
                              </td>
                          </tr>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">5</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                  <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                              1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class='text-success'>
                                  Female                                
                              </td>
                          </tr>
                          
                      </tbody>
                  </table>
              </div>
          </div>
      </div>


    <h2 class='tablehead'>Admins</h2>
      <div class="card border-light shadow-sm mb-4">
          <div class="card-body">
              <div class="table-responsive">
              <table class="table table-centered table-nowrap mb-0 rounded">
                      <thead class="thead-light">
                          <tr>
                              <th class="border-0">#</th>
                              <th class="border-0">First Name</th>
                              <th class="border-0">Last Name</th>
                              <th class="border-0">Email</th>
                              <th class="border-0">Password</th>
                              <th class="border-0">Mobile Number</th>
                              <th class="border-0">Gender</th>
                          </tr>
                      </thead>
                      <tbody>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">1</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class="text-success">
                                  Female
                              </td>
                          </tr>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">2</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                              <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class="text-success">
                                  Male                             
                              </td>
                          </tr>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">3</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                  <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class='text-success'>
                                  Female                                
                              </td>
                          </tr>
                         
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">4</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                  <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                                  1234
                              </td>
                              <td>
                                  123-456-789
                              </td>
                              <td class="text-success">
                                  Male                             
                              </td>
                          </tr>
                          
                          <tr>
                              <td><a href="#" class="text-primary fw-bold">5</a> </td>
                              <td class="fw-bold">ABC</td>
                              <td>
                                  XYZ
                              </td>
                              <td>
                                  <a class="small fw-bold" href="#">abc@gmail.com</a>
                              </td>
                              <td>
                              1234
                              </td>
                              <td>
                              123-456-789
                              </td>
                              <td class='text-success'>
                                  Female                                
                              </td>
                          </tr>
                          
                      </tbody>
                  </table>
              </div>
          </div>
      </div>

</div>

   )
}

export default Table
