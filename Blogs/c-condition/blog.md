---
title: C Programming Condition Programs
keywords: c
---

# C Programming Condition Programs

# YOU CAN FIND PROGRAMS BELLOW:

## P.1. Basic If Else Statement.

*Program:*

```c
#include<stdio.h>
void main()
{
   int w;
   printf("Enter any number\n");
   scanf("%d",&w);
   if(w>20)
   printf("Enter no. is grater than 20");
   else
   printf("Enter no. is less than 20");
  
}

```
*Output:*
```terminal
Enter any number
12
Enter no. is less than 20
```

## P.2. Find Greatest between Two number.

*Program:*

```c
#include<stdio.h>
void main()
{
   int w,e;
   printf("Enter first number\n");
   scanf("%d",&w);
   printf("Enter Second number\n");
   scanf("%d",&e);
   if(w>e)
   {
   printf("First no. is grater than Second no.");
   }
   else
   {
   printf("Second no.is grater than first number");
   }
}
```

*Output:*
```terminal
Enter first number
12
Enter Second number\
23
Second no.is grater than first number
```

## P.2. Basic If.. Else If..Else  Statement.

*Program:*

```c
#include<stdio.h>
void main()
{
    int w;
   printf("Enter any number between 20 to 80\n");
   scanf("%d",&w);
   if(w>0&&w<20)
   printf("Enter no. is grater than 0 and less than 20");
   else if(w>20&&w<50)
   printf("Enter no. is grater than 20 and less than 50");
   else if(w>50&&w<80)
   printf("Enter no. is grater than 50 and less than 80");
   else
   printf("Enter no. is out of range");
   
}
```

*Output:*
```terminal
Enter any number between 20 to 80
65
Enter no. is grater than 50 and less than 80
```

## P.4. Find Greatest Number Between Three Numbers.

*Program:*

```c
 #include<stdio.h>
void main()
{
   int a,b,c;
   printf("Enter first number\n");
   scanf("%d",&a);
   printf("Enter  Second number\n");
   scanf("%d",&b);
   printf("Enter Third number\n");
   scanf("%d",&c);
   if(a>b)
   {
       if(a>c)
       {
           printf("Greatest no. is %d",a);
       }
       else
       {
           printf("Greatest no. is %d",c);
       }
   }
   else
   {
       if(b>c)
       {
           printf("Greatest no. is %d",b);
       }
       else
       {
           printf("Greatest no. is %d",c);
       }
   }
}
```

*Output:*

```terminal
Enter first number
65
Enter  Second number
32
Enter Third number
43
Greatest no. is 65
```