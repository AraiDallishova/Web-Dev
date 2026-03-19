# main.py

from models import Animal, Dog, Cat

def main():
    # === c. Создание объектов ===
    animals = [
        Dog("Rex", 5, "Golden Retriever"),
        Cat("Whiskers", 3, "Black"),
        Dog("Buddy", 2, "Beagle"),
        Cat("Luna", 1, "White")
    ]
    
    # === c. Перебор объектов и вызов методов ===
    for animal in animals:
        print(animal)                # __str__ для каждого объекта
        print("Sound:", animal.speak())  # Полиморфизм
        
        # Вызов уникальных методов дочерних классов
        if isinstance(animal, Dog):
            print(animal.fetch("ball"))
        if isinstance(animal, Cat):
            print(animal.climb("tree"))
        print("---")  # Разделитель между животными

if __name__ == "__main__":
    main()