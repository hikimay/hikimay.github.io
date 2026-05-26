---
author: Yasunari Hikima
pubDatetime: 2026-05-26T03:17:11
modDatetime: 2026-05-26T03:17:11
title: Introducing KaTeX in Astro
id: introduce-katex
featured: false
draft: false
tags:
    - katex
    - astro
description: Introducing KaTeX in Astro.
---

[Astro](https://astro.build/) では，このエントリーのような post を `markdown` ファイルで作成することができますが，デフォルトでは `LaTeX` 記法を用いることができません（そのままブラウザ上で表示されてしまいます）．
そこで，本エントリーでは JavaScript のライブラリ `KaTeX` を用いてブラウザ上で数式を表示できるようにするための方法について記しておきたいと思います．

最初は生成 AI を用いて解決を試みたのですが，調べてみたところ先行記事がありましたので，本エントリーは以下の記事を大いに参考にしています：

- [Adding LaTeX Equations in AstroPaper blog posts](https://nostses.icu/posts/how-to-add-latex-equations-in-blog-posts/)

### 導入

1. 必要なパッケージをインストールします．

```bash
npm install rehype-katex remark-math katex
```

2. `astro.config.ts` ファイルを編集し，プラグインを導入します．

```typescript
// astro.config.ts
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  // ... 既存の設定 ...
  markdown: {
    remarkPlugins: [
      remarkMath,
    ]
    rehypePlugins: [rehypeKatex],
  },
});
```

3. `src/layouts/Layout.astro` を編集します．

```html
<!doctype html>
<!-- other settings -->
<head>
    <script is:inline src="/toggle-theme.js"></script>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css"
    />
<!-- other settings -->
```

### より便利にするための工夫

`LaTeX` におけるマクロのように，`KaTeX` でも同様の設定を行うことによって記述を簡略化することができます．
具体的には，前節のステップ 2. で編集した `astro.config.ts` にマクロを追加することができます．
このとき，エスケープのためバックスラッシュを 2 つ重ねて記述する必要があることに注意してください．

```typescript
// astro.config.ts
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  // ... 既存の設定 ...
  markdown: {
    remarkPlugins: [
      remarkMath,
    ]
    rehypePlugins: [
        rehypeKatex, {
            // マクロを定義する
            "\\calA": "\\mathcal{A}",
            "\\RR": "\\mathbb{R}"
        }
    ],
  },
});
```

### 使用例

- `$\calA$` -> $\calA$
- `$\RR$` -> $\RR$