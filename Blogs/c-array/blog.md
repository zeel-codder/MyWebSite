---
title: C Programming Array Programs
keywords: c
---

# C programming Array Programs



# YOU CAN FIND PROGRAMS BELLOW:

## P.1. Initialization of an Matrix.

*Program:*

```c
#include<stdio.h>
void main()
{
int a[10][10],r1,c1,j,i;
  
    printf("Enter the number of raw and column of  Matrix");
    scanf("%d %d",&r1,&c1);
        printf("Enter element of Matrix:\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                scanf("%d",&a[i][j]);
            }
        }
         printf(" Enter Matrix: is\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                printf("%2d",a[i][j]);
            }
            printf("\n");
        }

}
```

*Output:*

```terminal
Enter the number of raw and column of Matrix
2  2
Enter element of Matrix
1
2
1
2
Enter Matrix: 
1  2
1  2
```


## P.2. Addition of Two Matrices.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10][10];
    int b[10][10]; 
    int c[10][10];
    int r1,r2,c1,c2,i,j;
    printf("Enter the number of raw and column of first Matrix");
    scanf("%d %d",&r1,&c1);
    printf("Enter the number of raw and column of first Matrix");
    scanf("%d %d",&r2,&c2);
    if(!(r1==r2&&c1==c2))
    {
       printf("Please enter the same number of raw and same number of column");
    }
    else
    {
        printf("Enter element of first Matrix:\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                scanf("%d",&a[i][j]);
            }
            printf("\n");
        }
        printf("Enter element of second Matrix:\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                scanf("%d",&b[i][j]);
            }
            printf("\n");
        }
        printf("Sum of two Matrix is:\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                c[i][j]=a[i][j]+b[i][j];
                printf("%2d",c[i][j]);
            }
            printf("\n");
        }
    }
    
}
```

*Output:*

```terminal
Enter the number of raw and column of first Matrix
2  2
Enter the number of raw and column of first Matrix
2  2
Enter element of first Matrix:
1  2 
2  3
Enter element of second Matrix
1  3
3  3
Sum of two Matrix is:
2  5
5  6
```

## P.3. Multiplication of Two Matrix.

*Program:*

```c
#include<stdio.h>
void main()
{
     int a[10][10];
    int b[10][10]; 
    int c[10][10]; 
    int r1,r2,c1,c2,i,j;
    printf("Enter the number of raw and column of first Matrix");
    scanf("%d %d",&r1,&c1);
    printf("Enter the number of raw and column of first Matrix");
    scanf("%d %d",&r2,&c2);
    if(c1!=r2)
        {
            printf("Enter same value of raw and column\n");
            
        }
    else
    {
        printf("Enter element of first Matrix:\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                scanf("%d",&a[i][j]);
            }
        }
        printf("Enter element of second Matrix:\n");
        for(i=0;i<r2;i++)
        {
            for(j=0;j<c2;j++)
            {
                scanf("%d",&b[i][j]);
            }
        }
        printf("Multiplication  is\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c2;j++)
            {
                c[i][j]=0;
                for(k=0;k<c1;k++)
                {
                    c[i][j]= c[i][j]+(a[i][k]*b[k][j]);
                }
            }
        }
        for(i=0;i<r1;i++)
        {
           for(j=0;j<c2;j++)
           {
               printf("%2d",c[i][j]);
           }
           printf("\n");
        }
    }
}
```

*Output:*

```terminal
Enter the number of raw and column of first Matrix
2  2
Enter the number of raw and column of Second Matrix
2  2
Enter element of first Matrix:
1  2 
1  2
Enter element of second Matrix
1  3
3  3
Multiplication  is
7  9
7  9
```

## P.4. Find Determent of 2x2 Matrix.

*Program:*

```c
#include<stdio.h>
void main()
{
int a[2][2],j,i;
    printf("Enter element of 2x2 Matrix:\n");
        for(i=0;i<2;i++)
        {
            for(j=0;j<2;j++)
            {
                scanf("%d",&a[i][j]);
            }
        }
         printf("Enter Matrix: is\n");
        for(i=0;i<2;i++)
        {
            for(j=0;j<2;j++)
            {
                printf("%2d",a[i][j]);
            }
            printf("\n");
        }
        int d= a[0][0]*a[1][1]-a[0][1]*a[1][0];
        printf("\n The determent of given Matrix is:%d ",d);
}

