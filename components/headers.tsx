import Link from 'next/link';
import SparklesText from "@/components/magicui/sparkles-text";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

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

        <div>
        <div className="ml-[100px]  flex flex-row gap-3">
         <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      {/* <Link href='/auth/login'>
        <ShinyButton text="Log In" />
       </Link>
       <Link href='/auth/signup'>
          <Button className="rounded-full  flex justify-end items-end">start for free</Button>
        </Link> */}
    </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
