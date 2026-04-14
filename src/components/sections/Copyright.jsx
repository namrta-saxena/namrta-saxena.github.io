const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-12 pb-8 text-center">
            <p className="text-sm font-medium text-slate-500 tracking-wide">
                © {currentYear} All Rights Reserved.
            </p>
        </footer>
    );
};

export default Copyright;