class APIFeatures {
  constructor(query, queryString, configLimit) {
    this.query = query;
    this.queryString = queryString;
    this.configLimit = configLimit;
  }

  filter() {
    // easy filtering
    const queryObj = { ...this.queryString };
    const exclusiveFields = ['page', 'limit', 'sort', 'fields'];
    exclusiveFields.map(el => delete queryObj[el]);

    // filtering with operator
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/, match => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-milliseconds');
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const limitBy = this.queryString.fields.split(',').join(' ');
      this.query = this.query.select(limitBy);
    } else {
      this.query.select('-__v');
    }

    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || this.configLimit;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);

    return this;
  }
}
module.exports = APIFeatures;
