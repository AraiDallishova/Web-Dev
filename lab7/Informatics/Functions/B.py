def power(a, n):
    result = 1
    for _ in range(n):
        result *= a
    return result

# Пример использования
a, n = map(float, input().split())
n = int(n)  # n должно быть целым
print(power(a, n))