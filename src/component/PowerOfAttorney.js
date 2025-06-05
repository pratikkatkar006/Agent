// import React, { useState } from 'react';

// const PowerOfAttorney = () => {
//   // Editable fields state
//   const [formData, setFormData] = useState({
//     date: '१३/०५/२०२५',
//     granter1Name: 'सुरेश बाळासो काळे',
//     granter1Occupation: 'शेती',
//     granter1Age: '४१',
//     granter1Address: 'रा.चिंचणी ता.तासगाव.जि.सांगली',
//     granter1Mobile: '९९२१२४०३४५',
//     granter1Aadhar: '८७१७ ७०७३ १०८०',
//     granter1PAN: 'BSOPK8479G',
//     granter2Name: 'रेखा सदाशिव पाटील',
//     granter2Age: '६३',
//     granter2Occupation: 'शेती/घरकाम',
//     granter2Address: 'रा. तासगाव ता.तासगाव जि.सांगली',
//     granter2Mobile: '७८२१०२४३२९',
//     granter2Aadhar: '८८४३ ५४२१ ५३५५',
//     granter2PAN: 'DZVPP4336K',
//     granter3Name: 'संतोष सदाशिव पाटील',
//     granter3Age: '४२',
//     granter3Occupation: 'शेती/घरकाम',
//     granter3Address: 'रा. तासगाव ता.तासगाव जि.सांगली',
//     granter3Aadhar: '६६३७ ५८९६ ५६२१',
//     granter3PAN: 'TTSPS6357A',
//     property1SurveyNo: '२४९७',
//     property1Area: '१७.६०',
//     property1East: 'बजरंग सूर्यवंशी यांची मिळकत',
//     property1South: 'विजय निर्मळे यांची मिळकत',
//     property1West: 'संतोष पाटील यांची मिळकत',
//     property1North: 'मनोहर निर्मळे यांची मिळकत',
//     property2SurveyNo: '२४९८',
//     property2Area: '१५.९०',
//     property2East: 'संतोष पाटील यांची मिळकत',
//     property2South: 'विजय निर्मळे यांची मिळकत',
//     property2West: 'रस्ता',
//     property2North: 'मनोहर निर्मळे यांची मिळकत',
//     property3SurveyNo: '२४९६',
//     property3Area: '३४.३०',
//     property3Share: '८.५७',
//     registrarOffice: 'तासगाव स.र.कचेरी',
//     registrarNumber: '',
//     registrarDate: '१३/०५/२०२५'
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div style={{
//       maxWidth: '900px',
//       margin: '20px auto',
//       padding: '30px',
//       fontFamily: "'Noto Sans Devanagari', 'Arial', sans-serif",
//       background: '#f9f5f0',
//       boxShadow: '0 0 20px rgba(0,0,0,0.1)',
//       border: '1px solid #d9c7b8',
//       borderRadius: '8px',
//       color: '#333',
//       lineHeight: '1.6'
//     }}>
//       <h1 style={{
//         textAlign: 'center',
//         color: '#8b4513',
//         fontSize: '24px',
//         marginBottom: '30px',
//         borderBottom: '2px solid #8b4513',
//         paddingBottom: '10px'
//       }}>
//         कधीही रद्द न होणारे कुलमुखत्यारपत्र
//       </h1>

//       <div style={{ marginBottom: '20px' }}>
//         <p style={{ textAlign: 'center', marginBottom: '20px' }}>
//           साठेखत वरून कुलमुखत्यारपत्र जिल्हा सांगली पोट तुकडी व ता.तासगाव पैकी कसबे तासगाव येथील सिटी सर्व्हे मिळकत.
//         </p>
//         <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
//           आज दिनांक:-
//           <input
//             type="text"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             style={{
//               border: '1px solid #d9c7b8',
//               padding: '5px',
//               width: '120px',
//               marginLeft: '10px',
//               color: 'red',
//               fontWeight: 'bold'
//             }}
//           />
//         </p>
//       </div>

//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         marginBottom: '30px',
//         flexWrap: 'wrap'
//       }}>
//         <div style={{ width: '48%', marginBottom: '20px' }}>
//           <h3 style={{
//             borderBottom: '1px solid #8b4513',
//             paddingBottom: '5px',
//             color: '#8b4513',
//             fontSize: '18px'
//           }}>
//             लिहून घेणार
//           </h3>
//           <p>
//             <input
//               type="text"
//               name="granter1Name"
//               value={formData.granter1Name}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100%' }}
//             />
//             <br />
//             धंदा-
//             <input
//               type="text"
//               name="granter1Occupation"
//               value={formData.granter1Occupation}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '150px', marginLeft: '5px' }}
//             />,
//             वय-
//             <input
//               type="text"
//               name="granter1Age"
//               value={formData.granter1Age}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '50px', marginLeft: '5px' }}
//             />
//             वर्षे<br />
//             <input
//               type="text"
//               name="granter1Address"
//               value={formData.granter1Address}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100%', marginTop: '5px' }}
//             />
//             <br />
//             मो.नं - 
//             <input
//               type="text"
//               name="granter1Mobile"
//               value={formData.granter1Mobile}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
//             />
//             <br />
//             आधार नं:-
//             <input
//               type="text"
//               name="granter1Aadhar"
//               value={formData.granter1Aadhar}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '150px', marginLeft: '5px' }}
//             />
//             <br />
//             PAN NO -
//             <input
//               type="text"
//               name="granter1PAN"
//               value={formData.granter1PAN}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
//             />
//           </p>
//         </div>

//         <div style={{ width: '48%' }}>
//           <h3 style={{
//             borderBottom: '1px solid #8b4513',
//             paddingBottom: '5px',
//             color: '#8b4513',
//             fontSize: '18px'
//           }}>
//             लिहून देणार
//           </h3>
          
//           <div style={{ marginBottom: '20px' }}>
//             <p>१) <input
//               type="text"
//               name="granter2Name"
//               value={formData.granter2Name}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '200px' }}
//             /></p>
//             <p>
//               वय-
//               <input
//                 type="text"
//                 name="granter2Age"
//                 value={formData.granter2Age}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '50px', marginLeft: '5px' }}
//               />
//               वर्षे, धंदा-
//               <input
//                 type="text"
//                 name="granter2Occupation"
//                 value={formData.granter2Occupation}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
//               /><br />
//               <input
//                 type="text"
//                 name="granter2Address"
//                 value={formData.granter2Address}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100%', marginTop: '5px' }}
//               /><br />
//               मो.नं -
//               <input
//                 type="text"
//                 name="granter2Mobile"
//                 value={formData.granter2Mobile}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
//               /><br />
//               आधार नं -
//               <input
//                 type="text"
//                 name="granter2Aadhar"
//                 value={formData.granter2Aadhar}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '150px', marginLeft: '5px' }}
//               /><br />
//               PAN NO-
//               <input
//                 type="text"
//                 name="granter2PAN"
//                 value={formData.granter2PAN}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
//               />
//             </p>
//           </div>

//           <div>
//             <p>२) <input
//               type="text"
//               name="granter3Name"
//               value={formData.granter3Name}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '200px' }}
//             /></p>
//             <p>
//               वय-
//               <input
//                 type="text"
//                 name="granter3Age"
//                 value={formData.granter3Age}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '50px', marginLeft: '5px' }}
//               />
//               वर्षे, धंदा-
//               <input
//                 type="text"
//                 name="granter3Occupation"
//                 value={formData.granter3Occupation}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
//               /><br />
//               <input
//                 type="text"
//                 name="granter3Address"
//                 value={formData.granter3Address}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100%', marginTop: '5px' }}
//               /><br />
//               आधार नं -
//               <input
//                 type="text"
//                 name="granter3Aadhar"
//                 value={formData.granter3Aadhar}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '150px', marginLeft: '5px' }}
//               /><br />
//               PAN NO-
//               <input
//                 type="text"
//                 name="granter3PAN"
//                 value={formData.granter3PAN}
//                 onChange={handleChange}
//                 style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
//               />
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Property Details Section */}
//       <div style={{ marginBottom: '30px' }}>
//         <h3 style={{
//           borderBottom: '1px solid #8b4513',
//           paddingBottom: '5px',
//           color: '#8b4513',
//           fontSize: '18px'
//         }}>
//           मिळकत तपशील
//         </h3>

//         <div style={{ marginBottom: '20px' }}>
//           <p>१) सि.स.नंबर: 
//             <input
//               type="text"
//               name="property1SurveyNo"
//               value={formData.property1SurveyNo}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
//             />
//             क्षेत्र 
//             <input
//               type="text"
//               name="property1Area"
//               value={formData.property1Area}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
//             />
//             चौ.मी</p>
//           <p style={{ paddingLeft: '20px' }}>
//             यातील आमचा संपूर्ण हिस्सा क्षेत्र {formData.property1Area} चौ.मी मिळकत व यातील संपूर्ण अर्ध पक्के बांधकामासह मिळकत.
//           </p>
//           <p style={{ paddingLeft: '20px' }}>
//             यासी चतुसिमा :-<br />
//             पूर्वेस :- <input
//               type="text"
//               name="property1East"
//               value={formData.property1East}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
//             /><br />
//             दक्षिणेस :- <input
//               type="text"
//               name="property1South"
//               value={formData.property1South}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
//             /><br />
//             पश्चिमेस :- <input
//               type="text"
//               name="property1West"
//               value={formData.property1West}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
//             /><br />
//             उत्तरेस :- <input
//               type="text"
//               name="property1North"
//               value={formData.property1North}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
//             />
//           </p>
//         </div>

//         <div style={{ marginBottom: '20px' }}>
//           <p>२) सि.स.नंबर: 
//             <input
//               type="text"
//               name="property2SurveyNo"
//               value={formData.property2SurveyNo}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
//             />
//             क्षेत्र 
//             <input
//               type="text"
//               name="property2Area"
//               value={formData.property2Area}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
//             />
//             चौ.मी</p>
//           <p style={{ paddingLeft: '20px' }}>
//             यातील आमचा संपूर्ण हिस्सा क्षेत्र {formData.property2Area} चौ.मी मिळकत व यातील संपूर्ण अर्ध पक्के बांधकामासह मिळकत.
//           </p>
//           <p style={{ paddingLeft: '20px' }}>
//             यासी चतुसिमा :-<br />
//             पूर्वेस :- <input
//               type="text"
//               name="property2East"
//               value={formData.property2East}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
//             /><br />
//             दक्षिणेस :- <input
//               type="text"
//               name="property2South"
//               value={formData.property2South}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
//             /><br />
//             पश्चिमेस :- <input
//               type="text"
//               name="property2West"
//               value={formData.property2West}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
//             /><br />
//             उत्तरेस :- <input
//               type="text"
//               name="property2North"
//               value={formData.property2North}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
//             />
//           </p>
//         </div>

//         <div>
//           <p>३) सि.स.नंबर: 
//             <input
//               type="text"
//               name="property3SurveyNo"
//               value={formData.property3SurveyNo}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
//             />
//             क्षेत्र 
//             <input
//               type="text"
//               name="property3Area"
//               value={formData.property3Area}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
//             />
//             चौ.मी</p>
//           <p style={{ paddingLeft: '20px' }}>
//             यातील आमचा संपूर्ण हिस्सा क्षेत्र 
//             <input
//               type="text"
//               name="property3Share"
//               value={formData.property3Share}
//               onChange={handleChange}
//               style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
//             />
//             चौ.मी यामधील समाईकात पूर्वपश्चिम उत्तर बाजूकडून समाईक रस्त्याने जाणे - येणेचे संपूर्ण हक्कासह.
//           </p>
//         </div>

//         <p style={{ marginTop: '20px' }}>
//           येणेप्रमाणे चतुर्सिमेतील जमीन मिळकत झाड-झुड तदंगभूत वास्तुसहित व इजमेंटचे सर्व त्या हक्कासह मिळकत. सदर जमिनीचे रजिस्टर साठेखत 
//           <input
//             type="text"
//             name="registrarDate"
//             value={formData.registrarDate}
//             onChange={handleChange}
//             style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100px', margin: '0 5px' }}
//           />
//           रोजी करून तो दस्त 
//           <input
//             type="text"
//             name="registrarOffice"
//             value={formData.registrarOffice}
//             onChange={handleChange}
//             style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '150px', margin: '0 5px' }}
//           />
//           येथे दस्त नंबर-
//           <input
//             type="text"
//             name="registrarNumber"
//             value={formData.registrarNumber}
//             onChange={handleChange}
//             style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100px', margin: '0 5px' }}
//           />
//           ने नोंद केलेला आहे.
//         </p>
//       </div>

//       {/* Terms and Conditions Section */}
//       <div>
//         <h3 style={{
//           borderBottom: '1px solid #8b4513',
//           paddingBottom: '5px',
//           color: '#8b4513',
//           fontSize: '18px'
//         }}>
//           अटी व शर्ती
//         </h3>
        
//         <p>२) मालकी हक्क व पार्श्वभूमी:-</p>
//         <p style={{ paddingLeft: '20px' }}>
//           वर कलम १ मध्ये नमूद केलेली मिळकत ही आमची वडिलोपार्जित मालकी हक्क वाहिवाटीची असून व सदर मिळकतीवर व सरकारी सर्व रेकार्ड सदरी मालक म्हणून माझे नाव नोंद आहे. व कलम १ मध्ये नमूद केलेली मिळकत ही आम्ही आजरोजी तासगाव ता.तासगाव येथील स.र.कचेरीत (रजिस्टर ऑफिस) मध्ये तुम्हास कुलमुखत्यारपत्र लिहून देत आहे. वर नमूद कलम १ मध्ये असलेल्या मिळकतीचे आजरोजी पासून आम्ही तुम्हास कुलमुखत्यार म्हणून नेमले आहे. तरी तुम्ही सदरच्या मिळकतीमध्ये आमच्या हितासाठी जे काही आमचे हित साधनेसाठी तुम्ही जे-जे काही व्यवहार करणार आहात ते-ते आम्हाला मान्य व कबूल आहेत. त्यास आम्ही व आमच्या वाली-वारस,भाऊबंध यांची कोणतीही हरकत अगर तक्रार नाही.
//         </p>
        
//         {/* Other terms and conditions */}
//         <p style={{ paddingLeft: '20px' }}>
//           आमच्या वैयक्तिक कारणामुळे व्यवहारास हजर नाही राहता येणार म्हणून खालीलप्रमाणे संपूर्ण व्यवहार करण्यासाठी आम्ही तुम्हास कुलमुखत्यार म्हणून नेमले आहे. खालील नमूद प्रत्येक व्यवहार करण्याची परवानगी आम्ही तुम्हास ह्या कधीही न रद्द होणारे कुलमुखत्यारपत्रा द्वारे परवानगी देत आहे.
//         </p>
        
//         <p>३) सदर कलम १ मधील मिळकतीचे खरेदीपत्र करून घेणे त्यास लागणाऱ्या सर्व कागदपत्रे,प्रतिज्ञापत्र,जाब-जबाब, सह्या अंगठे, मान्यता देणे ,कबुली देणे व त्याच्या बदल्यात मिळकतीचा मोबदला घेणे.व खरेदिपत्राच्या सरकारी,निमसरकारी रेकॉर्ड सदरी नोंद करणे कामी लागणाऱ्या सर्व कागदपत्रे,सह्या-आंगठे,जाब-जबाब देणे.</p>
        
//         {/* Continue with other points... */}
        
//         <p style={{ marginTop: '20px' }}>
//           आम्ही तुम्हास आमच्या स्वखुशीने व राजीखुशीने तुम्हास हे कधीही न रद्द होणारे,कधीही न संपुष्टात येणारे कुलमुखत्यारपत्र लिहून दिले आहे. आमचा तुमच्यावर संपूर्ण विश्वास असल्याने तुम्हास मुखत्यार म्हणून नेमले आहे व पसंत केले आहे.
//         </p>
        
//         <p>
//           सदर मुखत्यार आम्हाला सुरवातीपासून शेवटपरेंत मान्य व कबूल आहे म्हणून आम्ही ह्या कुलमुखत्यारपत्र या दस्तावर सही व आमचा निशाणी अंगठा दिले आहे.व दोन साक्षीदारांनी साक्षी दाखल केल्या आहेत.जसे लिहून देणार यांनी सांगितले तसे मी हे लिहून दिले कुलमुखत्यारपत्र सही एस.डी.डाके रा.तासगाव.
//         </p>
        
//         <p style={{ textAlign: 'right', fontWeight: 'bold', marginTop: '30px' }}>
//           आज ता:- {formData.date}.
//         </p>
//       </div>

//       {/* Signature Section */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         marginTop: '50px',
//         flexWrap: 'wrap'
//       }}>
//         <div style={{ width: '30%', textAlign: 'center' }}>
//           <p>लिहून घेणार:</p>
//           <div style={{
//             borderTop: '1px solid #000',
//             width: '80%',
//             margin: '0 auto',
//             paddingTop: '50px'
//           }}></div>
//         </div>
        
//         <div style={{ width: '30%', textAlign: 'center' }}>
//           <p>लिहून देणार - १:</p>
//           <div style={{
//             borderTop: '1px solid #000',
//             width: '80%',
//             margin: '0 auto',
//             paddingTop: '50px'
//           }}></div>
//         </div>
        
//         <div style={{ width: '30%', textAlign: 'center' }}>
//           <p>लिहून देणार - २:</p>
//           <div style={{
//             borderTop: '1px solid #000',
//             width: '80%',
//             margin: '0 auto',
//             paddingTop: '50px'
//           }}></div>
//         </div>
//       </div>

//       {/* Witness Section */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         marginTop: '30px',
//         flexWrap: 'wrap'
//       }}>
//         <div style={{ width: '45%', textAlign: 'center' }}>
//           <p>साक्षिदार १:</p>
//           <div style={{
//             borderTop: '1px solid #000',
//             width: '80%',
//             margin: '0 auto',
//             paddingTop: '50px'
//           }}></div>
//         </div>
        
//         <div style={{ width: '45%', textAlign: 'center' }}>
//           <p>साक्षिदार २:</p>
//           <div style={{
//             borderTop: '1px solid #000',
//             width: '80%',
//             margin: '0 auto',
//             paddingTop: '50px'
//           }}></div>
//         </div>
//       </div>

//       {/* Print Button */}
//       <div style={{ textAlign: 'center', marginTop: '30px' }}>
//         <button style={{
//           padding: '10px 20px',
//           backgroundColor: '#8b4513',
//           color: '#fff',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//           fontSize: '16px',
//           transition: 'all 0.3s',
//           ':hover': {
//             backgroundColor: '#a0522d'
//           }
//         }}>
//           प्रिंट करा
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PowerOfAttorney;





import React, { useState } from 'react';

const PowerOfAttorney = () => {
  const [formData, setFormData] = useState({
    date: '१३/०५/२०२५',
    granter1Name: 'सुरेश बाळासो काळे',
    granter1Occupation: 'शेती',
    granter1Age: '४१',
    granter1Address: 'रा.चिंचणी ता.तासगाव.जि.सांगली',
    granter1Mobile: '९९२१२४०३४५',
    granter1Aadhar: '८७१७ ७०७३ १०८०',
    granter1PAN: 'BSOPK8479G',
    granter2Name: 'रेखा सदाशिव पाटील',
    granter2Age: '६३',
    granter2Occupation: 'शेती/घरकाम',
    granter2Address: 'रा. तासगाव ता.तासगाव जि.सांगली',
    granter2Mobile: '७८२१०२४३२९',
    granter2Aadhar: '८८४३ ५४२१ ५३५५',
    granter2PAN: 'DZVPP4336K',
    granter3Name: 'संतोष सदाशिव पाटील',
    granter3Age: '४२',
    granter3Occupation: 'शेती/घरकाम',
    granter3Address: 'रा. तासगाव ता.तासगाव जि.सांगली',
    granter3Aadhar: '६६३७ ५८९६ ५६२१',
    granter3PAN: 'TTSPS6357A',
    property1SurveyNo: '२४९७',
    property1Area: '१७.६०',
    property1East: 'बजरंग सूर्यवंशी यांची मिळकत',
    property1South: 'विजय निर्मळे यांची मिळकत',
    property1West: 'संतोष पाटील यांची मिळकत',
    property1North: 'मनोहर निर्मळे यांची मिळकत',
    property2SurveyNo: '२४९८',
    property2Area: '१५.९०',
    property2East: 'संतोष पाटील यांची मिळकत',
    property2South: 'विजय निर्मळे यांची मिळकत',
    property2West: 'रस्ता',
    property2North: 'मनोहर निर्मळे यांची मिळकत',
    property3SurveyNo: '२४९६',
    property3Area: '३४.३०',
    property3Share: '८.५७',
    registrarOffice: 'तासगाव स.र.कचेरी',
    registrarNumber: '',
    registrarDate: '१३/०५/२०२५'
  });

  const [isPreview, setIsPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  const renderInputOrText = (name, value, width = 'auto') => {
    if (isPreview) {
      return <span style={{ ...styles.previewText, width }}>{value}</span>;
    }
    return (
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        style={{ ...styles.input, width }}
      />
    );
  };

  const printDocument = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>कधीही रद्द न होणारे कुलमुखत्यारपत्र</title>
        <style>
          @page {
            size: A4;
            margin: 0;
          }
          body {
            font-family: "Noto Sans Devanagari", Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          .title {
            font-size: 24px;
            margin-bottom: 5px;
          }
          .subtitle {
            font-size: 20px;
            margin-top: 0;
          }
          .section {
            margin-bottom: 20px;
          }
          .section-title {
            font-weight: bold;
            border-bottom: 1px solid #000;
            margin-bottom: 10px;
          }
          .party-details {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
          }
          .party-column {
            width: 48%;
          }
          .party-header {
            font-weight: bold;
            margin-bottom: 10px;
            text-align: left;
          }
          .right-align {
            text-align: right;
          }
          .signature-section {
            display: flex;
            justify-content: space-between;
            margin: 40px 0;
          }
          .signature-box {
            width: 30%;
            text-align: center;
          }
          .witness-section {
            margin: 40px 0;
          }
          .witness-boxes {
            display: flex;
            justify-content: space-between;
          }
          .witness-box {
            width: 45%;
            text-align: center;
          }
          .footer {
            text-align: center;
            margin-top: 40px;
          }
          .table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0;
          }
          .table th, .table td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
          }
          .table th {
            background-color: #f0f0f0;
          }
          .hr {
            border: none;
            border-top: 1px dashed #000;
            margin: 10px 0;
          }
          .indent {
            margin-left: 40px;
          }
          .signature-line {
            border-top: 1px solid #000;
            width: 80%;
            margin: 0 auto;
            padding-top: 50px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">// कधीही रद्द न होणारे कुलमुखत्यारपत्र //</h1>
        </div>

        <div class="section">
          <p>
            साठेखत वरून कुलमुखत्यारपत्र जिल्हा सांगली पोट तुकडी व ता.तासगाव पैकी कसबे तासगाव येथील सिटी सर्व्हे मिळकत.
          </p>
          <p style="text-align: right; font-weight: bold;">
            आज दिनांक:- ${formData.date}.
          </p>
        </div>

        <div class="party-details">
          <div class="party-column">
            <p>${formData.granter1Name}.</p>
            <p>धंदा-${formData.granter1Occupation}, वय-${formData.granter1Age} वर्षे</p>
            <p>${formData.granter1Address}</p>
            <p>मो.नं – ${formData.granter1Mobile}.</p>
            <p>आधार न:-${formData.granter1Aadhar}.</p>
            <p>PAN NO – ${formData.granter1PAN}.</p>

             <p class="party-header">लिहून घेणार</p>
            <p>१) ${formData.granter2Name}.</p>
            <p>वय-${formData.granter2Age} वर्षे, धंदा-${formData.granter2Occupation}</p>
            <p>${formData.granter2Address}.</p>
            <p>मो.नं –${formData.granter2Mobile}.</p>
            <p>आधार नं – ${formData.granter2Aadhar}.</p>
            <p>PAN NO- ${formData.granter2PAN}.</p>
            <p class="party-header">लिहून देणार</p>
            <p>२) ${formData.granter3Name}.</p>
            <p>वय-${formData.granter3Age} वर्षे, धंदा-${formData.granter3Occupation}</p>
            <p>${formData.granter3Address}.</p>
            <p>आधार नं – ${formData.granter3Aadhar}.</p>
            <p>PAN NO- ${formData.granter3PAN}.</p>
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">१) लिहून देतो कुलमुखत्यारपत्र ऐेसाजे की</h3>
          <p>जिल्हा तुकडी सांगली, पोट तुकडी व तालुका तासगाव पैकी कसबे तासगाव येथील सिटी सर्व्हे मिळकत –</p>
          
          <table class="table">
            <thead>
              <tr>
                <th>अनु.क्र</th>
                <th>सि.स.नंबर</th>
                <th>क्षेत्र चौ.मी</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>१)</td>
                <td>${formData.property1SurveyNo}</td>
                <td>${formData.property1Area}</td>
              </tr>
            </tbody>
          </table>

          <p class="indent">
            यातील आमचा संपूर्ण हिस्सा क्षेत्र ${formData.property1Area} चौ.मी मिळकत व यातील संपूर्ण अर्ध पक्के बांधकामासह मिळकत.
          </p>
          <p class="indent">
            यासी चतुसिमा :-<br />
            पूर्वेस :- ${formData.property1East}.<br />
            दक्षिणेस :- ${formData.property1South}.<br />
            पश्चिमेस :- ${formData.property1West}.<br />
            उत्तरेस :- ${formData.property1North}.
          </p>

          <table class="table">
            <thead>
              <tr>
                <th>अनु.क्र</th>
                <th>सि.स.नंबर</th>
                <th>क्षेत्र चौ.मी</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>२)</td>
                <td>${formData.property2SurveyNo}</td>
                <td>${formData.property2Area}</td>
              </tr>
            </tbody>
          </table>

          <p class="indent">
            यातील आमचा संपूर्ण हिस्सा क्षेत्र ${formData.property2Area} चौ.मी मिळकत व यातील संपूर्ण अर्ध पक्के बांधकामासह मिळकत.
          </p>
          <p class="indent">
            यासी चतुसिमा :-<br />
            पूर्वेस :- ${formData.property2East}.<br />
            दक्षिणेस :- ${formData.property2South}.<br />
            पश्चिमेस :- ${formData.property2West}.<br />
            उत्तरेस :- ${formData.property2North}.
          </p>

          <table class="table">
            <thead>
              <tr>
                <th>अनु.क्र</th>
                <th>सि.स.नंबर</th>
                <th>क्षेत्र चौ.मी</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>३)</td>
                <td>${formData.property3SurveyNo}</td>
                <td>${formData.property3Area}</td>
              </tr>
            </tbody>
          </table>

          <p class="indent">
            यातील आमचा संपूर्ण हिस्सा क्षेत्र ${formData.property3Share} चौ.मी यामधील समाईकात पूर्वपश्चिम उत्तर बाजूकडून समाईक रस्त्याने जाणे – येणेचे संपूर्ण हक्कासह.
          </p>

          <p>
            येणेप्रमाणे चतुर्सिमेतील जमीन मिळकत झाड-झुड तदंगभूत वास्तुसहित व इजमेंटचे सर्व त्या हक्कासह मिळकत. सदर जमिनीचे रजिस्टर साठेखत ता.${formData.registrarDate} रोजी करून तो दस्त ${formData.registrarOffice} येथे दस्त नंबर-${formData.registrarNumber} ने नोंद केलेला आहे.
          </p>
        </div>

        <div class="section">
          <h3 class="section-title">२) मालकी हक्क व पार्श्वभूमी:-</h3>
          <p class="indent">
            वर कलम १ मध्ये नमूद केलेली मिळकत ही आमची वडिलोपार्जित मालकी हक्क वाहिवाटीची असून व सदर मिळकतीवर व सरकारी सर्व रेकार्ड सदरी मालक म्हणून माझे नाव नोंद आहे. व कलम १ मध्ये नमूद केलेली मिळकत ही आम्ही आजरोजी तासगाव ता.तासगाव येथील स.र.कचेरीत (रजिस्टर ऑफिस) मध्ये तुम्हास कुलमुखत्यारपत्र लिहून देत आहे. वर नमूद कलम १ मध्ये असलेल्या मिळकतीचे आजरोजी पासून आम्ही तुम्हास कुलमुखत्यार म्हणून नेमले आहे. तरी तुम्ही सदरच्या मिळकतीमध्ये आमच्या हितासाठी जे काही आमचे हित साधनेसाठी तुम्ही जे-जे काही व्यवहार करणार आहात ते-ते आम्हाला मान्य व कबूल आहेत. त्यास आम्ही व आमच्या वाली-वारस,भाऊबंध यांची कोणतीही हरकत अगर तक्रार नाही. 
          </p>
          <p class="indent">
            आमच्या वैयक्तिक कारणामुळे व्यवहारास हजर नाही राहता येणार म्हणून खालीलप्रमाणे संपूर्ण व्यवहार करण्यासाठी आम्ही तुम्हास कुलमुखत्यार म्हणून नेमले आहे. खालील नमूद प्रत्येक व्यवहार करण्याची परवानगी आम्ही तुम्हास ह्या कधीही न रद्द होणारे कुलमुखत्यारपत्रा द्वारे परवानगी देत आहे. 
          </p>
          
          <h3 class="section-title">३) सदर कलम १ मधील मिळकतीचे खरेदीपत्र करून घेणे त्यास लागणाऱ्या सर्व कागदपत्रे,प्रतिज्ञापत्र,जाब-जबाब, सह्या अंगठे, मान्यता देणे ,कबुली देणे व त्याच्या बदल्यात मिळकतीचा मोबदला घेणे.व खरेदिपत्राच्या सरकारी,निमसरकारी रेकॉर्ड सदरी नोंद करणे कामी लागणाऱ्या सर्व कागदपत्रे,सह्या-आंगठे,जाब-जबाब देणे.</h3>
          
          <h3 class="section-title">४) कलम १ मध्ये नमूद असलेल्या मिळकतीचे साठेखत करणे त्यास लागणारी सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.व सदर मिळकतीचा मोबदला घेणे.</h3>
          
          <h3 class="section-title">५) कलम १ मध्ये नमूद असलेल्या मिळकतीवर बँक बोजा,कर्ज,लोन घेणे त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.सदर घेतलेल्या कर्जाचे गहाणखत करू देणे.त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या-आंगठे,जाब-जबाब देणे.</h3>
          
          <h3 class="section-title">६) कलम १ मध्ये नमूद केलेल्या मिळकतीच्या शासकीय,निमशासकीय परवानगी घेणे.</h3>
          
          <h3 class="section-title">७) कलम १ मध्ये नमूद असलेल्या मिळकतीवर कोर्ट कचेरी ,दावे याचा निकाल आपली बाजूने लागण्यासाठी जे-जे काही करावे लागेल तेते सर्व तुम्ही करावे.त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे,वकील देणे व कुलमुखत्यार ह्या नात्याने आमच्या वतीने सदर कोर्ट कचेरीतला व्यवहार संपूर्णपणे पार पाडणे.</h3>
          
          <h3 class="section-title">८) कलम १ मध्ये नमूद केलेल्या मिळकतीचे मुखत्यार वरून मुखत्यार करणे.</h3>
          
          <h3 class="section-title">९) कलम १ मध्ये नमूद केलेल्या मिळकतीच्या कोणत्याही व्यवहाराची,दस्ताची चुक दुरुस्ती करणे,फेरबदल करणे.त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.</h3>
          
          <h3 class="section-title">१०) कलम १ मध्ये नमूद मिळकतीचे बक्षिसपत्र करणे.त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.</h3>
          
          <h3 class="section-title">११) कलम १ मध्ये नमूद असलेल्या मिळकतीच्या खरेदीपत्राच्या व नोंदीच्या दृष्टीने शासकीय व निमशासकीय कार्यालये कलेक्टर,तहसीलदार,तलाठी,सर्कल,सक्षम अधिकारी इ.कार्यालयातील सर्व कामे करणे त्यासाठी सर्व ती पूर्तता करणे. त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.</h3>
          
          <h3 class="section-title">१२) कलम १ मध्ये नमूद केलेल्या मिळकतीवर आवश्यक त्या परवानग्या आणून खरेदीपत्र करून घेनेसाठी म्हणजेच लिहून घेणार्यांना विक्री अगर तबदिली करणे,त्याचा मोबदला स्विकारणे,पोहोच पावत्या घेणे,त्याबाबतचे करारपत्र,खरेदीपत्र अगर अन्य कोणत्याही दस्तऐवजाची पूर्तता करणे सदरच्या दस्तऐवजावर सह्या करणे ती नोंदीसाठी नोंद कार्यालयात हजार करणे,कबुली जबाब देणे,तसेच त्यासाठी आवश्यक ते प्रतिज्ञापत्र,मान्यतापत्र प्रसंगी चूक दुरुस्तीलेख,पुरवणी लेख,ते नोंद करणे त्यासाठी नोंदणी कार्यालयात हजार राहणे,सह्या करणे कबुलीजबाब देणे.</h3>
          
          <h3 class="section-title">१३) कलम १ मध्ये नमूद केलेल्या मिळकती मध्ये तयार होणारे सिटी सर्व्हे रेकॉर्ड सदरी खरेदीदाराची नावे नोंद होण्यासाठी अर्ज,जाब-जबाब, सह्या – अंगठे देणे.</h3>
          
          <h3 class="section-title">१४) थोडक्यात वरील तुम्हास दिलेले सर्व अधिकार हे आम्ही जातीने हजार राहू शकत नसल्याने तुम्हास हे सर्व अधिकार दिले आहेत.जीजी कामे आम्ही स्वतः जातीने हजर राहून केली असती ती ती सर्व कामे तुम्ही ह्या कुलमुखत्यार द्वारे करून घ्यावीत.सदर कुलमुखत्यार हे आमच्या सर्व प्रकारच्या वाली वारसावर लागू,बंधनकारक व मान्य राहील.</h3>
          
          <p class="indent">
            आम्ही तुम्हास आमच्या स्वखुशीने व राजीखुशीने तुम्हास हे कधीही न रद्द होणारे,कधीही न संपुष्टात येणारे कुलमुखत्यारपत्र लिहून दिले आहे. आमचा तुमच्यावर संपूर्ण विश्वास असल्याने तुम्हास मुखत्यार म्हणून नेमले आहे व पसंत केले आहे.
          </p>
          <p class="indent">
            सदर मुखत्यार आम्हाला सुरवातीपासून शेवटपरेंत मान्य व कबूल आहे म्हणून आम्ही ह्या कुलमुखत्यारपत्र या दस्तावर सही व आमचा निशाणी अंगठा दिले आहे.व दोन साक्षीदारांनी साक्षी दाखल केल्या आहेत.जसे लिहून देणार यांनी सांगितले तसे मी हे लिहून दिले कुलमुखत्यारपत्र सही एस.डी.डाके रा.तासगाव.
          </p>
          <p style="text-align: right; font-weight: bold;">
            आज ता:-${formData.date}.
          </p>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>लिहून घेणार:-----------------------------------</p>
            <p>${formData.granter1Name}</p>
          </div>
          <div class="signature-box">
            <p>लिहून देणार :- -१)------------------------------</p>
            <p>${formData.granter2Name}</p>
          </div>
          <div class="signature-box">
            <p>लिहून देणार :- -२)-----------------------------</p>
            <p>${formData.granter3Name}</p>
          </div>
        </div>

        <div class="witness-section">
          <h3 class="section-title">// साक्षिदार //</h3>
          <div class="witness-boxes">
            <div class="witness-box">
              <p>१)-----------------------------------</p>
            </div>
            <div class="witness-box">
              <p>२)-----------------------------------</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  const styles = {
    container: {
      maxWidth: '900px',
      margin: '20px auto',
      padding: '30px',
      fontFamily: "'Noto Sans Devanagari', 'Arial', sans-serif",
      background: '#f9f5f0',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      border: '1px solid #d9c7b8',
      borderRadius: '8px',
      color: '#333',
      lineHeight: '1.6'
    },
    header: {
      textAlign: 'center',
      color: '#8b4513',
      fontSize: '24px',
      marginBottom: '30px',
      borderBottom: '2px solid #8b4513',
      paddingBottom: '10px'
    },
    input: {
      border: '1px solid #d9c7b8',
      padding: '5px',
      backgroundColor: '#fff',
      color: 'red',
      fontWeight: 'bold'
    },
    previewText: {
      display: 'inline-block',
      padding: '5px',
      fontWeight: 'bold'
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '30px'
    },
    previewButton: {
      padding: '10px 20px',
      backgroundColor: '#8b4513',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    printButton: {
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px'
    }
  };

  return (
    <div style={{
      maxWidth: '900px',
      margin: '20px auto',
      padding: '30px',
      fontFamily: "'Noto Sans Devanagari', 'Arial', sans-serif",
      background: '#f9f5f0',
      boxShadow: '0 0 20px rgba(0,0,0,0.1)',
      border: '1px solid #d9c7b8',
      borderRadius: '8px',
      color: '#333',
      lineHeight: '1.6'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#8b4513',
        fontSize: '24px',
        marginBottom: '30px',
        borderBottom: '2px solid #8b4513',
        paddingBottom: '10px'
      }}>
        कधीही रद्द न होणारे कुलमुखत्यारपत्र
      </h1>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ textAlign: 'center', marginBottom: '20px' }}>
          साठेखत वरून कुलमुखत्यारपत्र जिल्हा सांगली पोट तुकडी व ता.तासगाव पैकी कसबे तासगाव येथील सिटी सर्व्हे मिळकत.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          आज दिनांक:-
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            style={{
              border: '1px solid #d9c7b8',
              padding: '5px',
              width: '120px',
              marginLeft: '10px',
              color: 'red',
              fontWeight: 'bold'
            }}
          />
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        <div style={{ width: '48%', marginBottom: '20px' }}>
          <h3 style={{
            borderBottom: '1px solid #8b4513',
            paddingBottom: '5px',
            color: '#8b4513',
            fontSize: '18px'
          }}>
            लिहून घेणार
          </h3>
          <p>
            <input
              type="text"
              name="granter1Name"
              value={formData.granter1Name}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100%' }}
            />
            <br />
            धंदा-
            <input
              type="text"
              name="granter1Occupation"
              value={formData.granter1Occupation}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '150px', marginLeft: '5px' }}
            />,
            वय-
            <input
              type="text"
              name="granter1Age"
              value={formData.granter1Age}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '50px', marginLeft: '5px' }}
            />
            वर्षे<br />
            <input
              type="text"
              name="granter1Address"
              value={formData.granter1Address}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100%', marginTop: '5px' }}
            />
            <br />
            मो.नं - 
            <input
              type="text"
              name="granter1Mobile"
              value={formData.granter1Mobile}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
            />
            <br />
            आधार नं:-
            <input
              type="text"
              name="granter1Aadhar"
              value={formData.granter1Aadhar}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '150px', marginLeft: '5px' }}
            />
            <br />
            PAN NO -
            <input
              type="text"
              name="granter1PAN"
              value={formData.granter1PAN}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
            />
          </p>
        </div>

        <div style={{ width: '48%' }}>
          <h3 style={{
            borderBottom: '1px solid #8b4513',
            paddingBottom: '5px',
            color: '#8b4513',
            fontSize: '18px'
          }}>
            लिहून देणार
          </h3>
          
          <div style={{ marginBottom: '20px' }}>
            <p>१) <input
              type="text"
              name="granter2Name"
              value={formData.granter2Name}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '200px' }}
            /></p>
            <p>
              वय-
              <input
                type="text"
                name="granter2Age"
                value={formData.granter2Age}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '50px', marginLeft: '5px' }}
              />
              वर्षे, धंदा-
              <input
                type="text"
                name="granter2Occupation"
                value={formData.granter2Occupation}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
              /><br />
              <input
                type="text"
                name="granter2Address"
                value={formData.granter2Address}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100%', marginTop: '5px' }}
              /><br />
              मो.नं -
              <input
                type="text"
                name="granter2Mobile"
                value={formData.granter2Mobile}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
              /><br />
              आधार नं -
              <input
                type="text"
                name="granter2Aadhar"
                value={formData.granter2Aadhar}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '150px', marginLeft: '5px' }}
              /><br />
              PAN NO-
              <input
                type="text"
                name="granter2PAN"
                value={formData.granter2PAN}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
              />
            </p>
          </div>

          <div>
            <p>२) <input
              type="text"
              name="granter3Name"
              value={formData.granter3Name}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '200px' }}
            /></p>
            <p>
              वय-
              <input
                type="text"
                name="granter3Age"
                value={formData.granter3Age}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '50px', marginLeft: '5px' }}
              />
              वर्षे, धंदा-
              <input
                type="text"
                name="granter3Occupation"
                value={formData.granter3Occupation}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
              /><br />
              <input
                type="text"
                name="granter3Address"
                value={formData.granter3Address}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100%', marginTop: '5px' }}
              /><br />
              आधार नं -
              <input
                type="text"
                name="granter3Aadhar"
                value={formData.granter3Aadhar}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '150px', marginLeft: '5px' }}
              /><br />
              PAN NO-
              <input
                type="text"
                name="granter3PAN"
                value={formData.granter3PAN}
                onChange={handleChange}
                style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '120px', marginLeft: '5px' }}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Property Details Section */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{
          borderBottom: '1px solid #8b4513',
          paddingBottom: '5px',
          color: '#8b4513',
          fontSize: '18px'
        }}>
          मिळकत तपशील
        </h3>

        <div style={{ marginBottom: '20px' }}>
          <p>१) सि.स.नंबर: 
            <input
              type="text"
              name="property1SurveyNo"
              value={formData.property1SurveyNo}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
            />
            क्षेत्र 
            <input
              type="text"
              name="property1Area"
              value={formData.property1Area}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
            />
            चौ.मी</p>
          <p style={{ paddingLeft: '20px' }}>
            यातील आमचा संपूर्ण हिस्सा क्षेत्र {formData.property1Area} चौ.मी मिळकत व यातील संपूर्ण अर्ध पक्के बांधकामासह मिळकत.
          </p>
          <p style={{ paddingLeft: '20px' }}>
            यासी चतुसिमा :-<br />
            पूर्वेस :- <input
              type="text"
              name="property1East"
              value={formData.property1East}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
            /><br />
            दक्षिणेस :- <input
              type="text"
              name="property1South"
              value={formData.property1South}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
            /><br />
            पश्चिमेस :- <input
              type="text"
              name="property1West"
              value={formData.property1West}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
            /><br />
            उत्तरेस :- <input
              type="text"
              name="property1North"
              value={formData.property1North}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
            />
          </p>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <p>२) सि.स.नंबर: 
            <input
              type="text"
              name="property2SurveyNo"
              value={formData.property2SurveyNo}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
            />
            क्षेत्र 
            <input
              type="text"
              name="property2Area"
              value={formData.property2Area}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
            />
            चौ.मी</p>
          <p style={{ paddingLeft: '20px' }}>
            यातील आमचा संपूर्ण हिस्सा क्षेत्र {formData.property2Area} चौ.मी मिळकत व यातील संपूर्ण अर्ध पक्के बांधकामासह मिळकत.
          </p>
          <p style={{ paddingLeft: '20px' }}>
            यासी चतुसिमा :-<br />
            पूर्वेस :- <input
              type="text"
              name="property2East"
              value={formData.property2East}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
            /><br />
            दक्षिणेस :- <input
              type="text"
              name="property2South"
              value={formData.property2South}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
            /><br />
            पश्चिमेस :- <input
              type="text"
              name="property2West"
              value={formData.property2West}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
            /><br />
            उत्तरेस :- <input
              type="text"
              name="property2North"
              value={formData.property2North}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '250px', marginLeft: '10px' }}
            />
          </p>
        </div>

        <div>
          <p>३) सि.स.नंबर: 
            <input
              type="text"
              name="property3SurveyNo"
              value={formData.property3SurveyNo}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
            />
            क्षेत्र 
            <input
              type="text"
              name="property3Area"
              value={formData.property3Area}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
            />
            चौ.मी</p>
          <p style={{ paddingLeft: '20px' }}>
            यातील आमचा संपूर्ण हिस्सा क्षेत्र 
            <input
              type="text"
              name="property3Share"
              value={formData.property3Share}
              onChange={handleChange}
              style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '60px', margin: '0 5px' }}
            />
            चौ.मी यामधील समाईकात पूर्वपश्चिम उत्तर बाजूकडून समाईक रस्त्याने जाणे - येणेचे संपूर्ण हक्कासह.
          </p>
        </div>

        <p style={{ marginTop: '20px' }}>
          येणेप्रमाणे चतुर्सिमेतील जमीन मिळकत झाड-झुड तदंगभूत वास्तुसहित व इजमेंटचे सर्व त्या हक्कासह मिळकत. सदर जमिनीचे रजिस्टर साठेखत 
          <input
            type="text"
            name="registrarDate"
            value={formData.registrarDate}
            onChange={handleChange}
            style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100px', margin: '0 5px' }}
          />
          रोजी करून तो दस्त 
          <input
            type="text"
            name="registrarOffice"
            value={formData.registrarOffice}
            onChange={handleChange}
            style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '150px', margin: '0 5px' }}
          />
          येथे दस्त नंबर-
          <input
            type="text"
            name="registrarNumber"
            value={formData.registrarNumber}
            onChange={handleChange}
            style={{ color: 'red', border: '1px solid #d9c7b8', padding: '5px', width: '100px', margin: '0 5px' }}
          />
          ने नोंद केलेला आहे.
        </p>
      </div>

      {/* Terms and Conditions Section */}
      <div>
        <h3 style={{
          borderBottom: '1px solid #8b4513',
          paddingBottom: '5px',
          color: '#8b4513',
          fontSize: '18px'
        }}>
          अटी व शर्ती
        </h3>
        
        <p>२) मालकी हक्क व पार्श्वभूमी:-</p>
        <p style={{ paddingLeft: '20px' }}>
          वर कलम १ मध्ये नमूद केलेली मिळकत ही आमची वडिलोपार्जित मालकी हक्क वाहिवाटीची असून व सदर मिळकतीवर व सरकारी सर्व रेकार्ड सदरी मालक म्हणून माझे नाव नोंद आहे. व कलम १ मध्ये नमूद केलेली मिळकत ही आम्ही आजरोजी तासगाव ता.तासगाव येथील स.र.कचेरीत (रजिस्टर ऑफिस) मध्ये तुम्हास कुलमुखत्यारपत्र लिहून देत आहे. वर नमूद कलम १ मध्ये असलेल्या मिळकतीचे आजरोजी पासून आम्ही तुम्हास कुलमुखत्यार म्हणून नेमले आहे. तरी तुम्ही सदरच्या मिळकतीमध्ये आमच्या हितासाठी जे काही आमचे हित साधनेसाठी तुम्ही जे-जे काही व्यवहार करणार आहात ते-ते आम्हाला मान्य व कबूल आहेत. त्यास आम्ही व आमच्या वाली-वारस,भाऊबंध यांची कोणतीही हरकत अगर तक्रार नाही.
        </p>
        
        {/* Other terms and conditions */}
        <p style={{ paddingLeft: '20px' }}>
          आमच्या वैयक्तिक कारणामुळे व्यवहारास हजर नाही राहता येणार म्हणून खालीलप्रमाणे संपूर्ण व्यवहार करण्यासाठी आम्ही तुम्हास कुलमुखत्यार म्हणून नेमले आहे. खालील नमूद प्रत्येक व्यवहार करण्याची परवानगी आम्ही तुम्हास ह्या कधीही न रद्द होणारे कुलमुखत्यारपत्रा द्वारे परवानगी देत आहे.
        </p>
        
        <p>३) सदर कलम १ मधील मिळकतीचे खरेदीपत्र करून घेणे त्यास लागणाऱ्या सर्व कागदपत्रे,प्रतिज्ञापत्र,जाब-जबाब, सह्या अंगठे, मान्यता देणे ,कबुली देणे व त्याच्या बदल्यात मिळकतीचा मोबदला घेणे.व खरेदिपत्राच्या सरकारी,निमसरकारी रेकॉर्ड सदरी नोंद करणे कामी लागणाऱ्या सर्व कागदपत्रे,सह्या-आंगठे,जाब-जबाब देणे.</p>
        
        {/* Continue with other points... */}
        
        <p style={{ marginTop: '20px' }}>
          आम्ही तुम्हास आमच्या स्वखुशीने व राजीखुशीने तुम्हास हे कधीही न रद्द होणारे,कधीही न संपुष्टात येणारे कुलमुखत्यारपत्र लिहून दिले आहे. आमचा तुमच्यावर संपूर्ण विश्वास असल्याने तुम्हास मुखत्यार म्हणून नेमले आहे व पसंत केले आहे.
        </p>
        
        <p>
          सदर मुखत्यार आम्हाला सुरवातीपासून शेवटपरेंत मान्य व कबूल आहे म्हणून आम्ही ह्या कुलमुखत्यारपत्र या दस्तावर सही व आमचा निशाणी अंगठा दिले आहे.व दोन साक्षीदारांनी साक्षी दाखल केल्या आहेत.जसे लिहून देणार यांनी सांगितले तसे मी हे लिहून दिले कुलमुखत्यारपत्र सही एस.डी.डाके रा.तासगाव.
        </p>
        
        <p style={{ textAlign: 'right', fontWeight: 'bold', marginTop: '30px' }}>
          आज ता:- {formData.date}.
        </p>
      </div>

      {/* Signature Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '50px',
        flexWrap: 'wrap'
      }}>
        <div style={{ width: '30%', textAlign: 'center' }}>
          <p>लिहून घेणार:</p>
          <div style={{
            borderTop: '1px solid #000',
            width: '80%',
            margin: '0 auto',
            paddingTop: '50px'
          }}></div>
        </div>
        
        <div style={{ width: '30%', textAlign: 'center' }}>
          <p>लिहून देणार - १:</p>
          <div style={{
            borderTop: '1px solid #000',
            width: '80%',
            margin: '0 auto',
            paddingTop: '50px'
          }}></div>
        </div>
        
        <div style={{ width: '30%', textAlign: 'center' }}>
          <p>लिहून देणार - २:</p>
          <div style={{
            borderTop: '1px solid #000',
            width: '80%',
            margin: '0 auto',
            paddingTop: '50px'
          }}></div>
        </div>
      </div>

      {/* Witness Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',
        flexWrap: 'wrap'
      }}>
        <div style={{ width: '45%', textAlign: 'center' }}>
          <p>साक्षिदार १:</p>
          <div style={{
            borderTop: '1px solid #000',
            width: '80%',
            margin: '0 auto',
            paddingTop: '50px'
          }}></div>
        </div>
        
        <div style={{ width: '45%', textAlign: 'center' }}>
          <p>साक्षिदार २:</p>
          <div style={{
            borderTop: '1px solid #000',
            width: '80%',
            margin: '0 auto',
            paddingTop: '50px'
          }}></div>
        </div>
      </div>



      {/* Rest of your form components with renderInputOrText */}

      <div style={styles.buttonContainer}>
        <button onClick={togglePreview} style={styles.previewButton}>
          {isPreview ? 'Edit Form' : 'Preview Document'}
        </button>
        {isPreview && (
          <button onClick={printDocument} style={styles.printButton}>
            Print Document
          </button>
        )}
      </div>
    </div>
  );
};

export default PowerOfAttorney;