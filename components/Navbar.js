import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>about</a>
      </Link>
      <style jsx>{`
        nav{
          background-color: tomato;
        }
        a{
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
