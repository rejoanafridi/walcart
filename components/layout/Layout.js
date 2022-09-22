import React from "react";
import styles from "../../styles/Layoput.module.css";
import Banner from "../banner/Banner";
import Nav from "../header/Nav";
const Layout = ({ children }) => {
	return (
		<div>
			<header className={styles.header}>
				<Nav></Nav>
			</header>
			<Banner />
			<main className={styles.main}>{children}</main>
		</div>
	);
};

export default Layout;
