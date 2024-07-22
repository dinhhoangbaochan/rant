---
title: "Vì sao bạn cần build To-do list khi học code?"
date: 2024-11-28
categories: [coding-questions]
tags: [todo]
author: Chan Dinh
gravatar: 40c375c9dbbfb6beda5e637079b7341dd87c1f29763338f37fea5b3cfb7d98e8
description: Vì sao To-do list là một dự án mà thông thường khoá lập trình nhập môn nào cũng dạy?
---

Nếu bạn thường xuyên xem những video hướng dẫn học những ngôn ngữ lập trình, bạn sẽ rất dễ bắt gặp kiểu dự án "Build a To-do list application", đặc biệt là sau khi phần cơ bản của một ngôn ngữ lập trình hay một framework đã được dạy xong. Bạn có biết vì sao không?

---

Cách đây cỡ một năm hơn gì đó tui cũng không rõ, trong một buổi sáng đẹp trời nọ, tui nhận được thông tin rằng công ty của tui lúc đó, một công ty outsourcing cho thị trường Châu Âu, vừa chuẩn bị triển khai một dự án mới cho khách hàng. Dự kiến ban đầu là dự án sẽ được viết bằng NextJS, một framework rất nổi tiếng của ReactJS. 

Chuyện này thì cũng bình thường thôi không có gì đặc biệt cả, nhất là với một công ty outsourcing thì cứ mỗi dự án mới cũng gần như đồng nghĩa với việc bạn sẽ được học một cái gì đó mới (dù cũng chỉ ở mức loanh quanh ***rìa hồ nước*** mà thôi). Cơ mà do thiếu nhân lực nên công ty có đề xuất cho tui join vào dự án, và đương nhiên là tui rất hào hứng để join ngay và luôn, dù tui chả biết cái khỉ gì về React chứ đừng nói tới NextJS.

Anyway, lý do tui kể câu chuyện này là bởi vì ngay khi mà tui bắt tay vào học React, như các bạn cũng đã hình dung thì việc đầu tiên tui làm là chọn ngay một cái tutorial để bắt đầu học. Và chắc chắn cũng không ngoài dự đoán của bạn, dự án nhỏ đầu tiên mà bạn instructor của cái khoá dạy React đó chọn chính là To-do List. 

Mọi chuyện cũng không có gì để nói nếu như ông anh leader của tui lúc đó, một người "được" cho là senior tại công ty, đã ngồi sau lưng tui và thốt ra một cái câu mà cho tới ngày nay tui vẫn cứ nhớ hoài và mỗi lần nhớ tới là tui chỉ ước mình đô con hơn một chút để có thể đấm gãy cái răng cửa của ổng. Đại ý thì ổng đã nói như này:

> Em đang làm gì vậy? To do list hả? Gì mà phí thời gian vậy em? Thiệt, anh tới bây giờ cũng không hiểu sao các bạn trẻ trẻ rất thích với cái kiểu bắt đầu code là ngồi làm cái To-do list đó để làm gì nữa. Anh thấy nó vô bổ quá à, thời gian đó em cứ chạy thẳng vào dự án làm luôn đi rồi từ từ em cũng sẽ quen à.

Khoan hãy bàn tới một vài quan điểm mà thoạt nghe qua thì ***có vẻ là*** cũng đúng đúng, thì có một vài quan điểm vô cùng thiển cận mà anh Năm (người anh senior yêu dấu của tui, rất tiếc là tui đành phải xài tên giả ở đây để bảo vệ cho sự ngốc nghếch của ảnh khỏi con mắt truyển thông) đã đưa ra, mà nó khiến cho cái title "senior" của anh nó bị giảm giá trị vô cùng trong mắt những người đàn em của anh.

Tui thì tuy không phải senior, trình độ quá gà nhưng được cái tui tự thấy mình cũng là một con người có cái nhìn về sự vật sự việc nó ***sáng*** hơn anh Năm của tui một xíu, vì vậy nên chúng ta cùng bắt đầu phân tích nha.

## To-do list là cái gì?

Đương nhiên rồi, phải có một chút lý thuyết thì câu chuyện nó mới trôi chảy được bạn à!

To-do list, hay tiếng Việt mình tạm dịch là "Danh sách việc cần làm", đơn giản là một kiểu ứng dụng (trong phạm vi bài này mình dùng chữ ứng dụng nhé, nghe cho nó sang) mà ở đó bạn có thể thêm vào một danh sách những việc bạn cần phải làm, thế thôi.

