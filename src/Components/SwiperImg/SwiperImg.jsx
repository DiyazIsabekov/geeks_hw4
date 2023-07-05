import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const SwiperImg = ({ data }) => {
	console.log(data);
	return (
		<>
			<Swiper
				style={{ width: 100 + "%", height: 100 + "%" }}
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
			>
				{data.map(el => (
					<SwiperSlide key={el.id}>
						<img
							style={{
								width: 100 + "%",
								height: 100 + "%",
							}}
							src={el.url}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
export default SwiperImg;
