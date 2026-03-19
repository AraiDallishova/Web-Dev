# Чтение количества тестов
t = int(input())

for _ in range(t):
    a, b = input().split()
    try:
        # Пробуем выполнить целочисленное деление
        print(int(a) // int(b))
    except (ZeroDivisionError, ValueError) as e:
        # Ловим ошибки и выводим их
        print("Error Code:", e)