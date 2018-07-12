import React from 'react';
import styled from 'styled-components';

const Info = () => (
  <Container>
    <Bio>
      <p>
        The Carbonist is a timber based design and fabrication studio and workshop
        based in Melbourne, Australia. We take on traditional joinery projects for 
        home, office, display and retail spaces and bespoke furniture.
      </p>
      <p>
        We pride ourselves on our ability to communicate effectively through the 
        design and fabrication process from pre-design to realisation. We aim to 
        deliver products of a high standard that are environmentally sustainable.
      </p>
    </Bio>
    <Contact>
      <ul>
        <li><a href='tel:+61-419-556-334'>T +61 419 556 334</a></li>
        <li><a href='mailto:simon@thecarbonist.com?subject=The Carbonist: Enquiry'>simon@thecarbonist.com</a></li>
      </ul>
      <a href='https://www.instagram.com/thecarbonist/' target='_blank' rel='noopener noreferrer'>Instagram</a>
    </Contact>
  </Container>
);

export default Info;

// Styles
const Container = styled.div`
  height: 50%;
  width: 100%;
  color: white;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20rem 4.375rem 4.375rem;

  @media (min-width: 500px) {
    padding: 20rem 4.375rem 4.375rem;
  }

  overflow: scroll;
`

const Bio = styled.div`
  padding: 0 0 2em;
  flex: 1;

  p {
    text-align: left;
    max-width: 29em;
    margin-bottom: 1em;
    letter-spacing: 0.022em;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Contact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;

  @media (min-width: 580px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    margin-bottom: 1em;

    @media (min-width: 580px) {
      margin-bottom: 0;
    }
  }

  a {
    display: inline-block;
  }
`;