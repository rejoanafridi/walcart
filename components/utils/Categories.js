import React from "react";
import styleCategory from "../../styles/Banner.module.css";
import Image from "next/image";
const Categories = ({ props }) => {
	console.log(props.image);
	return (
		<div className={styleCategory.category_items}>
			<Image src={props?.image} width={20} height={20} />

			<p>{props?.name}</p>

			<span>{props.subcategory ? <span>&#62;</span> : ""}</span>
		</div>
	);
};

export default Categories;
