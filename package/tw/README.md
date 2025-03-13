## tw&nextjs example
- 主题切换
- 字体&排版？
- 静态资源文件
  - SVG
  - 字体
  - 图片
- 元数据
  - https://nextjs.org/docs/app/getting-started/project-structure#metadata-file-conventions
  - app icon
  - https://nextjs.org/docs/app/getting-started/project-structure#seo
  - SEO 相关的文件（sitemap & robots）
  - https://nextjs.org/docs/app/building-your-application/optimizing/metadata#static-metadata
  - 元数据添加的两种方式
- 远程图片，需要配置 hostname: https://nextjs.org/docs/app/getting-started/images-and-fonts#remote-images
- 字体：使用 next/font  减少布局偏移
  - 尽量使用 variable fonts 字体（字体需要支持），如果不是可变字体，需要自己指定粗细
  - 字体加载+tailwindcss https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css
  - tailwindcss 中的字体 https://tailwindcss.com/docs/font-family
TODO: 字体排版 DEMO