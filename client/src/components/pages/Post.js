import React from 'react'
import { Link } from 'react-router-dom'
import InfoForm from '../info/InfoForm'



const Posts = () => {
  return (
    <div className="row">
      <div className="col-md">
        <div className="content">
          {/* clearPost() to avoid the data being filled in new form */}
          {/* ADD POST BTN */}
          <Link to="/posts/new" type="button" className="btn btn-success float-right text-white"><i
            className="fas fa-plus mr-2"></i>Post</Link>
          {/* ADD INFO BTN */}
          <button className="btn btn-info float-right mx-3" data-toggle="modal" data-target="#infoForm"><i
            className="fas fa-plus mr-2" ></i>Info</button>
        </div>
      </div>

      {/* INFO FORM MODAL ACTION */}
      <InfoForm />

    </div>

  )
}

export default Posts;
