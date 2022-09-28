import React, { Component } from 'react'
import axios from 'axios'

export default class View extends Component {

    //initialize constructor to pass the props
constructor (props) {
    super(props);
    this.state={
      //initializing an array 
      GetAllpeople:[]
    };
  }


 //calling the method after componenets render to the page
 componentDidMount(){
    this.retrievePersonDetalis();
  }

 //get request method
 retrievePersonDetalis(){
    axios.get("http://localhost:8000/allPeople").then(res=>{
      console.log(res.data);
     
      if(res.data.success){
        this.setState({
          GetAllpeople:res.data.existingData
        });
        console.log(this.state.GetAllpeople)
      }
    })
}






  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto">


                <div style={{height:'80px', width:'1100px', backgroundColor:"#59bfff", marginTop:'-20px'}}>
                <br/><br/>

                <h1 style={{color:'#Black', textAlign:'center',fontSize:"60px"}}>VIEW DETAILS</h1>
                
                <div style={{height:'80px', width:'1100px', backgroundColor:"#bfe6ff", marginTop:'-50px'}}></div>
      </div>
      

          <br/>   <br/>  <br/>    
                  

          <table className="table table-hover" style={{marginTop:'50px',marginLeft:'50px',marginRight:'50px'}}>
              <thead>
                <tr style={{fontSize:'20px'}}>
                    <th scope="col">NO</th>
                    <th scope="col">Name</th>
                    <th scope="col">NIC</th>
                    <th scope="col">Gender</th>
                </tr>
              </thead>
              
              <tbody>

                {this.state.GetAllpeople.map((GetAllpeople,index)=>(
                <tr key ={index}>
                  <th scope='row'>{index+1}</th>
                  <td>{GetAllpeople.Name}</td> 
                  <td>{GetAllpeople.NIC}</td> 
                  <td>{GetAllpeople.Gender}</td> 

                    
                </tr>
                
                    ))}

              </tbody>
          </table>

          <button className="btn btn-success" 
                style={{marginLeft:'460px',padding:'8px 8px',backgroundColor:'#3895d3'}}>
                <a href="/" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                <i class="far fa-arrow-alt-circle-left"></i>&nbsp;Go Back</a>
          </button>

      </div>






    )
  }
}
