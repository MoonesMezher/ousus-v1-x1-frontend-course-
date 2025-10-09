// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete CSS Mastery",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "google-fonts",
            title: "Google Fonts Integration",
            content: `
                <h3>What are Google Fonts?</h3>
                <p>Google Fonts is a free library of web fonts that you can use in your projects.</p>
                
                <h3>How to Use Google Fonts:</h3>
                <ul>
                    <li><strong>Method 1: Link in HTML</strong>: Add link tag in head</li>
                    <li><strong>Method 2: @import in CSS</strong>: Import in CSS file</li>
                    <li><strong>Method 3: Download & Self-host</strong>: For performance</li>
                </ul>
                
                <h3>Best Practices:</h3>
                <ul>
                    <li>Limit number of font families (2-3 max)</li>
                    <li>Choose font weights strategically</li>
                    <li>Use font-display: swap for performance</li>
                    <li>Consider self-hosting for production</li>
                    <li>Use variable fonts when possible</li>
                </ul>
                
                <h3>Performance Considerations:</h3>
                <ul>
                    <li>Preload critical fonts</li>
                    <li>Use font-display property</li>
                    <li>Limit character sets</li>
                    <li>Consider system fonts as fallback</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>ما هي خطوط جوجل؟</h3>
                    <p>خطوط جوجل هي مكتبة مجانية لخطوط الويب التي يمكنك استخدامها في مشاريعك.</p>
                    
                    <h3>كيفية استخدام خطوط جوجل:</h3>
                    <ul>
                        <li><strong>الطريقة 1: الرابط في HTML</strong>: أضف وسم الرابط في الرأس</li>
                        <li><strong>الطريقة 2: @import في CSS</strong>: استيراد في ملف CSS</li>
                        <li><strong>الطريقة 3: التنزيل والاستضافة الذاتية</strong>: للأداء</li>
                    </ul>
                    
                    <h3>أفضل الممارسات:</h3>
                    <ul>
                        <li>حدد عدد عائلات الخطوط (2-3 كحد أقصى)</li>
                        <li>اختر أوزان الخطوط بشكل استراتيجي</li>
                        <li>استخدم font-display: swap للأداء</li>
                        <li>فكر في الاستضافة الذاتية للإنتاج</li>
                        <li>استخدم الخطوط المتغيرة عندما يكون ذلك ممكنًا</li>
                    </ul>
                    
                    <h3>اعتبارات الأداء:</h3>
                    <ul>
                        <li>تمهيد الخطوط الحرجة مسبقًا</li>
                        <li>استخدم خاصية font-display</li>
                        <li>حدد مجموعات الأحرف</li>
                        <li>فكر في خطوط النظام كاحتياطي</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Google Fonts Implementation",
                    content: `
                        <pre class="code-block">
&lt;!-- Method 1: HTML Link --&gt;
&lt;head&gt;
    &lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
    &lt;link rel="preconnect" href="https://fonts.gstatic.com" crossorigin&gt;
    &lt;link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"&gt;
&lt;/head&gt;

&lt;!-- Method 2: CSS Import --&gt;
&lt;style&gt;
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
&lt;/style&gt;

/* CSS Usage */
body {
    font-family: 'Roboto', sans-serif;
}

.heading {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
}

/* Performance optimization */
.optimized-font {
    font-family: 'Roboto', sans-serif;
    font-display: swap;
}

