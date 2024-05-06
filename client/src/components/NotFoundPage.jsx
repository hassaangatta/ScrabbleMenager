import React from 'react';
import { Result, Button, Space } from 'antd';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={{ height: '80vh' }}>
            <Result
                status="404"
                title="404 - Not Found"
                subTitle="The page you are looking for does not exist."
                extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
            />
        </div>
    );
};

export default NotFoundPage;
