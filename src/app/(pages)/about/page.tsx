import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "About",
};

const Page = () => {
  return (
    <section className="text-base md:text-2xl px-4 text-left mt-1 mb-2 md:mb-12">
      Welcome to Quick English Test, your go-to platform for improving your
      English skills quickly and effectively! We offer a series of carefully
      crafted tests designed to help you assess and enhance your understanding
      of English in a fast-paced, engaging way. Whether you are preparing for an
      English proficiency exam or simply looking to practice, our tests cover a
      variety of topics, from vocabulary and grammar to reading comprehension
      and writing. We focus on providing instant feedback to help you learn from
      your mistakes and track your progress. At Quick English Test, we believe
      in making learning enjoyable and accessible for everyone. Our platform is
      designed to cater to learners of all levels, from beginners to advanced
      speakers. Join us today and take your English skills to the next level
      with our easy-to-use and effective testing tools!
    </section>
  );
};

export default Page;
