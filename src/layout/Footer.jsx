

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-12">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    {/* Logo and Copyright */}
                    <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                            © {currentYear} Sujal Waghmare. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
