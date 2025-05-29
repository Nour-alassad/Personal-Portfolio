import emailjs from "emailjs-com";

const sendVisitNotification = async (visitorData = {}) => {
  // Validate environment variables
  if (
    !import.meta.env.VITE_SERVICE_ID ||
    !import.meta.env.VITE_PUBLIC_KEY ||
    !import.meta.env.VITE_TEMPLATE_2_ID
  ) {
    throw new Error("EmailJS credentials missing in environment variables");
  }

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_2_ID,
      {
        to_email: "anour5832@example.com", // Your receiving email
        visitor_name: "Portfolio Website", // Default name
        subject: "New Website Visit Notification", // Email subject
        message: "A visitor has accessed your website.", // Main message
        visit_time: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      },
      import.meta.env.VITE_PUBLIC_KEY
    );

    console.log(
      "Visit notification sent successfully:",
      response.status,
      response.text
    );
    return true;
  } catch (error) {
    console.error("Failed to send notification:", error);
    return false;
  }
};

export default sendVisitNotification;
