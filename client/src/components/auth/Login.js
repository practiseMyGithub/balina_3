import React from 'react'
import { Link } from 'react-router-dom'




const Login = () => {
  return (
    <div className="row mt-5">
      <div className="col-md">
        <div className="w-75" style={{ position: "relative", margin: 'auto', marginTop: '120px' }}>
          {/* <Alert /> */}
        </div>
        <div className="container w-50">
          <h3 className="text-info text-center mb-5">Login</h3>
          <form>
            <div className="form-group">
              <small>Email</small>
              <input type="email" className="form-control form-control-lg" name="email" />
            </div>
            <div className="form-group">
              <small>Password</small>
              <input type="password" className="form-control form-control-lg" name="password" minLength='4' />
            </div>
            <input type="submit" value="Login" className="btn btn-primary" />
          </form>
          <div className="mt-3">
            <p>Don't have account ?
            <Link to="/register">
                <span className="text-primary">{' '}Register</span>
              </Link>
            </p>
            <p>Forgot your password ?
            <Link to="/forgot-password">
                <span className="text-primary">{' '}Reset password</span>
              </Link>
            </p>
          </div>
        </div >
      </div>

    </div>
  )
}


export default Login;
