import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
                    <div>
                        <div className="text-2xl font-bold text-cyan-600">
                            AvenPing
                        </div>
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-600 text-sm hover:text-cyan-600 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}