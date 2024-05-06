import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { AboutUs, Homepage, Downloads, Tournaments, TournamentDetails, Navbar, NotFoundPage, Loader, Login, Admin } from './components';
import './App.css';

const { Paragraph } = Typography;

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const adminLoggedIn = localStorage.getItem('adminLoggedIn');
        setIsLoggedIn(adminLoggedIn === 'true');
    }, [location.pathname]);

    const handleLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem('adminLoggedIn', 'true');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('adminLoggedIn');
    };

    return (
        <div className="app">
            <div className="navbar">
                <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route exact path="/" element={<Homepage />} />
                            <Route exact path="/aboutus" element={<AboutUs />} />
                            <Route exact path="/tournaments" element={<Tournaments />} />
                            <Route exact path="/tournament/:tournamentId" element={<TournamentDetails />} />
                            <Route exact path="/downloads" element={<Downloads />} />
                            <Route exact path="/admin" element={<Admin isLoggedIn={isLoggedIn} onLogin={handleLogin} />} />
                            <Route exact path="/loader" element={<Loader />} />
                            <Route exact path="/login" element={<Login onLogin={handleLogin} />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Routes>
                    </div>
                </Layout>
                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                        <NavLink to="/" activeClassName="active-link" exact>
                            Pakistan Scrabble Association
                        </NavLink> <br />
                        All Rights Reserved.
                    </Typography.Title>
                    <Space>
                        <Paragraph style={{ color: 'white', textAlign: 'center' }}>
                            <strong>Address:</strong> Suite 801, Al-Rahim Tower, I. I. Chundrigar Road, Karachi-74000, Pakistan
                            <br />
                            <strong>Cell:</strong> 0321-2474500
                            <strong style={{ marginLeft: '0.5em' }}>Phone:</strong> +92-21-3243 7077-78
                        </Paragraph>
                    </Space>
                </div>
            </div>
        </div >
    );
};

export default App;
