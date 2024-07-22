---
title: "Thuật toán, cách tiếp cận & giải quyết vấn đề"
date: 2024-11-28
categories: [algo, problem-solving]
tags: [algo]
author: Chan Dinh
gravatar: 40c375c9dbbfb6beda5e637079b7341dd87c1f29763338f37fea5b3cfb7d98e8
description: Tìm hiểu cách để có thể clone source trên một repository tại Github từ một branch cụ thể thay vì branch mặc định. 
---

Thuật toán, một trong những ***buzz word*** lâu đời của giới tech mà bạn có thể nghe tới nó rất thường xuyên nhưng vẫn không biết nó là cái gì cũng như cảm thấy nó rất là đáng sợ. Tui cũng vậy, nhưng hôm nay tui muốn vượt qua nỗi sợ của mình, vì vậy tui viết bài này nè.

---

> Credit: Toàn bộ bài viết là những ghi chép của tui dựa trên những gì tui học được từ chuỗi video thuộc khoá học Algorithms & Data Structures của Colt Steel trên Udemy. Tới thời điểm hiện tại thì tui thấy khoá học rất đỉnh, vô cùng khuyến khích các bạn mua nó (tui được công ty tài trợ hehe).

> Bài viết đang trong trạng thái cập nhật à nha...

---

Những ngày gần đây tui vừa bắt đầu tham gia một khoá học tên là Algorithms & Data Structures in JavaScript của Colt Steel trên Udemy. Có thể nói thì đây là một trong những nỗ lực hơi mang tính "tuyệt vọng" tại vì tui là một người gần như không có kiến thức gì về cả Algo lẫn DS, và mặc dù JavaScript trông có vẻ không phải là một lựa chọn hoàn hảo lắm để học Algo hay DS thì tui vẫn chọn vì so với Java hay C++ thì JavaScript là ngôn ngữ duy nhất ngoài PHP mà tui có thể "tạm" thoải mái sử dụng để code.

Đầu tiên thì phải mini review một tí, tui hơi bất ngờ khi đây là một khoá mà cho tới thời điểm hiện tại tui cảm thấy là vô cùng dễ hiểu. Bổ sung thêm thì đây không phải là lần đầu tiên tui tự dựng đầu tui dậy để học Algo & DS. Tui đã từng cố gắng học rất nhiều khoá AlgoDS rồi nhưng hầu như là chỉ sau vài bài học thì tui đều bỏ cuộc. Phần lớn là do tui nuốt không có vô nhưng cũng cần phải nói thêm là mấy cái khoá tui chọn học thì thành thật mà nói, mấy ông instructor giảng "í ẹ" lắm.

Cơ mà cỡ 1 2 tuần trước thì vô tình tui đọc được một comment trên Reddit recommend học cái khoá này thử, thế nên tui cũng enroll xem nó như thế nào, cùng lắm thì unenroll thôi, hehe. Vậy mà không ngờ là nhảy vào học một chút xíu tự dưng thấy khoá học này có vẻ... ờ, ổn áp quá ta?! Cho tới hiện tại thì tuy tui vẫn chỉ đang loanh quanh ở đầu khoá học thôi (và cũng chưa có thể nào giải một easy problem trên Leetcode một cách thoải mái nổi) nhưng tui vẫn đánh giá rất rất rất cao khoá học này, highly recommend luôn.

## Algorithms - Thuật toán là gì

Thuật toán, nghe có vẻ hơi trừu tượng và phức tạp, thiệt ra chỉ là một tổ hợp các bước để có thể xử lý một vấn đề nào đó. Lý do mà chúng ta thường hay tưởng nó có vẻ cao siêu thì bởi vì chúng ta hay nghe qua mấy câu như là "thuật toán của Facebook" hay là "thuật toán của Google", và từ những câu nói này nó khiến cho não chúng ta luôn nghĩ tới thuật toán như là một loại kiến thức hay kĩ thuật gì đó rất cao siêu.

Theo David J Malan, instructor của khoá học CS50 vô cùng nổi tiếng của Harvard, đã giải thích, thì chúng ta có cấu trúc sau:

```
Input -> [Thuật Toán] -> Output
```

Như vậy, thoạt toán cơ bản chỉ là các bước được tập hợp lại để qua đó, chúng ta có thể giải quyết được một vấn đề nào đó. Như theo cấu trúc ở trên, thường khi mà bạn gặp một vấn đề nào đó, đầu tiên bạn sẽ có một / những input nào đó và đề bài sẽ yêu cầu bạn là từ những cái input này, bạn phải trả ra một cái output gì đó. Và việc "xào nấu" cái input đó để mà làm sao nó ra được cái output thì đó chính là lúc mà thuật toán "tham gia cuộc chơi".

Trong thực tế, bạn có thể lấy ví dụ một bài toán tìm X để có thể hiểu được cái cấu trúc trên. Chẳng hạn như bài toán: `2 + x = 10`, thì bạn có thể dựa theo cấu trúc trên để quy đổi như sau:

