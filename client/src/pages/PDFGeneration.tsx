import React, {useState} from 'react';

const PDFGeneration: React.FC = () => {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const generatePDF = async () => {
        try {
            const response = await fetch('/api/generate-pdf', {method: 'POST'});
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            setPdfUrl(url);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <div>
            <h1>PDF Generation</h1>
            <button onClick={generatePDF}>Generate PDF</button>
            {pdfUrl && (
                <div>
                    <a href={pdfUrl} download="generated.pdf">Download PDF</a>
                </div>
            )}
        </div>
    );
}

export default PDFGeneration;
