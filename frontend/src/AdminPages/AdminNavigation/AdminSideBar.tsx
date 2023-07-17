import "./AdminSideBar.css";
import { useState } from "react";
import arrow from "../../assets/arrow.png";

interface MenuItem {
    title: string,
    link: string,
    icon: string,
}

type AdminSideBarMenu = MenuItem[];

const SidebarItems:AdminSideBarMenu =
    [
        {
            title: "İstekler",
            link: "/admin",
            icon: "",
        },
        {
            title: "Kullanıcılar",
            link: "/admin/users",
            icon: "",
        },
        {
            title: "Yeni Kullanıcı Kayıt",
            link: "/admin/register-user",
            icon: "",
        },
        {
            title: "İzin Takvimi",
            link: "/admin/view-off",
            icon: "",
        },
        {
            title: "Çıkış Yap",
            link: "/admin/logout",
            icon: "",
        },
    ]

function AdminSideBar() {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    return (
        <div className="admin-sidebar" style={isOpen ? { width: "15vw" } : { width: "7vw" }}>
            <img src={arrow} className="sidebar__arrow" style={isOpen ? { transform: "rotate(0deg)", marginLeft: "14.25vw" } : { transform: "rotate(180deg)", marginLeft: "6.25vw" }}
                onClick={() => setIsOpen(!isOpen)} />
            <ul className="sidebar__listing">
                {SidebarItems.map((item:MenuItem, index) => {
                    return (
                        <li key={index} className="sidebar__elements">
                            <a href={item.link}>
                                <img src={item.icon}/>
                                {isOpen ? <span className="title">{item.title}</span> : 
                            ""}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default AdminSideBar;