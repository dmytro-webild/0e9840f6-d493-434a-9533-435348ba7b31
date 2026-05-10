"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="grid"
        cardStyle="layered-gradient"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Products",
          id: "products",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="MetalTrims Pro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogo
      logoText="Precision Metal Trims"
      description="Premium industrial metal trims, rivets, and custom fabrication for professional applications. Durable, precise, and built to last."
      buttons={[
        {
          text: "View Products",
          href: "#products",
        },
        {
          text: "Contact Us",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/wood-texture-background_1232-2812.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Mastery in Metal Craft"
      description="With decades of experience, we specialize in high-strength metal trims and industrial rivets for architects, furniture makers, and construction experts."
      bulletPoints={[
        {
          title: "Precision Engineering",
          description: "Strict tolerances for every rivet and trim profile.",
        },
        {
          title: "Industrial Durability",
          description: "Materials sourced for high-impact professional use.",
        },
        {
          title: "Custom Finishes",
          description: "Wide variety of colors and polished metallic textures.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/glassblower-shaping-glass-blowpipe_107420-74292.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Low-grade alloys",
          "Poor finish quality",
          "Inconsistent sizing",
        ],
      }}
      positiveCard={{
        items: [
          "Certified aerospace-grade aluminum",
          "Consistent, durable plating",
          "Precision engineering standards",
        ],
      }}
      title="Why Choose Our Trims?"
      description="Setting the industry standard for metal finishing and assembly components."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Industrial Edge Trim",
          price: "Contact for pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/view-perforated-sheet-material_23-2150185425.jpg",
        },
        {
          id: "2",
          name: "Brass Finishing Rivet",
          price: "Contact for pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/photo-metal-texture-pattern_58702-13641.jpg",
        },
        {
          id: "3",
          name: "Steel Connector Set",
          price: "Contact for pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-golden-cross-screws-golden-table_181624-18790.jpg",
        },
        {
          id: "4",
          name: "Heavy Duty Zinc Rivet",
          price: "Contact for pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-shot-screwdrivers-wooden-surface_181624-32595.jpg",
        },
        {
          id: "5",
          name: "Gold Polished Trim",
          price: "Contact for pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/gold-chrome-metal-textured-background-with-grunge-metallic-frame_1048-15735.jpg",
        },
        {
          id: "6",
          name: "Copper Finish Profile",
          price: "Contact for pricing",
          imageSrc: "http://img.b2bpic.net/free-photo/aged-metal-strips-with-rusty-rivets_23-2148394675.jpg",
        },
      ]}
      title="Industrial Product Catalog"
      description="Explore our full range of metal trims, rivets, and custom industrial hardware solutions."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Our Impact in Numbers"
      tag="Quality Assured"
      metrics={[
        {
          id: "m1",
          value: "10M+",
          description: "Rivets Produced Annually",
        },
        {
          id: "m2",
          value: "500+",
          description: "Custom Trim Profiles",
        },
        {
          id: "m3",
          value: "99.9%",
          description: "Customer Satisfaction Rate",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Miller",
          role: "Head of Production",
          company: "Global Furniture Co",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/worker-construction-site-wearing-safety-gear_23-2148784068.jpg",
        },
        {
          id: "2",
          name: "James Chen",
          role: "Lead Architect",
          company: "Urban Structures",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-using-laptop-standing-with-his-manager-workplace_23-2147923455.jpg",
        },
        {
          id: "3",
          name: "Robert Evans",
          role: "Purchasing Manager",
          company: "MetalWorks Ind",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12853.jpg",
        },
        {
          id: "4",
          name: "Elena Rodriguez",
          role: "Interior Design Director",
          company: "ModStyle Studio",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-smiling-speaking-discussing-new-ideas_176420-1662.jpg",
        },
        {
          id: "5",
          name: "Mark Thornton",
          role: "Construction Lead",
          company: "Solid Build",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-warehouse-working_23-2148886867.jpg",
        },
      ]}
      title="Trusted by Pros"
      description="See why top manufacturers and construction firms trust MetalTrims Pro."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "SteelWorks Corp",
        "Architectural Solutions",
        "Modern Build Materials",
        "Elite Furniture Group",
        "Industrial Supply Hub",
        "Design Finishes Inc",
        "Global Hardware Partner",
      ]}
      title="Industry Partners"
      description="We are proud to supply top-tier hardware to industry-leading brands."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Start Your Project"
      description="Need specific custom trims or bulk rivet orders? Our engineering team is ready to assist."
      buttons={[
        {
          text: "Send Message",
          href: "mailto:hello@metaltrims.pro",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="MetalTrims Pro"
      copyrightText="© 2025 MetalTrims Pro. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
