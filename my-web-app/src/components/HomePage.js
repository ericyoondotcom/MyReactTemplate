import React from "react";
import style from "./stylesheets/HomePage.module.scss";

const HomePage = () => {
    console.log("HI")
    return (
        <div id={style.home_page}>
            <h1>Welcome to the home page!</h1>
        </div>
    )
};

export default HomePage;
