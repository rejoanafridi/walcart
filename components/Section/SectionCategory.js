import React, { useEffect, useState } from "react";
import productCss from "../../styles/Product.module.css";
const SectionCategory = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("/api/products.json")
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

	return (
		<div className={productCss.container}>
			<h3>Popular Product Categories</h3>
			<div className={productCss.product_row}>
				{products.map((product, id) => (
					<React.Fragment key={id}>
						<div className={productCss.product}>
							<div className={productCss.product_img}>
								<img src={product?.image} alt="" />
							</div>
							<div className={productCss.product_title}>
								<p>{product?.name}</p>
							</div>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default SectionCategory;
