---
id: 05_2-nonaccess-modifiers-members
title: Nonaccess Modifiers - Members
sidebar_position: 6
---

# Nonaccess Members Modifiers

In addition to access modifiers, class members can also be modified with nonaccess modifiers that provide additional functionality or behavior.

## Nonaccess Modifiers for Class Members

| Modifier | Description |
|----------|-------------|
| `static` | Member belongs to the class rather than an instance. |
| `final` | Member cannot be modified after initialization. |
| `abstract` | Member must be implemented by subclasses. |
| `synchronized` | Member can only be accessed by one thread at a time. |
| `volatile` | Member can be accessed by multiple threads without synchronization. |
| `transient` | Member should not be serialized. |
| `native` | Member is implemented in native code (e.g., C or C++). |
| `strictfp` | Member uses strict floating-point calculations. |

---

# Nonaccess Modifiers for Methods

## Final Methods

A method declared as `final` **cannot be overridden** by subclasses:

```java
class Animal {
    public final void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    public void eat() { // ❌ Cannot override final method
    }
}
```

## Final Method Arguments

Method arguments can also be declared as `final`. A final argument **cannot be modified** within the method:

```java
public void eat(final int foodAmount) {
    // foodAmount = 5; // ❌ Cannot modify final argument
    System.out.println("Eating " + foodAmount + " units of food");
}
```

## Abstract Methods

- An abstract method ends with a semicolon (`;`) instead of a method body.
- Must be overridden by concrete subclasses.
- The class containing the abstract method must also be declared `abstract`.
- A non-concrete subclass can choose not to implement it, but must then also be declared `abstract`.

```java
abstract class Animal {
    public abstract void eat(); // abstract method
}

class Dog extends Animal {
    public void eat() {
        System.out.println("Eating"); // ✅ Must provide implementation
    }
}

abstract class Cat extends Animal {
    // ✅ Does not implement eat(), so must be abstract
}
```

## Inheritance of Abstract Methods

```java
abstract class Animal {
    public abstract void eat();
}

abstract class Mammal extends Animal {
    // ✅ Does not implement eat(), so must be abstract
}

class Dog extends Mammal {
    public void eat() {
        System.out.println("Eating"); // ✅ First concrete class must implement
    }
}
```

:::warning Important Notes
- `abstract` cannot be combined with `final`.
- `abstract` cannot be combined with `static`.
- `abstract` cannot be combined with `private`.
:::

## Synchronized Methods

A `synchronized` method can only be accessed by **one thread at a time**, useful for preventing race conditions:

```java
public synchronized void eat() {
    System.out.println("Eating");
}
```

:::info
`synchronized` is not commonly tested on the OCA exam. Only applies to methods, not variables or classes.
:::

## Native Methods

A `native` method is implemented in native code (e.g., C or C++) rather than Java:

```java
public native void eat();
```

:::info
`native` is not commonly tested on the OCA exam. Only applies to methods, not variables or classes.
:::

## Strictfp Methods

A `strictfp` method uses strict floating-point calculations for consistent results across platforms:

```java
public strictfp void eat() {
    System.out.println("Eating");
}
```

:::info
`strictfp` is not commonly tested on the OCA exam. Applies to methods and classes, but not variables.
:::

---

# Summary

| Modifier | Description | Applicable To |
|----------|-------------|---------------|
| `static` | Member belongs to the class, not an instance. | Methods, Variables |
| `final` | Cannot be modified after initialization. | Methods, Variables, Classes |
| `abstract` | Must be implemented by subclasses. | Methods, Classes |
| `synchronized` | Only one thread at a time. | Methods |
| `native` | Implemented in native code. | Methods |
| `strictfp` | Strict floating-point calculations. | Methods, Classes |