import React from 'react';
import Image from 'next/image';
import { TribeSnippetTwoType } from '@/types/types';
import Link from 'next/link';
const TribeSnippetTwo = ({
  profileImage,
  tribeName,
  members,
  description,
  link,
}: TribeSnippetTwoType) => {
  return (
    <div className="rounded-full relative">
      <Image
        className="absolute left-4 -top-2 p-2 rounded-full"
        src={profileImage}
        style={{
          width: '20%',
        }}
        alt="Picture of the author"
        sizes="50vw"
      />

      <div className="bg-purple flex justify-between p-3">
        <p className="font-bold">{tribeName}</p>
        <span className="flex text-pink gap-px">
          <p>{members}</p>
          <p>members</p>
        </span>
      </div>
      <div className="bg-[rgba(137,77,214,0.3)] flex justify-between p-2">
        <p>{description}</p>
        <Link
          className="bg-pink rounded-full shadow-buttonInner px-2 py-px text-center font-bold "
          href={link}
        >
          Join
        </Link>
      </div>
    </div>
  );
};

export default TribeSnippetTwo;
