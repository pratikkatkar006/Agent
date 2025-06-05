import React, { useState } from 'react';

const LeaseDeed = () => {
  const [formData, setFormData] = useState({
    documentNumber: '2580, 2581/अ व 2581/ब',
    location: 'गुरूवार पेठ, तासगाव',
    propertyType: 'आर.सी.सी. इमारती मधील ग्राउंड फ्लोअर वरील दुकान गाळा',
    leaseDuration: '15',
    stampDutyValue: '18,20,000',
    date: '04/01/2024',
    
    // Party 1 (Lessor) Details
    lessor1Name: 'सेनापती बुध्दीमान भोसले',
    lessor1Occupation: 'शेती',
    lessor1Age: '८६',
    lessor1Address: 'रा. तासगाव, ता. तासगाव, जि. सांगली',
    lessor1Aadhar: '2933 7901 5198',
    lessor1Mobile: '8275377937',
    
    lessor2Name: 'गणेश सेनापती भोसले',
    lessor2Occupation: 'शेती',
    lessor2Age: '५५',
    lessor2Address: 'रा. तासगाव, ता. तासगाव, जि. सांगली',
    lessor2Aadhar: '4847 0239 6509',
    lessor2Mobile: '9421130617',
    
    lessor3Name: 'दिलीप सेनापती भोसले',
    lessor3Occupation: 'शेती',
    lessor3Age: '४८',
    lessor3Address: 'रा. तासगाव, ता. तासगाव, जि. सांगली',
    lessor3Aadhar: '5537 5091 5492',
    lessor3Mobile: '8275377937',
    
    // Party 2 (Lessee) Details
    lesseeName: 'राजारामबापु सहकारी बँक लि., पेठ. (शेड्युल्ड बँक)',
    lesseeAddress: 'ता. वाळवा, जि. सांगली',
    representativeName: 'श्री. रविंद्र राजाराम लोळगे',
    representativeDesignation: 'डेप्युटी जनरल मॅनेजर',
    representativeAge: '53',
    representativeOccupation: 'नोकरी',
    representativeAddress: 'रा. कोल्हापूर, ता. करवीर, जि. काल्हापूर',
    representativeAccount: '765852684050',
    representativeMobile: '9822681030',
    
    // Property Details
    propertyArea: '870',
    propertyAreaSqM: '80.85',
    boundariesEast: 'सि. स.नंबर 2576',
    boundariesWest: 'विटा सांगली मेन रस्ता',
    boundariesSouth: 'सि. स.नंबर 2582, 2570',
    boundariesNorth: 'सि. स.नंबर 2580 पैकी उर्वरात मिळकत',
    propertyAbove: 'पार्टी नंबर 1 यांचा शिल्लक कमर्शीयल गाळा',
    propertyBelow: 'तळघर',
    info1:'पार्टी नं. 1 यांचे तासगाव अर्बन बँक येथे सदर मिळकतीवर कर्ज असलेमुळे सदर बँकेने NOC मध्ये उल्लेख केलेप्रमाणे सदर खातेमध्ये भरणेची आहे.',
    info2: '10 % वाढ करणेची आहे. ते पुढीलप्रमाणे.',
    info3:'अक्षरी रुपये पंचवीस हजार फक्त',
    
    // Lease Terms
    boardMeetingDate: '08/12/2023',
    resolutionNumber: '5 अ',
    leaseStartDate: '01/02/2024',
    leaseEndDate: '31/01/2039',
      leaseEndDate1: '31/01/2027',
  leaseStartDate2: '01/02/2027',
  leaseEndDate2: '31/01/2030',
  leaseStartDate3: '01/02/2030',
  leaseEndDate3: '31/01/2033',
  leaseStartDate4: '01/02/2033',
  leaseEndDate4: '31/01/2036',
  leaseStartDate5: '01/02/2036',
  leaseEndDate5: '31/01/2039',
    
    // Rent Details
    rentYear1: '25,000',
    rentYear2: '27,500',
    rentYear3: '30,250',
    rentYear4: '33,275',
    rentYear5: '36,603'
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
        <title>स्थावर मिळकतीचा भाडेपट्टा (लिज डीड)</title>
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
          <h1 class="title">// श्री //</h1>
          <h2 class="subtitle">स्थावर मिळकतीचा भाडेपट्टा (लिज डीड)</h2>
        </div>

        <div class="section">
          <p>
            सि.स.नं. ${formData.documentNumber}, ${formData.location} या मालमत्तेवर बांधणेत आलेल्या ${formData.propertyType} च्या भाडेपट्टा करार मुदत ${formData.leaseDuration} वर्षे.
          </p>
          <p>
            मुद्रांक व नोदणी करीता किंमत – ${formData.stampDutyValue}/-
          </p>
          <p style="text-align: right; font-weight: bold;">
            आज तारीख- ${formData.date}
          </p>
        </div>

        <div class="party-details">
          <div class="party-column center">
            <p class="party-header">लिहून घेणार (पार्टी नं. 1)</p>
            <p>1) ${formData.lessor1Name}</p>
            <p>धंदा - ${formData.lessor1Occupation}, वय-${formData.lessor1Age} वर्षे</p>
            <p>${formData.lessor1Address}</p>
            <p>आधार नं. –${formData.lessor1Aadhar}</p>
            <p>मो. नं. ${formData.lessor1Mobile}</p>

            <p>2) ${formData.lessor2Name}</p>
            <p>धंदा - ${formData.lessor2Occupation}, वय-${formData.lessor2Age} वर्षे</p>
            <p>${formData.lessor2Address}</p>
            <p>आधार नं. –${formData.lessor2Aadhar}</p>
            <p>मो. नं. ${formData.lessor2Mobile}</p>

            <p>3) ${formData.lessor3Name}</p>
            <p>धंदा - ${formData.lessor3Occupation}, वय-${formData.lessor3Age} वर्षे</p>
            <p>${formData.lessor3Address}</p>
            <p>आधार नं. –${formData.lessor3Aadhar}</p>
            <p>मो. नं. ${formData.lessor3Mobile}</p>


             <p class="party-header">लिहून देणार (पार्टी नं. 2)</p>
            <p>${formData.lesseeName}</p>
            <p>${formData.lesseeAddress}</p>
            <p>तर्फे ${formData.representativeDesignation}, ${formData.representativeName}</p>
            <p>वय – ${formData.representativeAge} वर्षे, धंदा: ${formData.representativeOccupation}</p>
            <p>${formData.representativeAddress}</p>
            <p>धार – ${formData.representativeAccount}</p>
            <p>मो.नं. ${formData.representativeMobile}</p>
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">कारणे लिहुन ठेवीतात ${formData.leaseDuration} वर्षे मुदतीचा भाडेपट्टा (लिज डीड) ऐसा जे की,</h3>
          
          <h4>अ) मिळकतीचे वर्णन:</h4>
          <p class="indent">
            जिल्हा व तुकडी सांगली, पोट तुकडी व तालुका तासगाव पैकी शहर तासगाव येथील मा. दुय्यम निबंधकसो तासगाव यांचे अधिकार क्षेत्रातील सि.स.नं. ${formData.documentNumber}, ${formData.location}, छत्रपती शिवाजी चौक, मेन रोड तासगाव, पिन कोड – 416312 या मालमत्तेवर बांधणेत आलेल्या ${formData.propertyType} क्षेत्र ${formData.propertyArea} स्के. फुट (${formData.propertyAreaSqM} चौ.मी)ही मिळकत यासी चतुः सिमाः
          </p>
          <p class="indent">
            पुर्वेस : ${formData.boundariesEast}.<br />
            पश्चिमेस : ${formData.boundariesWest}.<br />
            दक्षिणेस : ${formData.boundariesSouth}.<br />
            उत्तरेस : ${formData.boundariesNorth}.<br />
            वर : ${formData.propertyAbove}.<br />
            खाली : ${formData.propertyBelow}.
          </p>
          <p class="indent">
            येणे प्रमाणे षष्ट सिमेतील दुकान त्यातील विध्य़ुत कनेक्शन सह व वहिवाटीची सर्व हक्का सह मिळकत.
          </p>

          <h4>ब) मालकी हक्क:</h4>
          <p class="indent">
            वर कलम (अ) मध्ये वर्णन केलेली मिळकत पार्टी नं. 1 यांचे मालकीची आहे. सदर पार्टी नं. 1 यांना सदर मिळकत भाड्याने देणेचा अधिकार आहे. पार्टी नं. 1 व 2 यांचे मध्ये चर्चा व वाटाघाटी होवून सदर मिळकतीचा ${formData.leaseDuration} वर्षाकरिता भाडेपट्टा करणेचा ठरलेला आहे.
          </p>

          <h4>क) बँक अधिकार:</h4>
          <p class="indent">
            पार्टी नं. 2 ही बँक सहकार कायद्याप्रमाणे व बँकिंग रेग्युलेशन अॅक्टप्रमाणे रजिस्टर झालेली सहकारी बँक आहे. पार्टी नं. 2 बँकेचे प्रधान कार्यालय- पेठ, ता. वाळवा, जि. सांगली येथे आहे. पार्टी नं. 2 यांचे प्रधान कार्यालया मध्ये दि.${formData.boardMeetingDate} रोजी झालेल्या संचालक मंडळ सभेच्या विषय ठराव नं. ${formData.resolutionNumber} ने सदर मिळकतीचा ${formData.leaseDuration} वर्षाकरिता भाडेकरार करणेस मंजूरी मिळालेली आहे. सदर विषय ठरावाने ${formData.representativeName}, ${formData.representativeDesignation}, यांना सदर मिळकतीविषयी भाडेपट्टा करुन देणेचे अधिकार मिळाले आहेत. सदर ठरावानुसार मिळालेल्या अधिकारानुसार ${formData.representativeName}, ${formData.representativeDesignation}, प्रस्तुत दस्त लिहुन देत आहेत.
          </p>

          <h4>ड) भाडे अटी:</h4>
          <p class="indent">
            पार्टी नं. 2 यांचे प्रधान कार्यालय पेठ येथे दि.${formData.boardMeetingDate} इ रोजी झालेल्या संचालक सभेच्या विषय ठराव नं. ${formData.resolutionNumber} नुसार पार्टी नं. 1 यांनी पार्टी नं. 2 यांना दिलेल्या प्रस्तावानुसार सदर मिळकतीचा भाडेपट्टा हा एकुण ${formData.leaseDuration} वर्षे करणेचा ठरलेला आहे. तसेच, पार्टी नं. 1 यांचे प्रस्तावानुसार दि. ${formData.leaseStartDate} पासून पहिल्या तीन वर्षासाठी भाडे दर महा रक्कम रु. ${formData.rentYear1}/- (अक्षरी रुपये पंचवीस हजार फक्त) व दर तीनवर्षानी चालु असलेल्या भाडेमध्ये 10 % वाढ करणेची आहे. ते पुढीलप्रमाणे.
          </p>
          
          <table class="table">
            <thead>
              <tr>
                <th>अ.नं.</th>
                <th>साल</th>
                <th>भाडे रक्कम रू.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>${formData.leaseStartDate} ते 31/01/2027</td>
                <td>${formData.rentYear1}/-</td>
              </tr>
              <tr>
                <td>2</td>
                <td>01/02/2027 ते 31/01/2030</td>
                <td>${formData.rentYear2}/-</td>
              </tr>
              <tr>
                <td>3</td>
                <td>01/02/2030 ते 31/01/2033</td>
                <td>${formData.rentYear3}/-</td>
              </tr>
              <tr>
                <td>4</td>
                <td>01/02/2033 ते 31/01/2036</td>
                <td>${formData.rentYear4}/-</td>
              </tr>
              <tr>
                <td>5</td>
                <td>01/02/2036 ते 31/01/2039</td>
                <td>${formData.rentYear5}/-</td>
              </tr>
            </tbody>
          </table>

          <h3 class="section-title">पार्टी नं. 1 व 2 यांचे मध्ये ठरलेल्या अटी व शर्ती खालील प्रमाणे:</h3>
          
          <p>1) पार्टी नं. २ यांनी सदर मिळकत दि. ${formData.leaseStartDate} पासुन पुढे ते दि.${formData.leaseEndDate} अखेर ${formData.leaseDuration} वर्षे या कालावधी करीता भाडे तत्वावर भाडेकरु या नात्याने वापरणेसाठी घेणेचा मान्य व कबुल केलेले आहे.</p>
          
          <p>2) सदरचे भाडे प्रत्येक महिन्याचे 10 तारखेपूर्वी पार्टी नं. 2 यांनी पार्टी नं. 1 यांचे तासगाव अर्बन बँक येथे सदर मिळकतीवर कर्ज असलेमुळे सदर बँकेने NOC मध्ये उल्लेख केलेप्रमाणे सदर खातेमध्ये भरणेची आहे. तसेच सदर तासगाव अर्बन बँकेचे कर्ज पार्टी नं १ यांनी दुसऱ्या बँकेस ट्रान्सफर केलेस ज्या बँकेस कर्ज ट्रान्सफर होईल त्या बँकेच्या खातेमध्ये भाडे रक्कम भरणेची आहे. किंवा पार्टी नं १ यांनी कर्ज नील केलेस भाडे हे पार्टी नं १ यांना देनेचे आहे यास पार्टी नं. २ यांची कोणतीही हरकत नाही. भाडे मिळालेबाबतची रितसर पावती पार्टी नं. 1 यांनी पार्टी नं. 2 यांना देणेची आहे.</p>
          
          <p>3) सदर भाडेपट्ट्यास संबधीच्या सर्व तरतुदी लागू राहतील. या करारपत्रास पार्टीनं. 1 यांना सर्व प्रकारे बॉम्बे रेंट अॅक्ट मधील कोणत्याही तरतुदी लागु करता येणार आहेत.</p>
          
          <p>4) सदर मिळकती मध्ये लाईट, पाण्याचे कनेक्शन पार्टी नं. 1 यांनी त्यांचे खर्चाने करुन देणेचे आहे. सदर मिळकतीमध्ये येणारे लाईट व पाण्याचे बिल पार्टी नं. 2 यांनी देणेचे आहे. तसेच सदर मिळकतीचा येणारा महानगरपालिकेचा फाळा पार्टी नं. 2 यांनी भरणेचा आहे. सदर मिळकती मध्ये येणारे लाईट बिल, पाणी बिल व महानगरपालिका फाळा भरणेची जबाबदारी पार्टी नं. 2 यांचेवर राहील.</p>
          
          <p>5) सदर मिळकती मध्ये कोणताही कारणाने मोठी डागडुजी करणेची वेळ आलेस तशी पार्टी नं. 1यांना पार्टा नं. 2 यांनी माहिती दिलेनंतर त्याबाबतचा सर्व खर्च पार्टी नं. 1 यांनी करणेचा आहे. त्याची कोणतीही तोषीस पार्टी नं. 2 यांना लागु देणेची नाही.</p>
          
          <p>6) पार्टी नं. 2 व त्यांचे कडील व्यक्तींनी सदर मिळकत वापरत असताना आजुबाजुला असलेला परिसर स्वच्छ व सुस्थितीत ठेवण्याची संपूर्ण जबाबदारी पार्टी नं. 2 यांची आहे व ते ती योग्यरित्या पार पाडतील याची हमी देतात.</p>
          
          <p>7) सदर मिळकत पार्टी नं. 2 यांनी स्वतः वापरणेची आहे. अन्य कोणासही सदर मिळकत वापरणेस देणेची नाही. व सदर मिळकत फक्त पार्टी नं. 2 यांनी त्यांचे बँकिग व्यवसायासाठी वापरणेची आहे. तसेच पार्टी नं. 2 यांनी कोणताही अवैध व्यवसाय/धंदा करणेचा नाही.</p>
          
          <p>8) सदर गाळ्यामध्ये किरकोळ दुरूस्ती पार्टी नं. 2यांनी करणेची आहे. परंतु सदर जागेची लहान मोठी डागडुगी, दुरूस्ती इत्यादी जागा मालकपार्टी नं. 1 यांनी ज्या त्या वेळी स्वखर्चाने करून देणेची आहे. पार्टी नं. 1 यांनी पार्टी नं. 2 बँकेच्या कामकाजामध्ये कोणतीही अडचण करणेची नाही.</p>
          
          <p>9) सदर मिळकती मधील पार्टी नं. 2 यांचे वहीवाटीस कोणाचीही हरकत अथवा अडथळा आलेस त्याचे निवारण पार्टी नं. 1 यांनी त्यांचे खर्चाने करुन देणेचे आहे.</p>
          
          <p>10) सदर करारपत्राची मुदत संपण्यापुर्वी सदर मिळकतीचा कब्जा पार्टी नं. 2 यांना सोडणेचा असलेस पार्टी नं. 2 यांनी तसे पार्टी नं. 1 यांना 3 (तीन महीने) आगाऊ लेखी नोटीसीने कळविणेचे असून त्याबाबतपार्टी नं. 1 यांची कोणतीही हरकत नाही.</p>
          
          <p>13) सदर भाडेपट्ट्याचा संपुर्ण खर्च उदाःस्टॅम्प ड्युटी, नोंदणी फी व इतर अनुषंधिक खर्चपार्टी नं. 2 यांनी केलेला आहे.</p>
          
          <p>14) सदर मिळकत पुर्णतः निर्वेध व निष्कर्जी असुनकलम नं. मुद्दा क्र अ मधील मिळकत ही तासगाव अर्बन बँक शिवाय अन्या कोणासही कर्ज बोजा, गहानदान, विक्री, अदलाबदल मृत्युपत्र, भाडेपट्टा, लिव्ह, लिज, लायसन, शासकिय आरक्षण किंवा अतिक्रमण काही नसलेबाबत नोदणीकृत अथवा अनोंदणिकृत असा दस्त वगैरे केले नसलेबाबत तसेच कोणत्याही मे. न्यायालयात कोणत्याही प्रकारचा दावा, अर्ज, वाद व अपिल पेंडीग नसलेबाबत पार्टी नं. 1 यांनी सांगीतले असून याबाबत कोणत्याही बाबीस पार्टी नं. 2 यांना तोषीश बसणार नाही.</p>
          
          <p>15) सदर भाडेपट्टयास दुरुस्ती अथवा पुरवणी करारपत्र लिहुन देण्याची आवश्यकता भासलेस ते पार्टी नं. 1 व 2 यांनी विनाविलंब, विनाहरकत व विना मोबदला लिहुन देणेचे आहे. तसेच जर सदर मिळकत पार्टी नं. 2 यांना प्रस्तुत भाडेपट्टा संपलेनंतर पुन्हा सदर मिळकत भाड्याने पाहीजे असलेस पार्टी नं. 1 व 2 यांनी एकमेकांचे मध्ये चर्चा व वाटाघाटी करुन भाडेवाढ करुन नवीन भाडेपट्टा करुन घेणेचे आहे.</p>
          
          <p>14) सदरचा भाडेपट्टा आम्ही राजीखुशीने अक्कलहुशारीने विनादडपण व स्वसंतोषाने लिहुन दिले असुन ते आपणांवर व आपले दोघांचे वाली वारसांवर तसेच हक्कदारांवर पुर्णपणे बंधनकारक राहील.</p>
          <p>म्हणून लिहुन दिला भाडेपट्टा ( लिज डीड ) सही.एस.डी.डाके रा.तासगाव.</p>
          <p style="text-align: right; font-weight: bold;">आज मुक्काम तासगाव दि.${formData.date}.</p>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>भाडेपट्टा लिहुन घेणार - १</p>
            <p>${formData.lessor1Name}</p>
          </div>
          <div class="signature-box">
            <p>भाडेपट्टा लिहुन घेणार - २</p>
            <p>${formData.lessor2Name}</p>
          </div>
          <div class="signature-box">
            <p>भाडेपट्टा लिहुन घेणार - ३</p>
            <p>${formData.lessor3Name}</p>
          </div>
        </div>

        <div class="signature-section">
          <div class="signature-box">
            <p>भाडेपट्टा लिहुन देणार</p>
            <p>${formData.lesseeName}</p>
            <p>तर्फे ${formData.representativeDesignation}</p>
            <p>${formData.representativeName}</p>
          </div>
        </div>

        <div class="witness-section">
          <h3 class="section-title">// साक्षीदार //</h3>
          <div class="witness-boxes">
            <div class="witness-box">
              <p>1) ------------------------------------</p>
              <p>पत्ता - ------------------------------------</p>
            </div>
            <div class="witness-box">
              <p>2) ------------------------------------</p>
              <p>पत्ता - ------------------------------------</p>
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
        <h2>स्थावर मिळकतीचा भाडेपट्टा (लिज डीड)</h2>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p>
          सि.स.नं. {renderInputOrText('documentNumber', formData.documentNumber, '120px')}, 
          {renderInputOrText('location', formData.location, '200px')} या मालमत्तेवर बांधणेत आलेल्या 
          {renderInputOrText('propertyType', formData.propertyType, '300px')} च्या भाडेपट्टा करार मुदत 
          {renderInputOrText('leaseDuration', formData.leaseDuration, '50px')} वर्षे.
        </p>
        <p>
          मुद्रांक व नोदणी करीता किंमत – {renderInputOrText('stampDutyValue', formData.stampDutyValue, '100px')}/-
        </p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>
          आज तारीख- {renderInputOrText('date', formData.date, '100px')}
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div style={{ width: '48%' }}>
          <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>लिहून घेणार (पार्टी नं. 1)</h3>
          
          <p>1) {renderInputOrText('lessor1Name', formData.lessor1Name, '250px')}</p>
          <p>
            धंदा - {renderInputOrText('lessor1Occupation', formData.lessor1Occupation, '100px')}, 
            वय-{renderInputOrText('lessor1Age', formData.lessor1Age, '50px')} वर्षे
          </p>
          <p>{renderInputOrText('lessor1Address', formData.lessor1Address, '300px')}</p>
          <p>आधार नं. –{renderInputOrText('lessor1Aadhar', formData.lessor1Aadhar, '150px')}</p>
          <p>मो. नं. {renderInputOrText('lessor1Mobile', formData.lessor1Mobile, '100px')}</p>

          <p>2) {renderInputOrText('lessor2Name', formData.lessor2Name, '250px')}</p>
          <p>
            धंदा - {renderInputOrText('lessor2Occupation', formData.lessor2Occupation, '100px')}, 
            वय-{renderInputOrText('lessor2Age', formData.lessor2Age, '50px')} वर्षे
          </p>
          <p>{renderInputOrText('lessor2Address', formData.lessor2Address, '300px')}</p>
          <p>आधार नं. –{renderInputOrText('lessor2Aadhar', formData.lessor2Aadhar, '150px')}</p>
          <p>मो. नं. {renderInputOrText('lessor2Mobile', formData.lessor2Mobile, '100px')}</p>

          <p>3) {renderInputOrText('lessor3Name', formData.lessor3Name, '250px')}</p>
          <p>
            धंदा - {renderInputOrText('lessor3Occupation', formData.lessor3Occupation, '100px')}, 
            वय-{renderInputOrText('lessor3Age', formData.lessor3Age, '50px')} वर्षे
          </p>
          <p>{renderInputOrText('lessor3Address', formData.lessor3Address, '300px')}</p>
          <p>आधार नं. –{renderInputOrText('lessor3Aadhar', formData.lessor3Aadhar, '150px')}</p>
          <p>मो. नं. {renderInputOrText('lessor3Mobile', formData.lessor3Mobile, '100px')}</p>
        </div>

        <div style={{ width: '48%' }}>
          <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>लिहून देणार (पार्टी नं. 2)</h3>
          
          <p>{renderInputOrText('lesseeName', formData.lesseeName, '350px')}</p>
          <p>{renderInputOrText('lesseeAddress', formData.lesseeAddress, '300px')}</p>
          <p>
            तर्फे {renderInputOrText('representativeDesignation', formData.representativeDesignation, '150px')}, 
            {renderInputOrText('representativeName', formData.representativeName, '200px')}
          </p>
          <p>
            वय – {renderInputOrText('representativeAge', formData.representativeAge, '50px')} वर्षे, 
            धंदा: {renderInputOrText('representativeOccupation', formData.representativeOccupation, '100px')}
          </p>
          <p>{renderInputOrText('representativeAddress', formData.representativeAddress, '300px')}</p>
          <p>धार – {renderInputOrText('representativeAccount', formData.representativeAccount, '150px')}</p>
          <p>मो.नं. {renderInputOrText('representativeMobile', formData.representativeMobile, '100px')}</p>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>
          कारणे लिहुन ठेवीतात {formData.leaseDuration} वर्षे मुदतीचा भाडेपट्टा (लिज डीड) ऐसा जे की,
        </h3>
        
        <h4>अ) मिळकतीचे वर्णन:</h4>
        <p style={{ marginLeft: '20px' }}>
          जिल्हा व तुकडी सांगली, पोट तुकडी व तालुका तासगाव पैकी शहर तासगाव येथील मा. दुय्यम निबंधकसो तासगाव यांचे अधिकार क्षेत्रातील सि.स.नं. {formData.documentNumber}, {formData.location}, छत्रपती शिवाजी चौक, मेन रोड तासगाव, पिन कोड – 416312 या मालमत्तेवर बांधणेत आलेल्या {formData.propertyType} क्षेत्र {renderInputOrText('propertyArea', formData.propertyArea, '50px')} स्के. फुट ({renderInputOrText('propertyAreaSqM', formData.propertyAreaSqM, '50px')} चौ.मी)ही मिळकत यासी चतुः सिमाः
        </p>
        <p style={{ marginLeft: '20px' }}>
          पुर्वेस : {renderInputOrText('boundariesEast', formData.boundariesEast, '250px')}.<br />
          पश्चिमेस : {renderInputOrText('boundariesWest', formData.boundariesWest, '250px')}.<br />
          दक्षिणेस : {renderInputOrText('boundariesSouth', formData.boundariesSouth, '250px')}.<br />
          उत्तरेस : {renderInputOrText('boundariesNorth', formData.boundariesNorth, '250px')}.<br />
          वर : {renderInputOrText('propertyAbove', formData.propertyAbove, '250px')}.<br />
          खाली : {renderInputOrText('propertyBelow', formData.propertyBelow, '250px')}.
        </p>
        <p style={{ marginLeft: '20px' }}>
          येणे प्रमाणे षष्ट सिमेतील दुकान त्यातील विध्य़ुत कनेक्शन सह व वहिवाटीची सर्व हक्का सह मिळकत.
        </p>

        <h4>ब) मालकी हक्क:</h4>
        <p style={{ marginLeft: '20px' }}>
          वर कलम (अ) मध्ये वर्णन केलेली मिळकत पार्टी नं. 1 यांचे मालकीची आहे. सदर पार्टी नं. 1 यांना सदर मिळकत भाड्याने देणेचा अधिकार आहे. पार्टी नं. 1 व 2 यांचे मध्ये चर्चा व वाटाघाटी होवून सदर मिळकतीचा {formData.leaseDuration} वर्षाकरिता भाडेपट्टा करणेचा ठरलेला आहे.
        </p>

        <h4>क) बँक अधिकार:</h4>
        <p style={{ marginLeft: '20px' }}>
          पार्टी नं. 2 ही बँक सहकार कायद्याप्रमाणे व बँकिंग रेग्युलेशन अॅक्टप्रमाणे रजिस्टर झालेली सहकारी बँक आहे. पार्टी नं. 2 बँकेचे प्रधान कार्यालय- पेठ, ता. वाळवा, जि. सांगली येथे आहे. पार्टी नं. 2 यांचे प्रधान कार्यालया मध्ये दि.{renderInputOrText('boardMeetingDate', formData.boardMeetingDate, '100px')} रोजी झालेल्या संचालक मंडळ सभेच्या विषय ठराव नं. {renderInputOrText('resolutionNumber', formData.resolutionNumber, '50px')} ने सदर मिळकतीचा {formData.leaseDuration} वर्षाकरिता भाडेकरार करणेस मंजूरी मिळालेली आहे. सदर विषय ठरावाने {formData.representativeName}, {formData.representativeDesignation}, यांना सदर मिळकतीविषयी भाडेपट्टा करुन देणेचे अधिकार मिळाले आहेत. सदर ठरावानुसार मिळालेल्या अधिकारानुसार {formData.representativeName}, {formData.representativeDesignation}, प्रस्तुत दस्त लिहुन देत आहेत.
        </p>

        <h4>ड) भाडे अटी:</h4>
        <p style={{ marginLeft: '20px' }}>
          पार्टी नं. 2 यांचे प्रधान कार्यालय पेठ येथे दि.{formData.boardMeetingDate} इ रोजी झालेल्या संचालक सभेच्या विषय ठराव नं. {formData.resolutionNumber} नुसार पार्टी नं. 1 यांनी पार्टी नं. 2 यांना दिलेल्या प्रस्तावानुसार सदर मिळकतीचा भाडेपट्टा हा एकुण {formData.leaseDuration} वर्षे करणेचा ठरलेला आहे. तसेच, पार्टी नं. 1 यांचे प्रस्तावानुसार दि. {renderInputOrText('leaseStartDate', formData.leaseStartDate, '100px')} पासून पहिल्या तीन वर्षासाठी भाडे दर महा रक्कम रु. {renderInputOrText('rentYear1', formData.rentYear1, '80px')}/-  ({renderInputOrText('info3', formData.info3, '180px')}) व दर तीनवर्षानी चालु असलेल्या भाडेमध्ये {renderInputOrText('info2', formData.info2, '220px')}
        </p>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
  <thead>
    <tr>
      <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>अ.नं.</th>
      <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>साल</th>
      <th style={{ border: '1px solid #000', padding: '8px', textAlign: 'left', backgroundColor: '#f0f0f0' }}>भाडे रक्कम रू.</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>1</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>
        {isPreview ? (
          `${formData.leaseStartDate} ते ${formData.leaseEndDate1}`
        ) : (
          <>
            <input
              type="text"
              name="leaseStartDate"
              value={formData.leaseStartDate}
              onChange={handleChange}
              style={{ ...styles.input, width: '80px' }}
            />
            {' ते '}
            <input
              type="text"
              name="leaseEndDate1"
              value={formData.leaseEndDate1}
              onChange={handleChange}
              style={{ ...styles.input, width: '80px' }}
            />
          </>
        )}
      </td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>
        {isPreview ? (
          `${formData.rentYear1}/-`
        ) : (
          <input
            type="text"
            name="rentYear1"
            value={formData.rentYear1}
            onChange={handleChange}
            style={{ ...styles.input, width: '80px' }}
          />
        )}
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>2</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>
        {isPreview ? (
          `${formData.leaseStartDate2} ते ${formData.leaseEndDate2}`
        ) : (
          <>
            <input
              type="text"
              name="leaseStartDate2"
              value={formData.leaseStartDate2}
              onChange={handleChange}
              style={{ ...styles.input, width: '80px' }}
            />
            {' ते '}
            <input
              type="text"
              name="leaseEndDate2"
              value={formData.leaseEndDate2}
              onChange={handleChange}
              style={{ ...styles.input, width: '80px' }}
            />
          </>
        )}
      </td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>
        {isPreview ? (
          `${formData.rentYear2}/-`
        ) : (
          <input
            type="text"
            name="rentYear2"
            value={formData.rentYear2}
            onChange={handleChange}
            style={{ ...styles.input, width: '80px' }}
          />
        )}
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>3</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>
        {isPreview ? (
          `${formData.leaseStartDate3} ते ${formData.leaseEndDate3}`
        ) : (
          <>
            <input
              type="text"
              name="leaseStartDate3"
              value={formData.leaseStartDate3}
              onChange={handleChange}
              style={{ ...styles.input, width: '80px' }}
            />
            {' ते '}
            <input
              type="text"
              name="leaseEndDate3"
              value={formData.leaseEndDate3}
              onChange={handleChange}
              style={{ ...styles.input, width: '80px' }}
            />
          </>
        )}
      </td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>
        {isPreview ? (
          `${formData.rentYear3}/-`
        ) : (
          <input
            type="text"
            name="rentYear3"
            value={formData.rentYear3}
            onChange={handleChange}
            style={{ ...styles.input, width: '80px' }}
          />
        )}
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>4</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>
        {isPreview ? (
          `${formData.leaseStartDate4} ते ${formData.leaseEndDate4}`
        ) : (
          <>
            <input
              type="text"
              name="leaseStartDate4"
              value={formData.leaseStartDate4}
              onChange={handleChange}
              style={{ ...styles.input, width: '80px' }}
            />
            {' ते '}
            <input
              type="text"
              name="leaseEndDate4"
              value={formData.leaseEndDate4}
              onChange={handleChange}
              style={{ ...styles.input, width: '80px' }}
            />
          </>
        )}
      </td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>
        {isPreview ? (
          `${formData.rentYear4}/-`
        ) : (
          <input
            type="text"
            name="rentYear4"
            value={formData.rentYear4}
            onChange={handleChange}
            style={{ ...styles.input, width: '80px' }}
          />
        )}
      </td>
    </tr>
    <tr>
      <td style={{ border: '1px solid #000', padding: '8px' }}>5</td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>
        {isPreview ? (
          `${formData.leaseStartDate5} ते ${formData.leaseEndDate5}`
        ) : (
          <>
            <input
              type="text"
              name="leaseStartDate5"
              value={formData.leaseStartDate5}
              onChange={handleChange}
              style={{ ...styles.input, width: '80px' }}
            />
            {' ते '}
            <input
              type="text"
              name="leaseEndDate5"
              value={formData.leaseEndDate5}
              onChange={handleChange}
              style={{ ...styles.input, width: '80px' }}
            />
          </>
        )}
      </td>
      <td style={{ border: '1px solid #000', padding: '8px' }}>
        {isPreview ? (
          `${formData.rentYear5}/-`
        ) : (
          <input
            type="text"
            name="rentYear5"
            value={formData.rentYear5}
            onChange={handleChange}
            style={{ ...styles.input, width: '80px' }}
          />
        )}
      </td>
    </tr>
  </tbody>
