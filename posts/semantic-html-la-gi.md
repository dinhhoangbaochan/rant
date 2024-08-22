---
title: "Semantic HTML là gì?"
date: 2024-08-22
categories: [notes]
tags: [html, basic]
author: Chan Dinh
gravatar: 40c375c9dbbfb6beda5e637079b7341dd87c1f29763338f37fea5b3cfb7d98e8
description: Một vài note linh tinh về khái niệm của Semantic HTML
---

Dùng HTML nhiều rồi nhưng có bao giờ bạn nghe tới Semantic HTML chưa? Bài viết này tui sẽ viết linh tinh lặt vặt mấy cái tui lượm lặt được về khái niệm này.

---

*(Bài viết được viết trong quá trình tui đang viết devlog cho cái blog này, mời bạn tham khảo qua mớ devlog của tui khi mà nó được public nha)*

Trước khi bắt đầu bài viết, dạo này tui đang tập nghiên cứu / học tập theo phương thức 5W1H để giúp việc học tập nó được thuận tiện hơn và có cấu trúc hơn. Vì vậy, trong phạm vi bài viết này, tui cũng sẽ thử viết theo pattern này nha (không biết gọi là **pattern** thì có phù hợp không ta?).

## Semantic HTML là cái gì? 

Đầu tiên thì cái chữ Semantic này nếu bạn tìm trên Google Dịch thì bạn sẽ thấy, Semantic có nghĩa là **ngữ nghĩa** hoặc là **thuộc về mặt ngữ nghĩa**. Dịch chữ này ra thôi thì bạn cũng sẽ nắm được sơ bộ Semantic HTML là gì rồi. Semantic HTML có thể hiểu đại ý là **HTML có ý nghĩa**. Vậy HTML có ý nghĩa là gì?

Khi bạn viết HTML, thông thường bạn sẽ chú ý vào điều gì? Thường thì khi viết HTML, tui sẽ chỉ toàn nghĩ tới **tính hiển thị** của layout website. Tức là tui viết xài các element một cách vô tội vạ và bừa bãi, miễn sao là khi tui refresh browser, tui sẽ có được y chang thứ mình muốn. Điều này tui nghĩ ai cũng sẽ thường như vậy, lý do là bởi vì khác với ngôn ngữ lập trình, markup language (tiếng Việt mình là ngôn ngữ đánh dấu đó, HTML chính là ngôn ngữ đánh dấu nè, nhưng dịch ra tui thấy còn rối rắm hơn nên gọi là markup language nha) không có cái behaviour theo kiểu đúng/sai. Ví dụ bạn viết PHP hay Java đi, bạn quên chấm phẩy ở cuối câu là bạn ăn ngay cái báo lỗi và toàn bộ code của bạn nó sẽ break liền. Trong khi bạn viết HTML, bạn muốn text bạn hiển thị, bạn có thể dùng bất kỳ thẻ nào từ `p`, `span` cho tới `h1`, `h2`, `h3` hoặc thậm chí cả `div`, và đoạn text đó vẫn sẽ hiển thị ra đúng như ý bạn chứ không báo lỗi gì cả.

