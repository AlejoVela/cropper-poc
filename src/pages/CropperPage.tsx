import { InvoiceComponent } from "@components/InvoiceComponent";
import { CropperExampleComponent } from "@components/CropperJsExample/CropperExampleComponent";
import styles from "./CropperPage.scss?inline";
import { CropperProvider } from "src/context/CropperContext";
import { useState } from "react";
import { ReactAdvanceCropperComponent } from "@components/ReactAdvanceCropperExampple/ReactAdvanceCropperComponent";

export const CropperPage = () => {
  const [isCropperJs, setIsCropperJs] = useState(false);

  return (
    <CropperProvider>
      <div className="flex-container">
        <div className="flex-col">
          {isCropperJs ? (
            <CropperExampleComponent />
          ) : (
            <ReactAdvanceCropperComponent />
          )}
        </div>
        <div className="flex-col">
        <h1 className="title">
        {isCropperJs ? "React Cropper JS" : "React Advance Cropper"}
      </h1>
          <button
            className="button"
            onClick={() => setIsCropperJs(!isCropperJs)}
          >
            Change Cropper
          </button>
          <InvoiceComponent />
        </div>
      </div>
      <style>{`
				${styles}
			`}</style>
    </CropperProvider>
  );
};
