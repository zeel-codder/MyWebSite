---
title: C programming String Programs
keywords: c
---

# C programming String Programs

# YOU CAN FIND PROGRAMS BELLOW:

## P.1.Count number of Upper case and Lower case Letters in given String. 

*Program:*

```c
#include<stdio.h>
#include<string.h>
void main()
{
    char a[100];
    int b[100],i,j,u=0,l=0,s=0;
    printf("Enter your string\n");
    gets(a);
    for(i=0;a[i]!='\0';i++)
    {
          if(a[i]>='A'&&a[i]<='Z')
          {
              u++;
          }
        else if(a[i]>='a'&&a[i]<='z')
          {
              l++;
          }
          else
          {
              s++;
         }
        
    }
    printf("Number of upper case letter is  : %d",u);
    printf("\n Number of Lower case letter is: %d",l);
    printf("\n Number of other letter is     : %d",s);
}
```
*Output:*

```terminal
Enter your string
zeeL
Number of upper case letter is : 1
Number of Lower case letter is :3
Number of other letter is  : 0
```

## P.2.Count number of Frequency of  Character in given String. 

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100];
    int b[100],i,j;
    printf("Enter your string\n");
    gets(a);
    for(i=0;a[i]!='\0';i++)
    {
        b[i]=0;
        for(j=0;a[j]!='\0';j++)
        {
            if(a[j]==a[i])
            {
                b[i]++;
            }

        }
    }
    for(i=0;a[i]!='\0';i++)
    {   
        printf("The Frequency of Character %c is %d\n",a[i],b[i]);
    }
}


```
*Output:*

```terminal

Enter your string
now
The Frequency of Character n is 1
The Frequency of Character 0 is 1
The Frequency of Character w is 1
```

## P.3.Convert all the Lower case letter in Upper  letter in given string

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100],b[100];
    int i;
    printf("Enter your string\n");
    gets(a);
    for(i=0;a[i]!='\0';i++)
    {
        if(a[i]>='a'&&a[i]<='z')
        {
            a[i]=(char)(a[i]-32);
        }
    }
    printf("Given String is Upper case is: %s",a);
   
}

```
*Output:*

```terminal
Enter your string
zeel
Given String is Upper case is: ZEEL
```
## P.4. Check whether given string is Palindrome or not with use of String function.

*Program:*

```c
#include<stdio.h>
#include<string.h>
void main()
{
    char a[100],b[100];
    printf("Enter your string\n");
    gets(a);
    strcpy(b,a);
    strrev(a);
    int n=strcmp(a,b);
     if(n==0)
     {
         printf("Enter String is Palindrome");
     }
     else
     {
          printf("Enter String is not Palindrome");
     }
     
}

```
*Output:*

```terminal

Enter your string
zeel
Enter String is not Palindrome
```
## P.5. Check whether given string is Palindrome or not without using of String function.

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100],b[100];
    int i,j,d=0;
    printf("enter your string\n");
    gets(a);
    for(i=0;a[i]!='\0';i++)
    {
        b[n-1-i]=a[i];
    }
    for(i=0;a[i]!='\0';i++)
    {
        d=a[i]-b[i];
        if(d!=0)
        {
            d=1;
            break;
        }
    }
    if(d==0)
    {
        printf("Enter String is Palindrome");
    }
    else
    {
        printf("Enter String is not Palindrome");
    }
}

}

```
*Output:*

```terminal

Enter your string
zeel
Enter String is not Palindrome
```
## P.6. Remove Space in Given String.

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100],b[100];
    int i,j,d=0,n;
    printf("Enter your string\n");
    gets(a);
    n=strlen(a);
    for(i=0;i<n;i++)
    {
        if(a[i]==' ')
        {  for(j=i;j<n;j++)
        {
            a[j]=a[j+1];
    
        }
        }
    }
    printf("String without space: %s",a);
}

```
*Output:*

```terminal

Enter your string
Programming Anteryami 
String without space: ProgramingAnteryami 
```
## P.7. Swapping of Two String.

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100],c[100];
    char b[100];

    printf("Enter first string \n");
    gets(a);
     printf("Enter second string \n");
    gets(b);
    printf("Before swapping\n");
    printf("First string is %s\n",a);
    printf("Second string is %s\n",b);
    strcpy(c,a);
    strcpy(a,b);
    strcpy(b,c);
    printf("After swapping\n");
    printf("First string is %s\n",a);
    printf("Second string is %s\n",b);
}

```
*Output:*

```terminal

