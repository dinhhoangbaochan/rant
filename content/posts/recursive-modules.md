---
title: "Recursive Modules"
date: 2023-12-04
categories: [coding-notes]
author: Chan Dinh
gravatar: 40c375c9dbbfb6beda5e637079b7341dd87c1f29763338f37fea5b3cfb7d98e8
description: Tìm hiểu vì sao mà node_modules của bạn rất nặng và có rất nhiều packages mà bạn không hề biết đến sự tồn tại của nó
---

Có bao giờ bạn thắc mắc vì sao mà node_modules của bạn rất nặng và có rất nhiều packages mà bạn không hề biết đến sự tồn tại của nó, mặc dù bạn nhớ là bạn không hề cài trước đó không? Trong bài viết này, tui sẽ cố gắng giải thích một cách đơn giản cho "hiện tượng" nêu trên.

---

## Context

Lấy ví dụ, bạn bật terminal lên và gõ lệnh sau:

```bash
npm install vue tailwindcss
```

Về mặt lý thuyết, bạn kêu thằng Node Package Manager (NPM) là `Ê, cài giùm tao hai cái package Vue và Tailwind CSS nha`. Thằng NPM nó nhận lệnh từ bạn, và nó sẽ làm công việc cài đặt hai packages/modules trên vào một thư mục được gọi là `node_modules`, cái này thì chắc anh em nào làm dev thì cũng biết rồi.

Cơ mà bây giờ nếu bạn mở cái directory node_modules ra, bạn sẽ thấy là ***trời đất ơi*** tự nhiên có một đống package mà không biết trồi từ đâu ra, rõ ràng bạn đâu có kêu nó cài đâu ta?

## Recursive Dependencies, Dependencies & Sub Dependencies

Khi tìm hiểu về vấn đề này, tui vô tình đụng trúng khái niệm nêu trên, trong đó đáng chú ý là Recursive Dependencies. Đầu tiên, Recursive Modules là cái gì? Nhằm ra vẻ là người có nhiều kiến thức, tui xin tạm dịch Recursive Dependencies ***Phụ Thuộc Đệ Quy***. Tuy nhiên dịch xong thì nghe hơi đần một tí, nên thôi quay lại gọi là Recursive Dependencies đi nha.

Khi bạn setup một cái app thì sẽ cần cài đặt các packages cần thiết để xây dựng nên cái app đó, những packages này gọi là những dependencies. Tuy nhiên, những dependencies này để có thể chạy được thì lại cần một dependencies khác, các dependencies đó được gọi là các sub dependencies. Và chắc các bạn cũng đoán được thì trong số các sub dependencies đó chắc hẳn sẽ lại phải cần cài đặt thêm dependencies (tới đây thì là thành sub sub dependencies hả ta?!), và cứ thế cho tới khi không còn dependencies nào cần được cài đặt nữa thì việc cài đặt sẽ dừng lại.

Và đây cũng chính là lý do vì sao mà trong `node_modules`, có rất nhiều packages mà bạn không hề yêu cầu cài đặt từ lúc khỏi đầu nhưng đến khi NPM cài đặt xong thì lại có mặt ở đó. Các packages/modules này là vô cùng cần thiết, góp phần tạo nên cái hệ sinh thái cho ứng dụng của bạn, và vì thế khi bạn vô tình xoá mất một package thì app của bạn gần như chắc chắn là sẽ bị crash.

## Out of Context

Trước khi viết bài này, tui đã tham khảo một số người anh em đồng nghiệp trong nghề, trong đó có cả những backend engineers cũng như những frontend engineers, bởi vì tui đinh ninh rằng biết đâu đây là một chủ đề mà chỉ có mình tui là không biết, còn lại thì chắc ai cũng biết. Và bạn biết không, thật bất ngờ là có kha khá anh em đồng nghiệp không hề biết tới khái niệm này.

Vậy nhưng bạn có biết, lần đầu  khi tui đặt câu hỏi này ra với những người tiền bối trước đó của tui vào đâu đó khoảng cỡ hơn 1 năm trước thì tui đã nhận được reaction thế nào không? Đầu tiên là cười nhạo và sau đó là lời phản hồi vô cùng quen thuộc: `Cái này cơ bản mà cũng phải hỏi thì nên xem lại`, LOL. Và đây chính là nguyên nhân tui viết bài này. Những gì được viết trên blog của tui, phần lớn đều là những kiến thức do tui đúc kết và học được. Việc chia sẻ những kiến thức này sẽ giúp cho tui (và bạn) cùng trở thành những kĩ sư giỏi hơn vì suy cho cùng thì kiến thức là vô tận và chặng đường học là một chặng đường không có hồi kết.

Anyway thì trong một dịp khác, tui sẽ viết một rant article về việc chia sẻ kiến thức, sự lạm phát title ***seniors*** và cách để nhận định giữa một kĩ sư giỏi và một kĩ sư ng* l*n. 

```
Do blog cá nhân được vận hành một cách tối giản giúp tiết kiệm kinh phí nên bản thân blog vẫn còn trong giai đoạn xây dựng và cũng vì vậy, tui cũng không implement tính năng comment. Tuy nhiên, tui sẽ rất vui nếu có thể được lắng nghe ý kiến từ những ai đó đọc được bài viết trôi nổi trên internet này, hy vọng được học hỏi từ các bạn, các anh chị em cô dì chú bác gần xa. Bạn có thể open issue tại repo blog của tui, hoặc inbox tui tại địa chỉ email là (dinhhoangbaochan@gmail.com)[mailto:dinhhoangbaochan@gmail.com].

Best regards,
Chan
```