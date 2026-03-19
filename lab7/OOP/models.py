# models.py

# === a. Базовый класс ===
class Animal:
    """Базовый класс Animal"""
    
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species  # Вид животного
    
    def speak(self):
        """Возвращает звук животного"""
        return "Some generic sound"
    
    def description(self):
        """Возвращает описание животного"""
        return f"{self.name} is a {self.age}-year-old {self.species}"
    
    def __str__(self):
        """Строковое представление объекта"""
        return f"{self.name} ({self.species}, {self.age} years old)"


# === b. Дочерние классы ===

class Dog(Animal):
    """Класс Dog наследует Animal"""
    
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed  # Особенность собаки
    
    def speak(self):
        """Переопределение метода speak"""
        return "Woof!"
    
    def fetch(self, item):
        """Уникальный метод для собак"""
        return f"{self.name} fetched the {item}!"

    def __str__(self):
        """Переопределение строкового представления"""
        return f"{self.name} ({self.breed} dog, {self.age} years old)"


class Cat(Animal):
    """Класс Cat наследует Animal"""
    
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color  # Особенность кошки
    
    def speak(self):
        """Переопределение метода speak"""
        return "Meow!"
    
    def climb(self, thing):
        """Уникальный метод для кошек"""
        return f"{self.name} climbed the {thing}!"
    
    def __str__(self):
        """Переопределение строкового представления"""
        return f"{self.name} ({self.color} cat, {self.age} years old)"