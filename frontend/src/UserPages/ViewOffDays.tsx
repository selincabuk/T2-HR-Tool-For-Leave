import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import CalendarForLeave from "../AdminPages/AdminToolComponents/CalendarForLeave";
import "./UserPages.css"
import StickyFooter from "../StickyFooter";

function ViewOffDays() {
    return(
        <div>
            <NavigationBarUser />
            <div className="calendar__holder"> <CalendarForLeave /></div>
            <StickyFooter />
        </div>
        
    );
}

export default ViewOffDays;




  

  
