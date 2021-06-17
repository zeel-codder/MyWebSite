---
title: Python Programming Modules Programs
keywords: python
---

# Python Programming Modules Programs

# YOU CAN FIND PROGRAMS BELLOW:

# Matploatlib

## P.1.Histogram.

*Program:*

```python
from matplotlib import pyplot as plt 
  
# Y-axis values 
y = [10, 5, 8, 4] 
# x=[1,2,3,4]

  
# Function to plot histogram 
plt.hist(y) 
  
# Function to show the plot 
plt.show() 
```

## P.2.Scatter.

*Program:*

```python
from matplotlib import pyplot as plt 
plt.scatter([1,2,3],[4,5,6])
plt.plot([1,2,3],[4,5,6])
plt.xlabel('Roll_No')
plt.ylabel('marks')
plt.title('Test')
plt.show()
```



## P.3.Pi.

*Program:*

```python
from matplotlib import pyplot as plt 
x=[2,8,9,12]
a=['sleep','eat','dance','work']
color=['m','c','r','b']
plt.pie(x,
labels=a,
colors=color,
startangle=90,
shadow=True,
explode=(0,0,0.1,0))
plt.show()
```


## P.4.Bar.

*Program:*

```python
from matplotlib import pyplot as plt 
from matplotlib import style as s
s.use("ggplot")
x=[1,2,6,7,9]
y=[3,8,6,1,3]
plt.bar(x,y)
plt.xlabel('Roll_No')
plt.ylabel('marks')
plt.title('Test')
plt.show()
```

## P.5.Dataframe use.

*Program:*

```python
import pandas as pd 
import matplotlib.pyplot as plt 
x=['zeel','manan','deep','yesh','kamal']
y=[12,12,32,12,78]
z=[32,43,21,32,23]
df=pd.DataFrame({'name':x,'age':y,'m':z})
df.set_index('name',inplace=True)
print(df)
# plt.bar(x,y)
#comen way to do it
df.plot()
plt.title('Grap')
plt.xlabel('name')
plt.ylabel('age')
plt.show()
plt.legend()
```

## P.6.More than One grape .

*Program:*

```python
from matplotlib import pyplot as plt 
plt.scatter([1,2,3],[4,5,6])
plt.subplot(211)
plt.subplot(221)
plt.plot([1,2,3],[4,5,6])
plt.xlabel('Roll_No')
plt.ylabel('marks')
plt.title('Test')
x=[2,8,9,12]
a=['sleep','eat','doing','dance']
color=['m','c','r','b']
plt.subplot(222)
plt.pie(x,
labels=a,
colors=color,
startangle=90,
shadow=True,
explode=(0,0,0.1,0))
plt.show()
```

*Program:*

```python
from datetime import*
x=datetime.now()#Give current date and time
print(x)
print(x.year)#we can give anything like year,date,time

print(x.strftime("%A"))
print(x.weekday())
x=datetime(2002,2,2,12,1,3)
print(x)
x=datetime.today()
print(x)
x1=timedelta(23,12,12,12,12,12)#class time delta(days: float=..., 
#seconds: float=..., microseconds: float=..., milliseconds: float=..., 
#minutes: float=..., hours: float=..., weeks: float=..., fold: int=...)
x2=timedelta(89,12,0,1,23,1)
x3=x1-x2
print(x1)
print(x2)
print(x2)
```

*Output:*

```terminal
2020-07-11 15:01:09.168505
2020
Saturday
5
2002-02-02 12:01:03
2020-07-11 15:01:09.170499
23 days, 12:12:12.012012
89 days, 1:23:12.001000
89 days, 1:23:12.001000
```

# Time


*Program:*

```python
#help('time')#give all functionality of time module
import time as t
s=t.time()
print(t.ctime())#give current time
print(s)#Return the current time in seconds since the Epoch.

x=t.localtime(s)
print(x)#give time in stract method
print(t.mktime(x))#return second

#print(t.sleep(13.23))
z=t.asctime(x)#convert strac into UFT
print(z)

print(t.strftime('%m\%d\%y'))
#help(t.strftime)
```

