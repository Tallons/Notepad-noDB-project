const fileList = require("../../data.json")
const selectedFiles = []
let newId = 5

var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var dateString = (month + 1) + "/" + date + "/" + year;


module.exports = {
  getFileList: (req, res) => {
    res.status(200).send(fileList);
  },

  createFile: (req, res) => {
    console.log(req.body);
    const{file} = req.body;
    file.id = newId
    newId++
    fileList.unshift({...file})
    res.status(200).send(fileList);
  },

  editFile: (req, res) => {
    const {id} = req.params;
    const{title, body} = req.body;
    const index = fileList.findIndex(file => file.id === +id);
    const updatedFile = fileList[index]

    updatedFile.title = title || updatedFile.title;
    updatedFile.body = body || updatedFile.body;
    updatedFile.date = dateString;

    res.status(200).send(fileList);
  },

  deleteFile: (req, res) => {
    const {id} = req.params;
    const index = fileList.find(file => file.id === id)
    fileList.splice(index,1);
    res.status(200).send(fileList)

  }
}