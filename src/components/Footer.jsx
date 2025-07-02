import React from "react";

const Footer = () => {
    return (
        <footer className="mt-0 border-t border-white/30 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col items-center space-y-5 sm:space-y-6">
                <div className="flex flex-wrap justify-center gap-5 sm:gap-6">
                    <a
                        href="https://www.instagram.com/eefe_krkc"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition-opacity duration-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.88a.88.88 0 1 1 0 1.75.88.88 0 0 1 0-1.75Z" />
                        </svg>
                    </a>
                    <a
                        href="https://x.com/EyupEfeKrkc"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition-opacity duration-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 3h4.3L12 8.3 14.7 3H19l-5.7 9L19 21h-4.3L12 15.7 9.3 21H5l5.7-9L5 3z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/eyupefekarakoca"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition-opacity duration-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4v12h-4v-12zm7 0h3.6v1.7h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v6.1h-4V15c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v5.6h-4v-12z"/>
                        </svg>
                    </a>
                    <a
                        href="https://github.com/SweetieBirdX"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition-opacity duration-200" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.78-1.34-1.78-1.1-.76.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.84 1.32 3.54 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.92 1.24 3.24 0 4.64-2.8 5.67-5.48 5.97.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0 0 12 0Z" />
                        </svg>
                    </a>
                </div>

                <p className="text-xs sm:text-sm text-center text-white">
                    &copy; <b>2025 Eyüp Efe</b> &nbsp;&nbsp; <b><i>All rights reserved.</i></b>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
