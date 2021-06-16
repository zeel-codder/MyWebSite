---
title: C Programming Pointer Programs
keywords: c
---

# C Programming Pointer Programs

# YOU CAN FIND PROGRAMS BELLOW:

## P.1. Deceleration of Null Pointer.

*Program:*

```c
#include<stdio.h>
void main()
{
    int *p=NULL;
    printf("The Null pointer is %d",p);
}
```

*Output:*

```terminal
The Null pointer is 0
```

## P.2. Addition of Two Pointer Variable.

*Program:*

```c
#include<stdio.h>
void main()
{
int a,b;
int *p,*q;
printf("Enter any two integer numbers\n");
scanf("%d %d",&a,&b);
p=&a;
q=&b;
printf("Sum of Two number is %d",(*p+*q));
}
```

*Output:*

```terminal
Enter any two integer numbers
12
12
Sum of Two number is  24
```

## P.3. Arithmetic Operations  of Two Pointer Variable.

*Program:*

```c
#include<stdio.h>
void main()
{
int a,b;
int *p,*q;
printf("Enter any two integer numbers\n");
scanf("%d %d",&a,&b);
p=&a;
q=&b;
float d= (float)*p / *q;
printf("Sum of Two number is %d\n",*p+*q);
printf("Subtraction of TWO number is %d\n",*p-*q);
printf("Multiplication of Two number is %d\n",(*p)*(*q));
printf("Division of Two number is %.2f",d);
}
```

*Output:*

```terminal
Enter any two integer numbers
12
2
Sum of Two number is  14
Subtraction of TWO number is 10
Multiplication of Two number is 24
Division of Two number is 6.00
```
## P.4. Declaration of Array with Pointer .

*Program:*

```c
#include<stdio.h>
void main()
{
int *p,a[10],n,i;
printf("Enter how many element you want to enter\n");
scanf("%d",&n);
printf("Enter element in array\n");
for(i=0;i<n;i++)
{
    scanf("%d",&a[i]);
}
p=a;
printf("Element are:\n");
for(i=0;i<n;i++)
{
    printf("%d ",*p);
    *p++;
    
}
}
```

*Output:*

```terminal
Enter how many element you want to enter
5
Enter element in array
1 2 3 4 5 
Element are:
1 2 3 4 5 
```
## P.5. Connect Two Pointer String .

*Program:*

```c
include<stdio.h>
include<string.h>
void main()
{
char *p[10],*q[10];
printf("Enter first string\n");
gets(p);
printf("Enter Second string string\n");
gets(q);
strcat(p,q);
printf("Connected string is %s\n",p);

}
```

*Output:*

```terminal
Enter first string
Programming
Enter Second string string
Anteryami
Connected string is
ProgrammingAnteryami
```

## P.6. Find Index Address of Array with The Use of Pointer .

*Program:*

```c
#include<stdio.h>
void main()
{
int *p,a[10],n,i;
printf("Enter how many element you want to enter\n");
scanf("%d",&n);
printf("Enter element in array\n");
for(i=0;i<n;i++)
{
    scanf("%d",&a[i]);
}
p=a;
printf("Element are:\n");
for(i=0;i<n;i++)
{
printf("The element at %u index is %d \n",p,*p);
*p++; 
}
}
```

*Output:*

```terminal
Enter how many element you want to enter
3
Enter element in array
1
2
3
Element are:
The element at 4321 index is 1
The element at 4325 index is 2
The element at 4329 index is 3
```

## P.7. Revers of Array with The Use of Pointer .

*Program:*

```c
#include<stdio.h>
void main()
{
 int a[10],*p,i,n;
 printf("Enter how many element you want to enter\n");
 scanf("%d",&n);
 printf("Enter element in array\n");
 for(i=0;i<n;i++)
 {
     scanf("%d",&a[i]);
 }
 p=&a;
printf("Enter array is\n");
for(i=0;i<n;i++)
{
    printf("%d ",*p);
    p++;
}
p=&a[n-1];
printf("\n Array in revise is\n");
for(i=n-1;i>=0;i--)
{
   printf("%d ",*p);
   p--;
}
}
```

*Output:*

```terminal
Enter how many element you want to enter
4
Enter element in array
1
2
3
4
Enter array is
1 2 3 4
Array in revise 
4 3 2 1
```

## P.8. Revers of Array with The Use of Pointer .

*Program:*

```c
#include<stdio.h>
void main()
{
 int a[10],*p,i,n;
 printf("Enter how many element you want to enter\n");
 scanf("%d",&n);
 printf("Enter element in array\n");
 for(i=0;i<n;i++)
 {
     scanf("%d",&a[i]);
 }
 p=&a;
printf("Enter array is\n");
for(i=0;i<n;i++)
{
    printf("%d ",*p);
    p++;
}
p=&a[n-1];
printf("\n Array in revise is\n");
for(i=n-1;i>=0;i--)
{
   printf("%d ",*p);
   p--;
}
}
```

*Output:*

```terminal
Enter how many element you want to enter
4
Enter element in array
1
2
3
4
Enter array is
1 2 3 4
Array in revise 
4 3 2 1
```

## P.9. Use of Pointer To Pointer Variable.

*Program:*

```c
#include<stdio.h>
void main()
{
int *p,n;
int **pr;
printf("Enter any number\n");
scanf("%d",&n);
p=&n;
pr=&p;
printf("The value of n %d\n",n);
printf("The value of *p %d\n",*p);
printf("The value of *pr %d",**pr);
}
```

*Output:*

```terminal
Enter any number
12
The value of n 12
The value of *p 12
The value of *pr 12
```