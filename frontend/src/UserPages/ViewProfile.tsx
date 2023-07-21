import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import ProfileInfo from "./UserToolComponents/ProfileInfo";
import { Tabs } from 'antd';
import PreviousRequestsTable from "./UserToolComponents/PreviousRequestsTable";
import StickyFooter from "../StickyFooter";
import UserSideBar from "./UserSideBar/UserSideBar";

function ViewProfile() {
    const onChange = (key: string) => {
        console.log(key);
    };

    const items = [
        {
            key: "tab1",
            label: "Profil Bilgisi",
            children: <ProfileInfo />,
        },
        {
            key: "tab2",
            label: "Önceki İstekler",
            children: <PreviousRequestsTable />,
        },
    ];

    return (
        <div className="page__holder"  >
            <UserSideBar />
            <div className="tab__div" style={{ paddingLeft: "200px" }} >
                <Tabs className="profile__card__label"
                    size="large"
                    onChange={onChange}
                    type="card"
                    items={items}
                />
            </div>
          
        </div>
    );
}

export default ViewProfile;

