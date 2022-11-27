import React from 'react'
import pic1 from "../Images/img1.jpg"
import { BsBriefcase } from 'react-icons/bs';
import { BiBrain } from 'react-icons/bi';
import { TbFileDescription } from 'react-icons/tb';
import { Nav } from './Nav';
import './HomeEasyjob.css'
import { DeleteJob, GetJobByEmpId } from '../Actions/action';
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";

export const Card = (props) => {

    var dispatch=useDispatch();


    const Delete=(id)=>{
        
        dispatch(DeleteJob(id,props.employer));
    }

    const Edit=(id)=>{


        var job={
            id:props.id,
            desc:props.desc,
            skill:props.skill,
            exp:props.exp,
            title:props.title
        }
    

        localStorage.setItem("jobad", JSON.stringify(job));

        window.location.replace("/newad");
      
       
    }
    
    return (
        <div className="card" style={{height:"200px", display:"flex", flexDirection:"column"}}>
            <div className='header'>
                <div style={{
                    padding: 12,
                    marginLeft: 10,
                }}>
                    <img className='header-img' src={pic1}></img>
                </div>
                <h4>{props.title}</h4>
            </div>
            <div className='card-desc'>

                
                <TbFileDescription />

                {props.desc}
            </div>

            <div className='card-bodyhome'>
                <div >
                    
                    <BiBrain style={{ padding: "0px 2px" }}></BiBrain>
                    {props.skill}
                </div>
                <div>
                    <BsBriefcase style={{ padding: "0px 2px" }}></BsBriefcase>
                    {props.exp} years experience
                </div>

            </div>

            <div className='card-button'>
                <div style={{ fontSize: "17px", padding: "0px 20px",fontWeight:"bold"}}>{props.status}</div>
                <div>
                    <button class="ui primary button" onClick={()=>Edit(props.id)}>
                        Edit
                    </button>
                    <button class="ui red button" onClick={()=>Delete(props.id)}>Delete</button>
                </div>

            </div>
        </div>

    )
}

class Home extends React.Component {
     employer="Prasanth"

    componentDidMount(){
       
        console.log("at home com");
        this.props.dispatch(GetJobByEmpId(this.employer));
        console.log("completed");

    }

    

    sat=(value)=>{
        
    
         if(value==1){     
            return(<p style={{color:"green"}}>Approved</p>) 
         }
         return(<p style={{color:"red"}}>Pending</p>)
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <br />
                <br />
                <div className='main-card' >
                    <center>

                        <div className="ui two stackable cards">

                            {this.props.joblist.map((item,index)=>

                              <Card employer={this.employer} title={item.jobTitle} com={item.companyName} desc={item.jobDescription} exp={item.expRequired} skill={item.skillsRequired}  status={this.sat(item.jobStatus)} id={item.jobId}/>
                            
                            )}


                        </div>

                    </center>


                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log("at 93"+state.joblist);
    const {joblist}=state;
    return{
        joblist
    };
}
export default connect (mapStateToProps)(Home)

// export default Home