import React, { FC, HTMLProps } from 'react';
import styled from 'styled-components/macro';

export enum ButtonThemes {
  TRANSPARENT = 'transparent',
  OUTLINE = 'outline',
  FILLED = 'filled',
}

export enum ButtonSizes {
  SM = 'sm',
  MD = 'md',
  LG = 'lg',
}

interface ICreateButtonProps {
  mainColor: string;
  secondaryColor?: string;
  fontColor: string;
}

const createFilledButton = ({ mainColor, secondaryColor, fontColor }: ICreateButtonProps) => `
  color: ${fontColor};
  background-color: ${mainColor};
  background-image: linear-gradient(to right, ${mainColor} 0%, ${
  secondaryColor ?? mainColor
} 50%, ${mainColor} 100%);
  border: 0 solid ${secondaryColor ?? mainColor};
  border-radius: var(--radius-default);

  &:hover {
    color: ${fontColor};
    filter: brightness(var(--button-hover-brightness));
  }
`;

const createOutlineButton = ({ mainColor, fontColor }: ICreateButtonProps) => `
  color: ${fontColor};
  background-color: transparent;
  border: 2px solid ${mainColor};
  border-radius: var(--radius-default);

  &:hover {
    filter: brightness(var(--button-hover-brightness));
  }
`;

const buttonSizes = {
  sm: `
    padding: 0.35rem 1.2rem;
    font-size: 1.1rem;
  `,
  md: `
    padding: 0.7rem 1.5rem;
    font-size: 1.25rem;
  `,
  lg: `
  padding: 15px;
  font-size: 1.8rem;
  `,
};

const themes = {
  [ButtonThemes.OUTLINE]: createOutlineButton({
    mainColor: 'var(--button-dark)',
    fontColor: 'var(--button-dark)',
  }),
  [ButtonThemes.FILLED]: createFilledButton({
    mainColor: 'var(--button-light)',
    fontColor: 'var(--color-charcoal-medium)',
  }),
  [ButtonThemes.TRANSPARENT]: `
    background: transparent;
    border: none;
    border-radius: none;
  `,
};

interface IButtonProps {
  $size?: ButtonSizes;
  $theme: ButtonThemes;
}

const ButtonWrapper = styled.button(
  ({ $theme, $size = ButtonSizes.MD }: IButtonProps) => `
  font-weight: var(--font-weight-bold);
  cursor: pointer;

  ${buttonSizes[$size]}
  ${themes[$theme]}

  &:disabled {
    color: black;
    border-color: var(--button-disabled);
    background-color: var(--button-disabled);
    cursor: default;
  }
`
);

export const Button: FC<IButtonProps & HTMLProps<HTMLButtonElement>> = (props: IButtonProps) => {
  return <ButtonWrapper {...props} />;
};

export default Button;
