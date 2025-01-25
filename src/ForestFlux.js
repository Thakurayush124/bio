import React, { useState } from 'react';
const newsItems = [
    {
      image: "/api/placeholder/400/300",
      title: "CEPF 2023 Impact and Annual Report",
      description: "CEPF's grantees are doing great things for biodiversity and people. Read all about it in the latest Impact Report.",
      link: "#",
      linkText: "LEARN MORE"
    },
    {
      image: "/api/placeholder/400/300",
      title: "CEPF to Collaborate With Conservation International for GEF Small Grants Program",
      description: "With Conservation International as a New Implementing Agency, CEPF Will Serve as Delivery Mechanism",
      link: "#",
      linkText: "READ MORE"
    },
    {
      image: "/api/placeholder/400/300",
      title: "Government of Canada Provides US$14.4 Million for Biodiversity and Gender Equity",
      description: "Funding will support efforts in the Tropical Andes, Cerrado and Indo-Burma biodiversity hotspots",
      link: "#",
      linkText: "READ MORE"
    },
    {
        image: "/api/placeholder/400/300",
        title: "Government of Canada Provides US$14.4 Million for Biodiversity and Gender Equity",
        description: "Funding will support efforts in the Tropical Andes, Cerrado and Indo-Burma biodiversity hotspots",
        link: "#",
        linkText: "READ MORE"
      },
  ];

const ForestReductionCalculator = () => {
  const [inputs, setInputs] = useState({
    humanCivilizationRate: 0,
    carbonEmissionRate: 0,
    factoriesSetupRate: 0,
    dependencyOnForestProducts: 0,
    tribalPopulation: 0
  });

  const [forestReduction, setForestReduction] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value)
    }));
  };

  const calculateForestReduction = () => {
    const { 
      humanCivilizationRate, 
      carbonEmissionRate, 
      factoriesSetupRate, 
      dependencyOnForestProducts, 
      tribalPopulation 
    } = inputs;

    const reduction = (
      humanCivilizationRate * 0.3 + 
      carbonEmissionRate * 0.25 + 
      factoriesSetupRate * 0.2 - 
      tribalPopulation * 0.05 - 
      dependencyOnForestProducts * 0.1
    ).toFixed(2);

    setForestReduction(Math.max(0, Math.min(100, reduction)));
  };

  // Custom SVG Icons
  const TreeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2c5e2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="M12 5c0 4 3 8 7 8" />
      <path d="M12 5c0 4-3 8-7 8" />
      <path d="M12 19c0-4 3-8 7-8" />
      <path d="M12 19c0-4-3-8-7-8" />
    </svg>
  );

  const GlobeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2c5e2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );

  const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
    </svg>
  );

  const FactoryIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );

  const styles = {
    container: {
      maxWidth: '700px',
      margin: '0 auto',
      padding: '20px',
      background: 'linear-gradient(135deg, #e6f3e6, #c2e0c2)',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    },
    heading: {
      textAlign: 'center',
      color: '#2c5e2c',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    instructionSection: {
      backgroundColor: 'rgba(255,255,255,0.6)',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '20px'
    },
    instructionItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '10px'
    },
    inputGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '15px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      marginBottom: '5px',
      color: '#3a7a3a',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    input: {
      padding: '10px',
      border: '1px solid #8bc38b',
      borderRadius: '5px',
      backgroundColor: '#f0f9f0'
    },
    calculateBtn: {
      width: '100%',
      padding: '12px',
      marginTop: '20px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    resultContainer: {
      marginTop: '20px',
      textAlign: 'center'
    },
    reductionMeter: {
      height: '30px',
      background: 'linear-gradient(to right, #ff6347, #ff4500)',
      borderRadius: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      transition: 'width 0.5s ease'
    }
  };

  return (
    <>
     <div className="news-container">
        <h2>How to use</h2>
        <div className="news-grid">
          {newsItems.map((item, index) => (
            <div key={index} className="news-item">
              <img src={item.image} alt={item.title} className="news-image" />
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.link} className="news-link">
                  {item.linkText}
                  <span className="plus-icon">+</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <TreeIcon />
        Forest Area Reduction Calculator
        <GlobeIcon />
      </h1>

      <div style={styles.instructionSection}>
        <div style={styles.instructionItem}>
          <UsersIcon /> 
          <strong>Human Civilization Rate:</strong> Impact of urban expansion (0-100)
        </div>
        <div style={styles.instructionItem}>
          <CloudIcon /> 
          <strong>Carbon Emission Rate:</strong> Pollution's effect on forests (0-100)
        </div>
        <div style={styles.instructionItem}>
          <FactoryIcon /> 
          <strong>Factories Setup Rate:</strong> Industrial development impact (0-100)
        </div>
      </div>
      
      <div style={styles.inputGrid}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            <UsersIcon /> Human Civilization Rate
          </label>
          <input 
            type="number" 
            name="humanCivilizationRate"
            value={inputs.humanCivilizationRate}
            onChange={handleInputChange}
            min="0" 
            max="100"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>
            <CloudIcon /> Carbon Emission Rate
          </label>
          <input 
            type="number" 
            name="carbonEmissionRate"
            value={inputs.carbonEmissionRate}
            onChange={handleInputChange}
            min="0" 
            max="100"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>
            <FactoryIcon /> Factories Setup Rate
          </label>
          <input 
            type="number" 
            name="factoriesSetupRate"
            value={inputs.factoriesSetupRate}
            onChange={handleInputChange}
            min="0" 
            max="100"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>
            <TreeIcon /> Dependency on Forest Products
          </label>
          <input 
            type="number" 
            name="dependencyOnForestProducts"
            value={inputs.dependencyOnForestProducts}
            onChange={handleInputChange}
            min="0" 
            max="100"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>
            <UsersIcon /> Tribal Population
          </label>
          <input 
            type="number" 
            name="tribalPopulation"
            value={inputs.tribalPopulation}
            onChange={handleInputChange}
            min="0" 
            max="100"
            style={styles.input}
          />
        </div>
      </div>

      <button 
        onClick={calculateForestReduction} 
        style={styles.calculateBtn}
      >
        Calculate Forest Reduction
      </button>

      {forestReduction !== null && (
        <div style={styles.resultContainer}>
          <h2>Forest Area Reduction</h2>
          <div 
            style={{
              ...styles.reductionMeter,
              width: `${forestReduction}%`
            }}
          >
            {forestReduction}%
          </div>
        </div>
      )}
    </div>
    <style>
        {
`
.news-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        .news-container h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #333;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }

        .news-item {
          background: #f8f8f8;
          border-radius: 4px;
          overflow: hidden;
          transition: transform 0.3s;
        }

        .news-item:hover {
          transform: translateY(-5px);
        }

        .news-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .news-content {
          padding: 1.5rem;
        }

        .news-content h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .news-content p {
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .news-link {
          display: inline-flex;
          align-items: center;
          color: #e53e3e;
          text-decoration: none;
          font-weight: bold;
          gap: 0.5rem;
          transition: color 0.3s;
        }

        .news-link:hover {
          color: #c53030;
        }

        .plus-icon {
          font-size: 1.2rem;
        }

        @media (min-width: 768px) {
          .news-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

`

        }
    </style>
    </>
  );
};

export default ForestReductionCalculator;