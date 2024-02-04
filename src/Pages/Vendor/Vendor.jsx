import { Button } from '@mui/material'
import React from 'react'
import './style.css'
const data = [
    {
        Company:"Fruits Supply",
        Name:"Max Conversion",
        Email:"max@gmail.com",
        Phone:"0123456789",
        City:"Petaling",
        Country:"India",
        Code:"FS094",
        GSTNo:"1234",
        orders:10

    }
]
function Vendor() {
  return (
    <div>
     <div className="row align-items-center">
        <div className="col-12 col-md-9">
            <div className="seeds-left">
                <h1 className="fs-3 fw-bold">Vendors List</h1>
                <p className="fs-5">The product list effectively dictates product presentation and provides space <br />
                    to list your products and offering in the most appealing wa</p>
            </div>
        </div>
        <div className="col-12 col-md-3">
            <div className="seeds-right">
              <a href="/seeds/new">
              <Button variant='contained' className='px-5 p-2'><i className='bi bi-plus'></i>Add Vendor</Button>
              </a>
            </div>
        </div>
     </div>
     <div className="row mt-3">
     <div className="col-12 col-md-4 d-flex gap-2">
     <input type="text" className="form-control" placeholder='search for vendors' />
     <Button variant='contained'><i className="fs-4 bi bi-search"></i></Button>
     </div>
     </div>
     <table>
        <tr>
            <th>Company Name</th>
            <th>Code</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
            <th>Country</th>
            <th>GST NO</th>
            <th>Orderes</th>
            <th>Action</th>
        </tr>
        {
            data.map((item, index)=>(
                <tr>
                    <td>{item.Company}</td>
                    <td>{item.Code}</td>
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Phone}</td>
                    <td>{item.City}</td>
                    <td>{item.Country}</td>
                    <td>{item.GSTNo}</td>
                    <td>{item.orders}</td>
                    <td>
                   <div  className='d-flex gap-2 align-items-center justify-content-center'>
                   <i className="fs-6 bi bi-pen bg-primary rounded-1 text-white fs-5 p-2"></i>
                    <i className="fs-6 bi bi-eye bg-success rounded-1 text-white fs-5 p-2"></i>
                    <i className="fs-6 bi bi-trash bg-danger rounded-1 text-white fs-5 p-2"></i>
                   </div>
                    </td>
                </tr>
            ))
        }
     </table>
    </div>
  )
}

export default Vendor
