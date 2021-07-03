---
title: C Programming Application Programs
keywords: c Armstrong number

---

# C programming Application Programs

In this blog , you can find c programer from some most img definitions in c.





# YOU CAN FIND PROGRAMS BELLOW:

<h2 id="1"> P.1 To check whether the input number is an Armstrong number (Armstrong number where sum of all digit*3 = that number) Ex.153=(1^3+5^3+3^3) </h2>

*Program:*

```c
#include<stdio.h>
void main()
{
    int n,i,s,r,sum=0;
    printf("Enter any Number");
    scanf("%d",&n);

    for(i=0;n>0;i++)
    {  
        r=n/10;
        s=n-r*10; //taking last digit from number
        // or
        s=n%10;
        sum+=s*s*s;
        n=r;
    }
    if(sum==n)
    {
        printf("Enter number is Armstrong number");
    }
    else
    {
        printf("Enter number is not Armstrong number");
    }
   
}
```

*Output:*

```terminal
Enter any Number 2
Enter number is not Armstrong number
```

## P.2. Write C programs which displays AND, OR, XOR results of all elements of the given sequence without using bit-wise operator:

*Program:*

```c
#include<stdio.h>
void main()
{
    int a=1,b=1,c=0,d=1,and,or,xor;
    if(a&&b&&c&&d)
      {
            and=1;
      }
    else
        {
            and=0;
        }
           if(a||b||c||d)
      {
            or=1;
      }
    else
        {
            or=0;
        }
        if(a==b)
        {
            xor=0;
        }
        else
        {
           xor=1;
        }
       
        if(xor==c)
        {
            xor=0;
        }
        else
        {
        xor=1;
        }
        if(xor==d)
        {
            xor=0;
        }
        else
        {
            xor=1;
        }
        printf("AND=%d\nOR=%d\nXOR=%d",and,or,xor);
}
```

*Output:*

```terminal
AND=0
OR=1
XOR=0
```

## P.3. To encrypt an uppercase text message using Caesar cipher method. (e.g. HELLO will be encrypted to KHOOR)


*Program:*

```c
#include<stdio.h>
#include<string.h>
void main()
{
    char a[10],i;
    printf("Enter string: ");
    gets(a);
    for(i=0;a[i]!='\0';i++)
    {
        //updating char to char+3 as definition if caesar cipher method
        // Ex. 'A' will become 'C'
        a[i]=a[i]+3;

    }
    printf("cipher String\n");
    puts(a);
}
```

*Output:*

```terminal
Enter string: well
cipher String
zhoo
```

## P.4. To separate and print digits of a three digit scanned integer(Ex. 123 than ans is 1 2 3)

*Program:*

```c
#include<stdio.h>
void main()
{
    int a,n1,n2,n3,n4;
    printf("Enter three digit number");
    scanf("%d",&a);
    // a=123

    n1=a/100; // n1=12
    n2=a-n1*100;// n2=3 =>last digit
    n3=n2/10; //n3=1 => first digit
    n4=n2-n3*10; //n4=2 => second digit
    printf("First digit=%d\nSecond Digit=%d \nLast Digit =%d",n1,n3,n4);
}
```

*Output:*

```terminal
Enter three digit number 123
First digit=1
Second Digit=2
Last Digit =3
```

## P.5. In an organization, employees are paid on hourly basis. Clerks are paid 100/hr, Teachers are paid 200/hr and Principal is paid 400/hr. If the weekly hours exceeds 44, then employee should be paid 2 times their regular pay for the overtime. Write a C program to compute the weekly salary of the employee and also the program should take care that the employee should not be paid for hours beyond 50 in a week. Use best suitable control construct to implement the program.


*Program:*

```c
#include<stdio.h>
void main()
{
    int h,a,b,c;
    printf("Enter hours : ");
    scanf("%d",&h);
    a=h*100;
    b=h*200;
    c=h*400;
    if(h>44&&h<=50)
    {
        a=a+(h-44)*100;
        b=b+(h-44)*200;
        c=c+(h-44)*400;
        printf("salary are:\n Clerks:%d\n Teachers:%d\n Principal:%d",a,b,c);
    }
    else if(h<=44){
       printf("salary are:\n Clerks:%d\n Teachers:%d\n Principal:%d",a,b,c);
       
    }
    else{
    printf("Enter hours less than 50\n");
}
```

*Output:*

```terminal
Enter hours : 43
salary are:
Clerks:4300
Teachers:8600
Principal:17200
```

## P.6. Consider a currency system in which there are notes of seven denominations, namely Rs. 1, Rs. 2, Rs. 5, Rs. 10, Rs. 20, Rs. 50 and Rs. 100. A sum of Rs. N is entered as an input. Write a function to compute the smallest number of notes that will combine to give Rs. N.


