import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header>
      <h1>My Application Header</h1>
      <nav>
        <Link href="/Home">Home</Link>
        <Link href="/About">About</Link>
      </nav>
    </header>
  );
};

export default Header;
