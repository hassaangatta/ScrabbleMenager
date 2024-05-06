import React, { useState } from 'react';
import Loader from './Loader';
import { Typography, Table } from 'antd';

const { Title } = Typography;

const TournamentDetails = () => {
    // Sample data for the table
    const [data, setData] = useState([
        {
            key: '1',
            rank: 1,
            playerName: 'John Doe',
            playerNumber: '123',
            wins: 5,
            losses: 1,
            spread: '+200',
        },
        {
            key: '2',
            rank: 2,
            playerName: 'Jane Smith',
            playerNumber: '456',
            wins: 4,
            losses: 2,
            spread: '+150',
        },
        // Add more sample data as needed
    ]);

    const columns = [
        {
            title: 'Rank',
            dataIndex: 'rank',
            key: 'rank',
            sorter: (a, b) => a.rank - b.rank,
        },
        {
            title: 'Player Name',
            dataIndex: 'playerName',
            key: 'playerName',
            sorter: (a, b) => a.playerName.localeCompare(b.playerName),
        },
        {
            title: 'Player Number',
            dataIndex: 'playerNumber',
            key: 'playerNumber',
            sorter: (a, b) => a.playerNumber.localeCompare(b.playerNumber),
        },
        {
            title: 'Wins',
            dataIndex: 'wins',
            key: 'wins',
            sorter: (a, b) => a.wins - b.wins,
        },
        {
            title: 'Losses',
            dataIndex: 'losses',
            key: 'losses',
            sorter: (a, b) => a.losses - b.losses,
        },
        {
            title: 'Spread',
            dataIndex: 'spread',
            key: 'spread',
            sorter: (a, b) => a.spread.localeCompare(b.spread),
        },
    ];

    // if (isFetching) return <Loader />;

    return (
        <>
            <Title level={1} className="heading" style={{ fontFamily: "calibri", color: '#3772ff' }}>
                Tournament Details
            </Title>
            <Table dataSource={data} columns={columns} onChange={(pagination, filters, sorter) => {
                setData([...data].sort((a, b) => sorter.order === 'descend' ? sorter.column.sorter(b, a) : sorter.column.sorter(a, b)));
            }} />
        </>
    );
};

export default TournamentDetails;
