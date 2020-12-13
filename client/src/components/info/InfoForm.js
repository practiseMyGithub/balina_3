import React from 'react'

const InfoForm = () => {

  const onChange = e => {

  }

  const onSubmit = e => {

  }

  return (
    <div className="modal fade p-0" id="infoForm">
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title">Add Info</h5>
            <button className="close" data-dismiss="modal">
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div>
              {/* <Alert /> */}
            </div>
            <div className="post-alert"></div>
            {/* <!-- Add Info Form --> */}
            <form onSubmit={onSubmit}>
              <div className="form-group mb-3">
                <small>Topic:</small>
                <select name="topic" className="form-control" onChange={onChange}>
                  <option value="empty" className="topic">-- Select topic --</option>
                  <optgroup label="Official">
                    <option value="meeting" className="topic">Meeting</option>
                    <option value="documents" className="topic">Documents</option>
                  </optgroup>
                  <optgroup label="Activity">
                    <option value="alarm" className="topic">Alarm</option>
                    <option value="repairing" className="topic">Repairing</option>
                    <option value="instalation" className="topic">Instalation</option>
                  </optgroup>
                  <optgroup label="Reception">
                    <option value="new-team" className="topic">New team</option>
                    <option value="service-time" className="topic">Service time</option>
                  </optgroup>
                  <optgroup label="General">
                    <option value="news" className="topic">News</option>
                    <option value="holiday" className="topic">Holiday</option>
                    <option value="common-pfee" className="topic">Common pfee</option>
                    <option value="PEA" className="topic">Electricity (PEA)</option>
                    <option value="PWA" className="topic">Water (PWA)</option>
                  </optgroup>
                </select>
              </div>
              <div className="form-group mb-3">
                <small>Information:</small>
                <textarea name="description" className="form-control" cols="15" rows="5"
                  placeholder="Type the infomation here." onChange={onChange}></textarea>
              </div>
              <input type="submit" className="btn btn-primary float-right" value="Send" />
              <button className="btn btn-secondary float-right mr-2" data-dismiss="modal">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoForm
