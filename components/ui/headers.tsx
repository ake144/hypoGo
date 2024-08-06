import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between flex-row items-center">
        <div className="text-white font-bold text-xl">AI Tools</div>
        <div className="space-x-4 flex flex-row">
          <Link href="ai-tools/summarizer">
            <p className="text-gray-300 hover:text-white">Summarizer</p>
          </Link>
          <Link href="ai-tools/essay">
            <p className="text-gray-300 hover:text-white">Essay Writer</p>
          </Link>
          <Link href="ai-tools/research">
            <p className="text-gray-300 hover:text-white">Research Paper Writer</p>
          </Link>
          <Link href="ai-tools/programming">
            <p className="text-gray-300 hover:text-white">Programming Tutor</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
