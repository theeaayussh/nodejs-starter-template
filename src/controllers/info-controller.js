const { StatusCodes } = require("http-status-codes");
const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    error: {},
    message: "API IS LIVE",
    data: {},
  });
};

module.exports = {
  info: info,
};
