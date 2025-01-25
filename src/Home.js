import React, { useState } from 'react';

const HeroSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    }
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setIsSubmitted(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (selectedImage) {
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-section">
            <h1>OUR PLANET'S FUTURE DEPENDS ON BIODIVERSITY</h1>
            <p className="hero-description">
              The Critical Ecosystem Partnership Fund (CEPF) enables civil society to protect the 
              world's biodiversity hotspots— biologically rich ecosystems that are 
              essential to humanity, yet highly threatened.
            </p>
            <a href="#" className="learn-more">
              LEARN MORE ABOUT CEPF
              <span className="plus-icon">+</span>
            </a>
          </div>
          <div className="image-section">
            <div className="image-wrapper">
              <img 
                src="spectacled_langur_c_olangrand.jpg"
                alt="Spectacled langurs in Thailand" 
                className="hero-image" 
              />
              <div className="image-caption">
                Spectacled langurs (Trachypithecus obscurus), Thailand.
                <br />© O. Langrand
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Explore Section */}
      <div className="explore-container">
        <h2>EXPLORE PROJECTS</h2>
        <p className="explore-description">
          With financial and technical support from CEPF, civil society organizations around the globe are delivering 
          innovative solutions that conserve biodiversity and help communities thrive. Find out what they're doing by 
          clicking on biodiversity hotspots highlighted on the map.
        </p>
      </div>

      {/* Upload Section */}
      <div className="container">
        <div className="upload-section">
          <h2>Upload Your Photo</h2>
          <div className="upload-box">
            <input 
              type="file" 
              id="photo-upload" 
              accept="image/*" 
              onChange={handleImageUpload}
              className="file-input"
            />
            <label htmlFor="photo-upload" className="upload-label">
              Choose a file
            </label>
            <p className="upload-text">or drag and drop here</p>
          </div>
        </div>
        <div className="preview-section">
          <h2>Preview</h2>
          <div className="preview-box">
            {selectedImage ? (
              <img src={selectedImage} alt="Preview" className="preview-image" />
            ) : (
              <div className="placeholder">
                No image selected
              </div>
            )}
          </div>
          {selectedImage && !isSubmitted && (
            <button 
              onClick={handleSubmit}
              className="submit-button"
            >
              Submit Photo
            </button>
          )}
          {isSubmitted && (
            <div className="success-message">
              Successfully submitted!
            </div>
          )}
        </div>
      </div>

      {/* News Section */}
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
      <style>{`
        .hero-container {
          width: 90%;
          background-color: #f8f8f8;
          position: relative;
          overflow: hidden;
          margin: 10vh auto;
        }

        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          position: relative;
          padding: 2rem;
          min-height: 600px;
        }

        .text-section {
          flex: 1;
          padding-right: 2rem;
          max-width: 500px;
          z-index: 2;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 2rem;
        }

        h1 {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .image-section {
          position: absolute;
          right: -10%;
          top: 0;
          width: 65%;
          height: 100%;
          overflow: hidden;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          transform: skew(-10deg);
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          width: 120%;
          height: 100%;
          object-fit: cover;
          transform: skew(10deg);
          right: -10%;
        }

        .image-caption {
          position: absolute;
          bottom: 1rem;
          left: 2rem;
          color: white;
          font-size: 0.875rem;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
          transform: skew(10deg);
        }

        .learn-more {
          color: #e53e3e;
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .explore-container {
          max-width: 1200px;
          margin: 4rem auto;
          padding: 0 2rem;
          text-align: center;
        }

        .explore-description {
          max-width: 1200px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
          
        }

        /* Upload Section Styles */
        .container {
          display: flex;
          gap: 2rem;
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 2rem;
        }

        .upload-section, .preview-section {
          flex: 1;
        }

        .upload-box {
          border: 2px dashed #ccc;
          padding: 2rem;
          text-align: center;
          border-radius: 8px;
          background: #f9f9f9;
          cursor: pointer;
          transition: border-color 0.3s;
        }

        .upload-box:hover {
          border-color: #666;
        }

        .file-input {
          display: none;
        }

        .upload-label {
          background: #e53e3e;
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          display: inline-block;
          margin-bottom: 1rem;
          transition: background-color 0.3s;
        }

        .upload-label:hover {
          background: #c53030;
        }

        .preview-box {
          border: 1px solid #ddd;
          border-radius: 8px;
          overflow: hidden;
          aspect-ratio: 16/9;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f9f9f9;
          margin-bottom: 1rem;
        }

        .submit-button {
          background: #38a169;
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          border: none;
          width: 100%;
          font-size: 1rem;
          transition: background-color 0.3s;
        }

        .submit-button:hover {
          background: #2f855a;
        }

        .success-message {
          background: #c6f6d5;
          color: #2f855a;
          padding: 1rem;
          border-radius: 4px;
          text-align: center;
          margin-top: 1rem;
          font-weight: 500;
        }

        /* News Section Styles */
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

        @media (min-width: 1024px) {
          .news-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .hero-content {
            flex-direction: column;
            padding: 1rem;
          }

          .text-section {
            max-width: 100%;
            padding-right: 0;
            margin-bottom: 2rem;
            
          }

          .image-section {
            position: relative;
            width: 100%;
            height: 400px;
            right: 0;
          }

          .image-wrapper {
            transform: none;
          }

          .hero-image {
            transform: none;
            right: 0;
            width: 100%;
          }

          .image-caption {
            transform: none;
          }

          h1 {
            font-size: 2rem;
          }

          .container {
            flex-direction: column;
          }

          .upload-section, .preview-section {
            width: 100%;
          }

          .explore-container {
            margin: 3rem auto;
            padding: 0 1rem;
          }

          .explore-description {
            font-size: 1rem;
          }
        }
        .footer {
            background-color: #F2F2F2;
            color: red;
            text-align: center;
            font-weight: bold;
            padding: 4rem 2rem;
            margin-top: 4rem;
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
          }  
      `}</style>
    </div>
  );
};

export default HeroSection;