import { Box } from '@chakra-ui/react'; // Import Chakra Box for responsive containers
import NavBar from './customComponents/navBar'; // Import the NavBar
import Hero from './customComponents/hero';
import CompanyBrief from './customComponents/companyBrief';
import SubmissionCard from './customComponents/submissionCard';

const Home = () => {
  return (
    <Box width="100%" minHeight="100vh" display="flex" flexDirection="column" p={0}>
      <NavBar /> {/* Transparent navbar */}
      <Box flex="1" display="flex" flexDirection="column" p={0}>
        <Hero /> {/* Ensure hero is mobile responsive */}
        <CompanyBrief /> {/* Ensure company brief is mobile responsive */}
        <SubmissionCard /> {/* Ensure submission card is mobile responsive */}
      </Box>
    </Box>
  );
};

export default Home;

