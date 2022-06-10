import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './buttons/Button';

const Result = () => {
	return (
		<div className='text-white p-2 bg-orange-400 shadow-lg shadow-orange-400/30 rounded-md w-full h-max md:col-span-4 row-start-5'>
			Thank you for your message! I will respond to it asap.
		</div>
	);
};

const Page3 = () => {
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
		<div className='-mt-52 grid place-items-center h-screen'>
			<form
				className='mt-52 grid gap-8 w-1/4 h-1/3 md:grid-cols-5 md:grid-rows-4'
				ref={form}
				onSubmit={sendEmail}
			>
				<h1 className='row-start-1 col-span-4 w-full text-5xl font-extrabold underline decoration-purple-600/70'>
					Contact Me
				</h1>

				<div className='lg:col-span-2 row-start-2'>
					<span>Your name</span>
					<br />
					<input
						className='p-3 shadow-md rounded-md w-full h-full'
						type='text'
						name='name'
						required
					/>
				</div>

				<div className='lg:col-span-2 row-start-3'>
					<span>Your email</span>
					<br />
					<input
						className='p-3 shadow-md rounded-md w-full h-full'
						type='text'
						name='email'
						required
					/>
				</div>

				<div className='lg:col-span-2 lg:row-span-3 row-span-2'>
					<label htmlFor='message'>Message</label>
					<br />
					<textarea
						className='p-3 shadow-md rounded-md w-full h-full'
						name='message'
						required
					/>
				</div>

				<div className='lg:col-span-2'>
					<br />
					<Button type='submit' text='Send Mail' width='100%' height='100%' />
					<br />
				</div>
				<>{result ? <Result /> : null}</>
				{/* <Result /> */}
			</form>
		</div>
	);
};

export default Page3;
