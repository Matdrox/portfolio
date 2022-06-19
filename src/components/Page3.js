import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './buttons/Button';

const Result = ({ lang }) => {
  return (
    <div className='text-white p-2 bg-orange-400 shadow-lg shadow-orange-400/30 rounded-md w-full h-max md:col-span-4 row-start-5'>
      {lang
        ? 'Thank you for your message! I will respond to it ASAP.'
        : 'Gratias por tu message! Io respondera tosto a illo.'}
    </div>
  );
};

const Page3 = ({ fontColor, lang }) => {
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
        className='mt-52 w-11/12 flex-row align-middle
        md:grid md:gap-8 md:grid-cols-5 md:grid-rows-4 md:w-auto md:h-auto'
        ref={form}
        onSubmit={sendEmail}
      >
        <div
          className={`${fontColor} text-center relative w-full text-5xl font-extrabold
          md:row-start-1 md:col-span-4 md:text-left`}
        >
          <p className='relative bottom-5 md:top-10'>
            {lang ? 'Contact Me' : 'Contacto Me'}
          </p>
          <div className='bg-purple-600 shadow-md shadow-purple-600/30 absolute bottom-3 md:top-[90px] left-12 md:left-0 h-2 w-36 rounded-md'></div>
          <div className='bg-orange-400 shadow-md shadow-orange-400/30 absolute bottom-3 md:top-[90px] left-44 md:left-32 h-2 w-40 rounded-md'></div>
        </div>

        <div className='lg:col-span-2 row-start-2'>
          <span>{lang ? 'Your name' : 'Tu nomine'}</span>
          <br />
          <input
            className='p-3 shadow-md rounded-md w-full h-full'
            type='text'
            name='name'
            required
          />
        </div>

        <div className='lg:col-span-2 row-start-3'>
          <span>{lang ? 'Your email' : 'Tu email'}</span>
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

        <div className='lg:col-span-2 h-16'>
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
        {/* For Testing: */}
        {/* <Result /> */}
      </form>
    </div>
  );
};

export default Page3;
