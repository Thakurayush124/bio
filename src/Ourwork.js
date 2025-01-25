
import React from 'react';

const OurWork = () => {
  return (
    <div className="our-work-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h1>OUR WORK</h1>
          <p>
            <span className="highlight">Biodiversity</span> is fundamental to a healthy planet and 
            thriving communities, but the world's species are under tremendous threat. 
            CEPF fills a unique, strategic role in addressing the biodiversity crisis, 
            mobilizing international, regional and local partners to protect the world's 
            biodiversity hotspots.
          </p>
        
          <div className="goal">
            <section className="goal-section">
              <h2>OUR GOAL</h2>
              <p>Conserving <span className="highlight">biodiversity</span>.</p>
            </section>

            <section className="unique-section">
              <h2>WHAT MAKES US UNIQUE</h2>
              <div className="text-blocks">
                <p>
                  By supporting the development of conservation strategies driven by local input, and providing grants to 
                  <span className="highlight"> civil society</span>—nongovernmental, private sector and academic organizations—to implement those strategies, 
                  CEPF seeks to protect biodiversity, build local conservation leadership and nurture sustainable development. 
                  We believe this is the most effective path to conservation and communities that flourish.
                </p>

                <p>
                  CEPF's investments are especially important because the 
                  <span className="highlight"> biodiversity hotspots</span> are home to millions of people who are impoverished 
                  and highly dependent on nature for survival.
                </p>

                <p>
                  While a lot of global conservation funding is directed to governments, experience has shown us that engaging with and 
                  strengthening local civil society in the developing and transitional countries of the biodiversity hotspots is 
                  <span className="highlight"> critical to the long-term</span> success of conservation.
                </p>
              </div>
            </section>
          </div>
        
          <div className="additional-sections">
            <section className="grants-section">
              <h2>OUR GRANTS</h2>
              <ul>
                <li>
                  Are guided by <span className="highlight">ecosystem profiles</span>—analyses of the biodiversity and socio-economic conditions in hotspots.
                </li>
                <li>
                  Go directly to civil society groups in the biodiversity hotspots to build this vital constituency for conservation.
                </li>
                <li>
                  Are awarded on a competitive basis.
                </li>
                <li>
                  Create working alliances among diverse groups, combining unique capacities and eliminating duplication of efforts.
                </li>
              </ul>
            </section>

            <section className="process-section">
              <h2>OUR PROCESS</h2>
              <img 
                src="world-map-Infographic-_0.png"
                alt="Our Process Diagram" 
                className="process-image"
              />
            </section>
          </div>
        </div>
        
        <div className="image-content">
          <img 
            src="tree-planting_0.jpg"
            alt="Tree planting in Dominican Republic" 
            className="main-image"
          />
          <p className="image-caption">
            Planting a tree as part of the Dominican Republic's first carbon offset 
            program, established by grantee El Consorcio Ambiental Dominicano.
            © O. Langrand
          </p>
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

          .
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
      <style jsx>{`
        .our-work-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          background-color: #ffffff;
        }

        .content-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .text-content {
          max-width: 800px;
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
          line-height: 1.2;
          text-align: left;
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          color: #1a1a1a;
          line-height: 1.2;
          text-align: left;
        }

        p {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 1.5rem;
          text-align: left;
        }

        .highlight {
          color: #ef4444;
          font-weight: 500;
        }

        .goal-section,
        .unique-section,
        .grants-section,
        .process-section {
          margin-bottom: 4rem;
        }

        .text-blocks {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .grants-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
          text-align: left;
        }

        .grants-section li {
          font-size: 1.125rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
          position: relative;
        }

        .grants-section li::before {
          content: "•";
          color: #ef4444;
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .image-content {
          position: sticky;
          top: 2rem;
        }

        .main-image {
          width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .image-caption {
          font-size: 0.875rem;
          font-weight: bold.
          color: white;
          line-height: 1.4;
        }

        .process-image {
          width: 100%;
          height: auto;
          margin-top: 1rem;
          border-radius: 0.5rem;
        }

        @media (max-width: 1024px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .image-content {
            position: static;
            max-width: 600px;
            margin: 2rem auto;
          }

          h1 {
            font-size: 2.25rem;
          }

          h2 {
            font-size: 1.75rem;
          }
        }

        @media (max-width: 768px) {
          .our-work-container {
            padding: 1rem;
          }

          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.5rem;
          }

          p, 
          .grants-section li {
            font-size: 1rem;
          }

          .text-content {
            max-width: 100%;
          }
        }

        @media print {
          .our-work-container {
            max-width: 100%;
            padding: 0;
          }

          .image-content {
            position: static;
          }

          .content-wrapper {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default OurWork;