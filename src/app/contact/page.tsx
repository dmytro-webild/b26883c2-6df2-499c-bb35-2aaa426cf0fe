"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { useRouter } from "next/navigation";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';

export default function ContactPage() {
  const router = useRouter();

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
            <NavbarStyleApple
              navItems={[
                { name: "Home", id: "/" },
                { name: "About", id: "/about" },
                { name: "Contact", id: "/contact" }
              ]}
              brandName="Lackawanna"
            />
        </div>

        <div id="contact-content" data-section="contact-content" className="pt-32 pb-24">
            <ContactCTA
                tag="Contact"
                title="Ready for your next cut?"
                description="Stop by our Morristown shop or give us a call at (973) 538-1675 to inquire about wait times."
                buttons={[{ text: "Submit", onClick: () => router.push("/") }]}
                background={{ variant: "plain" }}
                useInvertedBackground={true}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterLogoReveal
                logoText="Lackawanna Barber Shop"
                leftLink={{ text: "Contact", href: "/contact" }}
                rightLink={{ text: "Home", href: "/" }}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}