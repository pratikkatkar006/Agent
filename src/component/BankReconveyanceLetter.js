import React, { useState } from 'react';

const BankReconveyanceLetter = () => {
  const [formData, setFormData] = useState({
    documentDate: '२०/०१/२०२५',
    propertyLocation: 'मौजे सावळज ता.तासगाव,जि.सांगली',
    location: 'सावळज',
    
    // Party 1 (Borrower) Details
    borrowerName: 'इकबाल तेली चित्तरखान',
    borrowerAge: '४७',
    borrowerOccupation: 'शेती',
    borrowerAddress: 'रा. सावळज ता.तासगाव जि.सांगली',
    borrowerMobile: '९९२११२०९७६',
    borrowerAadhar: '७०२९ ११७१ ५५५४',
    borrowerPAN: 'AIRPT1702F',
    
    // Party 2 (Bank) Details
    bankName: 'दिनकर आबा पाटील नागरी सहकारी पतसंस्था मर्यादित, वायफळे',
    representativeName: 'अक्षय शिवाजी घोडके',
    representativeOccupation: 'नोकरी',
    representativeAge: '२५',
    representativeAddress: 'रा. वायफळे ता.तासगाव जि.सांगली',
    representativeAadhar: '२१३६ ५०४५ ५५८४',
    representativePAN: 'AAAAD2527J',
    
    // Property Details
    surveyNumber: '४१८',
    totalArea: '४.४०',
    shareArea: '०हे.०२.५० आर',
    propertyNumber: '३५१६',
    
    // Loan Details
    mortgageDate: '१३/०२/२०२०',
    loanAmount: '३,५०,०००',
    loanAmountWords: 'तीन लाख पन्नास हजार मात्र',
    registrationNumber: '६१२/२०२०',
    registrarOffice: 'दुय्यम निबंधक तासगाव ता.तासगाव जि.सांगली',
    
    // Authorization Details
    resolutionNumber: '६ (२)',
    resolutionDate: '२९/११/२००२',
    executionDate: '२०/०१/२०२५'
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
        <title>बँक रिकन्व्हेन्स पत्र</title>
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
          <h2 class="title">बँक रिकन्व्हेन्स पत्र</h2>
        </div>

        <div class="section">
          <p>
            बँक रिकन्व्हेन्स पत्र ${formData.propertyLocation} येथील मिळकत.
          </p>
          <p style="text-align: right; font-weight: bold;">
            आज ता.${formData.documentDate}.
          </p>
        </div>

        <div class="party-details">
          <div class="party-column">
            <p class="party-header">लिहून घेणार</p>
            <p>${formData.borrowerName}.</p>
            <p>वय-${formData.borrowerAge} वर्षे, धंदा-${formData.borrowerOccupation}</p>
            <p>${formData.borrowerAddress}.</p>
            <p>मो.नं –${formData.borrowerMobile}.</p>
            <p>आधार नं – ${formData.borrowerAadhar}.</p>
            <p>PAN NO- ${formData.borrowerPAN}.</p>
          </div>

          <div class="party-column">
            <p class="party-header">लिहून देणार</p>
            <p>${formData.bankName}</p>
            <p>तर्फे - ${formData.representativeName}.</p>
            <p>धंदा-${formData.representativeOccupation}, वय- ${formData.representativeAge} वर्षे</p>
            <p>${formData.representativeAddress}</p>
            <p>आधार नं – ${formData.representativeAadhar}.</p>
            <p>PAN NO – ${formData.representativePAN}.</p>
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">लिहून देतो बँक रिकन्व्हेन्स पत्र कि,</h3>
          <p>
            जिल्हा तुकडी सांगली,पोट तुकडी व ता.तासगाव मौजे ${formData.location} येथील जमीन मिळकत:-
          </p>
          
          <table class="table">
            <thead>
              <tr>
                <th>सर्व्हे नंबर</th>
                <th>क्षेत्र हे.आर</th>
                <th>आकार रु.पै</th>
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
            यातील क्षेत्र ${formData.shareArea} जमीन. यामधील ग्रा.प. मिळकत नंबर ${formData.propertyNumber} याचे सह वरील मिळकत संपुर्ण.
          </p>
          <p class="indent">
            येणे प्रमाणे मिळकत तुम्ही आमचे बँकेस तारीख:- ${formData.mortgageDate}. रोजी तारण गहाण देऊन तीवर रक्कम रुपये ${formData.loanAmount}/-[अक्षरी रुपये ${formData.loanAmountWords}] चे कर्ज घेतले होते. सदरचे गहाणखत हे ${formData.registrarOffice} यांच्या समोर झाले होते त्याचा दस्त नं.- ${formData.registrationNumber} असा आहे.
          </p>
          <p class="indent">
            त्या संपूर्ण कर्जाची सव्याज परत फेड तुम्ही आजरोजी केलेली आहे. सबब आता तुम्ही आमचे बँकचे कोणत्याही प्रकारचे देणे बाकी राहिला नाहीत. सदर मिळकत तुमचेच कब्जात आहे. तरी सदर रिकन्व्हेन्स पत्राने तुम्ही रेकॉर्ड वरील आमचे बँकेचे नाव रीतसर कमी करून घेऊन मर्जीप्रमाणे वहीवाट, विल्हेवाट करावी आता सदर मिळकतीवर आमचा कोणत्याही प्रकारचा हक्क संबध राहिला नाही.
          </p>
          <p>
            प्रस्तुतचा दस्त पुरा करून देणेचा अधिकार बँकेचा सं.मं.ठ. नं. ${formData.resolutionNumber} दि ${formData.resolutionDate} प्रमाणे दस्त लिहून देणार यांना प्राप्त झालेला आहे. व त्याआधारे रिकन्व्हेन्सपत्र लिहून पुरे करून दिले आहे. म्हणून लिहून दिले बँक रिकन्व्हेन्स पत्र सही. एस.डी.डाके रा.तासगाव.
          </p>
          <p style="text-align: right; font-weight: bold;">
            आज तारीख:-${formData.executionDate}.
          </p>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>लिहून घेणार</p>
            <div class="signature-line"></div>
            <p>${formData.borrowerName}</p>
          </div>
          <div class="signature-box">
            <p>लिहून देणार /बँक</p>
            <div class="signature-line"></div>
            <p>${formData.bankName}</p>
            <p>तर्फे - ${formData.representativeName}</p>
          </div>
        </div>

        <div class="witness-section">
          <h3 class="section-title">साक्ष</h3>
          <div class="witness-boxes">
            <div class="witness-box">
              <p>१]---------------------------------</p>
            </div>
            <div class="witness-box">
              <p>२]-----------------------------------</p>
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
        <h2>बँक रिकन्व्हेन्स पत्र</h2>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>
          बँक रिकन्व्हेन्स पत्र {renderInputOrText('propertyLocation', formData.propertyLocation, '300px')} येथील मिळकत.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          आज ता.{renderInputOrText('documentDate', formData.documentDate, '100px')}.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div style={{ width: '48%' }}>
          <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>लिहून घेणार</h3>
          <p>{renderInputOrText('borrowerName', formData.borrowerName, '250px')}.</p>
          <p>
            वय-{renderInputOrText('borrowerAge', formData.borrowerAge, '40px')} वर्षे, 
            धंदा-{renderInputOrText('borrowerOccupation', formData.borrowerOccupation, '100px')}
          </p>
          <p>{renderInputOrText('borrowerAddress', formData.borrowerAddress, '300px')}.</p>
          <p>मो.नं –{renderInputOrText('borrowerMobile', formData.borrowerMobile, '100px')}.</p>
          <p>आधार नं – {renderInputOrText('borrowerAadhar', formData.borrowerAadhar, '150px')}.</p>
          <p>PAN NO- {renderInputOrText('borrowerPAN', formData.borrowerPAN, '120px')}.</p>
        </div>

        <div style={{ width: '48%' }}>
          <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>लिहून देणार</h3>
          <p>{renderInputOrText('bankName', formData.bankName, '300px')}</p>
          <p>
            तर्फे - {renderInputOrText('representativeName', formData.representativeName, '200px')}.
          </p>
          <p>
            धंदा-{renderInputOrText('representativeOccupation', formData.representativeOccupation, '100px')}, 
            वय- {renderInputOrText('representativeAge', formData.representativeAge, '40px')} वर्षे
          </p>
          <p>{renderInputOrText('representativeAddress', formData.representativeAddress, '300px')}</p>
          <p>आधार नं – {renderInputOrText('representativeAadhar', formData.representativeAadhar, '150px')}.</p>
          <p>PAN NO – {renderInputOrText('representativePAN', formData.representativePAN, '120px')}.</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>
          लिहून देतो बँक रिकन्व्हेन्स पत्र कि,
        </h3>
        <p>
          जिल्हा तुकडी सांगली,पोट तुकडी व ता.तासगाव मौजे {renderInputOrText('location',formData.location,'100px')} येथील जमीन मिळकत:-
        </p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>सर्व्हे नंबर</th>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>क्षेत्र हे.आर</th>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>आकार रु.पै</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #000', padding: '8px' }}>
                {renderInputOrText('surveyNumber', formData.surveyNumber, '100px')}
              </td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>
                {renderInputOrText('totalArea', formData.totalArea, '80px')}
              </td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>
                {renderInputOrText('shareArea', formData.shareArea, '120px')}
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginLeft: '20px' }}>
          यातील क्षेत्र {formData.shareArea} जमीन. यामधील ग्रा.प. मिळकत नंबर 
          {renderInputOrText('propertyNumber', formData.propertyNumber, '80px')} याचे सह वरील मिळकत संपुर्ण.
        </p>
        <p style={{ marginLeft: '20px' }}>
          येणे प्रमाणे मिळकत तुम्ही आमचे बँकेस तारीख:- 
          {renderInputOrText('mortgageDate', formData.mortgageDate, '100px')}. रोजी तारण गहाण देऊन तीवर रक्कम रुपये 
          {renderInputOrText('loanAmount', formData.loanAmount, '100px')}/-[अक्षरी रुपये 
          {renderInputOrText('loanAmountWords', formData.loanAmountWords, '200px')}] चे कर्ज घेतले होते. सदरचे गहाणखत हे 
          {renderInputOrText('registrarOffice', formData.registrarOffice, '300px')} यांच्या समोर झाले होते त्याचा दस्त नं.- 
          {renderInputOrText('registrationNumber', formData.registrationNumber, '100px')} असा आहे.
        </p>
        <p style={{ marginLeft: '20px' }}>
          त्या संपूर्ण कर्जाची सव्याज परत फेड तुम्ही आजरोजी केलेली आहे. सबब आता तुम्ही आमचे बँकचे कोणत्याही प्रकारचे देणे बाकी राहिला नाहीत. सदर मिळकत तुमचेच कब्जात आहे. तरी सदर रिकन्व्हेन्स पत्राने तुम्ही रेकॉर्ड वरील आमचे बँकेचे नाव रीतसर कमी करून घेऊन मर्जीप्रमाणे वहीवाट, विल्हेवाट करावी आता सदर मिळकतीवर आमचा कोणत्याही प्रकारचा हक्क संबध राहिला नाही.
        </p>
        <p>
          प्रस्तुतचा दस्त पुरा करून देणेचा अधिकार बँकेचा सं.मं.ठ. नं. 
          {renderInputOrText('resolutionNumber', formData.resolutionNumber, '50px')} दि 
          {renderInputOrText('resolutionDate', formData.resolutionDate, '100px')} प्रमाणे दस्त लिहून देणार यांना प्राप्त झालेला आहे. व त्याआधारे रिकन्व्हेन्सपत्र लिहून पुरे करून दिले आहे. म्हणून लिहून दिले बँक रिकन्व्हेन्स पत्र सही. एस.डी.डाके रा.तासगाव.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          आज तारीख:-{renderInputOrText('executionDate', formData.executionDate, '100px')}.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px 0' }}>
        <div style={{ width: '45%', textAlign: 'center' }}>
          <p>लिहून घेणार</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {isPreview ? (
              formData.borrowerName
            ) : (
              <input
                type="text"
                name="borrowerName"
                value={formData.borrowerName}
                onChange={handleChange}
                style={{ ...styles.input, width: '100%', textAlign: 'center' }}
              />
            )}
          </div>
        </div>
        <div style={{ width: '45%', textAlign: 'center' }}>
          <p>लिहून देणार /बँक</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {isPreview ? (
              <>
                {formData.bankName}
                <br />
                तर्फे - {formData.representativeName}
              </>
            ) : (
              <>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  style={{ ...styles.input, width: '100%', textAlign: 'center' }}
                />
                <br />
                तर्फे -{' '}
                <input
                  type="text"
                  name="representativeName"
                  value={formData.representativeName}
                  onChange={handleChange}
                  style={{ ...styles.input, width: '80%', textAlign: 'center' }}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div style={{ margin: '40px 0' }}>
        <h3 style={{ textAlign: 'center', borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>साक्ष</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>१]---------------------------------</p>
          </div>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>२]-----------------------------------</p>
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

export default BankReconveyanceLetter;