```

*Output:*

```terminal
Enter element of 2x2 Matrix:
2  2
2  2
Enter Matrix: is
2  2
2  2
The determent of given Matrix is: 0
```

## P.5. Find Determent of 3x3 Matrix.

*Program:*

```c
include<stdio.h>
void main()
{
int a[2][2],j,i;
    printf("Enter element of 3x3 Matrix:\n");
        for(i=0;i<3;i++)
        {
            for(j=0;j<3;j++)
            {
                scanf("%d",&a[i][j]);
            }
        }
         printf("Enter Matrix: is\n");
        for(i=0;i<3;i++)
        {
            for(j=0;j<3;j++)
            {
                printf("%2d",a[i][j]);
            }
            printf("\n");
        }
        int d1,d2,d3,d;
        d1=a[0][0]*((a[1][1]*a[2][2])-(a[2][1]*a[2][1]));
        d2=a[0][1]*((a[1][0]*a[2][1])-(a[2][0]*a[1][1]));
        d3=a[0][2]*((a[1][0]*a[2][1])-(a[1][1]*a[2][0]));
        d= d1-d2+d3;
        printf("The Determent of Matrix: %d",d);
        
}
```


*Output:*

```terminal

Enter element of 3x3 Matrix:
2  2  2
2  2  2
2  2  2
Enter Matrix: is
2  2  2
2  2  2
2  2  2
The Determent of Matrix: 0
```

## P.6. Identity Matrix's

*Program:*

```c
#include<stdio.h>
void main()
{
int a[10][10],r1,c1,j,i,s=0;
  
    printf("Enter the number of raw and column of first matrix");
    scanf("%d %d",&r1,&c1);
        printf("Enter element of matrix:\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                scanf("%d",&a[i][j]);
            }
        }
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                if(!(a[i][j]==0&&a[i][i]==1))
                {
                    s=1;
                    break;
                }
            }
        }
        if(s==0)
        {
            printf("Identity matrix/n");
        }
        else
        {
             printf("not Identity matrix/n");
        }
}
```
      
*Output:*

```terminal
Enter the number of raw and column of first matrix
2 2
Enter element of matrix
1 0
0 1
Identity matrix
```


## P.7. Transpose of Matrix and Symmetric Matrix Verification.

*Program:*

```c
#include<stdio.h>
void main()
{
    
    int a[10][10],r1,c1,j,i,s=0;
    int b[10][10];
    printf("Enter the number of raw and column of first matrix");
    scanf("%d %d",&r1,&c1);
        printf("Enter element of matrix:\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                scanf("%d",&a[i][j]);
            }
        }
        printf("Transpose of given Matrix is\n");
           for(j=0;j<c1;j++)
        {
            for(i=0;i<r1;i++)
            {
                b[i][j]=a[i][j];
                printf("%2d",a[i][j]);
            }
            printf("\n");
        }
              for(j=0;j<c1;j++)
            {
            for(i=0;j<r1;j++)
            {
              if(!(b[i][j]==a[i][j]))
              {
                s=1;
                printf("matrix is not symmetric");
              }
            }
            }
            if(s==0)
            {
                printf("matrix is symmetric");
            }
}
```
      
*Output:*

```terminal
Enter the number of raw and column of first matrix
2 3
Enter element of matrix:
2 2
3 4
Transpose of given Matrix is
2 3
2 4
matrix is not symmetric
```



## P.8. Delete Value from Array

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10],i,n,r,s;
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter element in array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("Enter the number you want to delete\n");
    scanf("%d",&s);
    for(i=0;i<n;i++)
    {
        if(a[i]==s)
        {
            r=i;
        }
    }
    for(i=r;i<n-1;i++)
    {
        a[i]=a[i+1];
    }
    printf("Deleted array is\n");
    for(i=0;i<n-1;i++)
    {
        printf("%d\n",a[i]);
    }
}
```


*Output:*

```terminal

Enter size of array
3
Enter element in array
1
2
3
Enter the number you want to delete
2
Deleted array is
1 3
```

