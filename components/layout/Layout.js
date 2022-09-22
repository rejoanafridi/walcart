import React from "react";
import styles from "../../styles/Layoput.module.css";
import Banner from "../banner/Banner";
import Nav from "../header/Nav";
import SectionCategory from "../Section/SectionCategory";
const Layout = ({ children }) => {
	return (
		<div>
			<header className={styles.header}>
				<Nav></Nav>
			</header>

			<main className={styles.main}>
				<Banner />
				<SectionCategory />
				{children}
			</main>
		</div>
	);
};

export default Layout;
