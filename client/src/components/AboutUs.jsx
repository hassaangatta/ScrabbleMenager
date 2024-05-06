import React from 'react'
import { Typography, Row, Col, Statistic, Image } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUs = () => {
    return (
        <>
            <Title level={1} className="heading" style={{ fontFamily: "calibri", color: '#3772ff' }}>
                About Us
            </Title>
            <br />
            <Paragraph>
                We are the first and yet the only registered scrabble club in Pakistan, having our registered office at the Beach Luxury Hotel, M.T Khan Road, Karachi, Pakistan.
            </Paragraph>

            <Paragraph>
                We are in existance for over three decades now. It all started in 1989 when the American  Center Karachi Organized the first Scrabble Championship. That proved to be the launching pad for PSA. Our President Mrs. Goshpi Avari is the driving force behind this organization. She gathered all the Scrabble lovers of Pakistan on one platform and threw open the doors of The Beach Luxury Hotel which she owns. Today it is hard to think of Scrabble sans Goshpi or Beach Luxury Hotel.
            </Paragraph>
            <Paragraph>

                PSA organizes about 12 tournaments every year including the National Championship And the Interschool Tournament
            </Paragraph>

            <Title level={2} className="heading" style={{ fontFamily: "calibri", color: '#3772ff' }}>
                President's Message
            </Title>
            <Row gutter={[16, 16]}>
                <Col span={16}>
                    <>
                        <Paragraph>As President of Pakistan Scrabble Association (PSA), I wish to thank the many people who have supported PSA for more than the past 2 decades. A special and sincere “Thank You” to the many benefactors, contributors, sponsors and others who have given their support to promote scrabble in Pakistan from time to time.</Paragraph>
                        <Paragraph>A heartfelt thank you goes to the Executive Committee and fellow PSA members for the work they have done throughout the years to keep the organization going. PSA is one of very few sports organizations that function with clear goals in mind and have integrity in all they do. This has been our vision and determination.</Paragraph>
                        <Paragraph>The past few years have been outstanding due to the media hype and hope this will guide us to even greater success.</Paragraph>
                        <Paragraph>The response we are getting from the youth lately has been especially encouraging. Nothing gives us more pleasure than to see youngsters playing with a competitive spirit and enthusiasm.</Paragraph>
                        <Paragraph>Lastly, it would be a remiss of me not to thank Khalid Mirza, PSA’s computer wizard who has selflessly helped with the updation of this website. The amount of time given and his efforts cannot be measured. Khalid’s dedication is a marvelous testimony to the loyal support Pakistan Scrabble Association has.</Paragraph>
                        <Paragraph>Please do make it a point to make use of this website and do leave your comments on our Guest Book.</Paragraph>
                        <Paragraph>With best wishes,</Paragraph>
                        <Paragraph style={{ fontWeight: "Bold" }}>GOSHPI B. AVARI</Paragraph>
                    </>
                </Col>
                <Col span={8}>
                    <Image
                        src="https://i.tribune.com.pk/media/images/71646726350-6/71646726350-6.jpg"
                        placeholder={<Image src="https://via.placeholder.com/80x40" />}
                        width="100%"
                        // height={400}
                        alt="Large Placeholder Image"
                    />
                </Col>
            </Row>

        </>
    )
}

export default AboutUs