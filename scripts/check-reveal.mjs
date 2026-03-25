import puppeteer from "puppeteer-core";
import path from "path";

const chrome =
  process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : "google-chrome";

const url = process.argv[2] || "http://localhost:3099";

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ["--window-size=1280,900"],
});

const page = await browser.newPage();
await page.setViewport({
  width: 1280,
  height: parseInt(process.env.VPH || "900", 10),
});
await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 800));

async function sample() {
  return page.evaluate(() => {
    const h2 = document.querySelector("#products h2");
    if (!h2) return { error: "no products h2" };
    let el = h2;
    const chain = [];
    while (el && chain.length < 12) {
      const style = window.getComputedStyle(el);
      const op = parseFloat(style.opacity);
      chain.push({
        tag: el.tagName,
        className: String(el.className || "").slice(0, 80),
        opacity: style.opacity,
      });
      if (op < 0.99) {
        return { stuck: true, chain };
      }
      el = el.parentElement;
    }
    return { stuck: false, chain };
  });
}

console.log("before scroll", await sample());
for (const y of [1200, 2400, 4000, 6000]) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await new Promise((r) => setTimeout(r, 400));
  const s = await sample();
  console.log("scroll y=" + y, s.stuck ? s.chain?.[2] : "ok");
}
console.log("final", await sample());

const png = path.join(process.cwd(), "scripts", "after-scroll.png");
await page.screenshot({ path: png, fullPage: false });
console.log("screenshot", png);

await browser.close();
