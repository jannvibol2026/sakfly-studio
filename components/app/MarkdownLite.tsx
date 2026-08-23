/**
 * Minimal markdown-to-JSX renderer supporting the subset of markdown the
 * mock AI Assistant responses use: headings, bold, italics, inline code,
 * code blocks, unordered lists, and paragraphs. Avoids pulling in a full
 * markdown dependency for this demo.
 */
function renderInline(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code class="rounded bg-white/10 px-1.5 py-0.5 text-[13px]">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong class=\"text-white\">$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

export function MarkdownLite({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/);

  return (
    <div className="space-y-3 text-sm leading-relaxed">
      {blocks.map((block, i) => {
        if (block.startsWith("```")) {
          const code = block.replace(/```[a-z]*\n?/g, "").trim();
          return (
            <pre key={i} className="overflow-x-auto rounded-xl bg-black/40 p-4 text-xs text-slate-200">
              <code>{code}</code>
            </pre>
          );
        }
        if (block.startsWith("### ")) {
          return (
            <h4 key={i} className="font-semibold text-white" dangerouslySetInnerHTML={{ __html: renderInline(block.slice(4)) }} />
          );
        }
        if (block.startsWith("## ")) {
          return (
            <h3 key={i} className="text-base font-semibold text-white" dangerouslySetInnerHTML={{ __html: renderInline(block.slice(3)) }} />
          );
        }
        if (block.split("\n").every((line) => line.trim().startsWith("- "))) {
          const items = block.split("\n").filter(Boolean);
          return (
            <ul key={i} className="list-disc space-y-1 pl-5">
              {items.map((item, j) => (
                <li key={j} dangerouslySetInnerHTML={{ __html: renderInline(item.replace(/^- /, "")) }} />
              ))}
            </ul>
          );
        }
        return <p key={i} dangerouslySetInnerHTML={{ __html: renderInline(block) }} />;
      })}
    </div>
  );
}
