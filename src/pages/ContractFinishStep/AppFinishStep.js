// import React, { useState } from "react";
// import { useForm, Controller } from "react-hook-form";
// // import id from "uuid/v1";


// function AppFinishStep() {
//   const [data, setData] = useState([]);
//   const { register, watch, handleSubmit, control } = useForm();
//   const at = watch("at", 2);

//   const append = () => {
//     const newFields = [{ id: id() }, { id: id() }];
//     setData([...data, ...newFields]);
//   };

//   const remove = (index) => {
//     const newData = [...data];
//     newData.splice(index, 2); // Remove both input fields at once
//     setData(newData);
//   };

//   const update = (index) => {
//     const fieldValue = watch(`field${index}`);
//     const newData = [...data];
//     for (let i = index; i < index + 2; i++) {
//       if (newData[i]) {
//         newData[i].id = fieldValue;
//         newData[i].key = id(); // Ensure each item has a unique key
//       }
//     }
//     setData(newData);
//   };

//   const onSubmit = (data) => console.log(data);

//   const showButtons = data.length > 0; // Check if there are input fields

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <h1>Field Array </h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={item.key || item.id}>
//             <Controller
//               as={<input />}
//               name={`field${index}`}
//               control={control}
//               defaultValue={item.id}
//             />
//           </li>
//         ))}
//       </ul>
//       <section>
//         <button
//           type="button"
//           onClick={() => {
//             append();
//           }}
//         >
//           Append
//         </button>
//         {showButtons && (
//           <>
//             <button
//               type="button"
//               onClick={() => {
//                 remove(data.length - 2); // Remove the last two fields
//               }}
//             >
//               Delete
//             </button>
//             <button
//               type="button"
//               onClick={() => {
//                 update(data.length - 2); // Update the last two fields
//               }}
//             >
//               Edit
//             </button>
//           </>
//         )}
//       </section>

//       <input type="submit" />
//     </form>
//   );
// }
// export default AppFinishStep;