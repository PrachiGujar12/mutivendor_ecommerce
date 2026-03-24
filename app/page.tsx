import ThemeToggle from "@/components/ui/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
   <div className="p-5">
    <div className="flex gap-x-5 justify-end">
      <UserButton />
      <ThemeToggle/>
    </div>
    <h1 className="text-blue-500">Home Page</h1>

   </div>
  );
}
