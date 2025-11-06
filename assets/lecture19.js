// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete JavaScript Mastery - Frontend Foundations",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "destructuring-falsy-truthy",
            title: "Destructuring, Falsy & Truthy Values",
            content: `
                <h3>Destructuring Assignment</h3>
                <p>Destructuring allows you to extract values from arrays or properties from objects into distinct variables.</p>
                
                <h3>Array Destructuring:</h3>
                <ul>
                    <li>Extract values by position</li>
                    <li>Skip elements with empty commas</li>
                    <li>Use default values</li>
                    <li>Rest pattern to collect remaining elements</li>
                    <li>Swap variables easily</li>
                </ul>
                
                <h3>Object Destructuring:</h3>
                <ul>
                    <li>Extract properties by name</li>
                    <li>Use different variable names</li>
                    <li>Nested destructuring</li>
                    <li>Default values for missing properties</li>
                    <li>Rest properties</li>
                </ul>
                
                <h3>Falsy and Truthy Values</h3>
                <p>In JavaScript, values are inherently 'truthy' or 'falsy' when evaluated in a boolean context.</p>
                
                <h3>Falsy Values (become false):</h3>
                <ul>
                    <li><strong>false</strong>: The boolean false</li>
                    <li><strong>0</strong>: The number zero</li>
                    <li><strong>""</strong>: Empty string</li>
                    <li><strong>null</strong>: No value</li>
                    <li><strong>undefined</strong>: Variable not defined</li>
                    <li><strong>NaN</strong>: Not a Number</li>
                </ul>
                
                <h3>Truthy Values (become true):</h3>
                <ul>
                    <li>Everything that's not falsy!</li>
                    <li><strong>true</strong>: The boolean true</li>
                    <li><strong>1</strong>, any non-zero number</li>
                    <li><strong>"hello"</strong>, any non-empty string</li>
                    <li><strong>[]</strong>: Empty array</li>
                    <li><strong>{}</strong>: Empty object</li>
                    <li><strong>function(){}</strong>: Functions</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>التعيين بالتفكيك</h3>
                    <p>يسمح التفكيك باستخراج القيم من المصفوفات أو الخصائص من الكائنات إلى متغيرات منفصلة.</p>
                    
                    <h3>تفكيك المصفوفات:</h3>
                    <ul>
                        <li>استخراج القيم حسب الموضع</li>
                        <li>تخطي العناصر بفواصل فارغة</li>
                        <li>استخدام القيم الافتراضية</li>
                        <li>نمط الباقي لجمع العناصر المتبقية</li>
                        <li>تبديل المتغيرات بسهولة</li>
                    </ul>
                    
                    <h3>تفكيك الكائنات:</h3>
                    <ul>
                        <li>استخراج الخصائص حسب الاسم</li>
                        <li>استخدام أسماء متغيرات مختلفة</li>
                        <li>التفكيك المتداخل</li>
                        <li>القيم الافتراضية للخصائص المفقودة</li>
                        <li>خصائص الباقي</li>
                    </ul>
                    
                    <h3>القيم الزائفة والحقيقية</h3>
                    <p>في JavaScript، القيم تكون بشكل inherent 'حقيقية' أو 'زائفة' عند تقييمها في سياق منطقي.</p>
                    
                    <h3>القيم الزائفة (تصبح false):</h3>
                    <ul>
                        <li><strong>false</strong>: القيمة المنطقية false</li>
                        <li><strong>0</strong>: الرقم صفر</li>
                        <li><strong>""</strong>: نص فارغ</li>
                        <li><strong>null</strong>: لا قيمة</li>
                        <li><strong>undefined</strong>: متغير غير معرّف</li>
                        <li><strong>NaN</strong>: ليس رقمًا</li>
                    </ul>
                    
                    <h3>القيم الحقيقية (تصبح true):</h3>
                    <ul>
                        <li>كل شيء ليس زائفًا!</li>
                        <li><strong>true</strong>: القيمة المنطقية true</li>
                        <li><strong>1</strong>, أي رقم غير صفر</li>
                        <li><strong>"hello"</strong>, أي نص غير فارغ</li>
                        <li><strong>[]</strong>: مصفوفة فارغة</li>
                        <li><strong>{}</strong>: كائن فارغ</li>
                        <li><strong>function(){}</strong>: الدوال</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Destructuring and Truthy/Falsy Examples",
                    content: `
                        <pre class="code-block">
// Array destructuring
let colors = ["red", "green", "blue", "yellow"];
let [firstColor, secondColor] = colors;
console.log(firstColor);  // "red"
console.log(secondColor); // "green"

// Skipping elements
let [,, thirdColor] = colors;
console.log(thirdColor);  // "blue"

// Default values
let numbers = [1];
let [a, b = 10] = numbers;
console.log(a); // 1
console.log(b); // 10

// Rest pattern
let [primary, ...otherColors] = colors;
console.log(primary);     // "red"
console.log(otherColors); // ["green", "blue", "yellow"]

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2, 1

// Object destructuring
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

let { name, age } = person;
console.log(name); // "John"
console.log(age);  // 30

// Different variable names
let { name: personName, age: personAge } = person;
console.log(personName); // "John"
console.log(personAge);  // 30

// Default values
let { country = "USA" } = person;
console.log(country); // "USA"

// Nested destructuring
let employee = {
    id: 1,
    info: {
        firstName: "Jane",
        lastName: "Doe"
    }
};

let { info: { firstName, lastName } } = employee;
console.log(firstName, lastName); // "Jane Doe"

// Falsy values examples
if (false) { console.log("This won't run"); }
if (0) { console.log("This won't run"); }
if ("") { console.log("This won't run"); }
if (null) { console.log("This won't run"); }
if (undefined) { console.log("This won't run"); }
if (NaN) { console.log("This won't run"); }

// Truthy values examples
if (true) { console.log("This will run"); }
if (1) { console.log("This will run"); }
if ("hello") { console.log("This will run"); }
if ([]) { console.log("This will run"); }
if ({}) { console.log("This will run"); }
if (function() {}) { console.log("This will run"); }

// Practical truthy/falsy usage
let userInput = "";
let username = userInput || "Guest";
console.log(username); // "Guest"

