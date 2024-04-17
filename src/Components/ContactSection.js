import React from 'react';


const ContactSection = () => {
    return (
        <footer id="contact" className="bg-gray-150 text-gray-700 py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <h2 className="text-xl font-bold mb-4">Contact</h2>
                <div className="flex justify-center">
                    <a href="src/Components/ContactSection" className="mx-4">
                        <img src="img/linkedin.png" alt="LinkedIn" className="w-12 h-12" />
                    </a>
                    <a href="https://github.com/SuhailSakhi" className="mx-4">
                        <img src="img/github-mark.png" alt="GitHub" className="w-12 h-12" />
                    </a>
                    <a href="mailto:suhail_909@outlook.com" className="mx-4">
                        <img src="img/email.png" alt="Email" className="w-12 h-12" />
                    </a>
                    <a href="https://www.youtube.com/watch?v=uxpDa-c-4Mc" className="mx-4">
                        <img src="img/logo-zwart.png" alt="logo" className="w-10 h-12" />
                    </a>

                    {/*eerst nummer weghalen dan uploaden*/}
                    {/*<a href="/resume.pdf" download="resume.pdf" className="mx-4">*/}
                    {/*    <p className="text-3xl font-bold text-gray-800 mb-8">CV</p>*/}
                    {/*</a>*/}
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;
