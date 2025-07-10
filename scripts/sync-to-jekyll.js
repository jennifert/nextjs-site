const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.resolve(__dirname, "../pages/blog");
const JEKYLL_SITE_DIR = path.resolve(__dirname, "../../jekyll-site");
const JEKYLL_DRAFTS_DIR = path.join(JEKYLL_SITE_DIR, "_drafts");
const JEKYLL_POSTS_DIR = path.join(JEKYLL_SITE_DIR, "_posts");

if (!fs.existsSync(JEKYLL_DRAFTS_DIR)) fs.mkdirSync(JEKYLL_DRAFTS_DIR, { recursive: true });

const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".js"));

const jekyllDrafts = new Set(
  fs.existsSync(JEKYLL_DRAFTS_DIR)
    ? fs.readdirSync(JEKYLL_DRAFTS_DIR).map(f => f.replace(/\.md$/, ""))
    : []
);

const jekyllPosts = new Set(
  fs.existsSync(JEKYLL_POSTS_DIR)
    ? fs.readdirSync(JEKYLL_POSTS_DIR).map(f => f.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, ""))
    : []
);

blogFiles.forEach(file => {
  const base = file.replace(/\.js$/, "");
  if (jekyllDrafts.has(base) || jekyllPosts.has(base)) return;

  const filePath = path.join(BLOG_DIR, file);
  const content = fs.readFileSync(filePath, "utf8");

  // Try to detect JSX — allow Layout + h1 or main
  const hasJSX = content.includes("<Layout") || content.includes("<main") || content.includes("<h1");
  if (!hasJSX) {
    console.warn(`❌ Skipped ${file}: No JSX layout or heading found.`);
    return;
  }

  // Extract metadata if possible
  const titleMatch = content.match(/title:\s*["'`](.*?)["'`]/);
  const dateMatch = content.match(/date:\s*["'`](.*?)["'`]/);
  const tagsMatch = content.match(/tags:\s*\[(.*?)\]/);

  const title = titleMatch ? titleMatch[1] : base;
  const date = dateMatch ? dateMatch[1] : new Date().toISOString().slice(0, 10);
  const tags = tagsMatch
    ? tagsMatch[1]
        .split(",")
        .map(tag => tag.trim().replace(/^["']|["']$/g, ""))
    : [];

  const frontmatter = `---
title: "${title}"
date: ${date}
tags:
${tags.map(t => `  - ${t}`).join("\n")}
---`;

  // Dump entire JSX body into the Markdown file
  const outputPath = path.join(JEKYLL_DRAFTS_DIR, `${base}.md`);
  fs.writeFileSync(outputPath, `${frontmatter}\n\n${content}`);
  console.log(`✅ Synced: ${file} → _drafts/${base}.md`);
});