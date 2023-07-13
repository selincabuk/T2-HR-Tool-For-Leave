import NavigationBarUser from "./UserToolComponents/NavigationBarUser";
import "./UserPages.css";
import ProfileInfo from "./UserToolComponents/ProfileInfo";
import React from 'react';
import { Tabs } from 'antd';
import PreviousRequestsTable from "./UserToolComponents/PreviousRequestsTable";


function ViewProfile() {
    const onChange = (key: string) => {
        console.log(key);
    };

    const items = [
        {
            key: "tab1",
            label: "Profile Information",
            children: <ProfileInfo />,
        },
        {
            key: "tab2",
            label: "Previous Requests",
            children: <PreviousRequestsTable />,
        },
    ];

    return (
        <div>
            <NavigationBarUser />
            <div className="tab__div">
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