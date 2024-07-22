import logo from "./logo.svg";
import "./App.css";
import image1 from "./assets/IMG-20231219-WA0002.jpg";

import React from "react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 text-white bg-orange-400 navbar">
      <div className="text-2xl font-bold text-white company-name">
        Govt. NGO
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        {/* <li>
          <a href="#">Services</a>
        </li> */}
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <div className="py-20 bg-gray-200 hero">
      <div className="container flex flex-col items-center mx-auto md:flex-row">
        <div className="md:w-1/4">
          <img src={image1} alt="Hero Image" className="w-88" />
        </div>
        <div className="px-4 md:w-3/4">
          <h2 className="mb-4 text-3xl font-bold">Govt. NGO</h2>
          <p className="text-lg">
            "The Voluntary Organizations (VOs)/ Non-Governmental Organizations
            (NGOs) etc. play active role in the development of the nation by
            supplementing the efforts of the Government. NGO DARPAN is
            maintained by NITI Aayog to enable Non-Government Organizations
            (NGOs), Not for Profit Organizations (NPOs), Voluntary Organizations
            (VOs), Civil Society Organizations (CSOs), Not for Profit Companies,
            Charity Organizations, registered societies, Trusts, etc. to sign up
            on NGO Darpan portal. This portal enables VOs/NGOs to enroll
            centrally and thus facilitates creation of a repository of
            information about VOs/NGOs, Sector/State wise and enables registered
            entities for applying for Grants under Grants-in-Aid schemes of
            Government etc.. The Portal facilitates entities to obtain a system
            generated NGO Darpan Unique ID, as and when signed up with all
            requisite information and documents. NGO Darpan Unique ID is
            mandatory to all entities seeking registration under Foreign
            Contribution Regulation Act (FCRA), Prevention of Money Laundering
            (Maintenance of Records) Amendment Rules, Income Tax Act for seeking
            income tax exemption etc. and also mandatory for those entities
            seeking Government Grants under various schemes of the Government."
          </p>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-4 text-white bg-gray-800">
      <div className="container mx-auto text-center">
        <p>&copy; GOVT. Website</p>
        <div className="flex justify-center mt-4 social-links">
          <a href="#" className="mx-2">
            Facebook
          </a>
          <a href="#" className="mx-2">
            Twitter
          </a>
          <a href="#" className="mx-2">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
