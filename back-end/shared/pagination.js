// Given provided page and size params, set pagination params
// Else, if not provided, set # of items/page as 5 and Page as 0
const getPagination = (page, size) => {
    const limit = size ? +size : 5;
    const offset = page ? (page - 1) * limit : 0;
  
    return { limit, offset };
  };
  
  //Given data page and limit, generate current page and total # of pages info
  // return provided data with added pagination info
  const getPagingData = (data, page, limit = 1) => {
    if (Array.isArray(data.count)) {
      data.count = data.count.length;
      data.totalPages = Math.ceil(data.count.length / limit);
    }
    data.currentPage = page ? page : 1;
    data.totalPages = Math.ceil(data.count / limit);
    return data;
  };
  
  module.exports = {
    getPagination: getPagination,
    getPagingData: getPagingData,
  };