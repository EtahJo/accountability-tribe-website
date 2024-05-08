'use client';
import React, { useState } from 'react';
import HeroSection from '../HeroSection/index';
import Image from 'next/image';
import TrialImage from '../../../public/psalm-23.webp';
import CustomInput from '../CustomInput/index';
import HeaderButton from '../Buttons/HeaderButton/index';
import Formsy from 'formsy-react';
const HomeLoggedOut = () => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const submit = () => {
    console.log({ email, message });
  };
  return (
    <main>
      {' '}
      <HeroSection />
      <div className="grid bg-purple rounded-3xl grid-cols-12 place-items-center ">
        <div className="relative col-start-2 col-end-4 place-items-center">
          <div className="bg-white rotate-45 w-80 h-80 rounded-3xl shadow-buttonInner"></div>

          <Image
            className="absolute left-0 top-0 p-2"
            src={TrialImage}
            style={{
              width: '60%',
            }}
            alt="Picture of the author"
            sizes="50vw"
          />
        </div>

        <p className="text-5xl font-bold  col-start-8 col-end-11 ">
          Take A Look At Community Interactions and More
        </p>
      </div>
      <div className="my-16 grid grid-cols-12 place-items-center pb-10">
        <p className="font-bold text-4xl lg:col-start-2 lg:col-end-4 col-start-2 col-end-11 lg:mb-0 mb-10">
          Contact Us, Give Us Your Feedback, We are Here for You
        </p>
        <div className="bg-white rounded-3xl lg:col-start-7 lg:col-end-11 col-start-2 col-end-11">
          <Formsy className="p-5 w-full" onValidSubmit={submit}>
            <CustomInput
              type="text"
              name="email"
              placeholder="Email"
              required
              value={email}
              validations="isEmail"
              validationError="This is not a valid email"
              changeEvent={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail((event.target as HTMLInputElement).value);
              }}
            />
            <CustomInput
              textArea
              name="Message"
              placeholder="Message"
              value={message}
              changeEvent={(event: React.ChangeEvent<HTMLInputElement>) => {
                setMessage((event.target as HTMLInputElement).value);
              }}
              required
              validationError="Please add message"
            />
            <HeaderButton name="Send Message" type="submit" />
          </Formsy>
        </div>
      </div>
    </main>
  );
};

export default HomeLoggedOut;
