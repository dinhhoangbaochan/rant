---
title: "The Legend Coach - Devlog #1: Huấn luyện viên online"
date: 2024-08-19
categories: [devlog]
tags: [the-legend-coach]
author: Chan Dinh
gravatar: 40c375c9dbbfb6beda5e637079b7341dd87c1f29763338f37fea5b3cfb7d98e8
description:  
---

Làm huấn luyện viên thiệt thì khó quá, cho nên tui quyết định làm huấn luyện viên online. Còn cách nào tuyệt vời hơn là build một cái web game "kiểu kiểu" Football Manager để làm HLV online chứ hả? Bắt đầu thui nào!

---

Sau 7749 ngày cày Football Manager 2023 (bản crack hic hic) kèm theo In-Game Editor để cheat hết mọi ngõ ngách có thể nhằm đưa Alfreton, một đội bóng đá Varanama National league (hình như hạng 5 của Anh?) lên ngôi vô địch C1 khi còn chưa đặt chân tới giải ngoại hạng, tui đã đưa ra một quyết định quan trọng trong cuộc đời:

> Làm một bản clone giống Football Manager mà chạy trên web thôi!

Ý tưởng này từ đâu ra? Ai mà biết! Chỉ biết là tự dưng dạo này tui được bơm vào đầu cái tư tưởng là mình có thể build tất cả mọi thứ mình muốn trong cuộc đời này, miễn là **mình muốn**. Và trên hết, đã muốn là phải làm, càng chần chừ là càng mất kiên nhẫn mà càng mất kiên nhẫn là sẽ không bao giờ làm được cái gì đâu, nên là làm thôi!

## Football Manager là gì?

Trước khi bắt tay vào làm thì phải dành một chút thời gian nói về Football Manager trước nha. Football Manager là một tựa game thuộc thể loại thể thao giả lập (hay giả lập thể thao - sport simulation) của Interactive Sports. Tựa game cho phép bạn làm HLV của một đội bóng bạn yêu thích (hoặc không) và từng bước đưa nó lên đỉnh vinh quang của làng túc cầu (hoặc là bạn sẽ bị sa thải vì quá gà).

Game cực kỳ nặng về tính số liệu, chiến thuật, sẽ không có chuyện bạn cầm đội hình toàn mấy thằng cha vô danh không tên tuổi mà đòi đá thắng Manchester United aka Quỷ Mản Thành Đo được. Bạn phải dựa trên số liệu, chỉ số, đội hình, chiến thuật, cách "bày binh bố trận", tâm trạng - phong độ - thể lực của dàn cầu thủ. Ngoài ra bạn còn làm rất nhiều công tác bên lề như là cân đối ngân sách (quỹ lương, quỹ tìm kiếm tài năng trẻ, quỹ chuyển nhượng), đàm thoại với ban lãnh đạo trong nhiều vấn đề giúp cải thiện đội bóng (xin mở rộng hoặc xây mới sân vận động, xin ban lãnh đạo chia thêm % tiền bán cầu thủ), chuyển nhượng từ cầu thủ cho tới dàn trợ lý huấn luyện viên, etc. Nói chung là ở ngoài đời làm HLV bóng đá như thế nào, thì vô trong đây bạn cũng sẽ gần như phải làm y như vậy.

## Tại sao phải bắt chước Football Manager?

Tại vì tui thích!

Nói chứ, nếu bạn suy nghĩ thì sẽ thấy, Football Manager là một tựa game phải gọi là tiệm cận hoàn hảo để học lập trình (hay thậm chí là nâng cấp năng lực của bạn). Football Manager chứa toàn bộ mọi thứ bạn mong muốn để tăng skills, ví dụ như phần UI vô cùng phức tạp (may mắn là chắc không cần làm responsive), **CỰC KỲ CỰC KỲ CỰC KỲ** nhiều data, đòi hỏi phải ứng dụng machine learning / AI để phân tích và dự đoán tỉ số, có thể tích hợp 3D rendering, etc. Nhưng điều này cũng đồng nghĩa với việc, xây dựng một thứ dù chỉ là phiên bản clone của Football Manager (và cũng chỉ clone được 20% của nó) đã gần như là siêu cấp khó hay thậm chí là không thể rồi. Đây là một tựa game xương sống của cả một studio game, vì vậy sức người có hạn, bạn phải biết trước luôn là điều này là không thể!

