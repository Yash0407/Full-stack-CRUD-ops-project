"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4300',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));
const dataFilePath = path_1.default.join(__dirname, '..', 'data', 'funds_data.json');
//Helper functions to read and write to the data file.
function readFile() {
    const data = fs_1.default.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(data);
}
function writeFile(data) {
    fs_1.default.writeFileSync(dataFilePath, JSON.stringify(data, null, 1), 'utf-8');
}
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});
app.get('/getAllItems', (req, res) => {
    try {
        const fileData = readFile();
        res.send({ success: "true", data: fileData });
    }
    catch (err) {
        res.send({ success: "false", error: err });
    }
});
app.get('/getItem/:name', (req, res) => {
    try {
        const fileData = readFile();
        const name = decodeURIComponent(req.params.name);
        const item = fileData.find((x) => (x.name) == name);
        if (item) {
            res.send({ success: "true", data: item });
        }
        else {
            return res.send({ success: "false", message: "Item not found" });
        }
    }
    catch (err) {
        return res.send({ success: "false", error: err });
    }
});
app.put('/updateItem/:name', (req, res) => {
    const fileData = readFile();
    const name = decodeURIComponent(req.params.name);
    const update = req.body;
    // console.log(update);
    const indexOfItem = fileData.findIndex((x) => x.name == name);
    if (indexOfItem === -1) {
        return res.send({ success: "false", message: "Unable to find the data item!" });
    }
    fileData[indexOfItem] = { ...fileData[indexOfItem], ...update };
    // console.log(fileData[indexOfItem]);
    writeFile(fileData);
    return res.send({ success: "true", message: "Item updated." });
});
app.delete('/deleteItem/:name', (req, res) => {
    const fileData = readFile();
    const name = decodeURIComponent(req.params.name);
    const indexOfItem = fileData.findIndex((x) => x.name === name);
    if (indexOfItem === -1) {
        return res.send({ success: false, message: "Item not found!" });
    }
    fileData.splice(indexOfItem, 1);
    writeFile(fileData);
    return res.send({ success: true, message: "Item deleted successfully." });
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
