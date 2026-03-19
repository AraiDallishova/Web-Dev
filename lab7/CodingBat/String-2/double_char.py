def double_char(s):
    result = ''
    for char in s:
        result += char * 2  # удваиваем символ
    return result


print(double_char('The'))       # 'TThhee'
print(double_char('AAbb'))      # 'AAAAbbbb'
print(double_char('Hi-There'))  # 'HHii--TThheerree'