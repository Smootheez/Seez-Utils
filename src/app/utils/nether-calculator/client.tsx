"use client";

import { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";

export default function NetherCalculatorClient() {
  const [overworld, setOverworld] = useState({ x: "", z: "" });
  const [nether, setNether] = useState({ x: "", z: "" });

  const handleOverworldChange = (axis: "x" | "z", value: string) => {
    const num = parseFloat(value);
    setOverworld((prev) => ({ ...prev, [axis]: value }));
    setNether((prev) => ({
      ...prev,
      [axis]: !isNaN(num) ? (num / 8).toFixed(2) : "",
    }));
  };

  const handleNetherChange = (axis: "x" | "z", value: string) => {
    const num = parseFloat(value);
    setNether((prev) => ({ ...prev, [axis]: value }));
    setOverworld((prev) => ({
      ...prev,
      [axis]: !isNaN(num) ? (num * 8).toFixed(2) : "",
    }));
  };

  return (
    <CardContent>
      {/* Overworld → Nether */}
      <TabsContent value="overworld" className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Overworld Input */}
          <div className="flex flex-col gap-y-4 w-full">
            <h3 className="text-xl font-semibold text-center md:text-left">
              Overworld coordinates
            </h3>
            <Input
              type="number"
              placeholder="Overworld coordinate X"
              value={overworld.x}
              onChange={(e) => handleOverworldChange("x", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Overworld coordinate Z"
              value={overworld.z}
              onChange={(e) => handleOverworldChange("z", e.target.value)}
            />
          </div>

          {/* Nether Result */}
          <div className="flex flex-col gap-y-4 w-full">
            <h3 className="text-xl font-semibold text-center md:text-left">
              Nether coordinates
            </h3>
            <Input
              type="text"
              readOnly
              value={nether.x}
              placeholder="Nether coordinate X"
            />
            <Input
              type="text"
              readOnly
              value={nether.z}
              placeholder="Nether coordinate Z"
            />
          </div>
        </div>
      </TabsContent>

      {/* Nether → Overworld */}
      <TabsContent value="nether" className="flex flex-col">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Nether Input */}
          <div className="flex flex-col gap-y-4 w-full">
            <h3 className="text-xl font-semibold text-center md:text-left">
              Nether coordinates
            </h3>
            <Input
              type="number"
              placeholder="Nether coordinate X"
              value={nether.x}
              onChange={(e) => handleNetherChange("x", e.target.value)}
            />
            <Input
              type="number"
              placeholder="Nether coordinate Z"
              value={nether.z}
              onChange={(e) => handleNetherChange("z", e.target.value)}
            />
          </div>

          {/* Overworld Result */}
          <div className="flex flex-col gap-y-4 w-full">
            <h3 className="text-xl font-semibold text-center md:text-left">
              Overworld coordinates
            </h3>
            <Input
              type="text"
              readOnly
              value={overworld.x}
              placeholder="Overworld coordinate X"
            />
            <Input
              type="text"
              readOnly
              value={overworld.z}
              placeholder="Overworld coordinate Z"
            />
          </div>
        </div>
      </TabsContent>
    </CardContent>
  );
}
