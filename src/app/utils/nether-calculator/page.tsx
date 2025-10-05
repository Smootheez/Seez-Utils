import Footer from "@/components/footer";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NetherCalculatorClient from "./client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nether Calculator | Seez Utils",
  description:
    "Convert Minecraft coordinates between the Overworld and Nether. Optimize portal placement and travel efficiency.",
  keywords: [
    "Minecraft Nether calculator",
    "Nether portal coordinates",
    "Overworld to Nether conversion",
    "Minecraft travel distance",
    "Nether portal optimization",
    "Minecraft utilities",
    "Seez Utils",
  ],
};

export default function NetherCalculatorPage() {
  return (
    <main className="px-4">
      <div className="flex items-center justify-center min-h-screen py-8">
        <Card className="max-w-2xl w-full drop-shadow-lg/30">
          <Tabs defaultValue="overworld">
            <CardHeader>
              <CardTitle className="mb-2">
                <h2 className="text-3xl font-bold text-center">
                  Nether Calculator
                </h2>
              </CardTitle>

              <TabsList className="w-full">
                <TabsTrigger value="overworld">Overworld</TabsTrigger>
                <TabsTrigger value="nether">Nether</TabsTrigger>
              </TabsList>
            </CardHeader>

            {/* 👇 Client-side interactive part */}
            <NetherCalculatorClient />

            <CardFooter className="text-left flex flex-col items-start bg-accent m-4 rounded-lg p-4">
              <h4 className="text-lg font-semibold">Description</h4>
              <p className="text-sm text-muted-foreground text-justify">
                The Nether Calculator helps you convert coordinates between the
                Overworld and the Nether in Minecraft. For every 8 blocks you
                travel in the Overworld, you only travel 1 block in the Nether.
                Use this tool to easily find corresponding locations!
              </p>
            </CardFooter>
          </Tabs>
        </Card>
      </div>

      <Footer />
    </main>
  );
}
