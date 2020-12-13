import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { createPost } from '../../actions/post'
// import { formatDate } from '../utils/helper'
import Moment from 'react-moment'


const PostForm = ({ history }) => {
  // const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: '',
    // price: '',
    category: '',
    optionVote: false,
    status: false,
    finalVote: '',
    description: '',
    complain: false
  });


  const setVote = () => {
    setFormData({ ...formData, status: document.querySelector('.status').checked });
    toggleActive(!activateVote)
  }

  const setComplain = () => {
    setFormData({ ...formData, complain: document.querySelector('.complain').checked });
  }

  const { title, category, optionVote, finalVote, status, description, complain } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = e => {
    e.preventDefault();
  }


  const [activateVote, toggleActive] = useState(false);
  const [withOption, toggleWithOption] = useState();
  const [noOption, togglenoOption] = useState();


  const post = '';

  return (
    <>
      <div className="w-75" style={{ position: "relative", margin: 'auto', marginTop: '120px' }}>
        {/* <Alert /> */}
      </div>
      <div className="row">
        <div className="col-md">
          <div>
            <div className="container w-50" >
              <div className="card">
                <div className="card-header">
                  <h3>New Post</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <form onSubmit={onSubmit} className="form-group">
                        <div className="mb-3">
                          <small>Title:</small>
                          <input type="text" name="title" className="form-control" value={title} />
                        </div>
                        <div className="mb-3">
                          <small>Category</small>
                          <select name="category" value={category} className="form-control">
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
                            <input type="checkbox" name="status" value={status} className="status mr-2" onClick={setVote} /><small>Edit voting</small>
                          </>
                          {/* )} */}
                          <input type="checkbox" name="complain" className="complain ml-4 mr-2" onClick={setComplain} /><small>complain ??</small>
                        </div>

                        {/* Choose date/option for vote */}
                        {activateVote && (
                          <div className="mb-3">
                            <div className="mb-3">
                              {/* option vote */}

                              <input type="radio" name="optionVote" className="option mr-2" checked={post && !post.optionVote ? 'checked' : noOption} value={optionVote || ''} onChange={e => {
                                setFormData({ ...formData, optionVote: false })
                                togglenoOption(true)
                                toggleWithOption(false)
                              }} />
                              <small>No option</small>

                              <input type="radio" name="optionVote" className="option ml-4 mr-2" value={optionVote || ''} checked={post && post.optionVote ? 'checked' : withOption} className="option ml-3 mr-2" onChange={e => {
                                setFormData({ ...formData, optionVote: true })
                                togglenoOption(false)
                                toggleWithOption(true)
                              }} />
                              <small>With option (max. 4)</small>

                            </div>
                            {/* calender */}
                            <small className="mr-3">End time:</small> <Moment format='DD/MM/YYYY' className="text-danger">{post && post.finalVote}</Moment> <br />
                            <input type="date" name="finalVote" className="my-3" onChange={onChange} />
                          </div>
                        )}

                        <div>
                          <small>Description:</small>
                          <textarea name="description" className="form-control" cols="20" rows="10" value={description} onChange={e => onChange(e)}></textarea>
                        </div>
                        <div className="float-right mt-4">
                          <input type="submit" value={post ? 'Update Post' : 'Send Post'} className="btn btn-primary" />{' '}
                          <Link to={post ? `/posts/${post && `${post._id}/reviews`}` : '/posts'} type="button" className="btn btn-secondary">Cancel</Link>
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
    </>
  )
}

export default PostForm
