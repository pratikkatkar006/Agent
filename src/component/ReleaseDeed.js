import React, { useState } from 'react';

const ReleaseDeed = () => {
  const [formData, setFormData] = useState({
    documentDate: '२२/०५/२०२५',
    // Releasor (लिहून देणार)
    releasorName: 'अनिता बाळासाहेब शिंदे',
    releasorAge: '५७',
    releasorOccupation: 'शेती/घरकाम',
    releasorAddress: 'रा.शिरगाव विसापूर ता.तासगाव जि.सांगली',
    releasorMobile: '८९७५६८९६६०',
    releasorAadhar: '७६८१ ७१८६ ११२२',

    info: 'लिहून देणार यांची लिहून घेणार सख्खा भाऊ आहे.',
    
    // Releasee (लिहून घेणार)
    releaseeName: 'जगन्नाथ हिंदुराव कळसे पाटील',
    releaseeAge: '५८',
    releaseeOccupation: 'शेती',
    releaseeAddress: 'रा.इंद्रायणी नगर,पुणे शहर ४११०२६',
    releaseeCurrentAddress: 'आज मुक्काम तासगाव जि.सांगली',
    releaseeMobile: '९७६५५६००७८',
    releaseeAadhar: '९६५६ ७६४९ १२२४',
    
    // Property Details
    propertyLocation: 'मौजे शिरगाव विसापूर ता.तासगाव जि.सांगली',
    surveyNumber1: '२७५',
    area1: '२.४६',
    value1: '१७.५०',
    surveyNumber2: '५५६',
    area2: '८.५०',
    subDivision: '०.०६',
    totalArea: '८.५६',
    totalValue: '२७.१२',
    surveyNumber3: '५५७',
    area3: '१.१७',
    value3: '३.७५',
    surveyNumber4: '२३६',
    area4: '०.४१',
    value4: '३.०६',
    
    // Terms
    executionDate: '२२/०५/२०२५'
  });

  const [isPreview, setIsPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePreview = () => setIsPreview(!isPreview);

  const printDocument = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>हक्कसोड पत्र</title>
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
          .party-details { display: flex; justify-content: center; }
          .party-column { width: 48%; }
          .signature-section { display: flex; justify-content: space-between; margin: 40px 0; }
          .signature-box { width: 45%; text-align: center; }
          .signature-line { border-top: 1px solid #000; width: 80%; margin: 0 auto; padding-top: 50px; }
          .witness-section { margin-top: 60px; }
          .witness-boxes { display: flex; justify-content: space-between; }
          .witness-box { width: 45%; text-align: center; }
          .table { width: 100%; border-collapse: collapse; margin: 15px 0; }
          .table th, .table td { border: 1px solid #000; padding: 8px; text-align: left; }
          .table th { background-color: #f0f0f0; }
          .indent { margin-left: 30px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="title">// श्री //</h1>
          <h2 class="title">हक्कसोड पत्र</h2>
        </div>

        <div class="section">
          <p>विनामोबदला हक्कसोड पैकी ${formData.propertyLocation} येथील जमीन मिळकत.</p>
          <p style="text-align: right; font-weight: bold;">आज ता. ${formData.documentDate}.</p>
        </div>

        <div class="party-details">
          <div class="party-column">
            <p class="section-title">लिहून घेणार</p>
            <p>${formData.releaseeName}.</p>
            <p>व.व. ${formData.releaseeAge}, व्यवसाय- ${formData.releaseeOccupation}</p>
            <p>${formData.releaseeAddress}.</p>
            <p>आज मुक्काम ${formData.releaseeCurrentAddress}.</p>
            <p>आधार नं.- ${formData.releaseeAadhar}</p>
            <p>मो.नं.- ${formData.releaseeMobile}</p>
          
        
            <p class="section-title">लिहून देणार</p>
            <p>${formData.releasorName}.</p>
            <p>व.व. ${formData.releasorAge}, व्यवसाय- ${formData.releasorOccupation}</p>
            <p>${formData.releasorAddress}.</p>
            <p>आधार नं.- ${formData.releasorAadhar}</p>
            <p>मो.नं.- ${formData.releasorMobile}</p>
          </div>
        </div>

        <div class="section">
          <p>लिहून देतो विनामोबदला हक्कसोड पत्र कि, जिल्हा तुकडी सांगली,पोट तुकडी व ता.तासगाव पैकी ${formData.propertyLocation} येथील जमीन मिळकतीचे :-</p>
          
          <h3 class="section-title">मिळकत वर्णन:-</h3>
          <table class="table">
            <thead>
              <tr>
                <th>अनु.क्र</th>
                <th>गट नंबर</th>
                <th>क्षेत्र हे.आर</th>
                <th>आकार रु.पै</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>१)</td>
                <td>${formData.surveyNumber1}</td>
                <td>${formData.area1}</td>
                <td>${formData.value1}</td>
              </tr>
              <tr>
                <td>२)</td>
                <td>${formData.surveyNumber2}</td>
                <td>${formData.area2}</td>
                <td>${formData.totalValue}</td>
              </tr>
              <tr>
                <td colspan="3">पोट ख ${formData.subDivision}</td>
                <td>एकूण क्षेत्र ${formData.totalArea}</td>
              </tr>
              <tr>
                <td>३)</td>
                <td>${formData.surveyNumber3}</td>
                <td>${formData.area3}</td>
                <td>${formData.value3}</td>
              </tr>
              <tr>
                <td>४)</td>
                <td>${formData.surveyNumber4}</td>
                <td>${formData.area4}</td>
                <td>${formData.value4}</td>
              </tr>
            </tbody>
          </table>

          <p class="indent">यातील माझा निर्माण झालेला हक्क हिस्सा संपूर्ण.</p>
          <p class="indent">
            येणेप्रमाणे मिळकत ही आपले वडिलार्जित वारस मालकी हक्क वाहिवाटीची आहे.व सदर ७/१२ रेकॉर्ड सदरी माझ्या नावाची नोंद झाली 
            असून ${formData.info} सबब सदर मिळकतीत वारस या नात्याने माझा हक्क, हिस्सा निर्माण होत आहे. 
            सबब सदर मिळकतीमध्ये माझा निर्माण होणारा संपूर्ण हक्क, हिस्सा मी तुमचे लाभात विना मोबदला विनातक्रार रिलीज करून दिला आहे. 
            सदर मिळकत सध्या तुमचेच कब्जात आहे. तरी तुम्ही सदर मिळकतीची आजपासून निरंतर मालकीने कशी पाहिजे तशी वहिवाट अगर विल्हेवाट करावी. 
            त्यास माझी अगर माझ्या वाली वारस यांचा कोणताही हक्क संबंध राहिला नाही अगर राहणार नाही.
          </p>
          <p class="indent">
            सदर हक्कसोड या दस्ताची तुम्ही ७/१२ रेकॉर्ड सदरी नोंद करून घ्यावी व माझे नाव रीतसर कमी करून घ्यावे. त्यासाठी लागणारे सह्या, 
            अंगठे, जाब-जबाब, हे मी तुम्हास विना मोबदला विना तक्रार देऊ.
          </p>
          <p class="indent">
            रेकॉर्ड ऑफ राईट बाबत मा. नोंदणी महानिरीक्षक महाराष्ट्र राज्य पुणे यांचे कडील परिपत्रक क्र. का ३ / प्रशासक / ४३०९ / ४६६८ 
            दि. ९/१२/९१ अन्वये सदर मिळकतीबाबत वाद विवाद अगर हरकत आल्यास अथवा शासकीय वाद उदभवल्यास त्याची तोषीस दुय्यम निबंधक व 
            दस्तलेखनिक यांना लागू देणार नाही. त्याची सर्वस्वी जबाबदारी लिहून देणार व लिहून घेणार यांची राहील.
          </p>
          <p style="text-align: right; font-weight: bold;">सही एस.डी.डाके.रा.तासगाव.</p>
          <p style="text-align: right; font-weight: bold;">आज ता. ${formData.executionDate}</p>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>लिहून घेणार</p>
            <div class="signature-line"></div>
            <p>${formData.releaseeName}</p>
          </div>
          <div class="signature-box">
            <p>लिहून देणार</p>
            <div class="signature-line"></div>
            <p>${formData.releasorName}</p>
          </div>
        </div>

        <div class="witness-section">
          <h3 class="section-title">// साक्षिदार //</h3>
          <div class="witness-boxes">
            <div class="witness-box">
              <p>१. ------------------------------</p>
              <div class="signature-line"></div>
            </div>
            <div class="witness-box">
              <p>२. ------------------------------</p>
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

  // Helper function to render input or text based on preview mode
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
    },
    section: {
      marginBottom: '25px'
    },
    sectionTitle: {
      fontWeight: 'bold',
      borderBottom: '1px solid #8b4513',
      paddingBottom: '5px',
      marginBottom: '10px'
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
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      margin: '15px 0'
    },
    tableCell: {
      border: '1px solid #000',
      padding: '8px',
      textAlign: 'left'
    },
    tableHeader: {
      backgroundColor: '#f0f0f0'
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
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>// श्री //</h1>
        <h2>हक्कसोड पत्र</h2>
      </div>

      <div style={styles.section}>
        <p>
          विनामोबदला हक्कसोड पैकी 
          {renderInputOrText('propertyLocation', formData.propertyLocation, '350px')} 
          येथील जमीन मिळकत.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          आज ता. {renderInputOrText('documentDate', formData.documentDate, '100px')}.
        </p>
      </div>

      <div style={styles.partyContainer}>
        <div style={styles.partyColumn}>
          <h3 style={styles.sectionTitle}>लिहून घेणार</h3>
          <p>{renderInputOrText('releaseeName', formData.releaseeName, '250px')}.</p>
          <p>
            व.व. {renderInputOrText('releaseeAge', formData.releaseeAge, '40px')}, 
            व्यवसाय- {renderInputOrText('releaseeOccupation', formData.releaseeOccupation, '100px')}
          </p>
          <p>{renderInputOrText('releaseeAddress', formData.releaseeAddress, '300px')}.</p>
          <p>आज मुक्काम {renderInputOrText('releaseeCurrentAddress', formData.releaseeCurrentAddress, '250px')}.</p>
          <p>आधार नं.- {renderInputOrText('releaseeAadhar', formData.releaseeAadhar, '150px')}</p>
          <p>मो.नं.- {renderInputOrText('releaseeMobile', formData.releaseeMobile, '120px')}</p>
        </div>

        <div style={styles.partyColumn}>
          <h3 style={styles.sectionTitle}>लिहून देणार</h3>
          <p>{renderInputOrText('releasorName', formData.releasorName, '250px')}.</p>
          <p>
            व.व. {renderInputOrText('releasorAge', formData.releasorAge, '40px')}, 
            व्यवसाय- {renderInputOrText('releasorOccupation', formData.releasorOccupation, '100px')}
          </p>
          <p>{renderInputOrText('releasorAddress', formData.releasorAddress, '300px')}.</p>
          <p>आधार नं.- {renderInputOrText('releasorAadhar', formData.releasorAadhar, '150px')}</p>
          <p>मो.नं.- {renderInputOrText('releasorMobile', formData.releasorMobile, '120px')}</p>
        </div>
      </div>

      <div style={styles.section}>
        <p>
          लिहून देतो विनामोबदला हक्कसोड पत्र कि, जिल्हा तुकडी सांगली,पोट तुकडी व ता.तासगाव पैकी 
          {renderInputOrText('propertyLocation', formData.propertyLocation, '350px')} 
          येथील जमीन मिळकतीचे :-
        </p>
        
        <h3 style={styles.sectionTitle}>मिळकत वर्णन:-</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={{...styles.tableCell, ...styles.tableHeader}}>अनु.क्र</th>
              <th style={{...styles.tableCell, ...styles.tableHeader}}>गट नंबर</th>
              <th style={{...styles.tableCell, ...styles.tableHeader}}>क्षेत्र हे.आर</th>
              <th style={{...styles.tableCell, ...styles.tableHeader}}>आकार रु.पै</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableCell}>१)</td>
              <td style={styles.tableCell}>{renderInputOrText('surveyNumber1', formData.surveyNumber1, '50px')}</td>
              <td style={styles.tableCell}>{renderInputOrText('area1', formData.area1, '50px')}</td>
              <td style={styles.tableCell}>{renderInputOrText('value1', formData.value1, '50px')}</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>२)</td>
              <td style={styles.tableCell}>{renderInputOrText('surveyNumber2', formData.surveyNumber2, '50px')}</td>
              <td style={styles.tableCell}>{renderInputOrText('area2', formData.area2, '50px')}</td>
              <td style={styles.tableCell}>{renderInputOrText('totalValue', formData.totalValue, '50px')}</td>
            </tr>
            <tr>
              <td colSpan="3" style={styles.tableCell}>
                पोट ख {renderInputOrText('subDivision', formData.subDivision, '50px')}
              </td>
              <td style={styles.tableCell}>
                एकूण क्षेत्र {renderInputOrText('totalArea', formData.totalArea, '50px')}
              </td>
            </tr>
            <tr>
              <td style={styles.tableCell}>३)</td>
              <td style={styles.tableCell}>{renderInputOrText('surveyNumber3', formData.surveyNumber3, '50px')}</td>
              <td style={styles.tableCell}>{renderInputOrText('area3', formData.area3, '50px')}</td>
              <td style={styles.tableCell}>{renderInputOrText('value3', formData.value3, '50px')}</td>
            </tr>
            <tr>
              <td style={styles.tableCell}>४)</td>
              <td style={styles.tableCell}>{renderInputOrText('surveyNumber4', formData.surveyNumber4, '50px')}</td>
              <td style={styles.tableCell}>{renderInputOrText('area4', formData.area4, '50px')}</td>
              <td style={styles.tableCell}>{renderInputOrText('value4', formData.value4, '50px')}</td>
            </tr>
          </tbody>
        </table>

        <p style={{ marginLeft: '20px' }}>यातील माझा निर्माण झालेला हक्क हिस्सा संपूर्ण.</p>
        <p style={{ marginLeft: '20px' }}>
          येणेप्रमाणे मिळकत ही आपले वडिलार्जित वारस मालकी हक्क वाहिवाटीची आहे.व सदर ७/१२ रेकॉर्ड सदरी माझ्या नावाची नोंद झाली 
          असून {renderInputOrText('info', formData.info, '250px')} सबब सदर मिळकतीत वारस या नात्याने माझा हक्क, हिस्सा निर्माण होत आहे. 
          सबब सदर मिळकतीमध्ये माझा निर्माण होणारा संपूर्ण हक्क, हिस्सा मी तुमचे लाभात विना मोबदला विनातक्रार रिलीज करून दिला आहे. 
          सदर मिळकत सध्या तुमचेच कब्जात आहे. तरी तुम्ही सदर मिळकतीची आजपासून निरंतर मालकीने कशी पाहिजे तशी वहिवाट अगर विल्हेवाट करावी. 
          त्यास माझी अगर माझ्या वाली वारस यांचा कोणताही हक्क संबंध राहिला नाही अगर राहणार नाही.
        </p>
        <p style={{ marginLeft: '20px' }}>
          सदर हक्कसोड या दस्ताची तुम्ही ७/१२ रेकॉर्ड सदरी नोंद करून घ्यावी व माझे नाव रीतसर कमी करून घ्यावे. त्यासाठी लागणारे सह्या, 
          अंगठे, जाब-जबाब, हे मी तुम्हास विना मोबदला विना तक्रार देऊ.
        </p>
        <p style={{ marginLeft: '20px' }}>
          रेकॉर्ड ऑफ राईट बाबत मा. नोंदणी महानिरीक्षक महाराष्ट्र राज्य पुणे यांचे कडील परिपत्रक क्र. का ३ / प्रशासक / ४३०९ / ४६६८ 
          दि. ९/१२/९१ अन्वये सदर मिळकतीबाबत वाद विवाद अगर हरकत आल्यास अथवा शासकीय वाद उदभवल्यास त्याची तोषीस दुय्यम निबंधक व 
          दस्तलेखनिक यांना लागू देणार नाही. त्याची सर्वस्वी जबाबदारी लिहून देणार व लिहून घेणार यांची राहील.
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>सही एस.डी.डाके.रा.तासगाव.</p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          आज ता. {renderInputOrText('executionDate', formData.executionDate, '100px')}
        </p>
      </div>

      <div style={styles.signatureSection}>
        <div style={styles.signatureBox}>
          <p>लिहून घेणार</p>
          <div style={styles.signatureLine}></div>
          <p>{formData.releaseeName}</p>
        </div>
        <div style={styles.signatureBox}>
          <p>लिहून देणार</p>
          <div style={styles.signatureLine}></div>
          <p>{formData.releasorName}</p>
        </div>
      </div>

      <div style={styles.witnessSection}>
        <h3 style={{ ...styles.sectionTitle, textAlign: 'center' }}>// साक्षिदार //</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>१. ------------------------------</p>
            <div style={styles.signatureLine}></div>
          </div>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>२. ------------------------------</p>
            <div style={styles.signatureLine}></div>
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

export default ReleaseDeed;