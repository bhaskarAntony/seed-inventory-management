import React from 'react'

function NewSeed() {
  return (
    <div className='bg-light container-fluid'>
      <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card">
            <div className="card-header">
                <h1 className="fs-4">Add New Seed</h1>
            </div>
            <div className="card-body">
                <div className="form-control">
                    <lable className="form-label mt-3">Seed Type</lable>
                    <input type="text" className="form-control"  placeholder='seed' />
                </div>
                <div className="row">
                    <div className="col-6">
                    <div className="form-control">
                    <lable className="form-label mt-3">Name</lable>
                    <input type="text" className="form-control"  placeholder='seed' />
                      </div>
                    </div>
                    <div className="col-6 border-0">
                    <div className="form-control">
                    <lable className="form-label mt-3">Code</lable>
                    <input type="text" className="form-control"  placeholder='seed' />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                    <div className="form-control">
                    <lable className="form-label mt-3">Seed Type</lable>
                    <input type="text" className="form-control"  placeholder='seed' />
                      </div>
                    </div>
                    <div className="col-6 border-0">
                    <div className="form-control">
                    <lable className="form-label mt-3">Seed Type</lable>
                    <input type="text" className="form-control"  placeholder='seed' />
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NewSeed
