import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "See you again soon ",
    });
    setTimeout(() => navigate("/"), 1000);
  };

  const handleGenerate = () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a prompt to generate an image",
        description: "Try describing what you want to see!",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    toast({
      title: "Generating...",
      description: `Creating: "${prompt}"`,
    });

    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Image generated!",
        description: `Your new artwork for "${prompt}" is ready `,
      });
      setPrompt("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 flex flex-col">
      {/* --- Header Bar --- */}
      <header className="flex justify-end items-center p-2 bg-white/60 shadow-sm backdrop-blur-md">
        <Button variant="ghost" className="mr-4">
          <User className="w-5 h-5 mr-1" />
          Account
        </Button>
        <Button variant="ghost" onClick={handleLogout}>
          <LogOut className="w-5 h-5 mr-1" />
          Logout
        </Button>
      </header>

      {/* --- Main Content --- */}
      <main className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-9xl font-semibold mb-6">V I S U R A</h1>

        {/* --- Prompt Input Field --- */}
        <div className="flex gap-1 mb-6 w-full max-w-md">
          <Input
            type="text"
            placeholder="Describe your image idea..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 border-gray-300 focus-visible:ring-grey-400"
          />
        </div>

        {/* --- Generate Button --- */}
        <Button
          onClick={handleGenerate}
          disabled={loading}
          className="px-8 py-4 text-lg"
          
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
