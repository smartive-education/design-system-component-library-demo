import React, { FC, LabelHTMLAttributes, ReactNode } from 'react';
import { merge } from '../merge';

type BaseProps = {
  as?: 'span' | 'label';
  size: 'S' | 'M' | 'L' | 'XL';
  children: ReactNode;
};

type LabelProps = BaseProps & {
  as: 'label';
} & LabelHTMLAttributes<HTMLLabelElement>;

type Props = BaseProps | LabelProps;

const classMap: Record<Props['size'], string> = {
  S: 'text-xs leading-none font-semibold',
  M: 'text-sm leading-none font-semibold',
  L: 'text-lg leading-none font-semibold',
  XL: 'text-2xl leading-none font-semibold',
};

export const Label: FC<Props> = (props) => {
  const { children, as: Tag = 'label', size = 'M', ...rest } = props;
  const className = merge([
    'font-sans text-current text-decoration-inherit decoration-inherit underline-offset-inherit inline-block cursor-inherit',
    classMap[size],
  ]);

  return (
    // We explicitly allow this, since eslint doesn't quite get that we're using a native element here.
    // eslint-disable-next-line react/forbid-component-props
    <Tag className={className} {...rest}>
      {children}
    </Tag>
  );
};
