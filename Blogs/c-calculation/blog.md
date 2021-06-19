---
title: C Programming Calculation Programs
keywords: c

---

# C programming Calculation Programs

# YOU CAN FIND PROGRAMS BELLOW:

## P.1. Addition of Two Numbers.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a,b,sum;
    printf("Enter your first number\n");
    scanf("%d",&a);
    printf("Enter your second number\n");
    scanf("%d",&b);
    sum=a+b;
    printf("The sum of %d and %d is %d",a,b,sum);
}
```

*Output:*

```terminal
Enter your first number
3
Enter your second number
4
The sum of 3 and 4 is 7
```

## P.2. Basic Arithmetic Operation of Two Numbers.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a,b,sum,sub,mul;
    float div;
    printf("Enter your first number\n");
    scanf("%d",&a);
    printf("Enter your second number\n");
    scanf("%d",&b);
    sum=a+b;
    sub=a-b;
    mul=a*b;
    div= (float)a/b;
    printf("The sum of %d and %d is %d\n",a,b,sum);
    printf("The subtraction of %d and %d is %d\n",a,b,sub);
    printf("The multiplication of %d and %d is %d\n",a,b,mul);
    printf("The division of %d and %d is %.2f\n",a,b,div);
}
```

*Output:*

```terminal
Enter your first number
3
Enter your second number
4
The sum of 3 and 4 is 7
The subtraction of 3 and 4 is -1
The multiplication of 3 and 4 is 12
The division of 3 and 4 is 0.75
```


## P.3. Area of Triangle by Heron's Formula.

*Program:*

```c
#include<stdio.h>
#include<math.h>
void main()
{
    int a,b,c;
    float s,area;
    printf("Enter first side of triangle\n");
    scanf("%d",&a);
    printf("Enter second side of triangle\n");
    scanf("%d",&b);
    printf("Enter third side of triangle\n");
    scanf("%d",&c);
   s=(a+b+c)/2.0;
   area=sqrt(s*(s-a)*(s-b)*(s-c));
    printf("The Area of Triangle by Heron's Formula:%.2f",area);
}
```


*Output:*

```terminal
Enter first side of triangle
3
Enter second side of triangle
4
Enter third side of triangle
4
The Area of Triangle by Heron's Formula: 5.56
```

## P.4. Calculation of Simple Interest.

*Program:*

```c
#include<stdio.h>
void main()
{
    int p,r,n;
    float SI;
    printf("Enter the value of Principal,Amount and Time(h)\n");
    scanf("%d %d %d",&p,&r,&n);
    SI= p*r*n/100.0;
    printf("Simple Interest is= %.2f",SI);
}
```

*Output:*

```terminal
Enter the value of Principal,Amount and Time(h)
12
23
4
Simple Interest is= 11.04
```

