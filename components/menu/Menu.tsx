import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { routes } from "./routes";

export function Menu() {
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
			}
			if (e.target.value === "clear") {
				setIsEntered(false);
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
		<div>
			<h1>menu</h1>
			<button onClick={handleClick}>Click</button>
			<div>
				{isOpen && (
					<div>
						<input
							ref={inputValue}
							type="text"
							onKeyPress={handleInputKeyDown}
							className="border-none outline-none"
							// onChange={handleInputChange}
						/>
					</div>
				)}
				{isEntered && (
					<div>
						<ul>
							{items.map(
								(name: { name: string; path: string }, index: number) => {
									return <p key={index}>{name.name}</p>;
								}
							)}
						</ul>
						<button onClick={handleClear}>Clear</button>
					</div>
				)}
			</div>
		</div>
	);
}
