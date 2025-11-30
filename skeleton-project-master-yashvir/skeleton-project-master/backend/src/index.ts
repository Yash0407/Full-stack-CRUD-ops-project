import express, { Request, Response } from 'express';
import fs, { read } from 'fs'; // File system module to read/write JSON data
import bodyParser from 'body-parser'; // Middleware to parse JSON request bodies
import path from 'path'; // Module to handle file paths

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON in request bodies
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4300',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

// Path to the JSON file storing fund data
const dataFilePath = path.join(__dirname, '..', 'data', 'funds_data.json');

//Helper functions to read and write to the data file.
function readFile() {
  const data = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(data);
}

function writeFile(data: any) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 1), 'utf-8');
}


app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

// API route to get all items
app.get('/getAllItems', (req, res) => {
  try {
    const fileData = readFile();
    res.send({ success: "true", data: fileData });
  } catch (err) {
    res.send({ success: "false", error: err });
  }
});

// API route to get single items whose name is exaclty same as in request
app.get('/getItem/:name', (req: any, res: any) => {
  try {
    const fileData = readFile();
    const name = decodeURIComponent(req.params.name);
    const item = fileData.find((x: any) => (x.name) == name);
    if (item) {
      res.send({ success: "true", data: item });
    } else {
      return res.send({ success: "false", message: "Item not found" });
    }
  } catch (err) {
    return res.send({ success: "false", error: err });
  }
});

// API route to update a specific item by name
app.put('/updateItem/:name', (req: any, res: any) => {
  const fileData = readFile();
  const name = decodeURIComponent(req.params.name);
  const update = req.body;
  // console.log(update);

  const indexOfItem = fileData.findIndex((x: any) => x.name == name);

  if (indexOfItem === -1) {
    return res.send({ success: "false", message: "Unable to find the data item!" });
  }

   // Merge existing item with updated fields
  fileData[indexOfItem] = { ...fileData[indexOfItem], ...update };
  // console.log(fileData[indexOfItem]);

  writeFile(fileData);

  return res.send({ success: "true", message: "Item updated." })
});

// API route to delete a specific item by name
app.delete('/deleteItem/:name', (req: any, res: any) => {
  const fileData = readFile();
  const name = decodeURIComponent(req.params.name);

  const indexOfItem = fileData.findIndex((x: any) => x.name === name);

  if (indexOfItem === -1) {
    return res.send({ success: false, message: "Item not found!" });
  }

  fileData.splice(indexOfItem, 1);

  writeFile(fileData);

  return res.send({ success: true, message: "Item deleted successfully." });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});





