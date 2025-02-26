import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";

const AppLayout = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
            <Header />
            <main className="flex-grow p-6">
                <Body />
            </main>
            <Footer />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
