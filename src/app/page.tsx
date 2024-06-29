import localFont from "next/font/local";
import Button from "./components/button";
import Listings from "./listings";

const calSans = localFont({
    src: "../../public/fonts/CalSans SemiBold.woff2",
});

export default function Home() {
    return (
        <>
            <section id="hero" className="py-48">
                <div className="flex flex-col items-center max-w-screen-md px-4 sm:px-12 mx-auto">
                    <h1
                        className={` ${calSans.className} text-5xl sm:text-7xl md:text-8xl font-semibold mb-2 text-center`}
                    >
                        Get experience.
                    </h1>
                    <h1
                        className={` ${calSans.className} text-5xl sm:text-7xl md:text-8xl font-semibold mb-8 text-center`}
                    >
                        Get paid.
                    </h1>
                    <p className="text-xl text-center leading-relaxed mb-12">
                        A job board for paid internships in Indonesia, aiming to
                        transform the unpaid internship culture.
                    </p>
                    <Button
                        type="scroll"
                        label="See open positions"
                        targetId="listings"
                    ></Button>
                </div>
            </section>
            <Listings />
        </>
    );
}
