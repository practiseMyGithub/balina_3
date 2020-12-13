import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="row mt-5">
      <div className="col-md">
        <div className="w-75" style={{ position: "relative", margin: 'auto', marginTop: '120px' }}>
          {/* <Alert /> */}
        </div>

        <div className="container mt-3 w-50">
          <h3 className="text-info mb-5 text-center">Register</h3>
          <form>
            <div className="form-group">
              <small>Email</small>
              <input type="email" className="form-control form-control-lg" name="email" />
            </div>
            <div className="form-group">
              <small>Password</small>
              <input type="password" className="form-control form-control-lg" name="password" />
            </div>
            <div className="form-group">
              <small>Confirmation password</small>
              <input type="password" className="form-control form-control-lg" name="password2" />
            </div>
            <input type="submit" value="Register" className="btn btn-primary" />
          </form>
          <div className="mt-3">
            <p>Already have account ? {' '}
              <Link to="/login">
                <span className="text-primary">Sign in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Register
