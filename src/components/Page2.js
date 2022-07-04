import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import imagesHellenic from './imgComps/ImagesHellenic';
import imagesSphere from './imgComps/ImagesSphere';
import imagesTapDasher from './imgComps/imagesTapDasher';
import Button from './buttons/Button';
import { FaReact, FaDatabase, FaUnity } from 'react-icons/fa';
import { DiApple, DiAndroid } from 'react-icons/di';
import { SiTailwindcss, SiPython, SiCsharp } from 'react-icons/si';
import { TbApi, TbMathSymbols } from 'react-icons/tb';
import { BsDisplay } from 'react-icons/bs';

const Page2 = ({ fontColor, lang, boxColor }) => {
	const [width, setWidth] = useState(0);
	const carousel = useRef();
	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);
	// TEXT, IMAGE - IMAGE, TEXT - TEXT, IMAGE
	return (
		<div
			className={`${fontColor} mt-20 grid grid-cols-1 gap-2 lg:grid-cols-2 mx-5`}
		>
			<div
				className={`${fontColor} text-center relative w-full text-5xl font-extrabold lg:col-span-2 mb-10`}
			>
				<h1 className='relative'>{lang ? 'My Projects' : 'Mi Projectos'}</h1>
				{/* <div className='flex justify-center'> */}
				<div className='grid grid-rows-1 w-72 ml-auto mr-auto'>
					<div className='bg-purple-600 shadow-md shadow-purple-600/30 h-2 w-full rounded-md row-start-1 ml-1'></div>
					<div className='bg-orange-400 shadow-md shadow-orange-400/30 h-2 w-full rounded-md row-start-1 mr-1'></div>
				</div>
			</div>
			<motion.div
				className='min-h-[350px] flex flex-col justify-center items-center text-center'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: false }}
			>
				<h1 className='text-3xl'>
					{lang ? 'HELLENIC DATABASE' : 'BASE DE DATOS HELLENIC'}
				</h1>
				<br />
				<p>
					{lang
						? 'Website for looking up various Greek mythology deities with the help of a modified '
						: 'Sito web por cercar varie deos Grec con un '}
					<a
						href='https://www.npmjs.com/package/greek-mythology-data'
						target='_blank'
						className='underline'
					>
						API
					</a>
					{lang ? '.' : ' modificate.'} <br />
					{lang
						? 'The user can use the search function to look up a specific god.'
						: 'Le usator pote usar le function del cerca a perquire un deo specific.'}
					<br />
					{lang
						? "It is also posible to click on any card to get more information about the card's god."
						: 'Es possibile clickar a omne carta a vide plus information de le deo de carta.'}
				</p>
				<br />
				<h2 className='text-xl'>
					{lang ? 'TECHNOLOGIES USED' : 'TECHNOLOGIA USAVA'}
				</h2>
				<div className='flex flex-row'>
					<div className='flex flex-col justify-center items-center group -mx-4 z-10'>
						<FaReact className='text-3xl text-purple-600 transition group-hover:text-orange-400' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center transition mt-1 duration-300 opacity-0 group-hover:opacity-100'>
							React
						</div>
					</div>
					<div className='flex flex-col justify-center items-center group -mx-3'>
						<SiTailwindcss className='text-3xl text-purple-600 transition group-hover:text-orange-400' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
							Tailwind CSS
						</div>
					</div>
					<div className='flex flex-col justify-center items-center group -mx-3 z-10'>
						<TbApi className='text-3xl text-purple-600 transition group-hover:text-orange-400' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
							APIs
						</div>
					</div>
					<div className='flex flex-col justify-center items-center group -mx-2'>
						<FaDatabase className='text-2xl text-purple-600 transition group-hover:text-orange-400' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
							Databases
						</div>
					</div>
				</div>
				<Button
					text={lang ? 'VISIT WEBSITE' : 'VISITA SITO WEB'}
					width='200px'
					onClick={() => {
						window.open(
							'https://matdrox.github.io/hellenic-database/',
							'_blank'
						);
					}}
				/>
				<a
					className='underline'
					href='https://github.com/Matdrox/hellenic-database'
					target='_blank'
				>
					<br />
					<h2 className='text-md'>
						{lang ? 'SOURCE CODE' : 'LE CODICE ORIGINAL'}
					</h2>
				</a>
			</motion.div>
			<motion.div
				className={`${boxColor} rounded-lg shadow-lg min-h-[350px] text-center cursor-grab overflow-hidden`}
				ref={carousel}
				transition={{ delay: 0.4 }}
				initial={{ opacity: 0, y: '20%' }}
				whileInView={{ opacity: 1, y: '0' }}
				viewport={{ once: false }}
			>
				<motion.div
					whileTap={{ cursor: 'grabbing' }}
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					className='flex'
				>
					{imagesHellenic.map((image) => {
						return (
							<motion.div
								className='h-[600px] min-w-[33em] py-4 px-2'
								key={image}
							>
								<img
									className='w-full h-full rounded shadow-md pointer-events-none'
									src={image}
									alt=''
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
			<motion.div
				className={`${boxColor} rounded-lg shadow-lg min-h-[350px] text-center cursor-grab overflow-hidden`}
				ref={carousel}
				transition={{ delay: 0.4 }}
				initial={{ opacity: 0, y: '20%' }}
				whileInView={{ opacity: 1, y: '0' }}
				viewport={{ once: false }}
			>
				<motion.div
					whileTap={{ cursor: 'grabbing' }}
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					className='flex'
				>
					{imagesSphere.map((image) => {
						return (
							<motion.div
								className='h-[600px] min-w-[33em] py-4 px-2'
								key={image}
							>
								<img
									className='w-full h-full rounded shadow-md pointer-events-none'
									src={image}
									alt=''
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
			<motion.div
				className='min-h-[350px] flex flex-col justify-center items-center text-center'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: false }}
			>
				<h1 className='text-3xl'>
					{lang ? 'MATHEMATICAL SPHERE' : 'SPHERA MATHEMATIC'}
				</h1>
				<br />
				<p>
					{lang
						? 'Python application that displays a sphere along with its shadow using the dot product.'
						: 'Application de Python que monstrar un sphera con su umbra usante le producto scalare.'}
					<br />
					{lang
						? "The user enters the lightsource's position and the program outputs a mathematically correct sphere."
						: 'Le usator inscriber le position del origine del lumine e le programma monstrar un sphera correcte mathematic.'}
					<br />
					{lang
						? 'It is also posible to click anywhere on the sphere to move the light source, updating the sphere.'
						: 'Es possibile clickar ubique al le sphera por movente le origine del lumine e le sphera con su umbra.'}
					<br />
					{lang
						? 'The application allows the user to save the displayed sphere to a text file.'
						: 'Le application permitter le usator sparniar le sphere a un fila de texto.'}
				</p>
				<br />
				<h2 className='text-xl'>
					{lang ? 'TECHNOLOGIES USED' : 'TECHNOLOGIA USAVA'}
				</h2>
				<div className='flex flex-row'>
					<div className='flex flex-col justify-center items-center group mt-1 -mx-6 z-10'>
						<SiPython className='text-2xl text-orange-400 transition group-hover:text-purple-600' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center transition mt-1 duration-300 opacity-0 group-hover:opacity-100'>
							Python
						</div>
					</div>
					<div className='flex flex-col justify-center items-center group -mx-2'>
						<TbMathSymbols className='text-3xl text-orange-400 transition group-hover:text-purple-600' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
							{lang ? 'Pure Maths' : 'Mathematica Pur'}
						</div>
					</div>
					<div className='flex flex-col justify-center items-center group -mx-2 z-10'>
						<BsDisplay className='text-3xl text-orange-400 transition group-hover:text-purple-600' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
							GUI
						</div>
					</div>
				</div>
				<a
					className='underline'
					href='https://github.com/Matdrox/sphere'
					target='_blank'
				>
					<h2 className='text-md'>
						{lang ? 'SOURCE CODE' : 'LE CODICE ORIGINAL'}
					</h2>
				</a>
			</motion.div>
			<motion.div
				className='min-h-[350px] flex flex-col justify-center items-center text-center'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: false }}
			>
				<h1 className='text-3xl'>{lang ? 'TAPDASHER' : 'TAPDASHER'}</h1>
				<br />
				<p>
					{lang
						? 'Unity game using C# publishd by 17 year old me on the App Store and Google Play.'
						: 'Joco Unity usante C# publicava a me de 17 annos por le App Store e Google Play.'}
					<br />
					{lang
						? "The player's character automatically moves diagonally to the right but moves to the left when the screen is."
						: 'Le character del jocator se move automatic diagonal a dextra ma a sinistra quando le schermo es tacto.'}
					<br />
					{lang
						? 'It is possible buying skins for the character from the menu with the points gathered while playing.'
						: 'Es possibile comprar costumes por le character ab le menu con le punctos colliger durante que joca.'}
					<br />
					{lang
						? 'The app uses a scoreboard to let friends compete with each other.'
						: 'Le application usante un tabula de puncto a lassar amicos concurrer con inter se.'}
				</p>
				<br />
				<h2 className='text-xl'>
					{lang ? 'TECHNOLOGIES USED' : 'TECHNOLOGIA USAVA'}
				</h2>
				<div className='flex flex-row'>
					<div className='flex flex-col justify-center items-center group mt-1'>
						<FaUnity className='text-2xl text-purple-600 transition group-hover:text-orange-400' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center transition mt-1 duration-300 opacity-0 group-hover:opacity-100'>
							Unity
						</div>
					</div>
					<div className='flex flex-col justify-center items-center group'>
						<SiCsharp className='text-3xl text-purple-600 transition group-hover:text-orange-400' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
							C#
						</div>
					</div>
					<div className='flex flex-col justify-center items-center group'>
						<DiApple className='text-3xl text-purple-600 transition group-hover:text-orange-400' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
							Apple
						</div>
					</div>
					<div className='flex flex-col justify-center items-center group -mx-3'>
						<DiAndroid className='text-3xl text-purple-600 transition group-hover:text-orange-400' />
						<div className='bg-zinc-300 rounded text-black text-center text-sm flex items-center justify-center mt-1 transition duration-300 opacity-0 group-hover:opacity-100'>
							Android
						</div>
					</div>
				</div>
				<a
					className='underline'
					href='https://play.google.com/store/apps/details?id=com.MatdroxGames.TapDash'
					target='_blank'
				>
					<h2 className='text-md'>GOOGLE PLAY</h2>
				</a>
			</motion.div>
			<motion.div
				className={`${boxColor} rounded-lg shadow-lg min-h-[350px] text-center cursor-grab overflow-hidden`}
				ref={carousel}
				transition={{ delay: 0.4 }}
				initial={{ opacity: 0, y: '20%' }}
				whileInView={{ opacity: 1, y: '0' }}
				viewport={{ once: false }}
			>
				<motion.div
					whileTap={{ cursor: 'grabbing' }}
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					className='flex'
				>
					{imagesTapDasher.map((image) => {
						return (
							<motion.div
								className='h-[500px] min-w-[33em] py-4 px-2'
								key={image}
							>
								<img
									className='w-full h-full rounded shadow-md pointer-events-none'
									src={image}
									alt=''
								/>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Page2;
