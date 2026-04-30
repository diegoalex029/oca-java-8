---
id: 01-overview-java
title: Overview of Java
sidebar_position: 1
---

# Overview of Java

Java is an object-oriented programming language. It is based on a collection of objects, each with its own state and behavior, and these objects communicate with each other.

![](/img/class1/object-oriented-programming.png)

# Useful Terms

- Class
- Object
- State
- Behavior
- Inheritance
- Interface

## Class

It is a template that describes an object's states and behaviors.

![](/img/class1/class.png)

## Object

An object is an instance of a class with its own states and behaviors.

![](/img/class1/object1.png)
![](/img/class1/object2.png)

## State

A state is the set of variables that describe an object's characteristics.

![](/img/class1/state.png)

## Behavior

Behavior is a set of methods that define how a class works and behaves.

![](/img/class1/behavior.png)

## Inheritance

Inheritance is a mechanism in which one class acquires the properties and methods of another class.

![](/img/class1/inheritance.png)

## Interface

An interface is a contract that defines a set of methods that a class must implement.

![](/img/class1/interface.png)

# Features and Benefits

## Object-Oriented
Java offers a natural way to think about how the components in a system should be constructed and how they should interact.

## Encapsulation
Encapsulation allows a software component to hide its data from other components, protecting the data from being updated without the component's approval or knowledge.

## Memory Management
Java has an automatic memory management system called **Garbage Collection (GC)** that helps to manage memory allocation.

## Huge Standard Library
Java provides a vast standard library that includes pre-written classes and methods for various tasks, such as data structures, networking, file I/O, and more.

## Secure by Design
Java has built-in security features, such as the Java Security Manager and bytecode verification, that help to protect against malicious code and unauthorized access.

## Write Once, Run Anywhere
Java code can run on any platform that has a **Java Virtual Machine (JVM)**, making it a highly portable language.

## Strongly Typed
Java is a strongly typed language, which means that variables must be declared with a specific data type.

## Multithreading
Java provides built-in language features and APIs that allow programs to use many operating-system processes (hence, many "cores") at the same time.

# Identifiers and Keywords

## Legal Identifiers

A legal identifier must follow these rules:

- It can contain characters, digits, underscores, and currency symbol.
- It must start with a character, an underscore, or a currency symbol.
- It cannot start with a digit.
- After the first character, it can have any combination of characters, digits, underscores, and currency symbol.
- It cannot be a keyword or a reserved word.

:::tip
Java is case-sensitive, so **"myDog"** and **"mydog"** would be considered different identifiers.
:::

## Keywords

Keywords are predefined, reserved words used in Java programming that have special meanings to the compiler.

![](/img/class1/key-words.png)

## Legal vs Illegal Identifiers

| Legal Identifiers | Illegal Identifiers |
|-------------------|---------------------|
| `myVariable`      | `2ndVariable`       |
| `_myVariable`     | `my-Variable`       |
| `$myVariable`     | `:myVariable`       |
| `myVariable123`   | `-var`              |
| `my_variable`     | `public`            |
| `myVariable$`     | `.a`                |
| `myVar123`        | `#void`             |

# Oracle's Java Code Conventions

## Classes and Interfaces

- Class names should be **nouns**
- Interface names should be **adjectives**
- Use **PascalCase** (first letter of each word capitalized)

```java
public class Animal {
    // class body
}

public interface Movable {
    // interface body
}

public class car { // ❌ Valid but not recommended
    // class body
}
```

## Methods

Method names should be **verbs** in **camelCase**.

```java
public void getName() {
    // method body
}

public void calculatetotal() { // ❌ Valid but not recommended
    // method body
}
```

## Variables

Variable names should be **short yet meaningful** in **camelCase**.

```java
private int numberOfLegs;
private int NumberOfWheels; // ❌ Valid but not recommended
```

## Constants

Java constants are created by marking variables `static` and `final`. Use **UPPER_SNAKE_CASE**.

```java
public static final int MAX_HEIGHT = 100;
public static final int min_width = 50; // ❌ Valid but not recommended
```

# Source File Declarations

:::warning
- A source file can contain multiple classes, but only **one public class**.
- The name of the public class must **match** the name of the source file (including capitalization).
- If there is no public class, the source file can have any name.
- Comments can appear at the beginning or end of any line of code.
- The `package` statement, if present, must be the **first line** in the source file (excluding comments).
- `import` statements, if present, must appear **after** the `package` statement and before any class declarations.
:::