*Program:*

```c
#include<stdio.h>
void main()
{
    int n,r1,r2,r3,r4,r5,r6,r7;
    printf("Enter  of Notes\n");
    scanf("%d",&n);

    //Simple Greedy Solution is here

    r1=n/100;
    n=n-r1*100;
    
    r2=n/50;
    n=n-r2*50;
    
    r3=n/20;
    n=n-r3*20;
    
    r4=n/10;
    n=n-r4*10;
    
    r5=n/5;
    n=n-r5*5;
    
    r6=n/2;
    n=n-r6*2;
    
    r7=n/1;
    n=n-r7*1;
    
    printf("100=%d\n50=%d\n20=%d\n10=%d\n5=%d\n2=%d\n1=%d",r1,r2,r3,r4,r5,r6,r7);
}
```

*Output:*

```terminal
Enter  of Notes
500
100=5
50=0
20=0
10=0
5=0
2=0
1=0
```

## P.7.Write a program to implement a simple number guessing game. Program should generate an integer randomly and ask the user to guess the integer. Based on the number guessed, it should display the appropriate message (correct or incorrect)


*Program:*

```c
#include<stdio.h>
#include<time.h>
void main()
{
    int a,x;

    x=srand(time);//generating random number in c
    x=x%1000;
    printf("Enter Any Integer Number");
    scanf("%d",&a);
    if(a==x)
    {
        printf("correct");
    }
     else
    {
        printf(" not correct");
    }
    
}
```


*Output:*

```terminal
Enter Any Integer Number 4
not correct
```

## P.8.Enhance the number guessing game developed earlier. The program should now display more appropriate message (Greater, Smaller or Correct). It should allow maximum 5 attempts from the user and still if the user cannot guess the number correctly, it should display “Sorry”.

*Program:*

```c
#include<stdio.h>
#include<time.h>
void main()
{
    int a,x,r=0,i;
    x=srand(time);
    x=x%1000;
    printf("Guess Number");
    scanf("%d",&a);
    for(i=0;i<5;i++)
    {
    if(a==x)
    {
        printf("\nCorrect");
         r=1;
        break;
    }
    else if(a>x)
    {
        printf("Enter lesser number\n");
        scanf("%d",&a);
    }
     else if(a<x)
    {
        printf("Enter Greater number\n");
        scanf("%d",&a);
       
    }
    }
    if(r==0)
    {
        printf("Sorry\n");
        printf("Number is %d",x);
    }
}
```

*Output:*

```terminal
Guess Number 2
Enter Greater number
2
Enter Greater number
21
Enter Greater number
234
Enter Greater number
1234
Enter lesser number
123
Sorry
Number is 336
```

## P.9.Write a program to implement a simple number guessing game. Program should generate an integer randomly and ask the user to guess the integer. Based on the number guessed, it should display the appropriate message (correct or incorrect)


*Program:*

```c
#include<stdio.h>
#include<time.h>
void main()
{
    int a,x;
    x=srand(time);
    x=x%1000;
    printf("Enter Any Integer Number");
    scanf("%d",&a);
    if(a==x)
    {
        printf("correct");
    }
     else
    {
        printf(" not correct");
    }
    
}
```

*Output:*

```terminal
Enter Any Integer Number 4
not correct
```

## P.10.Mr. Desai is working in Maruti Suzuki India Ltd. He wants to calculate his gross salary which includes 120% DA of basic salary and 20% HRA of basic salary. Mr. Desai knows his basic salary, so kindly give him the gross salary (Gross Salary = Basic + DA + HRA).

*Program:*

```c
#include<stdio.h>
void main()
{
    float DA,HRA,BASIC,GS;
    printf("Enter basic salary: ");
    scanf("%f",&BASIC);
    //Just Using Formulas
    DA=1.2*BASIC;
    HRA=0.2*BASIC;
    GS=DA+HRA+BASIC;
    
    printf("Gross Salary is:%.2f",GS);
}
```

*Output:*

```terminal
Enter basic salary: 12
Gross Salary is:28.80
```

## P.11. Write a program to take the values for A, B, C of a quadratic equation A∗X2+B∗X+C=0 and then find all the roots of the equation. It is guaranteed that A ≠ 0 and that the equation has at least one real root.

*Program:*

```c
#include<stdio.h>
include<math.h>
void main()
{
    int a,b,c;
    printf("Equation:A∗X2+B∗X+C=0\n");
    printf("Enter Value Of  A ");
    scanf("%d",&a);
    printf("Enter Value Of  B ");
    scanf("%d",&b);
    printf("Enter Value Of  C ");
    scanf("%d",&c);
    if(a==0)
    {
        printf("Equation has one real root");
    }
    else
    {
    int r1,r2;

    //Using Formula for  Equation
    r1=(-b - sqrt(b*b-4*a*c))/2*a;
    r2=(-b + sqrt(b*b-4*a*c))/2*a;
    
    printf("Root are:%d %d",r1,r2);

    }
}
```