```
input = 2 
output = 10
```

Vậy thuật toán ở đây sẽ là gì? Rõ ràng quá rồi, bạn dùng 10 trừ đi 2 để tìm ra được kết quả cuối cùng. 

## Problem solving - giải quyết vấn đề

Toàn bộ công việc chính của một developer / engineer chính là giải quyết vấn đề. Hoặc là bạn tự tìm thấy một vấn đề, tự đặt ra một vấn đề hay có ai đó giao cho bạn một vấn đề và yêu cầu bạn giải quyết nó, đây là điều quá hiển nhiên rồi. Tuy nhiên, vấn đề (no pun intended) ở đây chính là: làm sao để thực sự giải quyết một vấn đề? Hãy suy nghĩ thử xem nhé.

Thông thường, khi tui được giao cho giải quyết một vấn đề nào đó, tui thường sẽ không có một quy tắc cụ thể nào hay những bước cụ thể nào để có thể giải quyết vấn đề được đề ra mà thay vào đó, phần lớn thời gian tui đều tìm cách giải quyết nó theo kiểu vô cùng cảm tính. Đôi khi, tui sẽ tìm cách để hiểu nó trước. Đôi khi, tui lại nhảy thẳng ngay vào quá trình giải quyết vấn đề đó mà không cần hiểu toàn bộ vấn đề là gì vì tui cho rằng "cứ bắt tay vào thì sẽ giải quyết được vấn đề".

Trong phần lớn thời gian, cả hai cách trên đều có hiệu nghiệm. Tuy nhiên, cũng giống như giải toán, nếu chúng ta cứ tìm cách xử lý vấn đề mà không có một hướng đi cụ thể nào thì cuối cùng nó cũng sẽ phản tác dụng. 

Quay lại về thuật toán, tui tin rằng phần lớn dev đều tìm tới việc áp dụng thuật toán một cách cụ thể nhất khi họ đang ở trong một buổi phỏng vấn. Khi bạn đang làm việc, bạn sẽ có một quỹ thời gian khá dài (chắc chắn là dài hơn lúc phỏng vấn) để giải quyết một vấn đề, vì vậy bạn hoàn toàn có thể thử một cách, hai cách, ba cách, bốn cách,... để giải quyết vấn đề. Tuy nhiên, khi đang phỏng vấn, chúng ta không có cái sự dư dả thời gian đó mà thay vào đó, chúng ta thường sẽ bắt đầu buổi phỏng vấn trong một trạng thái vô cùng lo sợ và hoang mang. Vì vậy, sẽ rất tuyệt nếu chúng ta có thể chuẩn bị sẵn cho mình một danh sách các bước chúng ta cần làm để từ đó, chúng ta có thể giải quyết được vấn đề (hoặc chí ít biết bản thân mình cần làm gì, đặc biệt là trong ngữ cảnh một buổi phỏng vấn, nơi mà phần lớn thời gian chúng ta sẽ ngồi khóc ròng trong bụng vì đề bài khó quá).

### Các bước giải quyết vấn đề
Dựa theo cuốn sách "How To Solve It" của tác giả George Póyla xuất bản năm 1945, một cuốn sách tuy thiên về việc giải quyết vấn đề trong toán học nhưng cũng đồng thời mang tới rất nhiều khía cạnh cực kỳ hay trong việc xử lý vấn đề, thì tác giả cho rằng để có thể giải quyết được một bài toán, chúng ta cần đi theo 4 bước chính:

**1. Understand the problem - Hiểu được vấn đề**

Để hoàn toàn hiểu được vấn đề, có **5 ý chính** mà Póyla đề xuất chúng ta đi theo:
- Bài toán đang hỏi cái gì? 
- Xác định những phần chưa rõ ràng, dữ kiện, và điều kiện. 
- Bạn có thể lặp lại / diễn giải lại vấn đề bằng ngôn ngữ và cách diễn đạt của chính bạn?
- Dữ liệu bạn đang có là gì? Điều gì bắt buộc phải làm?
- Bạn đã có đủ dữ kiện để bắt tay vào giải bài toán chưa? Nếu chưa đủ, bạn cần thêm dữ kiện gì?

**2. Devise a Plan - Lập kế hoạch**

Giờ thì khi đã hoàn thành **bước 1**, đồng nghĩa là bạn đã có thể "hiểu" đề bài muốn gì và bạn đã có những gì trong tay, chúng ta sẽ bắt đầu việc lập kế hoạch thông qua các bước sau:
- Nghĩ về các chiến lược bạn có thể thực hiện để giải quyết vấn đề.
- Bạn đã từng gặp một vấn đề tương tự chưa?
- Liệu bạn có thể áp dụng kết quả hoặc phương thức của các vấn đề tương tự vào trường hợp này không?
- Tách vấn đề thành từng phần nhỏ và dễ dàng quản lý chúng.
- Vẽ một biểu đồ hoặc một cái bảng ra giấy nếu bạn thấy chúng có thể có ích.
- Sử dụng phép loại suy, xem xét các trường hợp đặc biệt hoặc làm ngược lại.

