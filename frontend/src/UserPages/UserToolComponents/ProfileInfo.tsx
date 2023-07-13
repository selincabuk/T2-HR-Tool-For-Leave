import EditProfileButton from "./EditProfileButton";
import "./Profile.css"
import ProfileInfoCard from "./ProfileInfoCard";

function ProfileInfo() {


    return (
        <div className="profile__div">
            <div className="profile__edit__holder">
                <EditProfileButton />
            </div>
            <ProfileInfoCard />

        </div>
    );
}

export default ProfileInfo;