let count = 0;
let displayCount = count || "No items";
console.log(displayCount); // "No items"
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Destructuring and Truthy/Falsy Practice",
                    content: `
                        <p>Practice destructuring and working with truthy/falsy values:</p>
                        <ol>
                            <li>Destructure arrays to extract specific elements</li>
                            <li>Destructure objects to extract properties with different variable names</li>
                            <li>Practice nested destructuring with complex objects</li>
                            <li>Use default values in destructuring</li>
                            <li>Test various values for truthiness in conditions</li>
                            <li>Use logical operators with truthy/falsy values for default values</li>
                            <li>Create a function that uses destructuring in parameters</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why are empty arrays and objects truthy?",
                    answer: "Empty arrays ([]) and empty objects ({}) are truthy because they are objects, and all objects are truthy in JavaScript. This is by design - the only falsy values are specifically: false, 0, \"\", null, undefined, and NaN. Everything else, including all objects and arrays (even empty ones), is truthy."
                },
                {
                    question: "What's the difference between destructuring and normal property access?",
                    answer: "Destructuring provides a concise way to extract multiple values from arrays or objects into variables. It's more readable when you need multiple values, allows for default values, enables variable renaming, and supports nested extraction. Regular property access is better for single values or when you don't know which properties you'll need in advance."
                }
            ]
        },
        {
            id: "nullish-other-operators",
            title: "Nullish and Other Modern Operators",
            content: `
                <h3>Nullish Coalescing Operator (??)</h3>
                <p>The ?? operator returns the right-hand operand when the left-hand operand is null or undefined, otherwise returns the left-hand operand.</p>
                
                <h3>Optional Chaining Operator (?.)</h3>
                <p>The ?. operator allows you to safely access nested object properties without causing errors if a reference is null or undefined.</p>
                
                <h3>Logical Assignment Operators</h3>
                <p>Combine logical operations with assignment in a concise way.</p>
                
                <h3>Nullish Coalescing (??):</h3>
                <ul>
                    <li>Returns right value only if left is null or undefined</li>
                    <li>Different from || which returns right for any falsy value</li>
                    <li>Useful for providing defaults without overriding empty strings or 0</li>
                </ul>
                
                <h3>Optional Chaining (?.):</h3>
                <ul>
                    <li>Safely access nested properties</li>
                    <li>Works with object properties, array elements, and function calls</li>
                    <li>Returns undefined if any part of the chain is null/undefined</li>
                    <li>Prevents TypeError when accessing properties of null/undefined</li>
                </ul>
                
                <h3>Logical Assignment Operators:</h3>
                <ul>
                    <li><strong>||=</strong>: Assign if left is falsy</li>
                    <li><strong>&&=</strong>: Assign if left is truthy</li>
                    <li><strong>??=</strong>: Assign if left is nullish</li>
                </ul>
                
                <h3>Other Useful Operators:</h3>
                <ul>
                    <li><strong>Ternary operator</strong>: condition ? expr1 : expr2</li>
                    <li><strong>Spread operator (...)</strong>: Expand arrays/objects</li>
                    <li><strong>typeof</strong>: Check variable type</li>
                    <li><strong>instanceof</strong>: Check object type</li>
                    <li><strong>in</strong>: Check if property exists in object</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>عامل التوحيد الفارغ (??)</h3>
                    <p>يعيد العامل ?? المعامل الأيمن عندما يكون المعامل الأيسر null أو undefined، وإلا يعيد المعامل الأيسر.</p>
                    
                    <h3>عامل السلسلة الاختيارية (?.)</h3>
                    <p>يسمح العامل ?. بالوصول الآمن إلى خصائص الكائنات المتداخلة دون التسبب في أخطاء إذا كان المرجع null أو undefined.</p>
                    
                    <h3>عوامل التعيين المنطقية</h3>
                    <p>اجمع العمليات المنطقية مع التعيين بطريقة موجزة.</p>
                    
                    <h3>التوحيد الفارغ (??):</h3>
                    <ul>
                        <li>يعيد القيمة اليمنى فقط إذا كانت اليسرى null أو undefined</li>
                        <li>يختلف عن || الذي يعيد اليمنى لأي قيمة زائفة</li>
                        <li>مفيد لتوفير القيم الافتراضية دون تجاوز النصوص الفارغة أو 0</li>
                    </ul>
                    
                    <h3>السلسلة الاختيارية (?.):</h3>
                    <ul>
                        <li>الوصول الآمن إلى الخصائص المتداخلة</li>
                        <li>يعمل مع خصائص الكائنات وعناصر المصفوفات واستدعاءات الدوال</li>
                        <li>يعيد undefined إذا كان أي جزء من السلسلة null/undefined</li>
                        <li>يمنع TypeError عند الوصول إلى خصائص null/undefined</li>
                    </ul>
                    
                    <h3>عوامل التعيين المنطقية:</h3>
                    <ul>
                        <li><strong>||=</strong>: عيّن إذا كانت القيمة اليسرى زائفة</li>
                        <li><strong>&&=</strong>: عيّن إذا كانت القيمة اليسرى حقيقية</li>
                        <li><strong>??=</strong>: عيّن إذا كانت القيمة اليسرى فارغة</li>
                    </ul>
                    
                    <h3>عوامل أخرى مفيدة:</h3>
                    <ul>
                        <li><strong>العامل الثلاثي</strong>: condition ? expr1 : expr2</li>
                        <li><strong>عامل الانتشار (...)</strong>: توسيع المصفوفات/الكائنات</li>
                        <li><strong>typeof</strong>: التحقق من نوع المتغير</li>
                        <li><strong>instanceof</strong>: التحقق من نوع الكائن</li>
                        <li><strong>in</strong>: التحقق إذا كانت الخاصية موجودة في الكائن</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Nullish and Modern Operators Examples",
                    content: `
                        <pre class="code-block">
// Nullish coalescing operator (??)
let userName = null;
let displayName = userName ?? "Anonymous";
console.log(displayName); // "Anonymous"

let count = 0;
let result1 = count || 10;  // 10 (0 is falsy)
let result2 = count ?? 10;  // 0 (0 is not nullish)
console.log(result1, result2);

let emptyString = "";
let text1 = emptyString || "default"; // "default" ("" is falsy)
let text2 = emptyString ?? "default"; // "" ("" is not nullish)
console.log(text1, text2);

// Optional chaining operator (?.)
let user = {
    profile: {
        name: "John",
        address: {
            city: "New York"
        }
    }
};

console.log(user.profile?.name);           // "John"
console.log(user.profile?.age);            // undefined
console.log(user.settings?.theme);         // undefined (settings doesn't exist)
console.log(user.profile?.address?.city);  // "New York"

// With arrays
let arr = null;
console.log(arr?.[0]);     // undefined
console.log(arr?.[0]?.x);  // undefined

// With function calls
let obj = {
    method: function() { return "hello"; }
};
console.log(obj.method?.());     // "hello"
console.log(obj.otherMethod?.()); // undefined

// Logical assignment operators
let a = 0;
let b = 5;

// OR assignment (||=)
a ||= 10;  // a = a || 10 → a becomes 10 (0 is falsy)
b ||= 10;  // b = b || 10 → b stays 5 (5 is truthy)
console.log(a, b); // 10, 5

// AND assignment (&&=)
let x = 0;
let y = 5;
x &&= 10;  // x = x && 10 → x stays 0 (0 is falsy)
y &&= 10;  // y = y && 10 → y becomes 10 (5 is truthy)
console.log(x, y); // 0, 10

// Nullish assignment (??=)
let value1 = null;
let value2 = 0;
value1 ??= 100;  // value1 = value1 ?? 100 → becomes 100
value2 ??= 100;  // value2 = value2 ?? 100 → stays 0
console.log(value1, value2); // 100, 0

// Other useful operators
// Ternary operator
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Spread operator
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // {a: 1, b: 2, c: 3}

// typeof and instanceof
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log([] instanceof Array); // true

// in operator
let car = { make: "Toyota", model: "Camry" };
console.log("make" in car);    // true
console.log("year" in car);    // false
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Modern Operators Practice",
                    content: `
                        <p>Practice using modern JavaScript operators:</p>
                        <ol>
                            <li>Use ?? to provide defaults without overriding 0 or empty strings</li>
                            <li>Use ?. to safely access nested object properties</li>
                            <li>Practice with logical assignment operators (||=, &&=, ??=)</li>
                            <li>Compare the behavior of ?? vs || with different values</li>
                            <li>Use optional chaining with function calls and array access</li>
                            <li>Create a function that uses multiple modern operators</li>
                            <li>Practice with spread operator for arrays and objects</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use ?? instead of ||?",
                    answer: "Use ?? when you want to provide a default value but want to preserve falsy values like 0, false, or empty strings (\"\"). Use || when you want to provide a default for any falsy value. For example, if you have a count that could be 0, using count || 10 would replace 0 with 10, while count ?? 10 would keep 0."
                },
                {
                    question: "What's the difference between ?. and && for safe property access?",
                    answer: "Both can be used for safe property access, but ?. is more concise and readable. For example: user?.profile?.name vs user && user.profile && user.profile.name. The ?. operator also works with function calls and array access, and it's specifically designed for this purpose. However, && gives you more control and can be used for more complex conditions."
                }
            ]
        },
        {
            id: "dom-manipulation",
            title: "DOM Manipulation - Interacting with Web Pages",
            content: `
                <h3>What is the DOM?</h3>
                <p>The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.</p>
                
                <h3>DOM Tree Structure:</h3>
                <ul>
                    <li><strong>Document</strong>: The root of the DOM tree</li>
                    <li><strong>Elements</strong>: HTML tags as nodes</li>
                    <li><strong>Text Nodes</strong>: Text content within elements</li>
                    <li><strong>Attributes</strong>: HTML attributes as nodes</li>
                    <li><strong>Comments</strong>: HTML comments as nodes</li>
                </ul>
                
                <h3>Selecting DOM Elements:</h3>
                <ul>
                    <li><strong>getElementById</strong>: Select by ID</li>
                    <li><strong>getElementsByClassName</strong>: Select by class name</li>
                    <li><strong>getElementsByTagName</strong>: Select by tag name</li>
                    <li><strong>querySelector</strong>: Select first matching element</li>
                    <li><strong>querySelectorAll</strong>: Select all matching elements</li>
                </ul>
                
                <h3>Manipulating Elements:</h3>
                <ul>
                    <li><strong>textContent</strong>: Get/set text content</li>
                    <li><strong>innerHTML</strong>: Get/set HTML content</li>
                    <li><strong>innerText</strong>: Get/set visible text</li>
                    <li><strong>setAttribute</strong>: Set element attributes</li>
                    <li><strong>getAttribute</strong>: Get element attributes</li>
                    <li><strong>classList</strong>: Add/remove/toggle CSS classes</li>
                </ul>
                
                <h3>Creating and Modifying Elements:</h3>
                <ul>
                    <li><strong>createElement</strong>: Create new element</li>
                    <li><strong>createTextNode</strong>: Create text node</li>
                    <li><strong>appendChild</strong>: Add child element</li>
                    <li><strong>removeChild</strong>: Remove child element</li>
                    <li><strong>replaceChild</strong>: Replace child element</li>
                    <li><strong>insertBefore</strong>: Insert element before another</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ما هو الـ DOM؟</h3>
                    <p>نموذج كائن المستند (DOM) هو واجهة برمجة لمستندات الويب. إنه يمثل الصفحة حتى تتمكن البرامج من تغيير هيكل المستند ونمطه ومحتواه.</p>
                    
                    <h3>هيكل شجرة الـ DOM:</h3>
                    <ul>
                        <li><strong>المستند</strong>: جذر شجرة الـ DOM</li>
                        <li><strong>العناصر</strong>: علامات HTML كعقد</li>
                        <li><strong>عقد النص</strong>: محتوى النص داخل العناصر</li>
                        <li><strong>السمات</strong>: سمات HTML كعقد</li>
                        <li><strong>التعليقات</strong>: تعليقات HTML كعقد</li>
                    </ul>
                    
                    <h3>اختيار عناصر الـ DOM:</h3>
                    <ul>
                        <li><strong>getElementById</strong>: اختر بواسطة ID</li>
                        <li><strong>getElementsByClassName</strong>: اختر بواسطة اسم الفئة</li>
                        <li><strong>getElementsByTagName</strong>: اختر بواسطة اسم الوسم</li>
                        <li><strong>querySelector</strong>: اختر أول عنصر مطابق</li>
                        <li><strong>querySelectorAll</strong>: اختر كل العناصر المطابقة</li>
                    </ul>
                    
                    <h3>معالجة العناصر:</h3>
                    <ul>
                        <li><strong>textContent</strong>: احصل/اضبط محتوى النص</li>
                        <li><strong>innerHTML</strong>: احصل/اضبط محتوى HTML</li>
                        <li><strong>innerText</strong>: احصل/اضبط النص المرئي</li>
                        <li><strong>setAttribute</strong>: اضبط سمات العنصر</li>
                        <li><strong>getAttribute</strong>: احصل على سمات العنصر</li>
                        <li><strong>classList</strong>: أضف/أزل/بدل فئات CSS</li>
                    </ul>
                    
                    <h3>إنشاء وتعديل العناصر:</h3>
                    <ul>
                        <li><strong>createElement</strong>: أنشئ عنصرًا جديدًا</li>
                        <li><strong>createTextNode</strong>: أنشئ عقدة نص</li>
                        <li><strong>appendChild</strong>: أضف عنصرًا فرعيًا</li>
                        <li><strong>removeChild</strong>: أزل عنصرًا فرعيًا</li>
                        <li><strong>replaceChild</strong>: استبدل عنصرًا فرعيًا</li>
                        <li><strong>insertBefore</strong>: أدخل عنصرًا قبل آخر</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "DOM Manipulation Examples",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;DOM Manipulation&lt;/title&gt;
    &lt;style&gt;
        .highlight { background-color: yellow; }
        .hidden { display: none; }
        .error { color: red; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="container"&gt;
        &lt;h1 id="main-title"&gt;Hello DOM&lt;/h1&gt;
        &lt;p class="description"&gt;This is a paragraph&lt;/p&gt;
        &lt;ul id="item-list"&gt;
            &lt;li&gt;Item 1&lt;/li&gt;
            &lt;li&gt;Item 2&lt;/li&gt;
        &lt;/ul&gt;
        &lt;button id="click-btn"&gt;Click Me&lt;/button&gt;
        &lt;div id="output"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;script&gt;
        // Selecting elements
        const title = document.getElementById('main-title');
        const descriptions = document.getElementsByClassName('description');
        const listItems = document.getElementsByTagName('li');
        const button = document.querySelector('#click-btn');
        const allParagraphs = document.querySelectorAll('p');

        // Manipulating content
        title.textContent = "Hello Updated DOM!";
        title.innerHTML = "Hello &lt;em&gt;Updated&lt;/em&gt; DOM!";
        
        // Working with attributes
        title.setAttribute('data-custom', 'value');
        console.log(title.getAttribute('data-custom')); // "value"
        
        // Working with classes
        title.classList.add('highlight');
        title.classList.remove('highlight');
        title.classList.toggle('highlight'); // Adds if not present, removes if present
        
        // Creating new elements
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'This is a new paragraph';
        newParagraph.className = 'description';
        
        // Adding elements to DOM
        document.getElementById('container').appendChild(newParagraph);
        
        // Creating and adding multiple elements
        const newItem = document.createElement('li');
        newItem.textContent = 'Item 3';
        document.getElementById('item-list').appendChild(newItem);
        
        // Removing elements
        // document.getElementById('item-list').removeChild(newItem);
        
        // Event handling
        button.addEventListener('click', function() {
            const output = document.getElementById('output');
            output.innerHTML = 'Button was clicked!';
            output.classList.add('highlight');
            
            // Create and add new element on click
            const timeStamp = document.createElement('p');
            timeStamp.textContent = 'Clicked at: ' + new Date().toLocaleTimeString();
            output.appendChild(timeStamp);
        });
        
        // Event delegation example
        document.getElementById('item-list').addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                event.target.classList.toggle('highlight');
            }
        });
        
        // Form handling example
        const form = document.createElement('form');
        form.innerHTML = \`
            &lt;input type="text" id="name-input" placeholder="Enter your name"&gt;
            &lt;button type="submit"&gt;Submit&lt;/button&gt;
        \`;
        
        document.body.appendChild(form);
        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            const name = document.getElementById('name-input').value;
            alert('Hello, ' + name);
        });
        
        // Dynamic styling
        const dynamicStyle = document.createElement('style');
        dynamicStyle.textContent = \`
            .dynamic-class { 
                border: 2px solid blue; 
                padding: 10px; 
                margin: 5px;
            }
        \`;
        document.head.appendChild(dynamicStyle);
        
        // Apply dynamic class
        title.classList.add('dynamic-class');
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "DOM Manipulation Practice",
                    content: `
                        <p>Practice DOM manipulation techniques:</p>
                        <ol>
                            <li>Create a dynamic todo list that allows adding and removing items</li>
                            <li>Build a color changer that changes background color when buttons are clicked</li>
                            <li>Create a simple calculator with a visual interface</li>
                            <li>Build an image gallery that shows different images when clicked</li>
                            <li>Create a form validation system that shows error messages</li>
                            <li>Build a dynamic table that can be sorted and filtered</li>
                            <li>Create a modal/popup that appears when a button is clicked</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between textContent, innerHTML, and innerText?",
                    answer: "textContent gets/sets all text content, including hidden text. innerHTML gets/sets HTML content, allowing you to insert HTML elements. innerText gets/sets only visible text and is aware of CSS styling. Use textContent for performance and security (avoids XSS attacks), innerHTML when you need to insert HTML, and avoid innerText due to performance issues."
                },
                {
                    question: "What is event delegation and why is it useful?",
                    answer: "Event delegation attaches a single event listener to a parent element instead of multiple listeners to child elements. Events bubble up from the target element to the parent. This improves performance (fewer listeners), works for dynamically added elements, and reduces memory usage. It's especially useful for lists where items are frequently added/removed."
                }
            ]
        },
        {
            id: "events-forms",
            title: "Events and Forms - User Interaction",
            content: `
                <h3>Understanding Events:</h3>
                <p>Events are actions that happen in the browser, such as clicks, keyboard input, or page loading. JavaScript can respond to these events to create interactive web pages.</p>
                
                <h3>Common Event Types:</h3>
                <ul>
                    <li><strong>Mouse Events</strong>: click, dblclick, mousedown, mouseup, mousemove</li>
                    <li><strong>Keyboard Events</strong>: keydown, keyup, keypress</li>
                    <li><strong>Form Events</strong>: submit, change, input, focus, blur</li>
                    <li><strong>Window Events</strong>: load, resize, scroll, beforeunload</li>
                    <li><strong>Touch Events</strong>: touchstart, touchmove, touchend</li>
                </ul>
                
                <h3>Event Handling Methods:</h3>
                <ul>
                    <li><strong>addEventListener</strong>: Modern way to attach events</li>
                    <li><strong>removeEventListener</strong>: Remove event handlers</li>
                    <li><strong>Inline event handlers</strong>: onclick=\"code\" (not recommended)</li>
                    <li><strong>Event object properties</strong>: target, type, preventDefault(), stopPropagation()</li>
                </ul>
                
                <h3>Working with Forms:</h3>
                <ul>
                    <li><strong>Form elements</strong>: input, textarea, select, button</li>
                    <li><strong>Form validation</strong>: Client-side validation</li>
                    <li><strong>Form submission</strong>: Handling form data</li>
                    <li><strong>Form reset</strong>: Clearing form data</li>
                    <li><strong>Form data access</strong>: Using FormData API</li>
                </ul>
                
                <h3>Event Propagation:</h3>
                <ul>
                    <li><strong>Event Bubbling</strong>: Events bubble up from target to root</li>
                    <li><strong>Event Capturing</strong>: Events capture down from root to target</li>
                    <li><strong>Event Delegation</strong>: Handling events on parent elements</li>
                    <li><strong>stopPropagation()</strong>: Stop event from propagating</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>فهم الأحداث:</h3>
                    <p>الأحداث هي إجراءات تحدث في المتصفح، مثل النقرات، إدخال لوحة المفاتيح، أو تحميل الصفحة. يمكن لـ JavaScript الرد على هذه الأحداث لإنشاء صفحات ويب تفاعلية.</p>
                    
                    <h3>أنواع الأحداث الشائعة:</h3>
                    <ul>
                        <li><strong>أحداث الفأرة</strong>: click, dblclick, mousedown, mouseup, mousemove</li>
                        <li><strong>أحداث لوحة المفاتيح</strong>: keydown, keyup, keypress</li>
                        <li><strong>أحداث النماذج</strong>: submit, change, input, focus, blur</li>
                        <li><strong>أحداث النافذة</strong>: load, resize, scroll, beforeunload</li>
                        <li><strong>أحداث اللمس</strong>: touchstart, touchmove, touchend</li>
                    </ul>
                    
                    <h3>طرق معالجة الأحداث:</h3>
                    <ul>
                        <li><strong>addEventListener</strong>: الطريقة الحديثة لإرفاق الأحداث</li>
                        <li><strong>removeEventListener</strong>: أزل معالجي الأحداث</li>
                        <li><strong>معالجي الأحداث المضمنين</strong>: onclick=\"code\" (غير موصى به)</li>
                        <li><strong>خصائص كائن الحدث</strong>: target, type, preventDefault(), stopPropagation()</li>
                    </ul>
                    
                    <h3>العمل مع النماذج:</h3>
                    <ul>
                        <li><strong>عناصر النموذج</strong>: input, textarea, select, button</li>
                        <li><strong>التحقق من النموذج</strong>: التحقق من جانب العميل</li>
                        <li><strong>إرسال النموذج</strong>: معالجة بيانات النموذج</li>
                        <li><strong>إعادة تعيين النموذج</strong>: مسح بيانات النموذج</li>
                        <li><strong>الوصول إلى بيانات النموذج</strong>: استخدام FormData API</li>
                    </ul>
                    
                    <h3>انتشار الحدث:</h3>
                    <ul>
                        <li><strong>Event Bubbling</strong>: تنتقل الأحداث من الهدف إلى الجذر</li>
                        <li><strong>Event Capturing</strong>: تلتقط الأحداث من الجذر إلى الهدف</li>
                        <li><strong>تفويض الحدث</strong>: معالجة الأحداث على العناصر الأصل</li>
                        <li><strong>stopPropagation()</strong>: أوقف الحدث من الانتشار</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Events and Forms Examples",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Events and Forms&lt;/title&gt;
    &lt;style&gt;
        .error { color: red; font-size: 0.9em; }
        .success { color: green; }
        .hidden { display: none; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="app"&gt;
        &lt;h1&gt;Event Handling Examples&lt;/h1&gt;
        
        &lt;!-- Mouse Events --&gt;
        &lt;div id="mouse-area" style="border: 1px solid #ccc; padding: 20px; margin: 10px;"&gt;
            &lt;p&gt;Mouse coordinates: &lt;span id="coordinates"&gt;0, 0&lt;/span&gt;&lt;/p&gt;
        &lt;/div&gt;
        
        &lt;!-- Keyboard Events --&gt;
        &lt;div style="margin: 10px;"&gt;
            &lt;input type="text" id="key-input" placeholder="Type something..."&gt;
            &lt;p&gt;Last key pressed: &lt;span id="key-display"&gt;&lt;/span&gt;&lt;/p&gt;
        &lt;/div&gt;
        
        &lt;!-- Form Example --&gt;
        &lt;form id="user-form"&gt;
            &lt;div&gt;
                &lt;label for="name"&gt;Name:&lt;/label&gt;
                &lt;input type="text" id="name" name="name" required&gt;
                &lt;span id="name-error" class="error hidden"&gt;&lt;/span&gt;
            &lt;/div&gt;
            
            &lt;div&gt;
                &lt;label for="email"&gt;Email:&lt;/label&gt;
                &lt;input type="email" id="email" name="email" required&gt;
                &lt;span id="email-error" class="error hidden"&gt;&lt;/span&gt;
            &lt;/div&gt;
            
            &lt;div&gt;
                &lt;label for="age"&gt;Age:&lt;/label&gt;
                &lt;input type="number" id="age" name="age" min="0" max="120"&gt;
            &lt;/div&gt;
            
            &lt;button type="submit"&gt;Submit&lt;/button&gt;
        &lt;/form&gt;
        
        &lt;div id="form-output"&gt;&lt;/div&gt;
    &lt;/div&gt;

    &lt;script&gt;
        // Mouse events
        const mouseArea = document.getElementById('mouse-area');
        const coordinates = document.getElementById('coordinates');
        
        mouseArea.addEventListener('mousemove', function(event) {
            coordinates.textContent = \`\${event.clientX}, \${event.clientY}\`;
        });
        
        mouseArea.addEventListener('click', function(event) {
            this.style.backgroundColor = this.style.backgroundColor === 'lightblue' ? '' : 'lightblue';
        });
        
        mouseArea.addEventListener('dblclick', function() {
            this.style.backgroundColor = 'lightgreen';
        });
        
        // Keyboard events
        const keyInput = document.getElementById('key-input');
        const keyDisplay = document.getElementById('key-display');
        
        keyInput.addEventListener('keydown', function(event) {
            keyDisplay.textContent = \`Key: \${event.key}, Code: \${event.code}\`;
        });
        
        keyInput.addEventListener('keyup', function() {
            // Additional keyup logic if needed
        });
        
        // Form handling
        const userForm = document.getElementById('user-form');
        const formOutput = document.getElementById('form-output');
        
        // Real-time validation
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        
        nameInput.addEventListener('input', function() {
            if (this.value.length < 2) {
                nameError.textContent = 'Name must be at least 2 characters';
                nameError.classList.remove('hidden');
            } else {
                nameError.classList.add('hidden');
            }
        });
        
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!emailRegex.test(this.value)) {
                emailError.textContent = 'Please enter a valid email address';
                emailError.classList.remove('hidden');
            } else {
                emailError.classList.add('hidden');
            }
        });
        
        // Form submission
        userForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            let isValid = true;
            
            if (!data.name || data.name.length < 2) {
                nameError.textContent = 'Name is required and must be at least 2 characters';
                nameError.classList.remove('hidden');
                isValid = false;
            }
            
            const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
            if (!data.email || !emailRegex.test(data.email)) {
                emailError.textContent = 'Valid email is required';
                emailError.classList.remove('hidden');
                isValid = false;
            }
            
            if (isValid) {
                // Display success message
                formOutput.innerHTML = \`
                    &lt;div class="success"&gt;
                        &lt;h3&gt;Form Submitted Successfully!&lt;/h3&gt;
                        &lt;p&gt;Name: \${data.name}&lt;/p&gt;
                        &lt;p&gt;Email: \${data.email}&lt;/p&gt;
                        &lt;p&gt;Age: \${data.age || 'Not specified'}&lt;/p&gt;
                    &lt;/div&gt;
                \`;
                
                // Reset form
                this.reset();
                
                // Clear errors
                nameError.classList.add('hidden');
                emailError.classList.add('hidden');
            }
        });
        
        // Event delegation example
        document.addEventListener('click', function(event) {
            if (event.target.matches('button')) {
                console.log('Button clicked:', event.target.textContent);
            }
        });
        
        // Window events
        window.addEventListener('resize', function() {
            console.log('Window resized to:', window.innerWidth, 'x', window.innerHeight);
        });
        
        window.addEventListener('scroll', function() {
            console.log('Scrolled to:', window.scrollY);
        });
        
        // Prevent context menu
        document.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            alert('Right-click is disabled on this page');
        });
        
        // Custom events (advanced)
        const customEvent = new CustomEvent('userRegistered', {
            detail: { message: 'A new user has been registered' }
        });
        
        // Dispatch custom event
        document.addEventListener('userRegistered', function(event) {
            console.log('Custom event received:', event.detail.message);
        });
        
        // Trigger custom event after form submission
        userForm.addEventListener('submit', function() {
            setTimeout(() => {
                document.dispatchEvent(customEvent);
            }, 1000);
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Events and Forms Practice",
                    content: `
                        <p>Practice event handling and form manipulation:</p>
                        <ol>
                            <li>Create a drag-and-drop interface for reordering items</li>
                            <li>Build a real-time character counter for text inputs</li>
                            <li>Create a custom dropdown menu with keyboard navigation</li>
                            <li>Build a form with complex validation rules</li>
                            <li>Create a drawing application using mouse events</li>
                            <li>Build a keyboard shortcut system for your application</li>
                            <li>Create a file upload interface with preview functionality</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between event.preventDefault() and event.stopPropagation()?",
                    answer: "event.preventDefault() prevents the default browser behavior for that event (like form submission or link navigation). event.stopPropagation() stops the event from bubbling up the DOM tree, preventing parent elements from receiving the event. Use preventDefault() when you want to handle the event completely yourself, and stopPropagation() when you want to contain the event to a specific element."
                },
                {
                    question: "Why is event delegation important for dynamic content?",
                    answer: "Event delegation allows you to handle events for elements that don't exist yet when the page loads. By attaching the event listener to a parent element that does exist, you can handle events from dynamically added child elements. This is more efficient than attaching individual event listeners to each new element and prevents memory leaks from forgotten event listeners."
                }
            ]
        },
        {
            id: "bom-async",
            title: "BOM and Asynchronous JavaScript",
            content: `
                <h3>Browser Object Model (BOM):</h3>
                <p>The Browser Object Model (BOM) allows JavaScript to interact with the browser. It includes objects like window, navigator, history, location, and screen.</p>
                
                <h3>Window Object:</h3>
                <ul>
                    <li><strong>Global object</strong>: All global variables and functions become properties of window</li>
                    <li><strong>Window methods</strong>: alert(), confirm(), prompt()</li>
                    <li><strong>Timing events</strong>: setTimeout(), setInterval(), clearTimeout(), clearInterval()</li>
                    <li><strong>Window properties</strong>: innerWidth, innerHeight, location, history</li>
                </ul>
                
                <h3>Other BOM Objects:</h3>
                <ul>
                    <li><strong>navigator</strong>: Browser information (name, version, platform)</li>
                    <li><strong>screen</strong>: User's screen information (width, height, color depth)</li>
                    <li><strong>history</strong>: Browser history navigation (back(), forward(), go())</li>
                    <li><strong>location</strong>: Current URL information and navigation</li>
                </ul>
                
                <h3>Asynchronous JavaScript:</h3>
                <p>Asynchronous programming allows JavaScript to perform time-consuming operations without blocking the main thread.</p>
                
                <h3>Async Techniques:</h3>
                <ul>
                    <li><strong>Callbacks</strong>: Functions passed as arguments to be called later</li>
                    <li><strong>Promises</strong>: Objects representing eventual completion/failure of async operations</li>
                    <li><strong>Async/Await</strong>: Syntactic sugar for working with promises</li>
                    <li><strong>Fetch API</strong>: Modern way to make HTTP requests</li>
                </ul>
                
                <h3>Working with Time:</h3>
                <ul>
                    <li><strong>Date object</strong>: Working with dates and times</li>
                    <li><strong>setTimeout</strong>: Execute code after delay</li>
                    <li><strong>setInterval</strong>: Execute code repeatedly at intervals</li>
                    <li><strong>requestAnimationFrame</strong>: For smooth animations</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>نموذج كائن المتصفح (BOM):</h3>
                    <p>يسمح نموذج كائن المتصفح (BOM) لـ JavaScript بالتفاعل مع المتصفح.它包括 كائنات مثل window, navigator, history, location, و screen.</p>
                    
                    <h3>كائن النافذة:</h3>
                    <ul>
                        <li><strong>الكائن العام</strong>: جميع المتغيرات والدوال العامة تصبح خصائص للنافذة</li>
                        <li><strong>طرق النافذة</strong>: alert(), confirm(), prompt()</li>
                        <li><strong>أحداث التوقيت</strong>: setTimeout(), setInterval(), clearTimeout(), clearInterval()</li>
                        <li><strong>خصائص النافذة</strong>: innerWidth, innerHeight, location, history</li>
                    </ul>
                    
                    <h3>كائنات BOM الأخرى:</h3>
                    <ul>
                        <li><strong>navigator</strong>: معلومات المتصفح (الاسم، الإصدار، المنصة)</li>
                        <li><strong>screen</strong>: معلومات شاشة المستخدم (العرض، الارتفاع، عمق اللون)</li>
                        <li><strong>history</strong>: التنقل في سجل المتصفح (back(), forward(), go())</li>
                        <li><strong>location</strong>: معلومات URL الحالية والتنقل</li>
                    </ul>
                    
                    <h3>JavaScript غير المتزامنة:</h3>
                    <p>تسمح البرمجة غير المتزامنة لـ JavaScript بتنفيذ العمليات التي تستغرق وقتًا طويلاً دون حجب الخيط الرئيسي.</p>
                    
                    <h3>تقنيات غير متزامنة:</h3>
                    <ul>
                        <li><strong>Callback functions</strong>: الدوال الممررة كوسيطات ليتم استدعاؤها لاحقًا</li>
                        <li><strong>الوعود (Promises)</strong>: كائنات تمثل اكتمال/فشل العمليات غير المتزامنة</li>
                        <li><strong>Async/Await</strong>: سكر نحوي للعمل مع الوعود</li>
                        <li><strong>Fetch API</strong>: الطريقة الحديثة لعمل طلبات HTTP</li>
                    </ul>
                    
                    <h3>العمل مع الوقت:</h3>
                    <ul>
                        <li><strong>كائن التاريخ</strong>: العمل مع التواريخ والأوقات</li>
                        <li><strong>setTimeout</strong>: نفذ الكود بعد تأخير</li>
                        <li><strong>setInterval</strong>: نفذ الكود بشكل متكرر على فترات</li>
                        <li><strong>requestAnimationFrame</strong>: للرسوم المتحركة السلسة</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "BOM and Async Examples",
                    content: `
                        <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;BOM and Async&lt;/title&gt;
    &lt;style&gt;
        .box { 
            width: 100px; 
            height: 100px; 
            background: blue; 
            margin: 10px; 
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;BOM and Asynchronous JavaScript&lt;/h1&gt;
    
    &lt;div&gt;
        &lt;button onclick="showBrowserInfo()"&gt;Show Browser Info&lt;/button&gt;
        &lt;button onclick="showScreenInfo()"&gt;Show Screen Info&lt;/button&gt;
        &lt;button onclick="startTimer()"&gt;Start Timer&lt;/button&gt;
        &lt;button onclick="stopTimer()"&gt;Stop Timer&lt;/button&gt;
        &lt;button onclick="fetchData()"&gt;Fetch Data&lt;/button&gt;
    &lt;/div&gt;
    
    &lt;div id="output" style="margin: 20px; padding: 10px; border: 1px solid #ccc;"&gt;&lt;/div&gt;
    
    &lt;div id="animation-box" class="box"&gt;&lt;/div&gt;

    &lt;script&gt;
        const output = document.getElementById('output');
        
        // Window object examples
        function showBrowserInfo() {
            output.innerHTML = \`
                &lt;h3&gt;Browser Information&lt;/h3&gt;
                &lt;p&gt;User Agent: \${navigator.userAgent}&lt;/p&gt;
                &lt;p&gt;Platform: \${navigator.platform}&lt;/p&gt;
                &lt;p&gt;Language: \${navigator.language}&lt;/p&gt;
                &lt;p&gt;Cookies Enabled: \${navigator.cookieEnabled}&lt;/p&gt;
                &lt;p&gt;Window Size: \${window.innerWidth} x \${window.innerHeight}&lt;/p&gt;
            \`;
        }
        
        function showScreenInfo() {
            output.innerHTML = \`
                &lt;h3&gt;Screen Information&lt;/h3&gt;
                &lt;p&gt;Screen Size: \${screen.width} x \${screen.height}&lt;/p&gt;
                &lt;p&gt;Available Screen: \${screen.availWidth} x \${screen.availHeight}&lt;/p&gt;
                &lt;p&gt;Color Depth: \${screen.colorDepth} bits&lt;/p&gt;
                &lt;p&gt;Pixel Depth: \${screen.pixelDepth} bits&lt;/p&gt;
            \`;
        }
        
        // Timing functions
        let timerId;
        let counter = 0;
        
        function startTimer() {
            output.innerHTML = 'Timer started...';
            timerId = setInterval(() => {
                counter++;
                output.innerHTML = \`Timer: \${counter} seconds\`;
            }, 1000);
        }
        
        function stopTimer() {
            clearInterval(timerId);
            output.innerHTML = \`Timer stopped at \${counter} seconds\`;
            counter = 0;
        }
        
        // setTimeout example
        setTimeout(() => {
            console.log('This runs after 2 seconds');
        }, 2000);
        
        // Window methods
        function showConfirm() {
            const shouldDelete = confirm('Are you sure you want to delete this item?');
            if (shouldDelete) {
                output.innerHTML = 'Item deleted!';
            } else {
                output.innerHTML = 'Deletion cancelled.';
            }
        }
        
        function showPrompt() {
            const userName = prompt('Please enter your name:', 'Guest');
            if (userName) {
                output.innerHTML = \`Hello, \${userName}!\`;
            }
        }
        
        // Location object
        function showLocationInfo() {
            output.innerHTML = \`
                &lt;h3&gt;Location Information&lt;/h3&gt;
                &lt;p&gt;URL: \${location.href}&lt;/p&gt;
                &lt;p&gt;Host: \${location.host}&lt;/p&gt;
                &lt;p&gt;Path: \${location.pathname}&lt;/p&gt;
                &lt;p&gt;Protocol: \${location.protocol}&lt;/p&gt;
            \`;
        }
        
        // History object
        function goBack() {
            history.back();
        }
        
        function goForward() {
            history.forward();
        }
        
        // Async JavaScript with Promises
        function fetchData() {
            output.innerHTML = 'Fetching data...';
            
            // Using Fetch API (returns a Promise)
            fetch('https://jsonplaceholder.typicode.com/posts/1')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    output.innerHTML = \`
                        &lt;h3&gt;Fetched Data&lt;/h3&gt;
                        &lt;p&gt;&lt;strong&gt;Title:&lt;/strong&gt; \${data.title}&lt;/p&gt;
                        &lt;p&gt;&lt;strong&gt;Body:&lt;/strong&gt; \${data.body}&lt;/p&gt;
                    \`;
                })
                .catch(error => {
                    output.innerHTML = \`Error: \${error.message}\`;
                });
        }
        
        // Async/await version
        async function fetchDataAsync() {
            try {
                output.innerHTML = 'Fetching data with async/await...';
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                const data = await response.json();
                output.innerHTML = \`
                    &lt;h3&gt;Fetched Data (Async/Await)&lt;/h3&gt;
                    &lt;p&gt;&lt;strong&gt;Title:&lt;/strong&gt; \${data.title}&lt;/p&gt;
                    &lt;p&gt;&lt;strong&gt;Body:&lt;/strong&gt; \${data.body}&lt;/p&gt;
                \`;
            } catch (error) {
                output.innerHTML = \`Error: \${error.message}\`;
            }
        }
        
        // Working with Date object
        function showCurrentTime() {
            const now = new Date();
            output.innerHTML = \`
                &lt;h3&gt;Current Date and Time&lt;/h3&gt;
                &lt;p&gt;Full Date: \${now.toString()}&lt;/p&gt;
                &lt;p&gt;ISO Format: \${now.toISOString()}&lt;/p&gt;
                &lt;p&gt;Locale String: \${now.toLocaleString()}&lt;/p&gt;
                &lt;p&gt;Year: \${now.getFullYear()}&lt;/p&gt;
                &lt;p&gt;Month: \${now.getMonth() + 1}&lt;/p&gt;
                &lt;p&gt;Day: \${now.getDate()}&lt;/p&gt;
                &lt;p&gt;Hours: \${now.getHours()}&lt;/p&gt;
                &lt;p&gt;Minutes: \${now.getMinutes()}&lt;/p&gt;
            \`;
        }
        
        // Animation with requestAnimationFrame
        const box = document.getElementById('animation-box');
        let position = 0;
        let direction = 1;
        
        function animate() {
            position += 2 * direction;
            box.style.transform = \`translateX(\${position}px)\`;
            
            if (position > 200 || position < 0) {
                direction *= -1; // Reverse direction
            }
            
            requestAnimationFrame(animate);
        }
        
        // Start animation
        animate();
        
        // Local Storage (part of Web Storage API)
        function saveToLocalStorage() {
            const data = {
                name: 'John Doe',
                age: 30,
                preferences: { theme: 'dark', language: 'en' }
            };
            
            localStorage.setItem('userData', JSON.stringify(data));
            output.innerHTML = 'Data saved to localStorage!';
        }
        
        function loadFromLocalStorage() {
            const savedData = localStorage.getItem('userData');
            if (savedData) {
                const data = JSON.parse(savedData);
                output.innerHTML = \`
                    &lt;h3&gt;Data from localStorage&lt;/h3&gt;
                    &lt;pre&gt;\${JSON.stringify(data, null, 2)}&lt;/pre&gt;
                \`;
            } else {
                output.innerHTML = 'No data found in localStorage';
            }
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "BOM and Async Practice",
                    content: `
                        <p>Practice BOM operations and asynchronous JavaScript:</p>
                        <ol>
                            <li>Create a countdown timer that shows minutes and seconds</li>
                            <li>Build a stopwatch with start, stop, and reset functionality</li>
                            <li>Create a weather app that fetches data from a public API</li>
                            <li>Build a simple game using requestAnimationFrame for smooth animation</li>
                            <li>Create a todo app that saves data to localStorage</li>
                            <li>Build a currency converter that fetches real-time exchange rates</li>
                            <li>Create a random quote generator that fetches quotes from an API</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between localStorage and sessionStorage?",
                    answer: "localStorage persists data even when the browser is closed and reopened, with no expiration time. sessionStorage persists data only for the duration of the page session (until the browser tab is closed). Both are specific to the origin (protocol + domain + port), but localStorage is shared across tabs/windows from the same origin, while sessionStorage is isolated per tab."
                },
                {
                    question: "How do Promises improve over callback functions?",
                    answer: "Promises provide better error handling through .catch() method, avoid callback hell (pyramid of doom), allow chaining multiple async operations with .then(), and provide methods for working with multiple promises (Promise.all, Promise.race). They make async code more readable and maintainable compared to nested callbacks."
                }
            ]
        }
    ]
};

