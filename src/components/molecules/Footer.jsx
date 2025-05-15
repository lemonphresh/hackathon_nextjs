export default function Footer() {
  return (
    <footer className="bg-[#f9f6ef] text-center text-sm text-gray-700 py-10 mt-16">
      <div className="flex justify-center gap-4 flex-wrap text-[#006699] font-medium mb-4">
        <a href="#" className="hover:underline">
          Contact Us
        </a>
        <span className="text-gray-400">|</span>
        <a href="#" className="hover:underline">
          FAQ
        </a>
        <span className="text-gray-400">|</span>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <span className="text-gray-400">|</span>
        <a href="#" className="hover:underline">
          Terms of Use
        </a>
      </div>

      <div className="text-[#006699] font-serif text-lg font-medium">
        Legacy<sup className="text-xs ">®</sup>
      </div>
      <div className="text-gray-600 text-xs mt-1">
        ©2025 Legacy.com. All rights reserved.
      </div>
    </footer>
  );
}
