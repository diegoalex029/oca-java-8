---
id: 02-polymorphism-overriding-overloading
title: Polymorphism, Overriding and Overloading
sidebar_position: 2
---

# Polymorphism

## What is Polymorphism?

An object is polymorphic when it can pass more than one IS-A test.

**Example:** Think of a person named Laura. Laura IS-A person, IS-A student, IS-A daughter. Same person, multiple "roles."

In Java, every object always passes IS-A for:
- Its own type
- All its parent classes
- `Object` (always, no exceptions)

## Reference Variables

The only way to access an object is through a reference variable. The reference type controls what you can do with it.

**Example:** Imagine a doctor named Dr. Smith. If you refer to her as a `Doctor`, you can ask her to diagnose you. If you refer to her as a `Person`, you can only ask basic things like her name. She's the same person — but what you can ask depends on how you see her.

:::tip[Key Rules]
- Type never changes once declared.
- Only methods of the reference type are accessible.
- Can point to any subtype.
:::

## The Problem: Single Inheritance

Java only allows one superclass per class:

```java
class Car extends Vehicle, RadioDevice { // ❌ Not allowed
}
```

**Why?** — The Deadly Diamond of Death 💀

If two parents have the same method, Java wouldn't know which version to use:

A (doStuff)
 / \
B   C   ← both override doStuff()
 \ /
  D ← which doStuff() does D get? 💀

## The Solution: Interfaces

Interfaces define what must be done, not how. A class can implement multiple interfaces:

```java
interface Printable {
    void print();
}

class LaserPrinter extends Machine implements Printable {
    public void print() {
        System.out.println("Laser printing...");
    }
}
```

:::tip
**Extend one class + implement many interfaces = allowed!**
:::

## One Object, Many Reference Types

```java
Student   s = new GradStudent();
Musician  m = s;   // if GradStudent implements Musician
Employee  e = s;   // if GradStudent implements Employee
Object    o = s;   // always valid
```

| Reference | What you can call |
|-----------|------------------|
| `Object` | `toString()`, `equals()` |
| `Student` | Student methods |
| `Musician` | `playInstrument()` |
| `Employee` | `getPaycheck()` |

## Compiler vs JVM

```java
Animal a = new Dog();
a.speak();
// Compiler: "Animal has speak() ✅ — allowed"
// JVM: "But the real object is Dog — run Dog's speak()!"
// Output: "Woof!"
```

| | Compiler | JVM (Runtime) |
|---|---|---|
| **When?** | Before running | While running |
| **Looks at** | Reference type | Actual object type |
| **Asks** | Does `Animal` have `speak()`? | Is the real object a `Dog`? |
| **Result** | Allows or rejects the code | Decides which version runs |

:::tip
The compiler only sees the label on the box. The JVM looks inside the box.
:::

---

# Overriding Methods

## What is Method Overriding?

When a subclass provides its own version of a method it inherited from its superclass.

**Real-life analogy:** A general recipe exists for "food." A chef takes that recipe and rewrites it specifically for "pizza." The original recipe still exists — but the pizza version overrides it.

## Polymorphism: The Magic Moment

```java
Animal a = new Horse(); // reference type: Animal, actual object: Horse
a.eat();                // runs Horse's version of eat()
```

The box analogy: imagine a box labeled "Animal" — but inside there is a horse. When you ask it to eat, the horse eats like a horse.

## Compiler vs JVM for Overriding

| | Compiler | JVM (Runtime) |
|---|---|---|
| **Looks at** | Reference type | Actual object type |
| **Asks** | Does `Animal` have `eat()`? | Is the real object a `Horse`? |

```java
Animal b = new Horse();
b.eat();   // ✅ allowed — Animal has eat()
b.buck();  // ❌ not allowed — Animal does not have buck()
```

## The Access Modifier Rule

The child **cannot** make a method more restrictive than the parent:

| Parent | Child | Allowed? |
|--------|-------|----------|
| `public` | `public` | ✅ Yes |
| `public` | `protected` | ❌ No |
| `public` | `private` | ❌ No |
| `protected` | `public` | ✅ Yes |

## Rules for Overriding

✅ You **MUST**:
- Use the exact same argument list.
- Return the same type or a subtype (covariant return).
- Keep the same or wider access level.

✅ You **CAN**:
- Throw fewer or narrower exceptions than the parent.
- Throw any unchecked (runtime) exception.

❌ You **CANNOT**:
- Throw new or broader checked exceptions.
- Make the method more restrictive.
- Override a `final` method.
- Override a `static` method.
- Override a `private` method (you never inherited it).

## The super Keyword

Use `super` when you want to reuse the parent method and add more behavior:

Animal
└── printYourself() → prints general animal info
Horse extends Animal
└── printYourself()
Step 1: super.printYourself()  → runs Animal's version
Step 2: adds Horse-specific info

:::tip[Rules for super]
✅ You CAN:
- Call the direct parent's overridden method.
- Use it inside instance methods.
- Use it with interfaces: `InterfaceX.super.doStuff()`

❌ You CANNOT:
- Skip levels: `super.super.doStuff()` → ILLEGAL
- Use it with static methods.
:::

## Illegal Overrides

**Case 1 — More Restrictive Access:**

Animal:   public eat()   ✅
Horse:    private eat()  ❌ — hiding it, not overriding it

**Case 2 — New Checked Exception:**

Animal:  eat()                    → no exception
Dog:     eat() throws IOException → adds exception ❌

**Case 3 — Changed Parameters (becomes Overload):**

Animal:  eat()             ← original
Cat:     eat(String food)  ← different signature = OVERLOAD, not override

**Case 4 — Only Return Type Changed:**

Animal:  void eat()    ← returns nothing
Bird:    String eat()  ← returns String ❌

---

# Overloaded Methods

## What is Method Overloading?

Same method name, different parameter list:

```java
void print(int number) { }
void print(String text) { }
```

## Rules of Overloading

✅ MUST:
- Change the parameter list.

✅ CAN:
- Change return type.
- Change access modifier.
- Throw different exceptions.

❌ NOT enough to change only the return type:
```java
int sum(int a, int b)
double sum(int a, int b) // ❌ Not overloading — same parameters
```

## Overloading in Inheritance

```java
class Animal {
    void eat(int amount) { }
}

class Dog extends Animal {
    void eat(String food) { } // overloading, NOT overriding
}
```

## How Java Chooses the Method

Java decides at **compile time** based on the arguments:

```java
void add(int a, int b) { }
void add(double a, double b) { }

add(2, 3);      // int version
add(2.5, 3.5);  // double version
```

## Overloading vs Overriding

| Feature | Overloading | Overriding |
|---------|-------------|------------|
| Parameters | Must change | Must be same |
| When decided | Compile time | Runtime |
| Uses polymorphism | ❌ No | ✅ Yes |
| Based on | Reference type | Object type |