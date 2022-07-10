import type { NextPage } from "next";
import React, { useReducer } from "react";
import Head from "next/head";
import { Menu } from "../components/menu/Menu";
import ReactTypingEffect from "react-typing-effect";
import { isOpenedReducer } from "../context/isOpenedReducer";
const Home: NextPage = () => {
	// const [state, dispatch] = useReducer(isOpenedReducer, false);
	// const handleClick = () => {
	// 	dispatch({ type: "TOGGLE", payload: !state });
	// };
	return (
		<div
			className="w-[100vw] m-0 p-0 bg-black h-[100vh] flex flex-col overflow-x-hidden justify-center  items-center relative"
			style={{
				backgroundImage: `url("/images/background.png")`,
				backgroundPosition: "center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Xelopsys main page" />
			</Head>
			{/*  background  */}

			<div className="hidden md:block lg:block xl:block 2xl:block w-1/2 h-[100vh] bg-[#090000] absolute top-0 left-0"></div>

			{/*  background  */}
			<div className="w-full backdrop-filter backdrop-brightness-[30%] overflow-hidden lg:backdrop-brightness-100  md:backdrop-blur-0 lg:backdrop-blur-0 h-full flex flex-col justify-center items-center ">
				<div className="text-white w-[80vw] fixed top-[25%] lg:top-auto lg:w-[916px] text-left flex flex-col justify-center leading-none ">
					<h2 className="text-[20px] md:text-[42px] lg:text-[64px] text-left">
						Hello, I am{" "}
					</h2>
					<ReactTypingEffect
						text={["Creative", "Freelancer", "Software", "React"]}
						className="lg:text-[207px] text-[50px] md:text-[120px] py-2 break-words overflow-x-auto flex flex-row flex-nowrap scrollbar-hide"
					/>
					<h2 className="lg:text-[80px] text-[24px] md:text-[50px] text-right">
						Developer
					</h2>
				</div>
				<div className="text-white fixed  w-full top-[42%] lg:top-[64%] sm:bottom-2 md:bottom-3 text-left flex flex-row justify-center items-center lg:justify-start ">
					<p className="lg:w-1/4 w-[80vw] text-justify py-[70px] opacity-50 lg:mx-16 ">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
						labore nobis aperiam voluptatem molestiae ex eligendi, sit dicta?
						Optio, sunt. Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Earum, inventore.
					</p>
				</div>
			</div>

			<div
				className="w-auto h-auto absolute top-9 right-9 sm:top-12 sm:right-12 md:top-14 md:right-14 lg:top-[72px] lg:right-[72px] z-0"
				// onClick={handleClick}
			>
				<Menu />
			</div>
		</div>
	);
};

export default Home;
