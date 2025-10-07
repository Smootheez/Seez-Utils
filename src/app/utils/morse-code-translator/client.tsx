// app/morse-translator/morse-translator-client.tsx
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

// Morse code mapping table
const MORSE_CODE_MAP: Record<string, string> = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "'": ".----.",
  "!": "-.-.--",
  "/": "-..-.",
  "(": "-.--.",
  ")": "-.--.-",
  "&": ".-...",
  ":": "---...",
  ";": "-.-.-.",
  "=": "-...-",
  "+": ".-.-.",
  "-": "-....-",
  _: "..--.-",
  '"': ".-..-.",
  $: "...-..-",
  "@": ".--.-.",
  " ": "/",
};

// Reverse mapping for decoding
const REVERSE_MORSE_MAP = Object.fromEntries(
  Object.entries(MORSE_CODE_MAP).map(([char, morse]) => [morse, char])
);

export default function MorseTranslatorClient() {
  const [textInput, setTextInput] = useState("");
  const [morseOutput, setMorseOutput] = useState("");
  const [morseInput, setMorseInput] = useState("");
  const [textOutput, setTextOutput] = useState("");

  // Convert text → morse
  const handleTextToMorse = () => {
    if (!textInput.trim()) {
      setMorseOutput("");
      toast.warning("Please enter some text to convert.");
      return;
    }

    const morse = textInput
      .toUpperCase()
      .split("")
      .map((char) => MORSE_CODE_MAP[char] || "")
      .join(" ");

    setMorseOutput(morse);
    toast.success("✅ Text converted to Morse code!");
  };

  // Convert morse → text
  const handleMorseToText = () => {
    if (!morseInput.trim()) {
      setTextOutput("");
      toast.warning("Please enter Morse code to convert.");
      return;
    }

    // Validate allowed characters only (. - / and space)
    const validPattern = /^[.\-\/\s]+$/;
    if (!validPattern.test(morseInput.trim())) {
      setTextOutput("");
      toast.error("⚠️ Morse code can only contain '.', '-', '/', and spaces.");
      return;
    }

    try {
      const words = morseInput.trim().split(" / ");
      let text = "";

      for (const word of words) {
        const chars = word.trim().split(" ");
        for (const symbol of chars) {
          if (!REVERSE_MORSE_MAP[symbol]) {
            setTextOutput("");
            toast.error(`⚠️ Invalid Morse symbol: "${symbol}"`);
            return;
          }
          text += REVERSE_MORSE_MAP[symbol];
        }
        text += " ";
      }

      setTextOutput(text.trim());
      toast.success("✅ Morse code converted to text!");
    } catch {
      setTextOutput("⚠️ Invalid Morse input.");
      toast.error("⚠️ Invalid Morse format.");
    }
  };


  // Clear handlers
  const clearTextToMorse = () => {
    setTextInput("");
    setMorseOutput("");
    toast.info("Cleared text and Morse fields.");
  };

  const clearMorseToText = () => {
    setMorseInput("");
    setTextOutput("");
    toast.info("Cleared Morse and text fields.");
  };

  // Copy handler
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
      <Tabs defaultValue="text-to-morse">
        <TabsList className="w-full">
          <TabsTrigger value="text-to-morse">Text to Morse</TabsTrigger>
          <TabsTrigger value="morse-to-text">Morse to Text</TabsTrigger>
        </TabsList>

        {/* TEXT → MORSE */}
        <TabsContent value="text-to-morse">
          <FieldSet>
            <div className="flex items-center justify-between">
              <div>
                <FieldLegend>Text to Morse</FieldLegend>
                <FieldDescription>
                  Convert regular text into Morse code.
                </FieldDescription>
              </div>
              <Button variant="destructive" onClick={clearTextToMorse}>
                Clear Field
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Field className="flex-1">
                <FieldLabel>Plain Text</FieldLabel>
                <Textarea
                  placeholder="Enter text (e.g. Hello World)"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  className="min-h-60"
                />
                <Button
                  onClick={handleTextToMorse}
                  className="mt-2 w-full md:w-auto"
                >
                  Convert to Morse
                </Button>
              </Field>

              <Field className="flex-1">
                <FieldLabel>Morse Code</FieldLabel>
                <Textarea
                  placeholder="Morse output (e.g. .... . .-.. .-.. --- / .-- --- .-. .-.. -..)"
                  value={morseOutput}
                  readOnly
                  className="min-h-60"
                />
                <Button
                  variant="secondary"
                  onClick={() => handleCopy(morseOutput, "Morse code")}
                  className="mt-2 w-full md:w-auto"
                >
                  Copy
                </Button>
              </Field>
            </div>
          </FieldSet>
        </TabsContent>

        {/* MORSE → TEXT */}
        <TabsContent value="morse-to-text">
          <FieldSet>
            <div className="flex items-center justify-between">
              <div>
                <FieldLegend>Morse to Text</FieldLegend>
                <FieldDescription>
                  Convert Morse code back into readable text.
                </FieldDescription>
              </div>
              <Button variant="destructive" onClick={clearMorseToText}>
                Clear Field
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Field className="flex-1">
                <FieldLabel>Morse Code</FieldLabel>
                <Textarea
                  placeholder="Enter Morse code (e.g. .... . .-.. .-.. ---)"
                  value={morseInput}
                  onChange={(e) => setMorseInput(e.target.value)}
                  className="min-h-60"
                />
                <Button
                  onClick={handleMorseToText}
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
