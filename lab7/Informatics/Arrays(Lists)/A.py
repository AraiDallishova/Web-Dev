n = int(input())
arr = list(map(int, input().split()))

for i in range(0, n, 2):  # идём с шагом 2
    print(arr[i], end=' ')