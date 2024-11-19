export default function(props){
    return(
        <>
        <table>
            <tr>
                <td rowSpan={7}>
                  <img className='profile' src={require('../assets/img/1.jpg')}  alt="Profile Pictures"/> 
                </td>
                <td>ID {props.stu.studentId}</td>
            </tr>
        </table>
        </>

    );
}