</table>

        <h3 style={{ borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>
          पार्टी नं. 1 व 2 यांचे मध्ये ठरलेल्या अटी व शर्ती खालील प्रमाणे:
        </h3>
        
        <p>1) पार्टी नं. २ यांनी सदर मिळकत दि.  {renderInputOrText('leaseStartDate', formData.leaseStartDate, '100px')} पासुन पुढे ते दि.{renderInputOrText('leaseEndDate', formData.leaseEndDate, '100px')} अखेर {formData.leaseDuration} वर्षे या कालावधी करीता भाडे तत्वावर भाडेकरु या नात्याने वापरणेसाठी घेणेचा मान्य व कबुल केलेले आहे.</p>
        
        <p>2) सदरचे भाडे प्रत्येक महिन्याचे 10 तारखेपूर्वी पार्टी नं. 2 यांनी {renderInputOrText('info1', formData.info1, '100px')} तसेच सदर तासगाव अर्बन बँकेचे कर्ज पार्टी नं १ यांनी दुसऱ्या बँकेस ट्रान्सफर केलेस ज्या बँकेस कर्ज ट्रान्सफर होईल त्या बँकेच्या खातेमध्ये भाडे रक्कम भरणेची आहे. किंवा पार्टी नं १ यांनी कर्ज नील केलेस भाडे हे पार्टी नं १ यांना देनेचे आहे यास पार्टी नं. २ यांची कोणतीही हरकत नाही. भाडे मिळालेबाबतची रितसर पावती पार्टी नं. 1 यांनी पार्टी नं. 2 यांना देणेची आहे.</p>
        
        <p>3) सदर भाडेपट्ट्यास संबधीच्या सर्व तरतुदी लागू राहतील. या करारपत्रास पार्टीनं. 1 यांना सर्व प्रकारे बॉम्बे रेंट अॅक्ट मधील कोणत्याही तरतुदी लागु करता येणार आहेत.</p>
        
        <p>4) सदर मिळकती मध्ये लाईट, पाण्याचे कनेक्शन पार्टी नं. 1 यांनी त्यांचे खर्चाने करुन देणेचे आहे. सदर मिळकतीमध्ये येणारे लाईट व पाण्याचे बिल पार्टी नं. 2 यांनी देणेचे आहे. तसेच सदर मिळकतीचा येणारा महानगरपालिकेचा फाळा पार्टी नं. 2 यांनी भरणेचा आहे. सदर मिळकती मध्ये येणारे लाईट बिल, पाणी बिल व महानगरपालिका फाळा भरणेची जबाबदारी पार्टी नं. 2 यांचेवर राहील.</p>
        
        <p>5) सदर मिळकती मध्ये कोणताही कारणाने मोठी डागडुजी करणेची वेळ आलेस तशी पार्टी नं. 1यांना पार्टा नं. 2 यांनी माहिती दिलेनंतर त्याबाबतचा सर्व खर्च पार्टी नं. 1 यांनी करणेचा आहे. त्याची कोणतीही तोषीस पार्टी नं. 2 यांना लागु देणेची नाही.</p>
        
        <p>6) पार्टी नं. 2 व त्यांचे कडील व्यक्तींनी सदर मिळकत वापरत असताना आजुबाजुला असलेला परिसर स्वच्छ व सुस्थितीत ठेवण्याची संपूर्ण जबाबदारी पार्टी नं. 2 यांची आहे व ते ती योग्यरित्या पार पाडतील याची हमी देतात.</p>
        
        <p>7) सदर मिळकत पार्टी नं. 2 यांनी स्वतः वापरणेची आहे. अन्य कोणासही सदर मिळकत वापरणेस देणेची नाही. व सदर मिळकत फक्त पार्टी नं. 2 यांनी त्यांचे बँकिग व्यवसायासाठी वापरणेची आहे. तसेच पार्टी नं. 2 यांनी कोणताही अवैध व्यवसाय/धंदा करणेचा नाही.</p>
        
        <p>8) सदर गाळ्यामध्ये किरकोळ दुरूस्ती पार्टी नं. 2यांनी करणेची आहे. परंतु सदर जागेची लहान मोठी डागडुगी, दुरूस्ती इत्यादी जागा मालकपार्टी नं. 1 यांनी ज्या त्या वेळी स्वखर्चाने करून देणेची आहे. पार्टी नं. 1 यांनी पार्टी नं. 2 बँकेच्या कामकाजामध्ये कोणतीही अडचण करणेची नाही.</p>
        
        <p>9) सदर मिळकती मधील पार्टी नं. 2 यांचे वहीवाटीस कोणाचीही हरकत अथवा अडथळा आलेस त्याचे निवारण पार्टी नं. 1 यांनी त्यांचे खर्चाने करुन देणेचे आहे.</p>
        
        <p>10) सदर करारपत्राची मुदत संपण्यापुर्वी सदर मिळकतीचा कब्जा पार्टी नं. 2 यांना सोडणेचा असलेस पार्टी नं. 2 यांनी तसे पार्टी नं. 1 यांना 3 (तीन महीने) आगाऊ लेखी नोटीसीने कळविणेचे असून त्याबाबतपार्टी नं. 1 यांची कोणतीही हरकत नाही.</p>
        
        <p>13) सदर भाडेपट्ट्याचा संपुर्ण खर्च उदाःस्टॅम्प ड्युटी, नोंदणी फी व इतर अनुषंधिक खर्चपार्टी नं. 2 यांनी केलेला आहे.</p>
        
        <p>14) सदर मिळकत पुर्णतः निर्वेध व निष्कर्जी असुनकलम नं. मुद्दा क्र अ मधील मिळकत ही तासगाव अर्बन बँक शिवाय अन्या कोणासही कर्ज बोजा, गहानदान, विक्री, अदलाबदल मृत्युपत्र, भाडेपट्टा, लिव्ह, लिज, लायसन, शासकिय आरक्षण किंवा अतिक्रमण काही नसलेबाबत नोदणीकृत अथवा अनोंदणिकृत असा दस्त वगैरे केले नसलेबाबत तसेच कोणत्याही मे. न्यायालयात कोणत्याही प्रकारचा दावा, अर्ज, वाद व अपिल पेंडीग नसलेबाबत पार्टी नं. 1 यांनी सांगीतले असून याबाबत कोणत्याही बाबीस पार्टी नं. 2 यांना तोषीश बसणार नाही.</p>
        
        <p>15) सदर भाडेपट्टयास दुरुस्ती अथवा पुरवणी करारपत्र लिहुन देण्याची आवश्यकता भासलेस ते पार्टी नं. 1 व 2 यांनी विनाविलंब, विनाहरकत व विना मोबदला लिहुन देणेचे आहे. तसेच जर सदर मिळकत पार्टी नं. 2 यांना प्रस्तुत भाडेपट्टा संपलेनंतर पुन्हा सदर मिळकत भाड्याने पाहीजे असलेस पार्टी नं. 1 व 2 यांनी एकमेकांचे मध्ये चर्चा व वाटाघाटी करुन भाडेवाढ करुन नवीन भाडेपट्टा करुन घेणेचे आहे.</p>
        
        <p>14) सदरचा भाडेपट्टा आम्ही राजीखुशीने अक्कलहुशारीने विनादडपण व स्वसंतोषाने लिहुन दिले असुन ते आपणांवर व आपले दोघांचे वाली वारसांवर तसेच हक्कदारांवर पुर्णपणे बंधनकारक राहील.</p>
        <p>म्हणून लिहुन दिला भाडेपट्टा ( लिज डीड ) सही.एस.डी.डाके रा.तासगाव.</p>
        <p style={{ textAlign: 'right', fontWeight: 'bold' }}>आज मुक्काम तासगाव दि.{formData.date}.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px 0' }}>
        <div style={{ width: '30%', textAlign: 'center' }}>
          <p>भाडेपट्टा लिहुन घेणार - १</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {formData.lessor1Name}
          </div>
        </div>
        <div style={{ width: '30%', textAlign: 'center' }}>
          <p>भाडेपट्टा लिहुन घेणार - २</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {formData.lessor2Name}
          </div>
        </div>
        <div style={{ width: '30%', textAlign: 'center' }}>
          <p>भाडेपट्टा लिहुन घेणार - ३</p>
          <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            {formData.lessor3Name}
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '40px 0' }}>
        <p>भाडेपट्टा लिहुन देणार</p>
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
  <p>भाडेपट्टा लिहुन देणार</p>
  <div style={{ borderTop: '1px solid #000', width: '80%', margin: '0 auto', paddingTop: '50px' }}>
    {isPreview ? (
      <>
        {formData.lesseeName}
        <br />
        तर्फे {formData.representativeDesignation}
        <br />
        {formData.representativeName}
      </>
    ) : (
      <>
        <input
          type="text"
          name="lesseeName"
          value={formData.lesseeName}
          onChange={handleChange}
          style={{ ...styles.input, width: '100%', textAlign: 'center' }}
        />
        <br />
        तर्फे{' '}
        <input
          type="text"
          name="representativeDesignation"
          value={formData.representativeDesignation}
          onChange={handleChange}
          style={{ ...styles.input, width: '80%', textAlign: 'center' }}
        />
        <br />
        <input
          type="text"
          name="representativeName"
          value={formData.representativeName}
          onChange={handleChange}
          style={{ ...styles.input, width: '100%', textAlign: 'center' }}
        />
      </>
    )}
  </div>
</div>
      </div>

      <div style={{ margin: '40px 0' }}>
        <h3 style={{ textAlign: 'center', borderBottom: '1px solid #8b4513', paddingBottom: '5px' }}>// साक्षीदार //</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>1) ------------------------------------</p>
            <p>पत्ता - ------------------------------------</p>
          </div>
          <div style={{ width: '45%', textAlign: 'center' }}>
            <p>2) ------------------------------------</p>
            <p>पत्ता - ------------------------------------</p>
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

export default LeaseDeed;