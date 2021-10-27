'use strict'

const S3Service = require( './src/service/s3Service')
const ZipService = require('./src/service/zipService')
const FileSystemService = require('./src/service/fileSystemService')

module.exports.handler = async (event) => {
  console.log(event);
  const response = {
        statusCode: 200,
        body: JSON.stringify(event),
    };
  console.log({response: response});
  return response;

  let file;

  try {

    const zipService = new ZipService();
    const fileSystemService = new FileSystemService();
    const s3Service = new S3Service({
      accessKeyId: this.process.S3_ACCESS_KEY,
      secretAccessKey: this.process.S3_ACCESS_SECRET,
    });

    zipService.setInputFilePath(file);
    zipService.setOutPutFilePath('tabela_contigencia.csv');
    await zipService.unzip();
    s3Service.initS3();

  } catch (error) {
    console.log(error);
  }
};
