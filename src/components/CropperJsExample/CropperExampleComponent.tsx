import { ChangeEvent, createRef, useContext, useEffect, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import styles from "./CropperExampleComponent.scss?inline";
import { CropperContext } from "src/context/CropperContext";

interface CropperJsPros {
  initialAspectRatio: number;
  zoomTo: number;
  rotateTo: number;
  scaleX?: number;
  scaleY?: number;
  background: boolean;
  guides: boolean;
  viewMode: 0 | 1 | 2 | 3;
  aspectRatio: number;
}

export const CropperExampleComponent = () => {
  const { image: cropperImage, onChangeImage } = useContext(CropperContext);
  const [image, setImage] = useState(cropperImage);
  const [cropData, setCropData] = useState("#");

  const [cropperState, setCropperState] = useState<CropperJsPros>({
    background: false,
    guides: true,
    initialAspectRatio: 1,
    zoomTo: 0,
    viewMode: 3,
    aspectRatio: 9 / 5,
    rotateTo: 0,
    scaleX: 1,
    scaleY: 1,
  });

  const movePixelTranslate = 10;
  const anguloRotation = 45;

  const cropperRef = createRef<ReactCropperElement>();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    if (!files) return;
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };

  const onZoom = (zoom: number) => {
    if (cropperRef.current) {
      setCropperState({ ...cropperState, zoomTo: zoom });
    }
  };

  const onRotate = (angule: number) => {
    if (cropperRef.current) {
      setCropperState({ ...cropperState, rotateTo: angule });
      cropperRef.current?.cropper.rotate(angule);
    }
  };

  const onMove = (axisX: number, axisY: number) => {
    if (cropperRef.current) {
      cropperRef.current?.cropper.move(axisX, axisY);
    }
  };

  const onFlipY = (axisY: number) => {
    if (cropperRef.current) {
      setCropperState({ ...cropperState, scaleY: axisY });
      cropperRef.current?.cropper.scaleY(axisY);
    }
  };

  const onFlipX = (axisX: number) => {
    if (cropperRef.current) {
      setCropperState({ ...cropperState, scaleX: axisX });
      cropperRef.current?.cropper.scaleX(axisX);
    }
  };

  useEffect(() => {
    onChangeImage(cropData);
  }, [cropData]);

  return (
    <div className="cropper__container">
      <input
        className="cropper__button"
        type="file"
        onChange={(e) => onChange(e)}
      />
      <Cropper
        ref={cropperRef}
        style={{ height: 400, width: "100%" }}
        movable={true}
        rotatable={true}
        {...cropperState}
        preview=".img-preview"
        src={image}
        viewMode={3}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        responsive={false}
        autoCropArea={1}
        checkOrientation={true} // https://github.com/fengyuanchen/cropperjs/issues/671
      />
      <div className="cropper__options">
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
          onClick={() => onMove(0, movePixelTranslate)}
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
        <button
          className="cropper__button cropper__button--mini"
          onClick={() => onMove(0, -movePixelTranslate)}
        >
          <i className="fa-solid fa-arrow-down"></i>
        </button>
        <button
          className="cropper__button cropper__button--mini"
          onClick={() => onMove(movePixelTranslate, 0)}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className="cropper__button cropper__button--mini"
          onClick={() => onMove(-movePixelTranslate, 0)}
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
          onClick={() => onFlipY(cropperState.scaleY === 1 ? -1 : 1)}
        >
          <i className="fa-solid fa-arrows-up-down"></i>
        </button>
        <button
          className="cropper__button cropper__button--mini"
          onClick={() => onFlipX(cropperState.scaleX === 1 ? -1 : 1)}
        >
          <i className="fa-solid fa-arrows-left-right"></i>
        </button>
        {/** Doesn't works with live changes */}
        {/* <button
            className="cropper__button cropper__button--mini"
            onClick={() => setCropperState({ ...cropperState, guides: !cropperState.guides })}
          >
            Grid
          </button> */}
        <input
          onBlur={(e) =>{
            setCropperState({
              ...cropperState,
              aspectRatio: parseInt(e.target.value),
            })
            cropperRef.current?.cropper.setAspectRatio(parseInt(e.target.value));
          }}
          className="cropper__input-option"
          type="text"
          placeholder="Aspect ratio, example: 9 / 5"
        />
      </div>
      <button
        className="cropper__button cropper__button--full-width"
        onClick={getCropData}
      >
        Crop
      </button>
      <div className="images__container">
        <div className="image__card">
          <h2 className="image__title">Preview</h2>
          {/* img-preview class is needed to render the preview image */}
          <div className="img-preview image" />
        </div>
        <div className="image__card">
          <h2 className="image__title">Cropped Image</h2>
          <img className="image" src={cropData} alt="cropped" />
        </div>
      </div>
      <style>{`
        ${styles}
      `}</style>
    </div>
  );
};
