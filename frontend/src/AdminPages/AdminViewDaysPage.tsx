import CalendarForLeave from "./AdminToolComponents/CalendarForLeave";
import NavigationBar from "./AdminToolComponents/NavigationBar";

function AdminViewDaysPage() {
  return (
    <div>
      <NavigationBar />
      <div className="calendar__holder">
        <CalendarForLeave />
      </div>

    </div>
  );
}

export default AdminViewDaysPage;
