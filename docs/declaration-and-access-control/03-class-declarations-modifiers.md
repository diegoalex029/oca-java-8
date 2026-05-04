---
id: 03-class-declarations-modifiers
title: Class Declarations and Modifiers
sidebar_position: 3
---

# Class Declarations and Modifiers

## About Classes

There are two types of classes: **top-level** and **nested**. Nested classes can be static or non-static. The non-static nested classes are also called **inner classes**.

```java
class TopLevelClass {
    // class body
}
```

![](/img/declaration-and-access-control/class3/classes.png)

## Class Modifiers

In Java there are four access controls but only three access modifiers. The fourth access control level (called **default** or **package access**) is what you get when you don't use any of the three access modifiers.

![](/img/declaration-and-access-control/class3/modifiers.png)

:::info
Every class, method, and instance variable you declare has an access control, whether you explicitly type one or not.
:::

## Top Level Class Access

A top-level class can be declared with only `public` or default access:

| Modifier | Allowed? |
|----------|----------|
| `public` | ✅ Yes |
| *(default / package-private)* | ✅ Yes |
| `protected` | ❌ No |
| `private` | ❌ No |

Valid examples:
```java
public class A {}
class B {}  // default
```

Invalid examples:
```java
protected class C {}  // ❌
private class D {}    // ❌
```

## Nested Class Access

A nested class can be declared with any of the four access control levels:

| Modifier | Allowed? |
|----------|----------|
| `public` | ✅ Yes |
| `protected` | ✅ Yes |
| `default` | ✅ Yes |
| `private` | ✅ Yes |

```java
class Outer {
    public class A {}
    protected class B {}
    class C {}         // default
    private class D {}
}
```

## Class Access

When we say code from class A has access to class B, it means class A can:

- Create an **instance** of class B.
- **Extend** class B (become a subclass of class B).
- **Access** certain methods and variables within class B.

:::tip
Access means visibility.
:::

---

# Top-Level Class Access Modifiers

- `public` — The class is accessible from any other class.
- `default` (no modifier) — The class is accessible only within its own package.

## Default Access

A class with default access has no modifier preceding it in the declaration. Think of default access as **package-level access**.

```java
class Person {}  // default access
```

Same package — works:
```java
package com.example.animals;
public class Test {
    public static void main(String[] args) {
        Dog dog = new Dog();  // ✅ Valid, same package
    }
}
```

Different package — fails:
```java
package com.example.test;
import com.example.animals.Dog;
public class Test {
    public static void main(String[] args) {
        Dog dog = new Dog();  // ❌ Invalid, different package
    }
}
```

![](/img/declaration-and-access-control/class3/default-access.png)

## Public Access

A class declared as `public` gives all classes from all packages access to it.

```java
public class Person {}  // public access
```

Same package — works:
```java
package com.example.animals;
class Test {
    public static void main(String[] args) {
        Dog dog = new Dog();  // ✅ Valid
    }
}
```

Different package — also works:
```java
package com.example.test;
import com.example.animals.Dog;
class Test {
    public static void main(String[] args) {
        Dog dog = new Dog();  // ✅ Valid
    }
}
```

![](/img/declaration-and-access-control/class3/public-access.png)

---

# Top-Level Class Non-Access Modifiers

A top-level class can also be declared with `final`, `abstract`, and `strictfp`:

- `final` — The class cannot be subclassed.
- `abstract` — The class cannot be instantiated and may contain abstract methods.
- `strictfp` — The class uses strict floating-point calculations.

:::warning
A class cannot be both `final` and `abstract` at the same time — `final` prevents subclassing while `abstract` requires it.
:::

## Valid and Invalid Combinations

Valid:
```java
public final class A {}           // ✅
public abstract class B {}        // ✅
public strictfp class C {}        // ✅
public strictfp final class D {}  // ✅
```

Invalid:
```java
public final abstract class D {}      // ❌
public abstract strictfp class E {}   // ❌
public final strictfp class F {}      // ❌
```

## Final Classes

A `final` class cannot be subclassed. Final classes are often used to create **immutable classes**. For example, `String` in Java is a final class.

```java
public final class MyFinalClass {
    // class body
}
```

Invalid subclass:
```java
public class MySubClass extends MyFinalClass {  // ❌ Cannot extend a final class
}
```

![](/img/declaration-and-access-control/class3/final-class.png)

## Abstract Classes

An `abstract` class cannot be instantiated. It is meant to be subclassed and can contain abstract methods that subclasses must implement.

```java
public abstract class MyAbstractClass {
    public abstract void myAbstractMethod();  // abstract method

    public void myConcreteMethod() {          // concrete method
        // method body
    }
}
```

Valid subclass:
```java
public class MySubClass extends MyAbstractClass {
    @Override
    public void myAbstractMethod() {
        // implementation
    }
}
```

Invalid instantiation:
```java
MyAbstractClass obj = new MyAbstractClass();  // ❌ Cannot instantiate
```

:::tip
- An abstract class **can** have non-abstract methods.
- If a class has an abstract method, the class **must** be declared abstract.
- An abstract class **cannot** be both `final` and `abstract`.
- An abstract class **cannot** be instantiated, but it can be subclassed.
:::