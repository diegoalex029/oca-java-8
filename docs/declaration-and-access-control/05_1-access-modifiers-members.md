---
id: 05-access-modifiers-members
title: Access Modifiers - Members
sidebar_position: 5
---

# Declare Class Members

Methods and instance (nonlocal) variables are collectively known as **members**. You can modify a member with both access and nonaccess modifiers, and you have more modifiers to choose from than when declaring a class.

![](/img/declaration-and-access-control/class5/ClassMembers.png)

---

# Access Modifiers for Members

Access modifiers control the visibility of class members to other classes. They determine who can access a method or variable, and are an important part of **encapsulation** in Java.

## Four Access Levels

| Modifier | Description |
|----------|-------------|
| `public` | Accessible from anywhere |
| `protected` | Accessible within the package and subclasses |
| `default` | Accessible only within the same package |
| `private` | Accessible only within the same class |

## Classes vs Members

| Element | Allowed Modifiers |
|---------|------------------|
| Classes | `public`, `default` |
| Methods | `public`, `protected`, `default`, `private` |
| Variables | `public`, `protected`, `default`, `private` |

:::tip
Class members have **more access options** than classes.
:::

## Two Types of Access

- **Accessing members from another class** — when one class accesses methods or variables of another class using the dot operator.
- **Inheritance access** — when a subclass inherits members from its superclass.

---

# Public Members

A `public` member is visible:

- Inside the same class
- Inside the same package
- In other packages
- In subclasses

## Inheritance of Public Members

A `public` member is inherited by all subclasses regardless of package:

```java
package com.example.animals;
class Animal {
    public void eat() {}
}

package com.example.pets;
import com.example.animals.Animal;
class Dog extends Animal {
    void bark() {
        this.eat(); // ✅ Inherited public method
    }
}
```

## Accessing Public Members with Dot Operator

```java
public class Dog {
    public String name;
    public void eat() {
        System.out.println("Eating");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();          // ✅
        dog.name = "Buddy"; // ✅
    }
}
```

## Using `this` to Access Public Members

```java
public class Dog {
    public String name;
    public void eat() {
        System.out.println(this.name + " is eating");
    }
}
```

---

# Private Members

A `private` member is visible **only inside the same class**:

- ✅ Inside the same class
- ❌ Same package
- ❌ Other packages
- ❌ Subclasses

## Accessing Private Members

```java
public class Dog {
    private String name;
    private void eat() {
        System.out.println("Eating");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();          // ❌ Compile-time error
        dog.name = "Buddy"; // ❌ Compile-time error
    }
}
```

## Inheritance of Private Members

A `private` member is **not inherited** by subclasses:

```java
class Animal {
    private void eat() {}
}

class Dog extends Animal {
    void bark() {
        this.eat(); // ❌ Not accessible
    }
}

class Cat extends Animal {
    void meow() {
        this.eat(); // ❌ Not accessible
    }
}
```

---

# Protected Members

A `protected` member is visible:

- ✅ Inside the same class
- ✅ Inside the same package
- ✅ In subclasses (even in different packages)
- ❌ Non-subclass classes in different packages

## Accessing Protected Members with Dot Operator

```java
package com.example.animals;
public class Dog {
    protected String name;
    protected void eat() {
        System.out.println("Eating");
    }
}

// Same package ✅
package com.example.animals;
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();          // ✅
        dog.name = "Buddy"; // ✅
    }
}

// Different package, not a subclass ❌
package com.example.pets;
import com.example.animals.Dog;
public class Cat {
    void meow() {
        Dog dog = new Dog();
        dog.eat();          // ❌ Not a subclass reference
        dog.name = "Buddy"; // ❌ Not a subclass reference
    }
}
```

## Inheritance of Protected Members

```java
package com.example.animals;
public class Dog {
    protected void eat() {
        System.out.println("Eating");
    }
}

package com.example.pets;
import com.example.animals.Dog;
public class Cat extends Dog {
    void meow() {
        this.eat();         // ✅ Subclass reference — allowed
        Dog dog = new Dog();
        dog.eat();          // ❌ Not a subclass reference — not allowed
    }
}
```

:::warning
`protected` access through a superclass reference from a non-subclass in a different package is **not allowed**.
:::

---

# Default Members

A member with **no access modifier** has default access and is visible:

- ✅ Inside the same class
- ✅ Inside the same package
- ❌ Subclasses in different packages
- ❌ Other packages

## Accessing Default Members

```java
package com.example.animals;
public class Dog {
    String name;  // default
    void eat() {} // default
}

// Same package ✅
package com.example.animals;
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();          // ✅
        dog.name = "Buddy"; // ✅
    }
}

// Different package ❌
package com.example.pets;
import com.example.animals.Dog;
public class Cat {
    void meow() {
        Dog dog = new Dog();
        dog.eat();          // ❌
        dog.name = "Buddy"; // ❌
    }
}
```

## Inheritance of Default Members

```java
package com.example.pets;
import com.example.animals.Dog;
public class Cat extends Dog {
    void meow() {
        this.eat(); // ❌ Default access not visible outside package
    }
}
```

---

# Local Variables and Access Modifiers

Local variables **cannot** be declared with access modifiers:

```java
public class Dog {
    public void eat() {
        int foodAmount = 5;          // ✅ Local variable
        public int foodAmount2 = 10; // ❌ Compile-time error
    }
}
```

---

# Summary

## Access Modifiers Allowed per Element

| Modifier | Top Class | Method | Instance Variable | Local Variable |
|----------|-----------|--------|-------------------|----------------|
| `public` | ✅ | ✅ | ✅ | ❌ |
| `default` | ✅ | ✅ | ✅ | ❌ |
| `protected` | ❌ | ✅ | ✅ | ❌ |
| `private` | ❌ | ✅ | ✅ | ❌ |

## Visibility of Members to Other Classes

| Visibility | Same Class | Same Package | Subclass (diff. package) | Other Package |
|------------|-----------|--------------|--------------------------|---------------|
| `public` | ✅ | ✅ | ✅ | ✅ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `default` | ✅ | ✅ | ❌ | ❌ |
| `private` | ✅ | ❌ | ❌ | ❌ |