"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
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
        <div id="nav" data-section="nav">
            <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "/"},
              { name: "About", id: "/about"},
              { name: "Contact", id: "/contact"},
            ]}
            brandName="Lackawanna"
            />
        </div>

        <div id="about-content" data-section="about-content" className="pt-32 pb-24">
            <TextSplitAbout
                title="About Lackawanna Barber Shop"
                description={["At Lackawanna, we are dedicated to preserving the art of traditional barbering while serving the modern man. With over two decades of experience, our commitment to quality, community, and precision cuts has made us a cornerstone of Morristown."]}
                useInvertedBackground={false}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterLogoEmphasis
                logoText="Lackawanna Barber Shop"
                columns={[
                { items: [{ label: "132 Morris St, Morristown, NJ", href: "/contact" }, { label: "+1 (973) 538-1675", href: "tel:+19735381675" }] },
                { items: [{ label: "Services", href: "/services" }, { label: "Team", href: "/team" }, { label: "FAQs", href: "/faq" }] }
                ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}