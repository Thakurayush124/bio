import React from 'react';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
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
    gridColumn: '1 / 2',
  
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
     textAlign: 'left'
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
    marginBottom: '16px'
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px',
    marginBottom: '32px'
  },
  paragraph: {
    color: '#4a5568',
    marginBottom: '16px',
    lineHeight: '1.6',
     textAlign: 'left'

  },
  quote: {
    backgroundColor: '#f8f9fa',
    padding: '16px',
    borderRadius: '8px'
  },
  quoteText: {
    fontStyle: 'italic',
    color: '#4a5568'
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
    
    .contentGrid {
      grid-template-columns: 1fr !important;
    }
  }
  
`;

const BioPage = () => {
  // Add media query styles to document
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
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>BIODIVERSITY</h1>
      </header>

      {/* Main content grid */}
      <div style={styles.mainGrid} className="mainGrid">
        {/* Sidebar */}
        <nav style={styles.sidebar} className="sidebar">
          <div style={styles.sectionLabel}>IN THIS SECTION</div>
          <a href="#" style={{...styles.navLink, ...styles.activeNavLink}}>Our Work</a>
          <a href="#" style={styles.navLink}>Biodiversity</a>
          <a href="#" style={styles.navLink}>Our Study</a>
          <a href="#" style={styles.navLink}>Biodiversity Projects</a>
          <a href="#" style={styles.navLink}>Regional Stories</a>
        </nav>

        {/* Main content */}
        <main style={styles.mainContent} className="mainContent">
          <div style={styles.card}>
            <img 
              src="pic3.jpg" 
              alt="Green iguana on tree branch"
              style={styles.image}
            />
          </div>

          {/* What is Biodiversity section */}
          <section>
            <h2 style={styles.sectionTitle}>WHAT IS BIODIVERSITY?</h2>
            <div style={styles.contentGrid} className="contentGrid">
              <div>
                <p style={styles.paragraph}>
                  Biodiversity is the amazing variety of life on Earth, and it is fundamental to thriving ecosystems and communities. Plants, animals, fungi and even micro-organisms have important roles to play in maintaining a planet that supports more than 7 billion people.
                </p>
                <p style={styles.paragraph}>
                  Wherever you live—in a city, town or village, a farming community or far from civilization—you depend on nature. It is the source of water, food, fuel, medicines, climate regulation, and for many, economic activity, recreation and spiritual sustenance. We cannot thrive or being healthy as well. And biodiversity is an essential part of nature.
                </p>
              </div>
              <div style={styles.quote}>
                <p style={styles.quoteText}>
                  At least 40% of the world's economy and 80% of the needs of the poor are derived from biological resources.
                </p>
                <p style={{...styles.quoteText, marginTop: '16px'}}>
                  The U.N. Convention on Biological Diversity
                </p>
              </div>
            </div>
          </section>

          {/* The Challenge section */}
          <section>
            <h2 style={styles.sectionTitle}>THE CHALLENGE: EXTINCTION CRISIS</h2>
            <p style={styles.paragraph}>
              Biodiversity is under momentous threat. According to the Living Planet Index, global populations of fish, birds, mammals, amphibians and reptiles declined by 58% from 1970 to 2012. Of the more than 85,000 species assessed on the IUCN Red List of Threatened Species, 28% are threatened with extinction.
            </p>
            <p style={styles.paragraph}>
              Threats to biodiversity include habitat destruction, poaching and over-harvesting, pollution and introduction of non-native species. For example, the once plentiful grizzly bear is being decimated by poaching, habitat loss and persecution.
            </p>
            <p style={styles.paragraph}>
              A 2016 Red List assessment found numbers plummeted by up to 40% over the last 30 years, making the species vulnerable to extinction. Globally, this kind of species loss impacts ecosystem health and undermines supplies of food, fresh water, raw materials and medicines, and limits the potential for species-related scientific discoveries that benefit people.
            </p>
          </section>
          <section>
            <h2 style={styles.sectionTitle}>WHAT IS BIODIVERSITY?</h2>
            <div style={styles.contentGrid} className="contentGrid">
              <div>
                <p style={styles.paragraph}>
                  Biodiversity is the amazing variety of life on Earth, and it is fundamental to thriving ecosystems and communities. Plants, animals, fungi and even micro-organisms have important roles to play in maintaining a planet that supports more than 7 billion people.
                </p>
                <p style={styles.paragraph}>
                  Wherever you live—in a city, town or village, a farming community or far from civilization—you depend on nature. It is the source of water, food, fuel, medicines, climate regulation, and for many, economic activity, recreation and spiritual sustenance. We cannot thrive or being healthy as well. And biodiversity is an essential part of nature.
                </p>
              </div>
              <div style={styles.quote}>
                <p style={styles.quoteText}>
                  At least 40% of the world's economy and 80% of the needs of the poor are derived from biological resources.
                </p>
                <p style={{...styles.quoteText, marginTop: '16px'}}>
                  The U.N. Convention on Biological Diversity
                </p>
              </div>
            </div>
          </section>

          {/* The Challenge section */}
          <section>
            <h2 style={styles.sectionTitle}>THE CHALLENGE: EXTINCTION CRISIS</h2>
            <p style={styles.paragraph}>
              Biodiversity is under momentous threat. According to the Living Planet Index, global populations of fish, birds, mammals, amphibians and reptiles declined by 58% from 1970 to 2012. Of the more than 85,000 species assessed on the IUCN Red List of Threatened Species, 28% are threatened with extinction.
            </p>
            <p style={styles.paragraph}>
              Threats to biodiversity include habitat destruction, poaching and over-harvesting, pollution and introduction of non-native species. For example, the once plentiful grizzly bear is being decimated by poaching, habitat loss and persecution.
            </p>
            <p style={styles.paragraph}>
              A 2016 Red List assessment found numbers plummeted by up to 40% over the last 30 years, making the species vulnerable to extinction. Globally, this kind of species loss impacts ecosystem health and undermines supplies of food, fresh water, raw materials and medicines, and limits the potential for species-related scientific discoveries that benefit people.
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
            padding: 4rem 2rem;
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

export default BioPage;