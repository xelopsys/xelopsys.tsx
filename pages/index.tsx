import type { NextPage } from "next";
import React, { useReducer } from "react";
import Head from "next/head";
import { Menu } from "../components/menu/Menu";
import ReactTypingEffect from "react-typing-effect";
import { isOpenedReducer } from "../context/isOpenedReducer";
const Home: NextPage = () => {
	const [isOpened, dispatch] = useReducer(isOpenedReducer, false);
	return (
		<div
			className="w-[100vw] h-[100vh] flex flex-row justify-center items-center relative backdrop-blur-md backdrop-filter z-10"
			style={{
				backgroundImage: `url("/images/background.png")`,
			}}
		>
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Xelopsys main page" />
			</Head>
			<div className="w-full h-full flex flex-row justify-center items-center relative backdrop-blur-md backdrop-filter z-10">
				{/*  background  */}

				<div className="hidden md:block lg:block xl:block 2xl:block w-1/2 h-[100vh] bg-[#090000] absolute top-0 left-0 -z-0"></div>

				{/*  background  */}

				<div
					className="text-white z-10 w-[916px] text-left flex flex-col justify-center"
					style={{ lineHeight: "160px" }}
				>
					<h2 className="text-[64px] text-left">Hello, I am </h2>
					<ReactTypingEffect
						text={["Creative", "React"]}
						className="text-[207px]"
					/>
					<h2 className="text-[80px] text-right ">Developer</h2>
				</div>
				<div className="w-auto h-auto absolute top-[72px] right-[72px] z-10">
					<Menu />
				</div>
			</div>
		</div>
	);
};

export default Home;
