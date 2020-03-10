import React from "react"
import File from "./File"
import SideBar from "./SideBar"
import axios from "axios"
import "../App.css"

class Files extends React.Component{
  constructor(){
    super()
    this.state={
      fileList: [],
      selectedFiles:[],
      isEditing: false,
      filteredArray: []
    }
    this.createFile = this.createFile.bind(this)
    this.deleteFiles = this.deleteFiles.bind(this)
    this.editFile = this.editFile.bind(this)
  }

  componentDidMount(){
    axios.get("/api/files")
    .then(res => {
      this.setState({
        fileList: res.data
      })
    })
    .catch(error => console.log(error));
  }

  createFile (file) {
    axios.post("/api/files", {file})
    .then(res => {
      console.log("hit")
      this.setState({
        fileList: res.data
      })
    })
    .catch(error => console.log(error));
  }

  selectFile = (id,e) => {
    const {selectedFiles} = this.state
    const selectedCopy = [...selectedFiles]
  
      if(e.target.checked){
        selectedCopy.push(id)
      } else {
        const index = selectedCopy.findIndex(searchId => searchId === id)
  
        selectedCopy.splice(index, 1)
      }
      this.setState({selectedFiles: selectedCopy})
    console.log(selectedCopy)
    console.log("id", id)
  }

  editFile(id, file){
    axios.put(`api/files/${id}`, file).then(res =>
    this.setState({
      fileList: res.data
      })
    )

  }


  async deleteFiles (){
    const {selectedFiles} = this.state
        for(let i = 0; i < selectedFiles.length; i++){
          await axios.delete(`/api/files/${selectedFiles[i]}`)
          .then(res => {
            console.log(this.state.fileList)
            this.setState({
              fileList: res.data
            });
          });
        }
    this.setState({selectedFiles: []})
  }

    setFilteredArray =  (value) => {
       this.setState({filteredArray: value, userInput: ""})
     
    }



  render(){
    console.log(this.state.filteredArray)
    return(
      <div className='main'>  
        <SideBar 
            fileList = {this.state.fileList}
            createFile={this.createFile}
            deleteFiles={this.deleteFiles}
            filteredArray={this.state.filteredArray}
            setFilteredArray={this.setFilteredArray}
           />    
        <div className="files-main-frame">
            <div className="info-box"></div>

            {
            this.state.filteredArray.length
              ? (this.state.filteredArray.map((file, index) => {
                  return <File 
                        key = {file.id}
                        index = {index}
                        id = {file.id}
                        fileTitle = {file.title}
                        fileBody = {file.body}
                        date = {file.date}
                        editFile = {this.editFile}

                        selectFile = {this.selectFile}
                    /> }))
              : (this.state.fileList.map((file, index) => {
                  return <File 
                           key = {file.id}
                           index = {index}
                           id = {file.id}
                           fileTitle = {file.title}
                           fileBody = {file.body}
                           date = {file.date}
                           editFile = {this.editFile}
   
                           selectFile = {this.selectFile}
                           
                       /> }))
            }

        </div>
        </div>
    )
  }


}
export default Files;