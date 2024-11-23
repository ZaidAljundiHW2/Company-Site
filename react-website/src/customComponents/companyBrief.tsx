import React, { useState } from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import './companyBrief.css';
import CompanyDiagram from '@/images/companyBriefDiagram.png';
import AboutUsCard from './aboutUsCard';

const CompanyBrief = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const showCard = () => {
    setIsCardVisible(true);
  };

  const closeCard = () => {
    setIsCardVisible(false);
  };

  return (
    <div className="company-brief-container">
      <div className="content-container">
        <Heading className="heading-primary">
          Live Peacefully with Nature and Technology.
        </Heading>
        <Heading className="heading-secondary">
          Empowering Homes. Conserving Energy.
        </Heading>
        <Heading className="heading-tertiary">
          Vektor Tech takes the lead in energy conservation innovations <br />
          and user convenience in controlling their home.
        </Heading>
        <Heading className="heading-quaternary">
          In a world where cleaner energy alternatives are bleak but gaining
          momentum, <br />
          Vektor Tech shines as a driving force for this movement towards a more
          sustainable <br />
          future. Debuting with "Sukoon", Vektor Tech aims to seamlessly blend
          user <br />
          convenience and comfortability with energy conservation and the
          reduction of <br />
          energy waste. Vektor Tech is here to help you live better — for both
          you and the planet.
        </Heading>
        <Button className="learn-more-button" onClick={showCard}>
          Learn More
        </Button>
      </div>

      <div className="image-container">
        <div className="image-wrapper">
          <img
            src={CompanyDiagram}
            alt="Company Diagram"
            className="company-image"
          />
        </div>
      </div>

      {isCardVisible && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="999"
        />
      )}

      {isCardVisible && <AboutUsCard onClose={closeCard} />}
    </div>
  );
};

export default CompanyBrief;