Tuy nhiên, một lần nữa, mục đích chúng ta làm (hay tui làm) cái này, là vì tui thích. Làm không được thì cũng không sao cả. Với những điểm đã nêu bên trên, bạn sẽ thừa biết là chỉ cần chúng ta bắt tay vào làm, có cả tỉ tỉ tỉ tỉ thứ đang chờ chúng ta học. Kiến thức mới là thứ quý giá, nên đừng quan tâm tới sản phẩm cuối cùng, kể cả khi sẽ không có một sản phẩm cuối cùng nào ở đây cả.

## Một vài điều cần lưu ý

### Phi thương mại

Miễn bàn rồi. Tuy nhiên, tui viết dòng này là để nhắc nhở chính bản thân tui và bất cứ ai định build một cái gì đó giống tui. Bạn build cái này là vì bạn muốn build nó, bạn cần nhớ rằng sẽ không ai trả cho bạn tiền để xài cái sản phẩm này đâu. Giữa chừng khi bạn đang build, sẽ có những lúc bạn nghĩ về việc một ngày sản phẩm của bạn sẽ scale và có thể sinh ra tiền, lúc đó hãy nhớ rằng chuyện đó sẽ không xảy ra đâu. Đừng để đồng tiền làm trói buộc con đường tìm kiếm kiến thức và làm những thứ thú vị chỉ đơn thuần vì sự yêu thích của chúng ta.

### Giới hạn bản thân

Interactive Sports là một studio game đẳng cấp thế giới, chúng ta là những cá thể gà như trái cà. Đừng mơ xa. Khi gặp một thứ gì đó ngoài tầm với, hãy nhớ rằng nó rất khó, bạn không thể build được nó là điều bình thường. Biết cái giới hạn của mình và bạn sẽ không bị thất vọng chỉ vì bạn không làm được một thứ khó kinh khủng khiếp.

### Tính thử nghiệm

Mọi thứ được làm để thử nghiệm, sẽ không có đúng sai, sẽ không có deadline, sẽ không có ai bắt chúng ta phải ship cái sản phẩm cuối cả. Vậy nên làm mọi thứ trên tinh thần là thử nghiệm.

### Tính MVP

Minimum Viable Product đại khái là nói về tính "dùng được" của một sản phẩm. Sản phẩm không cần hoàn thiện 100% nhưng ít nhất bạn có thể "tạm dùng" được nó ở một mức độ cơ bản. Tuy tui không bao giờ nghĩ rằng tui có thể build cái game này hoàn chỉnh nhưng ít nhất tui muốn thấy được hình hài của nó, méo mó cũng được miễn là chơi được phần nào tính năng.

## Techstack

Build cái app gì cũng phải bắt đầu từ quyết định techstack. Với một thằng developer gà bắp như tui thì chọn techstack không khác gì là ngồi tạo character lúc đầu game vậy, chỉnh cho đẹp hết mức xong vô game chơi ngu như bò. Nên thôi, phải dùng những gì vốn có thôi.

À nhân tiện thì nói tới đoạn này, tui cho rằng đây là một điểm mà tui nghĩ là có thể sẽ hữu ích dành cho những ai có ý định tự xây dựng một cái ứng dụng hay cái gì đó cho bản thân mình, đó là hãy **biết giới hạn bản thân**. Tui đã viết phần này sơ sơ ở trên rồi nhưng lúc này lại muốn nhắc lại. Ý này hơi đi ngược với mấy cái triết lý sống của mấy cha nội hay viết self-help là đừng giới hạn bản thân và hãy mơ cao mơ xa vào. Đồng ý là mơ cao mơ xa, nhưng giả sử cao 1m66 kèm theo cái bụng bia như tui mà ôm mộng đá EPL, bạn thấy nó có khả thi không? Chi bằng đặt mục tiêu đơn giản trước: chơi được ở một trận đấu 90 phút cấp độ xóm làng đã (dù điều này hiện tại tui cũng không lảm nổi, mà tui nghĩ bạn cũng không làm được giống tui). Nói chung là, mơ cao nhưng phải biết giới hạn hiện tại, biết mình có gì, biết mình nên đặt mục tiêu trước mắt như thế nào. Đoạn này viết ra dài quá, tui sẽ viết ở bài sau, nên tạm thời bài này mình tóm gọn như thế thôi.

Rồi, thì biết mình biết ta, biết năng lực bản thân. Vì vậy, tui quyết định sẽ build cái app này bằng cái thứ dễ dàng tiếp cận nhất, ai cũng có thể bắt đầu được, đó là dùng HTML/CSS và JavaScript ES6 (JS). Tại sao tui lại chọn thế này?

