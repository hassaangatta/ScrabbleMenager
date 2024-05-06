import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Image } from 'antd';
import { Link } from 'react-router-dom';

import Cryptocurrencies from './Tournaments';
import News from './Downloads';
import Loader from './Loader';

const { Title, Paragraph } = Typography;

const Homepage = () => {
    // const { data, isFetching } = useGetCryptosQuery(10);
    // const globalStats = data?.data?.stats;

    // if (isFetching) return <Loader />;

    return (
        <>
            <Title level={1} className="heading" style={{ fontFamily: "calibri", color: '#3772ff' }}>
                Pakistan Scrabble Association
                <Typography.Text level={5} style={{ fontWeight: 'normal', fontStyle: 'italic', marginLeft: '0.5em', color: '#3772ff' }}>The Only Registered Scrabble Club in Pakistan</Typography.Text>
            </Title>
            <br />
            <Row gutter={[16, 16]}>
                <Col span={12}>
                    <Image
                        src="https://www.pakistanscrabble.org/wp-content/uploads/2022/12/New-Project-47.png"
                        placeholder={<Image src="https://via.placeholder.com/80x40" />}
                        width="100%"
                        // height={400}
                        alt="Large Placeholder Image"
                    />
                </Col>
                <Col span={12}>
                    <div className="text-box">
                        <Title level={2} className="heading" style={{ fontFamily: "calibri", color: '#3772ff' }}>
                            Asian Youth Cup Winners
                        </Title>
                        <Title level={5}> Hasham Hadi Khan (Champion) < br />Affan Salman (3rd Position)</Title>
                        <Paragraph>
                            Hasham Hadi Khan and Affan Salman have exemplified sheer brilliance and mastery in the world of Scrabble, securing top positions in the esteemed Scrabble Asian Youth Cup. Khan's stellar performance as the champion and Salman's remarkable achievement securing the third position showcase their exceptional dedication, strategic prowess, and linguistic finesse. Their triumph not only reflects their individual talent but also underscores the depth of their commitment to the game. Khan's strategic maneuvers and Salman's linguistic acumen have undoubtedly left an indelible mark on the Scrabble community, inspiring aspiring players and earning admiration from enthusiasts worldwide. Their achievement is not just a testament to their skills but also a celebration of their relentless pursuit of excellence in the realm of competitive Scrabble. Congratulations to Hasham Hadi Khan and Affan Salman for their remarkable success, setting a shining example for Scrabble enthusiasts across the globe.
                        </Paragraph>
                    </div>
                </Col>
            </Row>
            <br />
            <br />
            <Row gutter={[16, 16]}>

                <Col span={12}>
                    <div className="text-box">
                        <Title level={2} className="heading" style={{ fontFamily: "calibri", color: '#3772ff' }}>
                            Ali Salman Wins Champions Trophy
                        </Title>
                        <Paragraph>
                            The Champions trophy turned out to be a memorable event. 17-year-old Ali Salman emerged as the Champion with an impressive 16-2 record, showcasing his prowess in Scrabble. Following closely behind was his 12-year-old sibling Ahmed Salman, securing the 2nd position. It marked a historic moment for Pakistan as both the first and second position players were gibsonized for the first time, reflecting the rising talent in the Scrabble community. In an incredible twist, the only defeats for both brothers were against each other, highlighting their intense sibling rivalry. However, their dominance was challenged by Waseem Khatri, who spoiled the 'Salman party' by securing the 3rd position with 12 wins. Another Salman brother, 15-year-old Affan, narrowly missed out on a podium finish due to a tied game, settling for 4th place with 11.5 wins. Adding to the mix, 13-year-old Aehzam Siddiqui claimed the 5th position, further emphasizing the depth of talent in the competition and making Waseem appear verrrry old in their company.
                        </Paragraph>

                    </div >
                </Col >
                <Col span={12}>
                    <Image
                        src="https://www.pakistanscrabble.org/wp-content/uploads/2021/01/FB_IMG_1703513508655-768x512.jpg"
                        placeholder={<Image src="https://via.placeholder.com/80x40" />}
                        width="100%"
                        // height={400}
                        alt="Large Placeholder Image"
                    />
                </Col>
            </Row >

        </>
    );
};

export default Homepage;