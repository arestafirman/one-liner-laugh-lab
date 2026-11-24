import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Laugh Lab — the excuse a machine gives.
// A real-morning incident, dramatized: the office coffee machine did its
// job perfectly, in exactly the way that defeated the job.
const line =
  "The office coffee machine apologized for my missed 09:00 deadline: it brewed my espresso perfectly, then poured it into the drip tray to keep the cup spotless.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
