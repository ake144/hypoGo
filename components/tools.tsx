import Image from "next/image";

export const WritingPage = () => {
    return (
        <div className="flex mx-20 lg:flex-row flex-col my-20 h-[350px]">
            <div className="flex flex-col  mt-10 items-center w-1/2">
                <h2 className="text-3xl font-bold text-gray-800">Powerful writing in seconds</h2>
                <p className="text-lg text-gray-600">Hundreds of AI tools give you the power to create, edit, and polish text in seconds. Improve your own content or create original high-quality writing to fit your unique style and goals.</p>
            </div>
            
            <div className="w-1/2 rounded-lg  mx-7 bg-slate-800 h-[300px] ">
                <Image    src='/explain.png' className="items-center justify-center  mt-20 mx-12"  alt="writting tools "   width={400}  height={200}    />
            </div>
            
      
        </div>
    );
    }

export const JobsPage = () => {
    return (
        <div className="flex mx-20 lg:flex-row flex-col my-20 h-[350px]">
            <div className="flex flex-col  mt-10 items-center w-1/2">
                <h1 className="text-3xl font-bold text-gray-800">Looking for new Role</h1>
                <p className="text-xl text-gray-600">Find jobs with our job tools</p>
            </div>
            <div className="w-1/2 rounded-lg  mx-7  bg-slate-800 h-[300px] ">
                <Image  src='/job.png' className="items-center justify-center mt-20 mx-12"  alt="writting tools "   width={400}  height={200}    />
            </div>
      
        </div>
    );
    }

export const AcademicPage = () => {
    return (
        <div className="flex mx-20 lg:flex-row flex-col my-20 h-[350px]">
           
           <div className="w-1/2 rounded-lg  mx-7 bg-slate-800 h-[200] ">
                <Image    src='/essay.png' className="items-center justify-center mt-20 mx-12"  alt="writting tools "   width={400}  height={200}    />
            </div>

            <div className="flex mt-10 flex-col items-center w-1/2">
                <h1 className="text-3xl font-bold text-gray-800">Academic research and writing</h1>
                <p className="text-md mx-13 p-2 text-gray-600">HyperWrite leverages real-time research by searching through millions of scholarly articles and papers, powering your AI assistant with accurate, current, and citation-backed results.</p>
            </div>
           
        </div>
    );
    }

