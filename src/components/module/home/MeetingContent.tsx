import { Calendar, Clock, Globe, Video } from "lucide-react";
import MeetingForm from "./MeetingForm";

const MeetingContent = () => {
  const consultancyDetails = [
    { label: "1 Hours FREE Consultancy", icon: Clock },
    {
      label: "Web conferencing details provided upon confirmation.",
      icon: Video,
    },
    { label: "16:30 - 17:30, Friday, September 18, 2025", icon: Calendar },
    { label: "Central Australia Time Zone", icon: Globe },
  ];

  const highlightPhrases = ["FREE Consultancy"];

  const highlightText = (text: string) => {
    const regex = new RegExp(`(${highlightPhrases.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      highlightPhrases.some(
        (phrase) => phrase.toLowerCase() === part.toLowerCase()
      ) ? (
        <span key={i} className="font-bold text-[#0061FF]">
          {part}
        </span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div className="bg-white rounded-[24px] grid grid-cols-5">
      <div className="col-span-2 p-10 border-r border-[#0000001A]">
        <p className="text-neutral-500 mb-1">Meeting Agenda</p>
        <h3 className="text-neutral-700 font-semibold font-chopin text-4xl leading-[48px]">
          Seo’Cafe Instagram Engagement Planning
        </h3>
        <div className="mt-8 space-y-4">
          {consultancyDetails.map((item, index) => (
            <p
              key={index}
              className="flex items-center gap-x-2 text-neutral-500 font-semibold"
            >
              <item.icon size={20} />
              {highlightText(item.label)}
            </p>
          ))}
        </div>
      </div>
      <div className="col-span-3 p-10">
        <p className="text-neutral-700 text-xl font-bold">Enter Details</p>
        <MeetingForm />
      </div>
    </div>
  );
};

export default MeetingContent;
