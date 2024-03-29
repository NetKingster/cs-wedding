// App.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './background.png';
import './TableReservation.css';

const TableReservation = () => {
  const [inputName, setInputName] = useState('');
  const [designation, setDesignation] = useState(null);
  const [tableNumber, setTableNumber] = useState(null);
  const [remark, setRemark] = useState(null);
  const [error, setError] = useState('');
  
  

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputNameLowercase = inputName.toLowerCase();
    // Simulated data of guest names and their corresponding table numbers
    const guestList = {
      "Teo Chee Hao": { designation:"Groom", tableNumber: "VIP", remark: "VIP-Groom" },
      "Phua Sherlee": { designation:"Bride", tableNumber: "VIP", remark: "VIP-Bride" },
      "Teo Hong": { designation:"Mr.Teo Hong & Mdm.Loh KL", tableNumber: "VIP", remark: "Welcome father & mother to our wedding!" },
      "Loh Kwai Lin": { designation:"Mdm.Loh KL & Mr.Teo Hong", tableNumber: "VIP", remark: "Welcome father & mother to our wedding!" },
      "Phua Tai Heng": { designation:"Mr.Phua & family", tableNumber: "VIP", remark: "Welcome to our wedding, dear daddy!" },
      "Ng Yit Yin": { designation:"Mdm.Ng YY", tableNumber: "VIP", remark: "Welcome to our wedding, dear grandma!" },
      "Loh Poh Ling": { designation:"Mdm.Loh PL", tableNumber: "VIP", remark: "Welcome Aunt! Please enjoy" },
      "Phua Sherene": { designation:"Ms.Sherene & daughter", tableNumber: 2, remark: "Welcome to my wedding, dear sister!" },
      "Phua Shermay": { designation:"Ms.Shermay", tableNumber: 2, remark: "Welcome to my wedding, dear sister!" },
      "Phua Sherphia": { designation:"Ms.Sherphia & family", tableNumber: 2, remark: "Welcome to my wedding, dear sister & your family!" },
      "Wong Zhee Lun": { designation:"Mr.Wong ZL & family", tableNumber: 2, remark: "Welcome to my wedding, dear brother-in-law & your family!" },
      "Phua Howard": { designation:"Mr.Howard", tableNumber: 2, remark: "Welcome to my wedding, dear brother!" },
      "Eng Ley Yue": { designation:"Ms.Ley Yue & your BF", tableNumber: 2, remark: "Welcome! Please enjoy" },
      "Carol Low": { designation:"Mdm.Carol Low & your family", tableNumber: 3, remark: "Welcome! Please enjoy" },
      "Low Chooi Keng": { designation:"Mdm.Low CK & your family", tableNumber: 3, remark: "Welcome! Please enjoy" },
      "Low Wai Keong": { designation:"Mr.Low WK & your family", tableNumber: 3, remark: "Welcome Low family! Please enjoy" },
      "Low Wai Man": { designation:"Mr.Low WM & your family", tableNumber: 3, remark: "Welcome Low family! Please enjoy" },
      "Sia Yuen Sing": { designation:"Ms.Sia YS & your family", tableNumber: 1, remark: "Welcome Sia Family! Please enjoy" },
      "Sia Chew Ly": { designation:"Ms.Sia CL & your BF & family", tableNumber: 1, remark: "Welcome Sia Family! Please enjoy" },
      "谢源胜": { designation:"谢先生 & 您家人", tableNumber: 1, remark: "欢迎谢家，请入座" },
      "谢巧利": { designation:"谢小姐 & 您家人", tableNumber: 1, remark: "欢迎谢家，请入座" },
      "Teo Tian Siang": { designation:"Mr.Teo TS & family", tableNumber: 1, remark: "Welcome! Please enjoy" },
      "Teo Tian Wen": { designation:"Mr.Teo TW & family", tableNumber: 1, remark: "Welcome! Please enjoy" },
      "Teo Yue Hui": { designation:"Mdm.Teo YH & family", tableNumber: 6, remark: "Welcome to my wedding, dear sister & your family!" },
      "Chua Chee Lai": { designation:"Mr.Chua CL & family", tableNumber: 6, remark: "Welcome to my wedding, dear brother-in-law & your family!" },
      "Teo Yue Siew": { designation:"Ms.Teo YS", tableNumber: 8, remark: "Welcome to my wedding, dear sister!" },
      "Teo Yue Ming": { designation:"Ms.Teo YM", tableNumber: 8, remark: "Welcome to my wedding, dear sister!" },
      "Lim Wee Lun": { designation:"Mr.Lim WL & Mdm.Lee WT", tableNumber: 8, remark: "Welcome Both! Please enjoy" },
      "Lee Woei Tyug": { designation:"Mdm.Lee WT & Mr.Lim WL", tableNumber: 8, remark: "Welcome Both! Please enjoy" },
      "Pea Ging Sin": { designation:"Mdm.Lee WT & Mr.Lim WL", tableNumber: 8, remark: "Welcome Both! Please enjoy" },
      "Eilynn Koh": { designation:"Ms.Eilynn", tableNumber: 8, remark: "Welcome! Please enjoy" },
      "Lee Shu Xi": { designation:"Ms.Lee SX", tableNumber: 8, remark: "Welcome! Please enjoy" },
      "Georqina Kee": { designation:"Mdm.Georqina & Mr.Low SK", tableNumber: 8, remark: "Welcome Both! Please enjoy" },
      "Low Seng Keat": { designation:"Mr.Low SK & Mdm.Georqina", tableNumber: 8, remark: "Welcome Both! Please enjoy" },
      "Chua Fu Xiong": { designation:"Mr.Chua FX", tableNumber: 8, remark: "Welcome! Please enjoy" },
      "Low Jien Lung": { designation:"Mr.Low JL & Ms.Lam QE", tableNumber: 9, remark: "Welcome Both! Please enjoy" },
      "Lam Qiao En": { designation:"Ms.Lam QE & Mr.Low JL", tableNumber: 9, remark: "Welcome Both! Please enjoy" },
      "Rubin Tan": { designation:"Mr.Rubin Tan", tableNumber: 9, remark: "Welcome! Please enjoy" },
      "Yong Song Jie": { designation:"Mr.Yong SJ & your GF", tableNumber: 9, remark: "Welcome Both! Please enjoy" },
      "Ling Zhong Yi": { designation:"Mr.Ling ZY", tableNumber: 9, remark: "Welcome! Please enjoy" },
      "Dog Yi": { designation:"Mr.Dog Yi", tableNumber: 9, remark: "Welcome! Please enjoy" },
      "Sia Jia Ren": { designation:"Mr.Sia JR & your GF", tableNumber: 9, remark: "Welcome Both! Please enjoy" },
      "Yong Jia Jun": { designation:"Mr.Yong JJ & your GF", tableNumber: 9, remark: "Welcome Both! Please enjoy" },
      "Ong Shu Sian": { designation:"Ms.Shu Sian", tableNumber: 10, remark: "Welcome! Please enjoy" },
      "Sim Kiang Sia": { designation:"Mr.Kiang Sia", tableNumber: 10, remark: "Welcome! Please enjoy" },
      "Tin Kok Poh": { designation:"Mr.Kok Poh", tableNumber: 10, remark: "Welcome! Please enjoy" },
      "Woo Kah Seng": { designation:"Mr.Kah Seng", tableNumber: 10, remark: "Welcome! Please enjoy" },
      "Ting Ping Ling": { designation:"Mr.Ping Ling", tableNumber: 10, remark: "Welcome! Please enjoy" },
      "Jason Tai Wen Dong": { designation:"Mr.Jason Tai", tableNumber: 10, remark: "Welcome! Please enjoy" },
      "Chan Qi Hui": { designation:"Mr.Chan QH", tableNumber: 10, remark: "Welcome! Please enjoy" },
      "Pei Jie": { designation:"Ms.Pei Jie", tableNumber: 10, remark: "Welcome! Please enjoy" },
      "Yow Jia Min": { designation:"Ms.Jia Min & Mr.Zhi Ying", tableNumber: 10, remark: "Welcome Both! Please enjoy" },
      "Zhi Ying": { designation:"Mr.Zhi Ying & Ms.Jia Min", tableNumber: 10, remark: "Welcome Both! Please enjoy" },
      "Goh Yau Zong": { designation:"Mr.Goh YZ & family", tableNumber: 7, remark: "Welcome Goh Family! Please enjoy" },
      "Khoo Yee Ann": { designation:"Mr.Khoo YA", tableNumber: 7, remark: "Welcome! Please enjoy" },
      "Phua Lai Yin": { designation:"Mdm.Phua LY & family", tableNumber: 5, remark: "Welcome Ng Family! Please enjoy" },
      "Ng Keng Weng": { designation:"Mr.Ng KW & family", tableNumber: 5, remark: "Welcome Ng Family! Please enjoy" },
      "Ng Man Yee": { designation:"Ms.Ng MY & family", tableNumber: 5, remark: "Welcome Ng Family! Please enjoy" },
      "Ng Kah Lok": { designation:"Mr.Ng KL & family", tableNumber: 5, remark: "Welcome Ng Family! Please enjoy" },
      "Tang Yun Cheng": { designation:"Ms.Tang YC & your BF", tableNumber: 5, remark: "Welcome Both! Please enjoy" },
      "Lee Xue Yan": { designation:"Ms.Lee XY & your Husband", tableNumber: 5, remark: "Welcome Both! Please enjoy" },
      "Chew Jia Ying": { designation:"Ms.Chew JY & your BF", tableNumber: 5, remark: "Welcome Both! Please enjoy" },
      "": { designation:"", tableNumber: "" , remark: "Please enter your name" },
        // Add more guests here...
    };

    let found = false;
    // Object.keys(guestList).forEach((guestName) => {
    //   if (guestName.toLowerCase().startsWith(inputNameLowercase)) { // Check if lowercase guest name matches lowercase input name
    //     setDesignation(guestList[guestName].designation)
    //     setTableNumber(guestList[guestName].tableNumber);
    //     setRemark(guestList[guestName].remark);
    //     setError('');
    //     found = true;
    //   }

      Object.keys(guestList).forEach((guestName) => {
        const guestNameLowercase = guestName.toLowerCase();
        const inputWords = inputNameLowercase.split(' ');
        const guestWords = guestNameLowercase.split(' ');
    
        const isMatch = inputWords.every((word) => {
          return guestWords.some((guestWord) => {
            return guestWord.startsWith(word);
          });
        });
    
        if (isMatch) {
          setDesignation(guestList[guestName].designation)
          setTableNumber(guestList[guestName].tableNumber);
          setRemark(guestList[guestName].remark);
          setError('');
          found = true;
        }
    });

    

    if (!found) {
      setDesignation(null);
      setTableNumber(null);
      setRemark(null);
      setError('Not Found!');
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh',  justifyContent: 'center', alignItems: 'center' }}>
      <h1 className="text-center mb-4" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '40px'}}>Welcome to <br></br>Chee Hao & Sherlee <br></br>Wedding</h1>
      <h2 className="text-center mb-4" style={{ fontFamily: 'Lobster, cursive', fontSize: '16px'}}>Venue: Restaurant Loon Sing Level 1 (JB-Bukit Indah)<br></br> Date/Time: 9th March 2024 7pm</h2>
      <div className="card p-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)', position: 'relative' }}>
        <form onSubmit={handleSubmit} className="mb-3">
          <p style={{ fontFamily: 'Dancing Script, cursive', fontSize: '18px'}}>Dear Guest, please enter your full name to find your seat</p>
          <div className="mb-3">
            <input
              type="text"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>

        {error && (
          <div className="error-animation">
            <p className="text-danger text-center" style={{fontSize: '30px'}}>{error}</p>
          </div>
        )}
        {designation && (
          <p className='text-secondary text-center' style={{ fontFamily: 'Pacifico, cursive', fontSize: '18px'}}>Dear {designation}, <br></br> Your table number is</p>
        )}
        {tableNumber && (
          <div className='parent-container'>
            <div className="circle-animation">
              <p className="circle-number">{tableNumber}</p>
            </div>
          </div>
        )}
        <p className='text-secondary text-center' style={{ fontFamily: 'Pacifico, cursive', fontSize: '18px'}}>{remark}</p>
      </div>
      
        
      
    </div>
  );
};

export default TableReservation;


