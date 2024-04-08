'use client';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthenticationContext';
import HomeLoggedIn from '@/components/HomePage/HomeLoggedIn';
import HomeLoggedOut from '@/components/HomePage/HomeLoggedOut';

export default function Home() {
  const { login } = useContext(AuthContext);
  return <main>{login ? <HomeLoggedIn /> : <HomeLoggedOut />}</main>;
}
