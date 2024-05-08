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
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [remember, setRemember] = useState<boolean>(false);
  const [vissible, setVissible] = useState<boolean>(false);
  const router = useRouter();
  const slides = [
    { src: '/bg-mountain.jpg' },
    {
      src: '/bg-tree.jpg',
    },
    {
      src: '/bg-sky.jpg',
    },
  ];
  const onSubmit = () => {
    console.log(email, password, remember);
  };
  return (
    <div className=" align-middle flex justify-center">
      <div className="fixed  right-0 w-full  bottom-0  z-0 h-full">
        <SlideShow slides={slides} />
      </div>
      <div className="flex phone:justify-around lg:gap-60 h-full lg:flex-row flex-col-reverse gap-20 xl:gap-96 justify-center lg:pb-0 pb-32 align-middle ">
        <div className="relative place-content-center h-full lg:col-start-3 lg:col-end-5 col-start-3 col-end-11 ">
          <div className=" before:block before:absolute before:bg-purple before:skew-y-12 before:rounded-full inline-block relative before:-inset-1  p-12  before:shadow-buttonInner after:content-['*] items-center phone:ml-0 ml-10">
            <span className="text-white  phone:text-5xl text-4xl relative text-center place-content-center">
              <p className="phone:w-72 w-60 p-5 font-bold ">
                {' '}
                The Journey Begins when you{' '}
                <span className="text-black mt-3">log In</span>{' '}
              </p>
            </span>
          </div>
          <div className=" mt-10">
            <div className="  rounded-full  shadow-buttonInner px-3 py-5 phone:w-96 text-xl bg-white w-max m-auto">
              <span className="font-bold ml-10">
                First Time Here?
                <span
                  className="text-purple ml-2 hover:underline cursor-pointer"
                  onClick={() => {
                    router.push('/auth/signup');
                  }}
                >
                  Sign Up
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="bg-white rounded-3xl p-10 shadow-buttonInner phone:w-96 w-80 relative place-content-center m-auto">
            <h1 className="bg-pink rounded-full shadow-buttonInner p-4 font-bold text-3xl text-center">
              Login Here
            </h1>
            <Formsy onValidSubmit={onSubmit}>
              <CustomInput
                name="email"
                type="text"
                placeholder="Email"
                required
                value={email}
                changeEvent={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail((event.target as HTMLInputElement).value);
                }}
                validations="isEmail"
                validationError="This is not a valid Email"
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
                checked={remember}
                onChange={() => {
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
    </div>
  );
};

export default LoginPage;
