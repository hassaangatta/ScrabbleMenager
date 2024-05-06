import React from 'react';
import { Typography, Row, Col, List, Button, Image } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import MemberForm from '../images/PSA_Membership_form.jpg';

const { Title, Paragraph } = Typography;

const DocumentsList = [
    { name: 'PSA Game Rules', link: 'https://pakistanscrabble.org/download/PSA_gamerules.pdf' },
    { name: 'Beginner’s Guide', link: 'https://pakistanscrabble.org/download/PSA_gamerulesbg.pdf' },
    { name: '2 Letter Words', link: 'https://www.pakistanscrabble.org/wp-content/uploads/2022/06/2-LETTER-WORD-LIST.pdf' },
    { name: '3 Letter Words', link: 'https://www.pakistanscrabble.org/wp-content/uploads/2022/06/3-LETTER-WORD-LIST.pdf' },
    { name: '4 Letter Words', link: 'https://www.pakistanscrabble.org/wp-content/uploads/2022/06/4-LETTER-WORD-LIST.pdf' },
    { name: 'Q without U', link: 'https://pakistanscrabble.org/download/PSA_qwithoutu.pdf' },
    { name: 'Glossary', link: 'https://pakistanscrabble.org/download/PSA_glossary.pdf' },
    { name: 'Steps to set up Cardbox', link: 'https://pakistanscrabble.org/download/steps%20to%20set%20up%20cardbox%20on%20zyzzyva.pdf' },
    { name: 'Spreadsheet for Manual Pairings', link: 'https://pakistanscrabble.org/download/spreadsheet.pdf' },
    { name: 'Score Sheet', link: 'https://pakistanscrabble.org/download/ss.pdf' },
    { name: 'Result Sheet', link: 'https://pakistanscrabble.org/download/PSA%20RESULT%20SHEET.pdf' },
];

const MembershipForm = [
    { name: 'PSA Membership Form', link: 'https://pakistanscrabble.org/download/PSA_Membership_form.pdf' },
];

const Downloads = () => {
    return (
        <>
            <Title level={1} className="heading" style={{ fontFamily: 'calibri', color: '#3772ff' }}>
                Downloads
            </Title>
            <Row gutter={[16, 16]}>
                <Col span={8}>
                    <List
                        itemLayout="horizontal"
                        dataSource={DocumentsList}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>{item.name}</a>}
                                />
                                <Button type="primary" shape="circle" icon={<DownloadOutlined />} size="large" href={item.link} target="_blank" download />
                            </List.Item>
                        )}
                    />
                </Col>

                <Col span={8}>
                    <Image
                        src={MemberForm}
                        placeholder={<Image src="https://via.placeholder.com/80x40" />}
                        width="100%"
                        alt="Large Placeholder Image"
                    />
                </Col>
                <Col span={8}>
                    <Title level={3} className="heading" style={{ fontFamily: "calibri", color: '#3772ff' }}>
                        Join Pakistan Scrabble Association
                    </Title>
                    <Paragraph>
                        Become a PSA member by downloading and filling out the form below and send it along with pay-order in favour of Pakistan Scrabble Association on our mailing address.
                        <br />
                        Annual membership fee: Rs. 3000/-
                        <br />
                        Life membership fee: Rs.8,000/-
                        <br />
                        (Service charges Rs. 600.0 per year)
                        <br />
                        ( Discount of Rs 1000.0 for life membership of Family Members)
                    </Paragraph>
                    <List
                        itemLayout="horizontal"
                        dataSource={MembershipForm}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>{item.name}</a>}
                                />
                                <Button type="primary" shape="circle" icon={<DownloadOutlined />} size="large" href={item.link} target="_blank" download />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </>
    );
};

export default Downloads;
