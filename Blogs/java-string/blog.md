---
title: Java Programming String Programs
keywords: Java
---

# Java programming String Programs

# YOU CAN FIND PROGRAMS BELLOW:

## P.1.String Basic Functions.

*Program*

```java
package string;

public class Stringbasicfuctions
{
    public static void main(final String[] args) {
        final String s1 = "Zeel";
        System.out.println(s1.toUpperCase());
        System.out.println(s1.toLowerCase());
        final String replace = s1.replace('e', 'E');
        System.out.println(replace);
        System.out.println(replace.contains("e"));
        final String s2 = "nirma";
        final String s3 = "niRma";
        System.out.println(s2.equals(s3));
        System.out.println(s2.charAt(2));
        System.out.println(s2.endsWith("a"));
 }
}
```

*Output:*

```terminal
ZEEL
zeel
ZEEl
false
false
r
true
```

## P.2.String Buffer basic Functions.

*Program*

```java
package string;
public class Stringbuffer
 {
    public static void main(String[] args)
    {
        StringBuffer s = new StringBuffer("zeel boss");
        System.out.println(s);
        System.out.println(s.append("don!"));
        System.out.println(s.insert(1, 'I'));
        System.out.println(s.replace(0,3, "ZEE"));
        System.out.println(s.delete(0, 1));
        System.out.println(s.reverse());
        System.out.println(s.capacity());

    }
   
}
```

*Output:*

```terminal
zeel boss
zeel bossdon!
zIeel bossdon!
ZEEel bossdon!
EEel bossdon!
!nodssob leEE
25
```