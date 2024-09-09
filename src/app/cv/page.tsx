'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react';

const PdfViewer = () => {
  const searchParams = useSearchParams();
  const pdfName = searchParams.get('name') || undefined;
  
  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        src={'/pdf/' + pdfName + '.pdf'}
        width="80%"
        height="90%"
        style={{ border: 'none' }}
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default PdfViewer;
