'use strict'

const FileSystemService = require('./fileSystemService');
const yauzl = require("yauzl");

module.exports = class UnzipService {

    constructor() {
        this.fileSystemService = new FileSystemService();
    }

    setInputFilePath(inputFilePath) {
        this.inputFilePath = inputFilePath;
    }

    getInputFilePath() {
        return this.inputFilePath;
    }

    setOutPutFilePath(outputFilePath) {
        this.fileSystemService.createTmpFile(outputFilePath);
        this.outputFilePath = outputFilePath;
    }

    getOutPutFilePath() {
        return this.outputFilePath;
    }

    async unzip() {
        const fileSystemService = this.fileSystemService;
        const _self = this;

        const response =  yauzl.open(this.getInputFilePath(), {lazyEntries: true}, function(err, zipfile) {
            if (err) throw err;
            zipfile.readEntry();
            return zipfile.on("entry", function(entry) {
                if (/\/$/.test(entry.fileName)) {
                    return zipfile.readEntry();
                } else {
                    return zipfile.openReadStream(entry, function(err, readStream) {
                        if (err) throw err;
                        readStream.on("end", function() {
                            return zipfile.readEntry();
                        });
                        return readStream.pipe(fileSystemService.getWriteStream()).on('finish', (data) => {
                            return data;
                        });    
                    });
                }
            });
        });
    }
}