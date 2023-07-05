import React, { useRef } from "react";
const BtnSlid = ({ handleClick }) => {
	const ref = useRef();
	const handeRed = () => (ref.current.style.background = "rgb(112, 109, 109)");

	return (
		<>
			<div className="btn-wraper">
				<button
					className="btn-slid"
					ref={ref}
					type="button"
					onClick={handleClick}
					onMouseOver={handeRed}
				>
					Открыть слайдер
				</button>
			</div>
		</>
	);
};
export default BtnSlid;
