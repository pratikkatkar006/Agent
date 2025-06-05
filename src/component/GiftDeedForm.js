// import React, { useState } from 'react';

// const GiftDeedForm = () => {
//   const [formData, setFormData] = useState({
//     district: 'सांगली',
//     taluka: 'तासगाव',
//     village: 'डोंगरसोनी',
//     price: '५,४५,०००',
//     priceWords: 'पाच लाख पंचेचाळीस हजार मात्र',
//     date: '१९/०५/२०२५',
//     recipientName: 'उषा सर्जेराव पाटील',
//     recipientOccupation: 'शेती/घरकाम',
//     recipientAge: '४९',
//     recipientAddress: 'रा.नागाव – निमणी ता.तासगाव जि.सांगली',
//     recipientMobile: '८४८३०२१२५९',
//     recipientAadhar: '२५३० ३१२६ ९८९८',
//     recipientPAN: 'HNYPP3286H',
//     donorName: 'पांडुरंग रामचंद्र मोहिते',
//     donorOccupation: 'शेती',
//     donorAge: '७३',
//     donorAddress: 'रा.डोंगरसोनी ता.तासगाव जि.सांगली',
//     donorMobile: '९६७३१६७४९७',
//     donorAadhar: '२३३० २२७८ ३३९७',
//     donorPAN: '',
//     surveyNo: '८५८',
//     area: '३५५.२०',
//     shareArea: '७२.४१',
//     builtArea: '२८.९८',
//     grampanchayatNo: '१६३५',
//     propertyNo: '६२६',
//     eastBoundary: 'तात्यासो रामचंद्र मोहिते यांची मिळकत',
//     southBoundary: 'संदीप मोहिते यांची मिळकत',
//     westBoundary: 'नं.म मधील लिहून घेणार यांची शिल्लक मिळकत',
//     northBoundary: 'रस्ता व महादेव मोहिते यांची मिळकत',
//     witness1: '',
//     witness2: '',
//     person: 'मुलगा',
//     place: 'सिटी सर्व्हे व घरजागा ',
//     वडिलोपार्जित:"वडिलोपार्जित",
//     वारसाने: "वारसाने",
//   });
//    const [isPreview, setIsPreview] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

// const togglePreview = () => {
//     setIsPreview(!isPreview);
//   };

//  const printDocument = () => {
//   const printWindow = window.open('', '_blank');
//   printWindow.document.write(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>बक्षीस पत्र</title>
//       <meta charset="UTF-8">
//       <style>
//         @page {
//           size: A4;
//           margin: 0;
//         }
//         body {
//           font-family: "Noto Sans Devanagari", Arial, sans-serif;
//           line-height: 1.6;
//           padding: 20px;
//           color: #000;
//         }
//         .header {
//           text-align: center;
//           margin-bottom: 20px;
//         }
//         .title {
//           font-size: 24px;
//           margin-bottom: 5px;
//         }
//         .subtitle {
//           font-size: 20px;
//           margin-top: 0;
//           font-weight: bold;
//         }
//         .section {
//           margin-bottom: 15px;
//         }
//         .party-details {
//           display: flex;
//           justify-content: space-between;
//           margin: 20px 0;
//         }
//         .party-column {
//           width: 48%;
//         }
//         .party-header {
//           font-weight: bold;
//           margin-bottom: 10px;
//           text-align: left;
//         }
//         .signature-section {
//           display: flex;
//           justify-content: space-between;
//           margin: 40px 0;
//         }
//         .signature-box {
//           width: 30%;
//           text-align: center;
//         }
//         .witness-section {
//           margin: 40px 0;
//         }
//         .witness-boxes {
//           display: flex;
//           justify-content: space-between;
//         }
//         .witness-box {
//           width: 45%;
//           text-align: center;
//         }
//         .footer {
//           text-align: center;
//           margin-top: 30px;
//           font-style: italic;
//         }
//         .table {
//           width: 100%;
//           border-collapse: collapse;
//           margin: 15px 0;
//         }
//         .table th, .table td {
//           border: 1px solid #000;
//           padding: 8px;
//           text-align: center;
//         }
//         .table th {
//           background-color: #f0f0f0;
//         }
//         .indent {
//           margin-left: 20px;
//         }
//         .text-center {
//           text-align: center;
//         }
//         .text-right {
//           text-align: right;
//         }
//         .bold {
//           font-weight: bold;
//         }
//         .mt-20 {
//           margin-top: 20px;
//         }
//         .mb-10 {
//           margin-bottom: 10px;
//         }
//         .signature-line {
//           display: inline-block;
//           width: 200px;
//           border-bottom: 1px solid #000;
//           margin-bottom: 5px;
//         }
//         @media print {
//           body {
//             padding: 10px;
//           }
//           .no-print {
//             display: none;
//           }
//         }
//       </style>
//     </head>
//     <body>
//       <div class="header">
//         <h1 class="title">//श्री//</h1>
//         <h2 class="subtitle">बक्षीस पत्र</h2>
//       </div>

//       <div class="section">
//         <p>
//           बक्षीस पत्र विनामोबदला ,बाजारभावाने मूल्य-${formData.price}/- 
//           अक्षरी रुपये ${formData.priceWords}] 
//           जिल्हा तुकडी ${formData.district} व 
//           पोट तुकडी व तालुका ${formData.taluka} 
//           पैकी मौजे ${formData.village} 
//           येथील ${formData.place} मिळकत.                          
//           आज तारीख:-${formData.date}.
//         </p>
//       </div>

//       <div class="section">
//         <h3 class="bold">पार्टीचा तपशील</h3>
//         <div class="party-details">
//           <div class="party-column">
//             <p class="party-header">लिहून घेणार</p>
//             <p>${formData.recipientName}.</p>
//             <p>धंदा-${formData.recipientOccupation}, वय-${formData.recipientAge} वर्षे</p>
//             <p>${formData.recipientAddress}</p>
//             <p>मो.नं-${formData.recipientMobile}</p>
//             <p>आधार कार्ड क्र.${formData.recipientAadhar}</p>
//             <p>PAN NO - ${formData.recipientPAN}</p>

//                <p class="party-header">लिहून देणार</p>
//             <p>${formData.donorName}.</p>
//             <p>धंदा-${formData.donorOccupation}, वय-${formData.donorAge} वर्षे</p>
//             <p>${formData.donorAddress}</p>
//             <p>मो.नं-${formData.donorMobile}</p>
//             <p>आधार कार्ड क्र.${formData.donorAadhar}</p>
//             <p>PAN NO - ${formData.donorPAN}</p>
//           </div>
//         </div>
//       </div>

//       <div class="section">
//         <h3 class="bold">कारणे लिहून देतो बक्षीसपत्र ऐसाजे की,</h3>
//         <p>
//           तु नात्याने ${formData.person} आहे. सबब माझे तुझ्यावर फार जीवापाड प्रेम आहे. व त्या प्रेमापोटीच मी स्व-खुशीने पूर्ण विचारे विनामोबदला विना तक्रार बक्षीस देतो ती माझी मालकी हक्काची कब्जे वहिवाटीतील जिल्हा तुकडी 
//           ${formData.district}, 
//           पोट तुकडी व तालुका ${formData.taluka} 
//           पैकी मौजे ${formData.village} 
//           येथील ${formData.place} मिळकतीचे.
//         </p>
        
//         <p class="bold mt-20">२) मिळकतीचे वर्णन -</p>
//         <p>
//           जिल्हा व तुकडी ${formData.district} 
//           तालुका व पोट तुकडी ${formData.taluka} 
//           पैकी, मौजे ${formData.village} 
//           येथील ${formData.place} मिळकतीचे वर्णन खालिल प्रमाणे,          
//         </p>
        
//         <table class="table">
//           <thead>
//             <tr>
//               <th>सि.स.नंबर</th>
//               <th>क्षेत्र चौ.मी</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>${formData.surveyNo}</td>
//               <td>${formData.area}</td>
//             </tr>
//           </tbody>
//         </table>
        
//         <p>
//           यातील माझा संपर्ण हिस्सा क्षेत्र ${formData.shareArea} चौ.मी. 
//           याचा ग्रामपंचायत अनु.क्र. ${formData.grampanchayatNo} व 
//           मालमत्ता क्र. ${formData.propertyNo} असा असून यात क्षेत्र 
//           ${formData.builtArea} चौ.मी इतर पक्के बांधकाम असून उर्वरित खुली जागा आहे. 
//           पूर्व – पश्चिम समा. रस्त्याच्या येणे – जानेच्या संपूर्ण हक्कासह मिळकत.
//         </p>
        
//         <p class="bold">यासी चतुसिमा:-</p>
//         <p>पूर्वेस: ${formData.eastBoundary}</p>
//         <p>दक्षिणेस: ${formData.southBoundary}</p>
//         <p>पश्चिमेस: ${formData.westBoundary}</p>
//         <p>उत्तरेस: ${formData.northBoundary}</p>
        
//         <p>
//           येणे प्रमाणे चतुःसिमेतील मिळकतीमधील झाड, झुडुप, दगड, माती,लाकूड , निधीनिशेप, काष्टाषाण, तदंगभुत वस्तु तसेच सिटी सर्व्हेच्या इजमेंटच्या हक्कासहीत संपूर्ण. 
//         </p>
        
