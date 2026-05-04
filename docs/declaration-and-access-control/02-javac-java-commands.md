---
id: 02-javac-java-commands
title: Using the javac and java Commands
sidebar_position: 2
---

# Using the javac and java Commands

Although using an IDE is helpful, we should also know how to compile and run Java programs from the command line. Therefore, we will learn how to use the `javac` and `java` commands.

## Compiling with javac

The `javac` command is used to invoke Java's compiler. It translates Java source code into bytecode, which is stored in `.class` files.

![](/img/declaration-and-access-control/class2/javac.png)

## Example

We have a simple Java program in a file called `Hola.java`:

![](/img/declaration-and-access-control/class2/javac_explanation.png)

## Other javac options

It's important to remember that it is possible to compile multiple files at once:

```bash
javac File1.java File2.java File3.java
```

Whenever you specify multiple options and/or files, they should be separated by spaces.

And some of the following are legal javac commands:

```bash
javac -help
javac -version
```

---

# Launching Applications with java

The `java` command is used to invoke the Java Virtual Machine (JVM). It launches Java applications by running the bytecode stored in `.class` files.

It's important to specify exactly one class file to execute, and the `java` command assumes you're talking about a `.class` file, so you don't specify the `.class` extension on the command line.

![](/img/declaration-and-access-control/class2/Launching.png)
![](/img/declaration-and-access-control/class2/Launching2.png)

## What are args?

![](/img/declaration-and-access-control/class2/argsExplanation.png)

- `args[0]` = "Hello"
- `args[1]` = "Student"

- Args are a list of values that come from the terminal.
- They all come in as Strings.

## Arrays

In this topic, it is very important to understand array indexing. Indexes start at 0.

- `args[0]` → First value
- `args[1]` → Second value
- `args[2]` → Third value

---

# Using public static void main(String[] args)

Naming a method `main()` doesn't give it the superpowers we normally associate with `main()`. As far as the compiler and the JVM are concerned, the only version of `main()` with superpowers is the `main()` with this signature:

```java
public static void main(String[] args)
```

It's important to know that there is some flexibility in the declaration of the special `main()` method. The order of its modifiers can be altered; the String array doesn't have to be named `args`. The following are all legal declarations:

```java
static public void main(String[] args)
public static void main(String... fruits)
static public void main(String animals[])
```

- `String...` is equivalent to `String[]`
- `String animals[]` is equivalent to `String[] animals`

## Things you shouldn't do

Remove the `public` or `static` modifiers:
```java
static void main(String[] args)
public void main(String[] args)
```

Change the return type from `void` to something else:
```java
public static int main(String[] args)
```

Change the parameter type from `String[]` to something else:
```java
public static void main(int[] args)
```

:::warning
- Missing `public` or `static` → It won't run.
- Changing `void` or `String[]` → It won't run.
:::

:::tip
- Only one signature starts the program.
- The args parameter can be named whatever you want.
- `String[] args`, `String... args`, or `String args[]` are all valid.
- Multiple main methods are allowed (overloading), but only the standard one is the entry point.
:::

---

# Import Statements and the Java API

All a Java `import` statement does is save you some typing. That's it.

## What is the Java API?

Java provides a huge collection of built-in classes. These classes are part of the Java API (Application Programming Interface). Java developers usually combine their own classes with classes written by other developers.

![](/img/declaration-and-access-control/class2/JavaApi.png)

## Fully Qualified Names

A fully qualified name includes the package name and the class name. Fully qualified names avoid conflicts between classes, ensuring that Java always knows exactly which class we are referring to.

![](/img/declaration-and-access-control/class2/FullyName.png)

## What Is an Import Statement?

Although fully qualified names are safe, they require a lot of typing. The `import` statement allows us to use a class without writing its full name. It is written at the top of the file and works as a shortcut.

## What Import Really Means

- `import` does NOT copy or include code.
- It only saves typing.

❌ Without import:
```java
java.util.ArrayList<String> list =
    new java.util.ArrayList<>();
```

✅ With import:
```java
import java.util.ArrayList;

ArrayList<String> list =
    new ArrayList<>();
```

## Importing Multiple Classes

Packages usually contain many classes. You can import several classes from the same package using a wildcard:

```java
import java.util.*;
```

The wildcard `(*)` allows Java to search the entire package for the required classes.

:::warning
The wildcard does **NOT** import subpackages.
:::

## Mixing Import Statements

You can combine specific imports and wildcard imports:

```java
import java.util.ArrayList;
import java.util.*;
import java.io.File;
```

## Summary

- The Java API provides many useful classes.
- Fully qualified names avoid class conflicts.
- Import statements make code cleaner and easier to read.
- Wildcards help when using many classes from one package.

---

# Static Import Statements

Static imports allow us to use static members without writing the class name.

## What is Static Import?

- Works with static members
- Saves typing
- Optional feature

## Static Members

Static members belong to the class, not to an object. They are accessed using the class name.

![](/img/declaration-and-access-control/class2/StaticMembers.png)

## Why Static Import Exists?

Without static import:
```java
System.out.println(Integer.MAX_VALUE);
```

With static import:
```java
import static java.lang.System.out;
import static java.lang.Integer.*;

out.println(MAX_VALUE);
```

Static import lets Java know where static members come from, so we don't need to write the class name.

## Rules and Warnings

:::tip
- Must write `import static` (not `static import`).
- Can import static methods and static constants.
- Use only if it improves readability.
:::

:::warning
Avoid static imports if they cause confusion about where a member comes from.
:::