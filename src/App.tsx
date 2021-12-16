import * as React from "react";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { MyViewer, PdfApi } from "./MyViewer";
import { Navigator } from "./Navigator";
import { useRef } from "react";
import { Toolbar } from "./Toolbar";

const App = () => {
  const pdfViewerApi = useRef<PdfApi>({
    zoomPluginInstance: null,
    pageNavigationPluginInstance: null
  });

  const [_, setIsMounted] = React.useState(false);
  const [isPresenting, setPresenting] = React.useState(false);

  return (
    <div>
      <div>
        <MyViewer
          pdfViewerApi={pdfViewerApi}
          onMounted={() => setIsMounted(true)}
        />
      </div>
      <div
        style={{
          position: "fixed",
          top: 0,
          zIndex: 1,
          backgroundColor: isPresenting ? "red" : "white"
        }}
      >
        <Navigator pdfApi={pdfViewerApi} />
        <Toolbar
          pdfApi={pdfViewerApi}
          setPresenterMode={() => setPresenting(true)}
        />
      </div>
    </div>
  );
};

export default App;
