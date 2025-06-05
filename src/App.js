// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './component/HomePage';
// import AdminPage from './Admin/AdminPage';
// import Login from './component/Login';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login />} />      
//         <Route path="/admin" element={<AdminPage />} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './AuthContext';
// import HomePage from './component/HomePage';
// import AdminPage from './Admin/AdminPage';
// import Login from './component/Login';
// import Navbar from './component/Navbar';
// import Dashboard from './component/Dashboard';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         {/* <Navbar /> */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/admin" element={<AdminPage />} />
//           <Route path="/dashboard" element={<Dashboard />} />
          


//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;










// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './AuthContext';
// import HomePage from './component/HomePage';
// import AdminPage from './Admin/AdminPage';
// import Login from './component/Login';
// import Dashboard from './component/Dashboard';
// import SellPage from './component/SellPage'; // Import the SellPage component
// import PropertyDetail from './component/PropertyDetail'; // Import the PropertyDetail component
// import AttractiveSlider from './component/AttractiveSlider ';



// function App() {


//   return (
//     <AuthProvider>
//       <Router>
      
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/admin" element={<AdminPage />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/sell" element={<SellPage />} />
//           <Route path="/property/:category/:id" element={<PropertyDetail />} />
//           <Route path="/AttractiveSlider" element={<AttractiveSlider />} /> {/* Add this line */}
         
//           {/* Remove the /sell route */}
//         </Routes>
//       </Router> 
//     </AuthProvider>
//   );
// }

// export default App;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import HomePage from './component/HomePage';
import AdminPage from './Admin/AdminPage';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import SellPage from './component/SellPage';
import PropertyDetail from './component/PropertyDetail';
import AttractiveSlider from './component/AttractiveSlider ';
import ProtectedRoute from './ProtectedRoute';
import Properties from './component/Properties';
import DraftFormsPage from './component/DraftFormsPage'; // Import the DraftFormsPage component
import SaleDeedForm from './component/SaleDeedForm'; // Import the SaleDeedForm component
import PowerOfAttorney from './component/PowerOfAttorney'; // Import the PowerOfAttorney component
import PowerOfAttorneyForm from './component/PowerOfAttorneyForm'; // Import the AgreementForm component
import GiftDeedForm from './component/GiftDeedForm'; // Import the GiftDeedForm component
import LeaseDeed from './component/LeaseDeed'; // Import the LeaseDeed component
import PowerOfAttorneyCancellation from './component/PowerOfAttorneyCancellation'; // Import the PowerOfAttorneyCancellation component
import BankReconveyanceLetter from './component/BankReconveyanceLetter'; // Import the BankReconveyanceLetter component
import SpecialPowerOfAttorney from './component/SpecialPowerOfAttorney'; // Import the SpecialPowerOfAttorney component
import SaleDeed from './component/SaleDeed'; // Import the SaleDeed component
import ReleaseDeed from './component/ReleaseDeed'; // Import the ReleaseDeed component
import LeaveLicenseAgreement from './component/LeaveLicenseAgreement'; // Import the LeaveLicenseAgreement component




function App() {
  return (
    <AuthProvider>
      
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/DraftFormsPage" element={<DraftFormsPage />} />
          <Route path="/AttractiveSlider" element={<AttractiveSlider />} />
          <Route path="/SaleDeedForm" element={<SaleDeedForm />} />
          <Route path="/PowerOfAttorney" element={<PowerOfAttorney />} />
          <Route path="/GiftDeedForm" element={<GiftDeedForm />} />
          <Route path="/PowerOfAttorneyForm" element={<PowerOfAttorneyForm />} />
          <Route path="/LeaseDeed" element={<LeaseDeed />} />
          <Route path="/PowerOfAttorneyCancellation" element={<PowerOfAttorneyCancellation />} />
          <Route path="/BankReconveyanceLetter" element={<BankReconveyanceLetter />} />
          <Route path="/SpecialPowerOfAttorney" element={<SpecialPowerOfAttorney />} />
          <Route path="/SaleDeed" element={<SaleDeed />} />
          <Route path="/ReleaseDeed" element={<ReleaseDeed />} />
          <Route path="/LeaveLicenseAgreement" element={<LeaveLicenseAgreement />} />
           {/* Public routes */}
           <Route path="/" element={<HomePage />} />
           <Route path="/properties" element={<Properties />} />
           <Route path="/DraftFormsPage" element={<DraftFormsPage />} />
           <Route path="/AttractiveSlider" element={<AttractiveSlider />} />
          <Route path="/sell" element={<SellPage />} />
           <Route path="/dashboard" element={<Dashboard />} />

          
            {/* <Route path="/admin" element={<AdminPage />} /> */}
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminPage />} />
             <Route path="/property/:category/:id" element={<PropertyDetail />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            {/* <Route path="/sell" element={<SellPage />} /> */}
          </Route>
        </Routes>
      </Router> 
    </AuthProvider>
  );
}

export default App;