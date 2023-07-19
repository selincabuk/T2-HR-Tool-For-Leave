import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import CalendarForLeave from "../AdminPages/AdminToolComponents/CalendarForLeave";
import StickyFooter from "../StickyFooter";
import UserSideBar from "./UserSideBar/UserSideBar";

function ViewOffDays() {
    return(
        <div className="page__holder">
            <UserSideBar />
            <div className="calendar__holder"> <CalendarForLeave /></div>
            <StickyFooter />
        </div>
        
    );
}

export default ViewOffDays;




  

  
