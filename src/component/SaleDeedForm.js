// import React, { useState } from 'react';

// const SaleDeedForm = () => {
//   const [formData, setFormData] = useState({
//     district: 'सांगली',
//     taluka: 'तासगाव',
//     village: 'ढवळी',
//     price: '४,५०,०००',
//     priceWords: 'चार लाख पन्नास हजार रुपये मात्र',
//     date: '२६/०३/२०२५',
//     buyerName: 'दिपिका आनंदराव पाटील',
//     buyerOccupation: 'शेती',
//     buyerAge: '३१',
//     buyerAddress: 'रा.ढवळी ता.तासगाव जि.सांगली',
//     buyerMobile: '९०२२८२३५९७',
//     buyerAadhar: '५०६० ९७३० १८८३',
//     buyerPAN: 'EORPP8866L',
//     sellerName: 'बजरंग किसन पाटील',
//     sellerOccupation: 'शेती',
//     sellerAge: '५२',
//     sellerAddress: 'रा.ढवळी ता.तासगाव जि.सांगली',
//     sellerMobile: '९७३०२७५७७५',
//     sellerAadhar: '७०७४ १५१६ ६७९८',
//     sellerPAN: 'EAEPP6063G',
//     groupNo: '५१९',
//     areaHectare: '१.३२',
//     areaAre: '५.२५',
//     potKha: '०.०४',
//     totalArea: '१.३६',
//     shareArea: '० हे. २० आर',
//     eastBoundary: 'आनंदराव कृष्णा पाटील यांची मिळकत',
//     southBoundary: 'नं.म मधील लिहून देणार बजरंग पाटील यांची शिल्लक मिळकत',
//     westBoundary: 'अशोक रंगराव माने व दिग्विजय रंगराव माने',
//     northBoundary: 'आनंदराव कृष्णा पाटील यांची मिळकत',
//     witness1: '',
//     witness2: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1 style={styles.title}>।। श्री ।।</h1>
//         <h2 style={styles.subtitle}>कायम खुषखरेदीपत्र</h2>
//       </div>

//       <div style={styles.section}>
//         <p>
//           जिल्हा <input type="text" name="district" value={formData.district} onChange={handleChange} style={styles.input} />, 
//           तालुका व पोट तुकडी <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} style={styles.input} /> पैकी, 
//           जिल्हा परिषद <input type="text" name="district" value={formData.district} onChange={handleChange} style={styles.input} /> 
//           पंचायत समिती <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} style={styles.input} /> 
//           कक्षेतील मौजे <input type="text" name="village" value={formData.village} onChange={handleChange} style={styles.input} /> 
//           येथील जमीन मिळकतीचे सरकारी किंमत रक्कम रुपये 
//           <input type="text" name="price" value={formData.price} onChange={handleChange} style={styles.input} />/- 
//           (अक्षरी रुपये <input type="text" name="priceWords" value={formData.priceWords} onChange={handleChange} style={styles.input} />).
//           आज दि.<input type="text" name="date" value={formData.date} onChange={handleChange} style={styles.input} /> रोजीचे.
//         </p>
//       </div>

//       <div style={styles.section}>
//         <h3 style={styles.sectionTitle}>पार्टीचा तपशील</h3>
//         <div style={styles.partyDetails}>
//           <div style={styles.partyColumn}>
//             <p style={styles.partyHeader}>लिहून घेणार</p>
//             <p>नाव: <input type="text" name="buyerName" value={formData.buyerName} onChange={handleChange} style={styles.input} /></p>
//             <p>धंदा: <input type="text" name="buyerOccupation" value={formData.buyerOccupation} onChange={handleChange} style={styles.input} />, 
//             वय: <input type="text" name="buyerAge" value={formData.buyerAge} onChange={handleChange} style={styles.input} /> वर्षे</p>
//             <p>पत्ता: <input type="text" name="buyerAddress" value={formData.buyerAddress} onChange={handleChange} style={styles.input} /></p>
//             <p>मो.नं: <input type="text" name="buyerMobile" value={formData.buyerMobile} onChange={handleChange} style={styles.input} /></p>
//             <p>आधार नं: <input type="text" name="buyerAadhar" value={formData.buyerAadhar} onChange={handleChange} style={styles.input} /></p>
//             <p>PAN NO: <input type="text" name="buyerPAN" value={formData.buyerPAN} onChange={handleChange} style={styles.input} /></p>
//           </div>
//           <div style={styles.partyColumn}>
//             <p style={styles.partyHeader}>लिहून देणार</p>
//             <p>नाव: <input type="text" name="sellerName" value={formData.sellerName} onChange={handleChange} style={styles.input} /></p>
//             <p>धंदा: <input type="text" name="sellerOccupation" value={formData.sellerOccupation} onChange={handleChange} style={styles.input} />, 
//             वय: <input type="text" name="sellerAge" value={formData.sellerAge} onChange={handleChange} style={styles.input} /> वर्षे</p>
//             <p>पत्ता: <input type="text" name="sellerAddress" value={formData.sellerAddress} onChange={handleChange} style={styles.input} /></p>
//             <p>मो.नं: <input type="text" name="sellerMobile" value={formData.sellerMobile} onChange={handleChange} style={styles.input} /></p>
//             <p>आधार नं: <input type="text" name="sellerAadhar" value={formData.sellerAadhar} onChange={handleChange} style={styles.input} /></p>
//             <p>PAN NO: <input type="text" name="sellerPAN" value={formData.sellerPAN} onChange={handleChange} style={styles.input} /></p>
//           </div>
//         </div>
//       </div>

