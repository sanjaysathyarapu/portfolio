import type { CSSProperties, ReactNode } from "react";

type WidgetCircleProps = {
  children: ReactNode;
  stagger?: number;
  className?: string;
  href?: string;
  onClick?: () => void;
  "aria-label"?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
};

export function WidgetCircle({
  children,
  stagger = 0,
  className = "",
  href,
  onClick,
  ...rest
}: WidgetCircleProps) {
  const style = { "--widget-stagger": stagger } as CSSProperties;
  const classes = `widget-circle focus-ring inline-flex items-center justify-center ${className}`;

  if (href !== undefined) {
    return (
      <a href={href} className={classes} style={style} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <span className={classes} style={style} onClick={onClick} {...rest}>
      {children}
    </span>
  );
}
