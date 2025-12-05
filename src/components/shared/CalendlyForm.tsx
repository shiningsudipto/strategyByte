"use client";
import { useEffect } from "react";

const CalendlyForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf('calendly') === 0) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).dataLayer = (window as any).dataLayer || [];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).dataLayer.push({
          event: e.data.event,
          payload: e.data
        });
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);
  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/abda-strategybyte/free-consultation"
      style={{ minWidth: "320px", width: "100%", height: "700px" }}
    />
  );
};

export default CalendlyForm;
