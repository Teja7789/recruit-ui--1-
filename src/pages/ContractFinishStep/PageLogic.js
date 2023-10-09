import React from 'react';
const PageLogic = (props)=>{
    // const totalPages = props.response.totalPages-1;
    const data = props.passengersData;
    console.log(data ,"new props");
    return(
        <div>
            <p>PageLogic</p>
        </div>
    )
}
export default PageLogic;