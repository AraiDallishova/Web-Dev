# Читаем количество слов
n = int(input())

# Словарь для подсчёта количества
counts = {}
# Список для сохранения порядка появления слов
order = []

for _ in range(n):
    word = input().strip()  # убираем \n и лишние пробелы
    if word not in counts:
        counts[word] = 1
        order.append(word)  # сохраняем порядок первого появления
    else:
        counts[word] += 1

# Выводим количество различных слов
print(len(order))

# Выводим количество повторений каждого слова в порядке первого появления
print(" ".join(str(counts[word]) for word in order))