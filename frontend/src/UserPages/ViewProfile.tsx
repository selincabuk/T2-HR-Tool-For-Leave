import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import ProfileInfo from "./UserToolComponents/ProfileInfo";


function ViewProfile() {
    return(
        <div>
            <NavigationBarUser />
            <ProfileInfo />
        </div>
    );
}

export default ViewProfile;