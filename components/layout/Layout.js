import React from "react";
import styles from "../../styles/Layoput.module.css";
import Nav from "../header/Nav";
const Layout = ({ children }) => {
	return (
		<div>
			<header className={styles.header}>
				<Nav></Nav>
			</header>
			<main className={styles.main}>{children}</main>
		</div>
	);
};

export default Layout;
