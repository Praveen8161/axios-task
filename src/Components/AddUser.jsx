/* eslint-disable react/prop-types */

import { useState } from "react"
import { DataState } from "../context/AppContext";


const AddUser = ({setShowAdd,data,setData}) => {

    const [inpName,setInpName] = useState("");
    const [inpUserName,setInpUserName] = useState("");
    const [inpEmail,setInpEmail] =useState("");
    const [inpPhone,setInpPhone] =useState("");
    const [inpCity,setInpCity] = useState("");
    const [inpZipCode,setInpZipCode] =useState("");
    const [inpWebsite,setInpWebsite] =useState("");
    const [inpCompany,setInpCompany] =useState("");

    const {postUser} = DataState();

    //Adding New User
    function handleAddUser(){
        const newUser = {
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
        let newData = postUser(newUser);
        newData.then((newUserData) => setData([...data,newUserData]));
        setShowAdd(false);
    }

  return (
    <div className="flex flex-col w-full gap-5 px-3 mx-auto xl:w-2/6 lg:w-3/6 md:w-3/6 sm:w-4/6 xs:w-5/6 xs:max-w-[400px] sm:max-w-none"> 
        <h1 className="font-bold text-center font-xs">ADD NEW USER</h1>

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
            
            <button onClick={()=> {
                setShowAdd(false)
            }}
            className="px-3 py-1 text-white bg-red-500 rounded hover:bg-red-600"
            >
                Cancel
            </button>

            <button onClick={handleAddUser}
            className="px-3 py-1 text-white bg-green-400 rounded hover:bg-green-700"
            >
                Add User
            </button>
        </div>
    </div>
  )
}

export default AddUser