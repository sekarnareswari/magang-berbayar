export default function Container({
    children,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
}>) {
    return (
        <div className={`max-w-screen-xl px-4 sm:px-12 mx-auto ${className}`}>
            {children}
        </div>
    );
}
