import React from "react";

function Header({subTitle, mainTitle, descriptionText}) {
    return (
        <header className="h-screen flex items-center justify-center static -z-50">
            <div className=" z-0 left-0 top-10">
                <img
                    src="https://framerusercontent.com/images/VAghYRak1orJZWcevSJLQXlxmM.svg"
                    alt=""
                />
            </div>
            <div className="text-center space-y-2">
                <span className="text-neutral-300 text-base md:text-lg">
                    {subTitle}
                </span>
                <h1 className="font-semibold text-white text-5xl">
                    {mainTitle}
                </h1>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    {descriptionText}
                </p>
            </div>
            <div className=" right-0 top-1">
                <img
                    className="h-auto"
                    src="https://framerusercontent.com/images/EV0JayRnHcKEROFlY5vlvdol8G4.svg"
                    alt=""
                />
            </div>
        </header>
    );
}

export default Header;
