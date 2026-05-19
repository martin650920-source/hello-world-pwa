# Hello World PWA

Android 可安裝的 Progressive Web App。

## 檔案結構

```
├── index.html       # 主頁面
├── manifest.json    # PWA 設定
├── sw.js            # Service Worker（離線支援）
├── icon-192.png     # App 圖示
└── icon-512.png     # App 圖示（大）
```

## 部署到 GitHub Pages

```bash
git init
git add .
git commit -m "init: hello world PWA"
git remote add origin https://github.com/YOUR_USERNAME/hello-world-pwa.git
git branch -M main
git push -u origin main
```

GitHub → Settings → Pages → Source: `main` branch → Save

## Android 安裝方式

1. 用 Chrome 開啟 `https://YOUR_USERNAME.github.io/hello-world-pwa`
2. 點畫面上的「安裝到主畫面」按鈕
3. 或 Chrome 右上角選單 →「新增到主畫面」

## 注意事項

- 必須是 **HTTPS**（GitHub Pages 預設支援）
- 建議用 **Chrome** 瀏覽器安裝
