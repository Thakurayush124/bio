import React, { useState } from 'react';

const WildlifeMonitorDashboard = () => {
  const [inputs, setInputs] = useState({
    year: 2023,
    region: '',
    deforestationRate: 0,
    urbanizationRate: 0,
    protectedAreaCoverage: 0,
    humanPopulationDensity: 0,
    illegalPoachingCases: 0,
    conservationProjects: 0,
    annualPrecipitation: 0,
    temperatureAnomaly: 0,
    wildlifeCount: 0
  });

  const [output, setOutput] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value) || value
    }));
  };

  const analyzeWildlifeChanges = () => {
    const {
      deforestationRate, 
      urbanizationRate, 
      protectedAreaCoverage, 
      illegalPoachingCases,
      conservationProjects,
      temperatureAnomaly
    } = inputs;

    const impactScore = 
      (deforestationRate * -2) + 
      (urbanizationRate * -1.5) + 
      (protectedAreaCoverage * 1) + 
      (conservationProjects * 1.5) + 
      (illegalPoachingCases * -1) + 
      (temperatureAnomaly * -0.5);

    const trend = impactScore > 0 ? 'Increase' : 'Decrease';

    setOutput({
      trend,
      impactScore: Math.abs(impactScore).toFixed(2)
    });
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      background: 'linear-gradient(135deg, #e0f8f7, #b2dfdb)',
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    },
    headerSection: {
      display: 'flex',
      marginBottom: '20px',
      background: 'rgba(255,255,255,0.7)',
      borderRadius: '10px',
      padding: '20px'
    },
    modelDescription: {
      flex: '2',
      paddingRight: '20px',
      marginRight: '100px',
      textAlign: 'left'
    },
    imageContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    modelImage: {
      maxWidth: '130%',
      maxHeight: '300px',
    
      borderRadius: '10px',
    },
    dashboardContainer: {
      background: 'rgba(255,255,255,0.7)',
      borderRadius: '10px',
      padding: '20px'
    },
    inputGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '15px'
    },
    inputField: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      marginBottom: '5px',
      color: '#2c3e50'
    },
    input: {
      padding: '10px',
      border: '1px solid #3498db',
      borderRadius: '5px'
    },
    button: {
      gridColumn: 'span 3',
      padding: '12px',
      backgroundColor: '#2ecc71',
      color: 'white',
      border: 'none',
      borderRadius: '7px',
      cursor: 'pointer'
    },
    resultSection: {
      marginTop: '20px', 
      textAlign: 'center'
    },
    resultCard: {
      background: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
    },
   
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerSection}>
        <div style={styles.modelDescription}>
          <h2>Wildlife Impact Predictor Model</h2>
          <p>This advanced ecological monitoring model assesses wildlife population dynamics by analyzing critical environmental factors:</p>
          <ul>
            <li>Deforestation impacts</li>
            <li>Urbanization pressures</li>
            <li>Protected area effectiveness</li>
            <li>Human population interactions</li>
            <li>Conservation efforts</li>
            <li>Climate change indicators</li>
          </ul>
          <p>Our predictive algorithm calculates a comprehensive impact score, revealing potential trends in wildlife population changes.</p>
        </div>
        <div style={styles.imageContainer}>
          <img 
            src="" 
            alt="Wildlife Ecosystem Model" 
            style={styles.modelImage}
          />
        </div>
      </div>

      <div style={styles.dashboardContainer}>
        <div style={styles.inputGrid}>
          {Object.keys(inputs).map(key => (
            <div key={key} style={styles.inputField}>
              <label style={styles.label}>
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </label>
              <input
                type="number"
                name={key}
                value={inputs[key]}
                onChange={handleInputChange}
                style={styles.input}
              />
            </div>
          ))}
          <button 
            onClick={analyzeWildlifeChanges}
            style={styles.button}
          >
            Predict Wildlife Impact
          </button>
        </div>

        {output && (
          <div style={styles.resultSection}>
            <h2>Prediction Results</h2>
            <div style={styles.resultCard}>
              <p>Wildlife Population Trend: <strong>{output.trend}</strong></p>
              <p>Impact Intensity: <strong>{output.impactScore}</strong></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WildlifeMonitorDashboard;