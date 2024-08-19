import Image from "next/image";

export const WritingPage = () => {
    return (
        <div className="flex flex-col lg:flex-row my-10 lg:my-20 lg:mx-20 mx-5">
            <div className="flex flex-col items-center lg:w-1/2 w-full text-center lg:text-left mt-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Powerful writing in seconds</h2>
                <p className="text-md lg:text-lg text-gray-600 mt-4">Hundreds of AI tools give you the power to create, edit, and polish text in seconds. Improve your own content or create original high-quality writing to fit your unique style and goals.</p>
            </div>
            
            <div className="lg:w-1/2 w-full rounded-lg mx-7 lg:mx-7 mt-10 lg:mt-0">
                <Image src='/explain.png' alt="Writing tools" width={400} height={200} className="mx-auto" />
            </div>
        </div>
    );
}

export const JobsPage = () => {
    return (
        <div className="flex flex-col lg:flex-row my-10 lg:my-20 lg:mx-20 mx-5">
            <div className="flex flex-col items-center lg:w-1/2 w-full text-center lg:text-left mt-10">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Looking for new Role</h1>
                <p className="text-md lg:text-xl text-gray-600 mt-4">Find jobs with our job tools</p>
            </div>
            
            <div className="lg:w-1/2 w-full rounded-lg mx-7 lg:mx-7 mt-10 lg:mt-0">
                <Image src='/job.png' alt="Job tools" width={400} height={200} className="mx-auto" />
            </div>
        </div>
    );
}

export const AcademicPage = () => {
    return (
        <div className="flex flex-col lg:flex-row my-10 lg:my-20 lg:mx-20 mx-5">
            <div className="lg:w-1/2 w-full rounded-lg mx-7 lg:mx-7 mt-10 lg:mt-0">
                <Image src='/essay.png' alt="Academic tools" width={400} height={200} className="mx-auto" />
            </div>
            
            <div className="flex flex-col items-center lg:w-1/2 w-full text-center lg:text-left mt-10">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Academic research and writing</h1>
                <p className="text-md lg:text-lg text-gray-600 mt-4">HyperWrite leverages real-time research by searching through millions of scholarly articles and papers, powering your AI assistant with accurate, current, and citation-backed results.</p>
            </div>
        </div>
    );
}
