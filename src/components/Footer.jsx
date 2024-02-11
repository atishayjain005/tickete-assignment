import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="container mx-auto px-4 ">
        <img src="/assets/logo_footer.png" className="pb-16 pt-[120px]" />
      </div>
      <hr className="border border-[#3C3F44] mx-5 lg:mx-0" />
      <div className="container mx-auto px-5 text-sm py-8 text-white flex flex-col-reverse lg:flex-row flex-wrap gap-4 lg:gap-3">
        <span className="text-[#7D828A]">Made with ❤️</span><span className="hidden lg:block">•</span>
        <div className="flex flex-wrap gap-3">
          <a href="/">Privacy policy</a>•<a href="/">Terms of usage</a>•
          <a href="/">Cancellation policy</a>•<a href="/">Sitemap</a>
        </div>
      </div>
    </div>
  );
}
