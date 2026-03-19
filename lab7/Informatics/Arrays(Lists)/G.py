n = int(input())
arr = list(map(int, input().split()))

# Меняем местами элементы на месте
for i in range(n // 2):
    arr[i], arr[n-1-i] = arr[n-1-i], arr[i]

print(*arr)  # *arr выводит все элементы через пробел