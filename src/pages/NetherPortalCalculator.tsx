import { useState } from "react";
import { BackToHomeButton } from "../components/button";

export function NetherPortalCalculator() {
  const [overworldX, setOverworldX] = useState<string>("");
  const [overworldZ, setOverworldZ] = useState<string>("");
  const [netherX, setNetherX] = useState<string>("");
  const [netherZ, setNetherZ] = useState<string>("");

  // Handle Overworld X input and calculate Nether X
  const handleOverworldX = (value: string) => {
    setOverworldX(value);
    if (value !== "" && !isNaN(Number(value))) {
      setNetherX(Math.floor(parseFloat(value) / 8).toString());
    } else {
      setNetherX("");
    }
  };

  // Handle Overworld Z input and calculate Nether Z
  const handleOverworldZ = (value: string) => {
    setOverworldZ(value);
    if (value !== "" && !isNaN(Number(value))) {
      setNetherZ(Math.floor(parseFloat(value) / 8).toString());
    } else {
      setNetherZ("");
    }
  };

  // Handle Nether X input and calculate Overworld X
  const handleNetherX = (value: string) => {
    setNetherX(value);
    if (value !== "" && !isNaN(Number(value))) {
      setOverworldX((parseFloat(value) * 8).toString());
    } else {
      setOverworldX("");
    }
  };

  // Handle Nether Z input and calculate Overworld Z
  const handleNetherZ = (value: string) => {
    setNetherZ(value);
    if (value !== "" && !isNaN(Number(value))) {
      setOverworldZ((parseFloat(value) * 8).toString());
    } else {
      setOverworldZ("");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-text text-3xl font-bold md:text-4xl max-w-md">
        Nether Portal Calculator
      </h1>
      <div className="my-2 md:my-4 max-w-md bg-surface rounded-lg shadow-lg p-4 border border-border w-full flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="overworld-x" className="font-bold">
              Overworld X
            </label>
            <input
              type="number"
              name="Overworld X"
              id="overworld-x"
              placeholder="Input Overworld X"
              value={overworldX}
              onChange={(e) => handleOverworldX(e.target.value)}
              className="border border-border rounded-md p-2 mb-2 focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="overworld-z" className="font-bold">
              Overworld Z
            </label>
            <input
              type="number"
              name="Overworld Z"
              id="overworld-z"
              placeholder="Input Overworld Z"
              value={overworldZ}
              onChange={(e) => handleOverworldZ(e.target.value)}
              className="border border-border rounded-md p-2 mb-2 focus:outline-none focus:border-secondary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="nether-x" className="font-bold">
              Nether X
            </label>
            <input
              type="number"
              name="Nether X"
              id="nether-x"
              placeholder="Input Nether X"
              value={netherX}
              onChange={(e) => handleNetherX(e.target.value)}
              className="border border-border rounded-md p-2 mb-2 focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label htmlFor="nether-z" className="font-bold">
              Nether Z
            </label>
            <input
              type="number"
              name="Nether Z"
              id="nether-z"
              placeholder="Input Nether Z"
              value={netherZ}
              onChange={(e) => handleNetherZ(e.target.value)}
              className="border border-border rounded-md p-2 mb-2 focus:outline-none focus:border-secondary"
            />
          </div>
        </div>
      </div>
      <BackToHomeButton />
    </main>
  );
}
