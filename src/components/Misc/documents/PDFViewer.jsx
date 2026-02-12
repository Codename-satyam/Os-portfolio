import React, { useState } from 'react';
import './PDFViewer.scss';

const PDFViewer = () => {
  const [selectedPdf, setSelectedPdf] = useState('cv1.pdf');
  const [scale, setScale] = useState(100);

  const pdfFiles = [
    { name: 'cv1.pdf', label: 'CV 1' },
    { name: 'satyam_specialized[1].pdf', label: 'Satyam Specialized' },
  ];

  const currentPdf = `/documents/${selectedPdf}`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentPdf;
    link.download = selectedPdf;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    const iframe = document.getElementById('pdf-viewer');
    iframe.contentWindow.print();
  };

  const handleZoomIn = () => {
    setScale(prevScale => Math.min(prevScale + 10, 200));
  };

  const handleZoomOut = () => {
    setScale(prevScale => Math.max(prevScale - 10, 50));
  };

  return (
    <div className="pdf-viewer-container">
      <div className="pdf-header">
        <div className="pdf-controls-left">
          <label htmlFor="pdf-select" className="pdf-label">
            Select Document:
          </label>
          <select
            id="pdf-select"
            value={selectedPdf}
            onChange={(e) => {
              setSelectedPdf(e.target.value);
              setScale(100);
            }}
            className="pdf-select"
          >
            {pdfFiles.map((pdf) => (
              <option key={pdf.name} value={pdf.name}>
                {pdf.label}
              </option>
            ))}
          </select>
        </div>

        <div className="pdf-controls-center">
          <button
            onClick={handleZoomOut}
            className="pdf-btn zoom-btn"
            title="Zoom Out"
          >
            −
          </button>
          <span className="pdf-zoom-level">{scale}%</span>
          <button
            onClick={handleZoomIn}
            className="pdf-btn zoom-btn"
            title="Zoom In"
          >
            +
          </button>
        </div>

        <div className="pdf-controls-right">
          <button
            onClick={handlePrint}
            className="pdf-btn export-btn"
            title="Print Document"
          >
            🖨️ Print
          </button>
          <button
            onClick={handleDownload}
            className="pdf-btn export-btn"
            title="Download Document"
          >
            ⬇️ Download
          </button>
        </div>
      </div>

      <div className="pdf-viewer-wrapper">
        <iframe
          id="pdf-viewer"
          src={currentPdf}
          className="pdf-iframe"
          title="PDF Viewer"
          style={{
            transform: `scale(${scale / 100})`,
            transformOrigin: 'top left',
            width: `${100 / (scale / 100)}%`,
            height: `${100 / (scale / 100)}%`,
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default PDFViewer;
