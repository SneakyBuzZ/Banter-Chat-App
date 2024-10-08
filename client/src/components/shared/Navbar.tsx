import Logo from "@/components/shared/Logo";
import { UserAvatar } from "@/components/shared/UserAvatar";
import Link from "next/link";

const Navbar = () => {
  const session = true;
  return (
    <nav className="absolute top-0 z-50 w-full flex justify-between items-center px-6 md:px-8 py-3">
      <Logo logoClass="w-6 sm:w-8" textClassName="text-xl sm:text-2xl" />
      {session ? (
        <>
          <UserAvatar className="size-7 sm:size-9" />
        </>
      ) : (
        <>
          <Link href="">Github</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
