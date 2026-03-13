import { Hero } from './components/Hero';
import { Features } from './components/Features'
import { UseCases } from './components/UseCases';
import Triggers from './components/Triggers';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ChatBot } from './components/ChatBot';
import Why from "./components/WhyItMatters";
import Agents from "./components/Agents"
import SignIn from "./components/Signin"
import Contact from "./components/ContactUs"
import HowItWorks from "./components/HowItWorks"
import { useEffect } from "react";
import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white">
              <Header />
              <Hero />
              <Triggers />
              <Why />
              <Features />
              <Agents />
              {/* <HowItWorks /> */}
              <UseCases />
              <CTA />
              <Footer />
              <ChatBot />
            </div>
          }
        />

        {/* Sign In page */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}