## P.9. Remove Element from Array at Given Location.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10],i,n,r;
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter element in array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("Enter the location where you want to delete\n");
    scanf("%d",&r);
    for(i=r-1;i<n-1;i++)
    {
        a[i]=a[i+1];
    }
    printf("Deleted array is");
    for(i=0;i<n-1;i++)
    {
        printf("%d\n",a[i]);
    }

}
```
*Output:*

```terminal
Enter size of array
3
Enter element in array
1
2
3
Enter the location where you want to delete
1
Deleted array is
2  3
```

## P.10. Find Smallest and Largest value From Array

```c
#include<stdio.h>
void main()
{
    int a[10],i,n,r,s,y;
    int t[10];
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter element in array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
     s=a[0];
    for(i=1;i<n;i++)
    {
        if(s>a[i])
        {
            s=a[i];
        }
    }
    for(i=0;i<n;i++)
    {
        if(a[i]==s)
        {
         y=i+1;
         break;
        }
    }
    printf ("Smallest element at %d location is: %d\n",y,s);
        for(i=1;i<n;i++)
    {
        if(s<a[i])
        {
            s=a[i];
        }
    }
    for(i=0;i<n;i++)
    {
        if (a[i]==s)
        {
          y=i+1;
          break; 
        }
        
    }
    printf("Largest number at %d location is : %d",y,s);
}
```
*Output:*

```terminal
Enter size of array
3
Enter element in array
3
9
1
Smallest element at 3 location is: 1
Largest number at 2 location is : 9
```

## P.11.Remove Duplicate Element From Array

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10],i,n,r,s,j,k=0;
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter element in array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("After removing duplicate element from array\n");
    for(i=0;i<n;i++)
    {
        for(j=i+1;j<n-k;j++)
       {
        if(a[i]==a[j])
        {
            k++;
            a[j]=a[j+1];
            break;
        }
        }
    }
     for(i=0;i<n-k;i++)
    {
        printf(" %d",a[i]);
    }
}
```

*Output:*

```terminal
Enter size of array
3
Enter element in array
3
9
3
After removing duplicate element from array
9 3
```

## P.12. Spare Matrix

*Program:*

```c
#include<stdio.h>
void main()
{
int a[10][10],r1,c1,j,i,c=0;
  
    printf("Enter the number of raw and column of first matrix");
    scanf("%d %d",&r1,&c1);
    printf("Enter element of matrix:\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                scanf("%d",&a[i][j]);
            }
            printf("\n");
        }
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
              if(a[i][j]==0)
              {
                  c++;
              }
            }
           
        }
           if(c>(r1*c1)/2)
           { printf("\n The given matrix is Spare matrix");
           }
           else 
           {
               printf("The given matrix is not Spare matrix");
           }

}
```

*Output:*

```terminal
Enter the number of raw and column of first matrix
2 2
Enter element of matrix: 
2 2
0 1
The given matrix is not Spare matrix
```

## P.13. Revers of Array

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10],i,n,r,s;
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter element in array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("The reverse of array is\n");
    for(i=n-1;i>-1;i--)
    {
        printf("%d\n",a[i]);
    }
}
```

*Output:*

```terminal
Enter size of array
4
Enter element in array
1 2 3 4
The reverse of array is
4 3 2 1
```

## P.14. Printing Alternating Element of Array.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10],i,n,r,s;
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter element in array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("The Alternating  element are\n");
    for(i=0;i<n;i+=2)
    {
        printf(" %d",a[i]);
    }
}
```

*Output:*

```terminal
Enter size of array
4
Enter element in array
1 2 3 4
The Alternating  element are
1  3
```

## P.15. Insert Element in Array.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10],i,n,s,f;
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter %d element of array\n",n);
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("Insert the location where you want to enter number\n");
    scanf("%d",&s);
    printf("Enter number\n");
    scanf("%d",&f);
    for(i=n-1;i>=s-1;i--)
    {
        a[i+1]=a[i];
    }
    a[s-1]=f;
    printf("New array is\n");
     for(i=0;i<n+1;i++)
    {
        printf(" %d",a[i]);
    }
}
```

*Output:*

```terminal

Enter size of array
4
Enter element in array
1 2 3 4
Insert the location where you want to enter number
2
Enter number
6
New array is
1 6 2 3 4
```

## P.16. Point Out Same Element in Array.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10],i,j,n,r,s,l=0;
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter element in array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("Duplicate Element of array are\n ");
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            if(a[i]==a[j])
            {   
                break;
            }
        }
            if(i==j)
            {
                printf("%d", a[i]);
            }
    }
}
```

*Output:*
```terminal
Enter size of array
4
Enter element in array
1 2 3 2
Duplicate  Element of array are
2
```