*Output:*

```terminal
Sat Jul 11 15:04:01 2020
1594460041.997238
time.struct_time(tm_year=2020, tm_mon=7, tm_mday=11, tm_hour=15,
 tm_min=4, tm_sec=1, tm_wday=5, tm_yday=193, tm_isdst=0)
1594460041.0
Sat Jul 11 15:04:01 2020
07\11\20
```

# Numpy


## P.1.Basic Array With Numpy


*Program:*

```python
import numpy as np
s=np.array([1,2,3,4,4,5])
print(s)
print('Type is',s.dtype)
s=np.array(['zeel','prajapati','Anteryami'])
print(s)
print('Type is',s.dtype)
# i - integer
# b - boolean
# u - unsigned integer
# f - float
# c - complex float
# m - timedelta
# M - datetime
# O - object
# S - string
# U - Unicode string
# V - fixed chunk of memory for other type ( void )
s=np.array([1,2,3,4],dtype='S')#we can also give type for string
print(s)
print('Type is',s.dtype)
#onther way
arr = np.array([1.1, 2.1, 3.1])
print(arr.dtype)
newarr = arr.astype('i')

print(newarr)
print(newarr.dtype)

#copy vs view
s=np.array([1,2,3,5,4])
c=np.copy(s)
c[0]=42
print(s)
print(c)#copy do not change parent array
#view
s=np.array([1,2,3,5,4])
c=s.view()
c[0]=42
print(s)
print(c)#view also change parent array
```


*Output:*

```terminal
[1 2 3 4 4 5]
Type is int32
['zeel' 'prajapati' 'Anteryami']
Type is <U9
[b'1' b'2' b'3' b'4']
Type is |S1
float64
[1 2 3]
int32
[1 2 3 5 4]
[42  2  3  5  4]
[42  2  3  5  4]
[42  2  3  5  4]
```

## P.2.Indexing and silencing Array With Numpy

*Program:*

```python
import numpy as np 
a=np.array([[1,2,3,4],[5,3,2,7]])
#basic.........................................
print(a)
print(np.ndim(a))
print(np.sum(a))
print(np.min(a))
print(np.max(a))
print(np.ravel(a))#ravel function convert any array into 1D array
#indexing and slicing of 2-d..................................
print('2-D ARRAY .................................')
print(a)
print(a[0:,2])#it will starts from 0 row and if end not define it will give all 
#the element at present at each row index 2
print(a[0:1,2])
print(a[0:1,1:3])#slicing,indexing...
print(a[0:,1:3])#slicing,indexing...
print(a[::-1])#print reverse
print(a[0,2])#it will give the value present at index 0,2
print(a[1,-1])#it like first element from last in array
print(a[1,1:3])#at row 1 give element between 1 to 3
#indexing of 1-d array.............................
print('1-D ARRAY..........................')
a=np.array([1,2,3,4,5,6,7,9])
print(a[0])
print(a[::-1])
print(a[-2])
print(a[2:])
print(a[2:6])
print(a[::2])#it will give the element at 2 index diif" positions
print(a[::3])#it will give the element at 3 index diif" position
print(a[1:5:2])#it will give number between 1 to 5 index with index difference of 2
```

*Output:*

```terminal
[[1 2 3 4]
 [5 3 2 7]]
2
27
1
7
[1 2 3 4 5 3 2 7]
2-D ARRAY .................................
[[1 2 3 4]
 [5 3 2 7]]
[3 2]
[3]
[[2 3]]
[[2 3]
 [3 2]]
[[5 3 2 7]
 [1 2 3 4]]
3
7
[3 2]
1-D ARRAY..........................
1
[9 7 6 5 4 3 2 1]
7
[3 4 5 6 7 9]
[3 4 5 6]
[1 3 5 7]
[1 4 7]
[2 4]
```

