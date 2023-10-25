import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditStudent() {
    
    const {id} = useParams();

    

    const [data,setData] = useState({name:'',email:'',rollNo:''});
    const [newData, setNewData] = useState([])

    useEffect(()=>{
        Axios.get("https://deployment-1-rvo2.onrender.com/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status === 200){
                const {name,email,rollNo} = res.data;
                setData({name,email,rollNo});
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    })

    const getState = (childData) => {
        setNewData(childData);
    }
    
    const handleSubmit = () => {
        const data = {name:newData[0],email:newData[1],rollNo:newData[2]}
        Axios.put("https://deployment-1-rvo2.onrender.com/studentRoute/update-student/"+id, data)
        .then((res)=>{
            if(res.status === 200){
                alert("Record updated successfully.");
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }

    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue={data.name} emailValue={data.email} rollNoValue={data.rollNo}>
                Update details
            </StudentForm>
        </form>
    )
}
export default EditStudent;