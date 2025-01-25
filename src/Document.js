import React, { useState } from 'react';

const DocumentUploadForm = () => {
  const [files, setFiles] = useState({
    projectProposal: null,
    securityScreening: null,
    financialQuestionnaire: null,
    taxForm: null,
    bankInfo: null,
    signatoryInfo: null,
    cashFlow: null
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFileChange = (e, fieldName) => {
    setFiles({
      ...files,
      [fieldName]: e.target.files[0]
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
     
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
    } catch (error) {
      console.error('Error uploading files:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="document-upload">
      {submitted ? (
        <div className="success-message">
          <h3>Success!</h3>
          <p>All documents have been uploaded successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Project Proposal (DOC - 44KB)</label>
            <input
              type="file"
              accept=".doc,.docx"
              onChange={(e) => handleFileChange(e, 'projectProposal')}
            />
            {errors.projectProposal && <span className="error">{errors.projectProposal}</span>}
          </div>

          <div className="form-group">
            <label>Security Screening Request Form (DOC - 70KB)</label>
            <input
              type="file"
              accept=".doc,.docx"
              onChange={(e) => handleFileChange(e, 'securityScreening')}
            />
            {errors.securityScreening && <span className="error">{errors.securityScreening}</span>}
          </div>

          <div className="form-group">
            <label>Financial Questionnaire (XLS - 84KB) and supporting documents</label>
            <input
              type="file"
              accept=".xls,.xlsx"
              onChange={(e) => handleFileChange(e, 'financialQuestionnaire')}
            />
            {errors.financialQuestionnaire && <span className="error">{errors.financialQuestionnaire}</span>}
          </div>

          <div className="form-group">
            <label>W9 or W8-BEN-E tax form</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => handleFileChange(e, 'taxForm')}
            />
            {errors.taxForm && <span className="error">{errors.taxForm}</span>}
          </div>

          <div className="form-group">
            <label>Bank account information</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, 'bankInfo')}
            />
            {errors.bankInfo && <span className="error">{errors.bankInfo}</span>}
          </div>

          <div className="form-group">
            <label>Signatory information</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e, 'signatoryInfo')}
            />
            {errors.signatoryInfo && <span className="error">{errors.signatoryInfo}</span>}
          </div>

          <div className="form-group">
            <label>Cash flow estimate for first five months of grant</label>
            <input
              type="file"
              accept=".xls,.xlsx,.pdf"
              onChange={(e) => handleFileChange(e, 'cashFlow')}
            />
            {errors.cashFlow && <span className="error">{errors.cashFlow}</span>}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Uploading...' : 'Submit Documents'}
          </button>
        </form>
      )}

      <style jsx>{`
        .document-upload {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #333;
        }

        input[type="file"] {
          width: 100%;
          padding: 10px;
          border: 2px dashed #ddd;
          border-radius: 4px;
          background: #f9f9f9;
        }

        input[type="file"]:hover {
          border-color: #999;
        }

        .error {
          display: block;
          color: #dc2626;
          font-size: 14px;
          margin-top: 4px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        button:hover {
          background: #b91c1c;
        }

        button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .success-message {
          text-align: center;
          padding: 40px;
          background: #f0fdf4;
          border-radius: 8px;
          border: 1px solid #86efac;
        }

        .success-message h3 {
          color: #15803d;
          font-size: 24px;
          margin-bottom: 12px;
        }

        .success-message p {
          color: #166534;
        }
      `}</style>
    </div>
  );
};

export default DocumentUploadForm;