/* Variable fonts */
.variable-font {
    font-family: 'Roboto Flex', sans-serif;
    font-variation-settings: 'wght' 400, 'wdth' 100;
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Google Fonts Practice",
                    content: `
                        <p>Practice integrating Google Fonts:</p>
                        <ol>
                            <li>Add 2-3 Google Fonts to a project using different methods</li>
                            <li>Create a typographic scale using Google Fonts weights</li>
                            <li>Implement font-display strategies for better performance</li>
                            <li>Create a font pairing system with Google Fonts</li>
                            <li>Experiment with variable fonts from Google Fonts</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between linking in HTML vs @import in CSS?",
                    answer: "Linking in HTML allows browsers to discover fonts earlier and can be preloaded. @import in CSS might cause render-blocking and is discovered later. For performance, HTML link with preconnect is generally better. Also, @import can't be preloaded easily."
                },
                {
                    question: "Why use font-display: swap?",
                    answer: "font-display: swap tells the browser to use a fallback font immediately while the web font loads, then swap it in when ready. This prevents FOIT (Flash of Invisible Text) and ensures content remains readable, improving perceived performance and user experience."
                }
            ]
        },
        {
            id: "icons",
            title: "Working with Icons",
            content: `
                <h3>Icon Implementation Methods:</h3>
                <ul>
                    <li><strong>Icon Fonts</strong>: Font Awesome, Material Icons</li>
                    <li><strong>SVG Icons</strong>: Inline, sprite sheets, or external files</li>
                    <li><strong>CSS Icons</strong>: Created with pure CSS</li>
                    <li><strong>Image Sprites</strong>: PNG/SVG sprite sheets</li>
                </ul>
                
                <h3>Icon Fonts (Font Awesome):</h3>
                <ul>
                    <li>Easy to use and style with CSS</li>
                    <li>Good browser support</li>
                    <li>Can affect performance with many icons</li>
                    <li>Limited customization</li>
                </ul>
                
                <h3>SVG Icons (Recommended):</h3>
                <ul>
                    <li>Scalable without quality loss</li>
                    <li>Small file sizes</li>
                    <li>Full CSS control (colors, animations)</li>
                    <li>Better accessibility</li>
                    <li>Can be inline or external</li>
                </ul>
                
                <h3>Best Practices:</h3>
                <ul>
                    <li>Use semantic icon names</li>
                    <li>Provide accessible labels</li>
                    <li>Optimize SVG files</li>
                    <li>Use consistent sizing</li>
                    <li>Consider loading strategies</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>طرق تنفيذ الأيقونات:</h3>
                    <ul>
                        <li><strong>خطوط الأيقونات</strong>: Font Awesome, Material Icons</li>
                        <li><strong>أيقونات SVG</strong>: مضمنة، أوراق التجمع، أو ملفات خارجية</li>
                        <li><strong>أيقونات CSS</strong>: تم إنشاؤها بـ CSS بحت</li>
                        <li><strong>الصور المجمعة</strong>: أوراق تجمع PNG/SVG</li>
                    </ul>
                    
                    <h3>خطوط الأيقونات (Font Awesome):</h3>
                    <ul>
                        <li>سهل الاستخدام والتنسيق بـ CSS</li>
                        <li>دعم جيد للمتصفح</li>
                        <li>يمكن أن يؤثر على الأداء مع العديد من الأيقونات</li>
                        <li>تخصيص محدود</li>
                    </ul>
                    
                    <h3>أيقونات SVG (موصى بها):</h3>
                    <ul>
                        <li>قابلة للتطوير دون فقدان الجودة</li>
                        <li>أحجام ملفات صغيرة</li>
                        <li>تحكم كامل في CSS (الألوان، الرسوم المتحركة)</li>
                        <li>إمكانية وصول أفضل</li>
                        <li>يمكن أن تكون مضمنة أو خارجية</li>
                    </ul>
                    
                    <h3>أفضل الممارسات:</h3>
                    <ul>
                        <li>استخدم أسماء أيقونات دلالية</li>
                        <li>وفر تسميات يمكن الوصول إليها</li>
                        <li>حسن ملفات SVG</li>
                        <li>استخدم أحجام متسقة</li>
                        <li>فكر في استراتيجيات التحميل</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Icon Implementation Examples",
                    content: `
                        <pre class="code-block">
/* Font Awesome Icons */
&lt;i class="fas fa-user"&gt;&lt;/i&gt;
&lt;i class="fas fa-search"&gt;&lt;/i&gt;
&lt;i class="fab fa-twitter"&gt;&lt;/i&gt;

.fa-user {
    font-size: 24px;
    color: #333;
}

.fa-search:hover {
    color: #007bff;
}

/* SVG Inline Icons */
&lt;button aria-label="Search"&gt;
    &lt;svg class="icon search-icon" viewBox="0 0 24 24"&gt;
        &lt;path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/&gt;
    &lt;/svg&gt;
&lt;/button&gt;

.icon {
    width: 24px;
    height: 24px;
    fill: currentColor;
}

.search-icon {
    color: #666;
}

.search-icon:hover {
    color: #007bff;
}

/* SVG Sprite */
&lt;svg style="display: none;"&gt;
    &lt;symbol id="user-icon" viewBox="0 0 24 24"&gt;
        &lt;path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/&gt;
    &lt;/symbol&gt;
&lt;/svg&gt;

&lt;svg class="icon"&gt;&lt;use xlink:href="#user-icon"&gt;&lt;/use&gt;&lt;/svg&gt;

/* CSS Only Icons */
.menu-icon {
    width: 24px;
    height: 2px;
    background: #333;
    position: relative;
}

.menu-icon::before,
.menu-icon::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #333;
    left: 0;
}

.menu-icon::before {
    top: -6px;
}

.menu-icon::after {
    top: 6px;
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Icons Practice",
                    content: `
                        <p>Practice working with different icon methods:</p>
                        <ol>
                            <li>Implement Font Awesome icons in a navigation bar</li>
                            <li>Create custom SVG icons and style them with CSS</li>
                            <li>Build an SVG sprite sheet for multiple icons</li>
                            <li>Create simple icons using pure CSS</li>
                            <li>Implement accessible icon buttons with proper labels</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why are SVG icons generally better than icon fonts?",
                    answer: "SVG icons are vector-based so they scale perfectly, have smaller file sizes when optimized, can be styled with CSS (colors, strokes, filters), are more accessible (can add titles/descriptions), don't require external resources, and avoid issues with font loading and rendering inconsistencies."
                },
                {
                    question: "How do you make icons accessible?",
                    answer: "Use semantic HTML, provide text alternatives with aria-label or visually hidden text, ensure proper color contrast, maintain sufficient touch targets (min 44px), use focus indicators for interactive icons, and test with screen readers. For decorative icons, use aria-hidden='true' to hide from assistive tech."
                }
            ]
        },
        {
    id: "box-model",
    title: "CSS Box Model - Complete Layout Foundation",
    content: `
        <h3>What is the Box Model?</h3>
        <p>Every element in CSS is represented as a rectangular box with the following layers:</p>
        
        <h3>Box Model Components:</h3>
        <ul>
            <li><strong>Content</strong>: The actual content (text, images, etc.)</li>
            <li><strong>Padding</strong>: Space between content and border</li>
            <li><strong>Border</strong>: Line around the padding (and content)</li>
            <li><strong>Margin</strong>: Space between border and other elements</li>
        </ul>
        
        <h3>Box-Sizing Property:</h3>
        <ul>
            <li><strong>content-box</strong>: Default - width/height only apply to content</li>
            <li><strong>border-box</strong>: Width/height include content, padding and border</li>
        </ul>
        
        <h3>Visual Representation:</h3>
        <div style="text-align: center; margin: 20px 0;">
            <div style="display: inline-block; text-align: left;">
                <div style="background: #e74c3c; padding: 10px; margin: 20px; border: 2px solid #333;">
                    <div style="background: #3498db; padding: 15px; margin: 5px; border: 2px dashed #fff;">
                        <div style="background: #2ecc71; padding: 20px; color: white; text-align: center;">
                            Content
                        </div>
                        <div style="text-align: center; color: white; margin-top: 5px;">Padding</div>
                    </div>
                    <div style="text-align: center; color: white; margin-top: 5px;">Border</div>
                </div>
                <div style="text-align: center; margin-top: 5px;">Margin</div>
            </div>
        </div>
        
        <h3>Margin Properties:</h3>
        <ul>
            <li><strong>margin-top</strong>: Top outer space</li>
            <li><strong>margin-right</strong>: Right outer space</li>
            <li><strong>margin-bottom</strong>: Bottom outer space</li>
            <li><strong>margin-left</strong>: Left outer space</li>
            <li><strong>margin</strong>: Shorthand for all sides</li>
        </ul>
        
        <h3>Padding Properties:</h3>
        <ul>
            <li><strong>padding-top</strong>: Top inner space</li>
            <li><strong>padding-right</strong>: Right inner space</li>
            <li><strong>padding-bottom</strong>: Bottom inner space</li>
            <li><strong>padding-left</strong>: Left inner space</li>
            <li><strong>padding</strong>: Shorthand for all sides</li>
        </ul>
        
        <h3>Common Patterns:</h3>
        <ul>
            <li>Margin collapsing between adjacent elements</li>
            <li>Negative margins for overlapping effects</li>
            <li>Auto margins for centering</li>
            <li>Percentage-based padding for responsive design</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>ما هو نموذج الصندوق؟</h3>
            <p>يتم تمثيل كل عنصر في CSS كصندوق مستطيل مع الطبقات التالية:</p>
            
            <h3>مكونات نموذج الصندوق:</h3>
            <ul>
                <li><strong>المحتوى</strong>: المحتوى الفعلي (نص، صور، إلخ)</li>
                <li><strong>الحشو</strong>: المسافة بين المحتوى والحدود</li>
                <li><strong>الحدود</strong>: الخط حول الحشو (والمحتوى)</li>
                <li><strong>الهامش</strong>: المسافة بين الحدود والعناصر الأخرى</li>
            </ul>
            
            <h3>خاصية Box-Sizing:</h3>
            <ul>
                <li><strong>content-box</strong>: افتراضي - العرض/الارتفاع ينطبق فقط على المحتوى</li>
                <li><strong>border-box</strong>: العرض/الارتفاع يشمل المحتوى، الحشو والحدود</li>
            </ul>
            
            <h3>التمثيل المرئي:</h3>
            
            <h3>خصائص الهامش:</h3>
            <ul>
                <li><strong>margin-top</strong>: المسافة الخارجية العلوية</li>
                <li><strong>margin-right</strong>: المسافة الخارجية اليمنى</li>
                <li><strong>margin-bottom</strong>: المسافة الخارجية السفلية</li>
                <li><strong>margin-left</strong>: المسافة الخارجية اليسرى</li>
                <li><strong>margin</strong>: اختصار لجميع الجوانب</li>
            </ul>
            
            <h3>خصائص الحشو:</h3>
            <ul>
                <li><strong>padding-top</strong>: المسافة الداخلية العلوية</li>
                <li><strong>padding-right</strong>: المسافة الداخلية اليمنى</li>
                <li><strong>padding-bottom</strong>: المسافة الداخلية السفلية</li>
                <li><strong>padding-left</strong>: المسافة الداخلية اليسرى</li>
                <li><strong>padding</strong>: اختصار لجميع الجوانب</li>
            </ul>
            
            <h3>الأنماط الشائعة:</h3>
            <ul>
                <li>انهيار الهامش بين العناصر المجاورة</li>
                <li>هوامش سلبية لتأثيرات التداخل</li>
                <li>هوامش تلقائية للمركز</li>
                <li>حشو قائم على النسبة المئوية للتصميم المتجاوب</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Box Model Examples",
            content: `
                <pre class="code-block">
/* Content-box (default) */
.box-content {
    width: 300px;
    padding: 20px;
    border: 5px solid #333;
    margin: 10px;
    background: #f0f0f0;
}
/* Total width: 300 + 20*2 + 5*2 + 10*2 = 370px */

/* Border-box (recommended) */
.box-border {
    width: 300px;
    padding: 20px;
    border: 5px solid #333;
    margin: 10px;
    background: #e0e0e0;
    box-sizing: border-box;
}
/* Total width: 300px (includes padding and border) */

/* Universal border-box reset */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Margin shorthand examples */
.margin-examples {
    margin: 10px;                    /* All sides: 10px */
    margin: 10px 20px;               /* Top/Bottom: 10px, Left/Right: 20px */
    margin: 10px 20px 15px;          /* Top:10px, Left/Right:20px, Bottom:15px */
    margin: 10px 20px 15px 5px;      /* Top:10px, Right:20px, Bottom:15px, Left:5px */
}

/* Padding shorthand examples */
.padding-examples {
    padding: 15px;                   /* All sides: 15px */
    padding: 15px 25px;              /* Top/Bottom: 15px, Left/Right: 25px */
    padding: 15px 25px 10px;         /* Top:15px, Left/Right:25px, Bottom:10px */
    padding: 15px 25px 10px 5px;     /* Top:15px, Right:25px, Bottom:10px, Left:5px */
}

/* Real-world component examples */
.card {
    width: 300px;
    padding: 20px;
    margin: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.button {
    padding: 12px 24px;
    margin: 5px;
    border: 2px solid #007bff;
    border-radius: 4px;
    background: #007bff;
    color: white;
    cursor: pointer;
}

.nav-item {
    padding: 10px 15px;
    margin: 0 5px;
    border-bottom: 2px solid transparent;
}

.nav-item:hover {
    border-bottom-color: #007bff;
}

/* Margin collapsing example */
.collapsing-parent {
    margin-bottom: 30px;
    background: #f8f9fa;
    padding: 20px;
}

.collapsing-child {
    margin-top: 20px;
    background: #e9ecef;
    padding: 15px;
}
/* The space between these elements will be 30px (not 50px) due to margin collapsing */

/* Negative margins for layout */
.overlap-container {
    position: relative;
}

.overlap-box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid #333;
}

.overlap-box-1 {
    background: #ff6b6b;
    margin-bottom: -30px;
}

.overlap-box-2 {
    background: #4ecdc4;
    margin-left: 50px;
}

/* Auto margins for centering */
.center-box {
    width: 400px;
    margin: 0 auto; /* Centers horizontally */
    padding: 30px;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
}

/* Responsive spacing with percentages */
.responsive-container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2%; /* Percentage-based padding scales with container */
}

