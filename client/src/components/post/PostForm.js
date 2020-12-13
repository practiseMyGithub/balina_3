import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'


const PostForm = () => {
  return (
    <div className="row">
      <div className="col-md">
        <div className="content">
          <div className="container w-50" >
            <div className="card">
              <div className="card-header">
                <h3>New Post</h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12">
                    <form id="add-post-form" className="form-group">
                      <div className="mb-3">
                        <small>Title:</small>
                        <input type="text" name="title" id="title" className="form-control" />
                      </div>
                      <div className="mb-3">
                        <small>Category</small>
                        <select id="category-post" name="category" className="form-control">
                          <option value="" className="category">..... .... .....</option>
                          <option value="Garden" className="category">Garden</option>
                          <option value="Pool" className="category">Pool</option>
                          <option value="Internet" className="category">Internet</option>
                          <option value="Fitness" className="category">Fitness</option>
                          <option value="Legal" className="category">Legal</option>
                          <option value="Bank" className="category">Bank</option>
                          <option value="Others" className="category">Others</option>
                        </select>
                      </div>
                      <div className="custom-file mb-2">
                        {/* {user && user.role !== 'member' && ( */}
                        <>
                          <input type="checkbox" name="status" className="status mr-2" /><small>Edit voting</small>
                        </>
                        {/* )} */}
                        <input type="checkbox" name="complain" className="complain ml-4 mr-2" /><small>complain ??</small>
                      </div>

                      {/* Choose date/option for vote */}
                      {/* {!activateVote && activateVote || status && ( */} {/*OLD*/}
                      {/* {activateVote && ( */}
                      <div className="mb-3">
                        <div className="mb-3">
                          {/* option vote */}

                          <input type="radio" name="optionVote" className="option mr-2" />
                          <small>No option</small>

                          <input type="radio" name="optionVote" className="option ml-4 mr-2" />
                          <small>With option (max. 4)</small>

                        </div>
                        {/* calender */}
                        <small className="mr-3">End time:</small> <Moment format='DD/MM/YYYY' className="text-danger">0000</Moment> <br />
                        <input type="date" name="finalVote" className="my-3" />
                      </div>
                      {/* )} */}

                      <div>
                        <small>Description:</small>
                        <textarea name="description" id="description" className="form-control" cols="20" rows="10"></textarea>
                      </div>
                      <div className="float-right mt-4">
                        <input type="submit" className="btn btn-primary" />{' '}
                        <Link to="#!" type="button" className="btn btn-secondary">Cancel</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div >
        </div>
      </div>
    </div>
  )
}

export default PostForm
