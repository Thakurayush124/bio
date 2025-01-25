import React from 'react';

const Sidebar = () => (
  <div className="sidebar">
    <h3>IN THIS SECTION</h3>
    <ul>
      <li><a href="#grants">Grants</a></li>
      <li><a href="#eligibility">Eligibility</a></li>
      <li><a href="#before-you-apply">Before You Apply</a></li>
      <li><a href="#how-to-apply">How to Apply</a></li>
      <li><a href="#what-can-be-funded">What Can Be Funded?</a></li>
      <li><a href="#grant-faqs">Grant FAQs</a></li>
      <li><a href="#project-faqs">Project FAQs</a></li>
      <li><a href="#reporting">Reporting</a></li>
      <li><a href="#downloads">Downloads</a></li>
      <li><a href="#cepf-and-gender">CEPF and Gender</a></li>
      <li><a href="#monitoring-framework">Monitoring Framework</a></li>
    </ul>
  </div>
);

const BeforeYouApply = () => (
  <div className="page-container">
    <Sidebar />
    <div className="content">
      <h1>BEFORE YOU APPLY</h1>
      
      <div className="hero-image">
        <img src="b.jpg" alt="Field researcher examining specimen" />
        <p className="image-caption">Before making investments, CEPF works with many local stakeholders to create ecosystem profiles</p>
      </div>

      <p className="intro-text">Before applying for a CEPF grant, please carefully review the following information.</p>

      <section className="eligibility">
        <h2>ELIGIBILITY</h2>
        <p>If you haven't already done so, confirm your organization is <a href="#eligible">eligible to apply</a> for a CEPF grant.</p>
      </section>

      <section className="open-calls">
        <h2>OPEN CALLS FOR PROPOSALS</h2>
        <p>We only accept grant applications during open calls for proposals. During an open call, applicants are asked to submit a "letter of inquiry," which is a brief explanation of their project idea. Open calls are posted on our <a href="#proposals">calls for proposals</a> page.</p>
      </section>

      <section className="ecosystem-profile">
        <h2>ECOSYSTEM PROFILE</h2>
        <p>Before investing in a biodiversity hotspot, CEPF works with many local stakeholders including nongovernmental organizations, government officials and academics to create an "ecosystem profile." An ecosystem profile examines the current status of biodiversity in the region and is used to determine CEPF's investment priorities, called <strong>strategic directions</strong>.</p>
        <p>Before submitting a letter of inquiry, it's important that you read the ecosystem profile for the biodiversity hotspot where your project will take place, especially the list of "strategic directions," which identify the types of activity that CEPF will fund. Each project must address at least one strategic direction from the ecosystem profile.</p>
        <p>Ecosystem profiles can be found on the pages for hotspots where CEPF currently works:</p>
        <ul className="hotspots-list">
          <li><a href="#caribbean">Caribbean Islands</a></li>
          <li><a href="#indo-burma">Indo-Burma</a></li>
          <li><a href="#madagascar">Madagascar and the Indian Ocean Islands</a></li>
          <li><a href="#mediterranean">Mediterranean Basin</a></li>
          <li><a href="#mountains">Mountains of Central Asia</a></li>
          <li><a href="#andes">Tropical Andes</a></li>
          <li><a href="#wallacea">Wallacea</a></li>
        </ul>
      </section>

      <section className="grants-info">
        <h2>SMALL GRANTS</h2>
        <p>CEPF's small grants are typically US$20,000 or less (but may be up to US$50,000 in some hotspots). These grants are managed by the CEPF regional implementation team (RIT) in the biodiversity hotspot.</p>
        <p>Small grant applicants can submit their project idea in English or one of the hotspot's local languages specified in the call. Unlike a large grant application, you will not need to complete a longer document known as the project proposal.</p>
        <p>Several months after the call for proposals has closed, you will receive notification from the RIT letting you know if your project will be funded.</p>

        <h2>LARGE GRANTS</h2>
        <p>CEPF's large grants range in size. The average amount is around US$150,000. Grants of more than US$500,000 are approved by the CEPF Donor Council. Large grants are managed by the CEPF team in Arlington, Virginia, USA, with assistance from the hotspot's RIT.</p>
        <p>Letters of inquiry for large grants are submitted through ConservationGrants. They may be submitted in English. Other languages may also be accepted; the call for proposals will let you know.</p>
        <p>If your letter of inquiry is recommended to proceed to the next stage, you will be notified and invited to submit a full project proposal, which will also be completed in ConservationGrants.</p>

        <h2>TIME FRAME</h2>
        <p>Calls for proposals are open several times for each hotspot where CEPF is active. However, you must wait for an open call before submitting a project idea. Calls for proposals are typically open for six to eight weeks.</p>
        <p>After the call has closed, large grant applicants can expect to hear whether or not they are invited to submit a full project proposal within about three months. Small grant decisions are made by the RIT and typically take three to four months.</p>
      </section>
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
            width: 180vh;
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

export default BeforeYouApply;

const styles = document.createElement('style');
styles.textContent = `
  .page-container {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .sidebar {
    background: #f5f5f5;
    padding: 20px;
  }

  .sidebar h3 {
    font-size: 14px;
    margin-bottom: 15px;
    color: #666;
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
    text-align: left;
  }

  .sidebar li {
    margin-bottom: 10px;
  }

  .sidebar a {
    color: #e74c3c;
    text-decoration: none;
    font-size: 14px;
  }

  .sidebar a:hover {
    text-decoration: underline;
  }

  .content {
    padding: 20px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 30px;
    color: #333;
  }

  h2 {
    font-size: 24px;
    margin: 30px 0 15px;
    color: #333;
    text-align: left;
  }

  .hero-image {
    margin: 30px 0;
    position: relative;
  }

  .hero-image img {
    width: 80%;
    height: auto;
    border-radius: 4px;
  }

  .image-caption {
    font-size: 12px;
    color: #666;
    margin-top: 10px;
  }

  .intro-text {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  section {
    margin-bottom: 40px;
  }

  p {
    line-height: 1.6;
    margin-bottom: 15px;
    color: #444;
    text-align: left;
  }

  a {
    color: #e74c3c;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .hotspots-list {
    
    padding: 0;
    margin: 20px 0;
    text-align: left;
  }

  .hotspots-list li {
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
    color: #333;
  }

  @media (max-width: 768px) {
    .page-container {
      grid-template-columns: 1fr;
    }

    .sidebar {
      margin-bottom: 30px;
    }
  }
`;

document.head.appendChild(styles);