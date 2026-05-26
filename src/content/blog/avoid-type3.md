---
author: Yasunari Hikima
pubDatetime: 2026-05-25T01:29:11
modDatetime: 2026-05-25T01:29:11
title: Avoiding Type 3 fonts
slug: avoid-type3
featured: false
draft: false
tags:
    - tips
    - matplotlib
description: Avoiding Type 3 fonts.
---

Python のパッケージである `matplotlib` で図を作成するとき，デフォルトの設定では Type 3 フォントと呼ばれるフォントが使われるようである．
日常的には特に問題ないと思われるのだが，論文に用いる図をこの Type 3 フォントを用いて作成すると，原稿をシステムにアップロードしたときにシステム側で弾かれるということが何度かあった．
解決策は単純で，[Avoiding Type 3 fonts in matplotlib plots](https://phyletica.org/matplotlib-fonts/) の記事にあるように，Python コード内で以下の設定を行えばよい．

```python
import matplotlib
matplotlib.rcParams['pdf.fonttype'] = 42
matplotlib.rcParams['ps.fonttype'] = 42
```

これにより，`savefig` 関数で `pdf` を作成したときに図中で使用されるフォントは Type 42 フォントと呼ばれるフォントが使用されるようになる．