import { htmlFile } from "@assets/invoice";
import { useContext, useEffect, useRef } from "react";
import { CropperContext } from "src/context/CropperContext";

export const InvoiceComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { image } = useContext(CropperContext);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = htmlFile.replace("{LogoToReplace}", image);
    }
  }, [image]);

  return <div ref={ref}></div>;
};
