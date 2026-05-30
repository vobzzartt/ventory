import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-2";
import Features from "@/components/features-3";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { MetricsSection } from "@/components/metrics-section";
import IntegrationsSection from "@/components/integrations-5";
import StatsSection from "@/components/stats";
import TestimonialsSection from "@/components/testimonials";
import ChatbotWidget from "@/components/chatbot";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <Features />
      <IntegrationsSection />
      <ContentSection />
      <StatsSection />
      <TestimonialsSection />
      <CallToAction />
      <FooterSection />
      <ChatbotWidget />
    </>
  );
}
