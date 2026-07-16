const fs = require("fs");
const filePath = "./data.json";

function readData() {
    return JSON.parse(fs.readFileSync(
        filePath, "utf-8"
    ));
}

function writeData(data) {
    fs.writeFileSync(
        filePath, JSON.stringify(data, null, 2)
    );
}

module.exports = {
    readData,
    writeData
};