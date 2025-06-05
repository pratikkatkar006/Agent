import React, { useState } from 'react';

const PowerOfAttorneyCancellation = () => {
  const [formData, setFormData] = useState({
    cancellationDate: '११/०९/२०२४',
    considerationAmount: '०',
    considerationAmountWords: 'शून्य मात्र',
    location: 'कसबे तासगाव ता.तासगाव जि.सांगली',
    
    // Party 1 (Canceller) Details
    cancellerName: 'विकास शिवाजी सूर्यवंशी',
    cancellerAge: '४१',
    cancellerOccupation: 'शेती',
    cancellerAddress: 'रा.तासगाव ता.तासगाव जि.सांगली',
    cancellerAadhar: '४८६६ ४३१७ ७६३३',
    cancellerMobile: '९९७०५०५२९३',
    
    // Party 2 (Grantor) Details
    grantorName: 'गजानन भीमराव गेळे',
    grantorAge: '४३',
    grantorOccupation: 'शेती',
    grantorAddress: 'रा. तासगाव ता. तासगाव. जि.सांगली',
    grantorAadhar: '२६६८ ३२१० ०९८२',
    grantorMobile: '९०१८३६९००४',
    
    // Property Details
    surveyNumber: '७४२/२/ब/१',
    totalArea: '०.७०',
    shareArea: '० हे.०१ आर',
    
    // Boundaries
    eastBoundary: '६ मीटर रुंदीचा रस्ता',
    westBoundary: 'रि.स.न ७४२/२/ब/२',
    southBoundary: 'गणेश नामदेव धाबुगडे यांची मिळकत',
    northBoundary: 'सुनिता खंडेराव पाटील यांची मिळकत',
    
    // Registration Details
    originalPoADate: '१७/०३/२०२५',
    registrationNumber: '१४१७/२०२५',
    registrarOffice: 'तासगाव स.र.कचेरीत',
    cancellationReason: 'ज्या उद्देशाने कुलमुखत्यार घेतली होती तो उद्देश आता सफल होणार नसलेने',
    
    // Circular Reference
    circularNumber: 'का ३ / प्रशासक / ४३०९ / ४६६८',
    circularDate: '९/१२/९१',
    executionDate: '१७/०४/२०२५'
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
        <title>कुलमुखत्यारपत्र रद्द्लेख</title>
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
            width: 45%;
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
          <h1 class="title">// श्री //</h1>
          <h2 class="subtitle">कुलमुखत्यारपत्र रद्द्लेख</h2>
        </div>

        <div class="section">
          <p>
            कुलमुखत्यार रद्द्लेख मोबदला रु.${formData.considerationAmount}/- [ अक्षरी रुपये ${formData.considerationAmountWords}] चे जमीन. ${formData.location} येथील मिळकतीचे.
          </p>
          <p style="text-align: right; font-weight: bold;">
            आज तारीख:- ${formData.cancellationDate}.
          </p>
        </div>

        <div class="party-details">
          <div class="party-column">
            <p class="party-header">लिहून घेणार</p>
            <p>${formData.cancellerName}.</p>
            <p>व. व.${formData.cancellerAge}, व्यवसाय – ${formData.cancellerOccupation},</p>
            <p>${formData.cancellerAddress}</p>
            <p>आधार नं.- ${formData.cancellerAadhar}.</p>
            <p>मो.नं.-${formData.cancellerMobile}.</p>

               <p class="party-header">लिहून देणार</p>
            <p>${formData.grantorName}.</p>
            <p>व.व.${formData.grantorAge} व्यवसाय- ${formData.grantorOccupation}.</p>
            <p>${formData.grantorAddress}.</p>
            <p>आधार नं.-${formData.grantorAadhar}.</p>
            <p>मो.नं. ${formData.grantorMobile}.</p>
          </div>

         
        </div>

        <div class="section">
          <h3 class="section-title">लिहून देतो कुलमुखत्यार रद्द्लेख एसाजे की</h3>
          <p>
            जिल्हा तुकडी सांगली,पोट तुकडी व ता.तासगाव पैकी कसबे तासगाव येथील मिळकत.
          </p>
          
          <table class="table">
            <thead>
              <tr>
                <th>रि.स.नंबर</th>
                <th>क्षेत्र हे.आर</th>
                <th>आकार रु.पै.</th>
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
            माझा असणारा संपूर्ण हिस्सा क्षेत्र ${formData.shareArea}.
          </p>
          <p class="indent">
            यासी चतुःसिमा:-<br />
            पूर्वेस - ${formData.eastBoundary}.<br />
            पश्चिमेस - ${formData.westBoundary}.<br />
            दक्षिणेस - ${formData.southBoundary}.<br />
            उत्तरेस - ${formData.northBoundary}.
          </p>

          <p>
            सदर जमिनीचे रजिस्टर कुलमुखत्यार पत्र ता.${formData.originalPoADate} रोजी करून तो दस्त ${formData.registrarOffice} दस्त नंबर- ${formData.registrationNumber} ने नोंद केलेला आहे.परंतु -
          </p>
          <p class="indent">
            सदरची जमीन मी ज्या उद्देशाने कुलमुखत्यार घेतली होती तो उद्देश आता सफल होणार नसलेने आपण अभयता एकमेकांचे विचारे सदरचे रजिस्टर कुलमुखत्यार आजरोजी या लेखाने रद्द करीत आहोत. सदर जमिनीचा कबजा तुमचेकडे आहे.आता माझे तुमचेकडे अगर तुमचे आमच्याकडे काहीएक येणे-देणे राहिलेले नाही.कुलमुखत्यार पत्राने निर्माण झालेल्या सर्व हक्क हितसंबंध या रद्द्लेखाने संपुष्टात आलेले आहेत. हा लिहून दिला विनामोबदला कुलमुखत्यार रद्द्लेख.
          </p>
          <p>
            रेकॉर्ड ऑफ राईट बाबत मा. नोंदणी महानिरीक्षक महाराष्ट्र राज्य पुणे यांचे कडील परिपत्रक क्र. ${formData.circularNumber} दि. ${formData.circularDate} अन्वये दस्त नोंदणीच्या अनुषंगाने असणाऱ्या सर्व कायदेशीर तरतुदींची व त्याचे परिणामांची पूर्ण व स्पष्ट कल्पना आपल्या उभयतांना दुय्यम निबंधक अधिकारी यांनी दिलेली आहे. सबब, येथुन पूढे सदर दस्ताच्या अनुषंगाने कोणतीही कायदेशीर अडचण उदभवल्यास त्याची जबाबदारी ही दस्त लेखनिक, ओळखदार, साक्षीदार अगर दुय्यम निबंधक अधिकारी, दुय्यम निबंध कार्यालयातील कर्मचारी अगर इतर अन्य कोणाचीही असणार नाही. त्याबाबत सर्व जबाबदारी ही लिहुन देणार व लिहून घेणार यांचेवरच आहे व राहील. सही एस.डी.डाके.रा.तासगाव.
          </p>
          <p style="text-align: right; font-weight: bold;">
            ता.${formData.executionDate}.
          </p>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>लिहून घेणार</p>
            <div class="signature-line"></div>
            <p>${formData.cancellerName}</p>
          </div>
          <div class="signature-box">
            <p>लिहून देणार</p>
            <div class="signature-line"></div>
            <p>${formData.grantorName}</p>
          </div>
        </div>

        <div class="witness-section">
          <h3 class="section-title">-| साक्ष |-</h3>
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
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>// श्री //</h1>
        <h2>कुलमुखत्यारपत्र रद्द्लेख</h2>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>
          कुलमुखत्यार रद्द्लेख मोबदला रु.
          {renderInputOrText('considerationAmount', formData.considerationAmount, '50px')}/-
          [ अक्षरी रुपये {renderInputOrText('considerationAmountWords', formData.considerationAmountWords, '100px')}]
          चे जमीन. {renderInputOrText('location', formData.location, '300px')} येथील मिळकतीचे.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          आज तारीख:- {renderInputOrText('cancellationDate', formData.cancellationDate, '100px')}.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div style={{ width: '48%' }}>
          <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>लिहून घेणार</h3>
          <p>{renderInputOrText('cancellerName', formData.cancellerName, '250px')}.</p>
          <p>
            व. व.{renderInputOrText('cancellerAge', formData.cancellerAge, '40px')}, 
            व्यवसाय – {renderInputOrText('cancellerOccupation', formData.cancellerOccupation, '100px')},
          </p>
          <p>{renderInputOrText('cancellerAddress', formData.cancellerAddress, '300px')}</p>
          <p>आधार नं.- {renderInputOrText('cancellerAadhar', formData.cancellerAadhar, '150px')}.</p>
          <p>मो.नं.-{renderInputOrText('cancellerMobile', formData.cancellerMobile, '100px')}.</p>
        </div>

        <div style={{ width: '48%' }}>
          <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>लिहून देणार</h3>
          <p>{renderInputOrText('grantorName', formData.grantorName, '250px')}.</p>
          <p>
            व.व.{renderInputOrText('grantorAge', formData.grantorAge, '40px')} 
            व्यवसाय- {renderInputOrText('grantorOccupation', formData.grantorOccupation, '100px')}.
          </p>
          <p>{renderInputOrText('grantorAddress', formData.grantorAddress, '300px')}.</p>
          <p>आधार नं.-{renderInputOrText('grantorAadhar', formData.grantorAadhar, '150px')}.</p>
          <p>मो.नं. {renderInputOrText('grantorMobile', formData.grantorMobile, '100px')}.</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>
          लिहून देतो कुलमुखत्यार रद्द्लेख एसाजे की
        </h3>
        <p>
          जिल्हा तुकडी सांगली,पोट तुकडी व ता.तासगाव पैकी कसबे तासगाव येथील मिळकत.
        </p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>रि.स.नंबर</th>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>क्षेत्र हे.आर</th>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>आकार रु.पै.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #000', padding: '8px' }}>
                {renderInputOrText('surveyNumber', formData.surveyNumber, '120px')}
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
          माझा असणारा संपूर्ण हिस्सा क्षेत्र {formData.shareArea}.
        </p>
        <p style={{ marginLeft: '20px' }}>
          यासी चतुःसिमा:-<br />
          पूर्वेस - {renderInputOrText('eastBoundary', formData.eastBoundary, '250px')}.<br />
          पश्चिमेस - {renderInputOrText('westBoundary', formData.westBoundary, '250px')}.<br />
          दक्षिणेस - {renderInputOrText('southBoundary', formData.southBoundary, '250px')}.<br />
          उत्तरेस - {renderInputOrText('northBoundary', formData.northBoundary, '250px')}.
        </p>

        <p>
          सदर जमिनीचे रजिस्टर कुलमुखत्यार पत्र ता.
          {renderInputOrText('originalPoADate', formData.originalPoADate, '100px')} रोजी करून तो दस्त 
          {renderInputOrText('registrarOffice', formData.registrarOffice, '150px')} दस्त नंबर- 
          {renderInputOrText('registrationNumber', formData.registrationNumber, '100px')} ने नोंद केलेला आहे.परंतु -
        </p>
        <p style={{ marginLeft: '20px' }}>
          सदरची जमीन मी ज्या उद्देशाने कुलमुखत्यार घेतली होती तो उद्देश आता 
          {renderInputOrText('cancellationReason', formData.cancellationReason, '400px')} आपण अभयता एकमेकांचे विचारे सदरचे रजिस्टर कुलमुखत्यार आजरोजी या लेखाने रद्द करीत आहोत. सदर जमिनीचा कबजा तुमचेकडे आहे.आता माझे तुमचेकडे अगर तुमचे आमच्याकडे काहीएक येणे-देणे राहिलेले नाही.कुलमुखत्यार पत्राने निर्माण झालेल्या सर्व हक्क हितसंबंध या रद्द्लेखाने संपुष्टात आलेले आहेत. हा लिहून दिला विनामोबदला कुलमुखत्यार रद्द्लेख.
        </p>
        <p>
          रेकॉर्ड ऑफ राईट बाबत मा. नोंदणी महानिरीक्षक महाराष्ट्र राज्य पुणे यांचे कडील परिपत्रक क्र. 
          {renderInputOrText('circularNumber', formData.circularNumber, '200px')} दि. 
          {renderInputOrText('circularDate', formData.circularDate, '100px')} अन्वये दस्त नोंदणीच्या अनुषंगाने असणाऱ्या सर्व कायदेशीर तरतुदींची व त्याचे परिणामांची पूर्ण व स्पष्ट कल्पना आपल्या उभयतांना दुय्यम निबंधक अधिकारी यांनी दिलेली आहे. सबब, येथुन पूढे सदर दस्ताच्या अनुषंगाने कोणतीही कायदेशीर अडचण उदभवल्यास त्याची जबाबदारी ही दस्त लेखनिक, ओळखदार, साक्षीदार अगर दुय्यम निबंधक अधिकारी, दुय्यम निबंध कार्यालयातील कर्मचारी अगर इतर अन्य कोणाचीही असणार नाही. त्याबाबत सर्व जबाबदारी ही लिहुन देणार व लिहून घेणार यांचेवरच आहे व राहील. सही एस.डी.डाके.रा.तासगाव.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          ता.{renderInputOrText('executionDate', formData.executionDate, '100px')}.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px 0' }}>
        <div style={{ width: '45%', textAlign: 'center' }}>
          <p>लिहून घेणार</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {isPreview ? (
              formData.cancellerName
            ) : (
              <input
                type="text"
                name="cancellerName"
                value={formData.cancellerName}
                onChange={handleChange}
                style={{ ...styles.input, width: '100%', textAlign: 'center' }}
              />
            )}
          </div>
        </div>
        <div style={{ width: '45%', textAlign: 'center' }}>
          <p>लिहून देणार</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {isPreview ? (
              formData.grantorName
            ) : (
              <input
                type="text"
                name="grantorName"
                value={formData.grantorName}
                onChange={handleChange}
                style={{ ...styles.input, width: '100%', textAlign: 'center' }}
              />
            )}
          </div>
        </div>
      </div>

      <div style={{ margin: '40px 0' }}>
        <h3 style={{ textAlign: 'center', borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>-| साक्ष |-</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>१)-----------------------------------</p>
          </div>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>२)-----------------------------------</p>
          </div>
        </div>
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

export default PowerOfAttorneyCancellation;