// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const DraftFormsPage = () => {
//   const navigate = useNavigate();
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // List of all draft forms with their details
//   const draftForms = [
//     { id: 1, name: 'कुलमुखत्यारपत्र', icon: '📜', description: 'General Power of Attorney' },
//     { id: 2, name: 'कायम खुषखरेदीपत्र', icon: '🛒', description: 'Permanent Sale Agreement' },
//     { id: 3, name: 'चूक दुरुस्ती लेख', icon: '✏️', description: 'Error Correction Document' },
//     { id: 4, name: 'बक्षीस पत्र', icon: '🎁', description: 'Gift Deed' },
//     { id: 5, name: 'मुखत्यार नाते', icon: '👤', description: 'Power of Attorney for Specific Purpose' },
//     { id: 6, name: 'मृत्यू पत्र', icon: '⚰️', description: 'Death Certificate' },
//     { id: 7, name: 'रजिस्टर भाडेपट्टा', icon: '🏠', description: 'Registered Lease Agreement' },
//     { id: 8, name: 'रद्दलेख', icon: '❌', description: 'Cancellation Document' },
//     { id: 9, name: 'वाटणी पत्र', icon: '↔️', description: 'Partition Deed' },
//     { id: 10, name: 'बँक रिकन्व्हेन्स पत्र', icon: '🏦', description: 'Bank Reconveyance Deed' },
//     { id: 11, name: 'विशेष मुखत्यार', icon: '🔐', description: 'Special Power of Attorney' },
//     { id: 12, name: 'साठेखत', icon: '📦', description: 'Warehouse Receipt' },
//     { id: 13, name: 'लिव्ह अँड लायसेन्सप्रमाणे करारनामा', icon: '🤝', description: 'Leave and License Agreement' },
//     { id: 14, name: 'हक्क सोड पत्र', icon: '📝', description: 'Relinquishment Deed' }
//   ];

//   // Function to handle card click
//   const handleCardClick = (formId) => {
//     navigate(`/draft-form/${formId}`);
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <h1 style={styles.pageTitle}>Draft Forms Management</h1>
//       <p style={styles.pageSubtitle}>Select a form to view or edit</p>
      
//       <div style={styles.cardsContainer}>
//         {draftForms.map((form) => (
//           <div 
//             key={form.id}
//             onClick={() => handleCardClick(form.id)}
//             onMouseEnter={() => setHoveredCard(form.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//             style={{
//               ...styles.card,
//               transform: hoveredCard === form.id ? 'translateY(-5px)' : 'translateY(0)',
//               boxShadow: hoveredCard === form.id ? '0 8px 20px rgba(138, 43, 226, 0.12)' : '0 3px 10px rgba(138, 43, 226, 0.08)'
//             }}
//           >
//             <div style={styles.cardIconContainer}>
//               <span style={styles.cardIcon}>{form.icon}</span>
//             </div>
//             <h3 style={styles.cardTitle}>{form.name}</h3>
//             <p style={styles.cardDescription}>{form.description}</p>
//             <div style={{
//               ...styles.cardIndicator,
//               transform: hoveredCard === form.id ? 'scaleX(1)' : 'scaleX(0)'
//             }}></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // Styles
// const styles = {
//   pageContainer: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '20px',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//   },
//   pageTitle: {
//     color: '#002f34',
//     fontSize: '28px',
//     fontWeight: '700',
//     marginBottom: '8px',
//     textAlign: 'center'
//   },
//   pageSubtitle: {
//     color: '#5f6c72',
//     fontSize: '16px',
//     textAlign: 'center',
//     marginBottom: '40px'
//   },
//   cardsContainer: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//     gap: '20px',
//     padding: '10px'
//   },
//   card: {
//     background: '#d3c0a1',
//     borderRadius: '12px',
//     padding: '20px 15px',
//     textAlign: 'center',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease-out',
//     border: '1px solid rgba(138, 43, 226, 0.05)',
//     position: 'relative',
//     overflow: 'hidden',
//     '@media (min-width: 768px)': {
//       borderRadius: '16px',
//       padding: '30px 25px'
//     }
//   },
//   cardIconContainer: {
//     width: '50px',
//     height: '50px',
//     background: '#f0e5ff',
//     borderRadius: '12px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '0 auto 15px',
//     '@media (min-width: 768px)': {
//       width: '72px',
//       height: '72px',
//       borderRadius: '18px',
//       margin: '0 auto 20px'
//     }
//   },
//   cardIcon: {
//     fontSize: '24px',
//     '@media (min-width: 768px)': {
//       fontSize: '36px'
//     }
//   },
//   cardTitle: {
//     margin: '0 0 8px',
//     color: '#002f34',
//     fontSize: '16px',
//     fontWeight: '700',
//     '@media (min-width: 768px)': {
//       fontSize: '20px',
//       margin: '0 0 12px'
//     }
//   },
//   cardDescription: {
//     margin: 0,
//     color: '#5f6c72',
//     fontSize: '12px',
//     lineHeight: '1.4',
//     '@media (min-width: 768px)': {
//       fontSize: '15px',
//       lineHeight: '1.5'
//     }
//   },
//   cardIndicator: {
//     position: 'absolute',
//     bottom: '0',
//     left: '0',
//     right: '0',
//     height: '3px',
//     background: '#8a2be2',
//     transformOrigin: 'left',
//     transition: 'transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
//     '@media (min-width: 768px)': {
//       height: '4px'
//     }
//   }
// };

