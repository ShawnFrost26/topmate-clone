import React, { useState } from 'react';
import { Button } from '@mui/material';
import DataCards from './cards/DataCards';
import ProductCards from './cards/ProductCards';
import MentalHealthCards from './cards/MentalHealthCards';


const DisplayCards = () => {
  const [activeButton, setActiveButton] = useState('data');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderCards = () => {
    if (activeButton === 'data') {
      return <DataCards />;
    } else if (activeButton === 'product') {
      return <ProductCards />;
    } else if (activeButton === 'mentalHealth') {
      return <MentalHealthCards />;
    }
  };

  return (
    <div>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        justifyContent: "center",
      }}>
        <Button size="medium"
          variant={activeButton === 'data' ? 'contained' : 'outlined'}
          onClick={() => handleButtonClick('data')}
        >
          Data
        </Button>
        <Button size="medium"
          variant={activeButton === 'product' ? 'contained' : 'outlined'}
          onClick={() => handleButtonClick('product')}
        >
          Product
        </Button>
        <Button size="medium"
          variant={activeButton === 'mentalHealth' ? 'contained' : 'outlined'}
          onClick={() => handleButtonClick('mentalHealth')}
        >
          Mental Health
        </Button>
      </div>
      <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>

      {renderCards()}
      </div>
    </div>
  );
};

export default DisplayCards;
