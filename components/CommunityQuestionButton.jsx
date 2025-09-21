"use client";

import { useState } from "react";
import { SignedIn } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import AddCommunityQuestionForm from "@/components/AddCommunityQuestionForm";

export default function CommunityQuestionButton({ onNewQuestion }) {
  const [open, setOpen] = useState(false);

  return (
    <SignedIn>
      {/* Floating circular button */}
      <Button
        onClick={() => setOpen(true)}
        className="fixed top-24 right-6 z-50 rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 w-14 h-14 flex items-center justify-center animate-bounce"
      >
        <Plus className="w-6 h-6 text-white" />
      </Button>

      {/* Pop-up modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Submit a Community Question</DialogTitle>
          </DialogHeader>
          <AddCommunityQuestionForm
            onNewQuestion={(q) => {
              onNewQuestion?.(q);
              setOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </SignedIn>
  );
}
