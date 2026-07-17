function Upload() {
    return (

        <section className="flex flex-col items-center justify-center px-6 py-6 shadow-md rounded-xl">

            <input type="file" accept=".pdf, .doc, .docx"
                className="mb-6 text-white px-6 py-3 rounded-lg" />
            <button className="mb-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Analyze Resume
            </button>
            <p className="text-grey-500 mb-6">
                upload a PDF 0r DOCX file to receive AI feedback
            </p>

        </section>
    )
} export default Upload;