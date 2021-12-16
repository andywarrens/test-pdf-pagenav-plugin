import * as React from "react";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { PdfApi } from "./MyViewer";

type Props = {
  pdfApi: React.MutableRefObject<PdfApi>;
  setPresenterMode: () => void;
};

export const Toolbar: React.FC<Props> = ({ pdfApi, setPresenterMode }) => {
  const zoomApi = pdfApi.current.zoomPluginInstance;
  return (
    <div>
      <span>Zoom:</span>
      {zoomApi && (
        <>
          <zoomApi.ZoomIn>
            {(props) => <button onClick={() => props.onClick()}>+</button>}
          </zoomApi.ZoomIn>

          <zoomApi.CurrentScale>
            {({ scale }) => <span>{Math.round(scale * 100)}%</span>}
          </zoomApi.CurrentScale>

          <zoomApi.ZoomOut>
            {(props) => <button onClick={() => props.onClick()}>-</button>}
          </zoomApi.ZoomOut>

          <button
            onClick={() => {
              zoomApi.zoomTo(2);
              setPresenterMode();
            }}
          >
            Presenter
          </button>
        </>
      )}
    </div>
  );
};
