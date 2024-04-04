import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import styles from "./ReactAdvanceCropperComponent.scss?inline";
import { CropperContext } from "src/context/CropperContext";
import { Cropper, CropperRef, RectangleStencil } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";

export const ReactAdvanceCropperComponent = () => {
  const cropperRef = useRef<CropperRef>(null);
  const { image: cropperImage, onChangeImage } = useContext(CropperContext);

  const [image, setImage] = useState(cropperImage);
  const [prevImage, setPrevImage] = useState("#");
  const [cropImage, setCropImage] = useState("#");

  const onChargeImage = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const files = event.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    if (!files) return;
    reader.readAsDataURL(files[0]);
  }

  const onChange = (cropper: CropperRef) => {
    //console.log(cropper.getCoordinates());
    setPrevImage(cropper.getCanvas()?.toDataURL() as string);
  };

  const onCrop = () => {
    if (cropperRef.current) {
      // setCoordinates(cropperRef.current.getCoordinates());
      setCropImage(cropperRef.current.getCanvas()?.toDataURL() as string);
    }
  };

  useEffect(() => {
    onChangeImage(cropImage);
  }, [cropImage]);

  return (
    <>
      <div className="cropper__container">
        <input type="file" onChange={onChargeImage} />
        <Cropper
          style={{ height: 400, width: "100%" }}
          ref={cropperRef}
          stencilComponent={RectangleStencil}
          stencilProps={{
            aspectRatio: 9 / 5,
            movable: true,
            resizable: true,
            grid: true,
          }}
          src={image}
          onChange={onChange}
          className={"cropper"}
        />
        <button className="cropper__button cropper__button--full-width" onClick={onCrop}>Crop</button>
        <div className="images__container">
          <div className="image__card">
            <h2 className="image__title">Previous</h2>
            <img className="image" src={prevImage} alt="cropped" />
          </div>
          <div className="image__card">
            <h2 className="image__title">Cropped Image</h2>
            <img className="image" src={cropImage} alt="cropped" />
          </div>
        </div>
      </div>
      <style>{`
        ${styles}
      `}</style>
    </>
  );
};
