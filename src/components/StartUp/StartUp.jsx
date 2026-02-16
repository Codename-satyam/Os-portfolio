import { motion } from 'framer-motion';
import "./StartUp.scss";
import xpLogo from "../../assets/required/windowsXP.png";
import userIcon from "../../assets/required/user.jpg";


const StartUp = ({ onFinish }) => {
	const handleShutDown = () => {
		const shutDownScreen = document.createElement("div");
		shutDownScreen.className = "shut-down-screen";
		shutDownScreen.innerText = "Shutting down...";
		shutDownScreen.style.cssText = `
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: black;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24px;
			color: white;
			z-index: 10000;
			animation: fadeOut 2s ease-in-out forwards;
		`;
		document.body.appendChild(shutDownScreen);
		
		const style = document.createElement("style");
		style.textContent = `
			@keyframes fadeOut {
				0% { opacity: 1; }
				100% { opacity: 0; }
			}
		`;
		document.head.appendChild(style);
	}	
	return (
		<motion.div
			className="xp-screen"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="xp-top-bar" />

			<div className="xp-body">
				<motion.div
					className="xp-left"
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
				>
					<motion.img
						src={xpLogo}
						className="xp-logo"
						alt="Windows XP"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.5 }}
					/>
				</motion.div>

				<div className="xp-divider" />

				<motion.div
					className="xp-right"
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 100 }}
				>
					<motion.div
						className="xp-user"
						onClick={onFinish}
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.5 }}
						whileHover={{
							scale: 1.05,
							backgroundColor: "rgba(255, 255, 255, 0.25)",
							transition: { duration: 0.2 }
						}}
						whileTap={{ scale: 0.95 }}
					>
						<img src={userIcon} alt="User" />
						<span>User</span>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				className="xp-footer"
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.6 }}
			>
				<motion.div
					className="xp-power"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<div className="power-icon" onClick={handleShutDown}>⏻</div>
					Turn off computer
				</motion.div>

				<div className="xp-footer-text">
					After you log on, you can add or change accounts.
					<br />
					Just go to Control Panel and click User Accounts.
				</div>
			</motion.div>
		</motion.div>
	);
};

export default StartUp;
