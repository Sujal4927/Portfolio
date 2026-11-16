
const Education = () => {
    return (
        <section id="education" className="py-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-12 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16 mx-auto text-center">
                    <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground mx-auto items-center'>Education & Achivements</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mx-auto">
                    <div className="">
                        <div className="">
                            <div className="">

                            </div>
                        </div>
                    </div>
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
