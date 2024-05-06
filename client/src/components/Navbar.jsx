import React from 'react';
import { Menu, Typography, Avatar } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { HomeOutlined, TeamOutlined, TrophyOutlined, DownloadOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import icon from '../images/logo.png';

const { Text } = Typography;

const Navbar = ({ onSignOut }) => {

    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('adminLoggedIn');
        console.log('Signing out');
        navigate('/');
        window.location.reload(); // Reload the page after signing out
        if (onSignOut) {
            onSignOut();
        }
    };

    const adminLoggedIn = localStorage.getItem('adminLoggedIn');

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size={180} shape="square" />
            </div>

            <Menu theme="dark">
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="aboutus" icon={<TeamOutlined />}>
                    <Link to="/aboutus">About Us</Link>
                </Menu.Item>
                <Menu.Item key="tournaments" icon={<TrophyOutlined />}>
                    <Link to="/tournaments">Tournaments</Link>
                </Menu.Item>
                <Menu.Item key="downloads" icon={<DownloadOutlined />}>
                    <Link to="/downloads">Downloads</Link>
                </Menu.Item>
                {adminLoggedIn ? (
                    <Menu.Item key="signout" icon={<LogoutOutlined />} onClick={handleSignOut}>
                        Sign Out
                    </Menu.Item>
                ) : (
                    <Menu.Item key="admin" icon={<UserOutlined />}>
                        <Link to="/admin">Admin</Link>
                    </Menu.Item>
                )}
            </Menu>
        </div>
    );
};

export default Navbar;
