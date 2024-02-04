import { Button } from '@mui/material'
import React from 'react'
import './style.css'
const data = [
    {
        seed:"Organic",
        code:"CREM01",
        Quantity:"1000",
        date:"01 jan 2024",
        customer:"Bill Yerds",
        total:"38.50",
        paid:"38.50",
        Status:true,
        Biller:"Yerds",
        Tax:"1.3"
    }
]
function Sales() {
  return (
    <div>
     <div className="row align-items-center">
        <div className="col-12 col-md-9">
            <div className="seeds-left">
                <h1 className="fs-3 fw-bold">Seed Sales</h1>
                <p className="fs-5">Sales enables you to effectively control sales KPIs and monitor them in <br /> one central place while helping teams to reach sales goals</p>
            </div>
        </div>
        <div className="col-12 col-md-3">
            <div className="seeds-right">
              <a href="/seeds/new">
              <Button variant='contained' className='px-5 p-2'><i className='bi bi-plus'></i>Add Sale</Button>
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
        <tr className='table-primary'>
            <th className='table-primary'>Seed</th>
            <th>Code</th>
            <th>Quantity</th>
            <th>date</th>
            <th>customer</th>
            <th>paid</th>
            <th>Status</th>
            <th>Biller</th>
            <th>Tax</th>
            <th>Action</th>
        </tr>
        {
            data.map((item, index)=>(
                <tr>
                    <td>{item.seed}</td>
                    <td>{item.code}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.date}</td>
                    <td>{item.customer}</td>
                    <td>{item.paid}</td>
                    <td><button className={`${item.paid?"bg-success":"bg-danger"} p-1 btn w-100 text-white`}>{item.paid?"paid":"pending"} </button></td>
                    <td>{item.Biller}</td>
                    <td>{item.Tax}</td>
                    <td>
                   <div className="d-flex gap-2 align-items-center justify-content-center">
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

export default Sales
