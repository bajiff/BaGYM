const Footer = () => (
    <footer className="py-10 bg-[#020103] text-center text-white/50 border-t border-white/5">
        <p className="mb-4 text-2xl font-bold text-[#fff7e8]">BaGYM<span className="text-white">.</span></p>
        <ul className="flex justify-center gap-6 mb-6">
            <li><a href="#home" className="hover:text-[#fff7e8]">Home</a></li>
            <li><a href="#paket" className="hover:text-[#fff7e8]">Paket</a></li>
            <li><a href="/contact" className="hover:text-[#fff7e8]">Contact</a></li>
        </ul>
        <p className="text-sm">© 2025 BaGYM Project. All rights reserved.</p>
    </footer>
);
export default Footer;