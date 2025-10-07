"use client";

import { useState } from "react";
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function BinaryCodeTranslatorClient() {
  const [textInput, setTextInput] = useState("");
  const [binaryOutput, setBinaryOutput] = useState("");
  const [binaryInput, setBinaryInput] = useState("");
  const [textOutput, setTextOutput] = useState("");

  const handleTextToBinary = () => {
    if (!textInput.trim()) {
      setBinaryOutput("");
      toast.warning("Please enter some text to convert.");
      return;
    }
    const binary = textInput
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
    setBinaryOutput(binary);
    toast.success("✅ Text converted to binary!");
  };

  const handleBinaryToText = () => {
    if (!binaryInput.trim()) {
      setTextOutput("");
      toast.warning("Please enter some binary code to convert.");
      return;
    }
    try {
      const text = binaryInput
        .trim()
        .split(/\s+/)
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join("");
      setTextOutput(text);
      toast.success("✅ Binary converted to text!");
    } catch {
      setTextOutput("⚠️ Invalid binary input.");
      toast.error("⚠️ Invalid binary format.");
    }
  };

  const clearTextToBinary = () => {
    setTextInput("");
    setBinaryOutput("");
    toast.info("Cleared text and binary fields.");
  };

  const clearBinaryToText = () => {
    setBinaryInput("");
    setTextOutput("");
    toast.info("Cleared binary and text fields.");
  };

  const handleCopy = async (value: string, label: string) => {
    if (!value.trim()) {
      toast.warning(`Nothing to copy from ${label}.`);
      return;
    }
    await navigator.clipboard.writeText(value);
    toast.success(`📋 ${label} copied to clipboard.`);
  };

  return (
    <>
      <Tabs defaultValue="text-to-binary">
        <TabsList className="w-full">
          <TabsTrigger value="text-to-binary">Text to Binary</TabsTrigger>
          <TabsTrigger value="binary-to-text">Binary to Text</TabsTrigger>
        </TabsList>

        {/* TEXT → BINARY */}
        <TabsContent value="text-to-binary">
          <FieldSet>
            <div className="flex items-center justify-between">
              <div>
                <FieldLegend>Text to Binary</FieldLegend>
                <FieldDescription>Convert text to binary.</FieldDescription>
              </div>
              <Button variant="destructive" onClick={clearTextToBinary}>
                Clear Field
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Field className="flex-1">
                <FieldLabel>Plain Text</FieldLabel>
                <Textarea
                  placeholder="Enter text to convert to binary"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  className="min-h-60"
                />
                <Button
                  onClick={handleTextToBinary}
                  className="mt-2 w-full md:w-auto"
                >
                  Convert to Binary
                </Button>
              </Field>

              <Field className="flex-1">
                <FieldLabel>Binary Code</FieldLabel>
                <Textarea
                  placeholder="Binary output"
                  value={binaryOutput}
                  readOnly
                  className="min-h-60"
                />
                <Button
                  variant="secondary"
                  onClick={() => handleCopy(binaryOutput, "Binary code")}
                  className="mt-2 w-full md:w-auto"
                >
                  Copy
                </Button>
              </Field>
            </div>
          </FieldSet>
        </TabsContent>

        {/* BINARY → TEXT */}
        <TabsContent value="binary-to-text">
          <FieldSet>
            <div className="flex items-center justify-between">
              <div>
                <FieldLegend>Binary to Text</FieldLegend>
                <FieldDescription>Convert binary to text.</FieldDescription>
              </div>
              <Button variant="destructive" onClick={clearBinaryToText}>
                Clear Field
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Field className="flex-1">
                <FieldLabel>Binary Code</FieldLabel>
                <Textarea
                  placeholder="Enter binary code (e.g. 01001000 01101001)"
                  value={binaryInput}
                  onChange={(e) => setBinaryInput(e.target.value)}
                  className="min-h-60"
                />
                <Button
                  onClick={handleBinaryToText}
                  className="mt-2 w-full md:w-auto"
                >
                  Convert to Text
                </Button>
              </Field>

              <Field className="flex-1">
                <FieldLabel>Plain Text</FieldLabel>
                <Textarea
                  placeholder="Text output"
                  value={textOutput}
                  readOnly
                  className="min-h-60"
                />
                <Button
                  variant="secondary"
                  onClick={() => handleCopy(textOutput, "Text output")}
                  className="mt-2 w-full md:w-auto"
                >
                  Copy
                </Button>
              </Field>
            </div>
          </FieldSet>
        </TabsContent>
      </Tabs>

      <Toaster />
    </>
  );
}