// DOM Elements
const topicsList = document.getElementById('topics-list');
const navButtons = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');

// Content display elements
const contentTitles = {
    content: document.getElementById('current-topic-title'),
    examples: document.getElementById('current-example-title'),
    practice: document.getElementById('current-practice-title'),
    questions: document.getElementById('current-question-title')
};

const contentContainers = {
    content: document.getElementById('topic-content'),
    examples: document.getElementById('topic-examples'),
    practice: document.getElementById('topic-practice'),
    questions: document.getElementById('topic-questions')
};

// State
let currentTopicId = null;
let currentSection = 'content';

// Initialize the application
function init() {
    renderTopicsList();
    setupEventListeners();
    
    // Set the first topic as active by default
    if (courseData.topics.length > 0) {
        setActiveTopic(courseData.topics[0].id);
    }
}

// Render the list of topics in the sidebar
function renderTopicsList() {
    topicsList.innerHTML = '';
    
    courseData.topics.forEach(topic => {
        const listItem = document.createElement('li');
        listItem.className = 'topic-item';
        listItem.textContent = topic.title;
        listItem.dataset.topicId = topic.id;
        
        listItem.addEventListener('click', () => {
            setActiveTopic(topic.id);
        });
        
        topicsList.appendChild(listItem);
    });
}

