import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";

export function Calendar() {
  const [iframeHeight, setIframeHeight] = useState("700px"); // Default height for larger screens

  useEffect(() => {
    function handleResize() {
      // Adjust height based on window width
      if (window.innerWidth < 768) {
        setIframeHeight("500px"); // Change height for smaller screens
      } else if (window.innerWidth < 480) {
        setIframeHeight("400px"); // Change height for even smaller screens
      } else {
        setIframeHeight("700px"); // Default height for larger screens
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial height on component mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="mt-8">
      <div className="container mx-auto mb-16 text-center">
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "0 auto",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            border: "10px solid #E5E7EB",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://calendar.google.com/calendar/embed?src=ce386e3334ee48d93433437aa4476055898942f72ba91aeaf57527ed208e4123%40group.calendar.google.com&ctz=America%2FNew_York"
            style={{
              width: "100%",
              height: iframeHeight,
              border: "0",
            }}
            title="Google Calendar"
            loading="lazy"
            className="responsive-calendar"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Calendar;
