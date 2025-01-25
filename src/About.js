import React from 'react';

const AboutPage = () => {
  const paragraphStyle = {
    fontSize: '20px',
    lineHeight: 1.6,
    color: '#444',
    textAlign: 'left',
    marginBottom: '20px'
  };

  const largeParagraphStyle = {
    ...paragraphStyle,
    fontSize: '20px'
  };

  const statsParagraphStyle = {
    ...paragraphStyle,
    fontSize: '20px',
    color: '#333'
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333'
    }}>
      <section style={{
        display: 'flex',
        gap: '40px',
        marginBottom: '40px',
        alignItems: 'flex-start'
      }}>
        <div style={{ flex: 1 }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: 'bold',
            color: '#1a1a1a',
            marginBottom: '20px',
            fonrFamily: 'open sans ', //
            
          }}>ABOUT</h1>
          <p style={largeParagraphStyle}>
            Biodiversity—the rich array of life on Earth—is fundamental to human survival, but under immediate and growing threat. The Critical Ecosystem Partnership Fund (CEPF) was founded in 2000 recognizing that civil society must take leadership in society in developing countries and transitional economies to protect the world's biodiversity hotspots, which are some of Earth's most biologically rich yet threatened terrestrial ecosystems.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img 
            src="pic26.jpg"
            alt="Conservation efforts"
            style={{
              width: '100%',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </section>

      <section style={{
        backgroundColor: '#f5f5f5',
        padding: '30px',
        borderRadius: '8px',
        marginBottom: '40px'
      }}>
        <p style={statsParagraphStyle}>
          Through grants totaling more than US$296 million and technical assistance to over 2,700 civil society organizations and individuals, we have been able to conserve more than 1,500 species on the IUCN Red List of Threatened Species and contributed to the establishment of 17.1 million hectares of new protected areas.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '45px',
          fontWeight: 'bold',
          color: '#1a1a1a',
          textAlign: 'left',
          marginBottom: '45px'
        }}>WHAT MAKES US UNIQUE</h2>
        <p style={paragraphStyle}>
          By supporting development of conservation strategies for the biodiversity hotspots that are driven by local input, and providing grants to civil society—nongovernmental, private sector and academic organizations—to implement these strategies, CEPF seeks to ensure biodiversity conservation, build long-term conservation leadership and nurture sustainable development.
        </p>
        <p style={paragraphStyle}>
          These strategies also are designed to be valuable to other entities working to conserve the hotspots, and often lead to collaboration and coordination with other organizations and governments.
        </p>
        <p style={paragraphStyle}>
          CEPF's investments are especially important because the hotspots are home to more than 1 billion people, millions of whom are impoverished and highly dependent on nature for survival.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{
          fontSize: '45px',
          fontWeight: 'bold',
          color: '#1a1a1a',
          marginBottom: '45px',
          textAlign:'left'
        }}>OUR DONOR PARTNERS</h2>
        <p style={paragraphStyle}>
          The fund is a joint program of l'Agence Française de Développement, Conservation International, the European Union, the Global Environment Facility, the Government of Japan and the World Bank.
        </p>
      </section>

      <section>
        <h2 style={{
          fontSize: '45px',
          fontWeight: 'bold',
          color: '#1a1a1a',
          marginBottom: '20px',
          textAlign: 'left'
        }}>WATCH OUR VIDEO</h2>
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: '8px',
          
        }}>
          <img
            src="pic27.jpg"
            alt="Video placeholder"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none'
            }}
          />
        </div>
      </section>
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

          .meta-link:hover {
            color: white;
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

export default AboutPage;