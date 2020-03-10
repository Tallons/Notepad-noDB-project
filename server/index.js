const express = require("express"),
      ctrl = require("./controllers/controller"),
      app = express()

const PORT = 3200;

app.use(express.json());

app.get("/api/files", ctrl.getFileList)
app.post("/api/files", ctrl.createFile)
app.put("/api/files/:id", ctrl.editFile)
app.delete("/api/files/:id", ctrl.deleteFile)


app.listen(PORT, () => console.log("Server running on port " + PORT))