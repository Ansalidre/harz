import Image from "next/image";

interface PhoneMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
  tilt?: "left" | "right" | "none";
}

export default function PhoneMockup({ src, alt, priority, tilt = "right" }: PhoneMockupProps) {
  const tiltClass =
    tilt === "right" ? "rotate-[3deg]" : tilt === "left" ? "-rotate-[3deg]" : "";

  return (
    <div className={`relative w-[260px] sm:w-[300px] ${tiltClass}`}>
      <div className="relative aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-ink bg-ink shadow-2xl shadow-moss/40 overflow-hidden">
        {/* Camera dot */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-10 h-2.5 w-2.5 rounded-full bg-black/60 ring-2 ring-ink" />
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-top rounded-[2rem]"
          sizes="(max-width: 640px) 260px, 300px"
        />
      </div>
      {/* Soft glow behind phone */}
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-clay/20 blur-3xl" />
    </div>
  );
}
