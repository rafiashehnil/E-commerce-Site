import facebook from '../assets/images/facebook.svg';
import instagram from '../assets/images/instagram.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';
import linkedin from '../assets/images/linkedin.svg';

export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Us",
      "Categories",
      "Exchange Policy",
      "Order Now",
      "FAQ",
      "Privacy Policy",
    ],
  },
  {
    title: "Our Community",
    links: [
      "Terms and Conditions",
      "Special Offers",
      "Customer Reviews",
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Contact Number", value: "123-456-7891" },
    { label: "Email Address", value: "info@trendwave.com" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { name: "Facebook", icon: facebook },
    { name: "Instagram", icon: instagram },
    { name: "Twitter", icon: twitter },
    { name: "YouTube", icon: youtube },
    { name: "LinkedIn", icon: linkedin },
  ],
};
