import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '../assets/footer_links';
import SOCIALS from '../assets/socials';

const Footer = () => {
  return (
    <footer className="bg-gray-200 flex-center pb-24 pt-20">
      <div className="max_padd_container flex w-full flex-col gap-14 px-4 md:px-8">
        <div className="flex flex-wrap items-start justify-between gap-8 md:flex-row">
          <Link to="/" className="font-bold mb-10 md:mb-0">TrendWave</Link>
          {FOOTER_LINKS.map((col) => (
            <FooterColumn title={col.title} key={col.title}>
              <ul className="flex flex-col gap-4 text-sm font-normal text-gray-500">
                {col.links.map((link, index) => (
                  <li key={index}>
                    <Link to="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}
          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            <ul className="flex flex-col gap-4 text-sm font-normal text-gray-500">
              {FOOTER_CONTACT_INFO.links.map((link) => (
                <li key={link.label}>
                  <Link to="/" className="flex gap-2 md:flex-col lg:flex-row">
                    <p>{link.label}:</p><p className="medium-14">{link.value}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
          <div className="flex flex-col gap-5">
            <ul className="flex gap-4">
              {SOCIALS.links.map((link) => (
                <Link to="/" key={link}>
                  <img src={link} alt="socialIcons" height={22} width={22} />
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 my-8 w-3/4 mx-auto"></div>
      <p className="text-center text-sm font-normal text-gray-400">2024 TrendWave | All rights reserved ®</p>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-lg whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
