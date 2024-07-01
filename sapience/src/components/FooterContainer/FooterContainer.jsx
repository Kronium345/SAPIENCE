// src/components/FooterContainer.jsx
import React from 'react';
import './FooterContainer.css';

const FooterContainer = () => {
  return (
    <div className="footer">
      <div className="container mx-auto flex justify-between items-center">
        <div className="footer-info">
          <span>Copyright © SAPIENCE Inc.</span>
          {/* <span>29/January/2024 | 08:01 | v1.01.23</span> */}
          <span>Powered By: Plovtech</span>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
