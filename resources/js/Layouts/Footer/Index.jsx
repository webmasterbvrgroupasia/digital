import { Link } from "@inertiajs/react";

export default function Index() {
    return (
        <>
            <footer className="border-t bg-black border-neutral-800 py-16 md:py-16 w-full">
                <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
                    <div className="space-y-4">
                        <div className="text-white font-bold uppercase">
                            useful links
                        </div>
                        <ul className="text-neutral-400 space-y-4">
                            <li>
                                <Link href="">Home</Link>
                            </li>
                            <li>
                                <Link href="">About Us</Link>
                            </li>
                            <li>
                                <Link href="">Services</Link>
                            </li>
                            <li>
                                <Link href="">Career</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div className="text-white font-bold uppercase">
                            articles and blogposts
                        </div>
                        <ul className="text-neutral-400 space-y-4">
                            <li>
                                <Link href="/blogposts">Blogposts</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div className="text-white font-bold uppercase">
                            link
                        </div>
                        <ul className="text-neutral-400 space-y-4">
                            <li>
                                <Link href="">Home</Link>
                            </li>
                            <li>
                                <Link href="">About Us</Link>
                            </li>
                            <li>
                                <Link href="">Services</Link>
                            </li>
                            <li>
                                <Link href="">Career</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <div className="text-white font-bold uppercase">
                            link
                        </div>
                        <ul className="text-neutral-400 space-y-4">
                            <li>
                                <Link href="">Home</Link>
                            </li>
                            <li>
                                <Link href="">About Us</Link>
                            </li>
                            <li>
                                <Link href="">Services</Link>
                            </li>
                            <li>
                                <Link href="">Career</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-5 max-w-sm mx-0 md:mx-auto mt-16 px-4 md:px-0">
                    <img src="/images/vertical-white.png" className="w-20 mx-0 md:mx-auto" alt="BVR Digital" />
                    <div className="text-neutral-400 text-sm text-left md:text-center">
                        © 2023 BVR Digital. All rights reserved.
                    </div>
                    <div className="flex justify-start md:justify-center space-x-5">
                        <div>
                            <a href="" className="text-white text-xs">
                            Instagram
                            </a>
                        </div>
                        <div>
                            <a href="" className="text-white text-xs">
                            Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
