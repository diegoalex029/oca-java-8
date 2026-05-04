---
id: 06-variable-declarations-enums
title: Variable Declarations and Enums
sidebar_position: 8
---

# Variable Declarations

There are two types of variables in Java:

- **Primitive variables**
- **Reference variables**

## Primitive Variables

Java has 8 primitive types:

| Category | Types |
|----------|-------|
| Integers | `byte`, `short`, `int`, `long` |
| Decimals | `float`, `double` |
| Others | `char`, `boolean` |

```java
int age = 25;
boolean isActive = true;
```

:::tip
- The **type** cannot change after declaration.
- The **value** can change.
:::

## Reference Variables

- Store a reference (memory address) to an object.
- Type cannot change.
- Can point to the same type or subtypes.

```java
String name = "Diego";
name = "Alex"; // ✅
```

## Types of Variables

```java
class Example {
    int age;           // instance variable
    static int count;  // static variable

    void test(int x) { // parameter
        int y = 10;    // local variable
    }
}
```

## Numeric Order

From smallest to largest:
byte → short → int → long → float → double

:::tip
Larger types store bigger values.
:::

## Signed Numbers

All numeric types are signed — they can represent both positive and negative values.

- Leftmost bit = sign
- `0` → positive
- `1` → negative

## Boolean and Char

- `boolean` — only `true` or `false`
- `char` — single 16-bit Unicode character, range: `0` to `65535`

---

# Instance Variables

Declared inside a class, outside methods. Belong to each object:

```java
class Person {
    String name;
    int age;
}
```

Each object has its own copy — `person1.name` and `person2.name` are independent.

## Instance Variable Modifiers

✅ Allowed:
- Access modifiers (`public`, `private`, etc.)
- `final`
- `transient`

❌ Not allowed:
- `abstract`, `synchronized`, `native`, `strictfp`, `static`

---

# Local Variables

Declared inside methods. Exist only while the method runs.

```java
void test() {
    int x = 10; // temporary variable
}
```

:::warning Local Variable Rules
- Must be **initialized** before use.
- Have **no default values**.
- Scope is limited to the method only.

```java
int x;
System.out.println(x); // ❌ Variable might not have been initialized
```
:::

## Shadowing

A local variable can have the same name as an instance variable:

```java
class Test {
    int x = 5;

    void method(int x) {
        System.out.println(x); // prints local x, not instance x
    }
}
```

---

# Arrays

Arrays are objects that store multiple values of the same type.

```java
int[] key;   // ✅ Recommended
int key[];   // ✅ Legal but less readable
```

:::warning
Cannot define size in declaration:

```java
int[5] nums;        // ❌
int[] nums = new int[5]; // ✅
```
:::

## Multidimensional Arrays

```java
String[][][] occupantName; // 3D array
String[] managerName[];    // ⚠️ Legal but not recommended
```

---

# Variable Modifiers

## Final Variables

A `final` variable cannot be reassigned:

```java
final int x = 10;
x = 20; // ❌
```

:::tip Final Rules
- Final **class** → cannot be subclassed.
- Final **method** → cannot be overridden.
- Final **variable** → cannot be reassigned.
:::

## Transient Variables

Skipped during serialization:

```java
transient int password;
```

:::info
Not important for the OCA exam.
:::

## Volatile Variables

Used in multithreading to ensure visibility of changes across threads:

```java
volatile int count;
```

:::info
For the exam: just know it exists.
:::

## Static Variables

Belong to the class, not to objects. Shared by all instances:

```java
class Counter {
    static int total = 0;
}
```

✅ Can mark as `static`:
- Methods
- Variables
- Initialization blocks

❌ Cannot mark as `static`:
- Constructors
- Classes (unless nested)
- Interfaces (unless nested)
- Local variables

---

# Summary of Variables

| Type | Description |
|------|-------------|
| **Primitives** | Store values directly |
| **References** | Store memory addresses |
| **Instance** | Belong to each object |
| **Static** | Shared by all objects |
| **Local** | Temporary, exist inside a method |
| **Arrays** | Objects stored in the heap |

---

# What is an Enum?

An enum represents a **fixed set of constants**. A variable can only take predefined values, which helps prevent errors.

```java
enum CoffeeSize { BIG, HUGE, OVERWHELMING }
```

## Why Use Enums?

Without enums — error-prone:
```java
String size = "BIG"; // risk of typos: "big", "Large", etc.
```

With enums — type safe:
```java
CoffeeSize size = CoffeeSize.BIG; // ✅
```

## Basic Structure

```java
enum CoffeeSize {
    BIG, HUGE, OVERWHELMING
}
```

## Where Can Enums Be Declared?

✅ Valid:
- As a separate class
- Inside another class

❌ Invalid:
- Inside a method

![](/img/declaration-and-access-control/class6/Enums.png)

## Enums Are Objects

Enums are **NOT** Strings or ints — they are objects of their own type:

```java
CoffeeSize cs = CoffeeSize.BIG; // BIG is an instance of CoffeeSize
```

## Enum with Data

Each constant can store its own value:

```java
enum CoffeeSize {
    BIG(8), HUGE(10), OVERWHELMING(16);

    private int ounces;

    CoffeeSize(int ounces) {
        this.ounces = ounces;
    }

    public int getOunces() {
        return ounces;
    }
}
```

Internally:
- `BIG(8)` → calls constructor → stores `8`
- `HUGE(10)` → calls constructor → stores `10`

## Accessing Enum Data

```java
CoffeeSize size = CoffeeSize.BIG;
size.getOunces(); // returns 8
```

:::warning Constructor Rule
You cannot manually instantiate an enum:

```java
new CoffeeSize(8); // ❌ Not allowed
```

Java handles instantiation automatically when you declare `BIG(8)`.
:::

## Order Matters

Enums maintain declaration order:

| Constant | Index |
|----------|-------|
| `BIG` | 0 |
| `HUGE` | 1 |
| `OVERWHELMING` | 2 |