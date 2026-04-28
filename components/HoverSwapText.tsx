type HoverSwapTextProps = {
  children: string;
  className?: string;
};

export function HoverSwapText({ children, className = "" }: HoverSwapTextProps) {
  return (
    <span className={`hover-swap ${className}`}>
      <span>{children}</span>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}
