import Footer from "@/Components/Guests/Navigation/Footer";
import NavigationBar from "@/Components/Guests/Navigation/NavigationBar";
import { Head } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <>
            <Head></Head>
            <NavigationBar />
            <body className="w-full bg-gradient-to-b from-gray-700 via-gray-900 to-black">
                {children}
            </body>
            <Footer />

        </>
    );
}
