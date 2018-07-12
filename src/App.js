import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Info from './Info';
import CarbonistLogo from './assets/the-carbonist-logo.svg';
import NeueHaas from './assets/NeueHaasUnicaPro-Regular.ttf';

export default class App extends Component {
  state = {
    didMountMounted: false,
    startY: null,
    scrollTop: 0,
    backgroundColor: '#453736',
    showLanding: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true });
    }, 0);
  }

  handleTouchStart = (e) => {
    this.setState({ startY: e.changedTouches[0].pageY });
  }

  handleTouchMove = (e) => {
    // e.preventDefault();
    const yDelta = e.changedTouches[0].pageY - this.state.startY;

    if (yDelta < 0) {
      this.scrollDown();
    } else {
      this.scrollUp();
    }
  }

  handleWheel = (e) => {
    e.preventDefault();
    
    if (e.deltaY > 0) {
      this.scrollDown();
    } else {
      this.scrollUp();
    }
  }

  scrollUp = () => {
    this.setState({ 
      scrollTop: 0,
      backgroundColor: '#453736',
      showLanding: true,
    });

    document.body.style.backgroundColor = '#453736';
  }

  scrollDown = () => {
    this.setState({ 
      scrollTop: -50,
      backgroundColor: '#222',
      showLanding: false,
    });

    document.body.style.backgroundColor = '#222';
  }

  render() {
    return (
      <Container
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onWheel={this.handleWheel}
      >
        <Title onClick={this.scrollUp} fadeIn={this.state.didMount}>The Carbonist</Title>
        <Opening show={this.state.showLanding} onClick={this.scrollDown}>
          <Logo src={CarbonistLogo} fadeIn={this.state.didMount} />
          <InfoButton onClick={this.scrollDown} fadeIn={this.state.didMount}>Information</InfoButton>
        </Opening>
        <Wrapper top={this.state.scrollTop}>
          <TopHalf />
          <Info />
        </Wrapper>
      </Container>
    );
  }
}

// Styles
injectGlobal`
  @font-face {
    font-family: NeueHaas;
    src: url(${NeueHaas});
    font-weight: 400;
    font-style: normal;
  }
    
  html {
    font-size: 6px;
    
    @media (min-width: 500px) {
      font-size: 8px;
    }

    @media (min-width: 800px) {
      font-size: 9px;
    }
    
    @media (min-width: 1400px) {
      font-size: 10px;
    }
  }

  body {
    margin: 0;
    color: #ffffff;
    font-family: NeueHaas, sans-serif;
    background-color: #453736;
    font-size: 2.75rem;
    transition: background-color 1800ms;
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background-color: #ffffff;
      width: 0;
      top: 100%;
      left: 0;
      transition: width 400ms;
    }

    &:hover {
      &::after {
        width: 100%;
      }
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1.2;
    -webkit-tap-highlight-color: transparent;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  position: absolute;
  transform: translateY(${({top}) => `${top}%`});
  transition: transform 1100ms;
  height: 200%;
  width: 100%;
`;

const Title = styled.p`
  position: fixed;
  top: 4.375rem;
  left: 4.375rem;
  font-size: 3.75rem;
  letter-spacing: 0;
  z-index: 100;
  cursor: pointer;

  opacity: ${props => !props.fadeIn && 0};
  transition: opacity 1000ms 1500ms;
`;

const Opening = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  pointer-events: ${({show}) => !show && 'none'};
  opacity: ${({show}) => !show && 0};
  transition: opacity ${({show}) => show ? '500ms 500ms' : '400ms'};
`;

const Logo = styled.img`
  width: 100%;
  max-width: 260px;
  transform: translateX(5%);
  opacity: ${props => !props.fadeIn && 0};
  transition: opacity 1000ms 500ms;

  @media (min-width: 600px) {
    max-width: 340px;
    transform: translateX(0);
  }
`;

const InfoButton = styled.p`
  position: absolute;
  bottom: 35px;
  left: 35px;
  cursor: pointer;
  opacity: ${props => !props.fadeIn && 0};
  transition: opacity 1000ms 1500ms;

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    background-color: #ffffff;
    width: 0;
    top: 100%;
    left: 0;
    transition: width 400ms;
  }
  
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const TopHalf = styled.div`
  height: 50%;
  width: 100%;
  color: white;
  flex: 1 0 auto;
  position: relative;
`