// export default DraftFormsPage;
















import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DraftFormsPage = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // List of all draft forms with their details
  const draftForms = [
    { id: 1, name: 'कुलमुखत्यारपत्र', icon: '📜', description: 'General Power of Attorney', category: 'Legal' },
    { id: 2, name: 'कायम खुषखरेदीपत्र', icon: '🛒', description: 'Permanent Sale Agreement', category: 'Property' },
    { id: 3, name: 'चूक दुरुस्ती लेख', icon: '✏️', description: 'Error Correction Document', category: 'Legal' },
    { id: 4, name: 'बक्षीस पत्र', icon: '🎁', description: 'Gift Deed', category: 'Property' },
    { id: 5, name: 'मुखत्यार नाते', icon: '👤', description: 'Power of Attorney for Specific Purpose', category: 'Legal' },
    { id: 6, name: 'मृत्यू पत्र', icon: '⚰️', description: 'Death Certificate', category: 'Legal' },
    { id: 7, name: 'रजिस्टर भाडेपट्टा', icon: '🏠', description: 'Registered Lease Agreement', category: 'Property' },
    { id: 8, name: 'रद्दलेख', icon: '❌', description: 'Cancellation Document', category: 'Legal' },
    { id: 9, name: 'वाटणी पत्र', icon: '↔️', description: 'Partition Deed', category: 'Property' },
    { id: 10, name: 'बँक रिकन्व्हेन्स पत्र', icon: '🏦', description: 'Bank Reconveyance Deed', category: 'Financial' },
    { id: 11, name: 'विशेष मुखत्यार', icon: '🔐', description: 'Special Power of Attorney', category: 'Legal' },
    { id: 12, name: 'साठेखत', icon: '📦', description: 'Warehouse Receipt', category: 'Commercial' },
    { id: 13, name: 'लिव्ह अँड लायसेन्सप्रमाणे करारनामा', icon: '🤝', description: 'Leave and License Agreement', category: 'Property' },
    { id: 14, name: 'हक्क सोड पत्र', icon: '📝', description: 'Relinquishment Deed', category: 'Property' }
  ];

  // Categories for filtering
  const categories = ['All', ...new Set(draftForms.map(form => form.category))];
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter forms based on search term and category
  const filteredForms = draftForms.filter(form => {
    const matchesSearch = form.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         form.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || form.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Function to handle card click
  const handleCardClick = (formId) => {
    navigate(`/draft-form/${formId}`);
  };

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Draft Forms Management</h1>
      <p style={styles.pageSubtitle}>Select a form to view or edit</p>
      
      {/* Search and Filter Section */}
      <div style={styles.filterSection}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search forms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
          <span style={styles.searchIcon}>🔍</span>
        </div>
        
        <div style={styles.categoryFilter}>
          {categories.map(category => (
            <button
              key={category}
              style={{
                ...styles.categoryButton,
                ...(selectedCategory === category ? styles.activeCategoryButton : {})
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Recent Forms Section (if any) */}
      {/* <div style={styles.recentSection}>
        <h3 style={styles.sectionTitle}>Recently Used Forms</h3>
        <div style={styles.cardsContainer}>
          {recentForms.map(form => (
            // Render recent form cards
          ))}
        </div>
      </div> */}
      
      {/* All Forms Section */}
      <div style={styles.cardsContainer}>
        {filteredForms.length > 0 ? (
          filteredForms.map((form) => (
            <div 
              key={form.id}
              onClick={() => handleCardClick(form.id)}
              onMouseEnter={() => setHoveredCard(form.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                ...styles.card,
                transform: hoveredCard === form.id ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: hoveredCard === form.id ? '0 8px 20px rgba(138, 43, 226, 0.12)' : '0 3px 10px rgba(138, 43, 226, 0.08)'
              }}
            >
              <div style={styles.cardIconContainer}>
                <span style={styles.cardIcon}>{form.icon}</span>
              </div>
              <h3 style={styles.cardTitle}>{form.name}</h3>
              <p style={styles.cardDescription}>{form.description}</p>
              <div style={styles.cardCategory}>{form.category}</div>
              <div style={{
                ...styles.cardIndicator,
                transform: hoveredCard === form.id ? 'scaleX(1)' : 'scaleX(0)'
              }}></div>
            </div>
          ))
        ) : (
          <div style={styles.noResults}>
            <p>No forms found matching your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced Styles
const styles = {
  pageContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  pageTitle: {
    color: '#002f34',
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '8px',
    textAlign: 'center'
  },
  pageSubtitle: {
    color: '#5f6c72',
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '40px'
  },
  filterSection: {
    marginBottom: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  searchContainer: {
    position: 'relative',
    flex: '1',
    maxWidth: '500px'
  },
  searchInput: {
    width: '100%',
    padding: '12px 20px 12px 40px',
    borderRadius: '25px',
    border: '1px solid #ddd',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.3s',
    ':focus': {
      borderColor: '#8a2be2',
      boxShadow: '0 0 0 2px rgba(138, 43, 226, 0.2)'
    }
  },
  searchIcon: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#5f6c72'
  },
  categoryFilter: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center'
  },
  categoryButton: {
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid #ddd',
    background: '#fff',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s',
    ':hover': {
      background: '#f0e5ff'
    }
  },
  activeCategoryButton: {
    background: '#8a2be2',
    color: 'white',
    borderColor: '#8a2be2'
  },
  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '10px'
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    padding: '20px 15px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease-out',
    border: '1px solid rgba(138, 43, 226, 0.05)',
    position: 'relative',
    overflow: 'hidden',
    '@media (min-width: 768px)': {
      borderRadius: '16px',
      padding: '30px 25px'
    }
  },
  cardIconContainer: {
    width: '50px',
    height: '50px',
    background: '#f0e5ff',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 15px',
    '@media (min-width: 768px)': {
      width: '72px',
      height: '72px',
      borderRadius: '18px',
      margin: '0 auto 20px'
    }
  },
  cardIcon: {
    fontSize: '24px',
    '@media (min-width: 768px)': {
      fontSize: '36px'
    }
  },
  cardTitle: {
    margin: '0 0 8px',
    color: '#002f34',
    fontSize: '16px',
    fontWeight: '700',
    '@media (min-width: 768px)': {
      fontSize: '20px',
      margin: '0 0 12px'
    }
  },
  cardDescription: {
    margin: '0 0 10px',
    color: '#5f6c72',
    fontSize: '12px',
    lineHeight: '1.4',
    '@media (min-width: 768px)': {
      fontSize: '15px',
      lineHeight: '1.5'
    }
  },
  cardCategory: {
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    background: '#f0f0f0',
    color: '#5f6c72',
    fontSize: '11px',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  cardIndicator: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    height: '3px',
    background: '#8a2be2',
    transformOrigin: 'left',
    transition: 'transform 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
    '@media (min-width: 768px)': {
      height: '4px'
    }
  },
  noResults: {
    gridColumn: '1 / -1',
    textAlign: 'center',
    padding: '40px',
    color: '#5f6c72'
  },
  sectionTitle: {
    color: '#002f34',
    fontSize: '20px',
    fontWeight: '600',
    margin: '30px 0 15px'
  }
};

export default DraftFormsPage;
