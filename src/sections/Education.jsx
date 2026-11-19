import { BadgeCheck, Calendar, ExternalLink, GraduationCap } from "lucide-react"


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
                    <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground mx-auto items-center'>Education & Achievements</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mx-auto">
                    <div className="">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-3  rounded-2xl bg-linear-to-b from-primary/50 via-primary/75 to-primary">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-semibold">Education</h3>
                        </div>
                        <div className="space-y-8">
                            <div className="p-6 rounded-2xl bg-surface border border-primary/50">
                                <div className="flex items-start justify-between mb-4 flex-wrap">
                                    <div className="">
                                        <h4 className="text-xl font-semibold">University Of Mumbai</h4>
                                        <p className="font-xl text-primary">Bachelor Of Engineering in Computer Engineering</p>
                                    </div>
                                    <span className="px-3 py-1 font-semibold rounded-xl bg-primary text-surface">8.13 / 10</span>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        <span>2021 - 2025</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-surface border border-primary/50 ">
                                <div className="flex items-start justify-between mb-4 flex-wrap">
                                    <div className="">
                                        <h4 className="text-xl font-semibold">Higher Secondary (Class XII)</h4>
                                        <p className="font-xl text-primary">New English High School & Jr. College</p>
                                    </div>
                                    <span className="px-3 py-1 font-semibold rounded-xl bg-primary text-surface">93.00 %</span>
                                </div>
                                <div className="">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5" />
                                        <span>2020 - 2021</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="p-3 rounded-2xl bg-linear-to-b from-primary/50 via-primary/75 to-primary">
                                <BadgeCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-semibold">Achievements</h3>
                        </div>
                        <div className="space-y-8">
                            <div className="p-6 rounded-2xl bg-surface border border-primary/50 ">
                                <div className="flex items-start justify-between mb-4 flex-wrap">
                                    <div className="">
                                        <h4 className="text-xl font-semibold">195+ Problems Solved</h4>
                                        <p className="font-xl text-primary">GeeksForGeeks</p>
                                    </div>
                                    <span className="px-3 py-1 font-semibold rounded-xl bg-primary text-surface">Active</span>
                                </div>
                                <div className="flex items-center justify-end font-semibold rounded-xl text-primary/70 ">
                                    <a className="inline-flex gap-1" href="https://www.geeksforgeeks.org/profile/sujalwagh42rk?tab=activity">
                                        <span>Verify</span>
                                        <ExternalLink />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-surface border border-primary/50 ">
                                <div className="flex items-start justify-between mb-4 flex-wrap">
                                    <div className="">
                                        <h4 className="text-xl font-semibold">4 ⭐ @HackerRank</h4>
                                        <p className="font-xl text-primary">HackerRank</p>
                                    </div>
                                    <span className="px-3 py-1 font-semibold rounded-xl bg-primary text-surface">Active</span>
                                </div>
                                <div className="flex items-center justify-end font-semibold rounded-xl text-primary/70 ">
                                    <a className="inline-flex gap-1" href="https://www.hackerrank.com/profile/sujalwaghmare841">
                                        <span>Verify</span>
                                        <ExternalLink />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
