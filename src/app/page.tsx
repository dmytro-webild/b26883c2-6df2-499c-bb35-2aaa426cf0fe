"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import LegalSection from '@/components/legal/LegalSection';

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
        { name: "About", id: "#about" },
        { name: "Services", id: "#services" },
        { name: "Team", id: "#team" },
        { name: "Testimonials", id: "#testimonials" },
        { name: "FAQ", id: "#faq" },
        { name: "Contact", id: "#contact" },
        { name: "Location", id: "#location" },
      ]}
      brandName="Lackawanna"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{ variant: "downward-rays-static" }}
      title="Classic Style, Contemporary Precision."
      description="At Lackawanna, we blend old-school charm with modern barbering. Experience the best cut in Morristown from barbers who actually care about your look."
      kpis={[
        { value: "20+", label: "Years Experience" },
        { value: "10/10", label: "Recommend Rate" },
        { value: "100%", label: "Satisfaction" },
      ]}
      enableKpiAnimation={true}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201800-hefnk77v.jpg"
      imageAlt="Lackawanna Barber Shop"
      mediaAnimation="slide-up"
      avatars={[
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201800-hefnk77v.jpg", alt: "Barber shop interior" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201801-bp8o0yyb.jpg", alt: "Detail view" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201801-l2nw3w51.jpg", alt: "Chair and tools" },
        { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201801-opcyony6.jpg", alt: "Shop perspective" },
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

  <div id="location" data-section="location">
      <LegalSection
      layout="section"
      title="Visit Our Shop"
      sections={[
        {
          heading: "Contact & Location",          content: { 
            type: "list", 
            items: [
              "Phone: +1 (973) 538-1675",              "Location: 123 South St, Morristown, NJ 07960"
            ]
          }
        }
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="More Than Just a Haircut"
      description="We are a throwback barber shop where you can get a classic men's cut, beard trim, or a hot towel shave. We treat you like family, ensuring you leave with both the cut you wanted and the confidence you deserve."
      bulletPoints={[
        { title: "Old School Values", description: "Classic techniques combined with current styling trends." },
        { title: "Warm Environment", description: "Friendly, sociable atmosphere where you feel right at home." },
        { title: "Expert Care", description: "Knowledgeable barbers who understand every hair type." },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201801-bp8o0yyb.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        { id: "basic", badge: "Classic", price: "$40", subtitle: "Precision Haircut", buttons: [{ text: "Walk-in Only", href: "#contact" }], features: ["Classic Scissor Cut", "Modern Styling", "Expert Consultation"] },
        { id: "pro", badge: "Premium", price: "$75", subtitle: "Full Grooming Experience", buttons: [{ text: "Walk-in Only", href: "#contact" }], features: ["Precision Haircut", "Beard Trim", "Hot Towel Service", "Relaxed Refresh"] },
        { id: "kids", badge: "Family", price: "$30", subtitle: "Youth Haircut", buttons: [{ text: "Walk-in Only", href: "#contact" }], features: ["Gentle Scissor Cut", "Fast Friendly Service", "Classic Style"] },
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
        { id: "t1", name: "John Franco", role: "Master Barber", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352542504-tkr21jqa.png" },
        { id: "t2", name: "Elio", role: "Old School Specialist", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352566826-2nyt55b1.jpg" },
      ]}
      title="Meet Your Staff"
      description="Our dedicated team is here to ensure you get the absolute best service in Morristown."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Barry H.", role: "Loyal Customer", company: "FL", rating: 5 },
        { id: "2", name: "Melissa C.", role: "Regular Client", company: "NY", rating: 5 },
      ]}
      kpiItems={[
        { value: "100+", label: "Weekly Cuts" },
        { value: "20+", label: "Years Served" },
        { value: "5★", label: "Rating Average" },
      ]}
      title="What Our Clients Say"
      description="We are proud to serve our community and deliver the best cuts in town."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "Do you accept appointments?", content: "We operate primarily as a walk-in shop to maintain that classic, casual vibe." },
        { id: "q2", title: "Is it cash only?", content: "Yes, we are a classic cash-only establishment." },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{ variant: "sparkles-gradient" }}
      text="Ready for your next haircut? Stop by the shop today and meet the team. We look forward to seeing you!"
      buttons={[{ text: "+1 (973) 538-1675", href: "tel:+19735381675" }]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Lackawanna Barber Shop"
      columns={[
        { title: "Shop", items: [{ label: "Morristown, NJ", href: "#" }] },
      ]}
      copyrightText="© 2024 Lackawanna Barber Shop. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
