import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const metrics = [
  {
    value: 900,
    suffix: "K+",
    label: "Records Processed",
    description: "Enterprise records processed through distributed pipelines.",
  },
  {
    value: 225,
    suffix: " → 4",
    label: "Days → Hours",
    description:
      "Manual processing effort reduced to approximately four hours.",
  },
  {
    value: 84,
    suffix: "%",
    label: "Test Coverage",
    description:
      "Unit and integration test coverage after engineering improvements.",
  },
  {
    value: 40,
    suffix: "%",
    prefix: "~",
    label: "Vulnerability Reduction",
    description: "Reduction in SonarQube and Snyk vulnerabilities.",
  },
];

function AnimatedNumber({
  value,
  suffix = "",
  prefix = "",
}: {
  value: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    margin: "0px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const startTime = performance.now();
    let animationFrame: number;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        // Always guarantee the exact final value.
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

function Impact() {
  return (
    <section
      id="impact"
      className="border-t border-white/10 px-5 py-18 sm:px-6 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 flex flex-col justify-between gap-4 sm:mb-14 sm:gap-6 lg:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--accent)] sm:text-xs sm:tracking-[0.3em]">
              01 / Impact
            </p>

            <h2 className="mt-4 text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:mt-5 sm:text-5xl md:text-7xl">
              Numbers that matter
              <span className="text-white/30">.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs leading-relaxed text-white/60 sm:text-sm">
            Engineering work measured through performance, quality, automation
            and operational impact.
          </p>
        </motion.div>

        {/* Metrics */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative bg-[#050505] p-5 transition duration-500 hover:bg-white/[0.025] sm:p-7 md:p-8"
            >
              {/* Hover accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

              <span className="font-mono text-[10px] text-white/40">
                0{index + 1}
              </span>

              <div className="mt-7 sm:mt-10 lg:mt-12">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  <AnimatedNumber
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                </p>

                <p className="mt-2.5 text-[9px] uppercase tracking-[0.18em] text-[var(--accent)] sm:mt-3 sm:text-[10px] sm:tracking-[0.2em]">
                  {metric.label}
                </p>

                <p className="mt-3 text-xs leading-relaxed text-white/50 sm:mt-4">
                  {metric.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact;
