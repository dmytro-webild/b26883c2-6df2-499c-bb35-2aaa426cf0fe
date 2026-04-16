"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function AboutPage() {
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

        <div id="about-content" className="pt-32 pb-24">
            <SplitAbout
                title="About Lackawanna Barber Shop"
                description={["At Lackawanna, we are dedicated to preserving the art of traditional barbering while serving the modern man. With over two decades of experience, our commitment to quality, community, and precision cuts has made us a cornerstone of Morristown."]}
                textboxLayout="default"
                useInvertedBackground={false}
                imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201800-hefnk77v.jpg?_wi=2"
                imageAlt="Lackawanna Barber Shop Interior"
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