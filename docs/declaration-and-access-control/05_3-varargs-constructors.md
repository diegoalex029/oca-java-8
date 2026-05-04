---
id: 05_3-varargs-constructors
title: Var Args and Constructors
sidebar_position: 7
---

# Var Args Methods

It's important to understand the meaning of arguments and parameters in Java, and how to use var args methods.

## Arguments and Parameters

- **Parameters** are the variables declared in the method signature that receive values when the method is called.
- **Arguments** are the actual values passed to the method when it is called.

```java
public void eat(int foodAmount) {
    System.out.println("Eating " + foodAmount + " units of food");
}

public static void main(String[] args) {
    Dog dog = new Dog();
    dog.eat(5); // 5 is the argument, foodAmount is the parameter
}
```

## Var Args Methods

A var args method can accept a **variable number of arguments**. It is declared using an ellipsis (`...`) after the parameter type.

```java
public class Dog {
    public void eat(int foodAmount, String... foodTypes) {
        System.out.println("Eating " + foodAmount + " units of food");
        System.out.println("Food types: " + String.join(", ", foodTypes));
    }
}

public static void main(String[] args) {
    Dog dog = new Dog();
    dog.eat(5, "Bone", "Meat", "Kibble");
}
```

In this example the first argument `5` is assigned to `foodAmount`, and the remaining arguments are collected into an array assigned to `foodTypes`.

:::warning Rules for Var Args
- The var args parameter must be the **last parameter** in the method signature.
- Only **one var args parameter** is allowed per method.
- You cannot have any parameters after a var args parameter.
:::

---

# Constructor Declarations

- A constructor has the **same name as the class** and **no return type**.
- Every time you create an object, you are calling a constructor.
- A constructor is used to **initialize objects**.
- Every class has at least one constructor. If you don't declare one, the Java compiler provides a **default no-argument constructor** automatically.

## Legal Constructor Declarations

```java
public class Dog {
    // ✅ No-argument constructor
    public Dog() {
        System.out.println("A dog has been created!");
    }

    // ✅ Constructor with parameters
    public Dog(String name, int age) {
        System.out.println("A dog named " + name + " who is " + age + " years old has been created!");
    }
}
```

## Illegal Constructor Declarations

```java
public class Dog {
    // ❌ Has a return type — this is a method, not a constructor
    public void Dog() {
        System.out.println("Not a constructor.");
    }

    // ❌ Different name from the class — this is a regular method
    public void createDog() {
        System.out.println("Not a constructor.");
    }
}
```

:::tip
The key difference between a constructor and a method is that a constructor has **no return type** and its name **must match the class name exactly**.
:::