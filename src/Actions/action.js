import axios from 'axios'

export const GetJobByEmpId = (id) =>{
    console.log("at job",id);
    
        return async function(dispatch, getState) {
            await axios.get("http://localhost:7073/job/getemp/"+id)
            .then(data => {
                console.log(data);
                return dispatch(GetJob(data.data));
            });
    };
}


export const GetJob=(list)=>{

    console.log("getjob",list);
    return{
        type: "GETALL",
        data: list
    }
}




export const AddJob = (job) =>{
    console.log("at action job",job);
    
      if(job){
        
        return async function(dispatch, getState) {
            await axios.post("http://localhost:7073/job/add",job)
            .then(data => {
                console.log(data);
                return dispatch(GetJob());   
            });
        }
    };
}

export const EditJob = (job) =>{
    console.log("at action job",job);
    
      if(job){
        
        return async function(dispatch, getState) {
            await axios.put("http://localhost:7073/job/edit",job)
            .then(data => {
                console.log(data);
                return dispatch(GetJob());   
            });
        }
    };
}


export const DeleteJob = (id,name) =>{
    console.log("at action job",id);
   
      if(id){
        
        return async function(dispatch, getState) {
            await axios.delete("http://localhost:7073/job/delete/"+id)
            .then(data => {
                console.log(data);
                return dispatch((GetJobByEmpId(name)));   
            });
        }
    };
}


// export const GetEmp=(emp)=>{

//     console.log("getemp",emp);
//     return{
//         type: "GETEMP",
//         data: emp
//     }
// }
