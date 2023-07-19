import "../../AdminPages/AdminNavigation/AdminSideBar.css";
import { useState, useEffect } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import BadgeIcon from '@mui/icons-material/Badge';
import RecentActorsOutlinedIcon from '@mui/icons-material/RecentActorsOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


interface MenuItem {
    title: string,
    link: string,
    icon: any,
}

type UserSideBarMenu = MenuItem[];

const sidebarItems: UserSideBarMenu =
    [
        {
            title: "Yeni İzin Formu",
            link: "/user/add-off-days",
            icon: StickyNote2Icon,
        },
        {
            title: "Profil",
            link: "/user/view-profile",
            icon: RecentActorsOutlinedIcon,
        },
        {
            title: "İzin Günlerim",
            link: "/user/view-off",
            icon: CalendarMonthOutlinedIcon,
        },
    ]

function UserSideBar() {
    // to check if the bar is open or closed (default is open:)
    const [isOpen, setIsOpen] = useState<boolean>(true);

    // get window width to close bar in some devices:
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    // to change window size:
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    // to automatically close bar if window is resized:
    useEffect( () => {
        if (windowSize < 1000 )
            setIsOpen(false)
    }, [windowSize] );

    // button handler to check if the bar should be opened:
    const arrowButtonHandler = () => {
        if (isOpen)
            setIsOpen(false)
        else if (!isOpen && windowSize < 800)
            setIsOpen(false)
        else
            setIsOpen(true)
    }

    return (
        <Paper elevation={4} className="sidebar" style={isOpen ? { width: "15vw" } : { width: "70px" }}>
            <List className="sidebar__first__list">
                <Avatar className="sidebar__arrow"
                    style={isOpen ? { transform: "rotate(180deg)", marginLeft: "14vw" } : { transform: "rotate(0deg)", marginLeft: "54px" }}
                    onClick={arrowButtonHandler}>
                    <ArrowForwardIosIcon />
                </Avatar>
            </List>
            <List className="sidebar__second__list">
                {sidebarItems.map((item: MenuItem) =>
                    <a href={item.link}>
                        <ListItem className="sidebar__items">
                            <ListItemAvatar>
                                <Avatar className="sidebar__avatar">
                                    <item.icon />
                                </Avatar>
                            </ListItemAvatar>
                            {isOpen && <ListItemText primary={item.title} />}
                        </ListItem>
                        {isOpen ? <Divider variant="inset" component="li" className="sidebar__divider" />
                            : <Divider variant="inset" component="li" className="sidebar__divider__closed" />}
                    </a>
                )}
            </List>
            <List className="sidebar__third__list">
                <Divider variant="middle" />
                <a href="/admin/logout">
                    <ListItem className="sidebar__items">
                        <ListItemAvatar>
                            <Avatar className="sidebar__avatar">
                                <PowerSettingsNewIcon />
                            </Avatar>
                        </ListItemAvatar>
                        {isOpen && <ListItemText primary="Oturumu Kapat" />}
                    </ListItem>
                </a>
            </List>
        </Paper>
    )
}

export default UserSideBar;