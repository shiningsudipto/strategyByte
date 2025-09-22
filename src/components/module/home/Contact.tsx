import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MeetingContent from "./MeetingContent";

const Contact = () => {
  const tabData = [
    {
      title: "Schedule a Meeting",
      value: "meeting",
      content: <MeetingContent />,
    },
    {
      title: "Request a Call",
      value: "call",
      content: <p>Request</p>,
    },
  ];

  return (
    <div className="bg-yellow-200 section-gap py-40">
      <div>
        <h2 className="heading">Let’s Make it Together</h2>
        <p className="text-xl text-neutral-700 mt-4">
          We&apos;ll schedule a call to discuss your idea. After discovery
          sessions, we&apos;ll send a proposal, and upon approval, we&apos;ll
          get started.
        </p>
      </div>
      <div>
        <Tabs defaultValue="meeting">
          <ScrollArea className="3xl:my-[56px]">
            <TabsList className="mb-3 gap-1 bg-transparent">
              {tabData?.map((item, index) => {
                return (
                  <TabsTrigger
                    className="data-[state=active]:bg-neutral-700 data-[state=active]:text-white font-bold rounded-full px-5 py-3 bg-white border border-neutral-700 text-neutral-700 cursor-pointer"
                    value={item.value}
                    key={index}
                  >
                    {item.title}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {tabData?.map((content, index) => {
            return (
              <TabsContent value={content.value} key={index}>
                {content.content}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default Contact;
