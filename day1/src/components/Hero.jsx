function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">

            <h1 className="text-5xl font-bold mb-6">
                AI Resume Analyzer
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl mb-8">
                Upload your resume and receive an ATS score,
                AI-powered suggestions, and personalized feedback
                to improve your chances of getting hired.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Upload Resume
            </button>

        </section>
    );
}

export default Hero;