"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
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
              { name: "Services", id: "/#services"},
              { name: "Team", id: "/#team"},
              { name: "Testimonials", id: "/#testimonials"},
              { name: "FAQ", id: "/#faq"},
              { name: "Contact", id: "/contact"},
            ]}
            brandName="Lackawanna"
            />
        </div>

        <div id="contact-content" className="pt-32 pb-24">
            <ContactSplitForm
                title="Ready for your next cut?"
                description="Stop by our Morristown shop or give us a call at (973) 538-1675 to inquire about wait times."
                inputs={[
                    { name: "name", type: "text", placeholder: "Your Name", required: true },
                    { name: "email", type: "email", placeholder: "Your Email", required: true }
                ]}
                textarea={{ name: "message", placeholder: "Tell us what you're looking for..." }}
                imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CRaO5i0elf1aDIpszoFKWNR31x/uploaded-1776352201800-hefnk77v.jpg"
                useInvertedBackground={true}
                mediaPosition="right"
            />
        </div>

        <div id="footer">
            <FooterLogoEmphasis
                logoText="Lackawanna Barber Shop"
                columns={[
                { items: [{ label: "132 Morris St, Morristown, NJ", href: "/contact" }, { label: "+1 (973) 538-1675", href: "tel:+19735381675" }] },
                { items: [{ label: "Services", href: "/#services" }, { label: "Team", href: "/#team" }, { label: "FAQs", href: "/#faq" }] }
                ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}