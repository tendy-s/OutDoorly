const parkRouter = require('./parkRouter.js')


module.exports = (app) => {
  app.use("/parks", parkRouter);
};



