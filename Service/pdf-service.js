
const PDFDocument = require('pdfkit');



function buildpdf(dataCallback, endcallback, bill) {

  const BillId = bill.BillId;
  const products = bill.products;

  const total = bill.totalPrice;

  const doc = new PDFDocument();

  doc.on('data', dataCallback);
  doc.on('end', endcallback);
  //     doc
  //   .fontSize(25)
  //   .text('Some text with an embedded font!', 100, 100);


  doc.fontSize(16).text(`Invoice (Billid :: ${BillId})`, { align: 'center' });
  doc.fontSize(12).text(`Date: ${new Date().toLocaleDateString()}`, { align: 'right' });
  doc.moveDown();

  // Table header
  doc.font('Helvetica-Bold').text('Product Name', 100, 100);
  doc.text('Quantity', 300, 100);
  doc.text('Price', 400, 100);
  doc.moveDown();

  // Table rows
  let y = 140; // Starting Y position for the first row
  products.forEach((product, index) => {
    doc.font('Helvetica').text(product.name, 100, y);
    doc.text(product.quantity.toString(), 300, y);
    doc.text(product.price.toString(), 400, y);
    y += 20; // Increase Y position for the next row
  });

  // Total
  doc.moveTo(380, y + 10).lineTo(500, y + 10).stroke();
  doc.font('Helvetica-Bold').text('Total:', 300, y + 20);
  doc.text(total.toString(), 400, y + 20);


  doc.end();
}

module.exports = {
  buildpdf
}