import { StaticImageData } from 'next/image';
import React from 'react';

export type HeaderButtonType = {
  name: string;
};
export type SquareComponentType = {
  header: string;
  description: string;
};
export type CustomInputType = {
  name: string;
  type?: string;
  placeholder: string;
  textArea?: boolean;
  required?: boolean;
};
export type SectionHeaderType = {
  name: string;
  icon?: React.ReactElement;
};
export type TribeSnippetType = {
  name: string;
  members: number;
};
export type TribeSnippetTwoType = {
  profileImage: StaticImageData;
  tribeName: string;
  members: number;
  description: string;
  link: string;
};
export type CompletionLeveltype = {
  completionStatement?: string;
  percentage: string;
  title: string;
  completed?: boolean;
  carriedOver?: boolean;
  unCompleted?: boolean;
};
export type MovingTextType = {
  textOne: string;
  textTwo: string;
  colorUp?: boolean;
  colorDown?: boolean;
};
