import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "See you again soon 👋",
    });
    setTimeout(() => navigate("/"), 1000);
  };

  const handleGenerate = () => {
    setLoading(true);

    toast({
      title: "Generating...",
      description: "Your AI image is being created 🧠🎨",
    });

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Image generated!",
        description: "Your new artwork is ready 🎉",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col">
      {/* --- Header Bar --- */}
      <header className="flex justify-end items-center p-4 bg-white/60 shadow-sm backdrop-blur-md">
        <Button variant="ghost" className="mr-2">
          <User className="w-5 h-5 mr-1" />
          Account
        </Button>
        <Button variant="destructive" onClick={handleLogout}>
          <LogOut className="w-5 h-5 mr-1" />
          Logout
        </Button>
      </header>

      {/* --- Main Content --- */}
      <main className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-9xl font-semibold mb-30">V I S U R A</h1>

        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="px-6 py-3 text-lg"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="animate-spin text-xl">🌀</span>
              <span>Generating...</span>
            </div>
          ) : (
            "Generate"
          )}
        </Button>
      </main>
    </div>
  );
}
