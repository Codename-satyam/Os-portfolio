import React from 'react';
import PDFViewer from './PDFViewer';
import './documents.scss';

const Documents = () => {
  return (
    <div className="documents-container">
      <div className="documents-title">
        <h2>📄 Documents & CVs</h2>
        <p>View and download my professional documents</p>
      </div>
      <div className="pdf-viewer-section">
        <PDFViewer />
      </div>
    </div>
  );
};

export default Documents;
