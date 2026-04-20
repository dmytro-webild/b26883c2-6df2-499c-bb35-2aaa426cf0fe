"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "About", id: "/about"},
        { name: "Services", id: "/services"},
        { name: "Team", id: "/team"},
        { name: "Testimonials", id: "/testimonials"},
        { name: "FAQ", id: "/faq"},
        { name: "Contact", id: "/contact"},
      ]}
      brandName="Lackawanna"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "downward-rays-static"}}
      title="Classic Style, Contemporary Precision."
      description="At Lackawanna, we blend old-school charm with modern barbering. Experience the best cut in Morristown from barbers who actually care about your look."
      kpis={[
        { value: "20+", label: "Years Experience"},
        { value: "10/10", label: "Recommend Rate"},
        { value: "100%", label: "Satisfaction"},
      ]}
      enableKpiAnimation={true}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201800-hefnk77v.jpg?_wi=1"
      imageAlt="Lackawanna Barber Shop"
      mediaAnimation="slide-up"
      avatars={[
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201800-hefnk77v.jpg", alt: "Barber shop interior"},
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201801-bp8o0yyb.jpg", alt: "Detail view"},
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201801-l2nw3w51.jpg", alt: "Chair and tools"},
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201801-opcyony6.jpg", alt: "Shop perspective"},
      ]}
      avatarText="Join 500+ satisfied clients"
      marqueeItems={[
        { type: "text", text: "Classic Cuts" },
        { type: "text", text: "Hot Towel Shave" },
        { type: "text", text: "Beard Grooming" },
        { type: "text", text: "Expert Fades" },
        { type: "text", text: "Precision Styling" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "basic", badge: "Classic", price: "$40", subtitle: "Precision Haircut", features: ["Classic Scissor Cut", "Modern Styling", "Expert Consultation"], buttons: [{text: "Contact Us", href: "/contact"}]},
        { id: "pro", badge: "Premium", price: "$75", subtitle: "Full Grooming Experience", features: ["Precision Haircut", "Beard Trim", "Hot Towel Service", "Relaxed Refresh"], buttons: [{text: "Contact Us", href: "/contact"}]},
        { id: "kids", badge: "Family", price: "$30", subtitle: "Youth Haircut", features: ["Gentle Scissor Cut", "Fast Friendly Service", "Classic Style"], buttons: [{text: "Contact Us", href: "/contact"}]},
      ]}
      title="Quality Service, Transparent Price"
      description="Simple, honest pricing for the services you need."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      team={[
        { id: "t1", name: "John Franco", role: "Master Barber", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776700270139-bcabar6h.png"},
        { id: "t2", name: "Elio", role: "Old School Specialist", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352566826-2nyt55b1.jpg"},
      ]}
      title="Meet Your Staff"
      description="Our dedicated team is here to ensure you get the absolute best service in Morristown."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
    <TestimonialCardTwo
        animationType="slide-up"
        textboxLayout="default"
        useInvertedBackground={false}
        title="Testimonials"
        description="See what our clients say about our work."
        testimonials={[
            { 
                id: "1", 
                name: "Client One", 
                role: "Local Customer", 
                testimonial: "Exceptional service and great atmosphere.", 
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201800-hefnk77v.jpg"
            },
            { 
                id: "2", 
                name: "Client Two", 
                role: "Regular Visitor", 
                testimonial: "Always get a perfect fade here.", 
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201801-opcyony6.jpg"
            }
        ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
        faqs={[
          { id: "q1", title: "Do you accept appointments?", content: "We operate primarily as a walk-in shop to maintain that classic, casual vibe." },
          { id: "q2", title: "Is it cash only?", content: "Yes, we are a classic cash-only establishment." },
        ]}
        title="Common Questions"
        description="Everything you need to know about our barber shop services."
        faqsAnimation="slide-up"
        textboxLayout="default"
        mediaPosition="right"
        useInvertedBackground={false}
        imageSrc="http://img.b2bpic.net/free-photo/front-view-baber-shop-chiar_23-2148506337.jpg"
        imageAlt="Lackawanna Barber Shop Interior"
      />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
        logoText="Lackawanna Barber Shop"
        columns={[
          { items: [{ label: "132 Morris St, Morristown, NJ", href: "/contact" }, { label: "+1 (973) 538-1675", href: "/contact" }] },
          { items: [{ label: "Services", href: "/services" }, { label: "Team", href: "/team" }, { label: "FAQs", href: "/faq" }] }
        ]}
      />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}