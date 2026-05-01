import React from 'react';
import HeroSection from '../components/home/HeroSection';
import IdentitySection from '../components/home/IdentitySection';
import FeaturedWorkSection from '../components/home/FeaturedWorkSection';
import DesignProcessSection from '../components/home/DesignProcessSection';
import GrowthStorySection from '../components/home/GrowthStorySection';
import MoreWorksPreview from '../components/home/MoreWorksPreview';
import ResumePreview from '../components/home/ResumePreview';
import ContactPreview from '../components/home/ContactPreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IdentitySection />
      <FeaturedWorkSection />
      <DesignProcessSection />
      <GrowthStorySection />
      <MoreWorksPreview />
      <ResumePreview />
      <ContactPreview />
    </>
  );
}