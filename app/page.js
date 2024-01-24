"use client"

import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import Cat from './Cat.json';
import Lottie from 'lottie-react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const form = useRef();
  const router = useRouter();

  const [noButtonPosition, setNoButtonPosition] = useState({
    top: '50%',
    left: '50%',
  });

  const [isAbsolute, setIsAbsolute] = useState(false);

  const handleNoButtonClick = () => {
    setIsAbsolute(true);
    const randomTop = (Math.random() + 0.2) * 60;
    const randomLeft = (Math.random() + 0.2) * 60;

    setNoButtonPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  const handleYesButtonClick = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_to8lro8', 'template_5rw3skt', form.current, 'WWYiuppQcMmddOg9C')
      .then(
        (result) => {
          router.push('/yay');
        },
        (error) => {
        }
      );
  };

  return (
    <div className="items-center h-screen">
      <Lottie animationData={Cat} className="h-[280px]" />

      <p className="text-primary font-bold text-[28px] leading-none text-center mb-[10%]">
        Do you wanna go out with me?
      </p>

      <div className="flex justify-center w-screen">
        <button
          onClick={handleYesButtonClick}
          className="text-center bg-dark border-2 border-primary hover:bg-primary text-primary hover:text-dark transition ease-in-out duration-300 font-bold py-2 w-[20%] md:w-[10%] mx-2"
        >
          Yes
        </button>

        <button
          className={` ${isAbsolute ? 'absolute' : ''} bg-dark border-2 border-primary hover:bg-primary text-primary hover:text-dark transition ease-in-out duration-300 font-bold py-2 w-[20%] md:w-[10%] mx-2`}
          onClick={handleNoButtonClick}
          style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
        >
          No
        </button>
      </div>

      <form ref={form} className="hidden">
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
