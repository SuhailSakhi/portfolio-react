import React from 'react';

export default function Footer({ contactRef }) {
    return (
        <footer id="contact" ref={contactRef} className="bg-gray-150 text-gray-700 py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4">Contact</h2>
                <div className="flex justify-center">
                    <a href="https://www.linkedin.com/in/suhail-s-b38b35271/" className="mx-4">
                        <img src="img/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
                    </a>
                    <a href="https://github.com/SuhailSakhi" className="mx-4">
                        <img src="img/github-mark.png" alt="GitHub" className="w-12 h-12" />
                    </a>
                    <a href="mailto:suhail_909@outlook.com" className="mx-4">
                        <img src="img/email.png" alt="Email" className="w-12 h-12" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
