import Link from 'next/link';
import SparklesText from "@/components/magicui/sparkles-text";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-50 w-full p-4 fixed top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black font-bold text-xs">
          <Link href='/' className='text-black'>
            <SparklesText text="HypoGo" className=' text-xs md:text-xl' />
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/job">
            <p className="text-black text-xs md:text-md hover:rounded hover:bg-gray-300 p-2">Jobs</p>
          </Link>
          <Link href="/ai-tools">
            <p className="text-black text-xs md:text-md hover:rounded hover:bg-gray-300 p-2">AI Tools</p>
          </Link>
          <Link href='/ai-tools/study-plan'>
            <p className="text-black text-xs md:text-md hover:rounded hover:bg-gray-300 p-2">Study Plan</p>
          </Link>
          <Link href='/scholarship'>
            <p className="text-black text-xs md:text-md hover:rounded hover:bg-gray-300 p-2">Scholarships</p>
          </Link>
          <Link href='/resources'>
            <p className="text-black text-xs md:text-md hover:rounded hover:bg-gray-300 p-2">Resources</p>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