//         <p class="bold mt-20">३) मिळकतीचे पार्श्वभुमी :-</p>
//         <p>
//           येणे प्रमाणे वर वर्णन केलेली मिळकत लिहून देणार माझी ${formData.वडिलोपार्जित} मालकीची मिळकत असून सदरची मिळकत मला ${formData.वारसाने} मिळालेली आहे. 
//           सदर मिळकत माझ्या प्रत्यक्ष कब्जे वहीवाटीत असुन सदर मिळकतीच्या सिटी सर्व्हे उताऱ्यावर माझ्या नावाची नोंद असलेली मिळकत असुन 
//           सदर मिळकतीचे विल्हे विक्री,बक्षीस करणेचा मला पूर्ण हक्क व अधिकार आहे.व त्या अधिकाराने मी सदर मिळकत तुला बक्षीस देत आहे. 
//         </p>
        
//         <p class="bold mt-20">४) कब्जेबाबत-</p>
//         <p>
//           वर नमुद केलेली सिटी सर्व्हेच्या मिळकतीचा प्रत्यक्ष कब्जा आज रोजी लिहून देणार यांनी लिहून घेणार यांना दिलेला आहे. 
//           त्याचा स्विकार लिहुन घेणार यांनी केलेला आहे. आता बक्षीस दिलेल्या मिळकतीचे लिहून घेणार हे संपूर्ण मालक झाले आहेत. 
//         </p>
        
//         <p>
//           सदर मिळकतीचे सरकारी फाळा लिहून देणार यांनी आज तागायत संपूर्ण भरणा करून दिलेली आहे. येथून पुढे लिहून घेणार यांनी 
//           त्यांचे नावाची नोंद सिटी सर्व्हे उताऱ्यावर मालकी सदरी करून घेणेची आहे. त्याकामी लिहून देणार यांची सही संमती लागलेस 
//           ते लिहून देणार यांनी विना तक्रार देणेची आहे.
//         </p>
        
//         <p>
//           तसेच यापुढील सरकारी बाब. दरसाल परभारे, देत जावून वहिवाट तुम्ही तुमचे पुत्रपौत्रादी वंशपरंपरा निरंतर मालकी हक्काने 
//           करावी किंवा मर्जीनुसार पाहीजे तशी विल्हेवाट व्यवस्था करावी. आता बक्षीस दिलेल्या मिळकतीवर माझा अगर माझ्या वाली वारसांचा 
//           भाऊबंदांचा दावा,वारसा,हक्क,हितसंबंध राहीलेला नाही. सदर मिळकतिच्या वारसाहक्का बाबत हरहरकत तक्रार खालखटला निर्माण 
//           झालेस ते माझ्या स्वखर्चाने दुर करुन देईन. त्याची तोषीस तुम्हास लागु देणार नाही. सदरची मिळकत निजोखीम, बोजाविरहीत अशी 
//           असून त्याच स्थितीत तुम्हास बक्षीस दिली आहे. सदर मिळकतीच्या मालकी वहीवाटीबाबत अगर हददीबाबत काही तक्रार हरकत अडचण 
//           निर्माण झालेस ते मी माझ्या स्वखर्चाने दुर करुन देईन. त्याचा तोषीस लिहून घेणार यांना लागू देणार नाही.
//         </p>
        
//         <p class="bold mt-20">५) बोजेबाबत -</p>
//         <p>
//           सदर मिळकतीवर कोणत्याही प्रकारचा बोजा नसुन तथापी बोजाबद्दल अगर तुमचे मालकी वहीवाटीस अगर हददीबाबत कोणाची कोणतीही 
//           कोणत्याही प्रकारे हरहरकत तक्रार खालखटला निर्माण झालेस ते माझ्या स्वखर्चाने दुर करुन देईन. 
//         </p>
        
//         <p>
//           त्याची तोषीस तुम्हास लागु देणार नाही. वर नमुद मिळकती बाबत तुम्हा व्यतिरिक्त मी इतर कोणासही लेखी अगर तोडी करार, मदार, 
//           दान, गहाण बक्षिसपत्र अन्य कोणत्याही प्रकारचे करार करून दिलेले नाही. तसेच मृत्यूपत्र करुन ठेवले नाही. तसेच कोणाचाही अग्रहक्क 
//           नाही अगर सदर मिळकतीबाबत कोणत्याही महसुली अगर दिवाणी मे. न्यायालयात दावा वाद चालु नाही सोबत सिटी सर्व्हे उतारा सोबत जोडला आहे.
//         </p>
        
//         <p class="bold mt-20">६) नोंदीबाबत :-</p>
//         <p>
//           या बक्षीसपत्रा आधारे मिळकतीचे सिटी सर्व्हे उताऱ्यावर मालक सदरी तुम्ही तुमच्या नावाची नोंद करुन घ्यावी त्याकामी लिहून देणार यांची सही, 
//           संमत्ती, जाबजबाब, लागलेस विना मोबदला देऊन कोणत्याही प्रकारची तक्रार हरकत नकरता कामाची पुर्तता करून देईन.
//         </p>
        
//         <p class="bold mt-20">७) दुरुस्ती :-</p>
//         <p>
//           सदर या दस्ताच्या पुर्ततेसाठी एखादा पुरवणी दस्तऐवज व चूक, दुरुस्ती लेख करून द्यावा लागलेस विनाहरकत, विनातक्रार, विनामोबदला 
//           लिहून देणार यांनी नोंदवून देणेचे आहे तक्रार किंवा सबब सांगण्याचे नाही.
//         </p>
        
//         <p class="bold mt-20">८) खर्चाबाबत :-</p>
//         <p>
//           सदरच्या बक्षिसपत्रास येणारा संपूर्ण खर्च म्हणजेच जनरल स्टॅम्प, नोंदणी फि. लिखाई फि, वगैरे तदनुशंगीक खर्च हा लिहून घेणार यांनी केलेला आहे.
//         </p>
        
//         <p class="bold mt-20">०९) रेकॉर्ड ऑफ राईट बाबत :-</p>
//         <p>
//           मा. नोंदणी महानिरीक्षक महाराष्ट्र राज्य पुणे यांचे कडील परिपत्रक क्र. का ३ / प्रशासक / ४३०९ / ४६६८ दि. ९/१२/९१ अन्वये सदर मिळकतीबाबत 
//           वाद विवाद अगर हरकत आल्यास अथवा शासकीय वाद उदभवल्यास त्याची तोषीस दुय्यम निबंधक व दस्तलेखनिक यांना लागू देणार नाही.
//         </p>
        
//         <p>
//           बक्षीसपत्रातील सर्व मजकूर लिहून देणार व लिहून घेणार यांनी दिले माहीतीवरुन व दाखविले कागदपत्रावरुन व सांगितले माहीती वरुन टाईप केलेला असुन 
//           आम्ही लिहुन देणार , घेणार यांनी वाचून पाहीला असुन तो आम्हाला समजला, उमजला आहे, तो आम्हाला मान्य व कबुल असलेबाबत आम्ही अक्कल हुशारीने 
//           कोणाच्या दबावाला व अमिषाला बळी न पडता राजीखुषीने खालील साक्षीदार समक्ष नेहमीची सहया व डाव्या हाताचा अंगठा केलेले आहेत. सदर बक्षीसपत्रातील 
//           संपूर्ण मजकुर लिहून घेणार , लिहून देणार आम्हाला व आमच्या वाली वारसास लागू व बंधन कारक राहील.कोणी कोणत्याही प्रकारची हरकत अगर तक्रार केल्यास 
//           लिहून देणार जबाबदार राहतील व लिहून देणार यांनी त्या तक्रारीची तोशीस लिहून घेणार यांना लागू देण्याची नाही.
//         </p>
//       </div>

//       <div class="footer">
//         <p>म्हणून लिहून दिले सिटी सर्व्हे मिळकतीचे बक्षिसपत्र असे. सही एस.डी.डाके.रा.तासगाव.</p>
//         <p>आज दिनांक – ${formData.date}.</p>
//       </div>

//       <div class="signature-section">
//         <div class="signature-box">
//           <p><span class="signature-line"></span></p>
//           <p>लिहून घेणार</p>
//           <p>${formData.recipientName}</p>
//         </div>
//         <div class="signature-box">
//           <p><span class="signature-line"></span></p>
//           <p>लिहून देणार</p>
//           <p>${formData.donorName}</p>
//         </div>
//       </div>

//       <div class="witness-section">
//         <h3 class="bold text-center">साक्षीदार</h3>
//         <div class="witness-boxes">
//           <div class="witness-box">
//             <p><span class="signature-line"></span></p>
//             <p>१) नाव: ${formData.witness1}</p>
//           </div>
//           <div class="witness-box">
//             <p><span class="signature-line"></span></p>
//             <p>२) नाव: ${formData.witness2}</p>
//           </div>
//         </div>
//       </div>
//     </body>
//     </html>
//   `);
//   printWindow.document.close();
//   setTimeout(() => {
//     printWindow.print();
//     printWindow.close();
//   }, 500);
// };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.title}>//श्री//</h1>
//         <h2 style={styles.subtitle}>बक्षीस पत्र</h2>
//       </div>

//       <div style={styles.section}>
//         <p>
//           बक्षीस पत्र विनामोबदला ,बाजारभावाने मूल्य-
//           <input type="text" name="price" value={formData.price} onChange={handleChange} style={styles.input} />/- 
//           अक्षरी रुपये <input type="text" name="priceWords" value={formData.priceWords} onChange={handleChange} style={styles.input} />] 
//           जिल्हा तुकडी <input type="text" name="district" value={formData.district} onChange={handleChange} style={styles.input} /> व 
//           पोट तुकडी व तालुका <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} style={styles.input} /> 
//           पैकी मौजे <input type="text" name="village" value={formData.village} onChange={handleChange} style={styles.input} /> 
//           येथील <input type="text" name="date" value={formData.place} onChange={handleChange} style={styles.input} /> मिळकत.                          
//           आज तारीख:-<input type="text" name="date" value={formData.date} onChange={handleChange} style={styles.input} />.
//         </p>
//       </div>

