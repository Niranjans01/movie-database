const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="mx-auto  flex min-h-screen flex-col">
            {children}
        </div>
    );
};

export default Layout;