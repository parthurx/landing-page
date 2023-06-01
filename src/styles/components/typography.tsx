import React from "react";

interface iBaseTitleProps {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className: string;
  fontFamily?: string;
  fontSize: "lg" | "md" | "sm";
  fontWeight: 400 | 500 | 700;
}

const BaseTitle = ({ children, tag, className,  fontFamily }: iBaseTitleProps) => {
  return (
    <>
      {tag == "h1" && <h1 className={className} style={{fontFamily}}>{children}</h1>}
      {tag == "h2" && <h2 className={className} style={{fontFamily}}>{children}</h2>}
      {tag == "h3" && <h3 className={className} style={{fontFamily}}>{children}</h3>}
      {tag == "h4" && <h4 className={className} style={{fontFamily}}>{children}</h4>}
      {tag == "h5" && <h5 className={className} style={{fontFamily}}>{children}</h5>}
      {tag == "h6" && <h6 className={className} style={{fontFamily}}>{children}</h6>}
    </>
  );
};

export default BaseTitle;
