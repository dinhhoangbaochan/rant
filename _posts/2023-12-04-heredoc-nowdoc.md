---
layout: post
title: "Heredoc và Nowdoc trong PHP"
date: 2023-11-28
categories: [coding-notes]
tags: [php]
author: Chan Dinh
excerpt: "Phân biệt Heredoc và Nowdoc trong PHP"
---

Heredoc và Nowdoc là hai cách để định nghĩa các chuỗi đa dòng (multiline strings) trong PHP. Hai kĩ thuật này được dùng để xử lý cách string mà bạn muốn escape những ký tự như ngoặc đơn (') hoặc hoặc kép ("). Ngoài ra, đối với Heredoc thì bạn còn có thể inject biến vào bên trong chuỗi.

## Heredoc

- Heredoc cho phép bạn định nghĩa một multiple lines string bắt đầu bằng <<< và đi liền sau đó là một label / identifier. Label này (hoặc identifier này) phải unique (không trùng).
- Heredoc có thể escape character.
- Heredoc có thể render value của biến.
- Heredoc thường được dùng khi bạn muốn hiển thị value của biến hoặc render HTML bên trong một string.

Ví dụ:

```PHP
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
- Nowdoc thường được dùng khi bạn 

Ví dụ:
```PHP
$htmlCode = <<<'HTML'
<div>
    Đây là ví dụ về Nowdoc.
</div>
HTML;
```

