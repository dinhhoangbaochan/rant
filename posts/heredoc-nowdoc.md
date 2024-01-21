---
title: "Heredoc và Nowdoc trong PHP"
date: 2023-12-04
categories: [coding-notes]
tags: [php]
author: Chan Dinh
gravatar: 40c375c9dbbfb6beda5e637079b7341dd87c1f29763338f37fea5b3cfb7d98e8
description: Tìm hiểu về Heredoc và Nowdoc trong PHP, khái niệm cơ bản, cách phân biệt và cách sử dụng chúng trong dự án.
---

Tìm hiểu về Heredoc và Nowdoc trong PHP, khái niệm cơ bản, cách phân biệt và cách sử dụng chúng trong dự án.

---

Heredoc và Nowdoc là hai cách để định nghĩa các chuỗi đa dòng (multiline strings) trong PHP. Hai kĩ thuật này được dùng để xử lý cách string mà bạn muốn escape những ký tự như ngoặc đơn (') hoặc hoặc kép ("). Ngoài ra, đối với Heredoc thì bạn còn có thể inject biến vào bên trong chuỗi.

## Heredoc

- Heredoc cho phép bạn định nghĩa một multiple lines string bắt đầu bằng <<< và đi liền sau đó là một label / identifier. Label này (hoặc identifier này) phải unique (không trùng).
- Heredoc có thể escape character.
- Heredoc có thể render value của biến.
- Heredoc thường được dùng khi bạn muốn hiển thị value của biến hoặc render HTML bên trong một string.

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
- Nowdoc thường được dùng khi bạn 

Ví dụ:
```php
$htmlCode = <<<'HTML'
<div>
    Đây là ví dụ về Nowdoc.
</div>
HTML;
```

## Tính ứng dụng

Nhìn chung thì sau khi đọc xong một vài tài liệu cũng như chém gió với GPT, có thể thấy được một điều là Heredoc cũng như Nowdoc dù có vài điểm nổi trội nhưng rất ít khi được dùng trong các dự án, đặc biệt là các dự án lớn. Theo đó:
- Heredoc và Nowdoc tuy khá hay ho nhưng lại tăng thêm sự khó khăn khi maintain các dự án lớn.
- Không nhiều các team lớn chuộng kiểu viết của Heredoc hoặc Nowdoc.
- Ở các dự án lớn, không thường các công ty sẽ ứng dụng các framework PHP vào (ví dụ Laravel). Các framework PHP thường sẽ đi kèm các template engine để render HTML (chẳng hạn như Blade hoặc Twig), vì vậy việc sử dụng Heredoc và Nowdoc là không cần thiết.

Tóm gọn lại, đọc cho biết để lỡ sau này có rớ vào một source PHP thuần đời tám hoánh nào đó thì bạn sẽ đỡ bỡ ngỡ, còn lại thì không khuyến nghị ứng dụng vào các dự án thật.

```
Do blog cá nhân được vận hành một cách tối giản giúp tiết kiệm kinh phí nên bản thân blog vẫn còn trong giai đoạn xây dựng và cũng vì vậy, tui cũng không implement tính năng comment. Tuy nhiên, tui sẽ rất vui nếu có thể được lắng nghe ý kiến từ những ai đó đọc được bài viết trôi nổi trên internet này, hy vọng được học hỏi từ các bạn, các anh chị em cô dì chú bác gần xa. Bạn có thể open issue tại repo blog của tui, hoặc inbox tui tại địa chỉ email là (dinhhoangbaochan@gmail.com)[mailto:dinhhoangbaochan@gmail.com].

Best regards,
Chan
```