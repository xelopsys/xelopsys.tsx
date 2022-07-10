import type { NextPage } from "next";
import React, { useReducer } from "react";
import Head from "next/head";
import { Menu } from "../components/menu/Menu";
import ReactTypingEffect from "react-typing-effect";
// import { isOpenedReducer } from "../context/isOpenedReducer";
const Home: NextPage = () => {
	// const [state, dispatch] = useReducer(isOpenedReducer, false);
	// const handleClick = () => {
	// 	dispatch({ type: "TOGGLE", payload: !state });
	// };
	return (
		<div
			className="w-[100vw] m-0 p-0 bg-black h-[100vh] flex flex-row justify-center  items-center relative"
			style={{
				backgroundImage: `url("/images/background.png")`,
			}}
		>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Xelopsys main page" />
			</Head>
			{/*  background  */}

			<div className="hidden md:block lg:block xl:block 2xl:block w-1/2 h-[100vh] bg-[#090000] absolute top-0 left-0"></div>

			{/*  background  */}
			<div className="w-full border backdrop-filter backdrop-brightness-50  md:backdrop-blur-0 lg:backdrop-blur-0 h-fit flex flex-row justify-center items-center ">
				<div className="text-white w-[70vw] lg:w-[916px] text-left flex flex-col justify-center leading-none ">
					<h2 className="text-[20px] md:text-[42px] lg:text-[64px] text-left">
						Hello, I am{" "}
					</h2>
					<ReactTypingEffect
						text={["Creative", "React"]}
						className="lg:text-[207px] text-[64px] md:text-[120px] py-2"
					/>
					<h2 className="lg:text-[80px] text-[24px] md:text-[50px] text-right">
						Developer
					</h2>
				</div>
			</div>
			<div
				className="w-auto h-auto absolute top-10 right-10 lg:top-[72px] lg:right-[72px] z-0"
				// onClick={handleClick}
			>
				<Menu />
			</div>
		</div>
	);
};

export default Home;
