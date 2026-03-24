import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/shared/theme-toggle";
import Image from "next/image";

export default function Home() {
  return (
   <div className="p-5">
    <div className="flex justify-end">
      <ThemeToggle/>
    </div>
    <h1 className="font-barlow">Welcome to our course !</h1>
    <Button variant="destructive">Click Me</Button>

   </div>
  );
}
