import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams ,  useNavigate } from "react-router-dom";
import { updateContractStart } from "../../../redux/actions/contractActions";
import { fetchCompaniesRequest } from "../../../redux/actions/companiesActions";
const intialState ={
    email:"",
    name:''

}
function Edit(){
   
    const {contracts} = useSelector((state)=> state.contract);
    console.log(contracts,"contracts");
    // const [editMode,setEditMode] = useState(false);
    const [formValue,setFormValue] = useState({})
    const {register,handleSubmit,name,value,onChange} = useForm();
    const { id }= useParams();
    const navigate = useNavigate();
    console.log(typeof(id),"id");
    const dispatch = useDispatch();
    useEffect(()=>{
        if(id){
            const singleUser = contracts.find((item) => item.id === Number(id));
            setFormValue({...singleUser});
        }
    },[id]);
    const handleChange = (field, value) => {
        setFormValue({ ...formValue, [field]: value });
      };
    const submit = (data,e) => {
        e.preventDefault();
        console.log(data);
        dispatch(updateContractStart({id,formValue}));
        dispatch(fetchCompaniesRequest());
        setTimeout(() => navigate("/recruit/contracts"),500);
    }
    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                    <InputText
                //    {...register("name", { required: "Please provide a name." })}
                //    placeholder="Name"
                name="name"
                defaultValue="name"
                value={formValue.name || ""}
                onChange={(e) => handleChange('name', e.target.value)}
                 />
                  <InputText
        //    {...register("email", { required: "Please provide an email." })}
           placeholder="Email"
           name="email"
        
           value={formValue.email || ""}
           onChange={(e) => handleChange('email', e.target.value)}
        />
           <Button style={{ marginRight: "10px" }} type="submit">
             {/* {editMode ? "Update" : "Add"} */} Update
           </Button>
           </form>

        </div>
    )
}
export default Edit;


// value={updatedData?.name} // Use 'value' instead of 'defaultValue'
// onChange={(e) => handleChange('name', e.target.value)}

// import React, { useState, useEffect } from "react";
// import { InputText } from "primereact/inputtext";
// import { Button } from "primereact/button";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// // import { createUserStart, updateUserStart } from "../redux/actions";
// import { useHistory, useParams } from "react-router-dom";
// import { toast } from "react-toastify";

// const initialState = {
//   name: "",
// //   email: "",
// //   phone: "",
// //   address: "",
// };

// const Edit = () => {
//   const { register, handleSubmit, setValue } = useForm({defaultValues:initialState});
//   const [editMode, setEditMode] = useState(false);
//   const { users } = useSelector((state) => state.data);
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const history = useHistory();

//   useEffect(() => {
//     if (id) {
//       setEditMode(true);
//       const singleUser = users.find((item) => item.id === Number(id));
//       setValue("name", singleUser.name);
//     //   setValue("email", singleUser.email);
//     //   setValue("phone", singleUser.phone);
//     //   setValue("address", singleUser.address);
//     }
//   }, [id, setValue]);

//   const onSubmit = (data) => {
//     const formValue = {
//       name: data.name,
//     //   email: data.email,
//     //   phone: data.phone,
//     //   address: data.address,
//     };

//     if (name
//         //  && email && phone && address
//          ) {
//       if (!editMode) {
//         // dispatch(createUserStart(formValue));
//         // toast.success("User Added Successfully");
//         // setTimeout(() => history.push("/"), 500);
//       } else {
//         // dispatch(updateUserStart({ id, formValue }));
//         // setEditMode(false);
//         // toast.success("User Updated Successfully");
//         // setTimeout(() => history.push("/"), 500);
//       }
//     }
//   };

//   return (
//     <form
//       className="row g-3"
//       style={{ marginTop: "100px" }}
//       noValidate
//       onSubmit={handleSubmit(onSubmit)}
//     >
//       <p className="fs-2 fw-bold">Edit</p>
//       <div
//         style={{
//           margin: "auto",
//           padding: "15px",
//           maxWidth: "400px",
//           alignContent: "center",
//         }}
//       >
//         <InputText
//           {...register("name", { required: "Please provide a name." })}
//           placeholder="Name"
//         />
//         <br />
//         {/* <InputText
//           {...register("email", { required: "Please provide an email." })}
//           placeholder="Email"
//         />
//         <br />
//         <InputText
//           {...register("phone", { required: "Please provide a phone no." })}
//           placeholder="Phone"
//         />
//         <br />
//         <InputText
//           {...register("address", { required: "Please provide an address." })}
//           placeholder="Address"
//         />
//         <br /> */}
//         <div className="col-12">
//           <Button style={{ marginRight: "10px" }} type="submit">
//             {/* {editMode ? "Update" : "Add"} */} Update
//           </Button>
//           <Button onClick={() => history.push("/")} className="p-button-danger">
//             Go Back
//           </Button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default Edit;

