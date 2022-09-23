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
						<span>{props.subcategory ? <span>&#62;</span> : ""}</span>
					</a>

					{props?.submenu?.length > 0 && (
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
											<span>{item.thirdsubmenu ? <span className={styleDrop.hover}>&#62;</span> : ""}</span>
										</a>
										{item?.thirdsubmenu?.length > 0 && (
											<ul className={styleDrop.second_sub_menu}>
												{
													<li>
														{item?.thirdsubmenu?.map((items, id) => (
															<React.Fragment key={id}>
																<a
																	href="#"
																	className={styleDrop.second_submenu_item}
																>
																	<div className={styleDrop.dropdown_icon}>
																		<img src={items?.image} />
																	</div>
																	<div className={styleDrop.dropdown_title}>
																		<p>{items?.name}</p>
																	</div>
																</a>
															</React.Fragment>
														))}
													</li>
												}
											</ul>
										)}
									</React.Fragment>
								))}
							</li>
						</ul>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Dropdown;
