import React, {
	useState,
	useRef,
	useReducer,
	useEffect,
	KeyboardEvent,
} from "react";
import { useRouter } from "next/router";
import { routes } from "./routes";
import { BiCommand } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export function Menu() {
	const websiteName = "xelopsys.uz";
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const inputValue = useRef<any>("");
	const [isEntered, setIsEntered] = useState(false);
	const [items] = useState<
		{
			name: string;
			path: string;
		}[]
	>(routes);
	const [isValid, setIsValid] = useState(false);
	useEffect(() => {
		if (isOpen) {
			inputValue.current.focus();
		}
	});

	const handleOpen = (e: any) => {
		e.preventDefault();
		setIsOpen(true);
	};
	const handleClose = (e: any) => {
		e.preventDefault();
		setIsOpen(false);
	};

	const handleInputKeyDown = (e: any) => {
		if (e.key === "Enter") {
			if (e.target.value === "help") {
				console.log("qwdqwd");
				setIsEntered(true);
				setIsValid(false);
			} else if (e.target.value === "clear") {
				setIsEntered(false);
				setIsValid(false);
			} else if (e.target.value === "quit") {
				setIsOpen(false);
				setIsValid(false);
			} else {
				setIsValid(true);
			}
			items.map((item: any) => {
				if (item.name === e.target.value) {
					router.push(item.path);
					setIsValid(false);
				}
			});
			inputValue.current.value = "";
		}
	};

	return (
		<div className="w-full h-full flex flex-col justify-center items-end ">
			{/* buttons for opening and closing  */}

			{isOpen ? (
				<button
					onClick={handleClose}
					className="bg-[#090000] transition ease-in-out w-[72px] h-[72px] rounded-lg flex flex-row justify-center items-center"
				>
					<IoMdClose className="text-white  w-9 h-9" />
				</button>
			) : (
				<button
					onClick={handleOpen}
					className="bg-[#090000] transition ease-in-out w-[72px] h-[72px] rounded-lg flex flex-row justify-center items-center"
				>
					<BiCommand className="text-white w-8 h-8" />
				</button>
			)}
			{/* input for entering commands */}
			<div className="w-full h-full bg-black rounded-xl mt-[29px]">
				{/* glass effect background */}
				{isOpen && (
					<div className="fixed top-0 left-0  w-[100vw] h-[100vh] -z-10 backdrop-blur-md"></div>
				)}
				{/* glass effect background */}

				{isOpen && (
					<div
						className="w-[80vw] h-[70vh]  border rounded-xl  border-[#EB4747] flex flex-col justify-start items-center pt-[33px] pb-[33px] px-3 lg:pl-[26px] lg:pr-[44px]"
						onClick={() => {
							inputValue.current.focus();
						}}
					>
						<p className="text-white w-full text-xs lg:text-xl ">
							Welcome to {websiteName}, the friendly interactive shell
							<br />
							Type <span className="text-[#29FF32]">help</span> for instructions
							on how to use menu
						</p>
						<p className="text-white text-xs lg:text-xl w-full mt-5">
							<span className="text-[#EB4747]">root</span> at{" "}
							<span className="text-[#3C4FFF]">{websiteName}</span> in{" "}
							<span className="text-[#EB4747]">???</span>
						</p>
						<div className="w-full h-auto flex flex-row justify-start items-center">
							<span className="text-[#3C4FFF] text-xs lg:text-xl">??</span>
							<input
								ref={inputValue}
								type="text"
								onKeyPress={handleInputKeyDown}
								className=" border-none outline-none w-full inline px-2 text-xs lg:text-xl text-[#29FF32] bg-transparent"
								// onChange={handleInputChange}
							/>
						</div>
						{isEntered && !isValid && (
							<div className="text-white w-full h-full">
								<ul>
									{items.map(
										(name: { name: string; path: string }, index: number) => {
											return (
												<li
													key={index}
													className="flex flex-row justify-start items-center"
												>
													{" "}
													<span className="text-[#EB4747]"> - </span>{" "}
													<p className="text-[#3C4FFF] text-xs lg:text-xl ml-[2px]">
														{name.name}
													</p>
												</li>
											);
										}
									)}
								</ul>
								{/* <button onClick={handleClear}>Clear</button> */}
							</div>
						)}
						{isValid && (
							<div className="text-white w-full h-full mt-8">
								<p>
									Entered command is{" "}
									<span className="text-[#EB4747]">invalid</span>.
									<br />
									Please type <span className="text-[#29FF32]">help</span> for
									commands
								</p>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
