---
title: C Programming Pattern Programs
keywords: c
---

# C Programming Pattern Programs

# YOU CAN FIND PROGRAMS BELLOW:

## P.1. Pattern 

*Program:*

```c
#include<stdio.h>
void main()
{
     int i,j,n,a=1;
    char c='A';
    printf("Enter the number of raw:");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        if(i%2!=0)
        {
            for(j=1;j<=i;j++)
            {
                printf("%d ",a);
                a++;
            }
        }
        else
        {
              for(j=1;j<=i;j++)
            {
                printf("%c ",c);
                c++;
            }
        }
        printf("\n");
    }
}
```

*Output:*

```terminal
Enter the number of raw:3
1
A  B
2   3  4 
```

## P.2.

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    printf("Enter number of rows:");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    { 
        for(j=i;j<n;j++)
        {
            printf(" ");
        }
        if(i==1)
        {
            printf("*");
        }
        else{
            printf("*");
        
        for(k=1;k<=i-1;k++)
        {
             printf("A*");
        }
        }
        printf("\n");
    }
}
```

*Output:*
```terminal
Enter the number of raw:3
    *
   * A *
* A * A *
```

## P.3. 

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    char c='A';
    printf("Enter number of rows:");
    scanf("%d",&n);
    printf("Pattern is \n\n");
    for(i=1;i<=n;i++)
    {
        for(k=1;k<=i;k++)
        {
             printf("%c",c);
             c++;
        }
        printf("\n");
    }
}
```

*Output:*
```terminal
Enter the number of raw:3
A
B  C
D   E  F
```

## P.4.

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    printf("Enter number of rows:");
    scanf("%d",&n);
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)
        {
            printf("%d",j);
        }
        for(k=2*(n-i);k>0;k--)
        {
             printf(" ");
        }
        for(j=i;j>0;j--)
        {
            printf("%d",j);
        }

        printf("\n");
    }
}
```

*Output:*
```terminal
Enter the number of raw:3
1       1
12    2 1
1 2 3 2 1
```

## P.5. 

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n");
    for(i=1;i<=n;i++)
    {
        for(j=i;j<n;j++)
        {
            printf(" ");
        }
        for(k=1;k<=2*i-1;k++)
        {
             printf("%d",i);
        }
        printf("\n");
    }
     for(i=n-1;i>0;i--)
      {
        for(j=i;j<n;j++)
        {
            printf(" ");
        }
        for(k=1;k<=2*i-1;k++)
        {
             printf("%d",i);
        }
      printf("\n");
       }
}
```

*Output:*
```terminal
Enter the number of raw:
3
Pattern is
  1
 222
33333
 222
  1
```

## P.6. 

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n");
    for(i=1;i<=n;i++)
    {
        for(j=i;j<n;j++)
        {
            printf(" ");
        }
        for(k=1;k<=2*i-1;k++)
        {
             printf("%d",i);
        }
        printf("\n");
    }
}
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
  1
 222
33333
```

## P.7. 

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,n;
    printf("Enter number of row:\n");
    scanf("%d",&n);
    printf("Pattern is \n");
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)
        {
            printf("%d",j);
        }
        printf("\n");
    }
}
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
1
12
123
```

## P.8. Pattern like :

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,n,k=1;
    printf("Enter number of rows of Floyd Triangle:\n");
    scanf("%d",&n);
    printf("Pattern is \n\n");
    for(i=1;i<=n;i++)
    {
        for(j=1;j<i;j++)
        {
            printf("%d ",k);
            k++;
        }
        printf("\n");
    }
}
```

*Output:*

```terminal
Enter number of rows of Floyd Triangle
3
Pattern is
1
23
456
```

## P.9. Pattern like : 

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n");
    for(i=1;i<=n;i++)
    {
        for(j=i;j<n;j++)
        {
            printf(" ");
        }
        for(k=1;k<=2*i-1;k++)
        {
             printf("%d",k);
        }
        printf("\n");
   }
     for(i=n-1;i>0;i--)
      {
        for(j=i;j<n;j++)
        {
            printf(" ");
        }
        for(k=1;k<=2*i-1;k++)
        {
             printf("%d",k);
        }
      printf("\n");
       }
}
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
    1
  123
12345
  123
    1
```

## P.10. Pattern  : 

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n\n");
    for(i=1;i<=n;i++)
    {
        for(j=i;j<n;j++)
        {
            printf(" ");
        }
        for(k=i;k>0;k--)
        {
             printf("%d",k);
        }
        printf("\n");
    }
}
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
  1
 21
321
```

## P.11. 

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n\n");
    for(i=1;i<=n;i++)
    {
        for(j=i;j>0;j--)
        {
            printf("%d",j);
        }
        
        printf("\n");
    }
}
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
1
21
321
```

## P.12 

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n,a=2;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n\n");
    for(i=1;i<=n;i++)
    {
        for(j=i;j<n;j++)
        {
            printf(" ");
        }
        if(i==1)
        {
            printf("1");
        }
        else
        {
            a=i;
        for(k=1;k<=i;k++)
        {   
             printf("%d",a);
             a++;
        }
        for(j=a-2;j>=i;j--)
        {
            printf("%d",j);
        }
        }
        printf("\n");
     
    }
}
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
    1
  232
34543
```

## P.13. 

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n");
    for(i=n;i>0;i--)
    {
        for(k=1;k<=i;k++)
        {
             printf("%d ",k);
        }
        printf("\n");
    }
}
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
321
21
1
```
## P.14. 

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n");
    for(i=1;i<=n;i++)
    {
       for(k=1;k<=i;k++)
        {
             printf("%d",k);
        }
        for(j=i-1;j>0;j--)
        {
            printf("%d",j);
        }
        printf("\n");
    }
}
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
1
121
12321
```

## P.15.

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,k,n;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n\n");
    for(i=1;i<=n;i++)
    {
       for(j=1;j<=n;j++)
       {
           if(i==j)
           {
               printf("0 ");
           }
           else
           {
               printf("%d ",i);
           }
           
       }
       printf("\n");
       
    }

}
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
011
202
330
```

## P.16.

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,k,j,p,n;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n\n");
    for(i=1;i<=n;i++)
    {
        for(j=1;j<i;j++)
        {
            printf(" ");
        }
       if(i==n)
       {
           printf("%d",i);
       }
       else
       {
       printf("%d",i);
       for(k=2*(n-i);k>0;k--)
        {
             printf(" ");
        }
        printf("%d",i);
       } 
        printf("\n");
    }
      for(i=n-1;i>0;i--)
    {
        for(j=1;j<i;j++)
        {
            printf(" ");
        }
       printf("%d",i);
       for(k=2*(n-i);k>0;k--)
        {
             printf(" ");
        }
        printf("%d",i);
         printf("\n");
       } 
        
    }
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
  1        1
    2   2
      3
    2   2
  1         1
```

## P.17.         

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,k,j,p,n;
    printf("Enter number of rows:\n");
    scanf("%d",&n);
    printf("Pattern is \n");
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=n-i+1;j++)
        {
            printf("%d",j);
        }
       for(k=1;k<i;k++)
        {
             printf("__");
        }
        for(p=n+1-i;p>0;p--)
        {
            printf("%d",p);
        }
       
        printf("\n");
    }
}
```

*Output:*

```terminal
Enter the number of raw:
3
Pattern is
123321
12__21
1____1
```