---
title: "Hello Chandinh Devlog #1: Build lại từ đầu"
date: 2024-08-20
categories: [devlog]
tags: [hello-chandinh]
author: Chan Dinh
gravatar: 40c375c9dbbfb6beda5e637079b7341dd87c1f29763338f37fea5b3cfb7d98e8
description: Build lại cái blog này từ đầu
---

Tối hôm qua, tui chính thức bắt đầu viết devlog / devjournal cho cái tựa game của tui. Tuy nhiên viết cái blog thì thấy khó chịu quá vì không ưng cái blog đang xài. Vậy nên tui quyết định là tui sẽ rebuild cái blog này lại.

---

## Tóm tắt nhanh

Tui sẽ build lại cái blog này bằng JavaScript. JavaScript thuần nhé, không có dùng library hay framework gì hết, mà chúng ta sẽ làm mọi thứ từ đầu. Stack thì đơn giản là JavaScript thuần, HTML CSS thôi. Tuy nhiên là bước đầu thì chắc là chúng ta sẽ ngâm cứu để làm một cái static site generator tương tự như cái VitePress mà tui đang dùng để viết cái blog này.

## Design & feature

Cũng không cần tốn quá nhiều suy nghĩ về phần này. Ban đầu khi build cái blog này, vì muốn nhanh nên tui đã copy toàn bộ layout blog của VueJS là [The Vue Point](https://blog.vuejs.org/). Vậy nên giờ rebuild lại, chúng ta cũng sẽ cố gắng build lại mọi thứ tương tự như cái blog đó.

## Structure

Chúng ta sẽ có một thư mục chính là `public`, chứa toàn bộ code đã được generated ra. Thư mục code sẽ nằm ở trong `src`, trong khi các bài viết sẽ được viết dưới dạng markdown files sẽ nằm trong `posts`. Structure đơn giản, gần tương tự VitePress (còn làm sao thì chưa biết). Đại khái thì nó như này:

- hello-chandinh
  - public
    - assets
    - favicon.ico
    - index.html
    - posts
  - src
    - main.js
    - // Tất cả các file js khác.
  - posts
    - post.md
    - // Tất cả các bài viết dưới dạng markdown.

Trước mắt thì như này, bắt tay vào làm tới đâu tui sửa tới đó. Tui đã tạo một nhánh mới trên cái repo này tên là `feature/rebuild-blog` và sẽ push toàn bộ code lên trển. Bạn không chê code như cái con c... thì cứ vô tư mà vào xem. 

## Bắt tay vào làm, mà làm gì tiếp ta?

Rồi giờ thì bắt tay vào làm. Viết tới dòng này, mở VS Code lên, tự hỏi "Ủa mà giờ làm gì tiếp ta?"... 

Đói thì phải ăn, yêu thì phải nói, không hiểu thì phải search. Chúng ta bắt đầu từ search Google trước nhé. Cầm nguyên cái từ khoá `how to build a blog with native javascript` này vứt lên Google trước thử xem sao.
