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
import { Copy, RefreshCw, Check, Shield } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

export default function PasswordGeneratorClient() {
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    let charset = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+{}[]<>?/|";

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

  const getPasswordStrength = (): { label: string; variant: "destructive" | "outline" | "default" | "secondary" } => {
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
        <CardTitle className="text-2xl md:text-3xl font-bold">Password Generator</CardTitle>
        <CardDescription>
          Create strong, secure passwords with custom options
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Generated Password Display */}
        <div className="space-y-2">
          <Label className="text-sm font-medium">Generated Password</Label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                readOnly
                value={password}
                placeholder="Click generate to create password"
                className="font-mono text-sm"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={copyToClipboard}
              disabled={!password}
              className="shrink-0"
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

        {/* Password Length Slider */}
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
            max={32}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs">
            <span>4</span>
            <span>32</span>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between py-2 px-1 rounded-lg">
            <Label htmlFor="uppercase" className="cursor-pointer font-medium">
              Uppercase Letters (A-Z)
            </Label>
            <Switch
              id="uppercase"
              checked={includeUppercase}
              onCheckedChange={setIncludeUppercase}
            />
          </div>

          <div className="flex items-center justify-between py-2 px-1 rounded-lg">
            <Label htmlFor="numbers" className="cursor-pointer font-medium">
              Numbers (0-9)
            </Label>
            <Switch
              id="numbers"
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
            />
          </div>

          <div className="flex items-center justify-between py-2 px-1 rounded-lg">
            <Label htmlFor="symbols" className="cursor-pointer font-medium">
              Symbols (!@#$%...)
            </Label>
            <Switch
              id="symbols"
              checked={includeSymbols}
              onCheckedChange={setIncludeSymbols}
            />
          </div>
        </div>
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
