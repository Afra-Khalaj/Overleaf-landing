import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const WelcomeDiv = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold font-title mb-10">
        {/* Start Writing with <span className="text-primary">LaTeX</span>: Powerful
        and Simple  */}
        یک جایگزین ساده و قدرتمند برای{" "}
        <span className="text-primary">Overleaf</span>
      </h1>
      {/* <div>
        یک جایگزین ساده و قدرتمند برای Overleaf پلتفرم ما برای نگارش و همکاری در
        پروژه‌های LaTeX طراحی شده تا ساده، روان، و بدون دردسر باشه — مخصوصا برای
        کاربران فارسی‌زبان.
      </div> */}
      <p className="w-9/12 text-center font-body text-xl font-medium leading-loose">
        پلتفرم ما برای نگارش و همکاری در پروژه‌های LaTeX طراحی شده تا ساده،
        روان، و بدون دردسر باشه، مخصوصا برای کاربران فارسی‌زبان.
      </p>
      {/* <div>
        🌐 بدون تحریم، همیشه در دسترس بر خلاف Overleaf، نیازی به VPN و دغدغه
        تحریم نیست. پلتفرم ما به‌طور کامل برای کاربران داخل ایران قابل
        استفاده‌ست — همیشه و همه‌جا. 👥 همکاری آسان، تا ۱۰ نفر همزمان با قابلیت
        مشارکت هم‌زمان تا ۱۰ نفر در یک پروژه، دیگه نیازی به ارسال فایل و
        هماهنگ‌کردن نسخه‌ها نداری. همه‌چی در لحظه سینک میشه. 🧠 بدون نگرانی از
        محدودیت کامپایل هر چقدر که خواستی بنویس، بدون محدودیت جدی در تعداد یا
        زمان کامپایل پروژه‌ات. مناسب برای پروژه‌های بزرگ یا پایان‌نامه‌های
        سنگین. 🇮🇷 فارسی، از ابتدا تا انتها پشتیبانی کامل از نوشتار راست‌به‌چپ،
        فونت‌های فارسی، و قالب‌های آماده‌ی موردنیاز برای نگارش پایان‌نامه، مقاله
        یا پروژه‌های دانشگاهی به زبان فارسی.
      </div> */}
      <video className="w-full max-w-4xl my-10 rounded-md" autoPlay loop muted>
        <source src="/gifs/editor-pdf-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="w-9/12 text-center font-body text-xl font-medium leading-loose">
        چرا پلتفرم ما؟ <br /> 🚀 بدون پیچیدگی، فقط شروع کن! رابط کاربری ما ساده
        و مینیمال طراحی شده تا بدون نیاز به آموزش خاصی، سریع وارد پروژه‌ات بشی.
        همه چیز دم‌دست و قابل فهمه.
      </p>
      <p className="w-9/12 text-center font-body text-xl font-medium leading-loose">
        👥 همکاری آسان، تا ۱۰ نفر همزمان با قابلیت مشارکت هم‌زمان تا ۱۰ نفر در
        یک پروژه، دیگه نیازی به ارسال فایل و هماهنگ‌کردن نسخه‌ها نداری. همه‌چی
        در لحظه سینک میشه.
      </p>
      <p className="w-9/12 text-center font-body text-xl font-medium leading-loose">
        🧠 بدون نگرانی از محدودیت کامپایل هر چقدر که خواستی بنویس، بدون محدودیت
        جدی در تعداد یا زمان کامپایل پروژه‌ات. مناسب برای پروژه‌های بزرگ یا
        پایان‌نامه‌های سنگین.
      </p>
      <p className="w-9/12 text-center font-body text-xl font-medium leading-loose">
        🇮🇷 فارسی، از ابتدا تا انتها پشتیبانی کامل از نوشتار راست‌به‌چپ، فونت‌های
        فارسی، و قالب‌های آماده‌ی موردنیاز برای نگارش پایان‌نامه، مقاله یا
        پروژه‌های دانشگاهی به زبان فارسی.
      </p>
      <h3 className="text-2xl font-bold font-title mb-5">به ما بپیوندید!</h3>
      <PrimaryButton
        className="text-[23px] px-10 w-48 mt-7"
        href="https://dev.latex.hpc.ipm.ac.ir"
      >
        شروع کنید
      </PrimaryButton>
    </div>
  );
};

export default WelcomeDiv;
