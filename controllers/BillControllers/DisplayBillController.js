

const { Product, AuthToken, Bill } = require('../../models')
const { responseMessage } = require('../../helpers')

const pdfService = require('../../Service/pdf-service')

async function DisplayBillController(req, res) {
  try {
    const BillId = req.params.billid;

    const bill = await Bill.findOne({ BillId: BillId });


    const stream = res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment;filename=bill.pdf'
    });


    pdfService.buildpdf(
      (chunk) => stream.write(chunk),
      () => stream.end(), bill
    );




  } catch (error) {
    console.log(error);

  }
}


module.exports = DisplayBillController;