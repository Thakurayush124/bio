import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  header: {
    backgroundColor: '#f5f5f5',
    padding: '24px',
    marginBottom: '32px',
  },
  headerTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    margin: 0,
    textAlign: 'left',
  },
  mainGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
  },
  sidebar: {
    gridColumn: '1 / 2',
  },
  sectionLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#666',
    marginBottom: '16px',
  },
  navLink: {
    color: '#666',
    cursor: 'pointer',
    marginBottom: '8px',
    display: 'block',
    textDecoration: 'none',
    textAlign: 'left',
  },
  activeNavLink: {
    color: '#e53e3e',
  },
  mainContent: {
    gridColumn: '2 / 5',
  },
  card: {
    marginBottom: '32px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '16px',
  },
  contentGrid: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '24px',
    marginBottom: '32px',
  },
  paragraph: {
    color: '#4a5568',
    marginBottom: '16px',
    lineHeight: '1.6',
    textAlign: 'left',
  },
  quote: {
    backgroundColor: '#f8f9fa',
    padding: '16px',
    borderRadius: '8px',
  },
  quoteText: {
    fontStyle: 'italic',
    color: '#4a5568',
  },
  
};

const Apply = () => {
  const [files, setFiles] = useState({
    projectProposal: null,
    securityScreening: null,
    financialQuestionnaire: null,
    taxForm: null,
    bankInfo: null,
    signatoryInfo: null,
    cashFlow: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e, fieldName) => {
    setFiles({
      ...files,
      [fieldName]: e.target.files[0],
    });
  };

  const validateFiles = () => {
    const newErrors = {};
    for (const [key, value] of Object.entries(files)) {
      if (!value) {
        newErrors[key] = 'This document is required';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFiles()) return;

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitted(true);
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add media query styles dynamically
  useEffect(() => {
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
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = mediaStyles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>HOW TO APPLY</h1>
      </header>

      <div style={styles.mainGrid} className="mainGrid">
        <nav style={styles.sidebar} className="sidebar">
          <div style={styles.sectionLabel}>IN THIS SECTION</div>
          <a href="#" style={{ ...styles.navLink, ...styles.activeNavLink }}>
            Grant
          </a>
          <a href="#" style={styles.navLink}>
            Eligibility
          </a>
          <a href="#" style={styles.navLink}>
            Before You Apply
          </a>
          <a href="#" style={styles.navLink}>
            How To Apply
          </a>
          <a href="#" style={styles.navLink}>
            Life Cycle of a Grant
          </a>
          <a href="#" style={styles.navLink}>
            What Can Be Funded?
          </a>
          <a href="#" style={styles.navLink}>
            FAQs
          </a>
          <a href="#" style={styles.navLink}>
            Downloads
          </a>
        </nav>

        <main style={styles.mainContent} className="mainContent">
          <div style={styles.card}>
            <img
              src="pic25.jpg"
              alt="Green iguana on tree branch"
              style={styles.image}
            />
          </div>

          {/* Content sections */}
          <section>
            <h2 style={styles.sectionTitle}>WHAT IS BIODIVERSITY?</h2>
            <div style={styles.contentGrid} className="contentGrid">
              <div>
                <p style={styles.paragraph}>
                  Biodiversity is the amazing variety of life on Earth, and it
                  is fundamental to thriving ecosystems and communities.
                </p>
                <p style={styles.paragraph}>
                  Wherever you live—in a city, town or village, a farming
                  community or far from civilization—you depend on nature.
                </p>
              </div>
              <div style={styles.quote}>
                <p style={styles.quoteText}>
                  At least 40% of the world's economy and 80% of the needs of
                  the poor are derived from biological resources.
                </p>
                <p
                  style={{
                    ...styles.quoteText,
                    marginTop: '16px',
                  }}
                >
                  The U.N. Convention on Biological Diversity
                </p>
              </div>
            </div>
          </section>
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
         
      <section className="section">
        <h2 className="section-title">READ THE COMPLETE CALL</h2>
        <p className="text">
          Each call for proposals includes important details about the projects that are eligible. Review the information in the call to find out:
        </p>
        <ul className="list">
          <li>Countries where the project can take place</li>
          <li>Strategic directions - the conservation objectives that CEPF-funded projects must contribute to</li>
          <li>Language(s) that the letter of inquiry can be written in</li>
          <li>Due date</li>
          <li>Where you can send questions</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">PREPARE YOUR LETTER OF INQUIRY</h2>
        <p className="text">
          If you are applying for a large grant, you will submit your letter of inquiry directly to us via the online grant management system ConservationGrants. Details that you will need are provided in the system as described in the Letter of Inquiry template (DOC, 19KB). If you have never used ConservationGrants before, you will need to register.
        </p>
        <p className="text">
          If you are applying for a small grant, an official template (available in all of the languages specified in the call) will be provided directly to you and reviewed by CEPF's regional implementation team in the hotspot.
        </p>
        <p className="text">
          Before submitting your letter of inquiry, we encourage you to read our{' '}
          <a href="#" className="link">12 Tips for Starting Your Grant Idea</a>.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">WRITE YOUR FULL PROPOSAL (LARGE GRANTS ONLY)</h2>
        <p className="text">
          Applicants invited to prepare a full proposal will also be asked to submit the following supporting documents along with the proposal:
        </p>
        <ul className="list">
          <li>Project Timeline (DOC, 44KB)</li>
          <li>Monthly Spending Request Form (DOC, 70KB)</li>
          <li>Financial Questionnaire (XLS, 184KB) and supporting documents</li>
          <li>World Bank vendor form</li>
          <li>Bank account information (CEPF may require that a project-specific bank account be opened before your project begins)</li>
          <li>Signatory information</li>
          <li>Work plan covering the first four months of grant</li>
        </ul>
      </section>

          {/* Document Upload */}
          <div className="document-upload">
            {submitted ? (
              <div className="success-message">
                <h3>Success!</h3>
                <p>All documents have been uploaded successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {Object.keys(files).map((key) => (
                  <div className="form-group" key={key}>
                    <label>{key.replace(/([A-Z])/g, ' $1')}</label>
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e, key)}
                    />
                    {errors[key] && <span className="error">{errors[key]}</span>}
                  </div>
                ))}
                <button type="submit" disabled={loading}>
                  {loading ? 'Uploading...' : 'Submit Documents'}
                </button>
              </form>
            )}
          </div>
        </main>
      </div>
      <style>
        {
          `
          
          .document-upload {
  max-width: 800px;
  margin: 2rem auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #333;
}

input[type="file"] {
  width: 100%;
  padding: 12px;
  font-size: 0.9rem;
  border: 2px dashed #ddd;
  border-radius: 6px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;
}

input[type="file"]:hover {
  border-color: #999;
}

input[type="file"]:focus {
  outline: none;
  border-color: #e53e3e;
  background-color: #fef2f2;
}

.error {
  display: block;
  margin-top: 6px;
  color: #dc2626;
  font-size: 0.85rem;
}

button[type="submit"] {
  width: 100%;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #e53e3e;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #c53030;
}

button[type="submit"]:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.success-message {
  padding: 20px;
  background: #f0fdf4;
  border-radius: 6px;
  border: 1px solid #86efac;
  text-align: center;
}

.success-message h3 {
  margin-bottom: 12px;
  color: #15803d;
  font-size: 1.5rem;
}

.success-message p {
  color: #166534;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .document-upload {
    padding: 16px;
  }

  button[type="submit"] {
    font-size: 0.95rem;
  }
}
 .section {
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .text {
          color: #4a5568;
          margin-bottom: 1rem;
          line-height: 1.6;
          text-align: left;
        }

        .list {
          list-style-type: disc;
          padding-left: 1.5rem;
          color: #4a5568;
          margin-bottom: 2rem;
         
        }

        .list li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
          text-align: left;
        }

        .link {
          color: #e53e3e;
          text-decoration: underline;
          transition: color 0.2s ease;
        }

        .link:hover {
          color: #c53030;
        }

        @media (max-width: 768px) {
          .grant-section {
            padding: 0 0.5rem;
          }

          .section-title {
            font-size: 1.125rem;

          }
          
          `
        }
      </style>
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
      <style>
        {
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
          `
        }
      </style>
    </div>
  );
};

export default Apply;

