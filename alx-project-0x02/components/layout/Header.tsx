import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Application Header</h1>
      <nav>
        <div className="font-bold text-xl">MyApp</div>
        <ul className="flex space-x-6">
          <li>
            <Link href="/home" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:underline">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