## P.3. Spacing of Array With Numpy

*Program:*

```python
import numpy as np
a=np.array([[1,2,3,4,5],[7,6,5,3,2]])
b=np.array([[1,2,3,4,5],[1,2,1,2,1]])

sum=a+b
sub=a-b
mul=a*b
div=a/b #it do all operation element by element
print('sum=',sum)
print('div=',div)
print('mul=',mul)
print('sub=',sub)
# other 
x=np.array([1,2,3,4])
print('sin(x)=',np.sin(x))
print('cos(x)=',np.cos(x))
print('tan(x)=',np.tan(x))
print('sqrt=',np.sqrt(x))
print('log is', np.log(x))
print('e is', np.exp2(x))
print('e is', np.exp(x))
```

*Output:*

```terminal
sum= [[ 2  4  6  8 10]
 [ 8  8  6  5  3]]
div= [[1.  1.  1.  1.  1. ]
 [7.  3.  5.  1.5 2. ]]
mul= [[ 1  4  9 16 25]
 [ 7 12  5  6  2]]
sub= [[0 0 0 0 0]
 [6 4 4 1 1]]
sin(x)= [ 0.84147098  0.90929743  0.14112001 -0.7568025 ]
cos(x)= [ 0.54030231 -0.41614684 -0.9899925  -0.65364362]
tan(x)= [ 1.55740772 -2.18503986 -0.14254654  1.15782128]
sqrt= [1.         1.41421356 1.73205081 2.        ]
log is [0.         0.69314718 1.09861229 1.38629436]
e is [ 2.  4.  8. 16.]
e is [ 2.71828183  7.3890561  20.08553692 54.59815003]
```

## P.4. Operation on Array With Numpy

*Program:*

```python
import numpy as np 
# s=np.array([[1, 2, 3],[1,2,3],[1,2,3],[1,2,3]], ndmin=4)#ndmin give the order of
# matrix as 4-D
# arr = np.array([1, 2, 3, 4], ndmin=5)
s=np.array([[1,2,3,4],[1,2,3,4]])
print(s)
print(s.shape)#it give current dimension of matrix 2x3
#respace
s=np.array([1,2,3,4])
print(s)
print(s.shape)
print(s.reshape(4,1))#remember 4*1==sizeof(s)
s=np.array([1,2,3,4,5,6,7,8])
print(s.reshape(2,2,2))
#combination
s=np.array([[1,2,3,4],[1,2,3,4]])
x=np.array([[2,2,3,4],[1,1,1,1]])
print(np.hstack((s,x)))#it move x beside of s
print(np.vstack((s,x)))#it move x at down of s
```

*Output:*

```python
[[1 2 3 4] 
 [1 2 3 4]]
(2, 4)
[1 2 3 4]
(4,)
[[1]
 [2]
 [3]
 [4]]
[[[1 2]
  [3 4]]

 [[5 6]
  [7 8]]]
[[1 2 3 4 2 2 3 4]
 [1 2 3 4 1 1 1 1]]
[[1 2 3 4]
 [1 2 3 4]
 [2 2 3 4]
 [1 1 1 1]]
```

## P.5. Basic Numpy

*Program:*

```python
import numpy as np
#  1. An array object of arbitrary homogeneous items  
 # 2. Fast mathematical operations over arrays  
 # 3. Linear Algebra, Fourier Transforms, Random Number Generation 
 #2-d array
a=np.array([[1,2,3,4,5],[1,2,4,5,6]])
print(a)
print(type(a))#give type of array
print(np.__version__)#Give version of array
print(np.ndim(a))#give dimension of array
#0-D
a=np.array(23)
print('I am 0-d array',np.ndim(a))
#1-D
a=np.array([1,2,3,4,5])
print('I am 1-D array',np.ndim(a))
```

*Output:*

