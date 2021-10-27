'use strict'

module.exports.handler = async (event) => {
  console.log(event);
  const response = {
        statusCode: 200,
        body: JSON.stringify(event),
    };
  console.log({response: response});
  return response;
};