//       <div style={styles.section}>
//         <h3 style={styles.sectionTitle}>पार्टीचा तपशील</h3>
//         <div style={styles.partyDetails}>
//           <div style={styles.partyColumn}>
//             <p style={styles.partyHeader}>लिहून घेणार</p>
//             <p>नाव: <input type="text" name="recipientName" value={formData.recipientName} onChange={handleChange} style={styles.input} /></p>
//             <p>धंदा: <input type="text" name="recipientOccupation" value={formData.recipientOccupation} onChange={handleChange} style={styles.input} />, 
//             वय: <input type="text" name="recipientAge" value={formData.recipientAge} onChange={handleChange} style={styles.input} /> वर्षे</p>
//             <p>पत्ता: <input type="text" name="recipientAddress" value={formData.recipientAddress} onChange={handleChange} style={styles.input} /></p>
//             <p>मो.नं: <input type="text" name="recipientMobile" value={formData.recipientMobile} onChange={handleChange} style={styles.input} /></p>
//             <p>आधार कार्ड क्र: <input type="text" name="recipientAadhar" value={formData.recipientAadhar} onChange={handleChange} style={styles.input} /></p>
//             <p>PAN NO: <input type="text" name="recipientPAN" value={formData.recipientPAN} onChange={handleChange} style={styles.input} /></p>
//           </div>
//           <div style={styles.partyColumn}>
//             <p style={styles.partyHeader}>लिहून देणार</p>
//             <p>नाव: <input type="text" name="donorName" value={formData.donorName} onChange={handleChange} style={styles.input} /></p>
//             <p>धंदा: <input type="text" name="donorOccupation" value={formData.donorOccupation} onChange={handleChange} style={styles.input} />, 
//             वय: <input type="text" name="donorAge" value={formData.donorAge} onChange={handleChange} style={styles.input} /> वर्षे</p>
//             <p>पत्ता: <input type="text" name="donorAddress" value={formData.donorAddress} onChange={handleChange} style={styles.input} /></p>
//             <p>मो.नं: <input type="text" name="donorMobile" value={formData.donorMobile} onChange={handleChange} style={styles.input} /></p>
//             <p>आधार कार्ड क्र: <input type="text" name="donorAadhar" value={formData.donorAadhar} onChange={handleChange} style={styles.input} /></p>
//             <p>PAN NO: <input type="text" name="donorPAN" value={formData.donorPAN} onChange={handleChange} style={styles.input} /></p>
//           </div>
//         </div>
//       </div>

//       <div style={styles.section}>
//         <h3 style={styles.sectionTitle}>कारणे लिहून देतो बक्षीसपत्र ऐसाजे की,</h3>
//         <p>
//           तु नात्याने <input type="text" name="person" value={formData.person} onChange={handleChange} style={styles.input} /> आहे. सबब माझे तुझ्यावर फार जीवापाड प्रेम आहे. व त्या प्रेमापोटीच मी स्व-खुशीने पूर्ण विचारे विनामोबदला विना तक्रार बक्षीस देतो ती माझी मालकी हक्काची कब्जे वहिवाटीतील जिल्हा तुकडी 
//           <input type="text" name="district" value={formData.district} onChange={handleChange} style={styles.input} />, 
//           पोट तुकडी व तालुका <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} style={styles.input} /> 
//           पैकी मौजे <input type="text" name="village" value={formData.village} onChange={handleChange} style={styles.input} /> 
//           येथील  <input type="text" name="date" value={formData.place} onChange={handleChange} style={styles.input} />मिळकतीचे.
//         </p>
        
//         <p><strong>२) मिळकतीचे वर्णन -</strong></p>
//         <p>
//           जिल्हा व तुकडी <input type="text" name="district" value={formData.district} onChange={handleChange} style={styles.input} /> 
//           तालुका व पोट तुकडी <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} style={styles.input} /> 
//           पैकी, मौजे <input type="text" name="village" value={formData.village} onChange={handleChange} style={styles.input} /> 
//           येथील <input type="text" name="date" value={formData.place} onChange={handleChange} style={styles.input} /> मिळकतीचे वर्णन खालिल प्रमाणे,          
//         </p>
        
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>सि.स.नंबर</th>
//               <th style={styles.th}>क्षेत्र चौ.मी</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td style={styles.td}><input type="text" name="surveyNo" value={formData.surveyNo} onChange={handleChange} style={styles.tableInput} /></td>
//               <td style={styles.td}><input type="text" name="area" value={formData.area} onChange={handleChange} style={styles.tableInput} /></td>
//             </tr>
//           </tbody>
//         </table>
        
//         <p>
//           यातील माझा संपर्ण हिस्सा क्षेत्र <input type="text" name="shareArea" value={formData.shareArea} onChange={handleChange} style={styles.input} /> चौ.मी. 
//           याचा ग्रामपंचायत अनु.क्र. <input type="text" name="grampanchayatNo" value={formData.grampanchayatNo} onChange={handleChange} style={styles.input} /> व 
//           मालमत्ता क्र. <input type="text" name="propertyNo" value={formData.propertyNo} onChange={handleChange} style={styles.input} /> असा असून यात क्षेत्र 
//           <input type="text" name="builtArea" value={formData.builtArea} onChange={handleChange} style={styles.input} /> चौ.मी इतर पक्के बांधकाम असून उर्वरित खुली जागा आहे. 
//           पूर्व – पश्चिम समा. रस्त्याच्या येणे – जानेच्या संपूर्ण हक्कासह मिळकत.
//         </p>
        
//         <p><strong>यासी चतुसिमा:-</strong></p>
//         <p>पूर्वेस: <input type="text" name="eastBoundary" value={formData.eastBoundary} onChange={handleChange} style={styles.input} /></p>
//         <p>दक्षिणेस: <input type="text" name="southBoundary" value={formData.southBoundary} onChange={handleChange} style={styles.input} /></p>
//         <p>पश्चिमेस: <input type="text" name="westBoundary" value={formData.westBoundary} onChange={handleChange} style={styles.input} /></p>
//         <p>उत्तरेस: <input type="text" name="northBoundary" value={formData.northBoundary} onChange={handleChange} style={styles.input} /></p>
        
//         <p>
//           येणे प्रमाणे चतुःसिमेतील मिळकतीमधील झाड, झुडुप, दगड, माती,लाकूड , निधीनिशेप, काष्टाषाण, तदंगभुत वस्तु तसेच सिटी सर्व्हेच्या इजमेंटच्या हक्कासहीत संपूर्ण. 
//         </p>
        
//         <p><strong>३) मिळकतीचे पार्श्वभुमी :-</strong></p>
//         <p>
//           येणे प्रमाणे वर वर्णन केलेली मिळकत लिहून देणार माझी<input type="text" name="वडिलोपार्जित" value={formData.वडिलोपार्जित} onChange={handleChange} style={styles.input} /> मालकीची मिळकत असून सदरची मिळकत मला <input type="text" name="वारसाने " value={formData.वारसाने } onChange={handleChange} style={styles.input} /> मिळालेली आहे. 
//           सदर मिळकत माझ्या प्रत्यक्ष कब्जे वहीवाटीत असुन सदर मिळकतीच्या सिटी सर्व्हे उताऱ्यावर माझ्या नावाची नोंद असलेली मिळकत असुन 
//           सदर मिळकतीचे विल्हे विक्री,बक्षीस करणेचा मला पूर्ण हक्क व अधिकार आहे.व त्या अधिकाराने मी सदर मिळकत तुला बक्षीस देत आहे. 
//         </p>
        
//         <p><strong>४) कब्जेबाबत-</strong></p>
//         <p>
//           वर नमुद केलेली सिटी सर्व्हेच्या मिळकतीचा प्रत्यक्ष कब्जा आज रोजी लिहून देणार यांनी लिहून घेणार यांना दिलेला आहे. 
//           त्याचा स्विकार लिहुन घेणार यांनी केलेला आहे. आता बक्षीस दिलेल्या मिळकतीचे लिहून घेणार हे संपूर्ण मालक झाले आहेत. 
//         </p>
        
//         <p>
//           सदर मिळकतीचे सरकारी फाळा लिहून देणार यांनी आज तागायत संपूर्ण भरणा करून दिलेली आहे. येथून पुढे लिहून घेणार यांनी 
//           त्यांचे नावाची नोंद सिटी सर्व्हे उताऱ्यावर मालकी सदरी करून घेणेची आहे. त्याकामी लिहून देणार यांची सही संमती लागलेस 
//           ते लिहून देणार यांनी विना तक्रार देणेची आहे.
//         </p>
        