```terminal
[[1 2 3 4 5]
 [1 2 4 5 6]]
<class 'numpy.ndarray'>
1.19.0
2
I am 0-d array 0
I am 1-D array 1
```

## P.6.Numpy VS List.

*Program:*

```python
import numpy as np
import time
#numpy vs list
# 1.numpy consume less memory then list
# 2. nummpy is more faster and more simple than list
s=range(100000)
t=time.time()
# print(list(s))
print('Time taken is for making list\n',(time.time()-t)*1000)
t=time.time()
s1=list(s)
s2=list(s)
s3=[(x,y) for x,y in zip(s1,s2)]#it do sum of list
print('time taken for sum of list \n',(time.time()-t)*1000)

#numpy
t=time.time()
s=100000
# print(np.arange(s))
print('Time taken is for making numpy\n',(time.time()-t)*1000)
t=time.time()
s1=np.arange(s)
s2=np.arange(s)
s3=s1+s2
print('time taken for sum of numpy\n',(time.time()-t)*1000)
```

*Output:*

```terminal
Time taken is for making list
 0.0
time taken for sum of list 
 23.93484115600586
Time taken is for making numpy
 0.0
time taken for sum of numpy
 7.97724723815918
```

## P.7.Numpy ALL IN One.

*Program:*

```python
import numpy as np  
print('-----------------------creating Array And Indexing---------------------------')
# d=np.array([[[1,2,3,4,5,6],[21,22,23,24,25,26],[12,1,13,14,15,16]]])
#creating..............................................................
d=np.array([[1,2,3,4,5,6],[21,22,23,24,25,26],[12,1,13,14,15,16]])
print(d)
print(d[0:2,2])
# l=[1,2,3,4]
# print(l)
d=np.zeros(5)
print(d)
d=np.ones(6,dtype=int)#we can use dtype anywhere for mack over datatype
print(d)
d=np.empty(3)
print(d)
d=np.linspace(0,20,num=5)#num is basically show number of parts of 0 to 20
print(d)
a=np.array([[1,2,3,4,5,6,7,8],[1,2,3,4,3,1,3,2]])
b=np.nonzero(a<5)
print(b)
b=np.arange(3)
print('new=: ',a[a>=1])#print all the value in array greathearted then 1
print('new2=: ',b[b>1])#print all the value in array greathearted  then 1
print(a)

print('--------------------------------sort and connect-----------------------------')
#argsort, which is an indirect sort along a specified axis,..................
# lexsort, which is an indirect stable sort on multiple keys,
# searchsorted, which will find elements in a sorted array, and
# partition, which is a partial sort.
# To read more about sorting an array, see: sort.
d=np.array([3,2,1])
s=np.sort(d)
print(d)#return function give copy of stored array
print(s)
f=np.concatenate((d,s))
print(f)
a1=np.array([[1,2],[3,4]])
a2=np.array([[5,7],[3,4]])
d=np.vstack((a1,a2))
print(d)
d=np.hstack((a1,a2))
print(d)
print('-------------------------------Size,dime ,shape and re-shape-----------------')
d=np.array([[[1,2,3,4,5],
[1,2,3,4,2,]],
[[1,1,2,3,7],[2,5,4,7,4]]])
print(d)
print(d.ndim)
print(d.size)
print(d.shape)
print(np.ravel(d))
d=np.linspace(0,20,num=4,dtype=int)
print(d)
r=d.reshape(2,2)
print(r)
print('---------------------------------1-D TO 2-D To 3-D---------------------------')
a=np.arange(5)
print(a)
print(a.shape)
b=a[np.newaxis ,:]
print(b.shape)
print(b)
a=a[: ,np.newaxis]
print(a.shape)
print(a)
a=a[:,:,np.newaxis]
print(a.shape)
print(a)
print('-----------------------------copy and view-------------------')
a=np.array([[1,2,3,4,5],[3,2,3,4,1],[5,4,3,2,1]])
b=a
b[0]=12
print(a)
#or
b=a.view()
b=a
b[0]=13
print(a)
a=np.array([[1,2,3,4,5],[3,2,3,4,1],[5,4,3,2,1]])
b=a.copy()
b[0]=12
print(b)
print(a)
print('---------------------------operation-----------------------------')
a=np.array([[1,1,1,1],[2,2,2,2]])
b=np.array([[1,1,1,1],[2,2,2,2]])
print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a**b)
print(a//b)
print(a.sum())
# print(a.sum(axis=1))
print(a.min())
# print(a.min(axis=0))
print(a.max())
# print(a.max(axis=1))
print(a.sum(axis=1))
print(a.sum(axis=0))
print(a*2)
#You can do these arithmetic operations on matrices of different sizes, 
#but only if one matrix has only one column or one row. In this case, 
#NumPy will use its broadcast rules for the operation.


data = np.array([[1, 2], [3, 4], [5, 6]])
ones_row = np.array([[1, 1]])
print(data + ones_row)
# array([[2, 3],
#     #    [4, 5],
#        [6, 7]])

print('----------------redome-------------------')
rng = np.random.default_rng(0)
r=rng.random(3)
print(r)
print('------------------remove and Duplicates---------------')
a=np.array([[1,1,1,1],[2,2,2,2]])
d=np.unique(a)
print(d)
d=np.unique(a,return_index=True)
print(d)

print('----------------------Transpose and reverse-----------')
a=np.array([1,2,3,4])
d=a.transpose()
print(d)
a=np.array([[1,2,3,4,5],[1,2,3,4,2]])
d=a.transpose()
print(d)
d=np.flip(a)
print(d)
```

