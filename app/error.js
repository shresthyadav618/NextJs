

'use Client';

const { useEffect } = require("react");

const error = ({error,reset})=>{
    useEffect(()=>{
        console.log('the error is : ',error);
    },[error])

    return(
        <div>
            something went wrong
            <button onClick={()=>{reset()}}></button> 
            {/* after clicking this button , you will go back to the component/path where you came from , or the error occured */}
            <div>{error}</div>
            {/* displaying ur error */}
        </div>
    )
}