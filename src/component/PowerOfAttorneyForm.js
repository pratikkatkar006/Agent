import React, { useState } from 'react';

const PowerOfAttorneyForm = () => {
  const [formData, setFormData] = useState({
    district: 'सांगली',
    taluka: 'तासगाव',
    village: 'तासगाव',
    date: '१६/०५/२०२५',
    principalName: 'भारती बाळासाहेब कदम',
    principalAge: '४५',
    principalOccupation: 'शेती/घरकाम',
    principalAddress: 'रा.तासगाव ता.तासगांव जि.सांगली',
    principalAadhar: '८३७६ ६२८८ ६१६४',
    principalMobile: '९९६०६२५५१५',
    attorneyName: 'सागर बाळासाहेब कदम',
    attorneyAge: '२९',
    attorneyOccupation: 'शेती',
    attorneyAddress: 'रा. तासगाव ता. तासगाव जि. सांगली',
    attorneyAadhar: '९१३१ ११९४ ८५५१',
    attorneyMobile: '९५०३६००३९७',
    surveyNo1: '९५३/१',
    area1: '१.८३',
    value1: '११.२५',
    surveyNo2: '९५३/३',
    area2: '१.४०',
    value2: '८.३३',
    witness1: '',
    witness2: '',
    village1: ' कसबे तासगाव',
    land:"जमीन",
    info:"यातील माझा निर्माण झालेला अविभक्त हक्क हिस्सा संपूर्ण.",
      वडिलोपार्जित:"वडिलोपार्जित",
    वारसाने: "आई ",
  });

   const [isPreview, setIsPreview] = useState(false);

    const togglePreview = () => {
    setIsPreview(!isPreview);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const printDocument = () => {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>कधीही रद्द न होणारे कुलमुखत्यारपत्र</title>
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
        <h1 class="title">// कधीही रद्द न होणारे कुलमुखत्यारपत्र //</h1>
      </div>

      <div class="section">
        <p>
          विनामोबदला कुलमुखत्यारपत्र जिल्हा ${formData.district} 
          पोट तुकडी व ता. ${formData.taluka} 
          पैकी ${formData.village1} येथील मिळकत.
          आज दिनांक:- ${formData.date}.
        </p>
      </div>

      <div class="section">
        <div class="party-details">
          <div class="party-column">
            <p class="party-header">लिहून घेणार</p>
            <p>नाव: ${formData.principalName}</p>
            <p>व. व. ${formData.principalAge}, व्यवसाय – ${formData.principalOccupation}</p>
            <p>पत्ता: ${formData.principalAddress}</p>
            <p>आधार नं. ${formData.principalAadhar}</p>
            <p>मो.नं. ${formData.principalMobile}</p>
             <p class="party-header">लिहून देणार</p>
            <p>नाव: ${formData.attorneyName}</p>
            <p>व. व. ${formData.attorneyAge}, व्यवसाय – ${formData.attorneyOccupation}</p>
            <p>पत्ता: ${formData.attorneyAddress}</p>
            <p>आधार नं. ${formData.attorneyAadhar}</p>
            <p>मो.नं. ${formData.attorneyMobile}</p>
          </div>
         
        </div>
      </div>

      <div class="section">
        <h3 class="bold">१) लिहून देतो कुलमुखत्यारपत्र ऐेसाजे की-जिल्हा तुकडी सांगली,पोट तुकडी व तालुका तासगाव पैकी कसबे ${formData.village} येथील ${formData.land} मिळकतीचे-</h3>
        
        <table class="table">
          <thead>
            <tr>
              <th>अनु.क्र.</th>
              <th>रि.स.नंबर</th>
              <th>क्षेत्र हे.आर</th>
              <th>आकार रु.पै</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>१)</td>
              <td>${formData.surveyNo1}</td>
              <td>${formData.area1}</td>
              <td>${formData.value1}</td>
            </tr>
            <tr>
              <td>२)</td>
              <td>${formData.surveyNo2}</td>
              <td>${formData.area2}</td>
              <td>${formData.value2}</td>
            </tr>
          </tbody>
        </table>
        
        <p>${formData.info}</p>
        <p>येणेप्रमाणे मिळकत झाड-झुड तदंगभूत वास्तुसहित व इजमेंटचे सर्व त्या हक्कासह मिळकत.</p>
      </div>

      <div class="section">
        <h3 class="bold">२) मालकी हक्क व पार्श्वभूमी:-</h3>
        <p>
          वर कलम १ मध्ये नमूद केलेली मिळकत हि माझी ${formData.वडिलोपार्जित} मालकी हक्क वाहिवाटीची असून कलम १ मध्ये नमूद केलेली मिळकत हि मी आजरोजी 
          ता.तासगाव जि.सांगली येथील स.र.कचेरीत (रजिस्टर ऑफिस) मध्ये लिहून देणार यांची लिहून घेणार ${formData.वारसाने} या नात्याने कुलमुखत्यारपत्र लिहून देत आहे. 
          वर नमूद कलम १ मध्ये असलेल्या मिळकतीचे आजरोजी पासून मी तुला कुलमुखत्यार म्हणून नेमले आहे. तरी मी सदरच्या मिळकतीमध्ये माझे हितासाठी जे 
          काही माझे हित साधनेसाठी जे-जे काही व्यवहार करणार आहात ते-ते मला मान्य व कबूल आहेत. त्यास माझी व माझ्या वाली-वारस,भाऊबंध यांची 
          कोणतीही हरकत अगर तक्रार नाही.
        </p>
        <p>
          माझ्या वैयक्तिक कारणामुळे व्यवहारास हजर नाही राहता येणार म्हणून खालीलप्रमाणे संपूर्ण व्यवहार करण्यासाठी लिहून देणार यांची लिहून घेणार 
          ${formData.वारसाने} या नात्याने मी कुलमुखत्यार म्हणून नेमले आहे. खालील नमूद प्रत्येक व्यवहार करण्याची परवानगी मी तुम्हास ह्या कुलमुखत्यारपत्रा द्वारे देत आहे. 
          सदर मी तुम्हास लिहून दिलेले कुलमुखत्यारपत्र हे कधीही रद्द न होणारे आहे.
        </p>
      </div>

      <div class="section">
        <h3 class="bold">३) सदर कलम १ मधील मिळकतीचे माझ्या वतीने खरेदीपत्र करून देणे व घेणे त्यास लागणाऱ्या सर्व कागदपत्रे,प्रतिज्ञापत्र,जाब-जबाब,सह्या आंगठे, मान्यता देणे ,कबुली देणे व त्याच्या बदल्यात मिळकतीचा मोबदला घेणे.व तो मोबदला माझ्या खाती जमा करणे तसेच खरेदिपत्राच्या सरकारी,निमसरकारी रेकॉर्ड सदरी नोंद करणे कामी लागणाऱ्या सर्व कागदपत्रे, सह्या-आंगठे, जाब-जबाब देणे.</h3>
        <p>
          सबब जर खरेदीपत्र करून देणेसाठी सक्षम अधिकारी यांची परवानगी, शासकीय व निमशासकीय कार्यालय/अधिकारी यांची परवानगी आणणेसाठी मी जातीने 
          हजर राहून पूर्ण करणे अशक्य असल्याने मी तुम्हास कुलमुखत्यार म्हणून नेमले आहे.तरी तु माझ्या तर्फे व माझ्या करिता करावयाची सर्व कामे,कृत्य,बाबी,सह्या,आंगठे 
          जाब-जबाब,कागदपत्रांची पूर्तता,जे-जे काही लागेल ते-ते सर्व तुम्ही करण्याचे आहे.
        </p>
      </div>

      <div class="section">
        <h3 class="bold">४) कलम १ मध्ये नमूद असलेल्या मिळकतीचे साठेखत करणे त्यास लागणारी सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे. व सदर मिळकतीचा मोबदला घेणे. व तो मोबदला माझ्या खाती जमा करणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">५) कलम १ मध्ये नमूद असलेल्या मिळकतीचे हक्कसोड पत्र करणे त्यास लागणारी सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">६) कलम १ मध्ये नमूद असलेल्या मिळकतीचे वाटणीपत्र करणे त्यास लागणारी सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">७) कलम १ मध्ये नमूद असलेल्या मिळकतीचे वारसनोंद करणे त्यास लागणारी सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">८) कलम १ मध्ये नमूद असलेल्या मिळकतीचे बक्षिसपत्र करणे यासाठी सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब, मान्यता देणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">९) कलम १ मध्ये नमूद असलेल्या मिळकतीवर बँक बोजा, कर्ज, लोन घेणे त्यासाठी बँकेत लागणाऱ्या सर्व कागदपत्रावर, सह्या, आंगठे, जाब-जबाब देणे.सदर घेतलेल्या कर्जाचे स.र कचेरीत हजर राहून माझ्या वतीने गहाणखत करणे. त्यासाठी लागणाऱ्या सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे. व गहाणखताची रक्कम माझ्या बँक खाती जमा करणे तसेच कर्ज नील झालेनंतर स.र.कचेरीत जावून बोजा उतरून घेणे त्यासाठी लागणाऱ्या सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे. गरज पडल्यास शासकीय व निमशासकीय परवानगी घेणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">१०) कलम १ मध्ये नमूद असलेल्या मिळकतीवर कोर्ट कचेरी ,दावे याचा निकाल आपली बाजूने लागण्यासाठी जेजे काही करावे लागेल तेते सर्व तुम्ही करावे.त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे,वकील देणे व कुलमुखत्यार ह्या नात्याने माझ्या वतीने सदर कोर्ट कचेरीतला व्यवहार संपूर्णपणे पार पाडणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">११) कलम १ मध्ये नमूद केलेल्या मिळकतीच्या कोणत्याही व्यवहाराची,दस्ताची चुक दुरुस्ती करणे,फेरबदल करणे.त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">१२) कलम १ मध्ये नमूद मिळकतीचे बक्षिसपत्र करणे. तसेच मुखत्यारपत्रावरून मुखत्यारपत्र करून देणे त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">१३) कलम १ मध्ये नमूद असलेल्या मिळकतीच्या खरेदीपत्राच्या व हक्कसोड नोंदीच्या दृष्टीने शासकीय व निमशासकीय कार्यालये कलेक्टर,तहसीलदार,तलाठी,सर्कल,सक्षम अधिकारी इ.कार्यालयातील सर्व कामे करणे त्यासाठी सर्व ती पूर्तता करणे. त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">१४) कलम १ मध्ये नमूद केलेल्या मिळकतीचे N/A करणे साठी लागणाऱ्या सर्व कागदपत्रांची पूर्तता करणेसाठी शासकीय व निमशासकीय कार्यालये कलेक्टर, तहसीलदार, तलाठी, सर्कल,सक्षम अधिकारी,नगरपालिका इ.कार्यालयातील सर्व कामे करणे त्यासाठी सर्व ती पूर्तता करणे. त्यासाठी लागणाऱ्या सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब, प्रतिज्ञापत्र, घोषणापत्र देणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">१५) कलम १ मध्ये नमूद केलेल्या मिळकतीवर आवश्यक त्या परवानग्या आणून खरेदीपत्र करून घेनेसाठी म्हणजेच लिहून घेणार्यांना विक्री अगर तबदिली करणे,त्याचा मोबदला स्विकारणे,पोहोच पावत्या घेणे,त्याबाबतचे करारपत्र,खरेदीपत्र अगर अन्य कोणत्याही दस्तऐवजाची पूर्तता करणे सदरच्या दस्तऐवजावर सह्या करणे ती नोंदीसाठी नोंद कार्यालयात हजार करणे,कबुली जबाब देणे,तसेच त्यासाठी आवश्यक ते प्रतिज्ञापत्र,मान्यतापत्र प्रसंगी चूक दुरुस्तीलेख,पुरवणी लेख,ते नोंद करणे त्यासाठी नोंदणी कार्यालयात हजर राहणे,सह्या करणे कबुलीजबाब देणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">१६) कलम १ मध्ये नमूद केलेल्या मिळकती मध्ये तयार होणारे सात-बारा रेकॉर्ड सदरी खरेदीदाराची नावे नोंद होण्यासाठी अर्ज,जाब-जबाब , सह्या – अंगठे देणे.</h3>
      </div>

      <div class="section">
        <h3 class="bold">१८) थोडक्यात वरील तुम्हास दिलेले सर्व अधिकार हे मी जातीने हजर राहू शकत नसल्याने तुला हे सर्व अधिकार दिले आहेत.जीजी कामे आम्ही स्वतः जातीने हजर राहून केली असती ती ती सर्व कामे तू ह्या कुलमुखत्यार द्वारे करून घ्यावीत. सदर कुलमुखत्यार हे माझ्या सर्व प्रकारच्या वालीवारसावर लागू,बंधनकारक व मान्य राहील.</h3>
        <p>
          मी तुम्हास माझ्या स्वखुशीने व राजीखुशीने तुम्हास हे कधीही न रद्द होणारे,कधीही न संपुष्टात येणारे कुलमुखत्यारपत्र लिहून दिले आहे. माझा तुझ्यावर संपूर्ण विश्वास असल्याने व 
          लिहून देणार यांची लिहून घेणार ${formData.वारसाने} असलेने तुम्हास मुखत्यार म्हणून नेमले आहे व पसंत केले आहे.
        </p>
        <p>
          सदर मुखत्यार आम्हाला सुरवातीपासून शेवटपरेंत मान्य आहे.कबूल आहे म्हणून आम्ही ह्या कुलमुखत्यारपत्र या दस्तावर सही व आमचा निशाणी अंगठा दिले आहे.
          व दोन साक्षीदारांनी साक्षी दाखल केल्या आहेत.जसे लिहून देणार यांनी सांगितले तसे मी हे लिहून दिले विनामोबदला कुलमुखत्यारपत्र सही एस.डी.डाके रा.तासगाव.
        </p>
        <p>आज ता:- ${formData.date}.</p>
      </div>

      <div class="signature-section">
        <div class="signature-box">
          <p><span class="signature-line"></span></p>
          <p>लिहून घेणार</p>
          <p>${formData.principalName}</p>
        </div>
        <div class="signature-box">
          <p><span class="signature-line"></span></p>
          <p>लिहून देणार</p>
          <p>${formData.attorneyName}</p>
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
        <h1 style={styles.title}>// कधीही रद्द न होणारे कुलमुखत्यारपत्र //</h1>
      </div>

      <div style={styles.section}>
        <p>
          विनामोबदला कुलमुखत्यारपत्र जिल्हा <input type="text" name="district" value={formData.district} onChange={handleChange} style={styles.input} /> 
          पोट तुकडी व ता. <input type="text" name="taluka" value={formData.taluka} onChange={handleChange} style={styles.input} /> 
          पैकी<input type="text" name="village" value={formData.village1} onChange={handleChange} style={styles.input} /> येथील मिळकत.
          आज दिनांक:- <input type="text" name="date" value={formData.date} onChange={handleChange} style={styles.input} />.
        </p>
      </div>

      <div style={styles.section}>
        <div style={styles.partyDetails}>
          <div style={styles.partyColumn}>
            <p style={styles.partyHeader}>लिहून घेणार</p>
            <p>नाव: <input type="text" name="principalName" value={formData.principalName} onChange={handleChange} style={styles.input} /></p>
            <p>व. व.<input type="text" name="principalAge" value={formData.principalAge} onChange={handleChange} style={styles.smallInput} />, 
            व्यवसाय – <input type="text" name="principalOccupation" value={formData.principalOccupation} onChange={handleChange} style={styles.input} /></p>
            <p>पत्ता: <input type="text" name="principalAddress" value={formData.principalAddress} onChange={handleChange} style={styles.input} /></p>
            <p>आधार नं.<input type="text" name="principalAadhar" value={formData.principalAadhar} onChange={handleChange} style={styles.input} /></p>
            <p>मो.नं.<input type="text" name="principalMobile" value={formData.principalMobile} onChange={handleChange} style={styles.input} /></p>
          </div>
          <div style={styles.partyColumn}>
            <p style={styles.partyHeader}>लिहून देणार</p>
            <p>नाव: <input type="text" name="attorneyName" value={formData.attorneyName} onChange={handleChange} style={styles.input} /></p>
            <p>व. व.<input type="text" name="attorneyAge" value={formData.attorneyAge} onChange={handleChange} style={styles.smallInput} />, 
            व्यवसाय – <input type="text" name="attorneyOccupation" value={formData.attorneyOccupation} onChange={handleChange} style={styles.input} /></p>
            <p>पत्ता: <input type="text" name="attorneyAddress" value={formData.attorneyAddress} onChange={handleChange} style={styles.input} /></p>
            <p>आधार नं.<input type="text" name="attorneyAadhar" value={formData.attorneyAadhar} onChange={handleChange} style={styles.input} /></p>
            <p>मो.नं.<input type="text" name="attorneyMobile" value={formData.attorneyMobile} onChange={handleChange} style={styles.input} /></p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>१) लिहून देतो कुलमुखत्यारपत्र ऐेसाजे की-जिल्हा तुकडी सांगली,पोट तुकडी व तालुका तासगाव पैकी कसबे <input type="text" name="village" value={formData.village} onChange={handleChange} style={styles.input} /> येथील <input type="text" name="village" value={formData.land} onChange={handleChange} style={styles.input} /> मिळकतीचे-</h3>
        
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>अनु.क्र.</th>
              <th style={styles.th}>रि.स.नंबर</th>
              <th style={styles.th}>क्षेत्र हे.आर</th>
              <th style={styles.th}>आकार रु.पै</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>१)</td>
              <td style={styles.td}><input type="text" name="surveyNo1" value={formData.surveyNo1} onChange={handleChange} style={styles.tableInput} /></td>
              <td style={styles.td}><input type="text" name="area1" value={formData.area1} onChange={handleChange} style={styles.tableInput} /></td>
              <td style={styles.td}><input type="text" name="value1" value={formData.value1} onChange={handleChange} style={styles.tableInput} /></td>
            </tr>
            <tr>
              <td style={styles.td}>२)</td>
              <td style={styles.td}><input type="text" name="surveyNo2" value={formData.surveyNo2} onChange={handleChange} style={styles.tableInput} /></td>
              <td style={styles.td}><input type="text" name="area2" value={formData.area2} onChange={handleChange} style={styles.tableInput} /></td>
              <td style={styles.td}><input type="text" name="value2" value={formData.value2} onChange={handleChange} style={styles.tableInput} /></td>
            </tr>
          </tbody>
        </table>
        
        <p><input type="text" name="village" value={formData.info} onChange={handleChange} style={styles.input} /> </p>
        <p>येणेप्रमाणे मिळकत झाड-झुड तदंगभूत वास्तुसहित व इजमेंटचे सर्व त्या हक्कासह मिळकत.</p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>२) मालकी हक्क व पार्श्वभूमी:-</h3>
        <p>
          वर कलम १ मध्ये नमूद केलेली मिळकत हि माझी <input type="text" name="village" value={formData.वडिलोपार्जित} onChange={handleChange} style={styles.input} /> मालकी हक्क वाहिवाटीची असून कलम १ मध्ये नमूद केलेली मिळकत हि मी आजरोजी 
          ता.तासगाव जि.सांगली येथील स.र.कचेरीत (रजिस्टर ऑफिस) मध्ये लिहून देणार यांची लिहून घेणार <input type="text" name="village" value={formData. वारसाने} onChange={handleChange} style={styles.input} /> या नात्याने कुलमुखत्यारपत्र लिहून देत आहे. 
          वर नमूद कलम १ मध्ये असलेल्या मिळकतीचे आजरोजी पासून मी तुला कुलमुखत्यार म्हणून नेमले आहे. तरी मी सदरच्या मिळकतीमध्ये माझे हितासाठी जे 
          काही माझे हित साधनेसाठी जे-जे काही व्यवहार करणार आहात ते-ते मला मान्य व कबूल आहेत. त्यास माझी व माझ्या वाली-वारस,भाऊबंध यांची 
          कोणतीही हरकत अगर तक्रार नाही.
        </p>
        <p>
          माझ्या वैयक्तिक कारणामुळे व्यवहारास हजर नाही राहता येणार म्हणून खालीलप्रमाणे संपूर्ण व्यवहार करण्यासाठी लिहून देणार यांची लिहून घेणार 
          <input type="text" name="village" value={formData. वारसाने} onChange={handleChange} style={styles.input} /> या नात्याने मी कुलमुखत्यार म्हणून नेमले आहे. खालील नमूद प्रत्येक व्यवहार करण्याची परवानगी मी तुम्हास ह्या कुलमुखत्यारपत्रा द्वारे देत आहे. 
          सदर मी तुम्हास लिहून दिलेले कुलमुखत्यारपत्र हे कधीही रद्द न होणारे आहे.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>३) सदर कलम १ मधील मिळकतीचे माझ्या वतीने खरेदीपत्र करून देणे व घेणे त्यास लागणाऱ्या सर्व कागदपत्रे,प्रतिज्ञापत्र,जाब-जबाब,सह्या आंगठे, मान्यता देणे ,कबुली देणे व त्याच्या बदल्यात मिळकतीचा मोबदला घेणे.व तो मोबदला माझ्या खाती जमा करणे तसेच खरेदिपत्राच्या सरकारी,निमसरकारी रेकॉर्ड सदरी नोंद करणे कामी लागणाऱ्या सर्व कागदपत्रे, सह्या-आंगठे, जाब-जबाब देणे.</h3>
        <p>
          सबब जर खरेदीपत्र करून देणेसाठी सक्षम अधिकारी यांची परवानगी, शासकीय व निमशासकीय कार्यालय/अधिकारी यांची परवानगी आणणेसाठी मी जातीने 
          हजर राहून पूर्ण करणे अशक्य असल्याने मी तुम्हास कुलमुखत्यार म्हणून नेमले आहे.तरी तु माझ्या तर्फे व माझ्या करिता करावयाची सर्व कामे,कृत्य,बाबी,सह्या,आंगठे 
          जाब-जबाब,कागदपत्रांची पूर्तता,जे-जे काही लागेल ते-ते सर्व तुम्ही करण्याचे आहे.
        </p>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>४) कलम १ मध्ये नमूद असलेल्या मिळकतीचे साठेखत करणे त्यास लागणारी सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे. व सदर मिळकतीचा मोबदला घेणे. व तो मोबदला माझ्या खाती जमा करणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>५) कलम १ मध्ये नमूद असलेल्या मिळकतीचे हक्कसोड पत्र करणे त्यास लागणारी सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>६) कलम १ मध्ये नमूद असलेल्या मिळकतीचे वाटणीपत्र करणे त्यास लागणारी सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>७) कलम १ मध्ये नमूद असलेल्या मिळकतीचे वारसनोंद करणे त्यास लागणारी सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>८) कलम १ मध्ये नमूद असलेल्या मिळकतीचे बक्षिसपत्र करणे यासाठी सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब, मान्यता देणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>९) कलम १ मध्ये नमूद असलेल्या मिळकतीवर बँक बोजा, कर्ज, लोन घेणे त्यासाठी बँकेत लागणाऱ्या सर्व कागदपत्रावर, सह्या, आंगठे, जाब-जबाब देणे.सदर घेतलेल्या कर्जाचे स.र कचेरीत हजर राहून माझ्या वतीने गहाणखत करणे. त्यासाठी लागणाऱ्या सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे. व गहाणखताची रक्कम माझ्या बँक खाती जमा करणे तसेच कर्ज नील झालेनंतर स.र.कचेरीत जावून बोजा उतरून घेणे त्यासाठी लागणाऱ्या सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब देणे. गरज पडल्यास शासकीय व निमशासकीय परवानगी घेणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>१०) कलम १ मध्ये नमूद असलेल्या मिळकतीवर कोर्ट कचेरी ,दावे याचा निकाल आपली बाजूने लागण्यासाठी जेजे काही करावे लागेल तेते सर्व तुम्ही करावे.त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे,वकील देणे व कुलमुखत्यार ह्या नात्याने माझ्या वतीने सदर कोर्ट कचेरीतला व्यवहार संपूर्णपणे पार पाडणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>११) कलम १ मध्ये नमूद केलेल्या मिळकतीच्या कोणत्याही व्यवहाराची,दस्ताची चुक दुरुस्ती करणे,फेरबदल करणे.त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>१२) कलम १ मध्ये नमूद मिळकतीचे बक्षिसपत्र करणे. तसेच मुखत्यारपत्रावरून मुखत्यारपत्र करून देणे त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>१३) कलम १ मध्ये नमूद असलेल्या मिळकतीच्या खरेदीपत्राच्या व हक्कसोड नोंदीच्या दृष्टीने शासकीय व निमशासकीय कार्यालये कलेक्टर,तहसीलदार,तलाठी,सर्कल,सक्षम अधिकारी इ.कार्यालयातील सर्व कामे करणे त्यासाठी सर्व ती पूर्तता करणे. त्यासाठी लागणाऱ्या सर्व कागदपत्रे,सह्या,आंगठे,जाब-जबाब देणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>१४) कलम १ मध्ये नमूद केलेल्या मिळकतीचे N/A करणे साठी लागणाऱ्या सर्व कागदपत्रांची पूर्तता करणेसाठी शासकीय व निमशासकीय कार्यालये कलेक्टर, तहसीलदार, तलाठी, सर्कल,सक्षम अधिकारी,नगरपालिका इ.कार्यालयातील सर्व कामे करणे त्यासाठी सर्व ती पूर्तता करणे. त्यासाठी लागणाऱ्या सर्व कागदपत्रे, सह्या, आंगठे, जाब-जबाब, प्रतिज्ञापत्र, घोषणापत्र देणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>१५) कलम १ मध्ये नमूद केलेल्या मिळकतीवर आवश्यक त्या परवानग्या आणून खरेदीपत्र करून घेनेसाठी म्हणजेच लिहून घेणार्यांना विक्री अगर तबदिली करणे,त्याचा मोबदला स्विकारणे,पोहोच पावत्या घेणे,त्याबाबतचे करारपत्र,खरेदीपत्र अगर अन्य कोणत्याही दस्तऐवजाची पूर्तता करणे सदरच्या दस्तऐवजावर सह्या करणे ती नोंदीसाठी नोंद कार्यालयात हजार करणे,कबुली जबाब देणे,तसेच त्यासाठी आवश्यक ते प्रतिज्ञापत्र,मान्यतापत्र प्रसंगी चूक दुरुस्तीलेख,पुरवणी लेख,ते नोंद करणे त्यासाठी नोंदणी कार्यालयात हजर राहणे,सह्या करणे कबुलीजबाब देणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>१६) कलम १ मध्ये नमूद केलेल्या मिळकती मध्ये तयार होणारे सात-बारा रेकॉर्ड सदरी खरेदीदाराची नावे नोंद होण्यासाठी अर्ज,जाब-जबाब , सह्या – अंगठे देणे.</h3>
      </div>

      <div style={styles.section}>
        <h3 style={styles.sectionTitle}>१८) थोडक्यात वरील तुम्हास दिलेले सर्व अधिकार हे मी जातीने हजर राहू शकत नसल्याने तुला हे सर्व अधिकार दिले आहेत.जीजी कामे आम्ही स्वतः जातीने हजर राहून केली असती ती ती सर्व कामे तू ह्या कुलमुखत्यार द्वारे करून घ्यावीत. सदर कुलमुखत्यार हे माझ्या सर्व प्रकारच्या वालीवारसावर लागू,बंधनकारक व मान्य राहील.</h3>
        <p>
          मी तुम्हास माझ्या स्वखुशीने व राजीखुशीने तुम्हास हे कधीही न रद्द होणारे,कधीही न संपुष्टात येणारे कुलमुखत्यारपत्र लिहून दिले आहे. माझा तुझ्यावर संपूर्ण विश्वास असल्याने व 
          लिहून देणार यांची लिहून घेणार <input type="text" name="village" value={formData. वारसाने} onChange={handleChange} style={styles.input} /> असलेने तुम्हास मुखत्यार म्हणून नेमले आहे व पसंत केले आहे.
        </p>
        <p>
          सदर मुखत्यार आम्हाला सुरवातीपासून शेवटपरेंत मान्य आहे.कबूल आहे म्हणून आम्ही ह्या कुलमुखत्यारपत्र या दस्तावर सही व आमचा निशाणी अंगठा दिले आहे.
          व दोन साक्षीदारांनी साक्षी दाखल केल्या आहेत.जसे लिहून देणार यांनी सांगितले तसे मी हे लिहून दिले विनामोबदला कुलमुखत्यारपत्र सही एस.डी.डाके रा.तासगाव.
        </p>
        <p>आज ता:- {formData.date}.</p>
      </div>

      <div style={styles.signatureSection}>
        <div style={styles.signatureBox}>
          <p>लिहून घेणार:- --------------------------</p>
          <p>{formData.principalName}</p>
        </div>
        <div style={styles.signatureBox}>
          <p>लिहून देणार:- --------------------------</p>
          <p>{formData.attorneyName}</p>
        </div>
      </div>

      <div style={styles.witnessSection}>
        <h3 style={styles.sectionTitle}>साक्षिदार</h3>
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
          <button onClick={printDocument} style={styles.printButton}>
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
    color: '#333',
    position: 'relative'
  },
  printButtonContainer: {
    textAlign: 'right',
    marginBottom: '20px',
    '@media print': {
      display: 'none'
    }
  },
  printButton: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    '@media print': {
      display: 'none'
    }
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    borderBottom: '2px solid #8B4513',
    paddingBottom: '10px'
  },
  title: {
    fontSize: '20px',
    color: '#8B4513',
    marginBottom: '5px'
  },
  section: {
    marginBottom: '15px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid #eee',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    pageBreakInside: 'avoid'
  },
  sectionTitle: {
    color: '#8B4513',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
    marginTop: '0',
    fontSize: '16px'
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
  smallInput: {
    border: '1px solid #ddd',
    padding: '5px',
    borderRadius: '3px',
    backgroundColor: '#fff',
    width: '40px',
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
    gap: '20px',
    pageBreakInside: 'avoid'
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
    margin: '30px 0',
    pageBreakInside: 'avoid'
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
  '@media print': {
    printButton: {
      display: 'none'
    },
    container: {
      boxShadow: 'none',
      border: 'none',
      padding: '0',
      maxWidth: '100%'
    }
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

export default PowerOfAttorneyForm;