import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import styles from "./ReactAdvanceCropperComponent.scss?inline";
import { CropperContext } from "src/context/CropperContext";
import {
  Cropper,
  CropperRef,
  RectangleStencil,
  CircleStencil,
} from "react-advanced-cropper";
import "react-advanced-cropper/dist/style.css";
import { gatoImg } from "@assets/index";
import { StencilStyles } from "./types/ReactAdvanceCropperTypes";
gatoImg;

export const ReactAdvanceCropperComponent = () => {
  const cropperRef = useRef<CropperRef>(null);
  const { image: cropperImage, onChangeImage } = useContext(CropperContext);
  const [isRectangle, setIsRectangle] = useState(true);

  const [image, setImage] = useState(cropperImage);
  const [prevImage, setPrevImage] = useState("#");
  const [cropImage, setCropImage] = useState("#");

  const [stencilProps, setStencilProps] = useState<StencilStyles>({
    aspectRatio: 9 / 5,
    movable: true,
    resizable: true,
    grid: true,
  });

  const movePixelTranslate = 10;
  const anguloRotation = 45;

  const onLoadImage = (event: ChangeEvent<HTMLInputElement>) => {
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
    setPrevImage(cropper.getCanvas()?.toDataURL() as string);
  };

  const onZoom = (zoom: number) => {
    if (cropperRef.current) {
      cropperRef.current.zoomImage(zoom);
    }
  }

  const onCrop = () => {
    if (cropperRef.current) {
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

  const onMove = (axisX: number, axisY: number) => {
    if (cropperRef.current) {
        cropperRef.current.moveImage(axisX, axisY); // move x = 50, y = 100
    }
};

  useEffect(() => {
    onChangeImage(cropImage);
  }, [cropImage]);

  return (
    <>
      <div className="cropper__container">
        <input
          className="cropper__button"
          type="file"
          onChange={onLoadImage}
        />
        <Cropper
          style={{ height: 400, width: "100%" }}
          ref={cropperRef}
          stencilComponent={isRectangle ? RectangleStencil : CircleStencil}
          stencilProps={stencilProps}
          src={image}
          onChange={onChange}
          className={"cropper"}
        />
        <div className="cropper__options">
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onChangeCanvas()}
          >
            Canvas Style
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onZoom(2)}
          >
            <i className="fa-solid fa-magnifying-glass-plus"></i>
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onZoom(0.5)}
          >
            <i className="fa-solid fa-magnifying-glass-minus"></i>
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onMove(0, -movePixelTranslate)}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onMove(0, movePixelTranslate)}
          >
            <i className="fa-solid fa-arrow-down"></i>
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onMove(-movePixelTranslate, 0)}
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onMove(movePixelTranslate, 0)}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onRotate(-anguloRotation)}
          >
            <i className="fa-solid fa-rotate-left"></i>
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onRotate(anguloRotation)}
          >
            <i className="fa-sharp fa-solid fa-rotate-right"></i>
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onFlip(false, true)}
          >
            <i className="fa-solid fa-arrows-up-down"></i>
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onFlip(true, false)}
          >
            <i className="fa-solid fa-arrows-left-right"></i>
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() => onFlip(true, false)}
          >
            Horizontal
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() =>
              setStencilProps({ ...stencilProps, grid: !stencilProps.grid })
            }
          >
            Grid
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() =>
              setStencilProps({
                ...stencilProps,
                movable: !stencilProps.movable,
              })
            }
          >
            Movable
          </button>
          <button
            className="cropper__button cropper__button--mini"
            onClick={() =>
              setStencilProps({
                ...stencilProps,
                resizable: !stencilProps.resizable,
              })
            }
          >
            Resizable
          </button>
          <input
            onBlur={(e) =>
              setStencilProps({
                ...stencilProps,
                aspectRatio: parseInt(e.target.value),
              })
            }
            className="cropper__input-option"
            type="text"
            placeholder="Aspect ratio, example: 9 / 5"
          />
        </div>
        <button
          className="cropper__button cropper__button--full-width"
          onClick={onCrop}
        >
          Crop
        </button>
        <div className="images__container">
          <div className="image__card">
            <h2 className="image__title">Preview</h2>
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