Enter first string
Programming 
Enter second string 
Anteryami
Before swapping
First string is Programming 
Second string is Anteryami
After swapping
First string is Anteryami
Second string is Programming
```

## P.8. Shorting of Given Strings.

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100][100];
    char b[100],i,j,n;
    printf("Enter how many string you want Enter\n");
    scanf("%d",&n);
    printf("Enter string you want Enter\n");
    for(i=0;i<=n;i++)
    {
        gets(a[i]);
    }
    for(i=0;i<=n;i++)
    {
        for(j=0;j<=n;j++)
        {
            if(a[i]==a[j])
            {
            strcpy(b,a[i]);
            strcpy(a[i],a[j]);
            strcpy(a[j],b);
            }
        }
    }
    printf("Short strings");
    for(i=0;i<=n;i++)
    {
        printf("%s\n",a[i]);
    }
}

```
*Output:*

```terminal

Enter how many string you want Enter
2
Enter string you want Enter
zeel
Apple
Short strings
Apple
zeel
```
## P.10.Convert all the Upper case letter in Lower  letter in given String

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100],b[100];
    int i;
    printf("Enter your string\n");
    gets(a);
    for(i=0;a[i]!='\0';i++)
    {
        if(a[i]>='a'&&a[i]<='z')
        {
            a[i]=(char)(a[i]+32);
        }
    }
    printf("Given String is Lower case is: %s",a);
   
}

```
*Output:*

```terminal

Enter your string
ZEEL
Given String is Lower case is: zeel
```
## P.11.Count all the Vowel  in given String

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100];
    printf("Enter your string\n");
    gets(a);
    printf("%s\n",a);
    int i,l=0;
    int n = strlen(a);
    for(i=0;i<n;i++)
    {
        if(a[i]=='a'||a[i]=='e'||a[i]=='u'||a[i]=='i'||a[i]=='o'||a[i]=='A'||a[i]=='E'||a[i]=='U'||a[i]=='I||a[i]=='O');
        {
            l++;
        }
    }
    printf("The number of vowels is %d",l);

}
```
*Output:*

```terminal

Enter your string
ZEEL
The number of vowels is: 2
```
## P.12. Find Length of string with out strlen() Function.

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100];
    printf("Enter your string\n");
    gets(a);
    int i;
    for(i=0;;i++)
    {

 if(a[i]=='\0')
        {
            break;
        }
    }
    printf("The length is %d",i);
}

```
*Output:*

```terminal

Enter your string
ZEEL
The length is 4
```
## P.13.Revers of string with out strrev() Function.

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100],b[100];
    printf("Enter your string\n");
    gets(a);
    int i,n;
    for(i=0;;i++)
    {
        if(a[i]=='\0')
        {
            break;
        }
    }
    n=i;
    printf("The length is %d\n",i);
    for(i=0;i<n;i++)
    {
        b[i]=a[n-i-1];
    }
    printf("Revers  of string is\n");
     puts(b);
}

```
*Output:*

```terminal

Enter your string
ZEEL
The length is 4
Revers  of string is 
LEEZ
```
## P.14. Copy of String with out strcpy() Function.

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100],b[100];
    printf("Enter your string\n");
    gets(a);
    int i,n;
    for(i=0;a[i]!='\0';i++)
    {
        b[i]=a[i];
    }
    b[i]='\0';
    printf("Copy of string is\n");
     puts(b);
}

```
*Output:*

```terminal

Enter your string
same
Copy of string is
same
```

## P.15. Compare Two String with out strcmp() Function.

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100];
    char b[100];
    printf("Enter your first string\n");
    gets(a);
    int i,l1,l2,j,d=0;
    printf("Enter your second string\n");
    gets(b);
    l1=strlen(a);
    l2=strlen(b);
    for(i=1;i<=l1;i++)
    {
      for(j=1;j<=l2;j++)
      {
          d=a[i]-b[i];
          if(d!=0)
          {
              break;
          }
      }
    }
    if(d==0)
    {
        printf("both string are same");
    }
    else if(d==1)
    {
        printf("first string is grater than second");
    }
    else
    {
        printf("second string is grater than first");
    }
}          

```
*Output:*

```terminal

Enter your first string
apple
Enter your second string
set
second string is grater than first
```
## P.16. Compare Two String with out strcat() Function.

*Program:*

```c

#include<stdio.h>
#include<string.h>
void main()
{
    char a[100];
    char b[100];
    char n[100];
    printf("Enter your first string\n");
    gets(a);
    int i,l1,l2,j;
    printf("Enter your second string\n");
    gets(b);
    for(i=0;a[i]!='\0';i++)
    {
        n[i]=a[i];
        
    }
    n[i]=' ';
    for(j=0;b[j]!='\0';j++)
    {
        n[j+i+1]=b[j];
        
    }
    printf("The connected string is %s",n);
}

```
*Output:*

```terminal

Enter your first string
apple
Enter your second string
set
The connected string is apple set
```