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
  return (
    <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/shiningsudipto/30min?hide_gdpr_banner=1"
      style={{ minWidth: "320px", width: "100%", height: "700px" }}
    />
  );
};

export default CalendlyForm;
