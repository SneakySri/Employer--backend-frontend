import React from "react";
import { Nav } from "./Nav";
import { Dropdown, Item } from 'semantic-ui-react'
import { AddJob,EditJob } from "../Actions/action";
import { useDispatch } from "react-redux";
import { Dispatch } from "react";
import { useState ,useEffect} from "react";

 const Easyform = () => {

    const [jobTitle, setJobTitle] = useState({});
    const [jobDesc, setJobDesc] = useState({});
    const [jobExp, setJobExp] = useState({});
    const [jobId, setJobId] = useState({});
    

    var job={jobId:0 ,jobTitle:"",jobDescription:"",skillsRequired:"",expRequired:0, jobStatus:false, employerName:"Prasanth",companyName:""}


    

    useEffect(() => {
        // Update the document title using the browser API
        // alert("form");
        const job1 = JSON.parse(localStorage.getItem("jobad"));
        console.log("at form.....",job);


        if(job1){
            // alert("oh")
             setJobTitle({jobTitle:(job1.title)}) ;
             setJobDesc({jobDesc:(job1.desc)}) ;
             setJobExp({jobExp:(job1.exp)}) ;
             setJobId({jobId:(job1.id)}) ;
             
            // alert(job1.exp);
        }
      },[]);


    var options = [
        { id: 1, key: 'angular', text: 'Angular', value: 'angular' },
        { id: 2, key: 'css', text: 'CSS', value: 'css' },
        { id: 3, key: 'design', text: 'Graphic Design', value: 'design' },
        { id: 4, key: 'ember', text: 'Ember', value: 'ember' },
        { id: 5, key: 'html', text: 'HTML', value: 'html' },
        { id: 6, key: 'ia', text: 'Information Architecture', value: 'ia' },
        { id: 7, key: 'javascript', text: 'Javascript', value: 'javascript' },
        { id: 8, key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
        { id: 9, key: 'meteor', text: 'Meteor', value: 'meteor' },
        { id: 10, key: 'node', text: 'NodeJS', value: 'node' },
        { id: 11, key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
        { id: 12, key: 'python', text: 'Python', value: 'python' },
        { id: 13, key: 'rails', text: 'Rails', value: 'rails' },
        { id: 14, key: 'react', text: 'React', value: 'react' },
        { id: 15, key: 'repair', text: 'Kitchen Repair', value: 'repair' },
        { id: 16, key: 'ruby', text: 'Ruby', value: 'ruby' },
        { id: 17, key: 'ui', text: 'UI Design', value: 'ui' },
        { id: 18, key: 'ux', text: 'User Experience', value: 'ux' },
    ]




    

    var list=[]

    var dispatch=useDispatch();


    
    const handlePrimeSubmit = () =>{
        console.log(job);
        dispatch(AddJob(job));
        // dispatch(EditJob(job));
        localStorage.removeItem("jobad");
        window.location.replace("/");
    };
    

    const handleSubmit = (e) => {
 
        console.log("handleSubmit",skill);

        list=skill;
        console.log("handleSubmit list",list);
    
        var str="";
        var p="*";
       // alert(list.skill)
        for(const element of list.skill){
            str=str+element+p;
           
        }
        console.log(str);
       
        job.skillsRequired=str;

        var title=document.getElementById("t1").value;
        job.jobTitle=title;
        
        
        job.jobId=jobId.jobId;

        console.log(job.jobTitle);
        console.log(job);
        //  alert(job.Title);
           handlePrimeSubmit();
        
     }


    

    const [skill, setSkill] = useState()

    const handleSkill = (event, { value }) => {
        // alert("value"+value);

        console.log(skill);

        setSkill({skill:value})
      //  alert("hi");
       
        console.log("list",skill);
    }


    



    return (
        <>
            <Nav></Nav>
            <br />
            <section className="vh-100" style={{ color: "black" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-9">
                            <h1 className="text-white mb-4">Create a Job </h1>
                            <div className="card" style={{ borderRadius: 15 }}>
                                <div className="card-body">
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Job Title</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">                                                                                 
                                            <input type="text" className="form-control form-control-lg" placeholder="Job Title" id="t1" defaultValue={jobTitle.jobTitle}  onChange={e => job.jobDescription = e.target.value}></input>
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">


                                            <h6 className="mb-0">Skills Required</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">

                                            <Dropdown placeholder='Skills' fluid multiple selection options={options} id={options.id}  className="form-control form-control-lg" onChange={handleSkill} />

                                           {/* <h1> Skills :{skill.at(skill.length-1)}</h1> */}

                                            

                                        </div>
                                    </div>
                                    <hr className="mx-n3" />

                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Experience Required</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input
                                                type="number"
                                                className="form-control form-control-lg"
                                                placeholder="Experience in years"
                                                id="t3"
                                                defaultValue={jobExp.jobExp}
                                             onChange={e=>job.expRequired=e.target.value}
                                            />
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />

                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Job Description</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <textarea
                                                className="form-control"
                                                rows={3}
                                                placeholder="Job Description"
                                                // defaultValue={""}
                                                id="t4"
                                                defaultValue={jobDesc.jobDesc}
                                                onChange={e => job.jobDescription = e.target.value}
                                            />
                                        </div>
                                    </div>

                                    <div className="px-5 py-4">
                                        <button type="submit" className="btn btn-primary btn-lg" onClick={()=>handleSubmit()}>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
    
 }

 export default Easyform
// function mapStateToProps(state){

//     return{

//     };
// }
// export default connect(mapStateToProps)(Easyform)

    