**Đương nhiên là style nó có thể sẽ khác nhau (chẳng hạn giữa thẻ `p` và thẻ `h1`, tui biết, but you get my point.*

Vì vậy, tui không bao giờ chú trọng tới bất kì thứ gì khác ngoài việc hiển thị. Tuy nhiên, cá nhân tui, thì việc dùng Semantic HTML nó cũng giống như là nói chuyện mà dùng đúng ngữ pháp vậy đó. Bạn có thể nói thoải mái người ta vẫn hiểu, nhưng đương nhiên là muốn giao tiếp một cách tốt nhất thì vẫn phải tôn trọng ngữ pháp chứ, đúng không?

Như vậy, bản chất Semantic HTML chính là HTML có ý nghĩa, là **viết HTML đúng ngữ pháp**.

### Vậy đúng ngữ pháp là như nào?

Nói tới đây, không có ví dụ thì rất là khó hiểu. Bình thường, khi bạn dựng một cái sidebar, bạn làm như thế nào? Thông thường, tui (và tui để ý rất nhiều người) đều đơn giản là viết một thẻ `div`, sau đó styling cho thẻ `div` đó nằm gọn bên trái hoặc bên phải màn hình, thèm theo class name kiểu `sidebar` là xong. Làm cách này không có gì sai cả, chắc chắn 100% là cái sidebar đó vẫn hiển thị theo đúng ý của bạn. Tuy nhiên, về mặt ngữ nghĩa thì chúng ta đang làm sai hoàn toàn. Để cho đúng ngữ nghĩa của HTML, chúng ta không dùng `div` để làm sidebar mà thay vào đó, HTML cung cấp cho chúng ta thẻ `aside` để chúng ta dùng cho việc này. 

Trường hợp tương tự, giả như bạn muốn có một cái nút đi, bạn sẽ làm thế nào? Tui thì thường sẽ dùng thẻ `a`, sau đó style lại cho cái thẻ `a` đó để nó nhìn ra hình hài cái nút. Tuy nhiên, thẻ `a` có nghĩa là **anchor**, tức là điểm neo. Thẻ `a` chỉ nên được sử dụng trong trường hợp bạn cần một điểm để "neo" cái đường dẫn dẫn tới một chỗ nào khác, nghĩa là bạn chỉ dùng thẻ `a` để gắn link thôi. Còn để làm một cái nút, bạn nên xài thẻ `button` (rồi bỏ thẻ `a` vào trong thẻ `button`). 

Đây là kiểu viết HTML đúng đắn về mặt ngữ pháp. Tui để ở đây cái hình của Semrush trong [bài viết của họ về Semantic HTML](https://www.semrush.com/blog/semantic-html5-guide/), cực kỳ dễ hiểu.

![Semantic HTML by Semrush](https://static.semrush.com/blog/uploads/media/cc/85/cc85d452a743e27f68d426df35e4da7d/EN-Semantic-Search-Non-Semantic.webp "Semantic HTML by Semrush")

## Tại sao dùng Semantic HTML?

Tới khúc này thì tui nghĩ bạn cũng đã hiểu sơ sơ Semantic HTML là gì rồi, tui viết dài vậy mà không hiểu nữa là chịu đó nhen. Tuy nhiên, tui đoán bạn cũng sẽ đặt câu hỏi giống y chang tui lúc đầu tiên khi nghe tới cái này, đó là ***mắc gì mình cần phải viết cái này ta?***. 

Câu hỏi này là hoàn toàn dễ hiểu thôi, bạn viết kiểu gì mà HTML nó chả hiển thị ra, bạn chỉ cần style lại, quan tâm làm gì? Vậy mà vẫn cần quan tâm đó.

### Tính truy cập (accessibility)

> We take things for granted without realizing how grateful and lucky we are - Quote của tui mới nghĩ ra

**Đây là yếu tố quan trọng nhất của Semantic HTML**

Bạn đọc website bằng gì? Mắt đúng không? Tui cũng vậy. Nhưng giờ lỡ đối với những người khiếm thị thì sao? Làm sao để họ có thể trải nghiệm website của bạn một cách tốt nhất? Dành cho bạn nào chưa biết, những người khiếm thị có thể sẽ lướt web bằng các các thiết bị gọi là **screen reader**. Các thiết bị này sẽ dựa trên HTML của bạn và đọc lại (hoặc hiển thị chữ nổi) cho những người khiếm thị để họ có thể tiếp cận được nội dung mà website của bạn đang truyền tải. Đây là một khía cạnh mà tui hoàn toàn không biết tới, mãi cho tới khi gần đây tui đọc qua hướng dẫn của The Odin Project về HTML và nói thiệt là tui cảm thấy khá là thất vọng về bản thân mình khi đọc về thông tin này.

Như tui đã nói ở trên, đây là khía cạnh quan trọng nhất của việc sử dụng Semantic HTML. Bạn phải học cách dùng Semantic HTML và phải luôn nhắc nhở bản thân mình là viết HTML làm sao cho nó "semantic" hết mức có thể, không phải vì bạn sẽ code giỏi hơn, hay bạn sẽ có thể nâng cao năng lực của bản thân, mà vì bạn giúp cho những người kém may mắn hơn bạn có thể tiếp cận được với nội dung trên website của bạn. Khi đọc [bài viết này](https://axesslab.com/what-is-a-screen-reader/), tui đã nhận ra mình đã khốn nạn cỡ nào khi chưa bao giờ xài thẻ `alt` khi xài thẻ `img` chỉ bởi vì lười, trong khi đây là thuộc tính duy nhất giúp những screen reader có thể mô tả lại hình ảnh cho những người dùng khiếm thị.

Trở thành một con người tốt hơn là yếu tố tiên quyết để trở thành một kĩ sư tốt hơn, tui đang ráng tự nhắc nhở bản thân. Bạn nào đọc được các bài viết của tui mà thấy tui chưa dùng tốt Semantic HTML thì góp ý giúp tui nha, xin đội ơn.

### SEO

Bạn có bao giờ tự hỏi con crawler (hay con bot) của Google (hay các browser khác) nó đánh giá nội dung của bạn như thế nào không? Làm sao để nó đánh giá nội dung trang của bạn tốt hơn trang của người khác? Làm sao nó "cảm thấy" bạn viết tốt hơn người khác? Ngày xưa tui nghĩ rằng, con bot của Google là một thể loại AI mà nó sẽ đọc nội dung rồi phân tích rồi từ đó đánh giá nội dung của bạn.

Về cơ bản, con crawler khá tương tự với screen reader mà chúng ta vừa nói ở trên khi mà nó sẽ vào trang của bạn, phân tích cấu trúc HTML trên trang của bạn, từ đó nó sẽ đánh giá nội dung của bạn là đã tốt hay chưa. Đương nhiên, nó không thể nào "cảm nhận" được văn phong của bạn. Vì vậy, tụi nó sẽ có một bộ quy tắc riêng để đánh giá và đưa ra xếp hạng cho trang của bạn. Thành thử ra, bạn dùng Semantic HTML chính là một cách giúp cho crawler của Google nó đọc được trang của bạn tốt hơn, "hiểu" nội dung bạn tốt hơn và từ đó nó sẽ đánh giá cao nội dung bạn viết hơn.

Vì vậy nên, Semantic HTML là một yếu tốt khá quan trọng trong SEO, hãy tận dụng nó để promote website của bạn tốt hơn hen.

### Đi phỏng vấn

Nếu hai lý do trên vẫn chưa đủ làm bạn thấy thuyết phục (thậm chí tui đã đánh cả vào khía cạnh tình cảm ở ý đầu tiên rồi), thì đây là khía cạnh có thể bạn sẽ quan tâm, đó là công việc. Mặc dù cái này cũng có thể sẽ hơi "edge case" một tí xíu, nhưng tui đã từng fail phỏng vấn vì không biết chút xíu nào về Semantic HTML.

Ngày này năm ngoái (2023) là thời điểm tui đang chạy đôn chạy đáo để đi xin việc do đang ở trong tình trạng thất nghiệp và trong lúc túng quẫn, tui đã rải CV một mớ JD front-end job. Và trong vô số buổi interview cho vị trí front-end developer, có một case trong số đó khiến tui nhớ khá rõ, đó chính là case mà tui fail vì không biết cái Semantic HTML này. Hai anh bạn phỏng vấn tui là hai developer đến từ Bangladesh, và accent của hai anh này thực sự rất là khó nghe. Vì vậy, khi hai anh này hỏi tui về Semantic HTML, tui đã ngớ người ra vì không biết *sế cờ man tịch hay thi em eo* là cái gì.

Sau khi hướng dẫn tui mở Auto Subtitle của Google Meet thì cái chữ Semantic HTML cuối cùng cũng đập vào mặt tui, lần đầu tiên **sau gần 5 năm đi code**!!! Đương nhiên là tui ú ớ rồi, và tui hoàn toàn không biết nói gì ngoài chém gió đại là Semantic HTML nghĩa là "làm đẹp cho cấu trúc HTML" tại tui cứ nhớ tui từng thấy chữ semantic trong một cái quảng cáo nào đó về mỹ phẩm làm đẹp... Nói chung là một trải nghiệm rất mất mặt và không đáng để trải qua. Thành thử ra thì cái khái niệm Semantic HTML này nó không phải thứ gì đó quá cao siêu và không thể nhồi vào đầu được, nó không đáng để bạn bị fail interview.

## Kết

Ban đầu tui định viết 5W1H thật, nhưng sau hai phần What với Why, thì tui nghĩ các bạn cũng tự hình dung ra được những phần: Who (ai dùng mấy cái Semantic HTML này), When (khi nào dùng Semantic HTML), Where (dùng Semantic HTML ở đâu), How (dùng Semantic HTML như thế nào). Vậy nên thôi tạm dừng bài viết ở đây vì nó dài quá rồi. Vài ba hôm sau tui đọc lại, tui nghĩ ra cái gì hay ho tui sẽ edit lại sau, bái bai. 
