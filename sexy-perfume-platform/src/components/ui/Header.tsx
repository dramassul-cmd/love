import Link from 'next/link';

export function Header() {
  return (
    <header className="p-4 border-b border-gray-800">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold font-serif text-accent-gold">SEXY PERFUME</h1>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-accent-gold transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-accent-gold transition-colors">Shop</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-accent-gold transition-colors">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-accent-gold transition-colors">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
