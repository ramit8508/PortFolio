const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/ramit8508"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon cursor-pointer">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 object-contain" />
        </a>
        <a
          href="https://www.linkedin.com/in/ramit-goyal-71b89431a/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon cursor-pointer">
          <img src="/assets/linkedin.webp" alt="linkedin" className="w-1/2 h-1/2 object-contain" />
        </a>
        <a
          href="https://wa.me/918307730036"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon cursor-pointer">
          <img src="/assets/whatsapp.png" alt="whatsapp" className="w-1/2 h-1/2 object-contain" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Ramit Goyal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
