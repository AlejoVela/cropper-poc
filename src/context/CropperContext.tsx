import { gatoImg } from "@assets/index";
import { createContext, useState } from "react";

const defaultContextValue = {
  image: gatoImg,
  onChangeImage: (cropImage: string) => {
    console.log(cropImage);
  },
};

export const CropperContext = createContext(defaultContextValue);

export const CropperProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [image, setImage] = useState<string>(defaultContextValue.image);

  const onChangeImage = (cropImage: string) => {
    setImage(cropImage);
  };

  return (
    <CropperContext.Provider value={({image, onChangeImage})}>
      {children}
    </CropperContext.Provider>
  );
};