//       <div style={styles.section}>
//         <h3 style={styles.sectionTitle}>कारणे लिहून देतो खरेदीपत्र ऐसाजे की,</h3>
        
//         <p><strong>१) भरणा तपशिल :-</strong></p>
//         <p>
//           र.रु. <input type="text" name="price" value={formData.price} onChange={handleChange} style={styles.input} />/- 
//           अक्षरी रुपये <input type="text" name="priceWords" value={formData.priceWords} onChange={handleChange} style={styles.input} /> 
//           हे मला बिनलेख हातावर रोखीने वेळेवेळी मिळाले आहेत ते र.रु मान्य व कबूल आहे.  
//           मिळकतीचा योग्यतो मोबदला मिळाला आहे. माझी कोणतीही हरकत अगर तक्रार नाही.
//         </p>
//         <hr style={styles.hr} />
//         <p>एकूण र.रु. <input type="text" name="price" value={formData.price} onChange={handleChange} style={styles.input} />/- 
//         (अक्षरी रुपये <input type="text" name="priceWords" value={formData.priceWords} onChange={handleChange} style={styles.input} />).</p>
//         <hr style={styles.hr} />
        
//         <p><strong>२) मिळकतीचे वर्णन –</strong></p>
//         <p>
//           जिल्हा व तुकडी <input type="text" name="district" value={formData.district} onChange={handleChange} style={styles.input} /> 
//           तालुका व पोट तुकडी <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} style={styles.input} /> पैकी, 
//           मौजे <input type="text" name="village" value={formData.village} onChange={handleChange} style={styles.input} /> 
//           येथील जमीन मिळकतीचे वर्णन खालिल प्रमाणे -    
//         </p>
        
//         <table style={styles.table}>
//           <thead>
//             <tr>
//               <th style={styles.th}>गट नंबर</th>
//               <th style={styles.th}>क्षेत्र हे.आर.</th>
//               <th style={styles.th}>आकार:-रु.पै.</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td style={styles.td}><input type="text" name="groupNo" value={formData.groupNo} onChange={handleChange} style={styles.tableInput} /></td>
//               <td style={styles.td}><input type="text" name="areaHectare" value={formData.areaHectare} onChange={handleChange} style={styles.tableInput} /></td>
//               <td style={styles.td}><input type="text" name="areaAre" value={formData.areaAre} onChange={handleChange} style={styles.tableInput} /></td>
//             </tr>
//             <tr>
//               <td style={styles.td}>पोट ख <input type="text" name="potKha" value={formData.potKha} onChange={handleChange} style={styles.tableInput} /></td>
//               <td style={styles.td}>एकूण क्षेत्र <input type="text" name="totalArea" value={formData.totalArea} onChange={handleChange} style={styles.tableInput} /></td>
//               <td style={styles.td}></td>
//             </tr>
//           </tbody>
//         </table>
        
//         <p>यातील माझ्या हिस्यापैकी क्षेत्र <input type="text" name="shareArea" value={formData.shareArea} onChange={handleChange} style={styles.input} /> जमीन.</p>
        
//         <p><strong>यासी चतुसिमा :-</strong></p>
//         <p>पूर्वेस: <input type="text" name="eastBoundary" value={formData.eastBoundary} onChange={handleChange} style={styles.input} /></p>
//         <p>दक्षिणेस: <input type="text" name="southBoundary" value={formData.southBoundary} onChange={handleChange} style={styles.input} /></p>
//         <p>पश्चिमेस: <input type="text" name="westBoundary" value={formData.westBoundary} onChange={handleChange} style={styles.input} /></p>
//         <p>उत्तरेस: <input type="text" name="northBoundary" value={formData.northBoundary} onChange={handleChange} style={styles.input} /></p>
        
