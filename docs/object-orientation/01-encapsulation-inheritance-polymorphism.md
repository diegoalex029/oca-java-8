---
id: 01-encapsulation-inheritance-polymorphism
title: Encapsulation, Inheritance and Polymorphism
sidebar_position: 1
---

# Encapsulation

## Definition

Encapsulation is one of the fundamental concepts of object-oriented programming. It is the process of hiding the internal details of an object and exposing only the necessary information to the outside world. This is achieved by using access modifiers to control the visibility of class members.

## Example

```java
public class Person {
    private String name; // only accessible within Person
    public int age;      // accessible from anywhere

    public void setName(String name) {
        this.name = name.toUpperCase(); // logic added before setting
    }

    public String getName() {
        return this.name;
    }

    public void setAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
        this.age = age;
    }

    public int getAge() {
        return this.age;
    }
}
```

:::tip
The `setAge` method includes validation logic to ensure age cannot be negative. The `setName` method modifies the input before setting the variable. Both are examples of how encapsulation lets us control and protect the internal state of an object.
:::

---

# Inheritance and Polymorphism

## instanceof Operator

The `instanceof` operator tests whether an object is an instance of a specific class or implements a specific interface. It returns `true` if the object is an instance of the specified type, `false` otherwise.

```java
public class Main {
    public static void main(String[] args) {
        String str = "Hello, World!";
        System.out.println(str instanceof String); // true
        System.out.println(str instanceof Object); // true
    }
}
```

:::tip
- Every class in Java is a subclass of `Object`.
- Every object in Java is an instance of `Object`.
- Every class inherits methods from `Object` such as `toString()`, `equals()`, `hashCode()`, and `getClass()`.
- These methods can be overridden to provide specific behavior.
:::

## Important Vocabulary

- **Superclass** — A class that is extended by another class. Also known as parent class or base class.
- **Subclass** — A class that extends another class. Also known as child class.
- **Supertype** — A generalization of another type. A superclass is a supertype of its subclasses.
- **Subtype** — A specialization of another type. A subclass is a subtype of its superclass.

---

# Inheritance

## Inheritable Elements of Classes and Interfaces

| Class Members | Classes | Interfaces |
|---------------|---------|------------|
| Instance Variables | ✅ Yes | Not applicable |
| Static Variables | ✅ Yes | Only constants |
| Instance Methods | ✅ Yes | Java 8 default methods |
| Static Methods | ✅ Yes | Accessible but not inherited |
| Constructors | ❌ No | Not applicable |
| Initializer Blocks | ❌ No | Not applicable |

## Example

```java
class Animal {
    public void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    public void bark() {
        System.out.println("Barking");
    }
}

interface CanFly {
    void fly();
}

class Bird extends Animal implements CanFly {
    public void fly() {
        System.out.println("Flying");
    }
}
```

- `Dog` inherits the `eat()` method from `Animal`.
- `Bird` inherits `eat()` from `Animal` and must implement `fly()` from `CanFly`.

---

# Polymorphism (Many Forms)

## Definition

Polymorphism is the ability of an object to take on many forms. Inheritance allows your classes to be accessed polymorphically.

```java
class GameShape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

class Circle extends GameShape {
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

class Square extends GameShape {
    public void draw() {
        System.out.println("Drawing a square");
    }
}

public class Main {
    public static void main(String[] args) {
        GameShape shape1 = new Circle(); // polymorphic reference
        GameShape shape2 = new Square(); // polymorphic reference

        shape1.draw(); // Drawing a circle
        shape2.draw(); // Drawing a square
    }
}
```

## Is-a Relationship

The **Is-a** relationship is based on inheritance — a subclass is a type of its superclass.

- A `Dog` is an `Animal`.
- A `Car` is a `Vehicle`.
- A `Ferrari` is a `Car`.
- A `Student` is a `Person`.
- A `Manager` is an `Employee`.

You express **IS-A** in Java through `extends` and `implements`:

```java
class Dog extends Animal      // Dog IS-A Animal
class Bird extends Animal     // Bird IS-A Animal
```

## Has-a Relationship

The **Has-a** relationship is based on composition — a class contains a reference to another class as a member variable.

```java
class Engine {
    public void start() {
        System.out.println("Engine started");
    }
}

class Car {
    private Engine engine; // Car HAS-A Engine

    public Car() {
        this.engine = new Engine();
    }

    public void startCar() {
        engine.start();
    }
}
```

:::tip
- **IS-A** → use `extends` / `implements` → inheritance
- **HAS-A** → use instance variables → composition
:::