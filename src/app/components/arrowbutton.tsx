const ArrowButton: React.FC<{ link: string }> = ({ link }) => {
    return (
        <a
            href={link}
            className="group flex items-center py-2 transition-all duration-200 ease-in-out cursor-pointer"
        >
            <span className="font-semibold text-mb-green-200 duration-200 group-hover:underline">
                View job description
            </span>
            <img
                src="/images/arrow.svg"
                className="ml-1 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
            ></img>
        </a>
    );
};

export default ArrowButton;
