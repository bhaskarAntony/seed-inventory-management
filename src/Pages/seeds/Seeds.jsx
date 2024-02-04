import { Button } from '@mui/material'
import React from 'react'
import './style.css'
const data = [
    {
        seed:"Organic",
        code:"CREM01",
        category:"Beauty",
        price:"45",
        cost:"100",
        Quantity:"1000",

    }
]
function Seeds() {
  return (
    <div>
     <div className="row align-items-center">
        <div className="col-12 col-md-9">
            <div className="seeds-left">
                <h1 className="fs-3 fw-bold">Product List</h1>
                <p className="fs-5">The product list effectively dictates product presentation and provides space <br />
                    to list your products and offering in the most appealing wa</p>
            </div>
        </div>
        <div className="col-12 col-md-3">
            <div className="seeds-right">
              <a href="/seeds/new">
              <Button variant='contained' className='px-5 p-2'><i className='bi bi-plus'></i>Add Product</Button>
              </a>
            </div>
        </div>
     </div>
     <div className="row mt-3">
     <div className="col-12 col-md-4 d-flex gap-2">
     <input type="text" className="form-control" placeholder='search for seeds' />
     <Button variant='contained'><i className="fs-4 bi bi-search"></i></Button>
     </div>
     </div>
     <table>
        <tr>
            <th>Seed</th>
            <th>Code</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
        </tr>
        {
            data.map((item, index)=>(
                <tr>
                    <td>{item.seed}</td>
                    <td>{item.code}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.cost}</td>
                    <td className='d-flex gap-2 align-items-center justify-content-center'>
                    <i className="fs-6 bi bi-pen bg-primary rounded-1 text-white fs-5 p-2"></i>
                    <i className="fs-6 bi bi-eye bg-success rounded-1 text-white fs-5 p-2"></i>
                    <i className="fs-6 bi bi-trash bg-danger rounded-1 text-white fs-5 p-2"></i>
                    </td>
                </tr>
            ))
        }
     </table>
    </div>
  )
}

export default Seeds
