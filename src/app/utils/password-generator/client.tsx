"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Copy, RefreshCw, Check } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Field, FieldLabel, FieldSet } from "@/components/ui/field";

export default function PasswordGeneratorClient() {
  const [length, setLength] = useState(12);

  // ✅ Charset toggles
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  // ✅ Editable charsets
  const [lowercaseCharset, setLowercaseCharset] = useState(
    "abcdefghijklmnopqrstuvwxyz"
  );
  const [uppercaseCharset, setUppercaseCharset] = useState(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  );
  const [numberCharset, setNumberCharset] = useState("0123456789");
  const [symbolCharset, setSymbolCharset] = useState("!@#$%^&*()_+{}[]<>?/|");

  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  // ✅ Generate password based on dynamic charset values
  const generatePassword = () => {
    let charset = lowercaseCharset;
    if (includeUppercase) charset += uppercaseCharset;
    if (includeNumbers) charset += numberCharset;
    if (includeSymbols) charset += symbolCharset;

    if (!charset) return setPassword("");

    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPasswordStrength = (): {
    label: string;
    variant: "destructive" | "outline" | "default" | "secondary";
  } => {
    let strength = 0;
    if (length >= 12) strength++;
    if (length >= 16) strength++;
    if (includeUppercase) strength++;
    if (includeNumbers) strength++;
    if (includeSymbols) strength++;

    if (strength <= 2) return { label: "Weak", variant: "destructive" };
    if (strength <= 3) return { label: "Fair", variant: "outline" };
    if (strength <= 4) return { label: "Good", variant: "secondary" };
    return { label: "Strong", variant: "default" };
  };

  const strength = getPasswordStrength();

  return (
    <Card className="w-full max-w-md drop-shadow-lg">
      <CardHeader className="gap-y-3 pb-6 flex flex-col items-center text-center">
        <CardTitle className="text-2xl md:text-3xl font-bold">
          Password Generator
        </CardTitle>
        <CardDescription>
          Create strong, secure passwords with custom options
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Password display */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Generated Password</Label>
          <div className="flex gap-2">
            <Input
              readOnly
              value={password}
              placeholder="Click generate to create password"
              className="font-mono text-sm"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={copyToClipboard}
              disabled={!password}
              title="Copy to clipboard"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Length slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-medium">Password Length</Label>
            <Badge variant={strength.variant}>
              {length} characters • {strength.label}
            </Badge>
          </div>
          <Slider
            value={[length]}
            onValueChange={(value) => setLength(value[0])}
            min={4}
            max={64}
            step={1}
          />
          <div className="flex justify-between text-xs">
            <span>4</span>
            <span>64</span>
          </div>
        </div>

        {/* Charset configuration */}
        <FieldSet className="pt-2">
          {/* ✅ Lowercase (always included) */}
          <Field>
            <FieldLabel
              htmlFor="lowercase"
              className="cursor-pointer font-medium"
            >
              Lowercase Letters (a-z)
            </FieldLabel>
            <Input
              id="lowercase"
              type="text"
              value={lowercaseCharset}
              onChange={(e) => setLowercaseCharset(e.target.value)}
              className="font-mono text-sm"
            />
          </Field>

          {/* ✅ Uppercase */}
          <Field>
            <div className="flex items-center justify-between px-1">
              <FieldLabel
                htmlFor="uppercase"
                className="cursor-pointer font-medium"
              >
                Uppercase Letters (A-Z)
              </FieldLabel>
              <Switch
                id="uppercase"
                checked={includeUppercase}
                onCheckedChange={setIncludeUppercase}
              />
            </div>
            <Input
              id="uppercase"
              type="text"
              disabled={!includeUppercase}
              value={uppercaseCharset}
              onChange={(e) => setUppercaseCharset(e.target.value)}
              className="font-mono text-sm"
            />
          </Field>

          {/* ✅ Numbers */}
          <Field>
            <div className="flex items-center justify-between px-1">
              <Label htmlFor="numbers" className="cursor-pointer font-medium">
                Numbers (0-9)
              </Label>
              <Switch
                id="numbers"
                checked={includeNumbers}
                onCheckedChange={setIncludeNumbers}
              />
            </div>
            <Input
              id="numbers"
              type="text"
              disabled={!includeNumbers}
              value={numberCharset}
              onChange={(e) => setNumberCharset(e.target.value)}
              className="font-mono text-sm"
            />
          </Field>

          {/* ✅ Symbols */}
          <Field>
            <div className="flex items-center justify-between px-1">
              <Label htmlFor="symbols" className="cursor-pointer font-medium">
                Symbols (!@#$%...)
              </Label>
              <Switch
                id="symbols"
                checked={includeSymbols}
                onCheckedChange={setIncludeSymbols}
              />
            </div>
            <Input
              id="symbols"
              type="text"
              disabled={!includeSymbols}
              value={symbolCharset}
              onChange={(e) => setSymbolCharset(e.target.value)}
              className="font-mono text-sm"
            />
          </Field>
        </FieldSet>
      </CardContent>

      <CardFooter className="pt-2">
        <Button
          onClick={generatePassword}
          className="w-full h-11 text-base font-semibold"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Generate Password
        </Button>
      </CardFooter>
    </Card>
  );
}
