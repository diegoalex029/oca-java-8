---
id: 04-use-interfaces
title: Use Interfaces
sidebar_position: 4
---

# Use Interfaces

## Declaring an Interface

What is an interface?

- An interface defines a **contract**.
- It describes what a class **can do**, not how it does it.
- Interfaces do not have instance state.

## Key Ideas

- A class uses `implements` to follow an interface.
- A class must implement all abstract methods of the interface.
- Interfaces allow unrelated classes to share the same behavior.

## Interface Basics

```java
public interface Bounceable {
    void bounce();
}
```

:::tip Important Rules
- Interfaces are implicitly `abstract`.
- Interface methods are implicitly `public` and `abstract`.
- Interfaces cannot be instantiated.
- A class can implement multiple interfaces.
:::

---

# Declaring Interface Constants

- Interfaces can contain constants.
- Constants are shared by all implementing classes.

All interface variables are implicitly:

```java
public static final
```

## Interface Constants Example

```java
interface Config {
    int MAX_SIZE = 10;
}
```

The compiler sees:

```java
public static final int MAX_SIZE = 10;
```

:::warning Important Notes
- It is not necessary to write `public static final`.
- Interface constants must be initialized.
- Interface constants cannot be changed — they are read-only.
:::

---

# Declaring Default Interface Methods

A **default method** is a method with implementation inside an interface, introduced in Java 8.

## Example

```java
default void log() {
    System.out.println("Logging...");
}
```

:::tip Rules
- Must use the `default` keyword.
- Are implicitly `public`.
- Must have a method body.
- Cannot be: `abstract`, `static`, `final`, `private` or `protected`.
:::

## Using Default Methods

```java
interface Printer {
    default void print() {
        System.out.println("Printing...");
    }
}

class LaserPrinter implements Printer {
    // inherits print() automatically
}
```

:::info
The `default` keyword can be used only with interface method signatures, not class method signatures.
:::

---

# Declaring Static Interface Methods

A **static interface method** is a method with implementation that belongs to the interface itself. When invoking it, the interface name **must** be included in the invocation.

## Example

```java
interface MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}
```

:::tip Rules
- Must use the `static` keyword.
- Are implicitly `public`.
- Must have a method body.
- Cannot be: `abstract`, `final`, `private` or `protected`.
:::

## Using Static Interface Methods

```java
MathUtils.add(2, 3);  // ✅ Correct — must use interface name
```

:::warning
Static interface methods must always be called using the interface name, never through an instance.
:::

---

# Summary

![](/img/declaration-and-access-control/class4/InterfacesStructure.png)