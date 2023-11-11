/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"
import { DataState } from "../context/AppContext";


const EditUser = ({setShowEdit,editId,data,setData}) => {

    const [inpName,setInpName] = useState("");
    const [inpUserName,setInpUserName] = useState("");
    const [inpEmail,setInpEmail] =useState("");
    const [inpPhone,setInpPhone] =useState("");
    const [inpCity,setInpCity] = useState("");
    const [inpZipCode,setInpZipCode] =useState("");
    const [inpWebsite,setInpWebsite] =useState("");
    const [inpCompany,setInpCompany] =useState("");
    
    const {editUser} = DataState();

    //Filling a Details on Edit Box for editing
    useEffect(()=>{
        data.forEach((d) => {
            if(editId === d.id){
                setInpName(d.name);
                setInpUserName(d.username);
                setInpEmail(d.email);
                setInpPhone(d.phone);
                setInpCity(d.address.city);
                setInpZipCode(d.address.zipcode);
                setInpWebsite(d.website);
                setInpCompany(d.company.name);
            }
        });
    },[editId])

    //Updating the Edited data
    function handleEdit(editId){

        setShowEdit(false);
        const editedUser = {
            id:editId,
            name: inpName || "No Name",
            username: inpUserName || "No User Name",
            email: inpEmail || "No Email",
            phone: inpPhone || "No Phone",
            website : inpWebsite || "No Website",
            address:{
                city: inpCity || "No City Name",
                zipcode: inpZipCode || "No ZipCode",
            },
            company:{
                name: inpCompany || "No Company",
            },
        }

        editUser(editId,editedUser);  
        let ind;
        let tempUser = data.map((d,idx)=>{
            if(editId === d.id){
                ind=idx;
            }
            return d;
        });

        tempUser[ind] = editedUser;
        setData(tempUser);
    }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-screen p-1 mx-auto bg-white/50">
        <div className="flex flex-col w-full gap-5 px-3 mx-auto xl:w-2/6 lg:w-3/6 md:w-3/6 sm:w-4/6 xs:w-5/6 xs:max-w-[400px] sm:max-w-none bg-slate-500 pb-4 pt-8">
            <h1 className="font-bold text-center font-xs">EDIT USER</h1>

            <input type="text" placeholder="Enter your Name" value={inpName}
            onChange={(e) => setInpName(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="text" placeholder="Enter User Name" value={inpUserName}
            onChange={(e) => setInpUserName(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="email" placeholder="Enter Email" value={inpEmail}
            onChange={(e) => setInpEmail(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="tel" placeholder="Enter Phone Number" value={inpPhone}
            onChange={(e) => setInpPhone(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="text" placeholder="Enter City Name" value={inpCity}
            onChange={(e) => setInpCity(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="text" placeholder="Enter Zip Code" value={inpZipCode}
            onChange={(e) => setInpZipCode(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="text" placeholder="Enter Website" value={inpWebsite}
            onChange={(e) => setInpWebsite(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />

            <input type="text" placeholder="Enter Company Name" value={inpCompany}
            onChange={(e) => setInpCompany(e.target.value)}
            className="px-3 py-1 rounded shadow-[inset_0px_1px_3px_0.5px_rgba(0,0,0,0.6)] outline-none"
            />
            
            <div className="flex flex-row items-center justify-center gap-5">

                <button onClick={()=>{
                    setShowEdit(false)
                }}
                className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                >
                    Cancel
                </button>
                
                <button onClick={() => handleEdit(editId)}
                className="px-3 py-1 text-white bg-green-400 rounded hover:bg-green-700"
                >
                    Update User
                </button>
            </div>
        </div>
    </div>
  )
}

export default EditUser