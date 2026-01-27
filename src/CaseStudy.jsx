const CaseStudy = ({ project, onClose }) => {
    const modalRef = useRef(null);

    useGSAP(() => {
        gsap.from('.story-section', {
            scrollTrigger: {
                trigger: '.story-section',
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }, { scope: modalRef });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] overflow-y-auto overflow-x-hidden"
            ref={modalRef}
            style={{
                background: 'linear-gradient(180deg, #000000 0%, #1a0a2e 50%, #000000 100%)'
            }}
        >
            {/* Close Button - Floating */}
            <div className="fixed top-8 right-8 z-[210]">
                <Magnetic>
                    <button
                        onClick={onClose}
                        className="size-14 lg:size-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 shadow-2xl"
                    >
                        <X size={20} className="lg:hidden" />
                        <X size={24} className="hidden lg:block" />
                    </button>
                </Magnetic>
            </div>

            {/* Hero Section - Full Width */}
            <div className="relative h-[60vh] lg:h-[80vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
                <img
                    src={project.image}
                    className="absolute inset-0 w-full h-full object-cover"
                    alt={project.title}
                />
                <div className="absolute bottom-0 left-0 right-0 z-20 px-6 lg:px-20 pb-12 lg:pb-20">
                    <div className="max-w-[1400px] mx-auto">
                        <motion.div
                            initial={{ y: 40, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <span className="text-xs lg:text-sm font-black uppercase tracking-[0.3em] text-white/60 block mb-4">
                                Case Study // 0{project.id}
                            </span>
                            <h1 className="text-5xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white font-serif italic mb-6">
                                {project.title}
                            </h1>
                            <p className="text-xl lg:text-2xl font-light text-white/80 max-w-2xl leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Story Content */}
            <div className="relative z-20 bg-gradient-to-b from-black to-transparent">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-20 py-20 lg:py-32 space-y-32 lg:space-y-40">

                    {/* Section 1: The Challenge */}
                    <div className="story-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="space-y-4">
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">01 // The Challenge</span>
                                <h2 className="text-4xl lg:text-6xl font-serif italic font-light text-white leading-tight">
                                    Solving the unsolvable
                                </h2>
                            </div>
                            <p className="text-lg lg:text-xl font-light leading-relaxed text-white/70">
                                {project.details?.challenge || "Every great project starts with a complex problem. This was no exception."}
                            </p>
                            <div className="flex flex-wrap gap-3 pt-4">
                                {project.tags.slice(0, 3).map(tag => (
                                    <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-white/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-1">
                            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/20 to-transparent">
                                <img src={project.image} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: The Architecture */}
                    <div className="story-section grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-1">
                            <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-transparent flex items-center justify-center">
                                <div className="text-center space-y-4 p-8">
                                    <Database size={64} className="mx-auto text-white/20" strokeWidth={1} />
                                    <p className="text-sm font-mono text-white/40 uppercase tracking-widest">System Architecture</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">02 // The Architecture</span>
                                <h2 className="text-4xl lg:text-6xl font-serif italic font-light text-white leading-tight">
                                    Built for scale
                                </h2>
                            </div>
                            <p className="text-lg lg:text-xl font-light leading-relaxed text-white/70">
                                {project.details?.architecture || "A robust foundation designed to handle millions of users."}
                            </p>
                            <p className="text-base lg:text-lg font-light leading-relaxed text-white/50">
                                {project.details?.longDescription || project.description}
                            </p>
                        </div>
                    </div>

                    {/* Section 3: The Results - Centered Stats */}
                    <div className="story-section">
                        <div className="text-center space-y-8 mb-16">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-white/40">03 // The Impact</span>
                            <h2 className="text-4xl lg:text-6xl font-serif italic font-light text-white leading-tight">
                                Delivered excellence
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {project.details?.features?.map((feature, idx) => (
                                <div key={feature} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 lg:p-10 hover:border-white/20 transition-all duration-500">
                                    <div className="absolute top-0 right-0 text-8xl font-black text-white/5 -mr-4 -mt-4">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <div className="relative z-10 space-y-4">
                                        <CheckCircle2 size={24} className="text-white/40" />
                                        <p className="text-base lg:text-lg font-medium text-white/90 leading-relaxed">
                                            {feature}
                                        </p>
                                    </div>
                                </div>
                            )) || (
                                    <div className="col-span-full text-center py-12">
                                        <p className="text-lg text-white/40">Additional features coming soon</p>
                                    </div>
                                )}
                        </div>
                    </div>

                    {/* Footer CTA */}
                    <div className="story-section text-center space-y-8 py-20">
                        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20">
                            <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-black uppercase tracking-widest text-green-400">Live in Production</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Magnetic>
                                <button className="px-8 py-4 bg-white text-black rounded-full font-black uppercase text-sm tracking-wider hover:bg-white/90 transition-all flex items-center gap-3 shadow-2xl">
                                    View Live Project <ArrowUpRight size={18} />
                                </button>
                            </Magnetic>
                            <Magnetic>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full font-bold uppercase text-sm tracking-wider hover:bg-white/10 transition-all"
                                >
                                    Close Case Study
                                </button>
                            </Magnetic>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};
