import { Worker, Viewer } from "@react-pdf-viewer/core";
import {
  pageNavigationPlugin,
  PageNavigationPlugin
} from "@react-pdf-viewer/page-navigation";
import { zoomPlugin, ZoomPlugin } from "@react-pdf-viewer/zoom";
import React, { useEffect } from "react";

type Props = {
  pdfViewerApi: React.MutableRefObject<PdfApi>;
  onMounted: () => void;
};

export type PdfApi = {
  zoomPluginInstance: ZoomPlugin | null;
  pageNavigationPluginInstance: PageNavigationPlugin | null;
};

export const MyViewer: React.FC<Props> = ({ pdfViewerApi, onMounted }) => {
  const zoomPluginInstance = zoomPlugin();
  const pageNavigationPluginInstance = pageNavigationPlugin();

  pdfViewerApi.current.zoomPluginInstance = zoomPluginInstance;
  pdfViewerApi.current.pageNavigationPluginInstance = pageNavigationPluginInstance;

  useEffect(() => {
    onMounted();
  }, [onMounted]);

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.js">
        <Viewer
          fileUrl="/pdf-open-parameters.pdf"
          plugins={[zoomPluginInstance, pageNavigationPluginInstance]}
        />
      </Worker>
    </div>
  );
};
