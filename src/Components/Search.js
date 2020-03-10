import React from "react"

class Search extends React.Component{
 constructor(props){
   super(props)
   this.state = {
    radio: "title",
    userInput: "",

   }
 }
 
  handleClick (){
     const {radio, userInput} = this.state,
           {fileList, setFilteredArray} = this.props

     let array = fileList.filter(file => {
          return file[radio].toLowerCase().includes(userInput) 
        })
        setFilteredArray(array);
        this.setState({userInput: ""});
  }

  render(){

    return(
      <>
      {/* < className="search-container"> */}

        <div>
          <input className="search-bar" placeholder="type here" value={this.state.userInput} onChange={(event) => this.setState({userInput: event.target.value})}/>

          <button className="search-button" onClick={() => this.handleClick()}>Search</button>
        </div>

        <div className="radio-container">
          <div>
            <input type="radio" name="search" value="title" defaultChecked
            onClick={(event)=>this.setState({radio: event.target.value})}/>
            <span>Title</span> 
          </div>

          <div>
            <input type="radio"name="search" value="body" onClick={(event)=>this.setState({radio: event.target.value})}/>
            <span>Body</span> 
          </div>

          <div>
            <input type="radio"name="search" value="date"onClick={(event)=>this.setState({radio: event.target.value})}/>
            <span>Date</span>
          </div>

        </div>
      </>
    )
  }
}

export default Search