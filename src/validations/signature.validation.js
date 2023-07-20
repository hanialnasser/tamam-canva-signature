const Joi = require('joi');

const getSignatureCanvasImage = {
  params: Joi.object().keys({
    configurationId: Joi.string().required(),
  }),
  body: Joi.object()
    .keys({
      signature: Joi.array()
    })
    .min(1),
};

module.exports = {
    getSignatureCanvasImage
}