---
layout: post
title: "Heredoc và Nowdoc trong PHP"
date: 2023-11-28
categories: [coding-notes]
tags: [php]
author: Chan Dinh
excerpt: "Cách clone một source từ một branch riêng biệt"
---

Heredoc và Nowdoc là hai cách để định nghĩa các chuỗi đa dòng (multiline strings) trong PHP. Hai kĩ thuật này được dùng để xử lý cách string mà bạn muốn escape những ký tự như ngoặc đơn (') hoặc hoặc kép ("). Ngoài ra, đối với Heredoc thì bạn còn có thể inject biến vào bên trong chuỗi.

## Heredoc

- Heredoc cho phép bạn định nghĩa một multiple lines string bắt đầu bằng <<< và đi liền sau đó là một label / identifier. Label này (hoặc identifier này) phải unique (không trùng).
- Heredoc có thể escape character.
- Heredoct có thể render value của biến.

Ví dụ:

```php
$age = 25;

$message = <<<EOD
Xin chào,
Bạn $age tuổi
EOD;

echo $message;
```

Output sẽ là:
```
Xin chào, Bạn đang 25 tuổi 
```

## Nowdoc

- Nowdoc tương tự Heredoc nhưng khác ở chỗ bạn phải wrap identifier trong một single quote (ngoặc đơn).
- Nowdoc cũng escape character nhưng không render value.
