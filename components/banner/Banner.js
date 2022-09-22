// axios.<method> will now provide autocomplete and parameter typings
const axios = require("axios").default;
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bs from "../../styles/Banner.module.css";
import Categories from "../utils/Categories";

const Banner = () => {
	// const [data, setData] = useState([]);
	const [category, setCategory] = useState([]);
	// console.log(data);
	console.log(category);
	useEffect(() => {
		axios.get("/api/categories.json").then(function (response) {
			setCategory(response.data);
		});
	}, []);

	return (
		<div className={bs.container}>
			<div className={bs.banner_row}>
				<div className={bs.banner_category}>
					{category.map((data, idx) => (
						<Categories key={idx} props={data} />
					))}
				</div>
				<div className={bs.banner_thumbnail}>
					<div>
						<Image src="/images/banner/image 3.png" width={960} height={380} />
					</div>
				</div>
				<div className={bs.banner_side_image}>
					<Image src="/images/banner/image 4.png" width={280} height={160} />
					<Image src="/images/banner/image 5.png" width={280} height={160} />
				</div>
			</div>
		</div>
	);
};

export default Banner;
