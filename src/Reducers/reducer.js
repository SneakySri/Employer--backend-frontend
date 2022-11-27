const initializeState={
    joblist:[],
    // employer:{}
}

const EmployerReducer = (state=initializeState, action) =>{
    console.log(action.type);

    switch (action.type)
    {

        case "GETALL" :

            console.log("at reducer"+action.data)
            return { joblist:action.data }

        
            
        //  case "GETEMP":
        //     console.log("at reducer"+action.data)
        //     return { employer:action.data}


        default:
            console.log("at default "+state.joblist)
            return state;
    }
}

export default EmployerReducer