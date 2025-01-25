import { Bold } from 'lucide-react';
import React from 'react';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '24px',
    marginBottom: '48px',
    backgroundColor: '#f5f5f5',
    padding: '24px'
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  heroTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '16px'
  },
  heroText: {
    color: '#4a5568',
    lineHeight: '1.6'
  },
  heroImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',

  },
  sectionTitle: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '24px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '24px',
    marginBottom: '48px'
  },
  card: {
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'translateY(-4px)'
    }
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  cardTitle: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '12px',
    // background: 'rgba(0,0,0,0.7)',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight:'bold',
  },
  infoIcon: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    width: '24px',
    height: '24px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer'
  }
};

const HotspotCard = ({ title, imagePath }) => (
  <div style={styles.card}>
    <img src={imagePath} alt={title} style={styles.cardImage} />
    <div style={styles.infoIcon}>i</div>
    <div style={styles.cardTitle}>{title}</div>
  </div>
);

const BiodiversityHotspots = () => {
  const currentHotspots = [
    { title: 'Caribbean Islands', image: 'pic1.jpg' },
    { title: 'Cerrado', image: 'pic2.jpg' },
    { title: 'Indo-Burma', image: 'pic3.jpg' },
    { title: 'Madagascar and the Indian Ocean Islands', image: 'pic4.jpg' },
    { title: 'Mediterranean Basin', image: 'pic5.jpg' },
    { title: 'Mountains of Central Asia', image: 'pic6.jpg' },
    { title: 'Tropical Andes', image: 'pic7.jpg' },
    { title: 'Wallacea', image: 'pic8.jpg' }
  ];

  const previousHotspots = [
    { title: 'Atlantic Forest', image: 'pic9.jpg' },
    { title: 'Cape Floristic Region', image: 'pic10.jpg' },
    { title: 'Caucasus', image: 'pic11.jpg' },
    { title: 'Coastal Forests of Eastern Africa', image: 'pic12.jpg' },
    { title: 'East Melanesian Islands', image: 'pic13.jpg' },
    { title: 'Eastern Afromontane', image: 'pic14.jpg' },
    { title: 'Guinean Forests of West Africa', image: 'pic15.jpg' },
    { title: 'Himalaya', image: 'pic16.jpg' },
    { title: 'Maputaland-Pondoland-Albany', image: 'pic17.jpg' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>EXPLORE THE BIODIVERSITY HOTSPOTS</h1>
          <p style={styles.heroText}>
            CEPF provides work in developing and transitional countries, where most of the world's biodiversity is located. Home to most terrestrial areas. Since 2001, CEPF has funded conservation in 25 of the 36 hotspots.
          </p>
        </div>
        <img 
          src="cape-may-warbler_0.jpg" 
          alt="Biodiversity"
          style={styles.heroImage}
        />
      </div>

      <h2 style={styles.sectionTitle}>CEPF IS CURRENTLY INVESTING IN 8 HOTSPOTS:</h2>
      <div style={styles.grid}>
        {currentHotspots.map(hotspot => (
          <HotspotCard 
            key={hotspot.title}
            title={hotspot.title}
            imagePath={hotspot.image}  // Fixed: Using imagePath prop correctly
          />
        ))}
      </div>

      <h2 style={styles.sectionTitle}>CEPF PREVIOUSLY INVESTED IN 17 HOTSPOTS:</h2>
      <div style={styles.grid}>
        {previousHotspots.map(hotspot => (
          <HotspotCard 
            key={hotspot.title}
            title={hotspot.title}
            imagePath={hotspot.image}  // Fixed: Using imagePath prop correctly
          />
        ))}
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

export default BiodiversityHotspots;