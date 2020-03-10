import React from "react"
import "./Sidebar.css"
import Search from "./Search"

function SideBar (props){
  console.log(props)
  return (
    <div className="sidebar">

        <Search fileList={props.fileList}
                setFilteredArray={props.setFilteredArray}
        />
          <button className="create-file" onClick={() => props.createFile({})}>Create</button>
        
          <button className="delete-file" onClick={() => props.deleteFiles()}>Delete</button>
     </div>
  )
}

export default SideBar;