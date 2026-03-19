def xor(x, y):
    return (x and not y) or (not x and y)

# Пример использования
x, y = map(int, input().split())  # 0 или 1
print(int(xor(bool(x), bool(y))))