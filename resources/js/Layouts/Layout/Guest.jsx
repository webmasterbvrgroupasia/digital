import Footer from "@/Layouts/Footer/Index.jsx";
import Navigation from "@/Layouts/Navigation/Index.jsx";
import { Head } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <>
            <Head></Head>
            <Navigation />
            <section className="w-full  bg-black">{children}</section>
            <Footer />
        </>
    );
}