Đầu tiên, tui là dev PHP. Nhưng dùng PHP cho việc build cái app này tui cảm thấy nó không phù hợp lắm. Thứ nhất là tui rất lười mỗi lần code phải bật XAMPP (hoặc MAMP nếu bạn xài Mac) lên, vả lại con PC cùi bắp của tui mà chạy XAMPP là nó cứ lag lag, nên tui không muốn. Thứ hai là tui muốn khi tui viết ra một cái gì đó, trong tích tắc tui có thể deploy nhanh chóng với Vercel. Tại thời điểm viết đoạn này và theo cái kiến thức hạn hẹp của tui, "hình như" là Vercel chưa có hỗ trợ cho deploy PHP, vậy nên JS trông có vẻ là một lựa chọn rất phù hợp. Ngoài ra thì nếu bạn đã từng chơi Football Manager, bạn sẽ thấy cái game này cần khá nhiều tương tác sự kiện, đằng nào bạn cũng sẽ phải viết JS thôi nên chi bằng mình viết bằng JS luôn đi.

### Mà sao không xài framework?

Lý do đơn giản, toàn bộ quá trình viết cái game này là để tui vọc vạch, vậy thôi, tui không cân nó go live, không cần có người dùng, tui chỉ muốn vọc vạch và học hỏi được chút gì đó hay ho chứ không phải xài một mớ glue code để viết nhanh ra cái web game không để chi cả. Vậy nên chốt JS há!

## Tính năng cơ bản

Đầu tiên, có một vài thứ mà chúng ta cần phải lưu ý, đó là tui rất gà JS. Tui chỉ biết viết linh tinh vài dòng JS thôi, nên không thể nào mong chờ là copy toàn bộ mấy cái tính năng của Football Manager (từ đây gọi là FM nha) được. Vậy nên mình cần phải list ra mấy cái tính năng cơ bản mình ***chắc là*** có thể làm được ở giai đoạn đầu.

### Tạo thông tin nhân vật

Tại thời điểm này, tui chưa biết nó sẽ có UI như thế nào, nhưng tui nghĩ ở mức khởi điểm thì chắc sẽ là một cái form với nhiều input như là:
* Họ tên (text): Họ tên của nhân vật mình tạo.
* Quốc tịch (text): Nhiều quốc gia quá nên tạm thời mình sẽ cho text, sau này tìm cách autofill một list các quốc gia vào, có thể tìm cái API nào đó chăng?.
* Ngày tháng năm sinh (date): Ngày tháng năm sinh thôi.
* Đội bóng yêu thích (selection || text): Hiện tại trường này vô giá trị, nhưng tương lai sẽ cố gắng đem lại giá trị theo kiểu nếu chúng ta được dẫn dắt đội bóng mình yêu thì sẽ tạo ra hiệu ứng phụ gì đó.
* Trình độ cầu thủ (selection): Trước khi làm HLV thì nhân vật của chúng ta cũng từng đá banh rồi, chọn trình độ cho nó.
* Trình độ HLV (selection): Trình độ hiện tại của HLV.

### Chọn đội bóng

Chọn đội mình muốn, hoặc là khởi đầu với tình trạng thất nghiệp.

### Chỉ số cầu thủ

Mỗi cầu thủ sẽ có các chỉ số riêng, cần tạo sẵn một bộ chỉ số chung cho tất cả cầu thủ. Tuy nhiên, ở giai đoạn khởi đầu, chắc là chúng ta sẽ sử dụng lại y chang toàn bộ chỉ số của FM. Cách áp dụng thì ngay chỗ này chúng ta sẽ ứng dụng OOP (hướng đối tượng). Còn ứng dụng như thế nào thì tui chưa biết, hihi.

### Dự đoán tỉ số

Dựa trên đội hình của hai đội, tìm cách để đưa ra các dự đoán một cách tương đối và đem lại cảm giác "có vẻ hợp lý". Phần này tui chưa biết làm sao, tuy nhiên lần trước research thì ChatGPT có gợi ý tui tìm hiểu về xác suất thống kê, nên chắc là sẽ áp dụng nó. Còn áp dụng như thế nào thì từ từ rồi biết!

## Tạm kết

Bài đầu tiên, viết ngắn gọn tình cảm thế này, để dành sức mấy bữa sau tìm hiểu và viết tiếp vậy. Đi ngủ thôi!!!