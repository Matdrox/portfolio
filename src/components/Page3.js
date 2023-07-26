import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './buttons/Button';

const Result = ({ lang }) => {
	return (
		<div className='text-white p-2 bg-orange-400 shadow-lg shadow-orange-400/30 rounded-md w-full h-max lg:col-span-4 row-start-5'>
			{lang
				? 'Thank you for your message! I will respond to it ASAP.'
				: 'Gratias por tu message! Io respondera tosto a illo.'}
		</div>
	);
};

const Page3 = ({ fontColor, boxColor, lang }) => {
	const form = useRef();
	const [result, setResult] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_ga6r473',
				'template_fsjdw9b',
				form.current,
				'4LYxzCnFDZY_h6jAa'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		setResult(true);
	};

	setTimeout(() => {
		setResult(false);
	}, 30000);

	return (
		<div className='-mt-32 pb-32 md:-mt-52 grid place-items-center h-screen'>
			<form
				className='mt-52 w-11/12 flex-row align-middle
        lg:grid lg:gap-8 lg:grid-cols-5 lg:grid-rows-4 lg:w-auto lg:h-96'
				ref={form}
				onSubmit={sendEmail}
			>
				<div
					className={`${fontColor} text-center relative w-full text-5xl font-extrabold lg:col-span-4 mb-10`}
				>
					<h1 className='relative'>{lang ? 'Contact Me' : 'Contacto Me'}</h1>
					<div className='grid grid-rows-1 w-2/3 ml-auto mr-auto'>
						<div className='bg-purple-600 shadow-md shadow-purple-600/30 h-2 w-full rounded-md row-start-1 ml-2'></div>
						<div className='bg-orange-400 shadow-md shadow-orange-400/30 h-2 w-full rounded-md row-start-1 mr-2'></div>
					</div>
				</div>

				<div className={`${fontColor} lg:col-span-2 row-start-2`}>
					<span>{lang ? 'Your name' : 'Tu nomine'}</span>
					<br />
					<input
						className={`${boxColor} p-3 shadow-md rounded-md w-full`}
						type='text'
						name='name'
						required
					/>
				</div>

				<div className={`${fontColor} lg:col-span-2 row-start-3`}>
					<span>{lang ? 'Your email' : 'Tu email'}</span>
					<br />
					<input
						className={`${boxColor} p-3 shadow-md rounded-md w-full`}
						type='text'
						name='email'
						required
					/>
				</div>

				<div className={`${fontColor} lg:col-span-2 lg:row-span-3 row-span-2`}>
					<label htmlFor='message'>Message</label>
					<br />
					<textarea
						className={`${boxColor} p-3 shadow-md rounded-md w-full h-[270px] resize-none`}
						name='message'
						required
					/>
				</div>

				<div className='lg:col-span-2 h-14'>
					<br />
					<Button
						type='submit'
						text={lang ? 'Send Mail' : 'Inviar le Mail'}
						width='100%'
						height='100%'
					/>
					<br />
				</div>
				<>{result ? <Result lang={lang} /> : null}</>
				{/* DO NOT REMOVE <Result /> */} 
			</form>
		</div>
	);
};

export default Page3;
