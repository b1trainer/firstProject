import React from "react";
import styles from "./HomePage.module.css";
import cat from "/cat.gif";

const HomePage = () => {
  return (
    <div class="flex justify-center">
      <div className={styles.container}>
        <h1 class="text-6xl m-2 flex justify-center">Hello world!</h1>
        <p class="m-2">
          Hi, my name is Nikita, i'm junior frontend developer. This is my first
          project on GitHub. If you are watching this, i hope you like it. At this moment, that
          SPA includes start-page, page with todo-list,
          where you can save your tasks into localstorage, and page with weather
          application, where you can check whats going on behind the windows at
          your town, or somewhere else
        </p>
        <div class="m-2 flex items-center">
          <p>
            At this moment i'm trying to find a job. If you are interesting in
            my skills, please, text me <br /> (Links to my social media u can
            find in header)
          </p>
          <img className={styles.image} src={cat} alt="cat..." />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
