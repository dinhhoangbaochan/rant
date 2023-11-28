---
layout: post
title: "Cách clone source git từ một branch riêng biệt"
date: 2023-11-28
categories: [Coding Notes]
tags: [git]
author: Chan Dinh
excerpt: "Embarking on a new journey can be exhilarating and daunting. Join me as I explore new horizons and share my experiences."
---

Thông thường, khi clone source từ một repository về với lệnh `git clone repo-url`, bạn sẽ clone toàn bộ branch cũng như tags của remote repository về. Tuy nhiên, sẽ có một số trường hợp bạn chỉ cần clone một nhánh cụ thể nào đó về. Vậy đối với những trường hợp như vậy, bạn có thể sử dụng thông qua syntax:

```git
git clone --single-branch --branch [branch-name] [repo-url]
```

Ví dụ:

```git
git clone --single-branch --branch develop https://github.com/dinhhoangbaochan/hello-chandinh.git
```

Khi này, repo bạn clone về chỉ bao gồm toàn bộ file code của branch develop.
