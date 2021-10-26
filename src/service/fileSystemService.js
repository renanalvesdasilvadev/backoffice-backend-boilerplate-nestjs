'use strict'

const fs = require('fs');
const {readChunk} = require('read-chunk');
const { fromBuffer } = require('file-type');

module.exports = class FileSystemService {
    createTmpFile(file) {
        this.writeStream = fs.createWriteStream(file);
    }

    getWriteStream() {
        return this.writeStream;
    }

    readFileStream(filePath) {
        return fs.readFileSync(filePath);
    }

    createFileFromBase64(base64) {
        const buffer = readChunk.sync(filePath, 0, fileType.minimumBytes);
        console.log(fileType(buffer));
        return;
        return fs.writeFileSync("teste.zip", base64, 'base64', function(error) {
            if (error) {
                throw error;
                return;
            }

            console.log('deu bom');
        });
    }

    async checkExtension(base64Data) {
        return await fromBuffer(Buffer.from(base64Data, 'base64'));
    }
}