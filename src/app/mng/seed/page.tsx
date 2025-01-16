"use client";
import { seedEvents } from "@/app/actions/seedEvents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function SeedPage() {
  const { toast } = useToast();
  const [pass, setPass] = useState("");
  const seedAllEvents = async () => {
    const result = await seedEvents(pass);
    if (result) {
      toast({
        variant: "default",
        title: "Success!",
        description: "Events seeded nicely",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Seeding events failed",
      });
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col gap-4 max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Input
          type="text"
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter password"
        />
        <Button variant="default" onClick={seedAllEvents}>
          Seed Events
        </Button>
      </div>
    </div>
  );
}
