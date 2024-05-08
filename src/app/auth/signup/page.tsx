'use client';
import React, { useState } from 'react';

import SlideShow from '@/components/SlideShow/index';
import CustomCheckBox from '@/components/CustomCheckBox/index';
import CustomInput from '@/components/CustomInput/index';
import HeaderButton from '@/components/Buttons/HeaderButton/index';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Link from 'next/link';
import Formsy from 'formsy-react';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const [signUpData, setSignUpData] = useState<{
    userName: string;
    email: string;
    password: string;
    conPassword: string;
  }>({ userName: '', email: '', password: '', conPassword: '' });
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
    console.log(signUpData);
  };
  return (
    <div className="flex justify-center align-middle ">
      <div className="fixed  right-0 w-full  bottom-0  z-0 h-full">
        <SlideShow slides={slides} />
      </div>
      <div className="flex phone:justify-around lg:gap-60 h-full lg:flex-row flex-col gap-20 xl:gap-96 justify-center lg:pb-0 pb-32 ">
        <div className="w/34">
          <div className="bg-white rounded-3xl p-10 shadow-buttonInner phone:w-96 w-80 relative place-content-center m-auto">
            <h1 className="bg-pink rounded-full shadow-buttonInner p-4 font-bold text-3xl text-center">
              Sign Up Here
            </h1>
            <Formsy onValidSubmit={onSubmit}>
              <CustomInput
                name="username"
                type="text"
                placeholder="Username"
                required
                value={signUpData.userName}
                changeEvent={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSignUpData({
                    ...signUpData,
                    userName: (event.target as HTMLInputElement).value,
                  });
                }}
              />
              <CustomInput
                name="email"
                type="text"
                placeholder="Email"
                required
                value={signUpData.email}
                changeEvent={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSignUpData({
                    ...signUpData,
                    email: (event.target as HTMLInputElement).value,
                  });
                }}
                validations="isEmail"
                validationError="This is not a valid Email"
              />
              <CustomInput
                name="password"
                type={vissible ? 'text' : 'password'}
                placeholder="Password"
                value={signUpData.password}
                changeEvent={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSignUpData({
                    ...signUpData,
                    password: (event.target as HTMLInputElement).value,
                  });
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
              <CustomInput
                name="conpassword"
                type={vissible ? 'text' : 'password'}
                placeholder="Confirm Password"
                value={signUpData.conPassword}
                changeEvent={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSignUpData({
                    ...signUpData,
                    conPassword: (event.target as HTMLInputElement).value,
                  });
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
              <div className="w-full place-content-center m-auto">
                <HeaderButton name="Sign Up" type="submit" />
              </div>
            </Formsy>
          </div>
        </div>
        <div>
          <div className="relative place-content-center h-full ">
            <div className=" before:block before:absolute before:bg-purple before:skew-y-12 before:rounded-full inline-block relative before:-inset-1  p-12  before:shadow-buttonInner after:content-['*] items-center phone:ml-0 ml-10">
              <span className="text-black  phone:text-5xl text-4xl relative text-center place-content-center">
                <p className="phone:w-72 w-60 p-5 font-bold ">
                  {' '}
                  Create an Account to{' '}
                  <span className="text-white mt-3">Begin</span>{' '}
                </p>
              </span>
            </div>
            <div className=" mt-10">
              <div className="  rounded-full  shadow-buttonInner px-3 py-5 w-96 text-xl bg-white">
                <span className="font-bold ml-10">
                  Already Have an Account
                  <span
                    className="text-purple ml-2 hover:underline cursor-pointer"
                    onClick={() => {
                      router.push('/auth/login');
                    }}
                  >
                    Login
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
