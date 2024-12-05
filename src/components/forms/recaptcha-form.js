"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ArrowDashIcon from "../icons/arrow-dash-icon";

const RecaptchaForm = ({ isSubmitting }) => {
  const recaptchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);
  async function handleCaptchaSubmission(token) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        console.log({ token });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }
  return (
    <div className="col-span-full">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        ref={recaptchaRef}
        onChange={handleChange}
        onExpired={handleExpired}
      />
      {/* <button
        className="p-2 text-white bg-blue-500 border-gray-300 border-solid rounded-md border-1 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
        type="submit"
        disabled={!isVerified}
      >
        Submit Form
      </button> */}
      <button
        type="submit"
        className={`bg-[#01AB9D] text-white flex items-center ${
          !isSubmitting ? "justify-between" : "justify-center"
        } max-sm:justify-center max-sm:gap-3 max-sm:p-1.5 w-44 max-sm:w-full rounded-md p-3 mt-5`}
        disabled={!isVerified}
      >
        {!isSubmitting ? (
          <>
            <span className="text-lg font-bold max-sm:text-sm">إرسال</span>
            <ArrowDashIcon className="max-sm:size-4" />
          </>
        ) : (
          <span className="border-t border-r border-white rounded-full size-4 animate-spin" />
        )}
      </button>
    </div>
  );
};

export default RecaptchaForm;
