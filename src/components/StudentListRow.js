import Axios from "axios";
import { Link } from "react-router-dom";

function StudentListRow(props)
{
    const {_id,name,email,rollNo} = props.obj; //Object destruction

    const handleClick = () => {
        Axios.delete("https://deployment-1-rvo2.onrender.com/studentRoute/delete-student/" + _id)
        .then((res)=>{
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err))
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td className="d-flex justify-content-center">
                <button className="btn btn-sm btn-success">
                    <Link className="text-decoration-none text-light" to={"/edit-student/" + _id}>Edit</Link>
                </button>
                <button onClick={handleClick} className="btn btn-sm btn-danger mx-3">Delete</button>
            </td>
        </tr>
    )
}
export default StudentListRow;