*Output:*

```terminal
-----------------------creating Array And Indexing---------------------------
[[ 1  2  3  4  5  6]
 [21 22 23 24 25 26]
 [12  1 13 14 15 16]]
[ 3 23]
[0. 0. 0. 0. 0.]
[1 1 1 1 1 1]
[4.94065646e-324 6.95245738e-310 6.95245738e-310]
[ 0.  5. 10. 15. 20.]
(array([0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], dtype=int64), 
array([0, 1, 2, 3, 0, 1, 2, 3, 4, 5, 6, 7], dtype=int64)) 
new=:  [1 2 3 4 5 6 7 8 1 2 3 4 3 1 3 2]
new2=:  [2]
[[1 2 3 4 5 6 7 8]
 [1 2 3 4 3 1 3 2]]
--------------------------------sort and connect-----------------------------
[3 2 1]
[1 2 3]
[3 2 1 1 2 3]
[[1 2]
 [3 4]
 [5 7]
 [3 4]]
[[1 2 5 7]
 [3 4 3 4]]
-------------------------------Size,dime ,shape and re-shape-----------------
[[[1 2 3 4 5]
  [1 2 3 4 2]]

 [[1 1 2 3 7]
  [2 5 4 7 4]]]
3
20
(2, 2, 5)
[1 2 3 4 5 1 2 3 4 2 1 1 2 3 7 2 5 4 7 4]
[ 0  6 13 20]
[[ 0  6]
 [13 20]]
---------------------------------1-D TO 2-D To 3-D---------------------------
[0 1 2 3 4]
(5,)
(1, 5)
[[0 1 2 3 4]]
(5, 1)
[[0]
 [1]
 [2]
 [3]
 [4]]
(5, 1, 1)
[[[0]]

 [[1]]

 [[2]]

 [[3]]

 [[4]]]
-----------------------------copy and view-------------------
[[12 12 12 12 12]
 [ 3  2  3  4  1]
 [ 5  4  3  2  1]]
[[13 13 13 13 13]
 [ 3  2  3  4  1]
 [ 5  4  3  2  1]]
[[12 12 12 12 12]
 [ 3  2  3  4  1]
 [ 5  4  3  2  1]]
[[1 2 3 4 5]
 [3 2 3 4 1]
 [5 4 3 2 1]]
---------------------------operation-----------------------------
[[2 2 2 2]
 [4 4 4 4]]
[[0 0 0 0]
 [0 0 0 0]]
[[1 1 1 1]
 [4 4 4 4]]
[[1. 1. 1. 1.]
 [1. 1. 1. 1.]]
[[1 1 1 1]
 [4 4 4 4]]
[[1 1 1 1]
 [1 1 1 1]]
12
1
2
[4 8]
[3 3 3 3]
[[2 2 2 2]
 [4 4 4 4]]
[[2 3]
 [4 5]
 [6 7]]
----------------redome-------------------
[0.63696169 0.26978671 0.04097352]
------------------remove and Duplicates---------------
[1 2]
(array([1, 2]), array([0, 4], dtype=int64))
----------------------Transpose and reverse-----------
[1 2 3 4]
[[1 1]
 [2 2]
 [3 3]
 [4 4]
 [5 2]]
[[2 4 3 2 1]
 [5 4 3 2 1]]
```