//         <p>
//           येणे प्रमाणे चतुसिमेतील मिळकती मधील झाड, झुडुप, दगड, माती,लाकूड , निधीनिशेप, काष्टाषाण, तदंगभुत वस्तु हक्कासहीत संपूर्ण.
//         </p>
//       </div>

//       {/* Additional sections can be added similarly */}

//       <div style={styles.signatureSection}>
//         <div style={styles.signatureBox}>
//           <p>लिहून घेणार: --------------------------</p>
//           <p>{formData.buyerName}</p>
//         </div>
//         <div style={styles.signatureBox}>
//           <p>लिहून देणार: --------------------------</p>
//           <p>{formData.sellerName}</p>
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

//       <div style={styles.footer}>
//         <p>म्हणून लिहून दिले ७/१२ मिळकतीचे कायम खुषखरेदीपत्र असे. सही श्री. एस.डी.डाके रा.तासगाव.</p>
//         <p>आज दिनांक – {formData.date}.</p>
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
//     marginBottom: '20px'
//   },
//   title: {
//     fontSize: '24px',
//     color: '#8B4513',
//     marginBottom: '5px'
//   },
//   subtitle: {
//     fontSize: '20px',
//     color: '#8B4513',
//     marginTop: '0'
//   },
//   section: {
//     marginBottom: '20px',
//     padding: '15px',
//     backgroundColor: '#fff',
//     borderRadius: '5px',
//     border: '1px solid #eee'
//   },
//   sectionTitle: {
//     color: '#8B4513',
//     borderBottom: '1px solid #ddd',
//     paddingBottom: '5px',
//     marginTop: '0'
//   },
//   partyDetails: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap'
//   },
//   partyColumn: {
//     width: '48%',
//     padding: '10px',
//     backgroundColor: '#f5f5f5',
//     borderRadius: '5px',
//     marginBottom: '10px'
//   },
//   partyHeader: {
//     fontWeight: 'bold',
//     color: '#8B4513',
//     borderBottom: '1px solid #ddd',
//     paddingBottom: '5px'
//   },
//   input: {
//     border: '1px solid #ddd',
//     padding: '5px',
//     borderRadius: '3px',
//     backgroundColor: '#fff',
//     minWidth: '100px'
//   },
//   table: {
//     width: '100%',
//     borderCollapse: 'collapse',
//     margin: '10px 0'
//   },
//   th: {
//     backgroundColor: '#8B4513',
//     color: 'white',
//     padding: '8px',
//     textAlign: 'left'
//   },
//   td: {
//     border: '1px solid #ddd',
//     padding: '8px'
//   },
//   tableInput: {
//     border: 'none',
//     width: '100%',
//     padding: '5px',
//     backgroundColor: 'transparent'
//   },
//   hr: {
//     border: 'none',
//     borderTop: '1px dashed #8B4513',
//     margin: '10px 0'
//   },
//   signatureSection: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     margin: '20px 0'
//   },
//   signatureBox: {
//     width: '48%',
//     textAlign: 'center',
//     padding: '15px',
//     backgroundColor: '#f5f5f5',
//     borderRadius: '5px',
//     border: '1px solid #ddd'
//   },
//   witnessSection: {
//     margin: '20px 0'
//   },
//   witnessBoxes: {
//     display: 'flex',
//     justifyContent: 'space-between'
//   },
//   witnessBox: {
//     width: '48%',
//     padding: '15px',
//     backgroundColor: '#f5f5f5',
//     borderRadius: '5px',
//     border: '1px solid #ddd'
//   },
//   footer: {
//     textAlign: 'center',
//     marginTop: '20px',
//     padding: '10px',
//     backgroundColor: '#f5f5f5',
//     borderRadius: '5px',
//     border: '1px solid #ddd'
//   }
// };

// export default SaleDeedForm;




import React, { useState } from 'react';

