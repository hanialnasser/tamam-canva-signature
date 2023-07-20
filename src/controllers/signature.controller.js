const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { signatureService, } = require('../services');
const config = require('../config/config');
const ApiError = require('../utils/ApiError');

const drawCanvasSignature = catchAsync(async (req, res) => {
  if(req.params.configurationId !== config.configurationId){
    throw new ApiError(httpStatus.BAD_REQUEST, 'No Access For this Api call')
  }
  const signatureUrl = await signatureService.drawCanvasSignature(req.body.signature)
  res.status(httpStatus.CREATED).send({signatureCanvasUrl: signatureUrl});
});


module.exports = {
 drawCanvasSignature,
};
