import React from 'react';

const styles = {
  page: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    backgroundColor: '#f5f5f5',
    padding: '40px',
    marginBottom: '60px',
    alignItems: 'center'
  },
  headerContent: {
    color: '#333'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  headerText: {
    lineHeight: '1.6',
    marginBottom: '20px',
    textAlign:'left'
  },
  headerImage: {
    width: '70%',
    height: 'auto',
    borderRadius: '8px',
     transform: 'rotate(-3deg)'
  },
  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginBottom: '60px'
  },
  step: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  stepNumber: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#333',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    marginBottom: '20px'
  },
  stepTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    textAlign: 'center'
  },
  stepDesc: {
    color: '#666',
    marginBottom: '20px',
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'transparent',
    border: '2px solid #333',
    padding: '10px 20px',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#333',
      color: 'white'
    }
  },
  newsletter: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    gap: '30px',
    backgroundColor: '#f5f5f5',
    padding: '30px',
    marginBottom: '60px',
    alignItems: 'center'
  },
  newsletterImage: {
    width: '120%',
    height: 'auto',
    borderRadius: '8px',
    marginLeft: '150px'
  },
  recentGrants: {
    marginBottom: '60px'
  },
  recentGrantsTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '30px'
  },
  grantsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px'
  },
  grantCard: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  grantImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  grantTitle: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '15px',
    background: 'rgba(0,0,0,0.7)',
    color: 'white',
    fontSize: '0.9rem'
  }
};

const GrantsPage = () => {
  const recentGrants = [
    {
      title: "Protecting Endemic Species in Madagascar",
      image: "pic21.jpg"
    },
    {
      title: "Rainforest Conservation in South America",
      image: "pic22.jpg"
    },
    {
      title: "Marine Ecosystem Protection",
      image: "pic23.jpg" 
    },
    {
      title: "Mountain Habitat Preservation",
      image: "pic21.jpg"
    }
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>GRANTS</h1>
          <p style={styles.headerText}>
            CEPF has funded biodiversity conservation projects old span more than 25 countries across the globe.
            We support civil society organizations at all sizes — from farmers cooperatives and community groups
            to universities and international nongovernmental organizations.
          </p>
          <p style={styles.headerText}>
            If this is your first time applying for a CEPF grant, the process may seem a bit daunting, so we've provided
            guidance in three steps to help get you started.
          </p>
        </div>
        <img    
          src="pic6.jpg" 
          alt="Wildlife"
          style={styles.headerImage}
        />
      </header>

      <div style={styles.steps}>
        <div style={styles.step}>
          <div style={styles.stepNumber}>1</div>
          <h2 style={styles.stepTitle}>ELIGIBILITY</h2>
          <p style={styles.stepDesc}>Find out if your organization and project idea are eligible for CEPF funding</p>
          <button style={styles.button}>Learn About Eligibility</button>
        </div>

        <div style={styles.step}>
          <div style={styles.stepNumber}>2</div>
          <h2 style={styles.stepTitle}>BEFORE YOU APPLY</h2>
          <p style={styles.stepDesc}>Understand what CEPF is looking for in a successful proposal</p>
          <button style={styles.button}>Read Proposal Guidance</button>
        </div>

        <div style={styles.step}>
          <div style={styles.stepNumber}>3</div>
          <h2 style={styles.stepTitle}>HOW TO APPLY</h2>
          <p style={styles.stepDesc}>Provide a letter of inquiry along with required documents</p>
          <button style={styles.button}>Prepare Your Application</button>
        </div>
      </div>

      <div style={styles.newsletter}>
        <img 
          src="pic19.jpg" 
          alt="Newsletter"
          style={styles.newsletterImage}
        />
        <div>
          <h2 style={styles.stepTitle}>CEPF E-NEWS</h2>
          <p style={styles.stepDesc}>Be one of the first people to learn about new open calls.</p>
          <button style={styles.button}>SIGN UP FOR CEPF E-NEWS</button>
        </div>
      </div>

      <div style={styles.recentGrants}>
        <h2 style={styles.recentGrantsTitle}>RECENT GRANTS:</h2>
        <div style={styles.grantsGrid}>
          {recentGrants.map((grant, index) => (
            <div key={index} style={styles.grantCard}>
              <img src={grant.image} alt={grant.title} style={styles.grantImage} />
              <div style={styles.grantTitle}>{grant.title}</div>
            </div>
          ))}
        </div>
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

export default GrantsPage;