.responsive-card {
    padding: 5%;
    margin: 2%;
    border: 1px solid #ccc;
}

/* Inline-block elements with box model */
.inline-box {
    display: inline-block;
    width: 200px;
    padding: 15px;
    margin: 10px;
    border: 2px solid #333;
    vertical-align: top; /* Important for inline-block alignment */
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Box Model Practice",
            content: `
                <p>Practice with the CSS Box Model:</p>
                <ol>
                    <li>Create a card component with proper padding and margins</li>
                    <li>Build a navigation bar using inline-block with consistent spacing</li>
                    <li>Experiment with margin collapsing between adjacent elements</li>
                    <li>Use negative margins to create overlapping design elements</li>
                    <li>Create a responsive layout using percentage-based padding and max-width</li>
                    <li>Compare content-box vs border-box on identical elements</li>
                    <li>Build a button system with consistent padding across different sizes</li>
                    <li>Create a grid of cards with equal spacing using margin and padding</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between margin and padding?",
            answer: "Margin is the space outside an element's border, creating distance between elements. Padding is the space inside an element's border, between the border and the content. Margin can be negative and collapses with adjacent margins, while padding cannot be negative and doesn't collapse."
        },
        {
            question: "Why is border-box generally preferred over content-box?",
            answer: "border-box makes layout calculations more predictable because the width and height properties include content, padding, and border. With content-box, you have to manually calculate total element size (width + padding + border). border-box simplifies responsive design and prevents unexpected layout shifts when adding padding or borders."
        },
        {
            question: "What is margin collapsing and when does it occur?",
            answer: "Margin collapsing happens when the vertical margins of adjacent block-level elements combine into a single margin. The larger margin wins. It occurs between: adjacent siblings, parent and first/last child (when no border, padding, or clearance separates them), and empty blocks. Horizontal margins never collapse."
        },
    ]
},
        {
            id: "backgrounds-borders",
            title: "Backgrounds, Borders & Shadows",
            content: `
                <h3>Background Properties:</h3>
                <ul>
                    <li><strong>background-color</strong>: Solid color background</li>
                    <li><strong>background-image</strong>: Image or gradient background</li>
                    <li><strong>background-position</strong>: Position of background image</li>
                    <li><strong>background-size</strong>: cover, contain, or specific dimensions</li>
                    <li><strong>background-repeat</strong>: repeat, no-repeat, repeat-x/y</li>
                    <li><strong>background-attachment</strong>: scroll, fixed, local</li>
                    <li><strong>background-clip</strong>: Border-box, padding-box, content-box</li>
                </ul>
                
                <h3>Border Properties:</h3>
                <ul>
                    <li><strong>border-width</strong>: Thickness of border</li>
                    <li><strong>border-style</strong>: solid, dashed, dotted, double, etc.</li>
                    <li><strong>border-color</strong>: Color of border</li>
                    <li><strong>border-radius</strong>: Rounded corners</li>
                    <li><strong>border-image</strong>: Image-based borders</li>
                </ul>
                
                <h3>Outline vs Border:</h3>
                <ul>
                    <li>Outline doesn't take space (drawn outside border)</li>
                    <li>Outline doesn't affect layout</li>
                    <li>Commonly used for focus states</li>
                </ul>
                
                <h3>Box Shadow for Depth:</h3>
                <p>box-shadow: offset-x offset-y blur-radius spread-radius color;</p>
                <ul>
                    <li>Creates realistic shadows and depth</li>
                    <li>Can have multiple shadows</li>
                    <li>Use inset for inner shadows</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>خصائص الخلفية:</h3>
                    <ul>
                        <li><strong>background-color</strong>: خلفية بلون ثابت</li>
                        <li><strong>background-image</strong>: خلفية صورة أو تدرج</li>
                        <li><strong>background-position</strong>: موضع صورة الخلفية</li>
                        <li><strong>background-size</strong>: cover, contain, أو أبعاد محددة</li>
                        <li><strong>background-repeat</strong>: repeat, no-repeat, repeat-x/y</li>
                        <li><strong>background-attachment</strong>: scroll, fixed, local</li>
                        <li><strong>background-clip</strong>: Border-box, padding-box, content-box</li>
                    </ul>
                    
                    <h3>خصائص الحدود:</h3>
                    <ul>
                        <li><strong>border-width</strong>: سمك الحدود</li>
                        <li><strong>border-style</strong>: solid, dashed, dotted, double, إلخ</li>
                        <li><strong>border-color</strong>: لون الحدود</li>
                        <li><strong>border-radius</strong>: زوايا مستديرة</li>
                        <li><strong>border-image</strong>: حدود قائمة على الصور</li>
                    </ul>
                    
                    <h3>الحدود الخارجية مقابل الحدود:</h3>
                    <ul>
                        <li>الحدود الخارجية لا تأخذ مساحة (ترسم خارج الحدود)</li>
                        <li>الحدود الخارجية لا تؤثر على التخطيط</li>
                        <li>تستخدم عادة لحالات التركيز</li>
                    </ul>
                    
                    <h3>ظل الصندوق للعمق:</h3>
                    <p>box-shadow: offset-x offset-y blur-radius spread-radius color;</p>
                    <ul>
                        <li>ينشئ ظلال واقعية وعمق</li>
                        <li>يمكن أن يحتوي على ظلال متعددة</li>
                        <li>استخدم inset للظلال الداخلية</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Background Examples",
                    content: `
                        <pre class="code-block">
/* Solid color background */
.hero {
    background-color: #f0f0f0;
}

/* Image background */
.banner {
    background-image: url('hero.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Gradient background */
.gradient {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

/* Multiple backgrounds */
.multi-bg {
    background: 
        url('pattern.png') repeat,
        linear-gradient(to bottom, #fff, #000);
}

/* Background shorthand */
.quick-bg {
    background: #333 url('bg.jpg') center/cover no-repeat fixed;
}
                        </pre>
                    `
                },
                {
                    title: "Borders & Shadows Examples",
                    content: `
                        <pre class="code-block">
/* Basic border */
.box {
    border: 2px solid #333;
    border-radius: 8px;
}

/* Different border sides */
.asymmetric {
    border-top: 1px solid red;
    border-right: 2px dashed blue;
    border-bottom: 3px dotted green;
    border-left: 4px double orange;
}

/* Outline for focus */
button:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
}

/* Box shadows */
.shadow-1 {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.shadow-2 {
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.shadow-3 {
    box-shadow: 0 8px 16px rgba(0,0,0,0.3);
}

/* Inner shadow */
.inset-shadow {
    box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);
}

/* Multiple shadows */
.complex-shadow {
    box-shadow: 
        0 2px 4px rgba(0,0,0,0.1),
        0 8px 16px rgba(0,0,0,0.1);
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Backgrounds & Borders Practice",
                    content: `
                        <p>Practice with backgrounds, borders and shadows:</p>
                        <ol>
                            <li>Create a hero section with a background image that covers the entire area</li>
                            <li>Design buttons with different border styles and hover effects</li>
                            <li>Create cards with subtle shadows for depth</li>
                            <li>Experiment with gradient backgrounds and multiple backgrounds</li>
                            <li>Build a pricing table with different border-radius values</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between background-size: cover and contain?",
                    answer: "cover scales the image to cover the entire container (may crop edges). contain scales the image to fit entirely within the container (may show empty space). Use cover for full-bleed backgrounds and contain when you need to see the entire image."
                },
                {
                    question: "When should you use outline instead of border?",
                    answer: "Use outline for focus indicators, temporary highlights, or when you don't want to affect layout (since outline doesn't take space). Use border for permanent visual boundaries that are part of the element's design. Outline is also better for accessibility focus states."
                }
            ]
        },
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