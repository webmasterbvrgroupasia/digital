import NavigationBar from "@/Components/Guests/Navigation/NavigationBar";
import { Head } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <>
            <Head>
                <meta
                    head-key="description"
                    name="description"
                    content="This is the default description"
                />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            <NavigationBar/>
            <main className="w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
                {children}
            </main>
        </>
    );
}
