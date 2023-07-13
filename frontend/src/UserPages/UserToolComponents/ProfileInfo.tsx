import EditProfileButton from "./EditProfileButton";
import "./Profile.css"

function ProfileInfo() {


    return (
        <div className="profile__div">
            <div className="profile__edit__holder">
                <EditProfileButton />
            </div>
            

        </div>
    );
}

export default ProfileInfo;