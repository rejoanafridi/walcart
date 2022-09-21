import React from "react";
import styles from "../../styles/Layoput.module.css";
import listStyle from "../../styles/Listitem.module.css";
import navStyle from "../../styles/Nav.module.css";
const Nav = () => {
	return (
		<div className={styles.container}>
			<div className={listStyle.list}>
				<div className={listStyle.list}>
					<li> About Us </li>
					<span>|</span>
					<li> My Account </li>
					<span>|</span>
					<li> Featured Products</li>
					<span>|</span>
					<li> Contacts </li>
				</div>

				<div className={listStyle.list}>
					<li>Order Tracking</li>
					<li>
						<form action="#">
							<select name="languages" id="lang">
								<option value="english">English</option>
								<option value="bangla">Bangla</option>
								<option value="french">French</option>
							</select>
						</form>
					</li>
					<li>
						<form action="#">
							<select name="languages" id="lang">
								<option value="usd">USD</option>
								<option value="bdt">BDT</option>
								<option value="fr">FR</option>
							</select>
						</form>
					</li>
				</div>
			</div>
			<div className={navStyle.flex}>
				<div className={navStyle.nav_logo}>
					<img src="/images/logo.png" alt="" />
				</div>
				<div className={navStyle.nav_search}>
					<img src="/images/search_icon.png" alt="" />

					<input
						className={navStyle.search_input}
						type="text"
						placeholder="What do you want to order?"
					/>

					<input
						className={navStyle.submit}
						type="submit"
						placeholder="Search"
					/>
				</div>
				<div className="nav-list-item">
					<div className={navStyle.list_item}>
						<div className={navStyle.acount_btn}>
							<img src="images/account.png" alt="" />
							<div>
								<p>Sign In</p>
								<p>Account</p>
							</div>
						</div>
						<img src="images/support.png" alt="" />
						<img src="images/cart.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Nav;
