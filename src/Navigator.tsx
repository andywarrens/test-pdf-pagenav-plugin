import * as React from "react";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import { PdfApi } from "./MyViewer";
import { PageNavigationPlugin } from "@react-pdf-viewer/page-navigation";

type Props = {
  pdfApi: React.MutableRefObject<PdfApi>;
};

export const Navigator: React.FC<Props> = ({ pdfApi }) => {
  const navApi = pdfApi.current.pageNavigationPluginInstance;
  if (navApi === null)
    return (
      <div>
        <span>No Navigation:</span>
      </div>
    );

  const { GoToPreviousPage, GoToNextPage, CurrentPageLabel } = navApi;

  return (
    <div>
      <span>Navigation:</span>
      <GoToPreviousPage>
        {({ onClick }) => <button onClick={() => onClick()}>LEFT</button>}
      </GoToPreviousPage>

      <CurrentPageLabel>
        {({ currentPage, numberOfPages }) => (
          <span>{`${currentPage + 1} / ${numberOfPages}`}</span>
        )}
      </CurrentPageLabel>

      <GoToNextPage>
        {({ onClick }) => <button onClick={() => onClick()}>RIGHT</button>}
      </GoToNextPage>
    </div>
  );
};
