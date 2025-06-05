import React, { useState } from 'react';

const LeaveLicenseAgreement = () => {
  const [formData, setFormData] = useState({
    agreementDate: '०२/०९/२०२४',
    propertyLocation: 'मौजे सावळज',
    
    // Licensor (लिहून घेणार) Details
    licensorName: 'सुनिता विलासराव कोळी',
    licensorAge: '५९',
    licensorOccupation: 'घरकाम',
    licensorMobile: '९६६५५९८५४८',
    licensorAddress: 'रा. बस्तवडे, ता.तासगांव, जि.सांगली',
    
    // Licensee (लिहून देणार) Details
    licenseeName: 'आकाश महादेव पाटील',
    licenseeAge: '२३',
    licenseeOccupation: 'व्यापार',
    licenseeMobile: '९५०३९८५६७७',
    licenseeAddress: 'रा. अंजनी, ता. तासगाव, जि. सांगली',
    
    // Property Details
    surveyNumber: '३६६०',
    propertyNumber: '३६५१',
    shopNumber: '४',
    dimensions: '९.५ फुट ×१९ फुट',
    area: '१६.७७ चौ.मी.',
    
    // Boundaries
    eastBoundary: 'हॉल',
    southBoundary: 'गाळा नं ५',
    westBoundary: 'सावळज अंजनी रस्ता',
    northBoundary: 'गाळा नं - ३',
    upperBoundary: 'दुसरा मजला',
    lowerBoundary: 'तळमजला',
    
    // Terms
    businessPurpose: 'न्यू महांकाली मोबाईल शॉपी',
    startDate: '०१/०९/२०२४',
    endDate: '०१/०९/२०२७',
    licenseFee: '८,६५०',
    licenseFeeWords: 'आठ हजार सहाशे पन्नास',
    depositAmount: '२,००,०००',
    depositAmountWords: 'दोन लाख',
    
    // Execution
    executionDate: '०२/०९/२०२४'
  });

  const [isPreview, setIsPreview] = useState(false);

   const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePreview = () => setIsPreview(!isPreview);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
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

  const handlePayment = async () => {
    // Load Razorpay script dynamically
    const res = await loadRazorpayScript();
    
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    // In a real app, you would get these details from your backend
    const options = {
      key: 'rzp_test_BSj1LLEYKca6Cb', // Replace with your Razorpay key
      amount: '10000', // Amount in paise (10000 = ₹100)
      currency: 'INR',
      name: 'Document Printing Service',
      description: 'Payment for legal document printing',
      image: 'https://example.com/your_logo.png',
      order_id: 'order_9A33XWu170gUtm', // This comes from your backend
      handler: function(response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        setPaymentCompleted(true);
        // Now you can proceed with printing
        printDocument();
      },
      prefill: {
        name: formData.licenseeName,
        email: 'customer@example.com',
        contact: formData.licenseeMobile
      },
      notes: {
        address: 'Document printing service'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };



  const printDocument = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>लिव्ह अँड लायसेन्स करारनामा</title>
        <style>
          @page { size: A4; margin: 0; }
          body { 
            font-family: "Noto Sans Devanagari", Arial, sans-serif; 
            line-height: 1.6; 
            padding: 20px;
          }
          .header { text-align: center; margin-bottom: 20px; }
          .title { font-size: 24px; margin-bottom: 5px; }
          .section { margin-bottom: 20px; }
          .section-title { font-weight: bold; border-bottom: 1px solid #000; margin-bottom: 10px; }
          .party-container { display: flex; justify-content: center; margin-bottom: 30px; }
          .party-column { width: 48%; }
          .signature-section { display: flex; justify-content: space-between; margin: 40px 0; }
          .signature-box { width: 45%; text-align: center; }
          .signature-line { border-top: 1px solid #000; width: 80%; margin: 0 auto; padding-top: 50px; }
          .witness-section { margin-top: 60px; }
          .witness-boxes { display: flex; justify-content: space-between; }
          .witness-box { width: 45%; text-align: center; }
          .terms-list { margin-left: 20px; }
          .indent { margin-left: 20px; }
          .bold { font-weight: bold; }
          .right-align { text-align: right; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">लिव्ह अँड लायसेन्सप्रमाणे करारनामा</h1>
        </div>

        <div class="section">
          <p>करार लिव्ह अँड लायसेन्स आज दि.${formData.agreementDate} रोजी जिल्हा तुकडी सांगली पोट तुकडी व ता.तासगाव पैकी ${formData.propertyLocation} येथील मिळकतिचे –</p>
        </div>

        <div class="party-container">
          <div class="party-column">
            <p class="bold">${formData.licensorName}</p>
            <p>वय :- ${formData.licensorAge} वर्षे धंदा :- ${formData.licensorOccupation}</p>
            <p>मो.न :- ${formData.licensorMobile}</p>
            <p>${formData.licensorAddress}</p>
          
          
          
            <p class="bold">यासी...</p>
            <p class="bold">${formData.licenseeName}</p>
            <p>वय :- ${formData.licenseeAge} वर्षे धंदा :- ${formData.licenseeOccupation}</p>
            <p>मो.न :- ${formData.licenseeMobile}</p>
            <p>${formData.licenseeAddress}</p>
            <p class="bold">(लायसेन्सी)</p>
          </div>
        </div>

        <div class="section">
          <p>कारणे मी लिहून देणार सदरचे लायसेन्सी अॅग्रिमेंट लिहून देतो की,</p>
          
          <p class="bold">अ) मिळकतीचे वर्णन –</p>
          <p class="indent">
            जिल्हा तुकडी सांगली, पोट तुकडी व तालुका तासगांव पैकी मौजे सावळज हद्दीतील मिळकत ग्रा. अ. नं. ${formData.surveyNumber} मालमत्ता क्र – ${formData.propertyNumber} यामध्ये आर.सी.सी इमारत असून सदर इमारतीमधील तळघरातील दुकान गाळा न. ${formData.shopNumber} याचे क्षेत्र ${formData.dimensions} या मापाचा गाळा. याचे क्षेत्र ${formData.area} (९.५ बाय १९ चे दोन गाळे)
          </p>
          
          <p class="bold">यासी षष्ठ:सिमा –</p>
          <p class="indent">
            पूर्वेस – ${formData.eastBoundary}<br>
            दक्षिणेस – ${formData.southBoundary}<br>
            पश्चिमेस – ${formData.westBoundary}<br>
            उत्तरेस – ${formData.northBoundary}<br>
            उर्ध्व – ${formData.upperBoundary}<br>
            अध – ${formData.lowerBoundary}
          </p>
          
          <p class="indent">
            येणे प्रमाणे षष्ठ:सिमापूर्वक मिळकत ही लिहून घेणार यांचे मालकी हक्काची व खुद्द कब्जेवहीवाटीची अशी मिळकत (लिहून घेणार यांना लायसेन्सॉर व लिहून देणार यांना लायसेन्सी संबोधणेत आले आहे.)
          </p>
          
          <p class="bold">ब) कराराचे कारण</p>
          <p class="indent">
            लायसेन्सॉर यांना सदरील मिळकत ${formData.businessPurpose} व्यवसाय वापरासाठी लिव्ह अँड लायसेन्स तत्वावर काही अटींवर देण्याची होती. लायसेन्सी यांना याबाबत माहिती मिळालेनंतर त्यांनी लायसेन्सॉर यांचेशी मध्यस्थामार्फत संपर्क साधला व सदरील मिळकत लायसेन्सी यांना लिव्ह अँड लायसेन्स तत्वावर देण्यास विनंती केलेवरून देण्यास विनंती केल्यावरून व लायसेन्सी यांच्या हमी व वचनावर विश्वास ठेऊन ३ वर्षे मिळकत ${formData.businessPurpose} व्यवसाय वापरच्या मंजुरीसाठी लायसेन्सॉर यांनी लिव्ह अँड लायसेन्सच्या कराराला मान्यता दिली.
          </p>
          
          <p class="bold">क) कराराच्या शर्ती व अटी</p>
          <ol class="terms-list">
            <li>वर कलम अ मध्ये नमूद केलेली मिळकत ही लिहून घेणार यांची मालकीची आहे व सदर जागेमध्ये प्रत्यक्ष कब्जे वहिवाट ही लिहून घेणार यांचीच आहे. सदर मिळकतीचा प्रस्तुतचा करार लिहून देणार यांना लिव्ह अँड लायसेन्सीचे तरतुदीप्रमाणे ${formData.businessPurpose} व्यवसायासाठी दिलेली आहे.</li>
            <li>सदरची जागा वापरणेचा मोबदला म्हणून करार लिहून देणार यांनी लिहून घेणार यांस दि. ${formData.startDate} ते ${formData.endDate} चे कालावधीसाठी देणेत आलेला असून दरमहा र.रु. ${formData.licenseFee}/- (रुपये ${formData.licenseFeeWords} मात्र) एवढी लायसेन्स फी देणेची ठरली आहे. सदरची लायसेन्सी फी प्रत्येक महिनेचे १५ ते २० तारखेपर्यंत आगावू देनेचे आहे. सदर मिळकतीस डीपोजिट म्हणून रक्कम रुपये ${formData.depositAmount} (अक्षरी रक्कम रुपये ${formData.depositAmountWords} मात्र) दिलेले आहे.</li>
            <li>लिहून देणार यांचे ${formData.businessPurpose} व्यवसायासाठी आवश्यक असणारे सर्व शासकीय निमशासकीय परवाने घेणेस लिहून घेणार यांची पूर्णपणे संमती आहे.</li>
            <li>सदर मिळकतीचे ग्रामपंचायत कर घरपट्टी लिहून घेणार यांनी भरणेची आहे व मिळकतीतील विद्युत कंपनी कडून मिळालेले वीज बिल देण्यास लायसेन्सी पात्र असेल.</li>
            <li>सदरची मिळकत लायसेन्सी यांनी केवळ ${formData.businessPurpose} व्यवसाय सुरु करण्यासाठी घेतलेली असून सदर व्यवसायामध्ये त्यांचे टाकाऊ वस्तूपासून अन्य शेजारी गाळाधारक अगर अन्य रहिवासी यांना त्रास होईल असे कोणतेही कृत्य करणेचे नाही.</li>
            <li>या कराराचा हेतू लायसेन्सी यांना तात्पुरत्या तरतुदीप्रमाणे फक्त कायदेशीर व्यवसायासाठी करणेचा आहे. इतर कोणत्याही हेतूसाठी नाही.</li>
            <li>सदरची जागा ज्या कारणासाठी दिलेली आहे त्याच कारणासाठी तिचा वापर करार लिहून देणार यांनी करणेचा आहे हे मान्य व कबूल आहे.</li>
            <li>वर नमूद केलेल्या मिळकतीमध्ये लिहून देणार यांना डागडुजी, रंगकाम, इलेक्ट्रिक फिटिंग याची गरज भासल्यास लिहून देणार यांनी स्वखर्चाने करणेचे आहे.</li>
            <li>सदर गाळ्यातील सर्व सामानसुमान साहित्य, फर्निचर यांचे रक्षण करणेची सर्वस्वी जबाबदारी लायसेन्सी यांची राहील.</li>
            <li>सदर दुकान गाळा कोणत्याही व्यक्तीस अगर संस्थेस हस्तांतर / तबदील करता येणार नाही किंवा कोणत्याही वित्त संस्थेकडे तारण ठेवता येणार नाही.</li>
            <li>सदर मिळकतीवर भाडेतत्व, इतर करार अथवा इतर अधिकार आणि इतर हक्क निर्माण होतील असा कोणताही अर्थ या करारामध्ये नमूद केलेल्या कोणत्याही कलमातून निर्माण होणार नाही.</li>
            <li>सदर मिळकतीवर नमूद कालावधीपर्यंतचा पूर्ण कब्जा लायसेन्सीचा राहील आणि लायसेन्सॉरचे सदर मिळकतीवर पूर्ण नियंत्रण व सदर मिळकतीची पाहणी करण्याचा अधिकार राहील.</li>
            <li>लायसेन्सॉर हा कोणत्याही लायसेन्सी यांच्या बेकायदेशीर कृत्यास जबाबदार राहणार नाही.</li>
            <li>करारनाम्यामधील मुदत संपण्यापूर्वी लिहून घेणार यांना वरील कलम अ मध्ये नमूद केलेले मिळकतीची आवश्यकता भासल्यास लिहून घेणार यांनी लिहून देणार यांना एक महिना अधि मध्यस्थामार्फत कळविणेचे आहे.</li>
            <li>करारनाम्याची मुदत संपलेनंतर हा करार आपोआप संपुष्टात येईल व नवीन करार करणे हे लायसेन्सॉर यांच्या मर्जीवर अवलंबून राहील.</li>
            <li>करारनाम्यातील कोणत्याही शर्ती व अटी पैकी एक अगर अनेक शर्ती अगर अटींचा भंग झाल्यास सदर मिळकतीचा करारनामा रद्द करून संपुष्टात आणणेचा अधिकार लिहून घेणार यांना राहील.</li>
            <li>वरील सर्व अटी व शर्ती मान्य करून सदरची मिळकत प्रत्यक्षपणे करार लिहून घेणार यांनी करार लिहून देणार यांचे ${formData.startDate} पासून ${formData.endDate} पर्यंत कब्जात दिली आहे.</li>
            <li>सदर मिळकत यातील लिहून देणार यांनी मुदतीनंतर विनातक्रार खाली करणेची आहे.</li>
            <li>मुदतीनंतर यातील लिहून देणार यांनी सदर मिळकत लिहून घेणार यांचे ताब्यात विनातक्रार न दिलेस सदर मिळकतीचा ताबा यातील लिहून घेणार हे मुंबई भाडे नियंत्रण कायदा सन २००० चे कलम २४ अन्वये घेतील.</li>
          </ol>
          
          <p class="indent">
            लिहून देणार व लिहून घेणार यांचेमधील करार हा भाडे करार नाही (new Maharashtra Rent Control Act) तरतुदीप्रमाणे लिहून देणार व लिहून घेणार या कराराने मालक व भाडेकरू (Land Lord and Tenant) असे संबंध निर्माण होत नाहीत.
          </p>
          
          <p class="indent">
            लिहून देणार यांनी या लिव्ह अँड लायसेन्सी कराराचा गैरवापर करणेचा नाही व लिहून घेणार यांचे मालकी हक्कास बाधा येणार नाही असे गैरकृत्य करणेचे नाही हे लिहून देणार यांस मान्य व कबूल आहे. सदर करारनामा हा राजीखुशीने व अक्कल हुशारीने व कोणाच्याही दडपणाशिवाय लिहून दिला असून तो मला मान्य व कबुल असून सदर करार माझेवर व माझे वालीवारसांचेवर हक्कदारांवर लागू व बंधनकारक आहे. सदर करार हा साक्षीदारासमक्ष तयार केला आहे.
          </p>
          
          <p class="indent">
            येणे प्रमाणे लिव्ह अँड लायसेन्स करारनामा मी तुम्हास करून दिलेला असून सदर करारातील संपूर्ण मजकूर मी सांगितलेला आहे व त्याप्रमाणे संगणकावर टाईप केलेला आहे व तो सुरुवातीपासून अखेरपर्यंत वाचलेला आहे आणि नंतरच मी माझी सही खालील साक्षीदारांचेसमोर केली आहे.
          </p>
          
          <p class="right-align bold">
            येणे प्रमाणे लिव्ह अँड लायसेन्सीचा करारनामा असे. सही श्री. डी. व्ही. डाके, रा. तासगाव.
          </p>
          <p class="right-align bold">दि. ${formData.executionDate}</p>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>लिहून देणार</p>
            <div class="signature-line"></div>
            <p>${formData.licenseeName}</p>
          </div>
          <div class="signature-box">
            <p>लिहून घेणार</p>
            <div class="signature-line"></div>
            <p>${formData.licensorName}</p>
          </div>
        </div>

        <div class="witness-section">
          <h3 class="section-title">साक्षीदार</h3>
          <div class="witness-boxes">
            <div class="witness-box">
              <p>१) ------------------------------</p>
              <div class="signature-line"></div>
            </div>
            <div class="witness-box">
              <p>२) ------------------------------</p>
              <div class="signature-line"></div>
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

  const renderInputOrText = (name, value, width = 'auto') => {
    if (isPreview) {
      return <span style={{ display: 'inline-block', width, fontWeight: 'bold' }}>{value}</span>;
    }
    return (
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        style={{ 
          border: '1px solid #d9c7b8',
          padding: '5px',
          backgroundColor: '#fff',
          width,
          margin: '2px'
        }}
      />
    );
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
    partyContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '30px'
    },
    partyColumn: {
      width: '48%',
      padding: '15px',
      border: '1px solid #d9c7b8',
      borderRadius: '5px',
      backgroundColor: '#fff'
    },
    bold: {
      fontWeight: 'bold'
    },
    indent: {
      marginLeft: '20px'
    },
    rightAlign: {
      textAlign: 'right'
    },
    termsList: {
      marginLeft: '40px'
    },
    signatureSection: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '40px 0'
    },
    signatureBox: {
      width: '45%',
      textAlign: 'center'
    },
    signatureLine: {
      borderTop: '1px solid #000',
      width: '80%',
      margin: '0 auto',
      paddingTop: '50px'
    },
    witnessSection: {
      marginTop: '60px'
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
        <h1>लिव्ह अँड लायसेन्सप्रमाणे करारनामा</h1>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>
          करार लिव्ह अँड लायसेन्स आज दि.
          {renderInputOrText('agreementDate', formData.agreementDate, '100px')} रोजी 
          जिल्हा तुकडी सांगली पोट तुकडी व ता.तासगाव पैकी 
          {renderInputOrText('propertyLocation', formData.propertyLocation, '150px')} 
          येथील मिळकतिचे –
        </p>
      </div>

      <div style={styles.partyContainer}>
        <div style={styles.partyColumn}>
          <p style={styles.bold}>
            {renderInputOrText('licensorName', formData.licensorName, '250px')}
          </p>
          <p>
            वय :- {renderInputOrText('licensorAge', formData.licensorAge, '40px')} वर्षे 
            धंदा :- {renderInputOrText('licensorOccupation', formData.licensorOccupation, '100px')}
          </p>
          <p>मो.न :- {renderInputOrText('licensorMobile', formData.licensorMobile, '120px')}</p>
          <p>{renderInputOrText('licensorAddress', formData.licensorAddress, '300px')}</p>
        </div>

        <div style={{ ...styles.partyColumn, textAlign: 'right' }}>
          <p style={styles.bold}>यासी...</p>
          <p style={styles.bold}>
            {renderInputOrText('licenseeName', formData.licenseeName, '250px')}
          </p>
          <p>
            वय :- {renderInputOrText('licenseeAge', formData.licenseeAge, '40px')} वर्षे 
            धंदा :- {renderInputOrText('licenseeOccupation', formData.licenseeOccupation, '100px')}
          </p>
          <p>मो.न :- {renderInputOrText('licenseeMobile', formData.licenseeMobile, '120px')}</p>
          <p>{renderInputOrText('licenseeAddress', formData.licenseeAddress, '300px')}</p>
          <p style={styles.bold}>(लायसेन्सी)</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>
          कारणे मी लिहून देणार सदरचे लायसेन्सी अॅग्रिमेंट लिहून देतो की,
        </p>
        
        <p style={styles.bold}>अ) मिळकतीचे वर्णन –</p>
        <p style={styles.indent}>
          जिल्हा तुकडी सांगली, पोट तुकडी व तालुका तासगांव पैकी मौजे सावळज हद्दीतील मिळकत ग्रा. अ. नं. 
          {renderInputOrText('surveyNumber', formData.surveyNumber, '60px')} मालमत्ता क्र – 
          {renderInputOrText('propertyNumber', formData.propertyNumber, '60px')} यामध्ये आर.सी.सी इमारत असून 
          सदर इमारतीमधील तळघरातील दुकान गाळा न. 
          {renderInputOrText('shopNumber', formData.shopNumber, '40px')} याचे क्षेत्र 
          {renderInputOrText('dimensions', formData.dimensions, '150px')} या मापाचा गाळा. याचे क्षेत्र 
          {renderInputOrText('area', formData.area, '80px')} (९.५ बाय १९ चे दोन गाळे)
        </p>
        
        <p style={styles.bold}>यासी षष्ठ:सिमा –</p>
        <p style={styles.indent}>
          पूर्वेस – {renderInputOrText('eastBoundary', formData.eastBoundary, '120px')}<br />
          दक्षिणेस – {renderInputOrText('southBoundary', formData.southBoundary, '120px')}<br />
          पश्चिमेस – {renderInputOrText('westBoundary', formData.westBoundary, '150px')}<br />
          उत्तरेस – {renderInputOrText('northBoundary', formData.northBoundary, '120px')}<br />
          उर्ध्व – {renderInputOrText('upperBoundary', formData.upperBoundary, '120px')}<br />
          अध – {renderInputOrText('lowerBoundary', formData.lowerBoundary, '120px')}
        </p>
        
        <p style={styles.indent}>
          येणे प्रमाणे षष्ठ:सिमापूर्वक मिळकत ही लिहून घेणार यांचे मालकी हक्काची व खुद्द कब्जेवहीवाटीची अशी मिळकत (लिहून घेणार यांना लायसेन्सॉर व लिहून देणार यांना लायसेन्सी संबोधणेत आले आहे.)
        </p>
        
        <p style={styles.bold}>ब) कराराचे कारण</p>
        <p style={styles.indent}>
          लायसेन्सॉर यांना सदरील मिळकत 
          {renderInputOrText('businessPurpose', formData.businessPurpose, '200px')} 
          व्यवसाय वापरासाठी लिव्ह अँड लायसेन्स तत्वावर काही अटींवर देण्याची होती. लायसेन्सी यांना याबाबत माहिती मिळालेनंतर त्यांनी लायसेन्सॉर यांचेशी मध्यस्थामार्फत संपर्क साधला व सदरील मिळकत लायसेन्सी यांना लिव्ह अँड लायसेन्स तत्वावर देण्यास विनंती केलेवरून देण्यास विनंती केल्यावरून व लायसेन्सी यांच्या हमी व वचनावर विश्वास ठेऊन ३ वर्षे मिळकत 
          {formData.businessPurpose} व्यवसाय वापरच्या मंजुरीसाठी लायसेन्सॉर यांनी लिव्ह अँड लायसेन्सच्या कराराला मान्यता दिली.
        </p>
        
        <p style={styles.bold}>क) कराराच्या शर्ती व अटी</p>
        <ol style={styles.termsList}>
          <li>वर कलम अ मध्ये नमूद केलेली मिळकत ही लिहून घेणार यांची मालकीची आहे व सदर जागेमध्ये प्रत्यक्ष कब्जे वहिवाट ही लिहून घेणार यांचीच आहे. सदर मिळकतीचा प्रस्तुतचा करार लिहून देणार यांना लिव्ह अँड लायसेन्सीचे तरतुदीप्रमाणे {formData.businessPurpose} व्यवसायासाठी दिलेली आहे.</li>
          <li>
            सदरची जागा वापरणेचा मोबदला म्हणून करार लिहून देणार यांनी लिहून घेणार यांस दि. 
            {renderInputOrText('startDate', formData.startDate, '100px')} ते 
            {renderInputOrText('endDate', formData.endDate, '100px')} चे कालावधीसाठी देणेत आलेला असून दरमहा र.रु. 
            {renderInputOrText('licenseFee', formData.licenseFee, '80px')}/- (रुपये 
            {renderInputOrText('licenseFeeWords', formData.licenseFeeWords, '150px')} मात्र) एवढी लायसेन्स फी देणेची ठरली आहे. सदरची लायसेन्सी फी प्रत्येक महिनेचे १५ ते २० तारखेपर्यंत आगावू देनेचे आहे. सदर मिळकतीस डीपोजिट म्हणून रक्कम रुपये 
            {renderInputOrText('depositAmount', formData.depositAmount, '100px')} (अक्षरी रक्कम रुपये 
            {renderInputOrText('depositAmountWords', formData.depositAmountWords, '100px')} मात्र) दिलेले आहे.
          </li>
          <li>लिहून देणार यांचे {formData.businessPurpose} व्यवसायासाठी आवश्यक असणारे सर्व शासकीय निमशासकीय परवाने घेणेस लिहून घेणार यांची पूर्णपणे संमती आहे.</li>
          <li>सदर मिळकतीचे ग्रामपंचायत कर घरपट्टी लिहून घेणार यांनी भरणेची आहे व मिळकतीतील विद्युत कंपनी कडून मिळालेले वीज बिल देण्यास लायसेन्सी पात्र असेल.</li>
          <li>सदरची मिळकत लायसेन्सी यांनी केवळ {formData.businessPurpose} व्यवसाय सुरु करण्यासाठी घेतलेली असून सदर व्यवसायामध्ये त्यांचे टाकाऊ वस्तूपासून अन्य शेजारी गाळाधारक अगर अन्य रहिवासी यांना त्रास होईल असे कोणतेही कृत्य करणेचे नाही.</li>
          <li>या कराराचा हेतू लायसेन्सी यांना तात्पुरत्या तरतुदीप्रमाणे फक्त कायदेशीर व्यवसायासाठी करणेचा आहे. इतर कोणत्याही हेतूसाठी नाही.</li>
          <li>सदरची जागा ज्या कारणासाठी दिलेली आहे त्याच कारणासाठी तिचा वापर करार लिहून देणार यांनी करणेचा आहे हे मान्य व कबूल आहे.</li>
          <li>वर नमूद केलेल्या मिळकतीमध्ये लिहून देणार यांना डागडुजी, रंगकाम, इलेक्ट्रिक फिटिंग याची गरज भासल्यास लिहून देणार यांनी स्वखर्चाने करणेचे आहे.</li>
          <li>सदर गाळ्यातील सर्व सामानसुमान साहित्य, फर्निचर यांचे रक्षण करणेची सर्वस्वी जबाबदारी लायसेन्सी यांची राहील.</li>
          <li>सदर दुकान गाळा कोणत्याही व्यक्तीस अगर संस्थेस हस्तांतर / तबदील करता येणार नाही किंवा कोणत्याही वित्त संस्थेकडे तारण ठेवता येणार नाही.</li>
          <li>सदर मिळकतीवर भाडेतत्व, इतर करार अथवा इतर अधिकार आणि इतर हक्क निर्माण होतील असा कोणताही अर्थ या करारामध्ये नमूद केलेल्या कोणत्याही कलमातून निर्माण होणार नाही.</li>
          <li>सदर मिळकतीवर नमूद कालावधीपर्यंतचा पूर्ण कब्जा लायसेन्सीचा राहील आणि लायसेन्सॉरचे सदर मिळकतीवर पूर्ण नियंत्रण व सदर मिळकतीची पाहणी करण्याचा अधिकार राहील.</li>
          <li>लायसेन्सॉर हा कोणत्याही लायसेन्सी यांच्या बेकायदेशीर कृत्यास जबाबदार राहणार नाही.</li>
          <li>करारनाम्यामधील मुदत संपण्यापूर्वी लिहून घेणार यांना वरील कलम अ मध्ये नमूद केलेले मिळकतीची आवश्यकता भासल्यास लिहून घेणार यांनी लिहून देणार यांना एक महिना अधि मध्यस्थामार्फत कळविणेचे आहे.</li>
          <li>करारनाम्याची मुदत संपलेनंतर हा करार आपोआप संपुष्टात येईल व नवीन करार करणे हे लायसेन्सॉर यांच्या मर्जीवर अवलंबून राहील.</li>
          <li>करारनाम्यातील कोणत्याही शर्ती व अटी पैकी एक अगर अनेक शर्ती अगर अटींचा भंग झाल्यास सदर मिळकतीचा करारनामा रद्द करून संपुष्टात आणणेचा अधिकार लिहून घेणार यांना राहील.</li>
          <li>वरील सर्व अटी व शर्ती मान्य करून सदरची मिळकत प्रत्यक्षपणे करार लिहून घेणार यांनी करार लिहून देणार यांचे {formData.startDate} पासून {formData.endDate} पर्यंत कब्जात दिली आहे.</li>
          <li>सदर मिळकत यातील लिहून देणार यांनी मुदतीनंतर विनातक्रार खाली करणेची आहे.</li>
          <li>मुदतीनंतर यातील लिहून देणार यांनी सदर मिळकत लिहून घेणार यांचे ताब्यात विनातक्रार न दिलेस सदर मिळकतीचा ताबा यातील लिहून घेणार हे मुंबई भाडे नियंत्रण कायदा सन २००० चे कलम २४ अन्वये घेतील.</li>
        </ol>
        
        <p style={styles.indent}>
          लिहून देणार व लिहून घेणार यांचेमधील करार हा भाडे करार नाही (new Maharashtra Rent Control Act) तरतुदीप्रमाणे लिहून देणार व लिहून घेणार या कराराने मालक व भाडेकरू (Land Lord and Tenant) असे संबंध निर्माण होत नाहीत.
        </p>
        
        <p style={styles.indent}>
          लिहून देणार यांनी या लिव्ह अँड लायसेन्सी कराराचा गैरवापर करणेचा नाही व लिहून घेणार यांचे मालकी हक्कास बाधा येणार नाही असे गैरकृत्य करणेचे नाही हे लिहून देणार यांस मान्य व कबूल आहे. सदर करारनामा हा राजीखुशीने व अक्कल हुशारीने व कोणाच्याही दडपणाशिवाय लिहून दिला असून तो मला मान्य व कबुल असून सदर करार माझेवर व माझे वालीवारसांचेवर हक्कदारांवर लागू व बंधनकारक आहे. सदर करार हा साक्षीदारासमक्ष तयार केला आहे.
        </p>
        
        <p style={styles.indent}>
          येणे प्रमाणे लिव्ह अँड लायसेन्स करारनामा मी तुम्हास करून दिलेला असून सदर करारातील संपूर्ण मजकूर मी सांगितलेला आहे व त्याप्रमाणे संगणकावर टाईप केलेला आहे व तो सुरुवातीपासून अखेरपर्यंत वाचलेला आहे आणि नंतरच मी माझी सही खालील साक्षीदारांचेसमोर केली आहे.
        </p>
        
        <p style={styles.rightAlign}>
          येणे प्रमाणे लिव्ह अँड लायसेन्सीचा करारनामा असे. सही श्री. डी. व्ही. डाके, रा. तासगाव.
        </p>
        <p style={styles.rightAlign}>
          दि. {renderInputOrText('executionDate', formData.executionDate, '100px')}
        </p>
      </div>

      <div style={styles.signatureSection}>
        <div style={styles.signatureBox}>
          <p>लिहून देणार</p>
          <div style={styles.signatureLine}></div>
          <p>{formData.licenseeName}</p>
        </div>
        <div style={styles.signatureBox}>
          <p>लिहून घेणार</p>
          <div style={styles.signatureLine}></div>
          <p>{formData.licensorName}</p>
        </div>
      </div>

      <div style={styles.witnessSection}>
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '20px' }}>साक्षीदार</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>१) ------------------------------</p>
            <div style={styles.signatureLine}></div>
          </div>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>२) ------------------------------</p>
            <div style={styles.signatureLine}></div>
          </div>
        </div>
      </div>

      <div style={styles.buttonContainer}>
          <button onClick={togglePreview} style={styles.previewButton}>
          {isPreview ? 'Edit Form' : 'Preview Document'}
        </button>
        {isPreview && (
          <button 
            onClick={paymentCompleted ? printDocument : handlePayment} 
            style={paymentCompleted ? styles.printButton : styles.payButton}
          >
            {paymentCompleted ? 'Print Document' : 'Pay & Print (₹100)'}
          </button>
        )}
      </div>
    </div>
  );
};

export default LeaveLicenseAgreement;