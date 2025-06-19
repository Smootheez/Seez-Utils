import { useState, useRef } from "react";
import { BackToHomeButton } from "../components/button";

export function SVGDownloader() {
  const [svgCode, setSvgCode] = useState("");
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    dragStart.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setPosition({
      x: touch.clientX - dragStart.current.x,
      y: touch.clientY - dragStart.current.y,
    });
  };

  const handleTouchEnd = () => setIsDragging(false);
  

  const handleMouseUp = () => setIsDragging(false);

  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.25));

  const handleDownload = () => {
    const blob = new Blob([svgCode], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.svg";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="flex flex-col items-center justify-center gap-y-4 h-screen text-center px-4">
      <h1 className="text-3xl font-bold md:text-4xl max-w-md font-bungee text-shadow-md">
        SVG Downloader
      </h1>
      <div className="border border-border p-4 bg-surface shadow-md rounded-lg max-w-4xl w-full space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="svg-code" className="font-semibold">
              Enter SVG code:
            </label>
            <textarea
              id="svg-code"
              className="w-full h-64 p-2 border border-border rounded-lg mt-2 focus:outline-none focus:border-secondary"
              value={svgCode}
              onChange={(e) => setSvgCode(e.target.value)}
            ></textarea>
          </div>

          {/* === SVG Preview Canvas === */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">Preview</h2>
              <div className="space-x-2">
                <button
                  onClick={zoomOut}
                  className="px-2 py-1 text-sm bg-muted text-foreground rounded hover:bg-muted/80"
                >
                  -
                </button>
                <span className="text-sm font-mono">
                  {(scale * 100).toFixed(0)}%
                </span>
                <button
                  onClick={zoomIn}
                  className="px-2 py-1 text-sm bg-muted text-foreground rounded hover:bg-muted/80"
                >
                  +
                </button>
              </div>
            </div>
            <div
              className="w-full h-64 overflow-hidden border border-dashed border-border rounded-lg bg-surface relative cursor-grab active:cursor-grabbing touch-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="absolute top-0 left-0"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transformOrigin: "top left",
                }}
                dangerouslySetInnerHTML={{ __html: svgCode }}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          className="px-4 py-2 bg-primary text-background rounded-lg hover:bg-primary/80 transition-colors"
          onClick={handleDownload}
        >
          Download SVG
        </button>
      </div>

      <BackToHomeButton />
    </main>
  );
}
