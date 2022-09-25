import React from "react";
import styles from "../../styles/Layoput.module.css";

import navStyle from "../../styles/Nav.module.css";

import list from "../../styles/List.module.css";
const Nav = () => {
	return (
		<div className={styles.container}>
			<div className={list.box}>
				<div className={list.box_one}>
					<li> About Us </li>
					<span>|</span>
					<li> My Account </li>
					<span>|</span>
					<li> Featured Products</li>
					<span>|</span>
					<li> Contacts </li>
				</div>

				<div className={list.box_two}>
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
			<div className={navStyle.navbar}>
				<div className={navStyle.nav_logo}>
					<img src="/images/logo.png" alt="" />
				</div>
				<div className={navStyle.nav_search}>
					<img src="/images/search_icon.png" alt="" />

					<input
						className={navStyle.search_input}
						type="search"
						placeholder="What do you want to order?"
					/>

					<input
						className={navStyle.submit}
						type="submit"
						placeholder="Search"
					/>
				</div>

				<div className={navStyle.nav_account}>
					<div className={navStyle.acount_btn}>
						<img src="images/account.png" alt="" />
						<div>
							<p>Sign In</p>
							<p>Account</p>
						</div>
					</div>
					<img src="/images/support.png" alt="" />
					<img src="/images/cart.png" alt="" />
				</div>
			</div>
			<div className={navStyle.category_third}>
				<div className={navStyle.category}>
					<img src="/images/menu.png" alt="" />

					<li>
						<p>
							Top Categories <span>&#9660;</span>{" "}
						</p>
					</li>
				</div>
				<div className={navStyle.category_items}>
					<li>
						<form action="#">
							<select name="deals" id="deals">
								<option value="exclusive deals">Exclusive Deals</option>
								<option value="trending">Trending</option>
							</select>
						</form>
					</li>
					<li>
						<form action="#">
							<select name="watch" id="watch">
								<option value="smart watch">Smart Watches</option>
								<option value="Rolex">Rolex</option>
							</select>
						</form>
					</li>
					<li>Cell phone</li>
					<li>Headphone</li>
				</div>
				<div className={navStyle.discount}>
					<img src="images/discount_logo.png" alt="" />
					<li>
						<p>only this weekend</p>
						<h2>Super discount</h2>
					</li>
					<span>&#8964;</span>
				</div>
			</div>
		</div>
	);
};

export default Nav;