const SaleDeedForm = () => {
  const [formData, setFormData] = useState({
    district: 'सांगली',
    taluka: 'तासगाव',
    village: 'ढवळी',
    price: '४,५०,०००',
    priceWords: 'चार लाख पन्नास हजार रुपये मात्र',
    date: '२६/०३/२०२५',
    buyerName: 'दिपिका आनंदराव पाटील',
    buyerOccupation: 'शेती',
    buyerAge: '३१',
    buyerAddress: 'रा.ढवळी ता.तासगाव जि.सांगली',
    buyerMobile: '९०२२८२३५९७',
    buyerAadhar: '५०६० ९७३० १८८३',
    buyerPAN: 'EORPP8866L',
    sellerName: 'बजरंग किसन पाटील',
    sellerOccupation: 'शेती',
    sellerAge: '५२',
    sellerAddress: 'रा.ढवळी ता.तासगाव जि.सांगली',
    sellerMobile: '९७३०२७५७७५',
    sellerAadhar: '७०७४ १५१६ ६७९८',
    sellerPAN: 'EAEPP6063G',
    groupNo: '५१९',
    areaHectare: '१.३२',
    areaAre: '५.२५',
    potKha: '०.०४',
    totalArea: '१.३६',
    shareArea: '० हे. २० आर',
    eastBoundary: 'आनंदराव कृष्णा पाटील यांची मिळकत',
    southBoundary: 'नं.म मधील लिहून देणार बजरंग पाटील यांची शिल्लक मिळकत',
    westBoundary: 'अशोक रंगराव माने व दिग्विजय रंगराव माने',
    northBoundary: 'आनंदराव कृष्णा पाटील यांची मिळकत',
    witness1: '',
    witness2: ''
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

  const renderInputOrText = (name, value) => {
    if (isPreview) {
      return <span style={styles.previewText}>{value}</span>;
    }
    return <input type="text" name={name} value={value} onChange={handleChange} style={styles.input} />;
  };

  const printDocument = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>कायम खुषखरेदीपत्र</title>
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
            width: 48%;
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
            width: 48%;
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
            
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">।। श्री ।।</h1>
          <h2 class="subtitle">कायम खुषखरेदीपत्र</h2>
        </div>

        <div class="section">
          <p>
            जिल्हा ${formData.district}, तालुका व पोट तुकडी ${formData.taluka} पैकी, जिल्हा परिषद ${formData.district} 
            पंचायत समिती ${formData.taluka} कक्षेतील मौजे ${formData.village} येथील जमीन मिळकतीचे सरकारी किंमत रक्कम रुपये 
            ${formData.price}/- (अक्षरी रुपये ${formData.priceWords}). आज दि.${formData.date} रोजीचे.
          </p>
        </div>

        <div class="section">
          <h3 class="section-title">पार्टीचा तपशील</h3>
          <div class="party-details">
            <div class="party-column">
              <p>${formData.buyerName}.</p>
              <p>धंदा- ${formData.buyerOccupation}, वय- ${formData.buyerAge} वर्षे</p>
              <p>${formData.buyerAddress}.</p>
              <p>मो.नं- ${formData.buyerMobile}.</p>
              <p>आधार न:- ${formData.buyerAadhar}.</p>
              <p>PAN NO- ${formData.buyerPAN}.</p>

              <p class="party-header">लिहून घेणार</p>
              <p>${formData.sellerName}.</p>
              <p>धंदा- ${formData.sellerOccupation}, वय- ${formData.sellerAge} वर्षे</p>
              <p>${formData.sellerAddress}.</p>
              <p class="party-header">लिहून देणार</p>
              <p>मो.नं- ${formData.sellerMobile}.</p>
              <p>आधार न:- ${formData.sellerAadhar}.</p>
              <p>PAN NO- ${formData.sellerPAN}.</p>
            </div>
         
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">कारणे लिहून देतो खरेदीपत्र ऐसाजे की,</h3>
          
          <p><strong>१) भरणा तपशिल :-</strong></p>
          <p class="indent">
            र.रु. ${formData.price}/- अक्षरी रुपये ${formData.priceWords} हे मला बिनलेख हातावर  
            रोखीने वेळेवेळी मिळाले आहेत ते र.रु मान्य व कबूल आहे.  
            मिळकतीचा योग्यतो मोबदला मिळाला आहे. माझी कोणतीही हरकत  
            अगर तक्रार नाही.
          </p>
          <div class="hr"></div>
          <p>एकूण र.रु. ${formData.price}/- (अक्षरी रुपये ${formData.priceWords}).</p>
          <div class="hr"></div>
          
          <p><strong>२) मिळकतीचे वर्णन –</strong></p>
          <p>
            जिल्हा व तुकडी ${formData.district} तालुका व पोट तुकडी ${formData.taluka} पैकी, 
            मौजे ${formData.village} येथील जमीन मिळकतीचे वर्णन खालिल प्रमाणे -    
          </p>
          
          <table class="table">
            <thead>
              <tr>
                <th>गट नंबर</th>
                <th>क्षेत्र हे.आर.</th>
                <th>आकार:-रु.पै.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${formData.groupNo}</td>
                <td>${formData.areaHectare}</td>
                <td>${formData.areaAre}</td>
              </tr>
              <tr>
                <td>पोट ख ${formData.potKha}</td>
                <td>एकूण क्षेत्र ${formData.totalArea}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          
          <p>यातील माझ्या हिस्यापैकी क्षेत्र ${formData.shareArea} जमीन.</p>
          
          <p><strong>यासी चतुसिमा :-</strong></p>
          <p class="indent">पूर्वेस :- ${formData.eastBoundary}.</p>
          <p class="indent">दक्षिणेस :- ${formData.southBoundary}.</p>
          <p class="indent">पश्चिमेस :- ${formData.westBoundary}.</p>
          <p class="indent">उत्तरेस :- ${formData.northBoundary}.</p>
          
          <p>
            येणे प्रमाणे चतुसिमेतील मिळकती मधील झाड, झुडुप, दगड, माती,लाकूड , निधीनिशेप, काष्टाषाण, तदंगभुत वस्तु हक्कासहीत संपूर्ण.
          </p>

          <p><strong>३) मिळकतीचे पार्श्वभुमी :-</strong></p>
          <p class="indent">
            येणे प्रमाणे वर वर्णन केलेली मिळकत लिहून देणार माझी खरेदी मिळकत असून सदरची मिळकत मला खरेदीने मिळालेली आहे. 
            सदर मिळकत माझ्या प्रत्यक्ष कब्जे वहीवाटीत असुन सदर मिळकतीच्या ७/१२ उताऱ्यावर माझ्या नावाची नोंद असलेली मिळकत असुन 
            सदर मिळकतीचे विल्हे विक्री करणेचा मला पूर्ण हक्क व अधिकार असुन, सदर मिळकत मी विक्रीस काढले असता ती तुम्ही पाहून पसंत करून, 
            सदर मिळकतीस तुम्ही जास्तीत जास्त बाजारभावे किंमत देत असल्याने माझ्या कौटुंबिक गरजेकरीता सदर मिळकतीचे मी कायम खुषखरेदीपत्र करून देत आहे.
          </p>

          <p><strong>४) कब्जेबाबत-</strong></p>
          <p class="indent">
            वर नमुद केलेली ७/१२ मिळकतीचा प्रत्यक्ष कब्जा आज रोजी लिहून देणार यांनी लिहून घेणार यांना दिलेला आहे. 
            त्याचा स्विकार लिहुन घेणार यांनी केलेला आहे. आता खरेदी दिले मिळकतीचे घेणार हे संपूर्ण मालक झाले आहेत. 
            सदर मिळकतीचे सरकारी फाळा लिहून देणार यांनी आज तागायत संपूर्ण भरणा करून दिलेली आहे. येथून पुढे लिहून घेणार यांनी त्यांचे नावाची नोंद ७/१२ उताऱ्यावर मालकी सदरी करून घेणेची आहे. 
            त्याकामी लिहून देणार यांची सही संमती लागलेस ते लिहून देणार यांनी विना तक्रार देणेची आहे.
          </p>
          <p class="indent">
            तसेच यापुढील सरकारी बाब. दरसाल परभारे, देत जावून वहिवाट तुम्ही तुमचे पुत्रपौत्रादी वंशपरंपरा निरंतर मालकी हक्काने करावी किंवा मर्जीनुसार पाहीजे तशी विल्हेवाट व्यवस्था करावी. 
            आता खरेदी दिले मिळकतीवर माझा अगर माझ्या वाली वारसांचा भाऊबंदांचा दावा वारसा हक्क हितसंबंध राहीलेला नाही. 
            सदर मिळकतिच्या वारसाहक्का बाबत हरहरकत तक्रार खालखटला निर्माण झालेस ते माझ्या स्वखर्चाने दुर करुन देईन. 
            त्याची तोषीस तुम्हास लागु देणार नाही. सदरची मिळकत निजोखीम, बोजाविरहीत अशी असून त्याच स्थितीत तुम्हास खरेदी दिली आहे. 
            सदर मिळकतीच्या मालकी वहीवाटीबाबत अगर चतुःसिमेबाबत व हददीबाबत काही तक्रार हरकत अडचण निर्माण झालेस ते मी माझ्या स्वखर्चाने दुर करुन देईन. 
            त्याचा तोषीस लिहून घेणार यांना लागू देणार नाही.
          </p>

          <p><strong>५) बोजेबाबत -</strong></p>
          <p class="indent">
            सदर मिळकतीवर कोणत्याही प्रकारचा बोजा नसुन तथापी बोजाबद्दल अगर तुमचे मालकी वहीवाटीस अगर हददीबाबत कोणाची कोणतीही कोणत्याही प्रकारे हरहरकत तक्रार खालखटला निर्माण झालेस ते माझ्या स्वखर्चाने दुर करुन देईन. 
            त्याची तोषीस तुम्हास लागु देणार नाही. वर नमुद मिळकती बाबत तुम्हा व्यतिरिक्त मी इतर कोणासही लेखी अगर तोडी करार, मदार, दान, गहाण बक्षिसपत्र अन्य काही करून दिलेले नाही. 
            तसेच मृत्यूपत्र करुन ठेवले नाही. तसेच कोणाचाही अग्रहक्क नाही अगर सदर मिळकतीबाबत कोणत्याही महसुली अगर दिवाणी मे. न्यायालयात दावा वाद चालु नाही सोबत ७/१२ उतारा सोबत जोडला आहे.
          </p>

          <p><strong>६) नोंदीबाबत :-</strong></p>
          <p class="indent">
            या खरेदीपत्राआधारे मिळकतीचे अधिकार ७/१२उताऱ्यावर मालक सदरी तुम्ही तुमच्या नावाची नोंद करुन घ्यावी त्याकामी लिहून देणार यांची सही, संमत्ती, जाबजबाब, लागलेस देऊन कामाची पुर्तता करून देईन.
          </p>

          <p><strong>७) सदर या दस्ताच्या पुर्ततेसाठी एखादा पुरवणी दस्तऐवज व चूक दुरुस्ती लेख करून द्यावा लागलेस विनाहरकत, विनातक्रार, विनामोबदला लिहून देणार यांनी नोंदवून देणेचे आहे तक्रार करणेचे नाही.</strong></p>

          <p><strong>८) खर्चाबाबत -</strong></p>
          <p class="indent">
            सदरच्या खरेदीपत्रास येणारा संपूर्ण खर्च म्हणजेच जनरल स्टॅम्प, नोंदणी फि. लिखाई फि, वगैरे तदनुशंगीक खर्च हा लिहून घेणार यांनी केलेला आहे.
          </p>

          <p><strong>०९) रेकॉर्ड ऑफ राईट बाबत मा. नोंदणी महानिरीक्षक महाराष्ट्र राज्य पुणे यांचे कडील परिपत्रक क्र. का ३ / प्रशासक / ४३०९ / ४६६८ दि. ९/१२/९१ अन्वये सदर मिळकतीबाबत वाद विवाद अगर हरकत आल्यास अथवा शासकीय वाद उदभवल्यास त्याची तोषीस दुय्यम निबंधक व दस्तलेखनिक यांना लागू देणार नाही. त्याची सर्वस्वी जबाबदारी लिहून देणार व लिहून घेणार यांची राहील.</strong></p>

          <p class="indent">
            खरेदीपत्रातील सर्व मजकूर लिहून देणार व लिहून घेणार यांनी दिले माहीतीवरुन व दाखविले कागदपत्रावरुन व सांगितले माहीती वरुन टाईप केलेला असुन आम्ही लिहुन देणार , घेणार यांनी वाचून पाहीला असुन तो आम्हाला समजला, उमजला आहे, तो आम्हाला मान्य व कबुल असलेबाबत आम्ही अक्कल हुशारीने कोणाच्या दबावाला व अमिषाला बळी न पडता राजीखुषीने खालील साक्षीदार समक्ष नेहमीची सहया व डाव्या हाताचा अंगठा केलेले आहेत. सदर खरेदीपत्रातील संपूर्ण मजकुर लिहून घेणार , लिहून देणार आम्हाला व आमच्या वाली वारसास लागू व बंधन कारक राहील.
          </p>
        </div>

        <div class="footer">
          <p>• म्हणून लिहून दिले ७/१२ मिळकतीचे कायम खुषखरेदीपत्र असे.सही श्री. एस.डी.डाके रा.तासगाव.</p>
          <p>आज दिनांक –${formData.date}.</p>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>लिहून घेणार:------------------------------------------</p>
            <p>${formData.buyerName}</p>
          </div>
          <div class="signature-box">
            <p>लिहून देणार:------------------------------------------</p>
            <p>${formData.sellerName}</p>
          </div>
        </div>

        <div class="witness-section">
          <h3 class="section-title">साक्षीदार</h3>
          <div class="witness-boxes">
            <div class="witness-box">
              <p>१)----------------------------------------</p>
              <p>नाव: ${formData.witness1}</p>
            </div>
            <div class="witness-box">
              <p>२)----------------------------------------</p>
              <p>नाव: ${formData.witness2}</p>
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

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>।। श्री ।।</h1>
        <h2 style={styles.subtitle}>कायम खुषखरेदीपत्र</h2>
      </div>

      <div style={styles.section}>
        <p>
          जिल्हा {renderInputOrText("district", formData.district)}, 
          तालुका व पोट तुकडी {renderInputOrText("taluka", formData.taluka)} पैकी, 
          जिल्हा परिषद {renderInputOrText("district", formData.district)} 
          पंचायत समिती {renderInputOrText("taluka", formData.taluka)} 
          कक्षेतील मौजे {renderInputOrText("village", formData.village)} 
          येथील जमीन मिळकतीचे सरकारी किंमत रक्कम रुपये 
          {renderInputOrText("price", formData.price)}/- 
          (अक्षरी रुपये {renderInputOrText("priceWords", formData.priceWords)}).
          आज दि.{renderInputOrText("date", formData.date)} रोजीचे.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>पार्टीचा तपशील</h3>
        <div style={styles.partyDetails}>
          <div style={styles.partyColumn}>
            <p style={styles.partyHeader}>लिहून घेणार</p>
            <p>नाव: {renderInputOrText("buyerName", formData.buyerName)}</p>
            <p>धंदा: {renderInputOrText("buyerOccupation", formData.buyerOccupation)}, 
            वय: {renderInputOrText("buyerAge", formData.buyerAge)} वर्षे</p>
            <p>पत्ता: {renderInputOrText("buyerAddress", formData.buyerAddress)}</p>
            <p>मो.नं: {renderInputOrText("buyerMobile", formData.buyerMobile)}</p>
            <p>आधार नं: {renderInputOrText("buyerAadhar", formData.buyerAadhar)}</p>
            <p>PAN NO: {renderInputOrText("buyerPAN", formData.buyerPAN)}</p>
          </div>
          <div style={styles.partyColumn}>
            <p style={styles.partyHeader}>लिहून देणार</p>
            <p>नाव: {renderInputOrText("sellerName", formData.sellerName)}</p>
            <p>धंदा: {renderInputOrText("sellerOccupation", formData.sellerOccupation)}, 
            वय: {renderInputOrText("sellerAge", formData.sellerAge)} वर्षे</p>
            <p>पत्ता: {renderInputOrText("sellerAddress", formData.sellerAddress)}</p>
            <p>मो.नं: {renderInputOrText("sellerMobile", formData.sellerMobile)}</p>
            <p>आधार नं: {renderInputOrText("sellerAadhar", formData.sellerAadhar)}</p>
            <p>PAN NO: {renderInputOrText("sellerPAN", formData.sellerPAN)}</p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>कारणे लिहून देतो खरेदीपत्र ऐसाजे की,</h3>
        
        <p><strong>१) भरणा तपशिल :-</strong></p>
        <p>
          र.रु. {renderInputOrText("price", formData.price)}/- 
          अक्षरी रुपये {renderInputOrText("priceWords", formData.priceWords)} 
          हे मला बिनलेख हातावर रोखीने वेळेवेळी मिळाले आहेत ते र.रु मान्य व कबूल आहे.  
          मिळकतीचा योग्यतो मोबदला मिळाला आहे. माझी कोणतीही हरकत अगर तक्रार नाही.
        </p>
        <hr style={styles.hr} />
        <p>एकूण र.रु. {renderInputOrText("price", formData.price)}/- 
        (अक्षरी रुपये {renderInputOrText("priceWords", formData.priceWords)}).</p>
        <hr style={styles.hr} />
        
        <p><strong>२) मिळकतीचे वर्णन –</strong></p>
        <p>
          जिल्हा व तुकडी {renderInputOrText("district", formData.district)} 
          तालुका व पोट तुकडी {renderInputOrText("taluka", formData.taluka)} पैकी, 
          मौजे {renderInputOrText("village", formData.village)} 
          येथील जमीन मिळकतीचे वर्णन खालिल प्रमाणे -    
        </p>
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>गट नंबर</th>
              <th style={styles.th}>क्षेत्र हे.आर.</th>
              <th style={styles.th}>आकार:-रु.पै.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>
                {isPreview ? (
                  <span style={styles.previewText}>{formData.groupNo}</span>
                ) : (
                  <input type="text" name="groupNo" value={formData.groupNo} onChange={handleChange} style={styles.tableInput} />
                )}
              </td>
              <td style={styles.td}>
                {isPreview ? (
                  <span style={styles.previewText}>{formData.areaHectare}</span>
                ) : (
                  <input type="text" name="areaHectare" value={formData.areaHectare} onChange={handleChange} style={styles.tableInput} />
                )}
              </td>
              <td style={styles.td}>
                {isPreview ? (
                  <span style={styles.previewText}>{formData.areaAre}</span>
                ) : (
                  <input type="text" name="areaAre" value={formData.areaAre} onChange={handleChange} style={styles.tableInput} />
                )}
              </td>
            </tr>
            <tr>
              <td style={styles.td}>
                पोट ख 
                {isPreview ? (
                  <span style={styles.previewText}>{formData.potKha}</span>
                ) : (
                  <input type="text" name="potKha" value={formData.potKha} onChange={handleChange} style={styles.tableInput} />
                )}
              </td>
              <td style={styles.td}>
                एकूण क्षेत्र 
                {isPreview ? (
                  <span style={styles.previewText}>{formData.totalArea}</span>
                ) : (
                  <input type="text" name="totalArea" value={formData.totalArea} onChange={handleChange} style={styles.tableInput} />
                )}
              </td>
              <td style={styles.td}></td>
            </tr>
          </tbody>
        </table>
        
        <p>यातील माझ्या हिस्यापैकी क्षेत्र {renderInputOrText("shareArea", formData.shareArea)} जमीन.</p>
        
        <p><strong>यासी चतुसिमा :-</strong></p>
        <p>पूर्वेस: {renderInputOrText("eastBoundary", formData.eastBoundary)}</p>
        <p>दक्षिणेस: {renderInputOrText("southBoundary", formData.southBoundary)}</p>
        <p>पश्चिमेस: {renderInputOrText("westBoundary", formData.westBoundary)}</p>
        <p>उत्तरेस: {renderInputOrText("northBoundary", formData.northBoundary)}</p>
        
        <p>
          येणे प्रमाणे चतुसिमेतील मिळकती मधील झाड, झुडुप, दगड, माती,लाकूड , निधीनिशेप, काष्टाषाण, तदंगभुत वस्तु हक्कासहीत संपूर्ण.
        </p>
      </div>

      <div style={styles.signatureSection}>
        <div style={styles.signatureBox}>
          <p>लिहून घेणार: --------------------------</p>
          <p>{formData.buyerName}</p>
        </div>
        <div style={styles.signatureBox}>
          <p>लिहून देणार: --------------------------</p>
          <p>{formData.sellerName}</p>
        </div>
      </div>

      <div style={styles.witnessSection}>
        <h3 style={styles.sectionTitle}>साक्षीदार</h3>
        <div style={styles.witnessBoxes}>
          <div style={styles.witnessBox}>
            <p>१) -------------------------</p>
            <p>नाव: {renderInputOrText("witness1", formData.witness1)}</p>
          </div>
          <div style={styles.witnessBox}>
            <p>२) -------------------------</p>
            <p>नाव: {renderInputOrText("witness2", formData.witness2)}</p>
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        <p>म्हणून लिहून दिले ७/१२ मिळकतीचे कायम खुषखरेदीपत्र असे. सही श्री. एस.डी.डाके रा.तासगाव.</p>
        <p>आज दिनांक – {formData.date}.</p>
      </div>

      <div style={styles.previewButtonContainer}>
        <button onClick={togglePreview} style={styles.previewButton}>
          {isPreview ? 'Edit Form' : 'Preview Document'}
        </button>
        {isPreview && (
          <button onClick={printDocument}  style={styles.printButton}>
            Print Document
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
    marginBottom: '20px'
  },
  title: {
    fontSize: '24px',
    color: '#8B4513',
    marginBottom: '5px'
  },
  subtitle: {
    fontSize: '20px',
    color: '#8B4513',
    marginTop: '0'
  },
  section: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid #eee'
  },
  sectionTitle: {
    color: '#8B4513',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    marginTop: '0'
  },
  partyDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  partyColumn: {
    width: '48%',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  partyHeader: {
    fontWeight: 'bold',
    color: '#8B4513',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px'
  },
  input: {
    border: '1px solid #ddd',
    padding: '5px',
    borderRadius: '3px',
    backgroundColor: '#fff',
    minWidth: '100px'
  },
  previewText: {
    display: 'inline-block',
    padding: '5px',
    minWidth: '100px',
    fontWeight: 'bold'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '10px 0'
  },
  th: {
    backgroundColor: '#8B4513',
    color: 'white',
    padding: '8px',
    textAlign: 'left'
  },
  td: {
    border: '1px solid #ddd',
    padding: '8px'
  },
  tableInput: {
    border: 'none',
    width: '100%',
    padding: '5px',
    backgroundColor: 'transparent'
  },
  hr: {
    border: 'none',
    borderTop: '1px dashed #8B4513',
    margin: '10px 0'
  },
  signatureSection: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px 0'
  },
  signatureBox: {
    width: '48%',
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  witnessSection: {
    margin: '20px 0'
  },
  witnessBoxes: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  witnessBox: {
    width: '48%',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  footer: {
    textAlign: 'center',
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f5f5f5',
    borderRadius: '5px',
    border: '1px solid #ddd'
  },
  previewButtonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px'
  },
  previewButton: {
    padding: '10px 20px',
    backgroundColor: '#8B4513',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  },
  printButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default SaleDeedForm;





