import React from 'react'

const ExpenseForm = () => {

  const onChange = e => {

  }

  const onSubmit = e => {

  }

  // Close form by clicking close btn
  const closeForm = () => {
    // dispatch(clearCurrent());
    document.querySelector('.close').click();
  }

  return (
    <>
      <div className="modal fade p-4" id="expenseForm">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">New Expense</h5>
              <button className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="post-alert"></div>
              {/* ADD EXP FORM */}
              <form className="mb-5">
                <div className="form-group mb-3">
                  <small>Title:</small>
                  <input type="text" className="form-control" name="title" onChange={onChange} />
                </div>
                <div className="form-group mb-3">
                  <small>Amount:</small>
                  <input type="number" name="price" step="0.1" className="form-control" placeholder="฿ 0.0" onChange={onChange} />
                </div>
                <div className="form-group mb-3">
                  <small>Pay to / Income from :</small>
                  <input type="text" name="company" className="form-control" onChange={onChange} />
                </div>
                <div className="form-group mb-3">
                  <small>Expense / Income ?</small>
                  <select name="category" className="form-control" onChange={onChange}>
                    <option value="none" className="category">.... .... ....</option>
                    <option value="Expense" className="category">Expense</option>
                    <option value="Income" className="category">Income</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <div className="btn-group">
                    <div className="btn-group dropright">
                      <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose Option</button>
                      {/* {subject} */}
                      <div className="dropdown-menu" id="xx" name="subject">
                        {/* {category && category === 'Income' && ( */}
                        <div>
                          <small className="p-2 text-muted display-5">Annual:</small>
                          <a href="#!" value="Interest" className="dropdown-item">Interest</a>
                          <a href="#!" className="dropdown-item">Common fee</a>
                          <a href="#!" className="dropdown-item">Other income</a>
                        </div>
                        {/* )} */}

                        {/* {category && category === 'Expense' && ( */}
                        <div>
                          <small className="p-2 text-muted display-5">Common Area:</small>
                          <a href="#!" className="dropdown-item">Pool</a>
                          <a href="#!" className="dropdown-item">Garden</a>
                          <a href="#!" className="dropdown-item">Fitness</a>
                          <a href="#!" className="dropdown-item">Security</a>
                          <a href="#!" className="dropdown-item">Other area</a>
                          <div className="dropdown-divider"></div>
                          <small className="p-2 text-muted display-5">Consumes:</small>
                          <a href="#!" className="dropdown-item">Internet</a>
                          <a href="#!" className="dropdown-item">Electric</a>
                          <a href="#!" className="dropdown-item">Water</a>
                          <a href="#!" className="dropdown-item">Product</a>
                          <a href="#!" className="dropdown-item">Other consume</a>
                          <div className="dropdown-divider"></div>
                          <small className="p-2 text-muted display-5">Legal Fees:</small>
                          <a href="#!" className="dropdown-item">Tax</a>
                          <a href="#!" className="dropdown-item">Bank</a>
                          <a href="#!" className="dropdown-item">Lawyer</a>
                          <a href="#!" className="dropdown-item">Other legal</a>
                          <div className="dropdown-divider"></div>
                          <small className="p-2 text-muted display-5">Salary:</small>
                          <a href="#!" className="dropdown-item">Maid</a>
                          <a href="#!" className="dropdown-item">Guard</a>
                          <a href="#!" className="dropdown-item">Manager</a>
                          <a href="#!" className="dropdown-item">Other salary</a>
                        </div>
                        {/* )} */}

                        {/* {!category && (
                        <span href="#!" className="dropdown-item px-2" style={{ width: '250px' }}>Select category above first !</span>
                      )} */}
                      </div>
                    </div>
                  </div>
                  <p id="selected-add-subject" className="py-3 text-muted"></p>
                </div>
                <div className="form-group mb-3">
                  <small>Description:</small>
                  <textarea name="description" className="form-control" cols="30" rows="3" onChange={onChange}></textarea>
                </div>
                <div className="float-right">
                  <input type="submit" className="btn btn-primary" />
                </div>
                <div className="float-right mx-3">
                  <button type="button" className="btn btn-secondary" onClick={closeForm} >Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExpenseForm
