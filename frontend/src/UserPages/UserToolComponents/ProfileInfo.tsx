import EditProfileButton from "./EditProfileButton";
import "./Profile.css"

function ProfileInfo() {
    return (
        <div className="profile__div">
            <div className="profile__edit__holder">
                <EditProfileButton />
            </div>
            <div className="profile__info__box">
                <p className="profile__info__label">First Name:</p>
                <p className="profile__info__p">Ceren</p>
            </div>
            <div className="profile__info__box">
                <p className="profile__info__label">Last Name:</p>
                <p className="profile__info__p">Akyar</p>
            </div>
            <div className="profile__info__box">
                <p className="profile__info__label">Email:</p>
                <p className="profile__info__p">crn@gmail.com</p>
            </div>
            <div className="profile__info__box">
                <p className="profile__info__label">Birthday:</p>
                <p className="profile__info__p">01/05/2002</p>
            </div>
            <div className="profile__info__box">
                <p className="profile__info__label">Total Leave Day Count:</p>
                <p className="profile__info__p">70</p>
            </div>
            <div className="profile__info__box">
                <p className="profile__info__label">Off Days Left:</p>
                <p className="profile__info__p">17</p>
            </div>
        </div>
    );
}

export default ProfileInfo;