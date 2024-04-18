
import React from 'react';
import { Card, Typography } from 'antd';
import Group427320401Image from '../assets/Images/Group 427320401 (9).svg';

const { Meta } = Card;

function ECB() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <Card style={{ width: 400 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <img src={Group427320401Image} alt="Financial Inclusion" style={{ maxWidth: '100px' }} />
                    <Typography.Title level={4}>Financial Inclusion</Typography.Title>
                </div>
                <Meta
                    description={
                        <Typography>
                            <p>
                                ECB believes that everyone should have equal access to financial opportunities. We enable borrowers from all walks of life to realize their dreams and investors to fund promising ventures.
                            </p>
                        </Typography>
                    }
                />
            </Card>
            <Card style={{ width: 400 }}>
                <Meta
                    title="Secure and transparent transactions"
                    description={
                        <Typography>
                            <p>
                                Your financial security is our top priority ECB employs advanced encryption and verification protocols to safeguard your data and transactions.
                            </p>
                        </Typography>
                    }
                />
            </Card>

            <Card style={{ width: 400 }}>
                <Meta
                    title="    Quick access to funds."
                    description={
                        <Typography>
                            <p>
                                Join a vibrant community of borrowers and investors who support and collaborate to achieve financial growth together.
                            </p>
                        </Typography>
                    }
                />
            </Card>

            <Card style={{ width: 400 }}>
                <Meta
                    title="        Community-Centric Approach"
                    description={
                        <Typography>
                            <p>
                                Say goodbye to traditional banking barriers. ECB facilitates direct lending between borrowers and investors, ensuring a seamless and transparent borrowing experience.
                            </p>
                        </Typography>
                    }
                />
            </Card>
        </div>
    );
}

export default ECB;