## Scipy


## P.1. Special Functions in Scipy. 

*Program:*

```python
from scipy import special
#This module is use for dining power of something

s=special.exp10(2)#it like 10 to the power 2
print(s)
s=special.exp1(2)
print(s)
s=special.exp2(2)
print(s)
s=special.exp10(10)
print(s)
d=special.sindg(90)
print(d)
d=special.cosdg(90)
print(d)
```

*Output:*

```terminal
100.0
0.048900510708061125
4.0
10000000000.0
1.0
-0.0
```


## P.2.Find Integration by Scipy. 

*Program:*

```python
from scipy import integrate
# from scipy import special
# help(integrate)
#we the help of integration function we can calculate integration for function
i=integrate.quad(lambda x: x,0,1)
print(i)
i=integrate.quad(lambda x: 2**x+x/3,0,0)
print(i)
i=integrate.quad(lambda x: 2**x+x/3,0,1000)
print(i)
#duble integration
f=lambda x: 1
e=lambda x,y:x**2
g=lambda x: -1
i=integrate.dblquad(e,0,1,f,g)
print(i)
```

*Output:*

```terminal
(0.5, 5.551115123125783e-15)
(0.0, 0.0)
(1.5458601538574905e+301, 3.0934568083332783e+288)
(-0.6666666666666667, 7.401486830834377e-15)
```

## P.3.Reverce of Array with Scipy. 

*Program:*

```python
from scipy import linalg
import numpy as np
s=np.array([[1,2],[1,1]])
print(s)
d=linalg.inv(s)
print(f'Inverse of Matrix is \n {d}')
```

*Output:*

```terminal
[[1 2]
 [1 1]]
Inverse of Matrix is
 [[-1.  2.]
 [ 1. -1.]]
```


# Panadas


## P.1. Creating Data-frame With panadas. 

*Program:*

```python
import pandas as pd 
d=pd.DataFrame({'name':['zeel','kamal','manan','yesh'],'age':[12,13,43,12]})
print(d)

d.set_index("age",inplace=True)
print(d)
```

*Output:*

```terminal
 name  age
0   zeel   12
1  kamal   13
2  manan   43
3   yesh   12
age  name
12    zeel
13   kamal
43   manan
12    yesh
```


P.2. Head and Tail panadas. 

*Program:*

```python
import pandas as pd 
d={'Roll_no':[1,2,3,4,5,6],'Name':['zeel','manam','kamal','pokey','pann','bachu'],
'Age':[23,32,12,32,56,100]}
s=pd.DataFrame(d)
print(s)
print(s.head(2))
print(s.head(4))
print(s.tail(2))
print(s.tail(4))
```


*Output:*

