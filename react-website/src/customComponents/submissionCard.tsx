import React, { useState } from 'react';
import { Box, Heading, Text, Input, Textarea, Button } from '@chakra-ui/react';
import './submissionCard.css'; // Import the external CSS file

const SubmissionCard = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage form submission status
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after submission (optional)
    setFormData({ name: '', email: '', message: '' });

    // Add any backend API integration here
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)', // Blue gradient background
      padding: '40px', // Padding inside the div
      borderRadius: '10px', // Rounded corners
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
      marginTop: '40px', // Add margin on top
    }}>
      <Box className="submission-card-container">
        <Heading className="submission-card-heading">Submit Your Enquiry</Heading>
        {isSubmitted ? (
          <Text className="submission-success" style={{ color: 'black' }}>
            Thank you! Your enquiry has been submitted.
          </Text>
        ) : (
          <>
            <Text className="submission-card-description">
              Let us know how we can help! Fill out the form and we’ll get back to you as soon as possible.
            </Text>
            <form onSubmit={handleSubmit}>
              <Input
                name="name"
                placeholder="Your Name"
                variant="outline"
                className="submission-input"
                value={formData.name}
                onChange={handleChange}
              />
              <Input
                name="email"
                placeholder="Your Email"
                type="email"
                variant="outline"
                className="submission-input"
                value={formData.email}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                variant="outline"
                className="submission-input"
                value={formData.message}
                onChange={handleChange}
              />
              <Button className="submission-button" type="submit">
                Submit
              </Button>
            </form>
          </>
        )}
      </Box>
    </div>
  );
};

export default SubmissionCard;
