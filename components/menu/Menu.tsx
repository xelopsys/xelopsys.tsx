import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { routes } from "./routes";
import { BiCommand } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

export function Menu() {
	const websiteName = "xelopsys.uz";

	const router = useRouter();
	const [isCleared, setIsCleared] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const inputValue = useRef<any>("");
	const [isEntered, setIsEntered] = useState(false);
	const [items, setItems] = useState<
		{
			name: string;
			path: string;
		}[]
	>(routes);
	console.log(items);
	const [isValid, setIsValid] = useState(false);

	// useEffect(() => {
	// 	if (isOpen) {
	// 		inputValue.current.focus();
	// 	}
	// }, [isOpen]);

	const handleClick = (e: any) => {
		e.preventDefault();
		setIsOpen(!isOpen);
	};
	useEffect(() => {
		if (isOpen) {
			inputValue.current.focus();
		}
	});

	// const handleInputChange = (e: any) => {
	// 	setItems(e.target.value);
	// };

	const handleInputKeyDown = (e: any) => {
		if (e.key === "Enter") {
			if (e.target.value === "help") {
				console.log("qwdqwd");
				setIsEntered(true);
				setIsCleared(false);
				setIsValid(false);
			} else if (e.target.value === "clear") {
				setIsEntered(false);
				setIsValid(false);
			} else {
				setIsValid(true);
			}
			items.map((item: any) => {
				if (item.name === e.target.value) {
					router.push(item.path);
				}
			});
			inputValue.current.value = "";
		}
	};

	useEffect(() => {
		if (isCleared === true) {
			setItems([]);
		}
		if (isCleared === false) {
			setItems(routes);
		}
	}, [isCleared]);

	const handleClear = () => {
		setIsCleared(true);
	};

	// const handleRemove = (index: number) => {
	// 	setSelectedItems(
	// 		selectedItems.filter((item: string, i: number) => i !== index)
	// 	);
	// };

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleKeyDown = (e: any) => {
		if (e.key === "Escape") {
			setIsOpen(false);
		}
	};
	return (
		<div className="w-full h-full flex flex-col justify-center items-end ">
			{isOpen ? (
				<button
					onClick={handleClick}
					className="bg-[#090000] transition ease-in-out w-[72px] h-[72px] rounded-lg flex flex-row justify-center items-center"
				>
					<IoMdClose className="text-white  w-9 h-9" />
				</button>
			) : (
				<button
					onClick={handleClick}
					className="bg-[#090000] transition ease-in-out w-[72px] h-[72px] rounded-lg flex flex-row justify-center items-center"
				>
					<BiCommand className="text-white w-8 h-8" />
				</button>
			)}

			<div className="w-full h-full bg-black rounded-xl mt-[29px]">
				{isOpen && (
					<div className="w-[80vw] h-[70vh]  border rounded-xl border-[#EB4747] flex flex-col justify-start items-center pt-[33px] pb-[33px] pl-[26px] pr-[44px]">
						<p className="text-white w-full ">
							Welcome to {websiteName}, the friendly interactive shell
							<br />
							Type <span className="text-[#29FF32]">help</span> for instructions
							on how to use menu
						</p>
						<p className="text-white w-full mt-5">
							<span className="text-[#EB4747]">root</span> at{" "}
							<span className="text-[#3C4FFF]">{websiteName}</span> in{" "}
							<span className="text-[#EB4747]">⌁</span>
						</p>
						<div className="w-full h-auto flex flex-row justify-start items-center">
							<span className="text-[#3C4FFF]">λ</span>
							<input
								ref={inputValue}
								type="text"
								onKeyPress={handleInputKeyDown}
								className=" border-none outline-none w-full inline px-2 text-[#29FF32] bg-transparent"
								// onChange={handleInputChange}
							/>
						</div>
						{isEntered && !isValid && (
							<div className="text-white w-full h-full">
								<ul>
									{items.map(
										(name: { name: string; path: string }, index: number) => {
											return (
												<p key={index} className="text-[#3C4FFF]">
													{name.name}
												</p>
											);
										}
									)}
								</ul>
								<button onClick={handleClear}>Clear</button>
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
