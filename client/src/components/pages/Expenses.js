import React from 'react'
import ExpenseForm from '../expenses/ExpenseForm'

const Expenses = () => {

  // FOR MONTH SELECT OPTION
  const expenseMonth = () => {
    const months = 'January,February,March,April,May,June,July,August,September,October,November,December';
    const monthsArr = months.split(',');
    return monthsArr;
  }

  // FOR YEAR SELECT OPTION 
  const expenseYear = () => {
    let elements = [];
    const thisYear = new Date().getFullYear();

    for (let i = 0; i <= 5; i++) {
      elements.push(thisYear + i);
    }

    return elements;
  }

  return (
    <div className="row">
      <div className="col-md">
        <div className="content">
          <div style={{ position: "relative", margin: 'auto' }}>
            {/* <Alert /> */}
          </div>
          <div className="row">
            {/* <!-- EXPENSE FILTER FORM --> */}
            <div className="col-md-6">
              <form id="expense-filter-form" className="form-group form-inline">
                <select id="month-expenses" className="form-control mr-2">

                  {/* <option>-- Select Month --</option> */}
                  {expenseMonth().length > 0 && expenseMonth().map((month, i) => (
                    <option key={i + 1} value={i + 1} >
                      {month}
                    </option>
                  ))}
                </select>
                <select className="form-control mr-2">
                  {/* <option>--Select Year--</option> */}
                  {expenseYear().map(exp => (
                    <option key={exp} value={exp && exp}>{exp}</option>
                  ))}
                </select>
                <button type="submit" className="btn btn-success"><i className="fas fa-search"></i></button>
              </form>
            </div>
            {/* <!-- total expense --> */}
            <div className="col-md-2">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">฿</span>
                </div>
                {/* calculateExpense('expense') */}
                <input type="text" className="form-control text-danger" aria-label="Amount (to the nearest bath)" disabled />
              </div>
            </div>
            {/* <!-- total income --> */}
            <div className="col-md-2">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">฿</span>
                </div>
                <input type="text" className="form-control" aria-label="Amount (to the nearest bath)" disabled />
              </div>
            </div>
            {/* <!-- add expense button --> */}
            {/* {user && user.role !== 'member' && ( */}
            <div className="col-md-2">
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#expenseForm">
                <i className="fas fa-plus"></i> Add Expense
              </button>
            </div>
            {/* )} */}
          </div>

          {/* Expense item */}
          <div className="row">
            <div className="table-responsive">
              <table id="expense-table" className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Title</th>
                    <th>Company</th>
                    <th>Note</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* {expenses && expenses.map(expense => (
                  <ExpenseItem key={expense._id} expense={expense} />
                ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* <!-- Modal add expense window action--> */}
        <ExpenseForm />

      </div>
    </div>
  )
}

export default Expenses
