@AGENTS.md

# atelier-spring — プロジェクト設定

## プロジェクト概要

アトリエ・スプリング のWebサイト。

## 技術スタック

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4（`@tailwindcss/postcss` 使用 — v3とAPIが異なる）
- アニメーション: 必要に応じてFramer Motion・GSAPを追加

## Tailwind CSS v4 注意事項

このプロジェクトはTailwind CSS v4を使用する。

- `tailwind.config.js` は不要（v4はCSS-first設定）
- `@import "tailwindcss"` をCSSファイルに記述
- `@theme` ブロックでカスタムトークンを定義
- `postcss.config.mjs` に `@tailwindcss/postcss` を使用

## Next.js 16 注意事項

Next.js 16はNext.js 15からの重大な変更を含む可能性がある。
`node_modules/next/dist/docs/` のドキュメントを参照してからコードを書くこと。

## 開発コマンド

```bash
npm run dev    # 開発サーバー起動
npm run build  # 本番ビルド
npm run lint   # Lint実行
```
