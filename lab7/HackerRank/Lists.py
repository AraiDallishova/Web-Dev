# Инициализируем пустой список
lst = []

# Читаем количество команд
n = int(input())

# Обрабатываем каждую команду
for _ in range(n):
    command_line = input().split()  # Разделяем команду и аргументы
    command = command_line[0]       # Первая часть - это сама команда
    args = command_line[1:]         # Остальные части - аргументы команды
    
    # Преобразуем аргументы в int, если они есть
    args = list(map(int, args)) if args else []
    
    # Выполняем команду
    if command == "insert":
        lst.insert(args[0], args[1])
    elif command == "print":
        print(lst)
    elif command == "remove":
        lst.remove(args[0])
    elif command == "append":
        lst.append(args[0])
    elif command == "sort":
        lst.sort()
    elif command == "pop":
        lst.pop()
    elif command == "reverse":
        lst.reverse()