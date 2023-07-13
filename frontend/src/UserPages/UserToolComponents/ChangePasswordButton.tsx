import "./Profile.css";

function ChangePasswordButton() {

    const pwdChangeHandler = () => {
        console.log("Change Password Button Clicked")
    }

    return (
        <div className="pwd__button__div">
            <button className="btn btn-primary pwd__button" onChange={pwdChangeHandler}>Change Password</button>
        </div>
    )
}

export default ChangePasswordButton;