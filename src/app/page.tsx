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
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Team",
          id: "#team",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Lackawanna"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "downward-rays-static",
      }}
      title="Classic Style, Contemporary Precision."
      description="At Lackawanna, we blend old-school charm with modern barbering. Experience the best cut in Morristown from barbers who actually care about your look."
      kpis={[
        {
          value: "20+",
          label: "Years Experience",
        },
        {
          value: "10/10",
          label: "Recommend Rate",
        },
        {
          value: "100%",
          label: "Satisfaction",
        },
      ]}
      enableKpiAnimation={true}
      imageSrc="http://img.b2bpic.net/free-photo/barber-shop-retro-vintage-style_1150-17931.jpg"
      imageAlt="Lackawanna Barber Shop Interior"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/retro-theatre-scene-celebrate-world-theatre-day_23-2151211458.jpg",
          alt: "Retro theatre scene to celebrate world theatre day",
        },
        {
          src: "http://img.b2bpic.net/free-photo/tall-bar-stool-wooden-background_181624-30147.jpg",
          alt: "Tall bar stool on a wooden background",
        },
        {
          src: "http://img.b2bpic.net/free-photo/hair-salon-chair-with-towel-armchair_23-2148242777.jpg",
          alt: "Hair salon chair with towel on armchair",
        },
        {
          src: "http://img.b2bpic.net/free-photo/retro-world-theatre-day-scenes-with-backstage_23-2151211363.jpg",
          alt: "Retro world theatre day scenes with a backstage",
        },
        {
          src: "http://img.b2bpic.net/free-photo/client-barber-greeting-each-other-barbershop_23-2148181951.jpg",
          alt: "Client and barber greeting each other at barbershop",
        },
      ]}
      avatarText="Join 500+ satisfied clients"
      marqueeItems={[
        {
          type: "text",
          text: "Classic Cuts",
        },
        {
          type: "text",
          text: "Hot Towel Shave",
        },
        {
          type: "text",
          text: "Beard Grooming",
        },
        {
          type: "text",
          text: "Expert Fades",
        },
        {
          type: "text",
          text: "Precision Styling",
        },
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
        {
          title: "Old School Values",
          description: "Classic techniques combined with current styling trends.",
        },
        {
          title: "Warm Environment",
          description: "Friendly, sociable atmosphere where you feel right at home.",
        },
        {
          title: "Expert Care",
          description: "Knowledgeable barbers who understand every hair type.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-man-hair-salon_23-2150665451.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",
          badge: "Classic",
          price: "$40",
          subtitle: "Precision Haircut",
          buttons: [
            {
              text: "Walk-in Only",
              href: "#contact",
            },
          ],
          features: [
            "Classic Scissor Cut",
            "Modern Styling",
            "Expert Consultation",
          ],
        },
        {
          id: "pro",
          badge: "Premium",
          price: "$75",
          subtitle: "Full Grooming Experience",
          buttons: [
            {
              text: "Walk-in Only",
              href: "#contact",
            },
          ],
          features: [
            "Precision Haircut",
            "Beard Trim",
            "Hot Towel Service",
            "Relaxed Refresh",
          ],
        },
        {
          id: "kids",
          badge: "Family",
          price: "$30",
          subtitle: "Youth Haircut",
          buttons: [
            {
              text: "Walk-in Only",
              href: "#contact",
            },
          ],
          features: [
            "Gentle Scissor Cut",
            "Fast Friendly Service",
            "Classic Style",
          ],
        },
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
        {
          id: "t1",
          name: "John Franco",
          role: "Master Barber",
          imageSrc: "http://img.b2bpic.net/free-photo/pleased-looking-down-young-beautiful-female-barber-uniform-wearing-glasses-combing-hair-isolated-blue-wall_141793-106074.jpg",
        },
        {
          id: "t2",
          name: "Elio",
          role: "Old School Specialist",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-tattoo-his-face-with-crossed-arms-dressed-white-shirt-grey-background_613910-1374.jpg",
        },
        {
          id: "t3",
          name: "The New Crew",
          role: "Modern Stylists",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hairdresser-making-haircut_23-2149220581.jpg",
        },
      ]}
      title="Meet Your Barbers"
      description="Classy, skilled, and sociable – our team is here to give you the best experience in Morristown."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Barry H.",
          role: "Loyal Customer",
          company: "FL, FL",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-black-polo-shirt-swinging-paint-brush-with-aggressive-expression-standing-white-background_141793-20662.jpg",
        },
        {
          id: "2",
          name: "Melissa C.",
          role: "Regular Client",
          company: "New York, NY",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-father-son-shaving_23-2149434975.jpg",
        },
        {
          id: "3",
          name: "Aidan D.",
          role: "Customer",
          company: "Morristown, NJ",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-men-bachelor-party_23-2149275459.jpg",
        },
        {
          id: "4",
          name: "Justin D.",
          role: "Long-time Client",
          company: "Morristown, NJ",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/drunk-friends-call-waiter_171337-19383.jpg",
        },
        {
          id: "5",
          name: "Jay V.",
          role: "First-time Visitor",
          company: "Little Falls, NJ",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/excited-young-male-barber-wearing-glasses-red-shirt-barber-apron-holding-barbering-tools-looking-camera-showing-thumb-up-isolated-blue-background_141793-138548.jpg",
        },
      ]}
      kpiItems={[
        {
          value: "100+",
          label: "Weekly Cuts",
        },
        {
          value: "20+",
          label: "Years Served",
        },
        {
          value: "5★",
          label: "Rating Average",
        },
      ]}
      title="What Our Clients Say"
      description="We are proud to serve our community and deliver the best cuts in town."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Do you accept appointments?",
          content: "We operate primarily as a walk-in shop to maintain that classic, casual vibe.",
        },
        {
          id: "q2",
          title: "Is it cash only?",
          content: "Yes, we are a classic cash-only establishment.",
        },
        {
          id: "q3",
          title: "Are you a salon or a barber shop?",
          content: "We are a traditional barber shop – no salon fluff, just great cuts.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Ready for your next haircut? Stop by the shop today and meet the team. We look forward to seeing you!"
      buttons={[
        {
          text: "Visit Us Today",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Lackawanna Barber Shop"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "Morristown, NJ",
              href: "#",
            },
            {
              label: "Cash Only",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Lackawanna Barber Shop. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
