import {Request, Response} from 'express';
import PDFDocument from 'pdfkit';

export const generatePDF = (req: Request | any, res: Response | any) => {
    const doc = new PDFDocument();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=generated.pdf');

    doc.pipe(res);

    doc.fontSize(25).text('Hello, World!', 100, 100);

    doc.end();
};
