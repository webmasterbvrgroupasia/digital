import Footer from "@/Components/Guests/Navigation/Footer";
import NavigationBar from "@/Components/Guests/Navigation/NavigationBar";
import { Head } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <>
            <Head></Head>
            <NavigationBar />
            <body className="w-full  bg-black">
                {children}
            </body>
            <Footer />

        </>
    );
}
