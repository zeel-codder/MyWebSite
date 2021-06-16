---
title: C programming Structure Programs
keywords: c
---

# C programming Structure Programs

# YOU CAN FIND PROGRAMS BELLOW:

## P.1.Mack list of student Roll no, Marks and Name using Structure and print marks of given Roll no Student. 

*Program:*

```c

#include<stdio.h>
struct marks
{
    int RollNo;
    char name[10];
    int marks;
}a[10];
void main()
{
     int i,j,n,f;
     printf("Enter number of student\n");
     scanf("%d",&n);
     printf("Enter test details\n");
     for(i=0;i<n;i++)
     {
         printf("Enter Roll NO: ");
         scanf("%d",&a[i].RollNo);
         printf("Enter name: ");
         scanf("%s",&a[i].name);
         printf("Enter marks(Out of 100): ");
         scanf("%d",&a[i].marks);
     }
     printf("Enter the Roll no of student whom you find marks\n");
     scanf("%d",&f);
     for(i=0;i<n;i++)
     {
         if(a[i].RollNo==f)
         {
            printf("the marks of student roll no %d is %d and name is %s",a[i].RollNo,a[i].marks,a[i].name);
            break;
         }
     }
}
```

*Output:*

```terminal
Enter number of student
2
Enter test details
Enter Roll NO
1
Enter name
kamal
Enter marks(Out of 100):
50
Enter Roll NO
2
Enter name
zeel
Enter marks(Out of 100):
43
Enter the Roll no of student whom you find marks
2
The marks of student roll no 2 is 43 and name is zeel
```