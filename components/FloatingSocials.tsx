"use client";
export default function FloatingSocials() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "263771234567";
  const fb =
    process.env.NEXT_PUBLIC_FACEBOOK_URL ||
    "https://www.facebook.com/share/1FCqpgn6wW/?mibextid=wwXIfr";
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={fb}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit ManyGraphix on Facebook"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#1877F2] text-white shadow-lg transition hover:-translate-y-1 hover:scale-105"
      >
        <i className="fa-brands fa-facebook text-2xl" aria-hidden="true" />
      </a>
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with ManyGraphix on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:-translate-y-1 hover:scale-105"
      >
        <i className="fa-brands fa-whatsapp text-2xl" aria-hidden="true" />
      </a>
    </div>
  );
}
