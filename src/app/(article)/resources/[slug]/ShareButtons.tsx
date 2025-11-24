"use client";

import { Copy, Facebook, Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons = ({ url, title }: ShareButtonsProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy:", err);
      toast.error("Failed to copy link");
    }
  };

  const shareToFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "width=600,height=400"
    );
  };

  const shareToInstagram = () => {
    // Instagram doesn't support direct sharing via URL, so we just open Instagram
    window.open("https://www.instagram.com/", "_blank");
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={handleCopy}
        className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
        title="Copy link"
      >
        <Copy size={20} className="text-neutral-700" />
      </button>
      <button
        onClick={shareToFacebook}
        className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
        title="Share on Facebook"
      >
        <Facebook size={20} className="text-neutral-700" />
      </button>
      <button
        onClick={shareToLinkedIn}
        className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
        title="Share on LinkedIn"
      >
        <Linkedin size={20} className="text-neutral-700" />
      </button>
      <button
        onClick={shareToInstagram}
        className="p-2 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
        title="Open Instagram"
      >
        <Instagram size={20} className="text-neutral-700" />
      </button>
    </div>
  );
};

export default ShareButtons;
