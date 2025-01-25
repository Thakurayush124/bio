import React, { useState } from 'react';

const AquaticMonitoring = () => {
  // Inline styles to replace external CSS
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '3% auto',
      padding: '20px',
      backgroundColor: 'white',
      
      borderRadius: '15px',
    },
    introSection: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    infCards: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '20px',
    },
    infoCard: {
      flex: 1,
      margin: '0 10px',
      padding: '20px',
      backgroundColor: '#f0f8ff',
      borderRadius: '10px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
    },
    infoCardHover: {
      transform: 'scale(1.05)',
    },
    infoCardSvg: {
      width: '80px',
      height: '80px',
      marginBottom: '15px',
      color: '#4a90e2',
    },
    form: {
      backgroundColor: '#f4f9ff',
      padding: '30px',
      borderRadius: '15px',
    },
    formGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '15px',
    },
    input: {
      width: '90%',
      padding: '12px',
      border: '1px solid #b0d4ff',
      borderRadius: '8px',
    },
    submitBtn: {
      width: '100%',
      padding: '15px',
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      marginTop: '20px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    resultSection: {
      marginTop: '30px',
      textAlign: 'center',
    },
    resultCards: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    resultCard: {
      flex: 1,
      margin: '0 10px',
      padding: '20px',
      backgroundColor: '#e6f2ff',
      borderRadius: '10px',
    },
  };

  const [formData, setFormData] = useState({
    location: '',
    waterType: '',
    surveyDate: '',
    speciesCount: '',
    observationMethod: ''
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate monitoring result generation
    setResults({
      biodiversityIndex: Math.random() * 100,
      speciesDetected: Math.floor(Math.random() * 20),
      healthStatus: ['Healthy', 'Moderate', 'Critical'][Math.floor(Math.random() * 3)]
    });
  };

  // SVG Icons 
  const FishIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.infoCardSvg}>
      <path d="M12 22c4.1 0 7.5-2.9 8-7 .5-5-3-8.5-8-8.5S4 10 4 15c.5 4.1 3.9 7 8 7z"/>
      <path d="M10 12.5L12.5 10"/>
      <path d="M16 11c-1.5-1.5-3.5 0-3.5 0"/>
    </svg>
  );

  const SeaIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.infoCardSvg}>
      <path d="M12 3a7 7 0 0 0-7 7v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4a7 7 0 0 0-7-7z"/>
      <path d="M12 19v3"/>
      <path d="M8 22h8"/>
      <path d="M6 10h12"/>
    </svg>
  );

  const DataIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={styles.infoCardSvg}>
      <path d="M3 3v18h18"/>
      <path d="M18 17V9"/>
      <path d="M13 17V5"/>
      <path d="M8 17v-3"/>
    </svg>
  );

  return (
    <div style={styles.container}>
      <div style={styles.introSection}>
        <h1>🌊 Aquatic Animal Monitoring System</h1>
        <div style={styles.infCards}>
          <div style={styles.infoCard} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <FishIcon />
            <h3>Purpose</h3>
            <p>Track and analyze aquatic ecosystem biodiversity</p>
          </div>
          <div style={styles.infoCard} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <SeaIcon />
            <h3>Methodology</h3>
            <p>Advanced survey techniques for marine life tracking</p>
          </div>
          <div style={styles.infoCard} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
            <DataIcon />
            <h3>Insights</h3>
            <p>Generate comprehensive ecosystem reports</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Survey Input</h2>
        <div style={styles.formGrid}>
          <input
            type="text"
            name="location"
            placeholder="Survey Location"
            value={formData.location}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <select
            name="waterType"
            value={formData.waterType}
            onChange={handleInputChange}
            required
            style={styles.input}
          >
            <option value="">Select Water Type</option>
            <option value="marine">Marine</option>
            <option value="freshwater">Freshwater</option>
            <option value="brackish">Brackish</option>
          </select>
          <input
            type="date"
            name="surveyDate"
            value={formData.surveyDate}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="speciesCount"
            placeholder="Estimated Species Count"
            value={formData.speciesCount}
            onChange={handleInputChange}
            required
            style={styles.input}
          />
          <select
            name="observationMethod"
            value={formData.observationMethod}
            onChange={handleInputChange}
            required
            style={styles.input}
          >
            <option value="">Observation Method</option>
            <option value="underwater">Underwater Camera</option>
            <option value="sonar">Sonar Tracking</option>
            <option value="drone">Drone Survey</option>
          </select>
        </div>
        <button type="submit" style={{...styles.submitBtn, ':hover': {backgroundColor: '#357abd'}}}>
          Generate Ecosystem Report
        </button>
      </form>

      {results && (
        <div style={styles.resultSection}>
          <h2>Ecosystem Analysis Results</h2>
          <div style={styles.resultCards}>
            <div style={styles.resultCard}>
              <h3>Biodiversity Index</h3>
              <p>{results.biodiversityIndex.toFixed(2)}/100</p>
            </div>
            <div style={styles.resultCard}>
              <h3>Species Detected</h3>
              <p>{results.speciesDetected}</p>
            </div>
            <div style={styles.resultCard}>
              <h3>Ecosystem Health</h3>
              <p>{results.healthStatus}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AquaticMonitoring;