'use strict'

require('dotenv').config();
const S3Service = require('./src/service/s3Service');

module.exports.handler = async (event) => {
  
  let file;

  try {
    const S3 = new AWS.S3({
      accessKeyId: this.process.S3_ACCESS_KEY,
      secretAccessKey: this.process.S3_ACCESS_SECRET,
    });
  
    
   
  } catch (error) {
    console.log(error);
  }
};