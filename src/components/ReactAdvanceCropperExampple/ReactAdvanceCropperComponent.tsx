import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import styles from "./ReactAdvanceCropperComponent.scss?inline";
import { CropperContext } from "src/context/CropperContext";
import { Cropper, CropperRef, RectangleStencil, CircleStencil } from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import { gatoImg } from "@assets/index";
gatoImg;

export const ReactAdvanceCropperComponent = () => {
  const cropperRef = useRef<CropperRef>(null);
  const { image: cropperImage, onChangeImage } = useContext(CropperContext);
  const [ isRectangle, setIsRectangle ] = useState(true);

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
  };

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

  const onChangeCanvas = () => {
    setIsRectangle(!isRectangle);
  };

  const onRotate = (angule: number) => {
    if (cropperRef.current) {
      cropperRef.current.rotateImage(angule);
    }
  };

  const onFlip = (horizontalFlip: boolean, verticalFlip: boolean) => {
    if (cropperRef.current) {
      cropperRef.current.flipImage(horizontalFlip, verticalFlip);
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
          stencilComponent={isRectangle ? RectangleStencil : CircleStencil}
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
        <div className="cropper__mini-buttons">
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onChangeCanvas()}
          >
            Canvas Style
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onRotate(-90)}
          >
            left
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onRotate(90)}
          >
            Right
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onFlip(false, true)}
          >
            Vertical
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onFlip(true, false)}
          >
            Horizontal
          </button>
        </div>
        <button
          className="cropper__button cropper__button--full-width"
          onClick={onCrop}
        >
          Crop
        </button>
        <div className="images__container">
          <div className="image__card">
            <h2 className="image__title">Previous</h2>
            <img className="image" src={prevImage ?? image} alt="cropped" />
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
