import React from 'react';

const InvoiceDesign = ({ invoiceData, onClose }) => {
  // Default invoice data matching your design
  const defaultInvoiceData = {
    invoiceNumber: "PO-2025028",
    date: "2025-09-19",
    name: "sfef",
    dob: "333",
    contact: "222",
    idNumber: "333",
    idType: "Passport",
    serviceOffered: "PR",
    country: "aea",
    totalFee: "5000",
    taxPercent: "18",
    taxAmount: "900.00",
    totalWithTax: "5900.00",
    paidAmount: "1000",
    remainingAmount: "4900.00"
  };

  const data = invoiceData || defaultInvoiceData;

  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .invoice-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .invoice-container {
          background: white;
          border: 3px solid #000;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          background: #ff4444;
          color: white;
          border: none;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          cursor: pointer;
          font-size: 14px;
          z-index: 10;
        }

        .invoice-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 20px 30px 15px;
          border-bottom: 2px solid #000;
        }

        .logo-container {
          margin-right: 15px;
        }

        .logo {
          width: 60px;
          height: 60px;
          background-color: #e74c3c;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 12px;
        }

        .company-info h1 {
          font-size: 18px;
          color: #e74c3c;
          font-weight: bold;
          margin-bottom: 5px;
          letter-spacing: 0.5px;
        }

        .invoice-title {
          font-size: 16px;
          font-weight: bold;
          text-decoration: underline;
          color: #000;
        }

        .invoice-meta {
          display: flex;
          justify-content: space-between;
          padding: 15px 30px;
          background-color: #f8f9fa;
          border-bottom: 1px solid #ddd;
        }

        .meta-item {
          font-size: 14px;
          color: #333;
        }

        .meta-label {
          font-weight: bold;
        }

        .invoice-body {
          padding: 20px 30px;
        }

        .section {
          margin-bottom: 25px;
        }

        .section-title {
          font-size: 14px;
          font-weight: bold;
          margin-bottom: 12px;
          color: #000;
          text-transform: uppercase;
        }

        .client-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          font-size: 13px;
        }

        .detail-row {
          display: contents;
        }

        .detail-label {
          font-weight: 600;
          color: #333;
          padding: 4px 0;
        }

        .detail-value {
          color: #555;
          padding: 4px 0;
          padding-left: 10px;
        }

        .payment-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
          font-size: 13px;
        }

        .payment-table th {
          background-color: #4a5568;
          color: white;
          padding: 10px;
          text-align: left;
          font-weight: bold;
        }

        .payment-table td {
          padding: 8px 10px;
          border-bottom: 1px solid #e2e8f0;
        }

        .payment-table tr:nth-child(even) {
          background-color: #f7fafc;
        }

        .total-row {
          background-color: #4a5568 !important;
          color: white;
          font-weight: bold;
        }

        .total-row td {
          color: white;
          border-bottom: none;
        }

        .remaining-row {
          background-color: #4a5568 !important;
          color: white;
          font-weight: bold;
        }

        .remaining-row td {
          color: white;
          border-bottom: none;
        }

        .disclaimer {
          margin: 20px 0;
          padding: 12px;
          border: 2px solid #000;
          text-align: center;
          font-size: 11px;
          font-weight: 600;
          background-color: #f8f9fa;
        }

        .footer-section {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          margin-top: 25px;
        }

        .bank-details {
          flex: 1;
        }

        .bank-title {
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 8px;
          color: #000;
        }

        .bank-info {
          font-size: 11px;
          margin-bottom: 3px;
          color: #333;
        }

        .signature-section {
          margin-top: 15px;
        }

        .signature-text {
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 25px;
          color: #000;
        }

        .company-text {
          font-size: 11px;
          color: #333;
        }

        .company-details {
          background: #fff5f5;
          border: 2px solid #e74c3c;
          border-radius: 8px;
          padding: 15px;
          max-width: 200px;
        }

        .company-title {
          background-color: #e74c3c;
          color: white;
          text-align: center;
          font-size: 12px;
          font-weight: bold;
          padding: 8px;
          margin: -15px -15px 12px -15px;
          border-radius: 6px 6px 0 0;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 11px;
        }

        .contact-icon {
          width: 16px;
          height: 16px;
          margin-right: 8px;
          flex-shrink: 0;
        }

        .phone-icon {
          background: #e74c3c;
          border-radius: 2px;
        }

        .email-icon {
          background: #e74c3c;
          border-radius: 2px;
        }

        .web-icon {
          background: #e74c3c;
          border-radius: 2px;
        }

        .location-icon {
          background: #e74c3c;
          border-radius: 2px;
        }

        .contact-text {
          color: #333;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .invoice-container {
            margin: 10px;
            max-width: none;
          }
          
          .invoice-header {
            padding: 15px 20px;
          }
          
          .invoice-meta {
            flex-direction: column;
            gap: 5px;
          }
          
          .invoice-body {
            padding: 15px 20px;
          }
          
          .client-details {
            grid-template-columns: 1fr;
            gap: 4px;
          }
          
          .footer-section {
            flex-direction: column;
            gap: 20px;
          }
          
          .company-details {
            max-width: none;
          }
        }

        @media print {
          .invoice-overlay {
            position: static;
            background: none;
            padding: 0;
          }
          
          .close-btn {
            display: none;
          }
          
          .invoice-container {
            max-height: none;
            overflow: visible;
            border: 2px solid #000;
          }
        }
      `}</style>

      <div className="invoice-overlay">
        <div className="invoice-container">
          {onClose && (
            <button className="close-btn" onClick={onClose}>
              ✕
            </button>
          )}
          
          <div className="invoice-header">
            <div className="logo-container">
              <div className="logo">
                P
              </div>
            </div>
            <div className="company-info">
              <h1>PAYANA OVERSEAS SOLUTIONS PVT LTD</h1>
              <div className="invoice-title">INVOICE</div>
            </div>
          </div>

          <div className="invoice-meta">
            <div className="meta-item">
              <span className="meta-label">Invoice Number:</span> {data.invoiceNumber}
            </div>
            <div className="meta-item">
              <span className="meta-label">Date:</span> {data.date}
            </div>
          </div>


          <div/>    
          

          <div className="invoice-body">
            <div className="section">
              <div className="section-title">Client Information</div>
              <div className="client-details">
                <div className="detail-row">
                  <div className="detail-label">GIVEN NAME</div>
                  <div className="detail-value">: {data.name}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">DATE OF BIRTH</div>
                  <div className="detail-value">: {data.dob}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">CONTACT #</div>
                  <div className="detail-value">: {data.contact}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">ID ({data.idType})</div>
                  <div className="detail-value">: {data.idNumber}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">SERVICE OFFERED</div>
                  <div className="detail-value">: {data.serviceOffered}</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">COUNTRY</div>
                  <div className="detail-value">: {data.country}</div>
                </div>
              </div>
            </div>

            <div className="section">
              <div className="section-title">Payment Details</div>
              <table className="payment-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Amount (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Service Fee</td>
                    <td>₹ {data.totalFee}</td>
                  </tr>
                  <tr>
                    <td>Tax ({data.taxPercent}%)</td>
                    <td>₹ {data.taxAmount}</td>
                  </tr>
                  <tr className="total-row">
                    <td>Total Amount</td>
                    <td>₹ {data.totalWithTax}</td>
                  </tr>
                  <tr>
                    <td>Paid Amount</td>
                    <td>₹ {data.paidAmount}</td>
                  </tr>
                  <tr className="remaining-row">
                    <td>Remaining Amount</td>
                    <td>₹ {data.remainingAmount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="disclaimer">
              You acknowledge and agree that this amount is strictly non-refundable under any circumstances.
            </div>

            <div className="footer-section">
              <div className="bank-details">
                <div className="bank-title">BANK DETAILS:</div>
                <div className="bank-info"><strong>Bank Name:</strong> HDFC Bank</div>
                <div className="bank-info"><strong>Branch Address:</strong> Palayapalyam</div>
                <div className="bank-info"><strong>Account Name:</strong> Payana Overseas Solutions Pvt Ltd</div>
                <div className="bank-info"><strong>Account No:</strong> 50200066482470</div>
                <div className="bank-info"><strong>IFSC Code:</strong> HDFC0009203</div>
                <div className="bank-info"><strong>GPay:</strong> 7806925669</div>
                
                <div className="signature-section">
                  <div className="signature-text">Authorized Signature</div>
                  <div className="company-text">Payana Overseas Solutions</div>
                </div>
              </div>
              
              <div className="company-details">
                <div className="company-title">COMPANY DETAILS</div>
                <div className="contact-item">
                  <div className="contact-icon phone-icon"></div>
                  <span className="contact-text">90036 19777</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon email-icon"></div>
                  <span className="contact-text">payanaaoverseas@gmail.com</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon web-icon"></div>
                  <span className="contact-text">www.payana.com</span>
                </div>
                <div className="contact-item">
                  <div className="contact-icon location-icon"></div>
                  <span className="contact-text">Perundurai Road, Erode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDesign;
