import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="hidden lg:flex">
            <Link aria-label="Home" href="/" className="flex gap-1">
                <Image
                    src="/logo.png"
                    alt="DevScript"
                    className="h-6 w-auto"
                    width={250}
                    height={250}
                    priority
                />
                <span className="font-bold">DevScript</span>
            </Link>
        </div>
    );
}