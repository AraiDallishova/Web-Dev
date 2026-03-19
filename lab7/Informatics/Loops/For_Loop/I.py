x = int(input())
count = 0
for i in range(1, int(x**0.5)+1):
    if x % i == 0:
        count += 2 if i*i != x else 1
print(count)