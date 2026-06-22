import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return <Icon {...props}><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .39-.79l8-6.22a1 1 0 0 1 1.22 0l8 6.22a1 1 0 0 1 .39.79V20Zm-2-1V9.98l-7-5.45-7 5.45V19h14Z" /></Icon>;
}

export function FolderIcon(props: IconProps) {
  return <Icon {...props}><path d="M4 5v14h16V7h-8.41l-2-2H4Zm8.41 0H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.41l2 2Z" /></Icon>;
}

export function SendIcon(props: IconProps) {
  return <Icon {...props}><path d="m21.73 2.96-5.46 19.08c-.15.53-.47.56-.71.07L11 13 1.92 9.37c-.51-.2-.5-.51.04-.69l19.08-6.36c.53-.18.83.12.69.64Zm-2.7 2.14L6.82 9.17l5.63 2.26 3.04 6.08L19.03 5.1Z" /></Icon>;
}

export function GithubIcon(props: IconProps) {
  return <Icon {...props}><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.69-.21.69-.48 0-.24-.02-1.02-.02-1.86-2.51.46-3.16-.61-3.36-1.18-.11-.28-.6-1.17-1.02-1.41-.35-.19-.85-.65-.02-.66.79-.01 1.35.73 1.54 1.03.9 1.51 2.34 1.08 2.91.82.09-.65.35-1.09.64-1.34-2.23-.25-4.55-1.11-4.55-4.94 0-1.08.39-1.98 1.03-2.68-.1-.25-.45-1.28.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12.03 7c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.65.64.7 1.02 1.59 1.02 2.69 0 3.84-2.34 4.69-4.56 4.94.36.31.67.91.67 1.85 0 1.34-.01 2.41-.01 2.75 0 .26.19.58.69.48A10 10 0 0 0 12 2Z" /></Icon>;
}

export function MailIcon(props: IconProps) {
  return <Icon {...props}><path d="M20 4H4a2 2 0 0 0-1.99 2L2 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" /></Icon>;
}

export function CodeIcon(props: IconProps) {
  return <Icon {...props}><path d="m24 12-5.66 5.66-1.41-1.42L21.17 12l-4.24-4.24 1.41-1.42L24 12ZM2.83 12l4.24 4.24-1.41 1.42L0 12l5.66-5.66 1.41 1.42L2.83 12Zm6.96 9H7.66l6.55-18h2.13L9.79 21Z" /></Icon>;
}

export function ArrowIcon(props: IconProps) {
  return <Icon {...props}><path d="m16 9.41-8.6 8.61-1.42-1.41L14.59 8H7V6h11v11h-2V9.41Z" /></Icon>;
}
