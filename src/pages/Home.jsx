import React from 'react';
import Hero from '../components/Hero';
import WineCarousel from '../components/WineCarousel';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import MarketPreviewCarousel from '../components/MarketPreviewCarousel';
import TrustedBy from '../components/TrustedBy';
import FAQs from '../components/FAQs';
import Team from '../components/Team';

const Home = () => (
  <>
    <Hero />
    <WineCarousel />
    <HowItWorks />
    <Benefits />
    <Testimonials />
    <MarketPreviewCarousel />
    <TrustedBy />
    <FAQs />
    <Team />
  </>
);

export default Home;