// Set up event listeners for navigation
function setupEventListeners() {
    // Navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const section = button.dataset.section;
            setActiveSection(section);
        });
    });
}

// Set the active topic and update content
function setActiveTopic(topicId) {
    currentTopicId = topicId;
    
    // Update active topic in sidebar
    document.querySelectorAll('.topic-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.topicId === topicId) {
            item.classList.add('active');
        }
    });
    
    // Update content based on current section
    updateContent();
}

// Set the active section and update content
function setActiveSection(section) {
    currentSection = section;
    
    // Update active navigation button
    navButtons.forEach(button => {
        button.classList.remove('active');
        if (button.dataset.section === section) {
            button.classList.add('active');
        }
    });
    
    // Show/hide content sections
    contentSections.forEach(sectionEl => {
        sectionEl.classList.remove('active');
    });
    document.getElementById(`${section}-section`).classList.add('active');
    
    // Update content if a topic is selected
    if (currentTopicId) {
        updateContent();
    }
}

// Update the displayed content based on current topic and section
function updateContent() {
    const topic = courseData.topics.find(t => t.id === currentTopicId);
    if (!topic) return;
    
    // Update section titles
    contentTitles.content.textContent = topic.title;
    contentTitles.examples.textContent = `${topic.title} - Examples`;
    contentTitles.practice.textContent = `${topic.title} - Practice`;
    contentTitles.questions.textContent = `${topic.title} - Questions`;
    
    // Update content based on current section
    switch (currentSection) {
        case 'content':
            renderContent(topic);
            break;
        case 'examples':
            renderExamples(topic);
            break;
        case 'practice':
            renderPractice(topic);
            break;
        case 'questions':
            renderQuestions(topic);
            break;
    }
}

