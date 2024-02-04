import { Button } from '@mui/material'
import React from 'react'
import './style.css'
const data = [
    {
        seed:"Organic",
        code:"CREM01",
        refNo:"PO201",
        Supplier:"Fruits Supply",
        Quantity:"1000",
        date:"01 jan 2024",
        total:"38.50",
        paid:"38.50",
        PaymentStatus:true,
        purchasedStatus:false,
        balance:"65000"

    }
]
function Purchase() {
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
            <th>Date</th>
            <th>Seed</th>
            <th>code</th>
            <th>Reference No</th>
            <th>Purchased Status</th>
            <th>Supplier</th>
            <th>Total</th>
            <th>Quantity</th>
            <th>Paid</th>
            <th>Balance</th>
            <th>Payment</th>
            <th>Action</th>
        </tr>
        {
            data.map((item, index)=>(
                <tr>
                    <td>{item.date}</td>
                    <td>{item.seed}</td>
                    <td>{item.code}</td>
                    <td>{item.refNo}</td>
                    <td><button className={`${item.purchasedStatus?"bg-success":"bg-danger"} p-1 btn w-100 text-white`}>{item.purchasedStatus?"purchased":"pending"} </button></td>
                    <td>{item.Supplier}</td>
                    <td>{item.total}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.paid}</td>
                    <td>{item.balance}</td>
                    <td><button className={`${item.PaymentStatus?"bg-success":"bg-danger"} p-1 btn w-100 text-white`}>{item.PaymentStatus?"paid":"pending"} </button></td>
                   
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

export default Purchase
