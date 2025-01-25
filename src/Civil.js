import React from 'react';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    backgroundColor: '#f5f5f5',
    padding: '24px',
    marginBottom: '32px'
  },
  headerTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
    textAlign: 'left'
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px'
  },
  sidebar: {
    gridColumn: '1 / 2'
  },
  sectionLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#666',
    marginBottom: '16px'
  },
  navLink: {
    color: '#666',
    cursor: 'pointer',
    marginBottom: '8px',
    display: 'block',
    textDecoration: 'none',
     textAlign: 'left',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#e53e3e'
    }
  },
  activeNavLink: {
    color: '#e53e3e'
  },
  mainContent: {
    gridColumn: '2 / 5'
  },
  card: {
    marginBottom: '32px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: 'white'
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block'
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '16px',
    marginTop: '24px'
  },
  paragraph: {
    color: '#4a5568',
    marginBottom: '16px',
    lineHeight: '1.6',
     textAlign: 'left'
  },
  link: {
    color: '#4a5568',
    textDecoration: 'underline',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#e53e3e'
    }
  }
};

// Media query styles
const mediaStyles = `
  @media (max-width: 768px) {
    .mainGrid {
      grid-template-columns: 1fr !important;
    }
    
    .sidebar {
      grid-column: 1 / -1 !important;
      margin-bottom: 24px;

    }
    
    .mainContent {
      grid-column: 1 / -1 !important;
    }
  }
`;

