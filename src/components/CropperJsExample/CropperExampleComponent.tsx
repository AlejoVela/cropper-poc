import { ChangeEvent, createRef, useContext, useEffect, useState } from "react";
import { Cropper, ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import styles from "./CropperExampleComponent.scss?inline";
import { CropperContext } from "src/context/CropperContext";

export const CropperExampleComponent = () => {
  const { image: cropperImage, onChangeImage } = useContext(CropperContext);
  const [image, setImage] = useState(cropperImage);
  const [cropData, setCropData] = useState("#");

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
        zoomTo={0.5}
        initialAspectRatio={1}
        preview=".img-preview"
        src={image}
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
        guides={true}
      />
      {/* <div className="cropper__options">
        <button className="cropper__button cropper__button--mini">
          Canvas Style
        </button>
        <button className="cropper__button cropper__button--mini">left</button>
        <button className="cropper__button cropper__button--mini">Right</button>
        <button className="cropper__button cropper__button--mini">
          Vertical
        </button>
        <button className="cropper__button cropper__button--mini">
          Horizontal
        </button>
        <button className="cropper__button cropper__button--mini">
          Horizontal
        </button>
        <button className="cropper__button cropper__button--mini">Grid</button>
        <button className="cropper__button cropper__button--mini">
          Movable
        </button>
        <button className="cropper__button cropper__button--mini">
          Resizable
        </button>
        <input
          className="cropper__input-option"
          type="text"
          placeholder="Aspect ratio, example: 9 / 5"
        />
      </div> */}
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
          <div
            className="img-preview image"
          />
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