//         <p>
//           तसेच यापुढील सरकारी बाब. दरसाल परभारे, देत जावून वहिवाट तुम्ही तुमचे पुत्रपौत्रादी वंशपरंपरा निरंतर मालकी हक्काने 
//           करावी किंवा मर्जीनुसार पाहीजे तशी विल्हेवाट व्यवस्था करावी. आता बक्षीस दिलेल्या मिळकतीवर माझा अगर माझ्या वाली वारसांचा 
//           भाऊबंदांचा दावा,वारसा,हक्क,हितसंबंध राहीलेला नाही. सदर मिळकतिच्या वारसाहक्का बाबत हरहरकत तक्रार खालखटला निर्माण 
//           झालेस ते माझ्या स्वखर्चाने दुर करुन देईन. त्याची तोषीस तुम्हास लागु देणार नाही. सदरची मिळकत निजोखीम, बोजाविरहीत अशी 
//           असून त्याच स्थितीत तुम्हास बक्षीस दिली आहे. सदर मिळकतीच्या मालकी वहीवाटीबाबत अगर हददीबाबत काही तक्रार हरकत अडचण 
//           निर्माण झालेस ते मी माझ्या स्वखर्चाने दुर करुन देईन. त्याचा तोषीस लिहून घेणार यांना लागू देणार नाही.
//         </p>
        
//         <p><strong>५) बोजेबाबत -</strong></p>
//         <p>
//           सदर मिळकतीवर कोणत्याही प्रकारचा बोजा नसुन तथापी बोजाबद्दल अगर तुमचे मालकी वहीवाटीस अगर हददीबाबत कोणाची कोणतीही 
//           कोणत्याही प्रकारे हरहरकत तक्रार खालखटला निर्माण झालेस ते माझ्या स्वखर्चाने दुर करुन देईन. 
//         </p>
        
//         <p>
//           त्याची तोषीस तुम्हास लागु देणार नाही. वर नमुद मिळकती बाबत तुम्हा व्यतिरिक्त मी इतर कोणासही लेखी अगर तोडी करार, मदार, 
//           दान, गहाण बक्षिसपत्र अन्य कोणत्याही प्रकारचे करार करून दिलेले नाही. तसेच मृत्यूपत्र करुन ठेवले नाही. तसेच कोणाचाही अग्रहक्क 
//           नाही अगर सदर मिळकतीबाबत कोणत्याही महसुली अगर दिवाणी मे. न्यायालयात दावा वाद चालु नाही सोबत सिटी सर्व्हे उतारा सोबत जोडला आहे.
//         </p>
        
//         <p><strong>६) नोंदीबाबत :-</strong></p>
//         <p>
//           या बक्षीसपत्रा आधारे मिळकतीचे सिटी सर्व्हे उताऱ्यावर मालक सदरी तुम्ही तुमच्या नावाची नोंद करुन घ्यावी त्याकामी लिहून देणार यांची सही, 
//           संमत्ती, जाबजबाब, लागलेस विना मोबदला देऊन कोणत्याही प्रकारची तक्रार हरकत नकरता कामाची पुर्तता करून देईन.
//         </p>
        
//         <p><strong>७) दुरुस्ती :-</strong></p>
//         <p>
//           सदर या दस्ताच्या पुर्ततेसाठी एखादा पुरवणी दस्तऐवज व चूक, दुरुस्ती लेख करून द्यावा लागलेस विनाहरकत, विनातक्रार, विनामोबदला 
//           लिहून देणार यांनी नोंदवून देणेचे आहे तक्रार किंवा सबब सांगण्याचे नाही.
//         </p>
        
//         <p><strong>८) खर्चाबाबत :-</strong></p>
//         <p>
//           सदरच्या बक्षिसपत्रास येणारा संपूर्ण खर्च म्हणजेच जनरल स्टॅम्प, नोंदणी फि. लिखाई फि, वगैरे तदनुशंगीक खर्च हा लिहून घेणार यांनी केलेला आहे.
//         </p>
        
//         <p><strong>०९) रेकॉर्ड ऑफ राईट बाबत :-</strong></p>
//         <p>
//           मा. नोंदणी महानिरीक्षक महाराष्ट्र राज्य पुणे यांचे कडील परिपत्रक क्र. का ३ / प्रशासक / ४३०९ / ४६६८ दि. ९/१२/९१ अन्वये सदर मिळकतीबाबत 
//           वाद विवाद अगर हरकत आल्यास अथवा शासकीय वाद उदभवल्यास त्याची तोषीस दुय्यम निबंधक व दस्तलेखनिक यांना लागू देणार नाही.
//         </p>
        
//         <p>
//           बक्षीसपत्रातील सर्व मजकूर लिहून देणार व लिहून घेणार यांनी दिले माहीतीवरुन व दाखविले कागदपत्रावरुन व सांगितले माहीती वरुन टाईप केलेला असुन 
//           आम्ही लिहुन देणार , घेणार यांनी वाचून पाहीला असुन तो आम्हाला समजला, उमजला आहे, तो आम्हाला मान्य व कबुल असलेबाबत आम्ही अक्कल हुशारीने 
//           कोणाच्या दबावाला व अमिषाला बळी न पडता राजीखुषीने खालील साक्षीदार समक्ष नेहमीची सहया व डाव्या हाताचा अंगठा केलेले आहेत. सदर बक्षीसपत्रातील 
//           संपूर्ण मजकुर लिहून घेणार , लिहून देणार आम्हाला व आमच्या वाली वारसास लागू व बंधन कारक राहील.कोणी कोणत्याही प्रकारची हरकत अगर तक्रार केल्यास 
//           लिहून देणार जबाबदार राहतील व लिहून देणार यांनी त्या तक्रारीची तोशीस लिहून घेणार यांना लागू देण्याची नाही.
//         </p>
//       </div>

//       <div style={styles.footer}>
//         <p>म्हणून लिहून दिले सिटी सर्व्हे मिळकतीचे बक्षिसपत्र असे. सही एस.डी.डाके.रा.तासगाव.</p>
//         <p>आज दिनांक – {formData.date}.</p>
//       </div>

//       <div style={styles.signatureSection}>
//         <div style={styles.signatureBox}>
//           <p>लिहून घेणार: --------------------------</p>
//           <p>{formData.recipientName}</p>
//         </div>
//         <div style={styles.signatureBox}>
//           <p>लिहून देणार: --------------------------</p>
//           <p>{formData.donorName}</p>
//         </div>
//       </div>

//       <div style={styles.witnessSection}>
//         <h3 style={styles.sectionTitle}>साक्षीदार</h3>
//         <div style={styles.witnessBoxes}>
//           <div style={styles.witnessBox}>
//             <p>१) -------------------------</p>
//             <p>नाव: <input type="text" name="witness1" value={formData.witness1} onChange={handleChange} style={styles.input} /></p>
//           </div>
//           <div style={styles.witnessBox}>
//             <p>२) -------------------------</p>
//             <p>नाव: <input type="text" name="witness2" value={formData.witness2} onChange={handleChange} style={styles.input} /></p>
//           </div>
//         </div>
//       </div>
//    <div style={styles.buttonContainer}>
//         <button onClick={togglePreview} style={styles.previewButton}>
//           {isPreview ? 'Edit Form' : 'Preview Document'}
//         </button>
//         {isPreview && (
//           <button onClick={printDocument} style={styles.printButton}>
//             Print Document
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '20px',
//     fontFamily: '"Noto Sans Devanagari", Arial, sans-serif',
//     backgroundColor: '#f9f9f9',
//     border: '1px solid #ddd',
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//     lineHeight: '1.6',
//     color: '#333'
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '20px',
//     borderBottom: '2px solid #8B4513',
//     paddingBottom: '10px'
//   },
//   title: {
//     fontSize: '24px',
//     color: '#8B4513',
//     marginBottom: '5px'
//   },
//   subtitle: {
//     fontSize: '20px',
//     color: '#8B4513',
//     marginTop: '0',
//     fontWeight: 'bold'
//   },
//   section: {
//     marginBottom: '20px',
//     padding: '15px',
//     backgroundColor: '#fff',
//     borderRadius: '5px',
//     border: '1px solid #eee',
//     boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
//   },
//   sectionTitle: {
//     color: '#8B4513',
//     borderBottom: '1px solid #ddd',
//     paddingBottom: '5px',
//     marginTop: '0',
//     fontSize: '18px'
//   },
//   partyDetails: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     gap: '20px'
//   },
//   partyColumn: {
//     flex: '1',
//     minWidth: '300px',
//     padding: '15px',
//     backgroundColor: '#f5f5f5',
//     borderRadius: '5px',
//     border: '1px solid #ddd',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//   },
//   partyHeader: {
//     fontWeight: 'bold',
//     color: '#8B4513',
//     borderBottom: '1px solid #ddd',
//     paddingBottom: '5px',
//     fontSize: '16px',
//     textAlign: 'center',
//     marginBottom: '15px'
//   },
//   input: {
//     border: '1px solid #ddd',
//     padding: '5px 8px',
//     borderRadius: '3px',
//     backgroundColor: '#fff',
//     minWidth: '100px',
//     margin: '2px',
//     fontFamily: '"Noto Sans Devanagari", Arial, sans-serif',
//     fontSize: '14px'
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     margin: '15px 0',
//     backgroundColor: '#fff',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//   },
//   th: {
//     backgroundColor: '#8B4513',
//     color: 'white',
//     padding: '10px',
//     textAlign: 'left',
//     fontWeight: 'bold'
//   },
//   td: {
//     border: '1px solid #ddd',
//     padding: '10px',
//     textAlign: 'left'
//   },
//   tableInput: {
//     border: 'none',
//     width: '100%',
//     padding: '5px',
//     backgroundColor: 'transparent',
//     fontFamily: '"Noto Sans Devanagari", Arial, sans-serif',
//     fontSize: '14px'
//   },
//   signatureSection: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '30px 0',
//     gap: '20px'
//   },
//   signatureBox: {
//     flex: '1',
//     textAlign: 'center',
//     padding: '20px',
//     backgroundColor: '#f5f5f5',
//     borderRadius: '5px',
//     border: '1px solid #ddd',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//     minWidth: '250px'
//   },
//   witnessSection: {
//     margin: '30px 0'
//   },
//   witnessBoxes: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     gap: '20px'
//   },
//   witnessBox: {
//     flex: '1',
//     padding: '20px',
//     backgroundColor: '#f5f5f5',
//     borderRadius: '5px',
//     border: '1px solid #ddd',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//     minWidth: '250px'
//   },
//   footer: {
//     textAlign: 'center',
//     marginTop: '20px',
//     padding: '15px',
//     backgroundColor: '#f5f5f5',
//     borderRadius: '5px',
//     border: '1px solid #ddd',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//     fontStyle: 'italic'
//   },

