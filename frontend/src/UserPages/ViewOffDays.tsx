import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import CalendarForLeave from "../AdminPages/AdminToolComponents/CalendarForLeave";
import "./UserPages.css"

function ViewOffDays() {
    return(
        <div>
            <NavigationBarUser />
            <div className="calendar__holder"> <CalendarForLeave /></div>
           
        </div>
    );
}

export default ViewOffDays;




  

  
