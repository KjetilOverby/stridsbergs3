import React, { useState } from "react";
import styles from "../../../styles/Header.module.css";
import { IoMenuSharp } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";

function HeaderComponent() {
  const [openAktuelt, setOpenAktuelt] = useState(false);
  const [drawbarposition, setDrawbarposition] = useState(styles.drawerin);

  const drawerHandler = () => {
    if (drawbarposition === styles.drawerin) {
      setDrawbarposition(styles.drawer);
    } else {
      setDrawbarposition(styles.drawerin);
    }
  };

  const drawer = (
    <div className={styles.drawerContainer}>
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          src="https://lh3.googleusercontent.com/pw/ACtC-3fXiI7_HzVyk9l0H85KMJVtoKnh3Y-f7E2CZPZ40uusS5CQtZAbm0XURt86EnZVvRthOWce5ZNLFq6LNo7xSUPFlctVVGCAAUxXkrUTYVRF7Ptgv9pDNfPtB85OSEsBCDLWZL-SBbJFmKf45lOy3NS4=w1191-h258-no?authuser=0"
          alt=""
        />
      </div>
      <div className={styles.tabDrawerContainer}>
        <IoMenuSharp
          onClick={drawerHandler}
          className={styles.drawerIcon}
          style={{ fontSize: "2rem" }}
        />
      </div>
      <div className={`${drawbarposition} ${styles.draw}`}>
        <div className={styles.tabsDrawer}>
          <Link href="/">
            <p className={styles.drawerTab}>Hjem</p>
          </Link>
          <hr className={styles.hr} />
          <Link href="/about">
            <p className={styles.drawerTab}>Om oss</p>
          </Link>

          <hr className={styles.hr} />
          <Link href="/produkter">
            <p className={styles.drawerTab}>Produkter</p>
          </Link>
          <hr className={styles.hr} />
          <Link href="/slipeservice">
            <p className={styles.drawerTab}>Slipeservice</p>
          </Link>
          <hr className={styles.hr} />
          <Link href="/kontakt">
            <p className={styles.drawerTab}>Kontakt oss</p>
          </Link>

          <hr className={styles.hr} />
          <p
            onClick={() => setOpenAktuelt(!openAktuelt)}
            className={styles.drawerTab}
          >
            Aktuelt
          </p>
          {openAktuelt && (
            <>
              <Link href="/nyheter">
                <p className={styles.drawerSubTab}>Nyheter</p>
              </Link>
              <Link href="/stilling_ledig">
                <p className={styles.drawerSubTab}>Stilling ledig</p>
              </Link>
              <Link href="/salgsbetingelser">
                <p className={styles.drawerSubTab}>Salgsbetingelser</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  return (
    <>
      {isMobile ? (
        drawer
      ) : (
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src="https://lh3.googleusercontent.com/pw/ACtC-3fXiI7_HzVyk9l0H85KMJVtoKnh3Y-f7E2CZPZ40uusS5CQtZAbm0XURt86EnZVvRthOWce5ZNLFq6LNo7xSUPFlctVVGCAAUxXkrUTYVRF7Ptgv9pDNfPtB85OSEsBCDLWZL-SBbJFmKf45lOy3NS4=w1191-h258-no?authuser=0"
              alt=""
            />
          </div>
          <div className={styles.tabContainer}>
            <Link href="/">
              <p className={styles.tab}>Hjem</p>
            </Link>
            <Link href="/about">
              <p className={styles.tab}>Om oss</p>
            </Link>
            <div className={styles.dropdown}>
              <Link href="/produkter">
                <p className={styles.tab}>
                  Produkter{" "}
                  <RiArrowDownSLine style={{ verticalAlign: "middle" }} />
                </p>
              </Link>
              <div className={styles.dropdownContent}>
                <div>
                  <Link href="/sirkelsagblad">
                    <p className={styles.tab}>Sagblad</p>
                  </Link>
                </div>
                <Link href="/bandsagblad">
                  <p className={styles.tab}>Båndsagblad</p>
                </Link>
                <Link href="/kniver">
                  <p className={styles.tab}>Kniver</p>
                </Link>
                <Link href="/fres">
                  <p className={styles.tab}>Fres</p>
                </Link>
              </div>
            </div>
            <Link href="/slipeservice">
              <p className={styles.tab}>Slipeservice</p>
            </Link>
            <Link href="/kontakt">
              <p className={styles.tab}>Kontakt oss</p>
            </Link>
            <div className={styles.dropdown}>
              <p className={styles.tab}>
                Aktuelt <RiArrowDownSLine style={{ verticalAlign: "middle" }} />
              </p>
              <div className={styles.dropdownContent}>
                <Link href="/nyheter">
                  <p className={styles.tab}>Nyheter</p>
                </Link>
                <Link href="/stilling_ledig">
                  <p className={styles.tab}>Stilling ledig</p>
                </Link>
                <Link href="/salgsbetingelser">
                  <p className={styles.tab}>Salgsbetingelser</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HeaderComponent;
// {isMobile && (
//
//   )}
//<div className={`${drawbarposition}`}></div>
