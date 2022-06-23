import { AnchorHTMLAttributes } from 'react';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  typeButton: 'primary' | 'secondary';
}

export function Button({ children, typeButton, ...rest }: ButtonProps) {
  const className =
    typeButton === 'primary'
      ? 'bg-green-500 hover:bg-green-700'
      : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-900';

  return (
    <a
      className={`p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center ${className} transition-colors`}
      {...rest}
    >
      {children}
    </a>
  );
}
