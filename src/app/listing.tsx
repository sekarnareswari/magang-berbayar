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
        <div>
            <p>{logo}</p>
            <p>{company}</p>
            <p>{position}</p>
            <p>{location}</p>
            <p>{arrangement}</p>
            <p>{pay}</p>
            <p>{link}</p>
        </div>
    );
};

export default Listing;
