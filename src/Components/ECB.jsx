// import React from 'react';
// import { Card, Typography } from 'antd';
// import Group427320401Image from '../assets/images/Group 427320401 (9).svg';

// const { Meta } = Card;

// function ECB() {
//     return (
//         <div>
//             <Typography.Title level={2} style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}>
//                 The ECB Advantage
//             </Typography.Title>
//             <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
//                 <Card style={{ width: 400 }}>
//                     <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
//                         <img src={Group427320401Image} alt="Financial Inclusion" style={{ maxWidth: '100px' }} />
//                         <Typography.Title level={4}>Financial Inclusion</Typography.Title>
//                     </div>
//                     <Meta
//                         description={
//                             <Typography>
//                                 <p>
//                                     ECB believes that everyone should have equal access to financial opportunities. We enable borrowers from all walks of life to realize their dreams and investors to fund promising ventures.
//                                 </p>
//                             </Typography>
//                         }
//                     />
//                 </Card>
//                 <Card style={{ width: 400 }}>
//                     <Meta
//                         title="Secure and transparent transactions"
//                         description={
//                             <Typography>
//                                 <p>
//                                     Your financial security is our top priority ECB employs advanced encryption and verification protocols to safeguard your data and transactions.
//                                 </p>
//                             </Typography>
//                         }
//                     />
//                 </Card>
//                 <Card style={{ width: 400 }}>
//                     <Meta
//                         title="Quick access to funds."
//                         description={
//                             <Typography>
//                                 <p>
//                                     Join a vibrant community of borrowers and investors who support and collaborate to achieve financial growth together.
//                                 </p>
//                             </Typography>
//                         }
//                     />
//                 </Card>
//                 <Card style={{ width: 400 }}>
//                     <Meta
//                         title="Community-Centric Approach"
//                         description={
//                             <Typography>
//                                 <p>
//                                     Say goodbye to traditional banking barriers. ECB facilitates direct lending between borrowers and investors, ensuring a seamless and transparent borrowing experience.
//                                 </p>
//                             </Typography>
//                         }
//                     />
//                 </Card>
//             </div>
//         </div>
//     );
// }

// export default ECB;
import React from 'react';
import { Card, Typography } from 'antd';
import Group427320401Image from '../assets/images/Group 427320401 (9).svg';
import SecureTransactionsImage from '../assets/images/Group 427320401 (11).svg';
import QuickAccessToFundsImage from '../assets/images/Group 427320401 (13).svg';
import Group427320401Image14 from '../assets/images/Group 427320401 (14).svg';
const { Meta } = Card;

function ECB() {
    return (
        <div>
            <Typography.Title level={2} style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}>
                The ECB Advantage
            </Typography.Title>
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <img src={SecureTransactionsImage} alt="Secure and transparent transactions" style={{ maxWidth: '100px' }} />
                        <Typography.Title level={4}>Secure and transparent transactions</Typography.Title>
                    </div>
                    <Meta
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <img src={QuickAccessToFundsImage} alt="Quick access to funds" style={{ maxWidth: '100px' }} />
                        <Typography.Title level={4}>Quick access to funds</Typography.Title>
                    </div>
                    <Meta
                        description={
                            <Typography>
                                <p>
                                    Join a vibrant community of borrowers and investors who support and collaborate to achieve financial growth together.
                                </p>
                            </Typography>
                        }
                    />
                </Card>
                {/* <Card style={{ width: 400 }}>
                    <Meta
                        title="Community-Centric Approach"
                        description={
                            <Typography>
                                <p>
                                    Say goodbye to traditional banking barriers. ECB facilitates direct lending between borrowers and investors, ensuring a seamless and transparent borrowing experience.
                                </p>
                            </Typography>
                        }
                    />
                </Card> */}
                 <Card style={{ width: 400 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <img src={Group427320401Image14} alt="Community-Centric Approach" style={{ maxWidth: '100px' }} />
                        <Typography.Title level={4}>Community-Centric Approach</Typography.Title>
                    </div>
                    <Meta
                        description={
                            <Typography>
                                <p>
                                    ECB's Community-Centric Approach empowers local communities, fostering financial inclusion and sustainable development.
                                </p>
                            </Typography>
                        }
                    />
                </Card>
            </div>
        </div>
    );
}

export default ECB;