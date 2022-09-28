import React, { Component } from 'react'
import axios from 'axios'

export default class Test extends Component {

//initializing a constructor to store the props
constructor(props){
    super(props);
    this.state={
        Name:"",
        NIC:"",
        Gender:"",
    }
}



//set input data  
handleInputChange= (e)=>{
    const {name,value} = e.target;
  
    this.setState({
        ...this.state,
        [name]:value
    })

//validations
if (name=== "Name") {
          
    if (Number(value)) {
      alert("Name Cannot Contain Numerical Value");
    }
  }

  //for new type nic
  if(name==="NIC"){
    if(value.length >12 ){
        alert("Invalid NIC Type!!");
    }
  }

  /*
  //for old type nic

  if(name=="NIC"){
  if (!value.indexOf('V') > -1)
{
  alert("Enter V");
}
}
 if(name==="NIC"){
    if(value.length >10 ){
        alert("Invalid NIC Type!!");
    }
  }
*/


}






//when click the submit button, data will be stored
onSubmit = (e) =>{

    e.preventDefault();

    const {Name,NIC,Gender}= this.state;
    
    const data ={
        Name:Name,
        NIC:NIC,
        Gender:Gender
    }

//check the data is saved and success msg will display
    console.log(data)

    axios.post('http://localhost:8000/Person/save',data).then((res)=>{
        if(res.data.success){
            this.setState(
                {
                    Name:"",
                    NIC:"",
                    Gender:""

                }
            )
            alert("You Are Saving The Details");
            
            
        }
       
    })

    
    // clear all input values
    handleClick = (event) => {
        
        event.target.reset();
      };

}

 


  render() {
    return (
      <div>

        <div className="col-md-8 mt-4 mx-auto">
                <div style={{height:'80px', width:'1100px', backgroundColor:"#59bfff", marginTop:'-20px'}}>
                <br/>
                 <br/>
                <h1 style={{color:'#Black', textAlign:'center',fontSize:"60px"}}>ADD DETAILS</h1>
                <div style={{height:'80px', width:'1100px', backgroundColor:"#bfe6ff", marginTop:'-50px'}}></div>
                
         
            </div>

            <br/> <br/> <br/> <br/> 
              
                    <form>
                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontSize:'20px'}}>Name:</label>
                            <input type="text"
                            className="form-control"
                            name="Name"
                            placeholder="Enter the Name"
                            value={this.state.Name}
                            onChange={this.handleInputChange} required/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontSize:'20px'}}>NIC:</label>
                            <input type="text"
                            className="form-control"
                            name="NIC"
                            placeholder="Enter the NIC"
                            value={this.state.NIC}
                            onChange={this.handleInputChange} required/>
                    </div>
                        

                    <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontSize:'20px'}}>Gender:</label>
                            <select
                            id="gender"
                            
                            className="form-control"
                            name="Gender"
                            placeholder="Select your Gender"
                            value={this.state.Gender}
                            onChange={this.handleInputChange} required>
                                    <option value=" ">Choose</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                    
                              </select>

                    </div>
                        
                    <div style={{marginTop:'10px',fontSize:'16px',marginBottom:'20px'}}>

                    <table>
                      <tr>
                        <td>
                          <button className="btn btn-success" type="submit"  onClick={this.onSubmit} >
                                  <i className="far fa-check-square"></i>
                                  &nbsp; Add

                          </button>
                        </td>

                        <td>
                          <button className="btn btn-warning" type="submit"  onClick={this.handleClick} >
                                  <i class="fa-solid fa-broom"></i>
                                  &nbsp; Clear

                          </button>
                        </td>

                        <td>
                        <button className="btn btn-success" 
                            style={{marginLeft:'720px',padding:'8px 8px',backgroundColor:'#3895d3'}}>
                            <a href="/View" style={{textDecoration:'none',backgroundColor:'#3895d3',color:'white',fontSize:'16px'}}> 
                            <i class="fa-solid fa-table"></i>&nbsp;Display Page</a>
                            </button>

                        </td>

                      </tr>
                    </table>

                    </div>
                   
					<p>* Add button to submit the details</p>
                    <p>* clear button to clear all the fields</p>
             
                    </form>
                   

                    
            </div>


      </div>
    )
  }
}
