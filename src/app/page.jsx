"use client";

import React, { useState, useEffect } from "react";

import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../../public/assets/logo.svg";
import Dark from "../../public/assets/dark.svg";
import { notifyError, notifySuccess } from "../utils/toast";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 20) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  const copyToClipboard = async () => {
    const email = "get@highendvisions.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        notifySuccess('Email address copied', isDarkMode )
      })
      .catch(err => {
        notifyError('Oops, something went wrong ❌', 500, )
        console.error('Failed to copy: ', err);
      });
  };


  return (
    <main
      className={`${styles.main} ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className={styles.container}>
        {isDarkMode ? (
          <Image priority className={styles.logo} src={Dark} />
        ) : (
          <Image priority className={styles.logo} src={Logo} />
        )}
        <div className={styles.textContainer}>
          <h1 className={isDarkMode && styles.darkh1}>
            We are a boutique design agency crafting bespoke online experiences
            for exquisite clients.
          </h1>
          <p onClick={copyToClipboard} className={!isDarkMode ? styles.mailTo : styles.mailToNight }>get@highendvisions.com</p>
        </div> 
      </div>
      <ToastContainer />
    </main>
  );
}
