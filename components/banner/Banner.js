// axios.<method> will now provide autocomplete and parameter typings
const axios = require("axios").default;
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bs from "../../styles/Banner.module.css";
import Categories from "../utils/Categories";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import required modules
import { Pagination } from "swiper";

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

				<Swiper
					pagination={true}
					modules={[Pagination]}
					className={bs.banner_thumbnail}
					autoplay={{ delay: 2500 }}
				>
					<SwiperSlide className={bs.banner_img}>
						<img src="/images/banner/banner-1.png" alt="" />
					</SwiperSlide>
					<SwiperSlide className={bs.banner_img}>
						<img src="/images/banner/image 3.png" />
					</SwiperSlide>
					<SwiperSlide className={bs.banner_img}>
						<img src="/images/banner/image 3.png" />
					</SwiperSlide>
					<SwiperSlide className={bs.banner_img}>
						<img src="/images/banner/image 3.png" />
					</SwiperSlide>
					<SwiperSlide className={bs.banner_img}>
						<img src="/images/banner/image 3.png" />
					</SwiperSlide>
				</Swiper>

				<div className={bs.banner_side_image}>
					{/* <Image src="/images/banner/image 4.png" width={300} height={200} /> */}
					<img src="/images/banner/image 4.png" />
					{/* <Image src="/images/banner/image 5.png" width={300} height={200} /> */}
					<img src="/images/banner/image 5.png" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
