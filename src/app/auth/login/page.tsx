'use client';
import React, { useState } from 'react';

import CustomInput from '@/components/CustomInput/index';
import CustomCheckbox from '@/components/CustomCheckBox/index';
import HeaderButton from '@/components/Buttons/HeaderButton/index';
import SlideShow from '@/components/SlideShow/index';

import Formsy from 'formsy-react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);
  const [vissible, setVissible] = useState<boolean>(false);
  const slides = [
    { src: '/bg-mountain.jpg' },
    {
      src: '/bg-tree.jpg',
    },
    {
      src: '/bg-sky.jpg',
    },
  ];
  return (
    <div className="flex justify-around align-middle ">
      <div className="absolute  right-0 w-full  top-0">
        <SlideShow slides={slides} />
      </div>
      <div className="relative place-content-center h-screen">
        <div className=" before:block before:absolute before:bg-purple before:skew-y-12 before:rounded-full inline-block relative before:-inset-1  p-12  before:shadow-buttonInner after:content-['*]">
          <span className="text-white  text-5xl relative text-center place-content-center">
            <p className="w-72 p-5 font-bold ">
              {' '}
              The Journey Begins when you{' '}
              <span className="text-black mt-3">log In</span>{' '}
            </p>
          </span>
        </div>
        <div className=" mt-10">
          <div className="  rounded-full  shadow-buttonInner px-3 py-5 w-96 text-xl bg-white">
            <span className="font-bold ml-10">
              First Time Here?
              <span className="text-purple ml-2 hover:underline cursor-pointer">
                Sign Up
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-3/4 ">
        <div className="-bottom-8 bg-red-100 h-10 absolute">hello</div>
        <div className="bg-white rounded-3xl p-10 shadow-buttonInner w-96 relative place-content-center m-auto">
          <h1 className="bg-pink rounded-full shadow-buttonInner p-4 font-bold text-3xl text-center">
            Login Here
          </h1>
          <Formsy>
            <CustomInput
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              changeEvent={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail((event.target as HTMLInputElement).value);
              }}
            />
            <CustomInput
              name="password"
              type={vissible ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              changeEvent={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword((event.target as HTMLInputElement).value);
              }}
              Icon={
                vissible ? (
                  <AiFillEyeInvisible
                    color="purple"
                    onClick={() => {
                      setVissible(false);
                    }}
                  />
                ) : (
                  <AiFillEye
                    color="purple"
                    onClick={() => {
                      setVissible(true);
                    }}
                  />
                )
              }
            />
            <CustomCheckbox
              name="remember"
              value={remember}
              changeEvent={() => {
                setRemember(!remember);
              }}
              label="Remember Me"
            />
            <div className="my-3">
              <Link
                href={'/auth/forgot-password'}
                className="text-pink font-bold my-5"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="w-full place-content-center m-auto">
              <HeaderButton name="Login" type="submit" />
            </div>
          </Formsy>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
