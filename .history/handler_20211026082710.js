'use strict'

const AWS = require('aws-sdk'); // eslint-disable-line const/no-extraneous-dependencie
const fs = require('fs');
const path = require('path');
const yauzl = require("yauzl");
require('dotenv').config();

module.exports.handler = async (event) => {
  
  let file;

  try {
    const S3 = new AWS.S3({
      accessKeyId: this.process.S3_ACCESS_KEY,
      secretAccessKey: this.process.S3_ACCESS_SECRET,
    });
  
    const write = fs.createWriteStream('tabela_contingencia.csv');
    yauzl.open(path.resolve('.', "tabela_contingencia.zip"), {lazyEntries: true}, function(err, zipfile) {
        if (err) throw err;
        zipfile.readEntry();
        zipfile.on("entry", function(entry) {
            if (/\/$/.test(entry.fileName)) {
                // console.log(entry.fileName);
                zipfile.readEntry();
            } else {
                // file entry
                zipfile.openReadStream(entry, function(err, readStream) {
                    if (err) throw err;
                    readStream.on("end", function() {
                        zipfile.readEntry();
                    });
                    readStream.pipe(write).on('finish', (data) => {
                        file = fs.readFileSync(path.resolve('.', 'tabela_contingencia.csv'));

                        S3.putObject({
                          Bucket: process.env.BUCKET,
                          Key: "tabela_contingencia.csv",
                          Body: file,
                        }, (err, data) => {
                          if (err) {
                            console.log(err);
                            return;
                          }
                          console.log(data);
                        });
                    });    
                });
            }
        });
    });    
  } catch (error) {
    console.log(error);
  }
};