## P.17. Find Location of Given Element In Array.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10],i,n,r,s,k=0;
    int b[10];
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter element in array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    printf("Enter element which you want  to find location\n");
    scanf("%d",&s);
    for(i=0;i<n;i++)
    {
        if(a[i]==s)
        {
            b[k]=i+1;
            k++;
        }
    }
    printf("your enter number is at  location \n");
    for(i=0;i<k;i++)
    {
        printf(" %d",b[i]);
        if(i==k-2)
        {
            printf(" and");
        }
    }
}
```

*Output:*
```terminal
Enter size of array
4
Enter element in array
1 2 3 2
Enter element which you want  to find location
2
your enter number is at  location
2 and 4
```


## P.18. Shorting of Array.

*Program:*

```c
#include<stdio.h>
void main()
{
    int i,j,a[10],n,t;
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter the elements in array");
    {
        for(i=0;i<n;i++)
        {
            scanf("%d",&a[i]);
        }
        for(i=0;i<n;i++)
        {
            for(j=i+1;j<n;j++)
            {
                if(a[i]>a[j])
                {
                   t=a[j];
                   a[j]=a[i];
                   a[i]=t;          }
            }
        }
          printf("Array in assenting order\n");
          for(i=0;i<n;i++)
          {
              printf("%2d",a[i]);
          }
           printf("\n Array in descending order\n");
          for(i=n;i>=0;i--)
          {
              printf("%2d",a[i]);
          }
          
    }
}
```


*Output:*

```terminal
Enter size of array
4
Enter element in array
4 2 7 1
Array in assenting order
1 2 4 7
Array in descending order
7 4 2 1
```

## P.19. Find Sum and Average of Array

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10],i,n,sum=0;
    float avg;
    printf("Enter size of array\n");
    scanf("%d",&n);
    printf("Enter element in array\n");
    for(i=0;i<n;i++)
    {
        scanf("%d",&a[i]);
    }
    for(i=0;i<n;i++)
    {
        sum+=a[i];
    }
    avg= (float)sum/n;
    printf("The sum is %d and the avg is %.3f",sum,avg);
}
```
*Output:*
```terminal
Enter size of array
4
Enter element in array
1 1 1 1
The sum is 4 and the avg is 1
```

## P.20. Find Sum of Each Raw in 2D  Array

*Program:*

```c
#include<stdio.h>
void main()
{
int a[10][10],r1,c1,j,i,c=0;
int sum[10];
    printf("Enter the number of raw and column of first matrix");
    scanf("%d %d",&r1,&c1);
        printf("Enter element of matrix:\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                scanf("%d",&a[i][j]);
            }
            printf("\n");
        }
         printf("\n Enter matrix: is\n");
        for(i=0;i<r1;i++)
        {
            for(j=0;j<c1;j++)
            {
                printf("%d",a[i][j]);
            }
            printf("\n");
        }
        for(i=0;i<r1;i++)
        {
            sum[i]=0;
          for(j=0;j<c1;j++)
          {   
              sum[i]+=a[i][j];
          }
        }
        printf("The sum of all row matrix is\n");
        for(i=0;i<r1;i++)
        {
           printf("The sum of %d row is %d\n",i+1,sum[i]);
        }
}
```


*Output:*

```terminal
Enter the number of raw and column of first matrix
2 2
Enter element of matrix:
1 1 1 1
The sum of all row matrix is
The sum of 1  row is 2
The sum of 2  row is 2
```

## P.20. Find Union and Intersection of Array.

*Program:*

```c
#include<stdio.h>
void main()
{
    int a[10],i,j,n1,n2,k,l=0;
    int b[10],c[10];
    printf("Enter size of first array\n");
    scanf("%d",&n1);
    printf("Enter the size of second array\n");
    scanf("%d",&n2);
    printf("Enter element in array first array\n");
    for(i=0;i<n1;i++)
    {
        scanf("%d",&a[i]);
    }
        printf("Enter element in array second array\n");
    for(i=0;i<n2;i++)
    {
        scanf("%d",&b[i]);
    }
    int p=0;
    printf("Intersection of two array is\n ");
    for(i=0;i<n1;i++)
    {
        for(j=0;j<n2;j++)
        {
            if(a[i]==b[j])
            {   
                p=1;
                break;
            }
        }
            if(p==1)
            {
                printf("%d", a[i]);
            }
            p=0;
    }
    printf("\n Union is\n");
    for(i=0;i<n1;i++)
    {
        c[i]=a[i];
    }
    for(j=0;j<n2;j++)
    {
        c[j+n1]=b[j];
    }
    for(i=0;i<n1+n2;i++)
    {
        for(j=i+1;j<n1+n2;j++)
        {
            if(c[i]==c[j])
            {
            l++;
            for(k=j;k<n1+n2;k++)
               { 
                   c[k]=c[k+1];
               }
                
            }
        }
    }
    for(i=0;i<n1+n2-l;i++)
    {
        printf("%d",c[i]);
    }
}
```

*Output:*

```terminal
Enter size of first array
3
Enter the size of second array
2
Enter element in array first array
1 2 3
Enter element in array second array
3 4
Intersection of two array is
3
Union is
1 2 3 4
```