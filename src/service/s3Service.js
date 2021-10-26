'use strict'

const AWS = require('aws-sdk');
const FileSystemService = require('./fileSystemService');

module.exports = class S3Service {
    constructor(s3Config) {
        this.s3Config = s3Config;
        this.fileSystemService = new FileSystemService();
    }

    initS3() {
        return this.s3 = new AWS.S3({
            accessKeyId: this.s3Config.accessKeyId,
            secretAccessKey: this.s3Config.secretAccessKey,
        });
    }

    upload(filePath) {
        const file = this.fileSystemService.readFileStream(filePath);
        this.s3.putObject({
          Bucket: process.env.BUCKET,
          Key: filePath,
          Body: file,
        }, (err, data) => {
          if (err) {
            console.log(err);
            return err;
          }
          console.log(data);
          return data;
        });
    }
}