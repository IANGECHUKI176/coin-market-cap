import React from "react";
import Image from "next/image";
import Search from '../assets/svg/search'
const styles = {
  header: `bg-[#17171A] text-white flex w-full p-[30px] gap-[100px] h-20`,
  headerWrapper: `flex justify-center h-full mx-auto max-w-screen-xl px-4`,
  nav: `flex justify-center items-center gap-[20px]`,
  navItem: `relative cursor-pointer mr-1 hover:opacity-60`,
  navLink: ``,
  badge: `h-1 w-1 bg-blue-600 rounded-full absolute top-1 right-0 bottom-5 ring-4`,
  inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`,
};
const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
        alt='logo'
        width={220}
        height={220}
      />
      {/*  */}
      <div className={styles.headerWrapper}>
        {/*  */}
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>CryptoCurrencies</div>
            <div className={styles.badge}></div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Exchanges</div>
          </div>{" "}
          <div className={styles.navItem}>
            <div className={styles.navLink}>NFT</div>
            <div className={styles.badge}> </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Cryptown</div>
            <div className={styles.badge}> </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Portfolio</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>WatchList</div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Products</div>
            <div className={styles.badge}> </div>
          </div>
          <div className={styles.navItem}>
            <div className={styles.navLink}>Learn</div>
          </div>
        </nav>
        <div className="flex items-center">
            {/* Connect */}
            <div className={styles.inputContainer}>
             <Search/>
              <input type="text" className={styles.input} placeholder="Search"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
