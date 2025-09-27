import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import myImage from "../assets/footer.png"; // <-- Updated footer image

// Reusable section
const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="font-bold mb-5 text-white">{title}</h3>
    <ul className="space-y-1">
      {links.map(({ to, label }, idx) => (
        <li key={idx}>
          <Link
            to={to}
            className="text-gray-300 hover:text-white text-sm transition-colors block"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  // Section 1: Company Overview
  const companyLinks = [
    { to: "/open-demat-account", label: "Open Demat Account" },
    { to: "/brokerage-charges", label: "Brokerage & Other Charges" },
    { to: "/contact-us", label: "Contact Us" },
    { to: "/about-us", label: "About Us" },
    { to: "/careers", label: "Careers" },
    { to: "/press-media", label: "Press & Media" },
    { to: "/investor-relations", label: "Investor Relations" },
  ];

  // Section 2: Investment Options
  const investmentLinks = [
    { to: "/stocks", label: "Stocks" },
    { to: "/mutual-funds", label: "Mutual Funds" },
    { to: "/sip-100", label: "SIP with 100 Rupees" },
    { to: "/ipos", label: "Upcoming IPOs" },
    { to: "/etfs", label: "Exchange Traded Funds (ETFs)" },
    { to: "/bonds", label: "Corporate Bonds" },
    { to: "/commodities", label: "Commodities" },
  ];

  // Section 3: Stock Market Information
  const stocksInfo = [
    { to: "/nse-live", label: "NSE Live Market" },
    { to: "/bse-live", label: "BSE Live Market" },
    { to: "/nifty-50", label: "Nifty 50 Updates" },
    { to: "/sensex", label: "Sensex Today" },
    { to: "/top-gainers", label: "Top Gainers" },
    { to: "/top-losers", label: "Top Losers" },
    { to: "/sector-performance", label: "Sector Performance" },
  ];

  // Section 4: Calculators
  const calculatorLinks = [
    { to: "/sip-calculator", label: "SIP Calculator" },
    { to: "/lumpsum-calculator", label: "Lumpsum Calculator" },
    { to: "/retirement-calculator", label: "Retirement Calculator" },
    { to: "/loan-emi", label: "Loan EMI Calculator" },
    { to: "/fd-calculator", label: "Fixed Deposit Calculator" },
    { to: "/brokerage-calculator", label: "Brokerage Calculator" },
  ];

  // Section 5: Knowledge Center
  const knowledgeLinks = [
    { to: "/blogs", label: "Market Blogs" },
    { to: "/tutorials", label: "Investment Tutorials" },
    { to: "/glossary", label: "Financial Glossary" },
    { to: "/webinars", label: "Investor Webinars" },
    { to: "/research-reports", label: "Research Reports" },
  ];

  // Section 6: Policies
  const policyLinks = [
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/disclaimer", label: "Disclaimer" },
    { to: "/risk-disclosure", label: "Risk Disclosure" },
    { to: "/complaints", label: "Investor Complaints" },
  ];

  // Section 7: Market Updates
  const marketUpdates = [
    { to: "/market-outlook", label: "Daily Market Outlook" },
    { to: "/ipo-watch", label: "IPO Watch 2025" },
    { to: "/global-markets", label: "Global Markets Overview" },
    { to: "/currency-rates", label: "Currency Exchange Rates" },
    { to: "/gold-silver", label: "Gold & Silver Prices" },
  ];

  return (
    <footer className="bg-slate-700 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Logo + About Us */}
        <div className="flex flex-col items-center text-center gap-6">
          <img src={myImage} alt="Company Logo" className="h-20 w-auto" />
          <div className="text-gray-300 max-w-3xl text-sm leading-6">
            <p>
              InvestSmart Ltd. is a trusted investment partner with 25+ years of
              expertise in stock broking, mutual funds, bonds, and other
              financial instruments. Our mission is to make investing simple,
              accessible, and rewarding for millions of customers across India.
            </p>
            <p className="mt-2">
              With zero account opening charges, seamless digital onboarding,
              and world-class research insights, we aim to empower investors to
              achieve their financial goals.
            </p>
          </div>
        </div>

        {/* Top grid sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <FooterSection title="COMPANY OVERVIEW" links={companyLinks} />
          <FooterSection title="INVESTMENT OPTIONS" links={investmentLinks} />
          <FooterSection title="STOCK MARKET INFO" links={stocksInfo} />
          <FooterSection title="CALCULATORS" links={calculatorLinks} />
          <FooterSection title="KNOWLEDGE CENTER" links={knowledgeLinks} />
          <FooterSection title="POLICIES" links={policyLinks} />
        </div>

        {/* Market Updates */}
        <div className="border-t border-gray-600 pt-8">
          <h2 className="text-xl font-bold mb-4">📈 Market Updates</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {marketUpdates.map(({ to, label }, idx) => (
              <Link
                key={idx}
                to={to}
                className="p-2 text-gray-200 hover:text-white transition text-sm"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Support + Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>1800-102-0202 (Toll-Free)</span>
            </div>
            <div className="flex items-center space-x-2">
              <MdQuestionAnswer />
              <span>Support FAQs</span>
            </div>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-800"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-500"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-red-500"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full"
              style={{ backgroundColor: "#fa7e1e" }}
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-600 pt-6 text-xs text-gray-400 leading-5">
          <p>
            *Disclaimer: Investments in securities market are subject to market
            risks, read all related documents carefully before investing.
          </p>
          <p>
            Market updates and stock information displayed here are for
            educational purposes only. Please consult your financial advisor
            before making investment decisions.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} InvestSmart Ltd. | SEBI Registered
            Stock Broker | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
