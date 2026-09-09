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
    margin: "-100px",
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(value * eased));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
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
      className="border-t border-white/10 px-6 py-32 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
            01 / Impact
          </p>

          <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-5xl font-semibold tracking-[-0.04em] text-white md:text-7xl">
              Numbers that matter<span className="text-white/20">.</span>
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/40">
              Engineering work measured through performance, quality, automation
              and operational impact.
            </p>
          </div>
        </motion.div>

        {/* Metrics */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
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
              className="group relative bg-[#050505] p-7 transition duration-500 hover:bg-white/[0.025] md:p-8"
            >
              {/* Hover accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-[var(--accent)] transition-all duration-500 group-hover:w-full" />

              <span className="font-mono text-[10px] text-white/20">
                0{index + 1}
              </span>

              <div className="mt-12">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                  <AnimatedNumber
                    value={metric.value}
                    suffix={metric.suffix}
                    prefix={metric.prefix}
                  />
                </p>

                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  {metric.label}
                </p>

                <p className="mt-4 text-xs leading-relaxed text-white/30">
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
