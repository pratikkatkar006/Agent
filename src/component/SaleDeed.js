import React, { useState } from 'react';

const SaleDeed = () => {
  const [formData, setFormData] = useState({
    documentDate: '१७/०३/२०२५',
    saleAmount: '७,३५,०००',
    saleAmountWords: 'सात लाख पस्तीस हजार मात्र',
    location: 'जि.प.सांगली प.स.ता तासगाव पैकी कसबे तासगाव येथील मिळकतीचे',
    
    // Buyer Details
    buyerName: 'रतन उदय पाटील',
    buyerOccupation: 'शेती',
    buyerAge: '२६',
    buyerAddress: 'रा. लिंब ता. तासगाव जि. सांगली',
    buyerMobile: '८४५९१२६७८३',
    buyerAadhar: '६६५६ ६९३२ ३७६५',
    buyerPAN: 'FGIPP9554F',
    
    // Seller Details
    sellerName: 'साधना दिपक गायकवाड',
    sellerOccupation: 'शेती/घरकाम',
    sellerAge: '४६',
    sellerAddress: 'रा. तासगाव ता.तासगाव जि.सांगली',
    sellerMobile: '७०३८५५९१५५',
    sellerAadhar: '७७३६ १७२५ ४०७५',
    sellerPAN: 'ERNPG7028C',
    
    // Consent Giver Details
    consentGiverName: 'अनंत दिपक गायकवाड',
    consentGiverOccupation: 'शेती',
    consentGiverAge: '२९',
    consentGiverAddress: 'रा. तासगाव ता.तासगाव जि.सांगली',
    consentGiverMobile: '७०३८५५९१५५',
    consentGiverAadhar: '६४४७ ४८६५ १३१७',
    
    // Property Details
    surveyNumber: '९२२/४/अ/१/ब',
    totalArea: '०.६१',
    shareArea: '० हे.२१ आर',
    
    // Boundaries
    eastBoundary: 'रस्ता',
    southBoundary: 'संध्या राजेंद्र जाधव यांची मिळकत',
    westBoundary: 'गजानन,शारदा अशोक गायकवाड यांची मिळकत',
    northBoundary: 'भोंडवे यांची मिळकत',
    
    // Terms
    paymentDate: '१२/०७/२०२१',
    executionDate: '१७/०३/२०२५'
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
        <title>साठेखत</title>
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
            justify-content: center;
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
          <h1 class="title">// श्री //</h1>
          <h2 class="title">साठेखत</h2>
        </div>

        <div class="section">
          <p>
            साठेखत रक्कम रुपये ${formData.saleAmount}/-[अक्षरी ${formData.saleAmountWords}] चे ${formData.location}.
          </p>
          <p style="text-align: right; font-weight: bold;">
            आज.ता. ${formData.documentDate}.
          </p>
        </div>

        <div class="party-details">
          <div class="party-column">
            <p class="party-header">लिहून घेणार</p>
            <p>${formData.buyerName}.</p>
            <p>धंदा-${formData.buyerOccupation}, वय- ${formData.buyerAge} वर्षे</p>
            <p>${formData.buyerAddress}.</p>
            <p>मो.नं – ${formData.buyerMobile}.</p>
            <p>आधार न:-${formData.buyerAadhar}.</p>
            <p>PAN NO – ${formData.buyerPAN}.</p>
          
          
            <p class="party-header">लिहून देणार</p>
            <p>${formData.sellerName}.</p>
            <p>धंदा- ${formData.sellerOccupation}, वय- ${formData.sellerAge} वर्षे</p>
            <p>${formData.sellerAddress}.</p>
            <p>मो.नं- ${formData.sellerMobile}.</p>
            <p>आधार न:- ${formData.sellerAadhar}.</p>
            <p>PAN NO – ${formData.sellerPAN}.</p>
         

          
            <p class="party-header">मान्यता देणार</p>
            <p>${formData.consentGiverName}.</p>
            <p>धंदा- ${formData.consentGiverOccupation}, वय- ${formData.consentGiverAge} वर्षे</p>
            <p>${formData.consentGiverAddress}.</p>
            <p>मो.नं- ${formData.consentGiverMobile}.</p>
            <p>आधार न:- ${formData.consentGiverAadhar}.</p>
          </div>
        </div>

      

        <div class="section">
          <h3 class="section-title">भरणा तपशील</h3>
          <p>
            रुपये ${formData.saleAmount}/-[अक्षरी रुपये ${formData.saleAmountWords}] हे मला बिनलेख हातावर रोखीने वेळोवेळी मिळाले ते रुपये मला मान्य व कबूल आहेत. मिळकतीचा संपूर्ण मोबदला मला मिळाला माझी कोणतीही हरकत अगर तक्रार नाही.
          </p>
          <p class="right-align">
            एकूण रुपये ${formData.saleAmount}/- एकूण रक्कम ${formData.saleAmountWords}.
          </p>
          
          <p>
            या रुपयास कायम खुश खरेदी देनेची ठरवली ती मिळकत माझे खरेदी मालकी वही-वाटीची व माझे प्रत्यक्ष वही वाटीस असलेली जिल्हा तुकडी सांगली,पोट तुकडी व ता.तासगाव पैकी कसबे तासगाव येथील जमीन मिळकत-
          </p>
          
          <table class="table">
            <thead>
              <tr>
                <th>रि.स.न</th>
                <th>क्षेत्र.हे.आर.</th>
                <th>आकार:-रु.पै.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${formData.surveyNumber}</td>
                <td>${formData.totalArea}</td>
                <td>${formData.shareArea}</td>
              </tr>
            </tbody>
          </table>

          <p class="indent">
            यातील माझा संपूर्ण हिस्सा क्षेत्र ${formData.shareArea} जमीन. सदर मिळकतीला येणे जानेच्या संपूर्ण हक्कासह तुम्हास मिळकत दिली.
          </p>
          
          <h3 class="section-title">यासी चतुसिमा :-</h3>
          <p class="indent">
            पूर्वेस :- ${formData.eastBoundary}.<br />
            दक्षिणेस :- ${formData.southBoundary}.<br />
            पश्चिमेस :- ${formData.westBoundary}.<br />
            उत्तरेस :- ${formData.northBoundary}.
          </p>
          
          <p>
            येणे प्रमाणे मिळकत मी तुम्हास एकूण रक्कम रुपये ${formData.saleAmount}/-मात्र या रुपयास कायम खूष खरेदी देनेची ठरवली असून ती सर्व रक्कम मला मिळाली ते मान्य व कबूल आहेत.
          </p>
          <p>
            सदर मिळकत ही माझी खरेदी मालकीची असून ह्या मिळकतीचा मी एकुलती एक मालक आहे. अन्य कोणी नाही.माझ्या व्यतरिक्त अन्य कोणाचाही,भाऊबंध वाली-वारस यांचा कोणत्याही प्रकारचा हक्क संबंध नाही.मिळकतीचा कब्जा हा खरेदी वेळी तुम्हास देणेचा आहे. सदर साठेखत व खरेदी पत्राचा पूर्ण  खर्च हा यातील लिहून घेणार करणेचा आहे.
          </p>
          <p>
            सदर खरेदी पत्रास मुदत दि.${formData.paymentDate} प्रमाणे मा.नोंदणी महानिरीक्षक व मुद्रांक नि. महाराष्ट्र राज्य पुणे यांचेकडील परिपत्रका मध्ये नमूद केल्याप्रमाणे सक्षम अधिकारी यांची परवानगी किंवा दि.${formData.paymentDate}च्या परिपत्रकामध्ये बदल झाल्यावर, नियमात बदल झाल्यानंतर किंवा नियमितीकरण करून तुमच्या आमच्या विचारे खरेदीपत्र करणेचे आहे.
          </p>
          <p>
            सदर मिळकत पूर्णपणे निर्वेध,निष्कर्जी कोणत्याही प्रकारचा कर्ज बोजा नसलेली अशी असून ती आज रोजी कोणत्याही कोर्टाचा वाद विषय नाही.अथवा कोणताही दावा प्रलंबित नाही.तुम्हास विक्री केलेल्या मिळकतीचे आज अखेरचे सर्व सरकारी कर मी भागविलेले आहेत कोणत्याही प्रकारची थकबाकी निघाल्यास त्याची जोखीम माझ्यावर राहील.सदर मिळकत ही तुम्हा व्यतरिक्त अन्य कोणासही देण्याचा माझा लेखी अगर तोंडी व्यवहार झालेला नाही.
          </p>
          <p>
            वरील अटी शर्ती वर आम्ही तुम्हास खरेदी पत्र पूर्ण करून नाही दिले तर ते तुम्ही योग्य त्या कोर्टा मार्फत पूर्ण करून घ्यावे मग होणारे खर्चास व परिणामास सरस्वी मी जबाबदार आहे.व वरील शर्तीवर आम्ही तुम्हास खरेदी पत्र पूर्ण करून देत असता तुम्ही नाही करून घेतले तर दिलेली रुपये बुडली असे समजणेचे आहेत. सदरचे साठेखत हे आम्ही व आमचे वाली वारस भाऊबंध यांच्यावर बंधनकारक राहण्याचे आहे.
          </p>
          
          <h3 class="section-title">यासी मान्यता देणार:-</h3>
          <p>
            नाव: ${formData.consentGiverName}.<br />
            धंदा-${formData.consentGiverOccupation}, वय-${formData.consentGiverAge} वर्षे.<br />
            ${formData.consentGiverAddress}
          </p>
          <p class="indent">
            मागितले वरून लिहून देतो विनामोबदला मान्यता कि, सदरचे साठेखत लिहून देणार हे नात्याने मान्यता देणार यांची आई असून त्यांनी लिहून दिलेले सदरचे साठेखत मला अव्वल पासून अखेर पर्यंत मान्य व कबूल आहे.तरी सदर भरणा मला मान्य व कबूल आहे. तरी सदर मिळकतीत माझा काही हक्क हितसंबध असावा अगर पुढे मागे निर्माण होईल असे तुम्हास वाटले वरून व तुम्ही मला मान्यता मागितले वरून मी हि मान्यता तुम्हास विनामोबदला दिली आहे.व सदरचे साठेखत मला अव्वल पासून अखेर पर्यंत मान्य व कबूल आहे.
          </p>
          
          <p>
            म्हणून लिहून दिले साठेखत सही एस.डी.डाके. रा.तासगाव ता.तासगाव
          </p>
          <p style="text-align: right; font-weight: bold;">
            आज ता. ${formData.executionDate}.
          </p>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>लिहून घेणार</p>
            <div class="signature-line"></div>
            <p>${formData.buyerName}</p>
          </div>
          <div class="signature-box">
            <p>लिहून देणार</p>
            <div class="signature-line"></div>
            <p>${formData.sellerName}</p>
          </div>
          <div class="signature-box">
            <p>मान्यता देणार</p>
            <div class="signature-line"></div>
            <p>${formData.consentGiverName}</p>
          </div>
        </div>

        <div class="witness-section">
          <h3 class="section-title">// साक्षिदार //</h3>
          <table class="table" style="width: 100%;">
            <thead>
              <tr>
                <th>साक्षीदार नाव</th>
                <th>सही</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>१.</td>
                <td></td>
              </tr>
              <tr>
                <td>२.</td>
                <td></td>
              </tr>
            </tbody>
          </table>
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
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>// श्री //</h1>
        <h2>साठेखत</h2>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>
          साठेखत रक्कम रुपये 
          {renderInputOrText('saleAmount', formData.saleAmount, '100px')}/-
          [अक्षरी {renderInputOrText('saleAmountWords', formData.saleAmountWords, '200px')}] चे 
          {renderInputOrText('location', formData.location, '400px')}.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          आज.ता. {renderInputOrText('documentDate', formData.documentDate, '100px')}.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div style={{ width: '48%' }}>
          <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>लिहून घेणार</h3>
          <p>{renderInputOrText('buyerName', formData.buyerName, '250px')}.</p>
          <p>
            धंदा-{renderInputOrText('buyerOccupation', formData.buyerOccupation, '100px')}, 
            वय- {renderInputOrText('buyerAge', formData.buyerAge, '40px')} वर्षे
          </p>
          <p>{renderInputOrText('buyerAddress', formData.buyerAddress, '300px')}.</p>
          <p>मो.नं – {renderInputOrText('buyerMobile', formData.buyerMobile, '100px')}.</p>
          <p>आधार न:-{renderInputOrText('buyerAadhar', formData.buyerAadhar, '150px')}.</p>
          <p>PAN NO – {renderInputOrText('buyerPAN', formData.buyerPAN, '120px')}.</p>
        </div>

        <div style={{ width: '48%' }}>
          <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>लिहून देणार</h3>
          <p>{renderInputOrText('sellerName', formData.sellerName, '250px')}.</p>
          <p>
            धंदा- {renderInputOrText('sellerOccupation', formData.sellerOccupation, '100px')}, 
            वय- {renderInputOrText('sellerAge', formData.sellerAge, '40px')} वर्षे
          </p>
          <p>{renderInputOrText('sellerAddress', formData.sellerAddress, '300px')}.</p>
          <p>मो.नं- {renderInputOrText('sellerMobile', formData.sellerMobile, '100px')}.</p>
          <p>आधार न:- {renderInputOrText('sellerAadhar', formData.sellerAadhar, '150px')}.</p>
          <p>PAN NO – {renderInputOrText('sellerPAN', formData.sellerPAN, '120px')}.</p>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>मान्यता देणार</h3>
        <p>{renderInputOrText('consentGiverName', formData.consentGiverName, '250px')}.</p>
        <p>
          धंदा- {renderInputOrText('consentGiverOccupation', formData.consentGiverOccupation, '100px')}, 
          वय- {renderInputOrText('consentGiverAge', formData.consentGiverAge, '40px')} वर्षे
        </p>
        <p>{renderInputOrText('consentGiverAddress', formData.consentGiverAddress, '300px')}.</p>
        <p>मो.नं- {renderInputOrText('consentGiverMobile', formData.consentGiverMobile, '100px')}.</p>
        <p>आधार न:- {renderInputOrText('consentGiverAadhar', formData.consentGiverAadhar, '150px')}.</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>भरणा तपशील</h3>
        <p>
          रुपये {formData.saleAmount}/-[अक्षरी रुपये {formData.saleAmountWords}] हे मला बिनलेख हातावर रोखीने वेळोवेळी मिळाले ते रुपये मला मान्य व कबूल आहेत. मिळकतीचा संपूर्ण मोबदला मला मिळाला माझी कोणतीही हरकत अगर तक्रार नाही.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          एकूण रुपये {formData.saleAmount}/- एकूण रक्कम {formData.saleAmountWords}.
        </p>
        
        <p>
          या रुपयास कायम खुश खरेदी देनेची ठरवली ती मिळकत माझे खरेदी मालकी वही-वाटीची व माझे प्रत्यक्ष वही वाटीस असलेली जिल्हा तुकडी सांगली,पोट तुकडी व ता.तासगाव पैकी कसबे तासगाव येथील जमीन मिळकत-
        </p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>रि.स.न</th>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>क्षेत्र.हे.आर.</th>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>आकार:-रु.पै.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #000', padding: '8px' }}>
                {renderInputOrText('surveyNumber', formData.surveyNumber, '150px')}
              </td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>
                {renderInputOrText('totalArea', formData.totalArea, '80px')}
              </td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>
                {renderInputOrText('shareArea', formData.shareArea, '100px')}
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginLeft: '20px' }}>
          यातील माझा संपूर्ण हिस्सा क्षेत्र {formData.shareArea} जमीन. सदर मिळकतीला येणे जानेच्या संपूर्ण हक्कासह तुम्हास मिळकत दिली.
        </p>
        
        <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>यासी चतुसिमा :-</h3>
        <p style={{ marginLeft: '20px' }}>
          पूर्वेस :- {renderInputOrText('eastBoundary', formData.eastBoundary, '200px')}.<br />
          दक्षिणेस :- {renderInputOrText('southBoundary', formData.southBoundary, '250px')}.<br />
          पश्चिमेस :- {renderInputOrText('westBoundary', formData.westBoundary, '300px')}.<br />
          उत्तरेस :- {renderInputOrText('northBoundary', formData.northBoundary, '200px')}.
        </p>
        
        <p>
          येणे प्रमाणे मिळकत मी तुम्हास एकूण रक्कम रुपये {formData.saleAmount}/-मात्र या रुपयास कायम खूष खरेदी देनेची ठरवली असून ती सर्व रक्कम मला मिळाली ते मान्य व कबूल आहेत.
        </p>
        <p>
          सदर मिळकत ही माझी खरेदी मालकीची असून ह्या मिळकतीचा मी एकुलती एक मालक आहे. अन्य कोणी नाही.माझ्या व्यतरिक्त अन्य कोणाचाही,भाऊबंध वाली-वारस यांचा कोणत्याही प्रकारचा हक्क संबंध नाही.मिळकतीचा कब्जा हा खरेदी वेळी तुम्हास देणेचा आहे. सदर साठेखत व खरेदी पत्राचा पूर्ण खर्च हा यातील लिहून घेणार करणेचा आहे.
        </p>
        <p>
          सदर खरेदी पत्रास मुदत दि.
          {renderInputOrText('paymentDate', formData.paymentDate, '100px')} प्रमाणे मा.नोंदणी महानिरीक्षक व मुद्रांक नि. महाराष्ट्र राज्य पुणे यांचेकडील परिपत्रका मध्ये नमूद केल्याप्रमाणे सक्षम अधिकारी यांची परवानगी किंवा दि.{formData.paymentDate}च्या परिपत्रकामध्ये बदल झाल्यावर, नियमात बदल झाल्यानंतर किंवा नियमितीकरण करून तुमच्या आमच्या विचारे खरेदीपत्र करणेचे आहे.
        </p>
        <p>
          सदर मिळकत पूर्णपणे निर्वेध,निष्कर्जी कोणत्याही प्रकारचा कर्ज बोजा नसलेली अशी असून ती आज रोजी कोणत्याही कोर्टाचा वाद विषय नाही.अथवा कोणताही दावा प्रलंबित नाही.तुम्हास विक्री केलेल्या मिळकतीचे आज अखेरचे सर्व सरकारी कर मी भागविलेले आहेत कोणत्याही प्रकारची थकबाकी निघाल्यास त्याची जोखीम माझ्यावर राहील.सदर मिळकत ही तुम्हा व्यतरिक्त अन्य कोणासही देण्याचा माझा लेखी अगर तोंडी व्यवहार झालेला नाही.
        </p>
        <p>
          वरील अटी शर्ती वर आम्ही तुम्हास खरेदी पत्र पूर्ण करून नाही दिले तर ते तुम्ही योग्य त्या कोर्टा मार्फत पूर्ण करून घ्यावे मग होणारे खर्चास व परिणामास सरस्वी मी जबाबदार आहे.व वरील शर्तीवर आम्ही तुम्हास खरेदी पत्र पूर्ण करून देत असता तुम्ही नाही करून घेतले तर दिलेली रुपये बुडली असे समजणेचे आहेत. सदरचे साठेखत हे आम्ही व आमचे वाली वारस भाऊबंध यांच्यावर बंधनकारक राहण्याचे आहे.
        </p>
        
        <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>यासी मान्यता देणार:-</h3>
        <p>
          नाव: {formData.consentGiverName}.<br />
          धंदा-{formData.consentGiverOccupation}, वय-{formData.consentGiverAge} वर्षे.<br />
          {formData.consentGiverAddress}
        </p>
        <p style={{ marginLeft: '20px' }}>
          मागितले वरून लिहून देतो विनामोबदला मान्यता कि, सदरचे साठेखत लिहून देणार हे नात्याने मान्यता देणार यांची आई असून त्यांनी लिहून दिलेले सदरचे साठेखत मला अव्वल पासून अखेर पर्यंत मान्य व कबूल आहे.तरी सदर भरणा मला मान्य व कबूल आहे. तरी सदर मिळकतीत माझा काही हक्क हितसंबध असावा अगर पुढे मागे निर्माण होईल असे तुम्हास वाटले वरून व तुम्ही मला मान्यता मागितले वरून मी हि मान्यता तुम्हास विनामोबदला दिली आहे.व सदरचे साठेखत मला अव्वल पासून अखेर पर्यंत मान्य व कबूल आहे.
        </p>
        
        <p>
          म्हणून लिहून दिले साठेखत सही एस.डी.डाके. रा.तासगाव ता.तासगाव
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          आज ता. {renderInputOrText('executionDate', formData.executionDate, '100px')}.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px 0' }}>
        <div style={{ width: '30%', textAlign: 'center' }}>
          <p>लिहून घेणार</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {isPreview ? (
              formData.buyerName
            ) : (
              <input
                type="text"
                name="buyerName"
                value={formData.buyerName}
                onChange={handleChange}
                style={{ ...styles.input, width: '100%', textAlign: 'center' }}
              />
            )}
          </div>
        </div>
        <div style={{ width: '30%', textAlign: 'center' }}>
          <p>लिहून देणार</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {isPreview ? (
              formData.sellerName
            ) : (
              <input
                type="text"
                name="sellerName"
                value={formData.sellerName}
                onChange={handleChange}
                style={{ ...styles.input, width: '100%', textAlign: 'center' }}
              />
            )}
          </div>
        </div>
        <div style={{ width: '30%', textAlign: 'center' }}>
          <p>मान्यता देणार</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {isPreview ? (
              formData.consentGiverName
            ) : (
              <input
                type="text"
                name="consentGiverName"
                value={formData.consentGiverName}
                onChange={handleChange}
                style={{ ...styles.input, width: '100%', textAlign: 'center' }}
              />
            )}
          </div>
        </div>
      </div>

      <div style={{ margin: '40px 0' }}>
        <h3 style={{ textAlign: 'center', borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>// साक्षिदार //</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>साक्षीदार नाव</th>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>सही</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #000', padding: '8px' }}>१.</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #000', padding: '8px' }}>२.</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}></td>
            </tr>
          </tbody>
        </table>
      </div>

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

export default SaleDeed;