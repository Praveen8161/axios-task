/* eslint-disable react/prop-types */
import { DataState } from "../context/AppContext";

const UserCard = ({id,d,data,setData,setShowEdit,setEditId,setShowAdd}) => {

  const {deleteUser} = DataState();


  //Deleting data from both server and screen 
  function handleDelete(id){
    deleteUser(id);
    let tempData = data.filter((d) => id !== d.id);
    setData(tempData);
  }

  return (
    <div className="flex flex-col gap-4 px-3 py-2 bg-sky-900 text-white xs:px-5 xs:py-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md justify-around">
        <p>
            <span>Name: </span>
            <span>{d.name}</span>
        </p>
        <p>
            <span>User Name: </span>
            <span>{d.username}</span>
        </p>
        <p>
            <span>Email: </span>
            <span>{d.email}</span>
        </p>
        <p>
            <span>Phone: </span>
            <span>{d.phone}</span>
        </p>
        <p>
            <span>City: </span>
            <span>{d.address.city}</span>
        </p>
        <p>
            <span>Zip Code: </span>
            <span>{d.address.zipcode}</span>
        </p>
        <p>
            <span>Website: </span>
            <span>{d.website}</span>
        </p>
        <p>
            <span>Company: </span>
            <span>{d.company.name}</span>
        </p>

        <div className="flex flex-row items-center justify-start gap-5 sm:gap-0 sm:justify-between">
          <button onClick={() => {
            setShowEdit(true)
            setEditId(id);
            setShowAdd(false)
          }}
          className="px-3 py-1 text-white bg-blue-400 rounded hover:bg-blue-700"
          >
            Edit
          </button>
          
          <button onClick={()=>handleDelete(id)}
          className="px-3 py-1 text-white bg-red-600 rounded hover:bg-red-800"
          >
            Delete
          </button>
        </div>
    </div>
  )
}

export default UserCard;