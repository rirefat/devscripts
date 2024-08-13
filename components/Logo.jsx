import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="hidden lg:block">
            <Link aria-label="Home" href="/">
                <Image
                    src="/logo-full.png"
                    alt="DevScript"
                    className="w-48 h-auto flex items-center justify-center"
                    width={250}
                    height={250}
                    priority
                />
                {/* <span className="font-bold">DevScript</span> */}
            </Link>
        </div>
    );
}