**3. Carry out the plan - Triển khai kế hoạch**

Có kế hoạch rồi thì giờ chúng ta phải bắt tay vào giải quyết vấn đề ngay thôi.

## Các bước giải quyết vấn đề trong lập trình

**1. Understand The Problem - Hiểu vấn đề**
- Bạn có thể diễn giải lại đề bài bằng cách diễn đạt của bạn không?
- Bạn đang có những input gì?
- Output cần phải trả ra sẽ là gì?
- Liệu bạn có thể xác định output chỉ bằng input, hay nói cách khác, bạn đã có đủ dữ kiện cần thiết để tìm ra được output?
- (Optional) How should I label the important pieces of data that are part of the problem?

**2. Explore Concrete Examples - Tìm ví dụ, thử nghiệm chúng**
- Viết một vài ví dụ đơn giản (viết ra input và output).
- Tìm các ví dụ phức tạp hơn.
- Tìm các ví dụ có empty input.
- Tìm các ví dụ có invalid input.

**3. Break It Down - Viết hướng giải quyết**
- Sử dụng comment trong code để viết ra từng bước bạn dự định sẽ làm.
- Viết ra tất cả những thứ bạn định làm, đừng code vội.
- Bạn không cần viết code hoặc thậm chí pseudo code, chỉ cần viết ra hướng đi.
- **Viết ra mọi thứ**, dù đó là tạo một biến, return một value.

**4. Solve or Simplify - Giải bài, hoặc giải những phần dễ trước**
- Từ những bước trên, hãy giải bài toán, đặc biệt dựa vào comment ở **bước 3**.
- Nếu vẫn chưa thể giải những phần khó, hãy giải những phần dễ, những phần bạn có thể làm ngay và luôn.

1. Hiểu vấn đề (Understand the problem)

Rõ ràng là nếu không hiểu được vấn đề gì làm sao có thể giải quyết được vấn đề. Tuy nhiên, để có thể hiểu được một vấn đề thì nó cũng là... một vấn đề. Theo Colt, anh có một loạt các bước để có thể giúp bạn hiểu được vấn đề bạn cần phải giải quyết, và đó là đặt ra một loạt các câu hỏi cho chính bản thân bạn. Cá nhân tui thấy thì các bước để có thể hiểu được một vấn đề cũng có thể coi là một thuật toán vậy đó.

1.1 Liệu bạn có thể lặp lại đề bài / câu hỏi? 
Giả sử bạn đang nhìn vào một problem trên LeetCode, giờ sau khi bạn đọc xong đề bài, liệu bạn có thể nào diễn giải lại vấn đề đó theo chính cách hiểu của bạn? Hãy thử tự diễn giải lại đề bài hoặc vấn đề cần được giải quyết dưới cách diễn đạt của bản thân bạn, bằng từ ngữ của chính bạn. Không cần phải nói lại toàn bộ vấn đề hay đọc lại toàn bộ đề bài, hãy cứ thử sắp xếp lại đề bài này theo cách hiểu của bạn theo hướng ngắn gọn là được.

Ví dụ, mình có đề bài: write a function that takes two inputs and return a sum of those two inputs.
-> Diễn đạt lại: make a function that has two params, add these two together then return the result.
-> Hoặc: make a function that takes A and B, make C = A + B and return C.
-> Hoặc đơn giản: viết hàm tính tổng.

Như bạn thấy, cách diễn đạt cũng không khác mấy so với đề bài, tuy nhiên nó sẽ giúp bạn diễn giải lại đề bài dưới chính góc nhìn của bạn, qua đó tự bạn sẽ củng cố lượng thông tin bạn có về vấn đề.

1.2 Input chúng ta có là gì?
Sử dụng lại ví dụ bên trên là **viết một hàm có hai số và trả về tổng của hai số**, thì ngay từ đề bài ta có thể chỉ ra ngay inputs của chúng ta sẽ là hai số. Tuy nhiên, theo Colt Steel thì chưa chắc câu trả lời trên là đủ.

1.3 Output sẽ là gì?

1.4 Liệu bạn có thể xác định được output chỉ thông qua việc nhìn vào input?

1.5 Làm sao để bạn có thể xác định được phần dữ liệu nào là quan trọng nhất?

2. Tìm ra một vài ví dụ, thử nghiệm chúng (Explore the concrete examples)

3. Phân tách vấn đề thành từng phần nhỏ (Break it down!)

4. Giải quyết bài toán, hoặc đơn giản hoá bài toán (Solve / Simplify)

5. Nhìn lại giải pháp, refactor (Look back and refactor)