---
title: "Note tào lao về Pygame #1"
date: 2023-11-28
categories: [coding-notes]
tags: [pygame]
author: Chan Dinh
gravatar: 40c375c9dbbfb6beda5e637079b7341dd87c1f29763338f37fea5b3cfb7d98e8
description: Viết vài note tào lao về Pygame, tập 1.
---

Một vài notes linh tinh không đầu đuôi của tui về pygame, tập một.

---

## Pygame là gì

Pygame là tập hợp của nhiều Python modules được thiết kế để viết game. Pygame nói chung được ***viết trên*** thư viện SDL - Simple DirectMedia Layer. Đoạn này dịch từ trang About của Pygame nên nghĩa chính xác tui cũng không chắc nhưng tui đoán ở đây có nghĩa là Pygame đã wrap / tích hợp SDL lại để thông qua đó hỗ trợ cho bạn viết game. Cũng nhờ đó mà Pygame sẽ giúp cho bạn có thể viết các tựa game hoàn chỉnh. Pygame chạy trên mọi nền tảng, nên game được viết ra từ Pygame chắc chắn là (hoặc gần như là) đa nền tảng. 

### SDL là gì

Như đã nói ở trên thì Pygame sử dụng SDL để hỗ trợ cho bạn viết game dễ hơn. SDL là một thư viện dùng để cung cấp cho bạn quyền truy cập đến các thành phần như là audio, chuột, bàn phím, đồ hoạ (thông qua OpenGL và Direct3D), ở một mức độ ***low-level**. Nói chung đoạn này thì mình tạm hiểu là với Pygame thì bạn có thể viết các script dựa trên thao tác chuột, bàn phím, xử lý âm thanh nhờ có SDL. Chữ low-level theo mình hiểu là bạn phải xử lý mấy cái tác vụ này bằng code, khác với các engine hiện đại thì mấy cái thao tác này có thể sẽ được giảm thiểu thời gian xử lý code của bạn hơn thông qua GUI. Phần này chỉ là mình "võ đoán", còn thực tế có chính xác không thì đợi sau này mình research lại rồi sẽ edit lại bài viết nếu cần.

## Cài đặt

Lý thuyết sơ sơ vậy thôi đụng vào rồi biết. Cài đặt thì theo guide của Pygame, mình sẽ cài bằng `pip`, cái package manager của Python. Như này có nghĩa là mình phải cài Python trước. Máy mình đã cài Python rồi (xác nhận bằng lệnh `python -V` và mình đang chạy 3.12.1), bạn chưa có thì theo dõi guide của Python để cài. Rồi còn cài Pygame thì mình sẽ chạy lệnh này:

`py -m pip install -U pygame --user`

Và máy sẽ bắt đầu cài đặt Pygame, dù mình cũng chưa rõ lắm mấy cái flag này để dùng làm gì. 

Sau đoạn này thì bạn sẽ cài được Pygame. Để test xem có cài được chưa, bạn gõ command sau, Pygame sẽ chạy một cái example cho bạn test:

`py -m pygame.examples.aliens`

Nếu bạn chạy được game mẫu của Pygame, là bạn đã cài đặt xong. 

## Chạy pygame.. như nào?

Giờ cài xong rồi thì như nào nhỉ?

Đầu tiên chắc là tui sẽ thử tạo một file `.py` trước để chạy Python, rồi theo guide của Pygame để test thôi. Tạo trước một file tên... `index.py` đi, tại làm web toàn tạo file index trước không hà!

```bash
touch index.py
code .
```

Giờ bước đầu chưa biết làm gì thì mình theo Guide, paste nguyên cái này vào VS Code rồi run thử:

```python
# Example file showing a basic pygame "game loop"
import pygame

# pygame setup
pygame.init()
screen = pygame.display.set_mode((1280, 720))
clock = pygame.time.Clock()
running = True

while running:
    # poll for events
    # pygame.QUIT là event mà người chơi bấm vào cái nút X góc phải màn hình để close window ấy, thì mình sẽ running sang False và game sẽ tắt.
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # fill the screen with a color to wipe away anything from last frame
    screen.fill("purple")

    # RENDER YOUR GAME HERE

    # flip() the display to put your work on screen
    pygame.display.flip()

    clock.tick(60)  # limits FPS to 60

pygame.quit()
```

Rồi chạy file bằng command: `py index.py`

Bùm! Một cái window với background tím lịm hiện lên. Nói chung là code mẫu của Pygame đưa, họ đã comment khá kĩ nên cũng khá là dễ hiểu (trừ mấy chỗ khó hiểu). 

Nói chung là tạm thời bạn có thể hiểu như này, toàn bộ game của bạn sẽ chạy dựa trên một thứ là Game Loop (như comment đầu tiên có nói). Game Loop là một cái pattern khá là dài nhưng tóm gọn lại thì nó gần như là core của một cái game. Toàn bộ game của bạn có thể sẽ chạy dựa trên một vòng lặp vô tận (điều kiện luôn đúng, điều kiện sai thì game tắt). Tất cả mọi sự kiện ví dụ như xử lý input của người chơi, render hình ảnh, etc., đều sẽ được xử lý ở trong cái vòng lặp này. Và như ví dụ của Pygame thì khi user click vào cái nút X, chúng ta sẽ update lại cái state `running` thành false, cũng chính là cái điều kiện để game loop diễn ra. Khi này, vì điều kiện đã sai, game sẽ tắt.
