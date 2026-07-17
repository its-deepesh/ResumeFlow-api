const fs = require("fs");
const filePath = "./data.json";

/**
 * Reads the JSON data from the file system and parses it.
 * @returns {Object} The parsed JSON data.
 */
function readData() {
    return JSON.parse(fs.readFileSync(
        filePath, "utf-8"
    ));
}

/**
 * Writes a JSON object back to the file system.
 * @param {Object} data - The data to be stringified and saved.
 */
function writeData(data) {
    fs.writeFileSync(
        filePath, JSON.stringify(data, null, 2)
    );
}

module.exports = {
    readData,
    writeData
};