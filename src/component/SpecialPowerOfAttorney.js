import React, { useState } from 'react';

const SpecialPowerOfAttorney = () => {
  const [formData, setFormData] = useState({
    documentDate: ' / ०१/२०२५',
    propertyLocation: 'जिल्हा सांगली, तालुका व पोट तुकडी तासगाव पैकी, जिल्हा परिषद सांगली पंचायत समिती तासगाव कक्षेतील कसबे तासगाव येथील मिळकत',
     
    // Party 1 (Grantee) Details
    granteeName: 'दीपक नारायण पाटील',
    granteeAge: '५०',
    granteeOccupation: 'शेती',
    granteeAddress: 'रा.चिंचणी ता.तासगाव जि.सांगली',
    granteeAadhar: '३८४३ ९७१० ३२८८',
    granteeMobile: '९९६०१३१५१६',
    granteePAN: 'DBUPP8327R',
    
    // Party 2 (Grantors) Details
    grantor1Name: 'श्री.नारायण मारुती पाटील',
    grantor1Age: '७०',
    grantor1Occupation: 'शेती',
    grantor1Address: 'रा.चिंचणी ता.तासगांव, जि.सांगली',
    grantor1Aadhar: '२९५२ १७८१ २२३०',
    grantor1Mobile: '९४२३२७३००३',
    
    grantor2Name: 'श्री.शितल मल्लीकार्जुन खेराडकर',
    grantor2Age: '४०',
    grantor2Occupation: 'शेती',
    grantor2Address: 'रा.तासगाव ता.तासगांव, जि.सांगली',
    grantor2Aadhar: '२८६५ ८३६१ ९६२५',
    grantor2Mobile: '९९२२२३०९००',
    
    // Property Details
    surveyNumber: '४८५/२/ब/१/२/अ/२/अ',
    totalArea: '१.७९',
    shareArea: '३.००',
    shareDescription: 'माझा निर्माण होणारा हक्क हिस्सा संपूर्ण',
    executionDate: ' /०१/२०२५'
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
        <title>विशेष कुलमुखत्यारपत्र</title>
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
          <h1 class="title">// विशेष कुलमुखत्यारपत्र //</h1>
        </div>

        <div class="section">
          <p>
            कबुली जबाबासाठीचे विनामोबदला विशेष कुलमुखत्यारपत्र ${formData.propertyLocation}.
          </p>
          <p style="text-align: right; font-weight: bold;">
            आज दिनांक:- ${formData.documentDate}.
          </p>
        </div>

        <div class="party-details">
          <div class="party-column">
            <p class="party-header">लिहून घेणार</p>
            <p>${formData.granteeName}.</p>
            <p>व. व.${formData.granteeAge},व्यवसाय – ${formData.granteeOccupation},</p>
            <p>${formData.granteeAddress}</p>
            <p>आधार नं.${formData.granteeAadhar}.</p>
            <p>मो.नं.${formData.granteeMobile}</p>
            <p>PAN NO – ${formData.granteePAN}.</p>

             <div class="party-column">
            <p class="party-header">लिहून देणार</p>
            <p>१) ${formData.grantor1Name}.</p>
            <p>व. व.${formData.grantor1Age}, व्यवसाय – ${formData.grantor1Occupation}</p>
            <p>${formData.grantor1Address}.</p>
            <p>आधार नं.${formData.grantor1Aadhar}.</p>
            <p>मो.नं.${formData.grantor1Mobile}.</p>
            
            <p>२) ${formData.grantor2Name}.</p>
            <p>व. व.${formData.grantor2Age}, व्यवसाय – ${formData.grantor2Occupation}</p>
            <p>${formData.grantor2Address}.</p>
            <p>आधार नं.${formData.grantor2Aadhar}.</p>
            <p>मो.नं.${formData.grantor2Mobile}.</p>
          </div>
          </div>

         
        </div>

        <div class="section">
          <h3 class="section-title">लिहून देतो कुलमुखत्यारपत्र ऐेसाजे की- विनामोबदला विशेष कुलमुखत्यारपत्र ${formData.propertyLocation}.</h3>
          <p>मिळकत वर्णन:-</p>
          
          <table class="table">
            <thead>
              <tr>
                <th>रि.स.नंबर</th>
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

          <p>
            ${formData.shareDescription}.
          </p>
          <p>
            येणेप्रमाणे वरील मिळकत या माझे मालकीच्या व प्रत्यक्ष कब्जा वहिवाटीच्या होत्या व आहेत. मी माझ्या कामाचे व्यापामुळे तुम्हांस या विशेष कुलमुखत्यारपत्राने नेमले आहे त्याचे अधिकार पुढीलप्रमाणे.
          </p>
          <p>
            वरील मिळकतीचे कोणत्याही प्रकारचे बदलाचे व्यवहार म्हणजेच साठेखत, कुलमुखत्यारपत्र , खरेदीपत्र, चुकदुरुस्तीलेख , पुरवणी लेख ,हक्कसोडपत्र, तारणगहाणखत करणे , रद्दलेख करणे , मिळकत खरेदी करण्यासाठी सक्षम अधिकारी यांची परवानगी घेणे या रजि.दस्तावर आम्ही सहया अंगठे करुन सदरचा दस्त निष्पादीत करून तो निष्पादीत केलेला दस्त, तासगाव स.र.कचेरीत जावुन माझ्या वतीने कबुलीजबाब देवून सहया ,अंगठे करून तो दस्त नोंदवुन देणे, मुळ दस्त परत घेणे, पावती घेणे इ. सर्व ती कामे करणे.
          </p>
          <p>
            वरील सर्व कामे करणेकरीता मी जर प्रत्यक्षात हजर असतो तर मला जी जी कामे करावी लागली असती ती सर्व कामे करणेसाठी मी तुम्हांस या कुलमुखत्यापत्राने विनातक्रार नेमले व पसंत केले आहे. सदर मिळकती बाबत कोणत्याही प्रकारे वाद उद्भाव्लेस हरकत आलेस त्याची सर्व जबाबदारी आमची राहील.त्याची तोशीष दु.नि.व दस्तलेखनिक यांना लागू देणार नाही.
          </p>
          <p>
            म्हणून लिहून दिले कुलमुखत्यारपत्र सही श्री.एस.डी.डाके रा.तासगाव.
          </p>
          <p style="text-align: right; font-weight: bold;">
            दि:- ${formData.executionDate}.
          </p>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>लिहून घेणार</p>
            <div class="signature-line"></div>
            <p>${formData.granteeName}</p>
          </div>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>लिहून देणार</p>
            <div class="signature-line"></div>
            <p>१) ${formData.grantor1Name}</p>
          </div>
          <div class="signature-box">
            <p>लिहून देणार</p>
            <div class="signature-line"></div>
            <p>२) ${formData.grantor2Name}</p>
          </div>
        </div>

        <div class="witness-section">
          <h3 class="section-title">साक्षिदार</h3>
          <div class="witness-boxes">
            <div class="witness-box">
              <p>१]--------------------------------------</p>
            </div>
            <div class="witness-box">
              <p>२]--------------------------------------</p>
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
        <h1>// विशेष कुलमुखत्यारपत्र //</h1>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>
          कबुली जबाबासाठीचे विनामोबदला विशेष कुलमुखत्यारपत्र 
          {renderInputOrText('propertyLocation', formData.propertyLocation, '500px')}.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          आज दिनांक:- {renderInputOrText('documentDate', formData.documentDate, '120px')}.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div style={{ width: '48%' }}>
          <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>लिहून घेणार</h3>
          <p>{renderInputOrText('granteeName', formData.granteeName, '250px')}.</p>
          <p>
            व. व.{renderInputOrText('granteeAge', formData.granteeAge, '40px')},
            व्यवसाय – {renderInputOrText('granteeOccupation', formData.granteeOccupation, '100px')},
          </p>
          <p>{renderInputOrText('granteeAddress', formData.granteeAddress, '300px')}</p>
          <p>आधार नं.{renderInputOrText('granteeAadhar', formData.granteeAadhar, '150px')}.</p>
          <p>मो.नं.{renderInputOrText('granteeMobile', formData.granteeMobile, '100px')}</p>
          <p>PAN NO – {renderInputOrText('granteePAN', formData.granteePAN, '120px')}.</p>
        </div>

        <div style={{ width: '48%' }}>
          <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>लिहून देणार</h3>
          
          <p>१) {renderInputOrText('grantor1Name', formData.grantor1Name, '250px')}.</p>
          <p>
            व. व.{renderInputOrText('grantor1Age', formData.grantor1Age, '40px')}, 
            व्यवसाय – {renderInputOrText('grantor1Occupation', formData.grantor1Occupation, '100px')}
          </p>
          <p>{renderInputOrText('grantor1Address', formData.grantor1Address, '300px')}.</p>
          <p>आधार नं.{renderInputOrText('grantor1Aadhar', formData.grantor1Aadhar, '150px')}.</p>
          <p>मो.नं.{renderInputOrText('grantor1Mobile', formData.grantor1Mobile, '100px')}.</p>
          
          <p>२) {renderInputOrText('grantor2Name', formData.grantor2Name, '250px')}.</p>
          <p>
            व. व.{renderInputOrText('grantor2Age', formData.grantor2Age, '40px')}, 
            व्यवसाय – {renderInputOrText('grantor2Occupation', formData.grantor2Occupation, '100px')}
          </p>
          <p>{renderInputOrText('grantor2Address', formData.grantor2Address, '300px')}.</p>
          <p>आधार नं.{renderInputOrText('grantor2Aadhar', formData.grantor2Aadhar, '150px')}.</p>
          <p>मो.नं.{renderInputOrText('grantor2Mobile', formData.grantor2Mobile, '100px')}.</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>
          लिहून देतो कुलमुखत्यारपत्र ऐेसाजे की- विनामोबदला विशेष कुलमुखत्यारपत्र {formData.propertyLocation}.
        </h3>
        <p>मिळकत वर्णन:-</p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>रि.स.नंबर</th>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>क्षेत्र हे.आर</th>
              <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>आकार रु.पै</th>
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
                {renderInputOrText('shareArea', formData.shareArea, '80px')}
              </td>
            </tr>
          </tbody>
        </table>

        <p>
          {renderInputOrText('shareDescription', formData.shareDescription, '400px')}.
        </p>
        <p>
          येणेप्रमाणे वरील मिळकत या माझे मालकीच्या व प्रत्यक्ष कब्जा वहिवाटीच्या होत्या व आहेत. मी माझ्या कामाचे व्यापामुळे तुम्हांस या विशेष कुलमुखत्यारपत्राने नेमले आहे त्याचे अधिकार पुढीलप्रमाणे.
        </p>
        <p>
          वरील मिळकतीचे कोणत्याही प्रकारचे बदलाचे व्यवहार म्हणजेच साठेखत, कुलमुखत्यारपत्र , खरेदीपत्र, चुकदुरुस्तीलेख , पुरवणी लेख ,हक्कसोडपत्र, तारणगहाणखत करणे , रद्दलेख करणे , मिळकत खरेदी करण्यासाठी सक्षम अधिकारी यांची परवानगी घेणे या रजि.दस्तावर आम्ही सहया अंगठे करुन सदरचा दस्त निष्पादीत करून तो निष्पादीत केलेला दस्त, तासगाव स.र.कचेरीत जावुन माझ्या वतीने कबुलीजबाब देवून सहया ,अंगठे करून तो दस्त नोंदवुन देणे, मुळ दस्त परत घेणे, पावती घेणे इ. सर्व ती कामे करणे.
        </p>
        <p>
          वरील सर्व कामे करणेकरीता मी जर प्रत्यक्षात हजर असतो तर मला जी जी कामे करावी लागली असती ती सर्व कामे करणेसाठी मी तुम्हांस या कुलमुखत्यापत्राने विनातक्रार नेमले व पसंत केले आहे. सदर मिळकती बाबत कोणत्याही प्रकारे वाद उद्भाव्लेस हरकत आलेस त्याची सर्व जबाबदारी आमची राहील.त्याची तोशीष दु.नि.व दस्तलेखनिक यांना लागू देणार नाही.
        </p>
        <p>
          म्हणून लिहून दिले कुलमुखत्यारपत्र सही श्री.एस.डी.डाके रा.तासगाव.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          दि:- {renderInputOrText('executionDate', formData.executionDate, '120px')}.
        </p>
      </div>

      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <p>लिहून घेणार</p>
        <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
          {isPreview ? (
            formData.granteeName
          ) : (
            <input
              type="text"
              name="granteeName"
              value={formData.granteeName}
              onChange={handleChange}
              style={{ ...styles.input, width: '100%', textAlign: 'center' }}
            />
          )}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px 0' }}>
        <div style={{ width: '45%', textAlign: 'center' }}>
          <p>लिहून देणार</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {isPreview ? (
              `१) ${formData.grantor1Name}`
            ) : (
              <>
                <span>१) </span>
                <input
                  type="text"
                  name="grantor1Name"
                  value={formData.grantor1Name}
                  onChange={handleChange}
                  style={{ ...styles.input, width: '90%', textAlign: 'center' }}
                />
              </>
            )}
          </div>
        </div>
        <div style={{ width: '45%', textAlign: 'center' }}>
          <p>लिहून देणार</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {isPreview ? (
              `२) ${formData.grantor2Name}`
            ) : (
              <>
                <span>२) </span>
                <input
                  type="text"
                  name="grantor2Name"
                  value={formData.grantor2Name}
                  onChange={handleChange}
                  style={{ ...styles.input, width: '90%', textAlign: 'center' }}
                />
              </>
            )}
          </div>
        </div>
      </div>

      <div style={{ margin: '40px 0' }}>
        <h3 style={{ textAlign: 'center', borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>साक्षिदार</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>१]--------------------------------------</p>
          </div>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>२]--------------------------------------</p>
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

export default SpecialPowerOfAttorney;