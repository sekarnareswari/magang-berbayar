import Container from "./container";

import localFont from "next/font/local";

const calSans = localFont({
    src: "../../../public/fonts/CalSans SemiBold.woff2",
});

export default function Header() {
    return (
        <header className="w-full py-4 fixed z-50 bg-white">
            <Container className="flex justify-between">
                <div id="logo-container" className="flex gap-2">
                    <img
                        src="/images/logo.svg"
                        alt="magang berbayar logo"
                        className="w-4"
                    ></img>
                    <p
                        className={`${calSans.className} hidden sm:block sm:font-semibold text-lg`}
                    >
                        Magang Berbayar
                    </p>
                </div>
                <div id="socials-container" className="flex flex-row gap-6">
                    <img
                        src="/images/linkedin.svg"
                        alt="linkedin logo"
                        className="w-6"
                    ></img>
                    <img
                        src="/images/instagram.svg"
                        alt="instagram logo"
                        className="w-6"
                    ></img>
                </div>
            </Container>
        </header>
    );
}