*Output:*

```terminal
Enter Value Of  A 12
Enter Value Of  B 12
Enter Value Of  C 12
Root are:-2147483648 -2147483648
```

## P.12. To check whether the input string is in title case (Ex. Zeel in Titile Case and zeel not )

*Program:*

```c
#include<stdio.h>
include<string.h>
void main()
{
    char a[10],i,r=0;
    printf("Enter string: ");
    gets(a);
    if(!(a[0]>='A'&&a[0]<='Z'))
    {
        printf("Given String is not in Tital case");
    }
    else
    {
    for(i=1;a[i]!='\0';i++)
    { 
        if(a[i]==' ')
        {
            if(!(a[i]>='A'&&a[i]<='Z'))
            {
                r=1;
                break;
            }
        }
        else if(a[i]>='a'&&a[i]<='z')
        {
         r=0;  
        }
        

    }
    if(r==0)
    {
        printf("Given String is in Tital case");
    }
    else
    {
        printf("Given String is not in Tital case");
    }
}
}
```

*Output:*

```terminal
Enter string: zeel is don
Given String is not in Tital case
```

## P.13.  Create a structure which holds various attributes (e.g. name, id, basic_salary, DA(120%of basic), HRA%,(20% of basic) total_salary etc.) of an employee. Write a program which allows you to scan these (except total_salary) attributes for 3 employees. The program should support following operations:
### 1. Display (total salary of the selected employee) 
### 2. Max (find and display name of the employee with maximum salary) b. Repeat the above program using array of structure

*Program:*

```c
#include<stdio.h>
struct employee
{
    char name[10];
    int id;
    float basic;
    float DA;
    float HRA;
    float Total;
}e[90];
void main()
{
    int i,g;
    for(i=0;i<3;i++)
    {
    printf("Enter name of Employee\n");
    scanf("%s",&e[i].name);
    printf("Enter id \n");
    scanf("%d",&e[i].id);
    printf("Enter Basic , DA and HRA\n");
    scanf("%f %f %f",&e[i].basic,&e[i].DA,&e[i].HRA);
    e[i].Total=e[i].basic+e[i].DA+e[i].HRA;
    }
    printf("Enter id of employee which you want to find total salary\n");
    scanf("%d",&g);
    for(i=0;i<3;i++)
    {
        if(e[i].id==g)
        {
            printf("\nTotal Salary is : %f",e[i].Total);
        }
    }
    float k,s=e[0].Total;
     for(i=1;i<3;i++)
    {
        if(e[i].Total>s)
        {
            k=e[i].Total;
            e[i].Total=s;
            s=k;
           k=e[i].id;
            e[i].id=s;
            s=k;
          
        }
    }
    printf("\nMaximum Salary is:%f  and id is: %d",e[0].Total,e[0].id);
}
```

*Output:*

```terminal
Enter name of Employee
zeel
Enter id 
1
Enter Basic , DA and HRA
12 12 12
Enter name of Employee
deep
Enter id
2
Enter Basic , DA and HRA
12 123 23
Enter name of Employee
kamal
Enter id
3
Enter Basic , DA and HRA
12 12 13
Enter id of employee which you want to find total salary
2
Total Salary is : 158.000000
Maximum Salary is:158.000000  and id is: 2
```

## P.14. To swap the value of two numbers (i) using and (ii) without using a temporary variable.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a,b,c;
    printf("Enter first number");
    scanf("%d",&a);
    printf("Enter second number");
    scanf("%d",&b);
    //(1)
    int t;
    t=a;
    a=b;
    b=t;
    printf("a=%d and b=%d(using)\n",a,b);
    //(2) a=22 and b=2 here
    a=a+b;
    b=a-b;
    a=a-b;
    printf("a=%d and b=%d(With Out using)\n",a,b);
}
```

*Output:*

```terminal
Enter first number 12
Enter second number 12
a=12 and b=12(using)
a=12 and b=12(With Out using)
```

## P.15.To find greatest of two and three numbers using the ternary operator

*Program:*

```c
#include<stdio.h>
void main()
{
    int a,b,c;
    printf("Enter first number");
    scanf("%d",&a);
    printf("Enter second number");
    scanf("%d",&b);
    printf("Enter third number");
    scanf("%d",&c);
    (a>b)?((a>c)?printf("%d is Greatest",a):printf("%d is Greatest",c)):((b>c)?printf("%d is Greatest",b):printf("%d is Greatest",c));
}
```

*Output:*

```terminal
Enter first number 12
Enter second number 43
Enter third number 123
123 is Greatest
```