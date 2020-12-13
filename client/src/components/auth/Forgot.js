import React from 'react'

const Forgot = () => {

  const onChange = e => {

  }

  const onSubmit = e => {

  }

  return (
    <>
      <div className="w-75" style={{ position: "relative", margin: 'auto', marginTop: '120px' }}>
        {/* <Alert /> */}
      </div>
      <div className="row">
        <div className="col-md">
          <div className="container-fluid content w-50">
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
                {/* <h3>Request New Password</h3> */}
                <form className="form-group" onSubmit={onSubmit}>
                  <div>
                    <small>Your registered email:</small>
                    <input type="email" name="email" className="form-control form-control-lg" onChange={onChange} />
                  </div>
                  <div>
                    <input type="submit" value="Reset Password" className="btn btn-primary mt-3" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forgot
