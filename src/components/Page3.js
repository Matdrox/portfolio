import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from './buttons/Button';

const Result = () => {
  return <p>Thank you for your message! <br/> I will respond to it soon.</p>;
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
  }, 10000);

  return (
    // <div className='mt-24 flex justify-center'>
    <div className='-mt-60 grid place-items-center h-screen'>
      <form
        className='grid gap-8 w-1/4 h-1/4 lg:grid-cols-4 lg:grid-rows-3'
        ref={form}
        onSubmit={sendEmail}
      >
        <div className='lg:col-span-2'>
          <span>Your name</span>
          <br />
          <input
            className='p-3 shadow-md rounded-md w-full h-full'
            type='text'
            name='name'
            required
          />
        </div>

        <div className='lg:col-span-2 lg:row-start-2'>
          <span>Your email</span>
          <br />
          <input
            className='p-3 shadow-md rounded-md w-full h-full'
            type='text'
            name='email'
            required
          />
        </div>

        <div className='lg:col-span-2 lg:row-span-3'>
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
          <Button type='submit' text={result ? <Result/> : 'Send Mail'} width='100%' height='100%' />
          <br/>
          <div className='text-white p-2 bg-orange-400 shadow-lg shadow-orange-400/30 rounded-md w-full h-max'>
            {/* {result ? <Result /> : null} */}
            <Result/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page3;
