import ArrowButton from "./components/arrowbutton";

interface ListingProps {
    logo: string;
    company: string;
    position: string;
    location: string;
    arrangement: string;
    pay: string;
    link: string;
}

const Listing: React.FC<ListingProps> = ({
    logo,
    company,
    position,
    location,
    arrangement,
    pay,
    link,
}) => {
    return (
        <div className="flex flex-col px-6 pt-6 pb-8 gap-8 border rounded-2xl">
            <div className="flex flex-col gap-4">
                <img
                    src={logo}
                    alt={`${company} logo`}
                    className="w-10 rounded-lg"
                ></img>
                <div className="flex flex-col gap-2">
                    <p className="text-mb-gray font-semibold">{company}</p>
                    <p className="font-bold text-xl">{position}</p>
                </div>
                <div className="flex flex-col gap-1 text-mb-gray">
                    <p>
                        {location} · {arrangement}
                    </p>
                    <p>{pay}</p>
                </div>
            </div>
            <ArrowButton link="" />
        </div>
    );
};

export default Listing;
