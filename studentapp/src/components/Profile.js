
export default function Profile(props){
    return(
        <>
        <table>
            <tr>
                <td rowSpan={7}>
                  <img className='profile' src={require('../assets/img/' + props.stu.profilePic)}  alt="Profile Pictures"/> 
                </td>
                <td>ID {props.stu.studentId}</td>
            </tr>
            <tr>
                <td>Full name:{props.stu.firstName + " "+props.stu.firstName}</td>
            </tr>
            <tr>
                <td>Age:{props.stu.age}</td>
            </tr>
            <tr>
                <td>course:{props.stu.course}</td>
            </tr>
            <tr>
                <td>Address:{props.stu.address.city + ","+props.stu.country}</td>
            </tr>
            <tr>
                <td>Skills:{props.stu.skills.map(skill => skill += ", ")}</td>
            </tr>
        </table>
        </>

    );
}