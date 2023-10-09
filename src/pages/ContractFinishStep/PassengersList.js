// import React, {useEffect, useState} from 'react'
// // import Pagination from './Pagination';
// import axios from 'axios';
// import PageLogic from './PageLogic';


// const PassengersList = ()=>{
//   const pageNumberLimit = 5;
//   const [passengersData, setData] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [maxPageLimit, setMaxPageLimit] = useState(5);
//   const [minPageLimit, setMinPageLimit] = useState(0);
    

    
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization?offset=0'
//         );
//         setData(response.data.content);
//         console.log("response.data.content", response.data.content);
//         // setTotalRecords(response.data.totalElements);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, [currentPage]);

//   const onPageChange= (pageNumber)=>{
//     setCurrentPage(pageNumber);
//   }

//   const onPrevClick = ()=>{
//       if((currentPage-1) % pageNumberLimit === 0){
//           setMaxPageLimit(maxPageLimit - pageNumberLimit);
//           setMinPageLimit(minPageLimit - pageNumberLimit);
//       }
//       setCurrentPage(prev=> prev-1);
//    }
  
//   const onNextClick = ()=>{
//        if(currentPage+1 > maxPageLimit){
//            setMaxPageLimit(maxPageLimit + pageNumberLimit);
//            setMinPageLimit(minPageLimit + pageNumberLimit);
//        }
//        setCurrentPage(prev=>prev+1);
//     }

//   const paginationAttributes = {
//     currentPage,
//     maxPageLimit,
//     minPageLimit,
//     response: passengersData,
//   };
//   const datad = passengersData.map((d,i)=>(
//     <div key={i}>
// <p>
//     <span>  {d.createdDt}</span>
//     <span>   {d.name} </span>
//       </p>
//       </div>
//   ))
//   return(
//     <div>
//         <h2>Passenger List</h2>
//         {/* { */}
//         {/* // !loading  */}
        
//         {/* // ? */}
//          {/* <Pagination {...paginationAttributes} 
//                           onPrevClick={onPrevClick} 
//                           onNextClick={onNextClick}
//                           onPageChange={onPageChange}/> */}
//         {/* // : <div> Loading... </div> */}
//         {/* // } */}
//       {datad} 
//       <span>prev</span> 
//       {currentPage}
//       <span>next</span> 
//       <PageLogic passengersData={passengersData}/>
//     </div>
// )
      
//  }
// export default PassengersList;



import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import axios from 'axios';

const PassengersList = () => {
  const pageNumberLimit = 5;
  const [organizationData, setData] = useState([]);
 
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://40.114.32.67:8080/recruit-0.0.1-SNAPSHOT/api/raves/v1/organization?offset=${currentPage}&limit=10`
        );
        setData(response.data.content);
        console.log("response.data.content", response.data.content);
        // setTotalRecords(response.data.totalElements);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const onPageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const onPrevClick = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumberLimit);
      setMinPageLimit(minPageLimit - pageNumberLimit);
    }
    setCurrentPage((prev) => prev - 1);
  }

  const onNextClick = () => {
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumberLimit);
      setMinPageLimit(minPageLimit + pageNumberLimit);
    }
    setCurrentPage((prev) => prev + 1);
  }

  const paginationAttributes = {
    currentPage,
    maxPageLimit,
    minPageLimit,
    response: { content: organizationData, totalPages: 10 }, // Adjust totalPages accordingly
  };

  return (
    <div>
      <h2>Organization List</h2>
      
      <Pagination {...paginationAttributes}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        onPageChange={onPageChange} />
       
       
    </div>
  )
}

export default PassengersList;