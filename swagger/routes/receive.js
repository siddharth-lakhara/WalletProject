const Joi = require('joi');

const receiveMoneySwagger = {
  responses: {
    200: {
      description: 'Success',
      schema: Joi.object({
        message: Joi.string().example('Transaction completed'),
      }).label('Result'),
    },
  },
  400: { description: 'Invalid request' },
  401: { description: 'Unauthorized' },
};


module.exports = receiveMoneySwagger;