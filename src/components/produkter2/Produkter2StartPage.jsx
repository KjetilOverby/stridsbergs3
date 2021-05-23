import React from "react";
import styles from "../../../styles/Produkter2StartPage.module.css";
import Link from "next/link";

const Produkter2StartPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/sirkelsagblad">
        <div className={`${styles.sagblad} ${styles.imgBackground}`}>
          <h1 className={styles.text}>Sirkelsagblad</h1>
          {/* <div className={styles.imgContainer}></div> */}
          <img
            className={styles.img}
            src="https://images.unsplash.com/photo-1581166975727-9bdb6c1248af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </Link>
      <Link href="bandsagblad">
        <div className={`${styles.bandsag} ${styles.imgBackground}`}>
          <h1 className={styles.text}>Båndsag</h1>
          {/* <div className={styles.imgContainer}></div> */}
          <img
            className={styles.img}
            src="https://images.unsplash.com/photo-1553051021-9f94520a6cad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt=""
          />
        </div>
      </Link>
      <Link href="/kniver">
        <div className={`${styles.kniver} ${styles.imgBackground}`}>
          <h1 className={styles.text}>Kniver</h1>
          {/* <div className={styles.imgContainer}></div> */}
          <img
            className={styles.img}
            src="https://www.tole.se/upload/puff/841111685.jpg"
            alt=""
          />
        </div>
      </Link>
      <Link href="fres">
        <div className={`${styles.fres} ${styles.imgBackground}`}>
          <h1 className={styles.text}>Fres</h1>
          {/* <div className={styles.imgContainer}></div> */}
          <img
            className={styles.img}
            src="https://images.unsplash.com/photo-1569695145335-ed8e60d92945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fHNhd3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Produkter2StartPage;

{
  /* <div>
<h4 className={styles.text}>Hello world</h4>
</div>
<img
className={styles.img}
src="https://images.unsplash.com/photo-1581166975727-9bdb6c1248af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
alt=""
/> */
}