```python
   Roll_no   Name  Age
0        1   zeel   23
1        2  manam   32
2        3  kamal   12
3        4  pokey   32
4        5   pann   56
5        6  bachu  100
   Roll_no   Name  Age
0        1   zeel   23
1        2  manam   32
   Roll_no   Name  Age
0        1   zeel   23
1        2  manam   32
2        3  kamal   12
3        4  pokey   32
   Roll_no   Name  Age
4        5   pann   56
5        6  bachu  100
   Roll_no   Name  Age
2        3  kamal   12
3        4  pokey   32
4        5   pann   56
5        6  bachu  100
```

## P.3. Head and Tail panadas. 

*Program:*

```python
import  pandas as  pd 
df1=pd.DataFrame({'name':['zeel','deep','kamal'],'age':[1,2,3]},index=[1,2,3])
df2=pd.DataFrame({'nik_name':['heel','peep','samal'],'age2':[12,12,34]},index=[1,2,3])
d=df1.join(df2)
print(d)
#remember
#1 join is not connect two data-frame
#2 we have so think that not column name are same in two data-frame
#connect
df1=pd.DataFrame({'name':['zeel','deep','kamal'],'age':[1,2,3],
'nik_name':['heel','peep','samal'],'age2':[12,12,34]},index=[1,2,3])
df2=pd.DataFrame({'nik_name':['heel','peep','samal'],'age2':[12,12,34]},index=[4,5,6])
d=pd.concat([df1,df2])
print(d)
```

*Output:*

```terminal
    name  age nik_name  age2
1   zeel    1     heel    12
2   deep    2     peep    12
3  kamal    3    samal    34
    name  age nik_name  age2
1   zeel  1.0     heel    12
2   deep  2.0     peep    12
3  kamal  3.0    samal    34
4    NaN  NaN     heel    12
5    NaN  NaN     peep    12
6    NaN  NaN    samal    34
```


# Json


## P.1. Basic of json in python. 

*Program:*

```python
import json

# some JSON:
x =  '{ "name":"John", "age":30, "city":"New York"}'
# print(y["age"])
# The json. load() is used to read the JSON document from file and The json. 
#loads() is used to convert the JSON String document into the Python dictionary.
# parse x:
y = json.loads(x)
# the result is a Python dictionary:
print(y["age"])
x={
    "Name":"zeel",
    "leaning":['c','c++','java','python'],
    "play":"pubg",
    'istrue':True
}
f=json.dumps(x)
print(f)
```

*Output:*

```terminal
30
{"Name": "zeel", "leaning": ["c", "c++", "java", "python"], "play": "pubg", "istrue": true}
```


# Arpaser


## P.1. Mack comundline Utility . 

*Program:*

```python
import argparse
import sys

def cls(args):
    if args.o=='add':
        return args.a+args.b
    elif args.o=='sub':
        return args.a-args.b
    elif args.o=='div':
        return args.a/args.b
    elif args.o=='mul':
        return args.a*args.b
    elif args.o=='power':
        return args.a**args.b
    else:
        return "ABC: Error"

if __name__=="__main__":
    parser=argparse.ArgumentParser()
    parser.add_argument("--a",type=float,default=1.0,help="Dem me")
    parser.add_argument("--b",type=float,default=1.0,help="Dem me")
    parser.add_argument("--o",type=str,default=1.0,help="Dem me")
    args=parser.parse_args()
    sys.stdout.write(str(cls(args)))

```

*Output:*

```terminal
C:\Users\Desktop\python\module.py\arpaser> python main.py --a 10 --b 20 --o add
30.0
```


# Pickle

## P.1. Bsic of pickle. 

*Program:*

```python
import pickle
# f=bytes(12441)
# g=pickle.loads(f)
# print(g)
# list="zeel is best main in the world"
list=["zeel","anteryami","don","programmer"]
with open(r"C:\Users\Desktop\python\module.py\pikal\file.txt","wb") as f:
    pickle.dump(list,f)
with open(r"C:\Users\Desktop\python\module.py\pikal\file.txt","rb") as f:
    txt=pickle.load(f)
    print(txt)
```

*Output:*

```terminal
['zeel', 'anteryami', 'don', 'programmer']
```