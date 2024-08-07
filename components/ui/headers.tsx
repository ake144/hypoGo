import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-slate-50 w-full p-4 fixed top-0 z-10">
      <div className="container mx-auto flex justify-between flex-row items-center">
        <div className="text-black font-bold text-xl">
          <Link href='/' className='text-black'>AI Tools</Link>
          </div>
        <div className="space-x-4 gap-3 flex flex-row">
          <Link href="ai-tools/summarizer">
            <p className="text-black hover:text-gray-600  text-md">Summarizer</p>
          </Link>
          <Link href="ai-tools/essay">
            <p className="text-black text-md hover:text-gray-700">Essay</p>
          </Link>
          <Link href="ai-tools/research">
            <p className="text-black text-md hover:text-gray-700">Research</p>
          </Link>
          <Link href="ai-tools/programming">
            <p className="text-black text-md  hover:text-gray-700">Programming</p>
          </Link>
          <Link href=''>
                  <p  className='text-black hover:text-gray-700 hover:text-md text-sm"'>Forum</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
