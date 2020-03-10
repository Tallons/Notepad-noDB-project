import React, {useState} from "react"
import "./File.css"



function File ({index, id, fileTitle, fileBody, date, selectFile, editFile}) {

const [isEditing, setEditing] = useState(false),
      [title, setTitle] = useState(fileTitle),
      [body, setBody] = useState(fileBody),
      [expand, toggleExpand] = useState(false)


      console.log(expand)
      console.log(document.getElementById("test"))

return(
      <div id="test" className ={`${expand ? "file-frame frame-expanded" : "file-frame"}`}>

       <div className="selection-box">
        <input type="checkbox" className="check-box" onClick={(e)=> selectFile(id, e)}></input>
       </div>

        <div className= "file-info"
          onClick={()=> toggleExpand(!expand)}
          onDoubleClick={()=> setEditing(!isEditing)}
          style={{backgroundColor: index%2===0 && "papayawhip"}}>

          <header className="file-header">

              <h1 className="file-title"> {
                  !isEditing
                  ? title 
                  : <input onChange={(event) => setTitle(event.target.value)} name="title" type="text" value={title}/>
              } </h1>

              <h1 className="date-stamp">last updated: {date} </h1>

          </header>
          <p className="textarea-box"> 
          
          {
              !isEditing 
              ? body 
              : <textarea onChange={(event) => setBody(event.target.value)} name="body" type="text" value={body}/>
          }

              <span className="category"></span>
          </p>
        </div>

        {isEditing
            && (
              <div>
              <button onClick={() => {
                  editFile(id, {title, body})
                  setEditing(false)
                }}>
                submit
                </button>
                <button className="cancel-button" onClick={()=> setEditing(!isEditing)}> cancel </button>
                </div>
            )
          }


        
      </div>
    )
  
}


export default File;