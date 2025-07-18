


import React, { useState, useEffect } from 'react';

const RealEstateSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Real estate property data
  const properties = [
    {
      id: 1,
      title: "Luxury Waterfront Villa",
      price: "$2,450,000",
      location: "Miami Beach, FL",
      beds: 5,
      baths: 4,
      sqft: "3,500",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: true
    },
    {
      id: 2,
      title: "Modern Downtown Loft",
      price: "$1,250,000",
      location: "New York, NY",
      beds: 2,
      baths: 2,
      sqft: "1,800",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Mountain Retreat",
      price: "$895,000",
      location: "Aspen, CO",
      beds: 4,
      baths: 3,
      sqft: "2,800",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      featured: true
    }
  ];

  // Auto slide change every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [properties.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: 'auto',
      margin: '0 auto',
      overflow: 'hidden',
      // borderRadius: '16px',
      boxShadow: '0 15px 40px rgba(0,0,0,0.12)'
    }}>
      {/* Slides container */}
      <div style={{
        display: 'flex',
        transition: 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
        transform: `translateX(-${currentSlide * 100}%)`,
        height: '91vh',
        width: '100%',
      }}>
        {properties.map((property, index) => (
          <div 
            key={property.id}
            style={{
              minWidth: '100%',
              position: 'relative',
              height: '100%',
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(${property.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              padding: '40px',
              boxSizing: 'border-box',
              color: 'white',
              textAlign: 'left'
            }}
          >
            {/* {property.featured && (
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                backgroundColor: '#FF5A5F',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: 'bold',
                zIndex: 2
              }}>
                FEATURED
              </div>
            )} */}
            
            {/* <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              padding: '25px',
              borderRadius: '8px',
              maxWidth: '600px',
              backdropFilter: 'blur(5px)'
            }}>
              <h2 style={{
                fontSize: '2.2rem',
                marginBottom: '10px',
                fontWeight: '700',
                color: 'white'
              }}>{property.title}</h2>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <span style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: '#FFD166',
                  marginRight: '15px'
                }}>{property.price}</span>
                
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '15px'
                }}>
                  <svg style={{ width: '18px', height: '18px', marginRight: '5px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {property.location}
                </span>
              </div>
              
              <div style={{
                display: 'flex',
                gap: '20px',
                marginBottom: '20px'
              }}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <svg style={{ width: '18px', height: '18px', marginRight: '5px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {property.beds} Beds
                </span>
                
                <span style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <svg style={{ width: '18px', height: '18px', marginRight: '5px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {property.baths} Baths
                </span>
                
                <span style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <svg style={{ width: '18px', height: '18px', marginRight: '5px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  {property.sqft} sq.ft.
                </span>
              </div>
              
              <button style={{
                padding: '12px 30px',
                backgroundColor: '#FF5A5F',
                color: 'white',
                border: 'none',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                ':hover': {
                  backgroundColor: '#FF3B40',
                  transform: 'translateY(-2px)'
                }
              }}>
                Schedule a Tour
                <svg style={{ width: '20px', height: '20px', marginLeft: '8px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div> */}
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={goToPrevSlide}
        style={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '1.5rem',
          color: '#333',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          ':hover': {
            backgroundColor: 'white',
            transform: 'translateY(-50%) scale(1.1)'
          }
        }}
      >
        &lt;
      </button>
      <button 
        onClick={goToNextSlide}
        style={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.9)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          fontSize: '1.5rem',
          color: '#333',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          transition: 'all 0.3s ease',
          ':hover': {
            backgroundColor: 'white',
            transform: 'translateY(-50%) scale(1.1)'
          }
        }}
      >
        &gt;
      </button>

      {/* Dots indicator */}
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '12px'
      }}>
        {properties.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: currentSlide === index ? '24px' : '12px',
              height: '12px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: currentSlide === index ? '#FF5A5F' : 'rgba(255,255,255,0.5)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

    
     
    </div>
  );
};

export default RealEstateSlider;