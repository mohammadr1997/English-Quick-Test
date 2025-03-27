import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Policy",
};
const Page = () => {
  return (
    <section className="text-base md:text-2xl px-4  mt-1 text-center ">
      <h2 className="mt-1 mb-2 font-bold text-lg md:text-4xl">
        Privacy Policy for Quick English Test
      </h2>
      At Quick English Test, your privacy is of paramount importance to us. This
      Privacy Policy outlines the types of personal information we collect, how
      it is used, and the measures we take to protect it.
      <h4 className="mt-1 mb-2 font-bold text-base md:text-3xl">
        1. Information We Collect
      </h4>
      We collect personal information when you visit our website or use our
      services. This may include: Personal Identifiable Information (PII): When
      you sign up for an account, we may collect your name, email address, and
      other relevant details. Usage Data: We may collect data on how you use the
      website, including pages viewed, time spent on the site, and any
      interactions with the platform. Cookies and Tracking Technologies: We use
      cookies to enhance your user experience. These cookies help us remember
      your preferences and track your progress during tests.
      <h4 className="mt-1 mb-2 font-bold text-base md:text-3xl">
        2. How We Use Your Information
      </h4>
      We use the collected information for the following purposes: To provide,
      personalize, and improve the Quick English Test experience. To communicate
      with you, such as sending updates, results, or other relevant information.
      To monitor and analyze usage trends to improve our services. To ensure the
      security of our platform and prevent fraudulent activities.
      <h4 className="mt-1 mb-2 font-bold text-base md:text-3xl">
        3. Data Security
      </h4>
      We take data security seriously and implement industry-standard practices
      to protect your personal information. However, please note that no method
      of transmission over the internet or electronic storage is 100% secure,
      and we cannot guarantee absolute security.
      <h4 className="mt-1 mb-2 font-bold text-base md:text-3xl">
        4. Sharing Your Information
      </h4>
      We do not sell, rent, or share your personal information with third
      parties, except in the following situations: With trusted service
      providers who assist us in operating our website and services (e.g., email
      providers, analytics tools). As required by law, such as responding to
      subpoenas, legal proceedings, or regulatory requests.
      <h4 className="mt-1 mb-2 font-bold text-base md:text-3xl">
        5. Your Rights and Choices
      </h4>
      You have the right to: Access, update, or delete your personal information
      by logging into your account. Opt out of receiving promotional emails by
      following the unsubscribe link in the email. Control the use of cookies
      through your browser settings.
    </section>
  );
};

export default Page;
