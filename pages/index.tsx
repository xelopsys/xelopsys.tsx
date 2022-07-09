import type { NextPage } from "next";
import Head from "next/head";
import { Menu } from "../components/menu/Menu";

const Home: NextPage = () => {
	return (
		<div className="w-full h-full">
			<Head>
				<title>Dashboard</title>
				<meta name="description" content="Xelopsys content builder dashboard" />
			</Head>
			<Menu />
		</div>
	);
};

export default Home;
