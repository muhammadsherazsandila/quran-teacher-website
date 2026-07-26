"use client";
/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalComBookingForm() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "test-for-quran-teacher-website",
      });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <Cal
      namespace="test-for-quran-teacher-website"
      calLink="muhammad-sheraz-bglt4x/test-for-quran-teacher-website"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}
