# Café Lumière — おしゃれカフェLP

このプロジェクトは、指定の配色（スクリーンショット参照）を反映したランディングページです。

## カラーパレット
- Background: `#ffffff`
- Headline/Stroke: `#272343`
- Paragraph: `#2d334a`
- Button/Highlight: `#ffd803`
- Secondary: `#e3f6f5`
- Tertiary: `#bae8e8`

CSSでは`styles.css`のCSS変数として定義しています。

## 構成
- `index.html` — ページ本体
- `styles.css` — スタイル（配色・レイアウト・アニメーション）
- `script.js` — モバイルナビ、スムーススクロール、フッター年号

## 使い方
1. 任意の静的サーバで開くか、`index.html`を直接ブラウザで開いてください。
2. 画像はダミーのプレースホルダーです。`#gallery .ph`や`.map-ph`を実画像や地図埋め込みに差し替えてください。

## カスタマイズ
- 色の調整は`:root`内のCSS変数を書き換えるだけで全体に反映されます。
- フォントは Google Fonts の `Inter` と `Playfair Display` を使用しています。
