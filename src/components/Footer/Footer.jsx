import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="evershop-footer">
      <div className="footer-container">
        <div className="payment-methods">
          <img src="../../img/visa.png" alt="Visa" />
          <img src="../../img/master.png" alt="Mastercard" />
          <img src="../../img/paypal.png" alt="PayPal" />
        </div>
        <p className="copyright">2022 Evershop. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;