import React, { useState, useEffect } from 'react';
import { Divider, Typography, List, AutoComplete, Button, Modal, Form, Input, InputNumber, Select, DatePicker, TimePicker } from 'antd';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import axios from 'axios';

const adminLoggedIn = localStorage.getItem('adminLoggedIn');

const { Title } = Typography;
const { TextArea } = Input;

const Tournaments = () => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tournaments, setTournaments] = useState({
        past: [],
        ongoing: [],
        upcoming: [],
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [tournamentDetails, setTournamentDetails] = useState({});

    const fetchTournaments = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/tournament');
            const currentDate = new Date();
            const pastTournaments = [];
            const ongoingTournaments = [];
            const upcomingTournaments = [];

            response.data.forEach(tournament => {
                const noOfRounds = tournament.noOfRounds;
                const currentRound = tournament.currentRound;
                if (currentRound === noOfRounds) {
                    pastTournaments.push(tournament);
                } else if (currentRound === 0) {
                    upcomingTournaments.push(tournament);
                } else {
                    ongoingTournaments.push(tournament);
                }
            });

            setTournaments({
                past: pastTournaments,
                ongoing: ongoingTournaments,
                upcoming: upcomingTournaments,
            });

            setLoading(false);
            console.log('Tournaments data:', response.data); // Log data
        } catch (error) {
            console.error('Error fetching tournaments:', error);
            setLoading(false);
            console.error('Error:', error); // Log error
        }
    };

    useEffect(() => {
        fetchTournaments();
    }, []);

    const handleSearch = (value) => {
        setSearchText(value);
        const filteredTournaments = Object.values(tournaments)
            .flat()
            .filter(tournament => tournament.name.toLowerCase().includes(value.toLowerCase()));
        setSearchResults(filteredTournaments);
    };

    const handleTournamentSelect = (value) => {
        const selectedTournament = searchResults.find(tournament => tournament.name === value);
        if (selectedTournament) {
            window.location.href = selectedTournament.link;
        }
    };

    const renderTournaments = (data) => {
        if (!data) {
            return null;
        }

        return (
            <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(item, index) => (
                    <List.Item key={index}>
                        <Link to={'..\\tournament\\2'}>{item.name}</Link>
                    </List.Item>
                )}
            />
        );
    };

    const handleCreateTournament = async () => {
        try {
            const response = await axios.post('http://localhost:5000/tournament', {
                name: tournamentDetails.name,
                date: tournamentDetails.date,
                venue: tournamentDetails.venue,
                time: tournamentDetails.time,
                categories: tournamentDetails.categories,
                registrationLink: tournamentDetails.registrationLink,
                registrationDeadline: tournamentDetails.registrationDeadline,
                description: tournamentDetails.description,
                noOfRounds: tournamentDetails.noOfRounds,
            });
            console.log('Create Tournament Response:', response.data); // Log response data
            // Optionally, handle success here (e.g., show a success message)
        } catch (error) {
            console.error('Error creating tournament:', error);
            // Optionally, handle error here (e.g., show an error message)
        }
        setModalVisible(true);
        // Initialize the tournament details with hardcoded values
        setTournamentDetails({
            name: '',
            date: null,
            time: null,
            venue: '',
            registrationDeadline: null,
            registrationLink: '',
            noOfRounds: 1,
            currentRound: 1,
            categories: ['A'], // Hardcoded categories
            description: '',
        });
    };


    const handleModalCancel = () => {
        setModalVisible(false);
    };

    const handleFormSubmit = (values) => {
        console.log('Tournament details:', JSON.stringify(values));
        // Here you can send the form data to the server for further processing
        setModalVisible(false);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Title level={1} className="heading" style={{ fontFamily: "calibri", color: '#3772ff', margin: 0 }}>
                    Tournaments
                </Title>
                {adminLoggedIn && (
                    <Button type="primary" style={{ marginBottom: '20px' }} onClick={handleCreateTournament}>
                        Create Tournament
                    </Button>
                )}
            </div>

            <AutoComplete
                value={searchText}
                options={searchResults.map(tournament => ({ value: tournament.name }))}
                style={{ width: '100%', marginBottom: '20px' }}
                onSelect={handleTournamentSelect}
                onSearch={handleSearch}
                placeholder="Search Tournaments"
            />

            <div style={{ marginBottom: '20px' }}>
                <Title level={3} className="heading" style={{ fontFamily: "calibri", color: '#3772ff' }}>
                    Ongoing</Title>
                {renderTournaments(tournaments.ongoing)}
                <Divider />
            </div>
            <div style={{ marginBottom: '20px' }}>
                <Title level={3} className="heading" style={{ fontFamily: "calibri", color: '#3772ff' }}>
                    Upcoming</Title>
                {renderTournaments(tournaments.upcoming)}
                <Divider />
            </div>
            <div>
                <Title level={3} className="heading" style={{ fontFamily: "calibri", color: '#3772ff' }}>
                    Past</Title>
                {renderTournaments(tournaments.past)}
            </div>

            <Modal
                title="Create Tournament"
                visible={modalVisible}
                onCancel={handleModalCancel}
                footer={null}
            >
                <Form onFinish={handleFormSubmit}>
                    <Form.Item
                        label="Tournament Name"
                        name="name"
                        initialValue={tournamentDetails.name}
                        rules={[{ required: true, message: 'Please enter the tournament name' }]}
                    >
                        <Input placeholder="Enter tournament name" />
                    </Form.Item>
                    <Form.Item
                        label="Date"
                        name="date"
                        initialValue={tournamentDetails.date}
                        rules={[{ required: true, message: 'Please enter the date' }]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        label="Time"
                        name="time"
                        initialValue={tournamentDetails.time}
                        rules={[{ required: true, message: 'Please enter the time' }]}
                    >
                        <TimePicker />
                    </Form.Item>
                    <Form.Item
                        label="Venue"
                        name="venue"
                        initialValue={tournamentDetails.venue}
                        rules={[{ required: true, message: 'Please enter the venue' }]}
                    >
                        <Input placeholder="Enter venue" />
                    </Form.Item>
                    <Form.Item
                        label="Registration Deadline"
                        name="registrationDeadline"
                        initialValue={tournamentDetails.registrationDeadline}
                        rules={[{ required: true, message: 'Please enter the registration deadline' }]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item
                        label="Registration Link"
                        name="registrationLink"
                        initialValue={tournamentDetails.registrationLink}
                        rules={[{ required: true, message: 'Please enter the registration link' }]}
                    >
                        <Input placeholder="Enter registration link" />
                    </Form.Item>
                    <Form.Item
                        label="Number of Rounds"
                        name="noOfRounds"
                        initialValue={tournamentDetails.noOfRounds}
                        rules={[{ required: true, message: 'Please enter the number of rounds' }]}
                    >
                        <InputNumber min={1} />
                    </Form.Item>
                    <Form.Item
                        label="Current Round"
                        name="currentRound"
                        initialValue={tournamentDetails.currentRound}
                        rules={[{ required: true, message: 'Please enter the current round' }]}
                    >
                        <InputNumber min={1} />
                    </Form.Item>
                    <Form.Item
                        label="Categories"
                        name="categories"
                        initialValue={tournamentDetails.categories}
                        rules={[{ required: true, message: 'Please select at least one category' }]}
                    >
                        <Select mode="multiple" placeholder="Select categories">
                            <Select.Option key="A" value="A">A</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        initialValue={tournamentDetails.description}
                        rules={[{ required: true, message: 'Please enter the description' }]}
                    >
                        <TextArea rows={4} placeholder="Enter description" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Create</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default Tournaments;
