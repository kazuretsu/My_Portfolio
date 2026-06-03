import { useCallback, useEffect, useState, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { portraits } from "@/data/portfolio"

export function PortraitCarousel() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayPlugin.current,
  ])

  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        scrollPrev()
      }
      if (e.key === "ArrowRight") {
        e.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  const n = portraits.length

  return (
    <div
      className="flex w-60 shrink-0 flex-col gap-3 outline-none"
      tabIndex={0}
      onKeyDown={onKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of me"
    >
      {/* Frame */}
      <div className="relative size-60 overflow-hidden rounded-2xl border border-border bg-card">
        <div className="h-full" ref={emblaRef}>
          <div className="flex h-full">
            {portraits.map((p, i) => (
              <div
                key={p.id}
                className="relative grid h-full min-w-0 flex-[0_0_100%] place-items-center bg-card"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${n}`}
              >
                {p.src ? (
                  <img
                    src={p.src}
                    alt={p.caption ?? `Portrait ${i + 1}`}
                    className="size-full object-cover"
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0 opacity-35"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, transparent 0 20px, var(--border) 20px 21px)",
                      }}
                    />
                    <div className="relative text-center text-muted-foreground">
                      <div className="text-3xl font-semibold text-foreground/50">
                        {p.id}
                      </div>
                      <div className="mt-1 text-[11px] opacity-70">
                        portrait_{p.id}.jpg
                      </div>
                    </div>
                  </>
                )}
                {p.caption && (
                  <div className="absolute bottom-2.5 left-2.5 rounded-md bg-black/55 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur">
                    {p.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Counter */}
        <div className="absolute right-2.5 top-2.5 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-white backdrop-blur-sm">
          <span className="text-primary">
            {String(selectedIndex + 1).padStart(2, "0")}
          </span>
          <span className="opacity-60">
            {" "}
            / {String(n).padStart(2, "0")}
          </span>
        </div>

        {/* Prev / Next */}
        <CarouselButton
          direction="prev"
          onClick={scrollPrev}
          label="Previous photo"
        />
        <CarouselButton
          direction="next"
          onClick={scrollNext}
          label="Next photo"
        />
      </div>

      {/* Dots */}
      <div
        className="flex justify-center gap-1.5"
        role="tablist"
        aria-label="Choose a photo"
      >
        {portraits.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className="h-1.5 rounded-full transition-all duration-250"
            style={{
              width: i === selectedIndex ? 20 : 6,
              background:
                i === selectedIndex ? "var(--primary)" : "var(--border)",
            }}
          />
        ))}
      </div>
    </div>
  )
}

function CarouselButton({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next"
  onClick: () => void
  label: string
}) {
  const Icon = direction === "prev" ? CaretLeft : CaretRight
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`absolute top-1/2 grid size-[30px] -translate-y-1/2 cursor-pointer place-items-center rounded-full border-none bg-black/55 text-white backdrop-blur transition-colors hover:bg-primary ${
        direction === "prev" ? "left-2" : "right-2"
      }`}
    >
      <Icon weight="bold" className="size-3.5" />
    </button>
  )
}
