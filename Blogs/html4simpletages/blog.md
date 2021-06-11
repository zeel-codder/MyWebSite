---
title: 4 Basic And Important Tags For Beginner In Web Development  

keywords: VS CODE , HTML, WEB, CSS , CODEEDITOR,4 Basic And Important Tags For Beginner In Web Development,Vs code Extensions
---





# 4 Basic And Important Tags For Beginner In Web Development


![MyFase](/images/blog/html/Html4SimpleTages/1.jpg)

# 1 Div

Div is very basic and useful tag in html. By default div is *block level* element in html means div element default take hole width. You can see example below.


```html
<div>Hi,I am Div</div>
```

*Output:*

## Hi,I am Div



If you know basic *css than you can do any think with div*. like you can create stander layout of website, you can crate animation. one of the main think about this basic element  is you do not need to remember so many tags in html. like b,i ,em,hr tags....etc.

Basic Layout with div:


```html
<div class="container">
    <div class="header">Header</div>
    <div class="navbar">navbar</div>
    <div class="box">
        <div class="Layout1">Layout1</div>
        <div class="Layout2">Layout2</div>
    </div>
    <div class="footer">footer</div>
</div>
<style>
    .header,.navbar,.footer,.Layout1,.Layout2{
        text-align: center;
        height: 50px;
        border: 1px solid black;
    }
    .box{
        display: flex;
    }
    .Layout1,.Layout2{
        width: 50%;
    }
</style>
```

*Output*

![Output2](/images/blog/html/Html4SimpleTages/Output2.jpg)




Note: I know there are may useful tags in html. like sub,sup,fieldset ... etc, but if you just start Web development than you can use div element and after word you can explore.

# 2 Input

Input is one off the important tag in html.* with the help of input you can take input form user*.


Input tag main attribute:

1. **Type** :type define with type of data as input you what like text,email,number,date.. etc.

2. **Name** :name is useful when input is used in form. the given name of input is used to identify the Input data in backend.

3. **Value** :value of Input tag is simple text or any content in input tag.

4. **Placeholder**:placeholder  value display when Input is Empty(*value===""*).


Example of input tag :


```html
<input type="text" name="name" placeholder="Enter Name">
<input type="number" name="age" placeholder="Enter age">
<!-- #you can do any think with the Enter data -->
<button onclick="DoSomething()">Enter</button>
```

*OutPut*


![Output3](/images/blog/html/Html4SimpleTages/Output3.jpg)

# 3 Form

Know input tag is known to you than next very basic tag is Form. For making web site more user interactive the most useful tag is Form. form is used for taking data form the user. *Some off the main tags we can use in form tag are input,label,textarea,button*..etc

Form tag main attribute:

1. **Action** :action container the base url where you want to send the data.

2. **Method** : method define which type of method of request you want to send. default is GET.

3. **Onsubmit** : this not attribute but this is an Event Listener. It used when user enter all the data and submit you want to check something or do something with data.  

*Three way to do it #3:*


```html
<form action="#"  onsubmit="DoSomething()">
or
<button type="submit" onclick="DoSomething()" >Enter</button>
or
<input type="submit" onclick="DoSomething()"> 
```


Example of Form tag :


```html
<div>
    <input type="text" name="name" placeholder="Enter Name">
    <input type="number" name="age" placeholder="Enter age">
    <input type="email" name="email"
    placeholder="Enter email"
    >

    <!-- #you can do any think with the Enter data -->
    <button>Enter</button>
</div>

    <!-- code is same as input tag but you can add on -->
```
*Output:*

![Output4](/images/blog/html/Html4SimpleTages/Output4.jpg)


# 4 Img

*Know a days web-site is not complete without image*.img tag is used to display img on screen.

Img tag main attribute: 


1. **Scr**: Path where your img. Tow type of path you can give direct(*url of image on web*) or relative(*Like ./1.jpg*).

2. **Alt**. Form some reasons img not display  than the text in alt display on screen.

Example of Img tag :

```html
<img src="1.jpg" width="300" alt="I am relative">
<img src="not.jpg" width="300" alt="I am not fund">
<img src="https://zeelcodder.tech/static/media/introimg.e9045810.svg" width="300" alt="I am direct">
```
*OutPut*

![Output5](/images/blog/html/Html4SimpleTages/Output5.jpg)


*Thanks for reading. Give the like to Blog. Have grate life ahead.*

