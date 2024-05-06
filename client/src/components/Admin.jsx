import React, { useState, useEffect } from 'react';
import Login from './Login';
import Homepage from './Homepage';
import { Button, Upload, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;
const Admin = ({ onLogin }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const adminLoggedIn = localStorage.getItem('adminLoggedIn');
        console.log('admin logged in: ', adminLoggedIn)
        if (adminLoggedIn === 'true') {
            setIsLoggedIn(true);
            // Call the onLogin function passed from the parent component
            onLogin();
        }
    }, [onLogin]);

    const handleLogin = () => {
        setIsLoggedIn(true);
        // Call the onLogin function passed from the parent component
        onLogin();
    };

    // Function to handle image upload
    const handleImageUpload = (info) => {
        if (info.file.status === 'done') {
            console.log('File uploaded successfully:', info.file);
            // Simulate response from backend with a link to the uploaded image
            const fakeResponse = {
                link: 'https://example.com/uploads/image.jpg' // Replace with a placeholder link
            };
            console.log('Link to the uploaded image:', fakeResponse.link);
        } else if (info.file.status === 'error') {
            console.error('Error uploading file:', info.file.error);
        }
    };

    return (
        <>
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <Homepage />
            )}
        </>
    );
};

export default Admin;