//     previewText: {
//       display: 'inline-block',
//       padding: '5px',
//       fontWeight: 'bold'
//     },
//     buttonContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       gap: '20px',
//       marginTop: '30px'
//     },
//     previewButton: {
//       padding: '10px 20px',
//       backgroundColor: '#8b4513',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//       fontSize: '16px'
//     },
//     printButton: {
//       padding: '10px 20px',
//       backgroundColor: '#4CAF50',
//       color: '#fff',
//       border: 'none',
//       borderRadius: '4px',
//       cursor: 'pointer',
//       fontSize: '16px'
//     }
// };





// export default GiftDeedForm;
























import React, { useState } from 'react';
import axios from 'axios';

const GiftDeedForm = () => {
  const [formData, setFormData] = useState({
    district: 'सांगली',
    taluka: 'तासगाव',
    village: 'डोंगरसोनी',
    price: '५,४५,०००',
    priceWords: 'पाच लाख पंचेचाळीस हजार मात्र',
    date: '१९/०५/२०२५',
    recipientName: 'उषा सर्जेराव पाटील',
    recipientOccupation: 'शेती/घरकाम',
    recipientAge: '४९',
    recipientAddress: 'रा.नागाव – निमणी ता.तासगाव जि.सांगली',
    recipientMobile: '८४८३०२१२५९',
    recipientAadhar: '२५३० ३१२६ ९८९८',
    recipientPAN: 'HNYPP3286H',
    donorName: 'पांडुरंग रामचंद्र मोहिते',
    donorOccupation: 'शेती',
    donorAge: '७३',
    donorAddress: 'रा.डोंगरसोनी ता.तासगाव जि.सांगली',
    donorMobile: '९६७३१६७४९७',
    donorAadhar: '२३३० २२७८ ३३९७',
    donorPAN: '',
    surveyNo: '८५८',
    area: '३५५.२०',
    shareArea: '७२.४१',
    builtArea: '२८.९८',
    grampanchayatNo: '१६३५',
    propertyNo: '६२६',
    eastBoundary: 'तात्यासो रामचंद्र मोहिते यांची मिळकत',
    southBoundary: 'संदीप मोहिते यांची मिळकत',
    westBoundary: 'नं.म मधील लिहून घेणार यांची शिल्लक मिळकत',
    northBoundary: 'रस्ता व महादेव मोहिते यांची मिळकत',
    witness1: '',
    witness2: '',
    person: 'मुलगा',
    place: 'सिटी सर्व्हे व घरजागा ',
    वडिलोपार्जित:"वडिलोपार्जित",
    वारसाने: "वारसाने",
  });
   const [isPreview, setIsPreview] = useState(false);
    const [loading, setLoading] = useState(false);

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


 



    const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      // Check if script is already loaded
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const generateDocumentContent = () => {
    return `<!DOCTYPE html>
     <html>
    <head>
      <title>बक्षीस पत्र</title>
      <meta charset="UTF-8">
      <style>
        @page {
          size: A4;
          margin: 0;
        }
        body {
          font-family: "Noto Sans Devanagari", Arial, sans-serif;
          line-height: 1.6;
          padding: 20px;
          color: #000;
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
          font-weight: bold;
        }
        .section {
          margin-bottom: 15px;
        }
        .party-details {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
        }
        .party-column {
          width: 48%;
        }
        .party-header {
          font-weight: bold;
          margin-bottom: 10px;
          text-align: left;
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
          margin-top: 30px;
          font-style: italic;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
        }
        .table th, .table td {
          border: 1px solid #000;
          padding: 8px;
          text-align: center;
        }
        .table th {
          background-color: #f0f0f0;
        }
        .indent {
          margin-left: 20px;
        }
        .text-center {
          text-align: center;
        }
        .text-right {
          text-align: right;
        }
        .bold {
          font-weight: bold;
        }
        .mt-20 {
          margin-top: 20px;
        }
        .mb-10 {
          margin-bottom: 10px;
        }
        .signature-line {
          display: inline-block;
          width: 200px;
          border-bottom: 1px solid #000;
          margin-bottom: 5px;
        }
        @media print {
          body {
            padding: 10px;
          }
          .no-print {
            display: none;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 class="title">//श्री//</h1>
        <h2 class="subtitle">बक्षीस पत्र</h2>
      </div>

      <div class="section">
        <p>
          बक्षीस पत्र विनामोबदला ,बाजारभावाने मूल्य-${formData.price}/- 
          अक्षरी रुपये ${formData.priceWords}] 
          जिल्हा तुकडी ${formData.district} व 
          पोट तुकडी व तालुका ${formData.taluka} 
          पैकी मौजे ${formData.village} 
          येथील ${formData.place} मिळकत.                          
          आज तारीख:-${formData.date}.
        </p>
      </div>

      <div class="section">
        <h3 class="bold">पार्टीचा तपशील</h3>
        <div class="party-details">
          <div class="party-column">
            <p class="party-header">लिहून घेणार</p>
            <p>${formData.recipientName}.</p>
            <p>धंदा-${formData.recipientOccupation}, वय-${formData.recipientAge} वर्षे</p>
            <p>${formData.recipientAddress}</p>
            <p>मो.नं-${formData.recipientMobile}</p>
            <p>आधार कार्ड क्र.${formData.recipientAadhar}</p>
            <p>PAN NO - ${formData.recipientPAN}</p>

               <p class="party-header">लिहून देणार</p>
            <p>${formData.donorName}.</p>
            <p>धंदा-${formData.donorOccupation}, वय-${formData.donorAge} वर्षे</p>
            <p>${formData.donorAddress}</p>
            <p>मो.नं-${formData.donorMobile}</p>
            <p>आधार कार्ड क्र.${formData.donorAadhar}</p>
            <p>PAN NO - ${formData.donorPAN}</p>
          </div>
        </div>
      </div>

      <div class="section">
        <h3 class="bold">कारणे लिहून देतो बक्षीसपत्र ऐसाजे की,</h3>
        <p>
          तु नात्याने ${formData.person} आहे. सबब माझे तुझ्यावर फार जीवापाड प्रेम आहे. व त्या प्रेमापोटीच मी स्व-खुशीने पूर्ण विचारे विनामोबदला विना तक्रार बक्षीस देतो ती माझी मालकी हक्काची कब्जे वहिवाटीतील जिल्हा तुकडी 
          ${formData.district}, 
          पोट तुकडी व तालुका ${formData.taluka} 
          पैकी मौजे ${formData.village} 
          येथील ${formData.place} मिळकतीचे.
        </p>
        
        <p class="bold mt-20">२) मिळकतीचे वर्णन -</p>
        <p>
          जिल्हा व तुकडी ${formData.district} 
          तालुका व पोट तुकडी ${formData.taluka} 
          पैकी, मौजे ${formData.village} 
          येथील ${formData.place} मिळकतीचे वर्णन खालिल प्रमाणे,          
        </p>
        
        <table class="table">
          <thead>
            <tr>
              <th>सि.स.नंबर</th>
              <th>क्षेत्र चौ.मी</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${formData.surveyNo}</td>
              <td>${formData.area}</td>
            </tr>
          </tbody>
        </table>
        
        <p>
          यातील माझा संपर्ण हिस्सा क्षेत्र ${formData.shareArea} चौ.मी. 
          याचा ग्रामपंचायत अनु.क्र. ${formData.grampanchayatNo} व 
          मालमत्ता क्र. ${formData.propertyNo} असा असून यात क्षेत्र 
          ${formData.builtArea} चौ.मी इतर पक्के बांधकाम असून उर्वरित खुली जागा आहे. 
          पूर्व – पश्चिम समा. रस्त्याच्या येणे – जानेच्या संपूर्ण हक्कासह मिळकत.
        </p>
        
        <p class="bold">यासी चतुसिमा:-</p>
        <p>पूर्वेस: ${formData.eastBoundary}</p>
        <p>दक्षिणेस: ${formData.southBoundary}</p>
        <p>पश्चिमेस: ${formData.westBoundary}</p>
        <p>उत्तरेस: ${formData.northBoundary}</p>
        
        <p>
          येणे प्रमाणे चतुःसिमेतील मिळकतीमधील झाड, झुडुप, दगड, माती,लाकूड , निधीनिशेप, काष्टाषाण, तदंगभुत वस्तु तसेच सिटी सर्व्हेच्या इजमेंटच्या हक्कासहीत संपूर्ण. 
        </p>
        
        <p class="bold mt-20">३) मिळकतीचे पार्श्वभुमी :-</p>
        <p>
          येणे प्रमाणे वर वर्णन केलेली मिळकत लिहून देणार माझी ${formData.वडिलोपार्जित} मालकीची मिळकत असून सदरची मिळकत मला ${formData.वारसाने} मिळालेली आहे. 
          सदर मिळकत माझ्या प्रत्यक्ष कब्जे वहीवाटीत असुन सदर मिळकतीच्या सिटी सर्व्हे उताऱ्यावर माझ्या नावाची नोंद असलेली मिळकत असुन 
          सदर मिळकतीचे विल्हे विक्री,बक्षीस करणेचा मला पूर्ण हक्क व अधिकार आहे.व त्या अधिकाराने मी सदर मिळकत तुला बक्षीस देत आहे. 
        </p>
        
        <p class="bold mt-20">४) कब्जेबाबत-</p>
        <p>
          वर नमुद केलेली सिटी सर्व्हेच्या मिळकतीचा प्रत्यक्ष कब्जा आज रोजी लिहून देणार यांनी लिहून घेणार यांना दिलेला आहे. 
          त्याचा स्विकार लिहुन घेणार यांनी केलेला आहे. आता बक्षीस दिलेल्या मिळकतीचे लिहून घेणार हे संपूर्ण मालक झाले आहेत. 
        </p>
        
        <p>
          सदर मिळकतीचे सरकारी फाळा लिहून देणार यांनी आज तागायत संपूर्ण भरणा करून दिलेली आहे. येथून पुढे लिहून घेणार यांनी 
          त्यांचे नावाची नोंद सिटी सर्व्हे उताऱ्यावर मालकी सदरी करून घेणेची आहे. त्याकामी लिहून देणार यांची सही संमती लागलेस 
          ते लिहून देणार यांनी विना तक्रार देणेची आहे.
        </p>
        
        <p>
          तसेच यापुढील सरकारी बाब. दरसाल परभारे, देत जावून वहिवाट तुम्ही तुमचे पुत्रपौत्रादी वंशपरंपरा निरंतर मालकी हक्काने 
          करावी किंवा मर्जीनुसार पाहीजे तशी विल्हेवाट व्यवस्था करावी. आता बक्षीस दिलेल्या मिळकतीवर माझा अगर माझ्या वाली वारसांचा 
          भाऊबंदांचा दावा,वारसा,हक्क,हितसंबंध राहीलेला नाही. सदर मिळकतिच्या वारसाहक्का बाबत हरहरकत तक्रार खालखटला निर्माण 
          झालेस ते माझ्या स्वखर्चाने दुर करुन देईन. त्याची तोषीस तुम्हास लागु देणार नाही. सदरची मिळकत निजोखीम, बोजाविरहीत अशी 
          असून त्याच स्थितीत तुम्हास बक्षीस दिली आहे. सदर मिळकतीच्या मालकी वहीवाटीबाबत अगर हददीबाबत काही तक्रार हरकत अडचण 
          निर्माण झालेस ते मी माझ्या स्वखर्चाने दुर करुन देईन. त्याचा तोषीस लिहून घेणार यांना लागू देणार नाही.
        </p>
        
        <p class="bold mt-20">५) बोजेबाबत -</p>
        <p>
          सदर मिळकतीवर कोणत्याही प्रकारचा बोजा नसुन तथापी बोजाबद्दल अगर तुमचे मालकी वहीवाटीस अगर हददीबाबत कोणाची कोणतीही 
          कोणत्याही प्रकारे हरहरकत तक्रार खालखटला निर्माण झालेस ते माझ्या स्वखर्चाने दुर करुन देईन. 
        </p>
        
        <p>
          त्याची तोषीस तुम्हास लागु देणार नाही. वर नमुद मिळकती बाबत तुम्हा व्यतिरिक्त मी इतर कोणासही लेखी अगर तोडी करार, मदार, 
          दान, गहाण बक्षिसपत्र अन्य कोणत्याही प्रकारचे करार करून दिलेले नाही. तसेच मृत्यूपत्र करुन ठेवले नाही. तसेच कोणाचाही अग्रहक्क 
          नाही अगर सदर मिळकतीबाबत कोणत्याही महसुली अगर दिवाणी मे. न्यायालयात दावा वाद चालु नाही सोबत सिटी सर्व्हे उतारा सोबत जोडला आहे.
        </p>
        
        <p class="bold mt-20">६) नोंदीबाबत :-</p>
        <p>
          या बक्षीसपत्रा आधारे मिळकतीचे सिटी सर्व्हे उताऱ्यावर मालक सदरी तुम्ही तुमच्या नावाची नोंद करुन घ्यावी त्याकामी लिहून देणार यांची सही, 
          संमत्ती, जाबजबाब, लागलेस विना मोबदला देऊन कोणत्याही प्रकारची तक्रार हरकत नकरता कामाची पुर्तता करून देईन.
        </p>
        
        <p class="bold mt-20">७) दुरुस्ती :-</p>
        <p>
          सदर या दस्ताच्या पुर्ततेसाठी एखादा पुरवणी दस्तऐवज व चूक, दुरुस्ती लेख करून द्यावा लागलेस विनाहरकत, विनातक्रार, विनामोबदला 
          लिहून देणार यांनी नोंदवून देणेचे आहे तक्रार किंवा सबब सांगण्याचे नाही.
        </p>
        
        <p class="bold mt-20">८) खर्चाबाबत :-</p>
        <p>
          सदरच्या बक्षिसपत्रास येणारा संपूर्ण खर्च म्हणजेच जनरल स्टॅम्प, नोंदणी फि. लिखाई फि, वगैरे तदनुशंगीक खर्च हा लिहून घेणार यांनी केलेला आहे.
        </p>
        
        <p class="bold mt-20">०९) रेकॉर्ड ऑफ राईट बाबत :-</p>
        <p>
          मा. नोंदणी महानिरीक्षक महाराष्ट्र राज्य पुणे यांचे कडील परिपत्रक क्र. का ३ / प्रशासक / ४३०९ / ४६६८ दि. ९/१२/९१ अन्वये सदर मिळकतीबाबत 
          वाद विवाद अगर हरकत आल्यास अथवा शासकीय वाद उदभवल्यास त्याची तोषीस दुय्यम निबंधक व दस्तलेखनिक यांना लागू देणार नाही.
        </p>
        
        <p>
          बक्षीसपत्रातील सर्व मजकूर लिहून देणार व लिहून घेणार यांनी दिले माहीतीवरुन व दाखविले कागदपत्रावरुन व सांगितले माहीती वरुन टाईप केलेला असुन 
          आम्ही लिहुन देणार , घेणार यांनी वाचून पाहीला असुन तो आम्हाला समजला, उमजला आहे, तो आम्हाला मान्य व कबुल असलेबाबत आम्ही अक्कल हुशारीने 
          कोणाच्या दबावाला व अमिषाला बळी न पडता राजीखुषीने खालील साक्षीदार समक्ष नेहमीची सहया व डाव्या हाताचा अंगठा केलेले आहेत. सदर बक्षीसपत्रातील 
          संपूर्ण मजकुर लिहून घेणार , लिहून देणार आम्हाला व आमच्या वाली वारसास लागू व बंधन कारक राहील.कोणी कोणत्याही प्रकारची हरकत अगर तक्रार केल्यास 
          लिहून देणार जबाबदार राहतील व लिहून देणार यांनी त्या तक्रारीची तोशीस लिहून घेणार यांना लागू देण्याची नाही.
        </p>
      </div>

      <div class="footer">
        <p>म्हणून लिहून दिले सिटी सर्व्हे मिळकतीचे बक्षिसपत्र असे. सही एस.डी.डाके.रा.तासगाव.</p>
        <p>आज दिनांक – ${formData.date}.</p>
      </div>

      <div class="signature-section">
        <div class="signature-box">
          <p><span class="signature-line"></span></p>
          <p>लिहून घेणार</p>
          <p>${formData.recipientName}</p>
        </div>
        <div class="signature-box">
          <p><span class="signature-line"></span></p>
          <p>लिहून देणार</p>
          <p>${formData.donorName}</p>
        </div>
      </div>

      <div class="witness-section">
        <h3 class="bold text-center">साक्षीदार</h3>
        <div class="witness-boxes">
          <div class="witness-box">
            <p><span class="signature-line"></span></p>
            <p>१) नाव: ${formData.witness1}</p>
          </div>
          <div class="witness-box">
            <p><span class="signature-line"></span></p>
            <p>२) नाव: ${formData.witness2}</p>
          </div>
        </div>
      </div>
    </body>
    </html>`;
  };



const initiatePayment = async () => {
    setLoading(true);
    try {
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        alert('Razorpay SDK failed to load. Are you online?');
        setLoading(false);
        return;
      }

      // Create payment order
      const orderResponse = await axios.post('https://your-backend.com/api/create-order', {
        amount: 50000,
        currency: 'INR',
        receipt: 'gift_deed_' + Date.now(),
      });

      const orderId = orderResponse.data.id;

      const options = {
        key: 'rzp_test_BSj1LLEYKca6Cb',
        amount: orderResponse.data.amount,
        currency: orderResponse.data.currency,
        order_id: orderId,
        name: 'Gift Deed Document',
        description: 'Payment for printing gift deed document',
        handler: async function (paymentResponse) {
          try {
            // Verify payment on backend
            const verificationResponse = await axios.post(
              'https://your-backend.com/api/verify-payment',
              {
                orderId: orderId,
                paymentId: paymentResponse.razorpay_payment_id,
                signature: paymentResponse.razorpay_signature,
                amount: orderResponse.data.amount,
                currency: orderResponse.data.currency
              }
            );

            if (verificationResponse.data.status === 'verified') {
              // Generate and print document
              const printContent = generateDocumentContent();
              const printWindow = window.open('', '_blank');
              printWindow.document.write(printContent);
              printWindow.document.close();
              
              setTimeout(() => {
                printWindow.focus();
                printWindow.print();
                alert('Payment successful! Document printed.');
              }, 1000);
            } else {
              alert('Payment verification failed: ' + verificationResponse.data.message);
            }
          } catch (error) {
            console.error('Verification error:', error);
            alert('Payment verification error. Please contact support.');
          } finally {
            setLoading(false);
          }
        },
        prefill: {
          name: formData.donorName,
          contact: formData.donorMobile,
          email: 'user@example.com'
        },
        theme: {
          color: '#8B4513'
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
            alert('Payment cancelled');
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed: ' + (error.response?.data?.message || error.message));
      setLoading(false);
    }
  };

 

// Remove the separate printDocument function since we've integrated it into the payment handler

  const handlePrint = () => {
    initiatePayment();
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>//श्री//</h1>
        <h2 style={styles.subtitle}>बक्षीस पत्र</h2>
      </div>

      <div style={styles.section}>
        <p>
          बक्षीस पत्र विनामोबदला ,बाजारभावाने मूल्य-
          <input type="text" name="price" value={formData.price} onChange={handleChange} style={styles.input} />/- 
          अक्षरी रुपये <input type="text" name="priceWords" value={formData.priceWords} onChange={handleChange} style={styles.input} />] 
          जिल्हा तुकडी <input type="text" name="district" value={formData.district} onChange={handleChange} style={styles.input} /> व 
          पोट तुकडी व तालुका <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} style={styles.input} /> 
          पैकी मौजे <input type="text" name="village" value={formData.village} onChange={handleChange} style={styles.input} /> 
          येथील <input type="text" name="date" value={formData.place} onChange={handleChange} style={styles.input} /> मिळकत.                          
          आज तारीख:-<input type="text" name="date" value={formData.date} onChange={handleChange} style={styles.input} />.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>पार्टीचा तपशील</h3>
        <div style={styles.partyDetails}>
          <div style={styles.partyColumn}>
            <p style={styles.partyHeader}>लिहून घेणार</p>
            <p>नाव: <input type="text" name="recipientName" value={formData.recipientName} onChange={handleChange} style={styles.input} /></p>
            <p>धंदा: <input type="text" name="recipientOccupation" value={formData.recipientOccupation} onChange={handleChange} style={styles.input} />, 
            वय: <input type="text" name="recipientAge" value={formData.recipientAge} onChange={handleChange} style={styles.input} /> वर्षे</p>
            <p>पत्ता: <input type="text" name="recipientAddress" value={formData.recipientAddress} onChange={handleChange} style={styles.input} /></p>
            <p>मो.नं: <input type="text" name="recipientMobile" value={formData.recipientMobile} onChange={handleChange} style={styles.input} /></p>
            <p>आधार कार्ड क्र: <input type="text" name="recipientAadhar" value={formData.recipientAadhar} onChange={handleChange} style={styles.input} /></p>
            <p>PAN NO: <input type="text" name="recipientPAN" value={formData.recipientPAN} onChange={handleChange} style={styles.input} /></p>
          </div>
          <div style={styles.partyColumn}>
            <p style={styles.partyHeader}>लिहून देणार</p>
            <p>नाव: <input type="text" name="donorName" value={formData.donorName} onChange={handleChange} style={styles.input} /></p>
            <p>धंदा: <input type="text" name="donorOccupation" value={formData.donorOccupation} onChange={handleChange} style={styles.input} />, 
            वय: <input type="text" name="donorAge" value={formData.donorAge} onChange={handleChange} style={styles.input} /> वर्षे</p>
            <p>पत्ता: <input type="text" name="donorAddress" value={formData.donorAddress} onChange={handleChange} style={styles.input} /></p>
            <p>मो.नं: <input type="text" name="donorMobile" value={formData.donorMobile} onChange={handleChange} style={styles.input} /></p>
            <p>आधार कार्ड क्र: <input type="text" name="donorAadhar" value={formData.donorAadhar} onChange={handleChange} style={styles.input} /></p>
            <p>PAN NO: <input type="text" name="donorPAN" value={formData.donorPAN} onChange={handleChange} style={styles.input} /></p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>कारणे लिहून देतो बक्षीसपत्र ऐसाजे की,</h3>
        <p>
          तु नात्याने <input type="text" name="person" value={formData.person} onChange={handleChange} style={styles.input} /> आहे. सबब माझे तुझ्यावर फार जीवापाड प्रेम आहे. व त्या प्रेमापोटीच मी स्व-खुशीने पूर्ण विचारे विनामोबदला विना तक्रार बक्षीस देतो ती माझी मालकी हक्काची कब्जे वहिवाटीतील जिल्हा तुकडी 
          <input type="text" name="district" value={formData.district} onChange={handleChange} style={styles.input} />, 
          पोट तुकडी व तालुका <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} style={styles.input} /> 
          पैकी मौजे <input type="text" name="village" value={formData.village} onChange={handleChange} style={styles.input} /> 
          येथील  <input type="text" name="date" value={formData.place} onChange={handleChange} style={styles.input} />मिळकतीचे.
        </p>
        
        <p><strong>२) मिळकतीचे वर्णन -</strong></p>
        <p>
          जिल्हा व तुकडी <input type="text" name="district" value={formData.district} onChange={handleChange} style={styles.input} /> 
          तालुका व पोट तुकडी <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} style={styles.input} /> 
          पैकी, मौजे <input type="text" name="village" value={formData.village} onChange={handleChange} style={styles.input} /> 
          येथील <input type="text" name="date" value={formData.place} onChange={handleChange} style={styles.input} /> मिळकतीचे वर्णन खालिल प्रमाणे,          
        </p>
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>सि.स.नंबर</th>
              <th style={styles.th}>क्षेत्र चौ.मी</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}><input type="text" name="surveyNo" value={formData.surveyNo} onChange={handleChange} style={styles.tableInput} /></td>
              <td style={styles.td}><input type="text" name="area" value={formData.area} onChange={handleChange} style={styles.tableInput} /></td>
            </tr>
          </tbody>
        </table>
        
        <p>
          यातील माझा संपर्ण हिस्सा क्षेत्र <input type="text" name="shareArea" value={formData.shareArea} onChange={handleChange} style={styles.input} /> चौ.मी. 
          याचा ग्रामपंचायत अनु.क्र. <input type="text" name="grampanchayatNo" value={formData.grampanchayatNo} onChange={handleChange} style={styles.input} /> व 
          मालमत्ता क्र. <input type="text" name="propertyNo" value={formData.propertyNo} onChange={handleChange} style={styles.input} /> असा असून यात क्षेत्र 
          <input type="text" name="builtArea" value={formData.builtArea} onChange={handleChange} style={styles.input} /> चौ.मी इतर पक्के बांधकाम असून उर्वरित खुली जागा आहे. 
          पूर्व – पश्चिम समा. रस्त्याच्या येणे – जानेच्या संपूर्ण हक्कासह मिळकत.
        </p>
        
        <p><strong>यासी चतुसिमा:-</strong></p>
        <p>पूर्वेस: <input type="text" name="eastBoundary" value={formData.eastBoundary} onChange={handleChange} style={styles.input} /></p>
        <p>दक्षिणेस: <input type="text" name="southBoundary" value={formData.southBoundary} onChange={handleChange} style={styles.input} /></p>
        <p>पश्चिमेस: <input type="text" name="westBoundary" value={formData.westBoundary} onChange={handleChange} style={styles.input} /></p>
        <p>उत्तरेस: <input type="text" name="northBoundary" value={formData.northBoundary} onChange={handleChange} style={styles.input} /></p>
        
        <p>
          येणे प्रमाणे चतुःसिमेतील मिळकतीमधील झाड, झुडुप, दगड, माती,लाकूड , निधीनिशेप, काष्टाषाण, तदंगभुत वस्तु तसेच सिटी सर्व्हेच्या इजमेंटच्या हक्कासहीत संपूर्ण. 
        </p>
        
        <p><strong>३) मिळकतीचे पार्श्वभुमी :-</strong></p>
        <p>
          येणे प्रमाणे वर वर्णन केलेली मिळकत लिहून देणार माझी<input type="text" name="वडिलोपार्जित" value={formData.वडिलोपार्जित} onChange={handleChange} style={styles.input} /> मालकीची मिळकत असून सदरची मिळकत मला <input type="text" name="वारसाने " value={formData.वारसाने } onChange={handleChange} style={styles.input} /> मिळालेली आहे. 
          सदर मिळकत माझ्या प्रत्यक्ष कब्जे वहीवाटीत असुन सदर मिळकतीच्या सिटी सर्व्हे उताऱ्यावर माझ्या नावाची नोंद असलेली मिळकत असुन 
          सदर मिळकतीचे विल्हे विक्री,बक्षीस करणेचा मला पूर्ण हक्क व अधिकार आहे.व त्या अधिकाराने मी सदर मिळकत तुला बक्षीस देत आहे. 
        </p>
        
        <p><strong>४) कब्जेबाबत-</strong></p>
        <p>
          वर नमुद केलेली सिटी सर्व्हेच्या मिळकतीचा प्रत्यक्ष कब्जा आज रोजी लिहून देणार यांनी लिहून घेणार यांना दिलेला आहे. 
          त्याचा स्विकार लिहुन घेणार यांनी केलेला आहे. आता बक्षीस दिलेल्या मिळकतीचे लिहून घेणार हे संपूर्ण मालक झाले आहेत. 
        </p>
        
        <p>
          सदर मिळकतीचे सरकारी फाळा लिहून देणार यांनी आज तागायत संपूर्ण भरणा करून दिलेली आहे. येथून पुढे लिहून घेणार यांनी 
          त्यांचे नावाची नोंद सिटी सर्व्हे उताऱ्यावर मालकी सदरी करून घेणेची आहे. त्याकामी लिहून देणार यांची सही संमती लागलेस 
          ते लिहून देणार यांनी विना तक्रार देणेची आहे.
        </p>
        
        <p>
          तसेच यापुढील सरकारी बाब. दरसाल परभारे, देत जावून वहिवाट तुम्ही तुमचे पुत्रपौत्रादी वंशपरंपरा निरंतर मालकी हक्काने 
          करावी किंवा मर्जीनुसार पाहीजे तशी विल्हेवाट व्यवस्था करावी. आता बक्षीस दिलेल्या मिळकतीवर माझा अगर माझ्या वाली वारसांचा 
          भाऊबंदांचा दावा,वारसा,हक्क,हितसंबंध राहीलेला नाही. सदर मिळकतिच्या वारसाहक्का बाबत हरहरकत तक्रार खालखटला निर्माण 
          झालेस ते माझ्या स्वखर्चाने दुर करुन देईन. त्याची तोषीस तुम्हास लागु देणार नाही. सदरची मिळकत निजोखीम, बोजाविरहीत अशी 
          असून त्याच स्थितीत तुम्हास बक्षीस दिली आहे. सदर मिळकतीच्या मालकी वहीवाटीबाबत अगर हददीबाबत काही तक्रार हरकत अडचण 
          निर्माण झालेस ते मी माझ्या स्वखर्चाने दुर करुन देईन. त्याचा तोषीस लिहून घेणार यांना लागू देणार नाही.
        </p>
        
        <p><strong>५) बोजेबाबत -</strong></p>
        <p>
          सदर मिळकतीवर कोणत्याही प्रकारचा बोजा नसुन तथापी बोजाबद्दल अगर तुमचे मालकी वहीवाटीस अगर हददीबाबत कोणाची कोणतीही 
          कोणत्याही प्रकारे हरहरकत तक्रार खालखटला निर्माण झालेस ते माझ्या स्वखर्चाने दुर करुन देईन. 
        </p>
        
        <p>
          त्याची तोषीस तुम्हास लागु देणार नाही. वर नमुद मिळकती बाबत तुम्हा व्यतिरिक्त मी इतर कोणासही लेखी अगर तोडी करार, मदार, 
          दान, गहाण बक्षिसपत्र अन्य कोणत्याही प्रकारचे करार करून दिलेले नाही. तसेच मृत्यूपत्र करुन ठेवले नाही. तसेच कोणाचाही अग्रहक्क 
          नाही अगर सदर मिळकतीबाबत कोणत्याही महसुली अगर दिवाणी मे. न्यायालयात दावा वाद चालु नाही सोबत सिटी सर्व्हे उतारा सोबत जोडला आहे.
        </p>
        
        <p><strong>६) नोंदीबाबत :-</strong></p>
        <p>
          या बक्षीसपत्रा आधारे मिळकतीचे सिटी सर्व्हे उताऱ्यावर मालक सदरी तुम्ही तुमच्या नावाची नोंद करुन घ्यावी त्याकामी लिहून देणार यांची सही, 
          संमत्ती, जाबजबाब, लागलेस विना मोबदला देऊन कोणत्याही प्रकारची तक्रार हरकत नकरता कामाची पुर्तता करून देईन.
        </p>
        
        <p><strong>७) दुरुस्ती :-</strong></p>
        <p>
          सदर या दस्ताच्या पुर्ततेसाठी एखादा पुरवणी दस्तऐवज व चूक, दुरुस्ती लेख करून द्यावा लागलेस विनाहरकत, विनातक्रार, विनामोबदला 
          लिहून देणार यांनी नोंदवून देणेचे आहे तक्रार किंवा सबब सांगण्याचे नाही.
        </p>
        
        <p><strong>८) खर्चाबाबत :-</strong></p>
        <p>
          सदरच्या बक्षिसपत्रास येणारा संपूर्ण खर्च म्हणजेच जनरल स्टॅम्प, नोंदणी फि. लिखाई फि, वगैरे तदनुशंगीक खर्च हा लिहून घेणार यांनी केलेला आहे.
        </p>
        
        <p><strong>०९) रेकॉर्ड ऑफ राईट बाबत :-</strong></p>
        <p>
          मा. नोंदणी महानिरीक्षक महाराष्ट्र राज्य पुणे यांचे कडील परिपत्रक क्र. का ३ / प्रशासक / ४३०९ / ४६६८ दि. ९/१२/९१ अन्वये सदर मिळकतीबाबत 
          वाद विवाद अगर हरकत आल्यास अथवा शासकीय वाद उदभवल्यास त्याची तोषीस दुय्यम निबंधक व दस्तलेखनिक यांना लागू देणार नाही.
        </p>
        
        <p>
          बक्षीसपत्रातील सर्व मजकूर लिहून देणार व लिहून घेणार यांनी दिले माहीतीवरुन व दाखविले कागदपत्रावरुन व सांगितले माहीती वरुन टाईप केलेला असुन 
          आम्ही लिहुन देणार , घेणार यांनी वाचून पाहीला असुन तो आम्हाला समजला, उमजला आहे, तो आम्हाला मान्य व कबुल असलेबाबत आम्ही अक्कल हुशारीने 
          कोणाच्या दबावाला व अमिषाला बळी न पडता राजीखुषीने खालील साक्षीदार समक्ष नेहमीची सहया व डाव्या हाताचा अंगठा केलेले आहेत. सदर बक्षीसपत्रातील 
          संपूर्ण मजकुर लिहून घेणार , लिहून देणार आम्हाला व आमच्या वाली वारसास लागू व बंधन कारक राहील.कोणी कोणत्याही प्रकारची हरकत अगर तक्रार केल्यास 
          लिहून देणार जबाबदार राहतील व लिहून देणार यांनी त्या तक्रारीची तोशीस लिहून घेणार यांना लागू देण्याची नाही.
        </p>
      </div>

      <div style={styles.footer}>
        <p>म्हणून लिहून दिले सिटी सर्व्हे मिळकतीचे बक्षिसपत्र असे. सही एस.डी.डाके.रा.तासगाव.</p>
        <p>आज दिनांक – {formData.date}.</p>
      </div>

      <div style={styles.signatureSection}>
        <div style={styles.signatureBox}>
          <p>लिहून घेणार: --------------------------</p>
          <p>{formData.recipientName}</p>
        </div>
        <div style={styles.signatureBox}>
          <p>लिहून देणार: --------------------------</p>
          <p>{formData.donorName}</p>
        </div>
      </div>

      <div style={styles.witnessSection}>
        <h3 style={styles.sectionTitle}>साक्षीदार</h3>
        <div style={styles.witnessBoxes}>
          <div style={styles.witnessBox}>
            <p>१) -------------------------</p>
            <p>नाव: <input type="text" name="witness1" value={formData.witness1} onChange={handleChange} style={styles.input} /></p>
          </div>
          <div style={styles.witnessBox}>
            <p>२) -------------------------</p>
            <p>नाव: <input type="text" name="witness2" value={formData.witness2} onChange={handleChange} style={styles.input} /></p>
          </div>
        </div>
      </div>
     <div style={styles.buttonContainer}>
         <button onClick={togglePreview} style={styles.previewButton}>
          {isPreview ? 'Edit Form' : 'Preview Document'}
        </button>
        {isPreview && (
          <button 
            onClick={handlePrint} 
            style={styles.printButton}
            disabled={loading}
          >
            {loading ? 'Processing Payment...' : 'Pay ₹500 & Print Document'}
          </button>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Noto Sans Devanagari", Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    lineHeight: '1.6',
    color: '#333'
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    borderBottom: '2px solid #8B4513',
    paddingBottom: '10px'
  },
  title: {
    fontSize: '24px',
    color: '#8B4513',
    marginBottom: '5px'
  },
  subtitle: {
    fontSize: '20px',
    color: '#8B4513',
    marginTop: '0',
    fontWeight: 'bold'
  },
  section: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid #eee',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
  },
  sectionTitle: {
    color: '#8B4513',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    marginTop: '0',
    fontSize: '18px'
  },
  partyDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px'
  },
  partyColumn: {
    flex: '1',
    minWidth: '300px',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  partyHeader: {
    fontWeight: 'bold',
    color: '#8B4513',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '15px'
  },
  input: {
    border: '1px solid #ddd',
    padding: '5px 8px',
    borderRadius: '3px',
    backgroundColor: '#fff',
    minWidth: '100px',
    margin: '2px',
    fontFamily: '"Noto Sans Devanagari", Arial, sans-serif',
    fontSize: '14px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '15px 0',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
  },
  th: {
    backgroundColor: '#8B4513',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
    fontWeight: 'bold'
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left'
  },
  tableInput: {
    border: 'none',
    width: '100%',
    padding: '5px',
    backgroundColor: 'transparent',
    fontFamily: '"Noto Sans Devanagari", Arial, sans-serif',
    fontSize: '14px'
  },
  signatureSection: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px 0',
    gap: '20px'
  },
  signatureBox: {
    flex: '1',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    minWidth: '250px'
  },
  witnessSection: {
    margin: '30px 0'
  },
  witnessBoxes: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px'
  },
  witnessBox: {
    flex: '1',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    minWidth: '250px'
  },
  footer: {
    textAlign: 'center',
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    fontStyle: 'italic'
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





export default GiftDeedForm;