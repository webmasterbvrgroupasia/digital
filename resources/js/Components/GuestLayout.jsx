import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center bg-black">
            <div>
                <Link href="/">
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 p-8 space-y-5 bg-neutral-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
