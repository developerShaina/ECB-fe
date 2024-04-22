
// // import React from 'react';
// // import '../assets/CSS/peace.css';
// // import ObjectsImage from '../assets/images/excited-smiling-girl-fist-pump-hold-money-prize-winning-cash-receive-income-from-something-standing-happy-against-blue-background_clipdrop-background-removal 2.svg';

// // function Peace() {
// //   return (
// //     <div className="peace-container">
// //       <div className="new-container">
// //         <img src={ObjectsImage} alt="Objects" className="image-left" />
// //         <div className="text-container">
// //           <h1><strong className="bold-text">Transact with Peace of Mind</strong></h1>
       
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Peace;


// import React from 'react';
// import '../assets/CSS/peace.css';
// import ObjectsImage from '../assets/images/excited-smiling-girl-fist-pump-hold-money-prize-winning-cash-receive-income-from-something-standing-happy-against-blue-background_clipdrop-background-removal 2.svg';

// function Peace() {
//   return (
//     <div className="peace-container">
//       <div className="new-container">
//         <img src={ObjectsImage} alt="Objects" className="image-left" />
//         <div className="text-container">
//           <h1><strong className="bold-text">Transact with Peace of Mind</strong></h1>
//           <div className="section">
//             <h2>Advanced Security Measures</h2>
//             <p>You can easily buy an item without cash just using your credit card.</p>
//           </div>
//           <div className="section">
//             <h2>Identity Verification</h2>
//             <p>All users undergo a stringent identity verification process to ensure a trusted and secure environment.</p>
//           </div>
//           <div className="section">
//             <h2>Transparent Terms</h2>
//             <p>Borrowers and investors benefit from clear and transparent terms, promoting fairness and trust.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Peace;


import React from 'react';
import '../assets/CSS/peace.css';
import ObjectsImage from '../assets/images/OBJECTS (1).svg';

function Peace() {
  return (
    <div className="peace-container">
      <div className="new-container">
        <img src={ObjectsImage} alt="Objects" className="image-left" />
        <div className="text-container">
          <h1><strong className="bold-text">Transact with Peace of Mind</strong></h1>
          <div className="section">
            <h2>Advanced Security Measures</h2>
            <p><span className="check-symbol">&#10004;</span>You can easily buy an item without cash just using your credit card. </p>
          </div>
          <div className="section">
            <h2>Identity Verification</h2>
            <p><span className="check-symbol">&#10004;</span>All users undergo a stringent identity verification process to ensure a trusted and secure environment. </p>
          </div>
          <div className="section">
            <h2>Transparent Terms</h2>
            <p> <span className="check-symbol">&#10004;</span>Borrowers and investors benefit from clear and transparent terms, promoting fairness and trust.</p>
          </div>
          <button className="view-all-button">View All</button>
        </div>
      </div>
    </div>
  );
}

export default Peace;
