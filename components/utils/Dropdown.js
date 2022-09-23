import React from "react";
import styleDrop from "../../styles/Dropdown.module.css";
const Dropdown = ({ props, category }) => {
	return (
		<div className={styleDrop.dropdown}>
			<ul>
				<li>
					<a href="#" className={styleDrop.item}>
						<div className={styleDrop.dropdown_icon}>
							<img src={props?.image} alt="" />
						</div>
						<div className={styleDrop.dropdown_title}>
							<p>{props?.name}</p>
						</div>
					</a>
					<ul className={styleDrop.sub_menu}>
						<li>
							{props?.submenu?.map((item, id) => (
								<React.Fragment key={id}>
									<a href="#" className={styleDrop.submenu_item}>
										<div className={styleDrop.dropdown_icon}>
											<img src={item?.image} />
										</div>
										<div className={styleDrop.dropdown_title}>
											<p>{item?.name}</p>
										</div>
									</a>
									<ul className={styleDrop.second_sub_menu}>
										<li>
											{item?.thirdsubmenu?.map((item, id) => (
												<React.Fragment key={id}>
													<a href="#" className={styleDrop.second_submenu_item}>
														<div className={styleDrop.dropdown_icon}>
															<img src={item?.image} />
														</div>
														<div className={styleDrop.dropdown_title}>
															<p>{item?.name}</p>
														</div>
													</a>
												</React.Fragment>
											))}
										</li>
									</ul>
								</React.Fragment>
							))}
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default Dropdown;
