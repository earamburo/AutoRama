import { type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  floating?: boolean;
};

export function CarImage({ floating = true, className = "", alt, ...rest }: Props) {
  return (
    <img
      alt={alt}
      loading={rest.loading ?? "lazy"}
      {...rest}
      className={`${floating ? "car-image" : ""} ${className}`}
    />
  );
}
