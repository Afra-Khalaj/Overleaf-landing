"use client";

import React from "react";
import LandingAboutCard from "../LandingAboutCard/LandingAboutCard";
// import rocket from "/icons/rocket.svg";
// import users from "/icons/users.svg";
// import compile from "/icons/redo.svg";
// import language from "/icons/language.svg";

const LandingAbout = () => {
  // const isRTL = document?.documentElement?.lang === "fa";
  const isRTL = true;

  return (
    <div className="flex justify-center">
      <div
        className="h-[80vh] mt-60 w-full p-24 bg-cover bg-center shadow-inner"
        style={{
          backgroundImage: isRTL
            ? `url('/background-green-grey-rtl.png')`
            : `url('/background-green-grey.png')`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 className="text-neutral text-4xl font-bold mb-14">
          چرا پلتفرم ما؟
        </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // Two equal columns
            gap: "20px",
            justifyItems: "center",
          }}
        >
          <LandingAboutCard
            icon={<img src={"/icons/rocket.svg"} alt="Rocket Icon" />}
            title={"بدون پیچیدگی، فقط شروع کن!"}
            desc={
              "رابط کاربری ما ساده و مینیمال طراحی شده تا بدون نیاز به آموزش خاصی، سریع وارد پروژه‌ات بشی. همه چیز دم‌دست و قابل فهمه."
            }
          />
          <LandingAboutCard
            icon={<img src={"/icons/users.svg"} alt="Users Icon" />}
            title={"همکاری آسان، تا ۱۰ نفر همزمان"}
            desc={
              "با قابلیت مشارکت هم‌زمان تا ۱۰ نفر در یک پروژه، دیگه نیازی به ارسال فایل و هماهنگ‌کردن نسخه‌ها نداری. همه‌چی در لحظه سینک میشه."
            }
          />
          <LandingAboutCard
            icon={<img src={"/icons/redo.svg"} alt="Compile Icon" />}
            title={"بدون نگرانی از محدودیت کامپایل"}
            desc={
              "هر چقدر که خواستی بنویس، بدون محدودیت جدی در تعداد یا زمان کامپایل پروژه‌ات. مناسب برای پروژه‌های بزرگ یا پایان‌نامه‌های سنگین."
            }
          />
          <LandingAboutCard
            icon={<img src={"/icons/language.svg"} alt="Language Icon" />}
            title={"فارسی، از ابتدا تا انتها"}
            desc={
              "پشتیبانی کامل از نوشتار راست‌به‌چپ، فونت‌های فارسی، و قالب‌های آماده‌ی موردنیاز برای نگارش پایان‌نامه، مقاله یا پروژه‌های دانشگاهی به زبان فارسی."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
