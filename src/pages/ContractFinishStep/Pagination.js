// import React from 'react'
// import './Pagination.css'
// const renderData = (data)=>{
//     return(
//         <ul>
//             {/* {data.map((d)=> 
//             <li key={d['_id']}> The passenger having id {d['_id'].slice(d['_id'].length-5)} using {d.airline[0].name} airlines</li>)
//             } */}

//             {/* <li>
//                 {data.map((d,i) => {
//                     <li key={}>{d.authSignataryEmail
//                     }</li>
//                 })}
//             </li> */}
//         </ul>
//     )
// }
// const Pagination = (props) => {
//   // init
//   const { currentPage, maxPageLimit, minPageLimit} = props;
//   const totalPages = props.response.totalPages-1;
//   const data = props.response.data;

  
//     // build page numbers list based on total number of pages
//     const pages = [];
//     for(let i=1 ; i<=totalPages; i++){
//         pages.push(i);
//     }

//     const handlePrevClick = ()=>{
//         props.onPrevClick();
//     }

//     const handleNextClick = ()=>{
//         props.onNextClick();
//     }

//     const handlePageClick = (e)=>{
//         props.onPageChange(Number(e.target.id));
//     }
//   //  To create the UI for all page numbers that fall within 
//   //the maximum and minimum page limits, iterate through the pages array 
//   //built with the step above. If the iteration page matches with the current page,
//   // make it active:
//     const pageNumbers = pages.map(page => {

//         if(page <= maxPageLimit  && page > minPageLimit) {
//             return(
//         <li key={page} id={page} onClick={handlePageClick} 
//             className={currentPage===page ? 'active' : null}>
//             {page}
//         </li>
//             );
//         }else{
//             return null;
//         }
//     }
   
//  );

    

//     // page ellipses
//     let pageIncrementEllipses = null;
//     if(pages.length > maxPageLimit){
//         pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>
//     }
//     let pageDecremenEllipses = null;
//     if(minPageLimit >=1){
//         pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li> 
//     }

//     return (
//         <div className="main">
//             <div className="mainData">
//               {renderData(data)}

//             </div>
//             <ul className="pageNumbers"> 
//                <li>
//                    <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>Prev</button>
//                </li>
//                {pageDecremenEllipses}
//                 {pageNumbers}
//                {pageIncrementEllipses}
//                 <li>
//                    <button onClick={handleNextClick} disabled={currentPage === pages[pages.length-1]}>Next</button>
//                </li>
//             </ul>
//         </div>
//     )
// }

// export default Pagination



// import React from 'react';


// const renderData = (data) => {
//   return (
//     <ul>
//       {data.map((d) => (
//         <li key={d.organizationID}>
//           Organization ID: {d.organizationID}<br />
//           Name: {d.name}<br />
//           Auth Signatory: {d.authSignataryFn} {d.authSignataryLn}<br />
//           Email: {d.authSignataryEmail}<br />
//           Phone: {d.authSignataryPhone}<br />
//           Status: {d.statusCode}
//         </li>
//       ))}
//     </ul>
//   );
// };

// const Pagination = (props) => {
//   const { currentPage, maxPageLimit, minPageLimit } = props;
//   const totalPages = props.response.totalPages;
//   const data = props.response.content;

//   const pages = [];
//   for (let i = 1; i <= totalPages; i++) {
//     pages.push(i);
//   }

//   const handlePrevClick = () => {
//     props.onPrevClick();
//   }

//   const handleNextClick = () => {
//     props.onNextClick();
//   }

//   const handlePageClick = (e) => {
//     props.onPageChange(Number(e.target.id));
//   }

//   const pageNumbers = pages.map(page => {
//     if (page <= maxPageLimit && page > minPageLimit) {
//       return (
//         <li key={page} id={page} onClick={handlePageClick}
//           className={currentPage === page ? 'active' : null}>
//           {page}
//         </li>
//       );
//     } else {
//       return null;
//     }
//   });

//   let pageIncrementEllipses = null;
//   if (pages.length > maxPageLimit) {
//     pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>
//   }
//   let pageDecremenEllipses = null;
//   if (minPageLimit >= 1) {
//     pageDecremenEllipses = <li onClick={handlePrevClick}>&hellip;</li>
//   }

//   return (
//     <div className="main">
//       <div className="mainData">
//         {renderData(data)}
//       </div>
//       <ul className="pageNumbers">
//         <li>
//           <button onClick={handlePrevClick} disabled={currentPage === pages[0]}>Prev</button>
//         </li>
//         {pageDecremenEllipses}
//         {pageNumbers}
//         {pageIncrementEllipses}
//         <li>
//           <button onClick={handleNextClick} disabled={currentPage === pages[pages.length - 1]}>Next</button>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Pagination;


import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const Pagination = (props) => {
  const { currentPage, maxPageLimit, minPageLimit } = props;
  const totalPages = props.response.totalPages;
  const data = props.response.content;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const handlePrevClick = () => {
    props.onPrevClick();
  }

  const handleNextClick = () => {
    props.onNextClick();
  }

  const handlePageClick = (e) => {
    props.onPageChange(Number(e.target.id));
  }

//   const onPageTemplate = (rowData, props) => {
//     return (
//       <button
//         id={props.rowIndex + 1}
//         onClick={handlePageClick}
//         className={currentPage === props.rowIndex + 1 ? 'active' : null}
//       >
//         {props.rowIndex + 1}
//       </button>
//     );
//   };

  return (
    <div className="main">
      <div className="mainData">
        <DataTable value={data} 
        // paginator rows={5} currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        >
          {/* <Column header="Organization ID" body={(rowData) => rowData.organizationID} /> */}
          <Column header="Name" body={(rowData) => rowData.name} />
          <Column header="Auth Signatory" body={(rowData) => `${rowData.authSignataryFn} ${rowData.authSignataryLn}`} />
          <Column header="Email" body={(rowData) => rowData.authSignataryEmail} />
          <Column header="Phone" body={(rowData) => rowData.authSignataryPhone} />
          <Column header="Status" body={(rowData) => rowData.statusCode} />
        </DataTable>
      </div>
      <div className='d-flex'>
      <ul className="pageNumbers">
        {/* <li> */}
          <Button className='mr-4' onClick={handlePrevClick}  disabled={currentPage === pages[0]}>Prev</Button>
        {/* </li> */}
        {/* {[...Array(totalPages)].map((_, index) => {
          if (index + 1 <= maxPageLimit && index + 1 > minPageLimit) {
            return <li key={index} onClick={handlePageClick} className={currentPage === index + 1 ? 'active' : null}>{index + 1}</li>;
          } else {
            return null;
          }
        })} */}
        {/* <li> */}
          <Button onClick={handleNextClick} disabled={currentPage === pages[pages.length - 1]}>Next</Button>
        {/* </li> */}
      </ul>
      </div> 
    </div>
  );
}

export default Pagination;



