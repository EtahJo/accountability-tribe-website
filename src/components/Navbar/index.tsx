'use client';
import React, { useContext } from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { AuthContext } from '@/contexts/AuthenticationContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  return (
    <div className="bg-pink w-full py-10">
      <div className="bg-purple p-2 rounded-full flex justify-between align-middle items-center fixed top-5 lg:w-[96%] z-50 w-[90%] mx-2 left-8">
        <div className="bg-white rounded-full px-4 py-2 shadow-3xl cursor-pointer">
          <Link href={'/'}>
            <h1 className="font-bold text-2xl italic ">Accountability Tribe</h1>
          </Link>
        </div>
        {login ? (
          <div className="bg-white rounded-full flex p-2 gap-2 shadow-3xl">
            {' '}
            <AiFillMessage fontSize={30} className="my-icon" />
            <IoMdNotificationsOutline fontSize={30} className="my-icon" />
            <CgProfile fontSize={30} className="my-icon" />
          </div>
        ) : (
          <div className="flex gap-2 items-center">
            <Link className="text-lg cursor-pointer" href={'/auth/login'}>
              Login
            </Link>
            <p
              className="text-white text-lg bg-black rounded-full p-2 shadow-3xl shadow-white cursor-pointer"
              onClick={() => router.push('/auth/signup')}
            >
              Sign Up
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