Cái này cũng giống như việc bạn có một cuốn sổ tay, xong mỗi buổi sáng bạn đi làm thì bạn lấy cuốn sổ ra ghi mấy cái ghi chú vào cuốn sổ kiểu:
- ~~9:00 Nhớ reply email~~
- 11:30 Đi họp với mấy anh 
- 16:00 Đi tập gym

Đó, đơn giản thì đây chỉ một cái danh sách các việc cần làm, the name says it all.

## Tính năng của To-do list

Nghe đơn giản thì là vậy, tuy nhiên trong phạm vi lập trình, phát triển ứng dụng hay phần mềm, To-do list là một kiểu dự án vô cùng là hoàn hảo để giúp bạn làm quen với việc sử dụng một ngôn ngữ, hay một công nghệ nào đó. Tại sao lại như vậy? 

Đó là bởi vì những tính năng chính của To-do list là tổ hợp của những khía cạnh trong một concept vô cùng cốt lõi của quá trình hoàn thiện một dự án, đó chính là CRUD. CRUD thì chắc nhiều bạn đã nghe qua rồi, nó là viết tắt của các chữ: 
- **C** là Create.
- **R** là Read.
- **U** là Update.
- **D** là Delete. 

Rất đơn giản và dễ hiểu. Giờ nếu bạn thử ngẫm nghĩ một chút, có phải toàn bộ những dự án của bạn đều được xây dựng trên bốn chức năng cơ bản này không? Trong tất cả mọi dự án, ít nhiều cũng đều sẽ có lúc, bạn cần cho phép users tạo một cái gì đó, đọc một cái gì đó, cập nhật lại một cái gì đó hay là xoá một cái gì đó. Nhìn chung thì đây gần như là nền tảng của mọi dự án công nghệ.

Đương nhiên trong thực tế, thì nó chắc chắn là phức tạp hơn rất nhiều. Nhưng chúng ta đang nói về nền tảng, và đặc biệt là chúng ta đang nói về việc truyền tải một kiến thức mới mẻ đến với một newbie. Bạn vừa tạo account Liên Minh Huyền Thoại thì bạn phải đánh với máy trước đã rồi mới chơi với người được. Bởi vậy nên, trong rất nhiều những khoá học dạy lập trình, hầu hết các instructors đều sẽ dạy bạn cách để build một cái To-do list, và điều này là hoàn toàn dễ hiểu, anh Năm ạ.

### Tính nền tảng và thực tế

Bạn đã bao giờ dùng qua Trello chưa? Bạn đã từng nghe tới Microsoft Planner chưa? Bạn đã từng đang ngồi coi Youtube thì thấy quảng cáo về Monday(.)com chưa? Khi bạn đi làm, 99.99% là công ty của bạn đang sử dụng một cái ứng dụng nào đó để quản lý task được giao và tin hay không thì tuỳ, những cái ứng dụng bạn đang dùng đó nó chính xác là dựa trên cái To-do list tầm thường mà chúng ta nói nãy giờ.

Hiển nhiên, cái ứng dụng bạn dùng chắc chắn nó không chỉ đơn thuần là thêm sửa xoá task, tuy nhiên cái core nó vẫn là như thế. Việc có thể xây dựng một ứng dụng tương tự là điều gần như bất khả thi, nhưng không ai bắt bạn làm Messi cả, bạn chỉ cần sút trái bóng vào lưới thử để biết thôi.

Việc ngồi xuống, thử tổng hợp lại những kiến thức cơ bản mà bạn vừa học và từ đó xây dựng một cái ứng dụng hoàn chỉnh mà bạn không cần phải suy nghĩ xem nó cần phải có tính năng gì, chỉ cần tập trung vào hoàn thiện nó, là một loại kĩ năng vô cùng thú vị khi nó không chỉ giúp bạn nâng cao tay nghề mà còn giúp bạn có được trải nghiệm hoàn thiện một "sản phẩm", chứ không đơn thuần là ngồi "gia công".

## Học công nghệ mới thế nào?

Đây là một chủ đề rất hay mà tui muốn viết trong thời gian tới, vì thế trong phạm vi này, tui chỉ nói sơ qua góc nhìn của tui, dựa trên những cái quan điểm "nghe có vẻ" đúng đúng của anh Năm.

Đầu tiên cần phải nói thì mỗi người là mỗi quan điểm, tuy nhiên không có nghĩa bạn chan tương ớt vào cơm tấm rồi lấy cái "quan điểm cá nhân" ra làm lá chắn được.

Nói tới đây, tui thấy rất rõ cái tư duy "gia công" nó đã ăn sâu vào máu của anh Năm như thế nào, và nó lý giải rất rõ