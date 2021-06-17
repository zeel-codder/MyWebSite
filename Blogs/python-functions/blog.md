---
title: Python Programming Functions Programs
keywords: python
---

# Python Programming Functions Programs

# YOU CAN FIND PROGRAMS BELLOW:

## P.1.Lambda.

*Program:*


```python
x=lambda a: a**2#lembda is short format of function in python
print(x(2),end="\n")
#is like
def fun(n):
    return n**2
print(fun(2))
```

*Output:*

```terminal
4
4
```

## P.2.Combination of Lambda with Filter , map and reduce.

*Program:*

```python
#filter in map
x=map(lambda a: a+1,filter(lambda a: a>3,[1,2,3,4,5,6]))
# x=map(lambda a: a+1,1)#do not work
print(list(x))
#map in filter
x=filter(lambda a: a>2,map(lambda a:a**2,[-1,-1,-43,1,2,3,4,5]))
print(list(x))
#map and filter in reduce
from functools import reduce
x=reduce(lambda a,d: a+d,filter(lambda a: a>2,
         map(lambda a:a**2,[-1,-1,-43,1,2,3,4,5])))
print(x)
```

*Output:*

```terminal
[5, 6, 7]
[1849, 4, 9, 16, 25]
1903
```

## P.3.Filter Function.

*Program:*

```python
#filter function is use for separate some element by condition of function
def fun(n):
    return n>=3
x=filter(fun,[1,2,3,4,5])
print(x)
print(list(x))
#lembda
x=filter(lambda x:x>3,[1,2,3,4,5])
print(set(x))
```

*Output:*

```terminal
<filter object at 0x00000243C075780>
[3, 4, 5]
{4, 5}
```

## P.4.Map Function.

*Program:*

```python
#map function is basically use for do sum change on value of literate in list
def fun(n):
    return n**2
x=map(fun,[1,2,3,4,5])
print(x)
print(list(x))#we can also use tuple or set also

#withlembda
x=map(lambda a:a**3,[1,2,3,4,5])
print(tuple(x))
#we can also use more than on literate for map
x=map(lambda a,b:a+b,[1,2,3],[2,3,4])
print(list(x))
#logic
n=[1,2,3,4,5]
d=[]
for x in n:
    i=lambda x:x**2
    d.append(i(x))
print(d)
```

*Output:*

```terminal
<map object at 0x000001DF6985370>
[1, 4, 9, 16, 25]
(1, 8, 27, 64, 125)
[3, 5, 7]
[1, 4, 9, 16, 25]
```

## P.5.Reduce Function.

*Program:*

```python
#reduce is use for sum or do other operation on literate
from functools import reduce
def fun(a,b):
    return a+b
x=reduce(fun,[1,2,1,1,1,1])
print(x)
#with lembda
x=reduce(lambda a,b: a**b,[1,2,1,1,1,1])
print(x)
#logic
# d=[]
s=0
for a in [1,2,3,4,5]:
    s=s+a
print(s)
```

*Output:*

```terminal
7
1
15
```

## P.6.Range Function.

*Program:*

```python
f=range(10)
print(tuple(f))
f=range(2,10,2)
print(tuple(f))
f=range(1,11,2)
print(tuple(f))
f=range(11,0,-1)
print(tuple(f))
```

*Output:*

```terminal
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
(2, 4, 6, 8)
(1, 3, 5, 7, 9)
(11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1)
```

## P.7.List  Comprehension.

*Program:*

```python
#list com. is use for creating list 
f=range(9)
print("List com.")
x=[x+2 for x in f]
#syntax [properties for loop]
print(x)
print("Generator com.")
x=(x+2 for x in f)#it is basically crates object as x
print(x)
print(list(x))#print ting x as list of x
```

*Output:*

```terminal
List com.
[2, 3, 4, 5, 6, 7, 8, 9, 10]
Generator com.
<generator object <genexpr> at 0x000002393662D60>
[2, 3, 4, 5, 6, 7, 8, 9, 10]
```

## P.8.Generator Function.

*Program:*

```python
def fun(n):
    n=n+2
    return n
    n=n-2
    return n
print(fun(2))
print(fun(2))

print('Generator he:')
def Generator(n):
    n=n+2
    yield n
    n=n-2
    yield n
#x=Generator(2)
i=0
while(i<3):
    s=int(input('Enter number '))
    x=Generator(s)
    print(next(x))
    print(next(x))
    i+=1
    # print(next(x))
```

*Output:*

```terminal
4
4
Generator he :
Enter number 3
5
3
Enter number 4
6
4
Enter numbe r2
4
2
```