const CivilSocietyPage = () => {
  React.useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = mediaStyles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>CIVIL SOCIETY</h1>
        
      </header>

      <div style={styles.mainGrid} className="mainGrid">
        <nav style={styles.sidebar} className="sidebar">
          <div style={styles.sectionLabel}>IN THIS SECTION</div>
          <a href="#" style={{...styles.navLink, ...styles.activeNavLink}}>Our Work</a>
          <a href="#" style={styles.navLink}>Biodiversity</a>
          <a href="#" style={styles.navLink}>Civil Society</a>
          <a href="#" style={styles.navLink}>Biodiversity Projects</a>
          <a href="#" style={styles.navLink}>Regional Stories</a>
          <a href="#" style={styles.navLink}>Ecosystem Profile Manual</a>
        </nav>

        <main style={styles.mainContent} className="mainContent">
          <div style={styles.card}>
            <img 
              src="Flores-Island-residents.jpg" 
              alt="Group of people working in nature"
              style={styles.image}
            />
          </div>

          <section>
            <h2 style={styles.sectionTitle}>WHAT IS CIVIL SOCIETY?</h2>
            <p style={styles.paragraph}>
              According to the <a href="#" style={styles.link}>United Nations</a>, civil society is the "third sector" of society, along with government and business.
            </p>
            <p style={styles.paragraph}>
              From CEPF's perspective, civil society includes nongovernmental organizations, communities, indigenous peoples organizations, universities and small businesses, among others.
            </p>
            <p style={styles.paragraph}>
              CEPF was formed to champion biodiversity by delivering the financial resources of global donors to civil society groups, who then carry out the conservation work themselves. Enabling civil society organizations to participate in and influence the conservation of the world's biodiversity hotspots is the hallmark of CEPF's approach.
            </p>
          </section>

          <section>
            <h2 style={styles.sectionTitle}>WHY DOES CEPF FOCUS ON CIVIL SOCIETY?</h2>
            <p style={styles.paragraph}>
              By creating a model that channels funds directly to civil society groups in the biodiversity hotspots, CEPF enables communities to take charge of the conservation of their own ecosystems, gives them the resources and tools they need to act on the challenge of conserving their natural heritage and find ways of sustainably benefiting from it.
            </p>
            <p style={styles.paragraph}>
              CEPF's grantees work closely with local people to map out a future in which biodiversity and communities together prosper. In addition to conserving species and ecosystems, the work done by CEPF grantees typically benefits local villagers, farmers, small businesses, teachers, fishermen and business owners. Their livelihoods and well-being are usually closely linked to ecosystem services, and they have the local knowledge and long-term stake in an area that are essential to ensuring that they can conserve their biodiversity and use their ecosystems sustainably.
            </p>
            <p style={styles.paragraph}>
              By creating a model that channels funds directly to civil society groups in the biodiversity hotspots, CEPF enables communities to take charge of the conservation of their own ecosystems, gives them the resources and tools they need to act on the challenge of conserving their natural heritage and find ways of sustainably benefiting from it.
            </p>
            <p style={styles.paragraph}>
              CEPF's grantees work closely with local people to map out a future in which biodiversity and communities together prosper. In addition to conserving species and ecosystems, the work done by CEPF grantees typically benefits local villagers, farmers, small businesses, teachers, fishermen and business owners. Their livelihoods and well-being are usually closely linked to ecosystem services, and they have the local knowledge and long-term stake in an area that are essential to ensuring that they can conserve their biodiversity and use their ecosystems sustainably.
            </p>
          </section>
          <section>
            <h2 style={styles.sectionTitle}>WHAT IS CIVIL SOCIETY?</h2>
            <p style={styles.paragraph}>
              According to the <a href="#" style={styles.link}>United Nations</a>, civil society is the "third sector" of society, along with government and business.
            </p>
            <p style={styles.paragraph}>
              From CEPF's perspective, civil society includes nongovernmental organizations, communities, indigenous peoples organizations, universities and small businesses, among others.
            </p>
            <p style={styles.paragraph}>
              CEPF was formed to champion biodiversity by delivering the financial resources of global donors to civil society groups, who then carry out the conservation work themselves. Enabling civil society organizations to participate in and influence the conservation of the world's biodiversity hotspots is the hallmark of CEPF's approach.
            </p>
          </section>
        </main>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="initiative-text">
            CEPF is a joint initiative of l'
            <a href="#" className="footer-link">Agence Française de Développement</a>, 
            <a href="#" className="footer-link">Conservation International</a>, the 
            <a href="#" className="footer-link">European Union</a>, the 
            <a href="#" className="footer-link">Global Environment Facility</a>, the 
            <a href="#" className="footer-link">Government of Japan</a> and 
            <a href="#" className="footer-link">the World Bank</a>.
          </div>
          
          <div className="language-buttons">
            <button className="lang-btn">Lire les traductions en français de l'information de base</button>
            <button className="lang-btn">コア情報の日本語訳を読む</button>
          </div>

          <div className="footer-bottom">
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">YouTube</a>
            </div>

            <div className="newsletter-signup">
              <a href="#" className="signup-link">
                SIGN UP FOR THE LATEST NEWS FROM CEPF
                <span className="arrow">→</span>
              </a>
            </div>

            <div className="footer-meta">
              <span>©2025 Conservation International</span>
              <a href="#" className="meta-link">Privacy Policy</a>
              <a href="#" className="meta-link">Terms of Service</a>
              <span>Built by blenderbox</span>
            </div>
          </div>
        </div>
      </footer>
      <style>{
        `
        .footer {
            background-color: #F2F2F2;
            color: red;
            text-align: center;
            font-weight: bold;
            padding: 4rem 3rem;
            margin-top: 25vh;
          }

          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
          }

          .initiative-text {
            text-align: center;
            margin-bottom: 2rem;
            line-height: 1.6;
          }

          .footer-link {
            color:rgb(0, 0, 0);
            text-decoration: none;
            transition: color 0.3s;
          }

          .footer-link:hover {
            color: #C0392B;
          }

          .language-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 3rem;
            flex-wrap: wrap;
          }

          .lang-btn {
            background-color: #E74C3C;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .lang-btn:hover {
            background-color: #C0392B;
          }

          .footer-bottom {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            padding-top: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .social-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
          }

          .social-link {
            color: black;
            text-decoration: none;
            transition: color 0.3s;
          }

          .social-link:hover {
            color: #E74C3C;
          }

          .newsletter-signup {
            text-align: center;
          }

          .signup-link {
            color: black;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: bold;
            transition: color 0.3s;
          }

          .signup-link:hover {
            color: #E74C3C;
          }

          .arrow {
            font-size: 1.2rem;
          }

          .footer-meta {
            display: flex;
            justify-content: center;
            gap: 2rem;
            color: #95A5A6;
            font-size: 0.9rem;
            flex-wrap: wrap;
          }

          .meta-link {
            color: #95A5A6;
            text-decoration: none;
            transition: color 0.3s;
          }

         

          @media (max-width: 768px) {
            .footer {
              padding: 2rem 1rem;
            }

            .language-buttons {
              flex-direction: column;
            }

            .footer-meta {
              flex-direction: column;
              align-items: center;
              gap: 1rem;
              text-align: center;
            }

            .social-links {
              flex-wrap: wrap;
            }
          }    `}

      </style>
    </div>
  );
};

export default CivilSocietyPage;