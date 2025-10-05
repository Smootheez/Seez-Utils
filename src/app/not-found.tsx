import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen text-shadow-sm flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold mb-3">404 - Page Not Found</h1>
      <div className="text-muted-foreground text-center mb-4">
        <p>Opps! The page doesn't seem to be exist.</p>
        <p>I think you should go back to the homepage.</p>
      </div>
      <Button variant={"outline"} asChild>
        <Link href="/">Go Back</Link>
      </Button>
    </div>
  );
}