// Render the main content for a topic
function renderContent(topic) {
    contentContainers.content.innerHTML = `
        <div class="content-box">
            ${topic.content}
        </div>
    `;
}

// Render examples for a topic
function renderExamples(topic) {
    if (!topic.examples || topic.examples.length === 0) {
        contentContainers.examples.innerHTML = `
            <div class="example-box">
                <p>No examples available for this topic yet.</p>
            </div>
        `;
        return;
    }
    
    let examplesHTML = '';
    topic.examples.forEach(example => {
        examplesHTML += `
            <div class="example-box">
                <h3>${example.title}</h3>
                ${example.content}
            </div>
        `;
    });
    
    contentContainers.examples.innerHTML = examplesHTML;
}

// Render practice exercises for a topic
function renderPractice(topic) {
    if (!topic.practices || topic.practices.length === 0) {
        contentContainers.practice.innerHTML = `
            <div class="practice-box">
                <p>No practice exercises available for this topic yet.</p>
            </div>
        `;
        return;
    }
    
    let practiceHTML = '';
    topic.practices.forEach(practice => {
        practiceHTML += `
            <div class="practice-box">
                <h3>${practice.title}</h3>
                ${practice.content}
            </div>
        `;
    });
    
    contentContainers.practice.innerHTML = practiceHTML;
}

// Render questions for a topic
function renderQuestions(topic) {
    if (!topic.questions || topic.questions.length === 0) {
        contentContainers.questions.innerHTML = `
            <div class="question-box">
                <p>No questions available for this topic yet.</p>
            </div>
        `;
        return;
    }
    
    let questionsHTML = '';
    topic.questions.forEach((q, index) => {
        questionsHTML += `
            <div class="question-box">
                <h3>Question ${index + 1}</h3>
                <p><strong>Q:</strong> ${q.question}</p>
                <p><strong>A:</strong> ${q.answer}</p>
            </div>
        `;
    });
    
    contentContainers.questions.innerHTML = questionsHTML;
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);