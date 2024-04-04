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
          <button className='button' onClick={() => setIsCropperJs(!isCropperJs)}>
            Change Cropper
          </button>
          <h1 style={{ fontSize: "26px", marginTop: '10px' }}>
            {isCropperJs ? "React Cropper JS" : "React Advance Cropper"}
          </h1>
          {isCropperJs ? (
            <CropperExampleComponent />
          ) : (
            <ReactAdvanceCropperComponent />
          )}
        </div>
        <div className="flex-col">
          <InvoiceComponent />
        </div>
      </div>
      <style>{`
				${styles}
			`}</style>
    </CropperProvider>
  );
};
