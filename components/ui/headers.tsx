import Link from 'next/link';
import SparklesText from "@/components/magicui/sparkles-text";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-50 w-full p-4 fixed top-0 z-10">
      <div className="container mx-auto flex justify-between flex-row items-center">
        <div className="text-black font-bold text-xs">
            <Link href='/' className='text-black'>
            <SparklesText text="HypoGo"  className='text-xl'/>
            </Link>
          </div>
        <div className="space-x-4 gap-3 flex flex-row">
          <Link href="/job">
            <p className="text-black  hover:bg-gray-300  text-md">Jobs</p>
          </Link>
          <Link href="/ai-tools">
            <p className="text-black text-md hover:rounded hover:bg-gray-300">AI Tools</p>
          </Link>
          <Link href='/ai-tools/study-plan'>
          <p className="text-black text-md hover:rounded hover:bg-gray-300">Study plan</p>
          </Link>
          <Link href='/scholarship'>
          <p className="text-black text-md hover:rounded hover:bg-gray-300">Scholarships</p>
          </Link>
          <Link href='/resources'>
                  <p  className='text-black  hover:bg-gray-300 hover:text-md text-sm"'>Resources</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