## P.5. Sum of First and Last Digit of Given Number.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a,b,t,lastD,firstD;
    printf("Enter your number\n");
    scanf("%d",&a);
    if(a<10)
    {
        printf("Enter number more than 10");
    }
    t=a/10;
    lastD=a-(t*10);
    while (a>9)
    {
        a=a/10;
    }
    firstD=a;
    printf("The first digit is %d",firstD);
    printf("The last digit is %d\n",lastD);
    printf("The sum of first and last digit is %d\n",firstD+lastD);
}
```

*Output:*

```terminal
Enter your number
12432
The first digit is 1
The last digit is 2
The sum of first and last digit is  3
```

## P.6. Convert Decimal TO Binary.

*Program:*

```c
#include<stdio.h>
int main()
{
    int a,i,b,n=0,d[10];
    printf("Enter Decimal number:\n");
    scanf("%d",&a);
    printf("The Binary no. is:\n");
    for(i=0;a>0;i++)
    {   
        b=a/2;
        d[i]=a-2*b;
        a=b;
        n++;
    }
    for(i=n-1;i>=0;i--)
    {
        printf("%d",d[i]);
    }
}
```

*Output:*

```terminal
Enter Decimal number:
2
The Binary no. is:
10
```

## P.7. Convert Decimal TO Octal.

*Program:*

```c
#include<stdio.h>
int main()
{
    int a,i,b,n=0,d[10];
    printf("Enter Decimal number:\n");
    scanf("%d",&a);
    printf("The Octal no. is:\n");
    for(i=0;a>0;i++)
    {   
        b=a/8;
        d[i]=a-8*b;
        a=b;
        n++;
    }
    for(i=n-1;i>=0;i--)
    {
        printf("%d",d[i]);
    }
}
```

*Output:*

```terminal
Enter Decimal number:
9
The Octal no. is:
10
```

## P.8. Convert Decimal TO Hexadecimal.

*Program:*

```c
#include<stdio.h>
int main()
{
    int a,i,b,n=0,d[10],s;
    printf("Enter Decimal number:\n");
    scanf("%d",&a);
    printf("The hexadecimal no. is:\n");
    for(i=0;a>0;i++)
    {   
        b=a/16;
        d[i]=a-b*16;
        a=b;
        n++;
    }
    for(i=n-1;i>=0;i--)
    {
        if(d[i]>9)
        {
          s=15-d[i];
          if(s==5)
              printf("A");
         else if(s==4)
              printf("B");
          else if(s==3)
              printf("C");
          else if(s==2)
              printf("D");
          else if(s==1)
              printf("E");
          else 
              printf("F");
        }
        else
        {
            printf("%d",d[i]);
        }
        
    }
}
```

*Output:*

```terminal
Enter Decimal number:
123
The hexadecimal no. is:
7B
```

## P.9. Convert Celsius TO Ferret.

*Program:*

```c
#include<stdio.h>
int main()
{
    int c;
    float f;
    printf("Enter Temperature in degree Celsius\n");
    scanf("%d",&c);
    f=(9.0/5)*c + 32;
    printf("Temperature is Ferret is %0.2f",f);
}
```

*Output:*

```terminal
Enter Temperature in degree Celsius
12
Temperature is Ferret is 53.60
```

## P.10. Calculation of nCr and nPr.

*Program:*

```c
#include<stdio.h>

int factorial(int n);
int nPr(int n, int r);
int nCr(int n, int r);
void main()
{
    int n,r;
    printf("Enter the value of n and r\n");
    scanf("%d %d",&n,&r);
    int p=nPr(n,r);
    int c=nCr(n,r);
    printf("nPr=%d\nnCr=%d",p,c);
}
int factorial(int n)
{
    if(n==0||n==1)
    {
        return 1;
    }
    else
    {
        return n*factorial(n-1);
    }
    
}
int nPr(int n, int r)
{
    return factorial(n)/factorial(n-r);
}
int nCr(int n, int r)
{
    return nPr(n,r)/factorial(r);
}
```


*Output:*

```terminal
Enter the value of n and r
1 1
nPr=1
nCr=1
```

## P.11. Find Area of Circle.

*Program:*

```c
#include<stdio.h>
float pi=3.14;
void main()
{
    float r,area;
    printf("Enter radius of circle:\n");
    scanf("%f",&r);
    area=pi*r*r;
    printf("Area of Circle with %.2f radius is %.2f ",r,area);
}
```

*Output:*

```terminal
Enter radius of circle:
12.23
Area of Circle 12.23 with  radius is 469.66
```


## P.12. Find Area of Calculation of Mean , Variance and Stander Deviation.

*Program:*

```c
#include<stdio.h>
#include<math.h>
void main()
{
    int a[10],i,sum=0,srd=0;
    float M,V,Sd,n;
    printf("Enter how many number you want to enter\n");
    scanf("%f",&n);
    printf("Enter %.0f numbers:\n",n);
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++)
    {
        sum=sum+a[i];
        srd=srd+a[i]*a[i];
    }
    M = sum/n;
    V= srd/n - M*M;
    Sd =sqrt(V);
    printf("The Mean of all element is %.3f\n",M);
    printf("The Variance of all element is %.3f\n",V);
    printf("The Stander deviation of all element is %.3f\n",Sd);
  
}
```

*Output:*

```terminal
Enter how many number you want to enter
2
Enter 2 numbers:
12
43
The Mean of all element is 27.500
The Variance of all element is 240.250
The Stander Stander of all element is 15.500
```