import Axios from "axios";
import {useEffect,useState} from "react";
import StudentListRow from "./StudentListRow";

function StudentList()
{

    const [arr, setArr] = useState([]);
    useEffect(()=>{
        Axios.get("https://deployment-1-rvo2.onrender.com/studentRoute")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    },[])

    const ListItems = () => {
        return arr.map((val,ind)=>{
            return <StudentListRow key={ind} obj={val}/>
        })
    }

    return(
        <table className="table table-striped table-bordered table-success" style={{margin:"0px auto", maxWidth:"60%"}}>
            <thead>
                <tr>
                    <th className="text-center">Name</th>
                    <th className="text-center">Email</th>
                    <th className="text-center">Roll Number</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )

}

export default StudentList;