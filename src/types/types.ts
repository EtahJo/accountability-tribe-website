import { StaticImageData } from 'next/image';
import React from 'react';
import { FormsyInjectedProps } from 'formsy-react';

export type HeaderButtonType = {
  name: string;
  type?: 'submit' | 'reset' | undefined;
  disabled?: boolean;
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
  Icon?: React.ReactElement;
  value: any;
  changeEvent: (val: any) => void;
} & FormsyInjectedProps<any>;
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
export type CustomCheckBoxProps = {
  label: string;
  checked: boolean;
  onChange: (val: any) => void;
} & FormsyInjectedProps<any>;

export type SlideShowProps = {
  slides: { src: string }[];
};
