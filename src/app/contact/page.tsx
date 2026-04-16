"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function ContactPage() {
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
        <div id="nav">
            <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "About", id: "/about"},
              { name: "Services", id: "services"},
              { name: "Team", id: "team"},
              { name: "Testimonials", id: "testimonials"},
              { name: "FAQ", id: "faq"},
              { name: "Contact", id: "/contact"},
            ]}
            brandName="Lackawanna"
            />
        </div>

        <div id="contact-content" className="pt-32 pb-24">
            <ContactCenter
                tag="Visit Us"
                title="Ready for your next cut?"
                description="Stop by our Morristown shop to experience the Lackawanna difference."
                background={{ variant: "sparkles-gradient" }}
                useInvertedBackground={true}
            />
        </div>

        <div id="footer">
            <FooterLogoEmphasis
                logoText="Lackawanna Barber Shop"
                columns={[
                { items: [{ label: "132 Morris St, Morristown, NJ", href: "/contact" }, { label: "+1 (973) 538-1675" }] },
                { items: [{ label: "Services", href: "#services" }, { label: "Team", href: "#team" }, { label: "FAQs", href: "#faq" }] }
                ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}