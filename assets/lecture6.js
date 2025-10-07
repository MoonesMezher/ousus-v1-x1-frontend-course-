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
        {
            question: "How do you center an element horizontally using the box model?",
            answer: "Use margin: 0 auto on a block-level element with a defined width. The auto value distributes available space equally on left and right sides. For flexbox or grid containers, use justify-content: center. For absolute positioning, use left: 50% with transform: translateX(-50%)."
        }
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
        {
            id: "position-layout",
            title: "Position, Z-index & Floats",
            content: `
                <h3>Position Values:</h3>
                <ul>
                    <li><strong>static</strong>: Default, normal document flow</li>
                    <li><strong>relative</strong>: Positioned relative to normal position</li>
                    <li><strong>absolute</strong>: Positioned relative to nearest positioned ancestor</li>
                    <li><strong>fixed</strong>: Positioned relative to viewport</li>
                    <li><strong>sticky</strong>: Hybrid of relative and fixed</li>
                </ul>
                
                <h3>Offset Properties:</h3>
                <ul>
                    <li><strong>top, right, bottom, left</strong>: Positioning offsets</li>
                    <li>Work with relative, absolute, fixed, sticky positions</li>
                    <li>Negative values allowed</li>
                </ul>
                
                <h3>Z-index Stacking:</h3>
                <ul>
                    <li>Controls stacking order of positioned elements</li>
                    <li>Higher values appear in front</li>
                    <li>Only works on positioned elements (non-static)</li>
                    <li>Creates stacking context</li>
                </ul>
                
                <h3>Float & Clear Properties:</h3>
                <ul>
                    <li><strong>float</strong>: left, right, none (wraps content around element)</li>
                    <li><strong>clear</strong>: left, right, both, none (prevents floating)</li>
                    <li>Originally for text wrapping around images</li>
                </ul>
                
                <h3>Modern Layout Alternatives:</h3>
                <ul>
                    <li>Avoid floats for complex layouts</li>
                    <li>Use Flexbox for 1D layouts</li>
                    <li>Use CSS Grid for 2D layouts</li>
                    <li>Floats still useful for simple text wrapping</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>قيم الموضع:</h3>
                    <ul>
                        <li><strong>static</strong>: افتراضي، تدفق المستند العادي</li>
                        <li><strong>relative</strong>: يتم وضعه بالنسبة للموضع الطبيعي</li>
                        <li><strong>absolute</strong>: يتم وضعه بالنسبة لأقرب سلف موضع</li>
                        <li><strong>fixed</strong>: يتم وضعه بالنسبة لمنطقة العرض</li>
                        <li><strong>sticky</strong>: هجين بين relative و fixed</li>
                    </ul>
                    
                    <h3>خصائص الإزاحة:</h3>
                    <ul>
                        <li><strong>top, right, bottom, left</strong>: إزاحات الوضع</li>
                        <li>تعمل مع المواضع النسبية، المطلقة، الثابتة، اللاصقة</li>
                        <li>القيم السالبة مسموحة</li>
                    </ul>
                    
                    <h3>ترتيب الطبقات Z-index:</h3>
                    <ul>
                        <li>يتحكم في ترتيب طبقات العناصر الموضوعة</li>
                        <li>القيم الأعلى تظهر في المقدمة</li>
                        <li>يعمل فقط على العناصر الموضوعة (غير static)</li>
                        <li>ينشئ سياق تراص</li>
                    </ul>
                    
                    <h3>خصائص Float و Clear:</h3>
                    <ul>
                        <li><strong>float</strong>: left, right, none (يلف المحتوى حول العنصر)</li>
                        <li><strong>clear</strong>: left, right, both, none (يمنع الطفو)</li>
                        <li>في الأصل لتفاف النص حول الصور</li>
                    </ul>
                    
                    <h3>بدائل التخطيط الحديثة:</h3>
                    <ul>
                        <li>تجنب الطفو للتخطيطات المعقدة</li>
                        <li>استخدم Flexbox للتخطيطات أحادية البعد</li>
                        <li>استخدم CSS Grid للتخطيطات ثنائية البعد</li>
                        <li>الطفو لا يزال مفيداً للتفاف النص البسيط</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Position Examples",
                    content: `
                        <pre class="code-block">
/* Relative positioning */
.relative-box {
    position: relative;
    top: 10px;
    left: 20px;
}

/* Absolute positioning */
.parent {
    position: relative; /* Creates positioning context */
}
.absolute-child {
    position: absolute;
    top: 0;
    right: 0;
}

/* Fixed header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
}

/* Sticky navigation */
.sticky-nav {
    position: sticky;
    top: 0;
    background: white;
    z-index: 100;
}

/* Z-index stacking */
.back {
    position: absolute;
    z-index: 1;
}
.middle {
    position: absolute;
    z-index: 2;
}
.front {
    position: absolute;
    z-index: 3;
}
                        </pre>
                    `
                },
                {
                    title: "Float & Clear Examples",
                    content: `
                        <pre class="code-block">
/* Image float */
img {
    float: left;
    margin: 0 15px 15px 0;
}

/* Clear floats */
.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

/* Modern alternative to floats */
.container {
    display: flex;
    gap: 20px;
}

/* Grid alternative */
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

/* Text wrapping with shape-outside */
.circle {
    float: left;
    shape-outside: circle(50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Positioning Practice",
                    content: `
                        <p>Practice with positioning and layout:</p>
                        <ol>
                            <li>Create a fixed navigation bar that stays at the top</li>
                            <li>Build a modal dialog using absolute positioning</li>
                            <li>Create a sticky sidebar that scrolls then sticks</li>
                            <li>Experiment with z-index to create overlapping elements</li>
                            <li>Create a simple layout using floats and clear them properly</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should you use position: sticky vs fixed?",
                    answer: "Use sticky when you want an element to scroll normally until it reaches a certain point, then stick. Use fixed when you want an element to always stay in the same position relative to the viewport. Sticky requires a threshold (top, bottom, etc.) while fixed doesn't."
                },
                {
                    question: "Why avoid floats for modern layouts?",
                    answer: "Floats weren't designed for complex layouts, require clearfix hacks, can cause collapsing containers, have poor responsiveness, and are harder to maintain. Flexbox and Grid provide more predictable, flexible, and maintainable layout systems with better browser support for modern requirements."
                }
            ]
        },
        {
            id: "flexbox",
            title: "CSS Flexbox Layout",
            content: `
                <h3>Flexbox Overview:</h3>
                <p>One-dimensional layout model for arranging items in rows or columns.</p>
                
                <h3>Flex Container Properties:</h3>
                <ul>
                    <li><strong>display: flex</strong>: Creates flex container</li>
                    <li><strong>flex-direction</strong>: row, row-reverse, column, column-reverse</li>
                    <li><strong>justify-content</strong>: flex-start, center, flex-end, space-between, space-around, space-evenly</li>
                    <li><strong>align-items</strong>: stretch, flex-start, center, flex-end, baseline</li>
                    <li><strong>flex-wrap</strong>: nowrap, wrap, wrap-reverse</li>
                    <li><strong>gap</strong>: Space between flex items</li>
                </ul>
                
                <h3>Main Axis vs Cross Axis:</h3>
                <ul>
                    <li><strong>Main Axis</strong>: Defined by flex-direction</li>
                    <li><strong>Cross Axis</strong>: Perpendicular to main axis</li>
                    <li>justify-content works on main axis</li>
                    <li>align-items works on cross axis</li>
                </ul>
                
                <h3>Flex Item Properties:</h3>
                <ul>
                    <li><strong>flex-grow</strong>: Ability to grow relative to others</li>
                    <li><strong>flex-shrink</strong>: Ability to shrink relative to others</li>
                    <li><strong>flex-basis</strong>: Initial size before growing/shrinking</li>
                    <li><strong>align-self</strong>: Override align-items for individual item</li>
                    <li><strong>order</strong>: Visual reordering of items</li>
                </ul>
                
                <h3>Common Use Cases:</h3>
                <ul>
                    <li>Navigation bars</li>
                    <li>Card layouts</li>
                    <li>Centering elements</li>
                    <li>Responsive grids</li>
                    <li>Form layouts</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>نظرة عامة على Flexbox:</h3>
                    <p>نموذج تخطيط أحادي البعد لترتيب العناصر في صفوف أو أعمدة.</p>
                    
                    <h3>خصائص حاوية Flex:</h3>
                    <ul>
                        <li><strong>display: flex</strong>: ينشئ حاوية مرنة</li>
                        <li><strong>flex-direction</strong>: row, row-reverse, column, column-reverse</li>
                        <li><strong>justify-content</strong>: flex-start, center, flex-end, space-between, space-around, space-evenly</li>
                        <li><strong>align-items</strong>: stretch, flex-start, center, flex-end, baseline</li>
                        <li><strong>flex-wrap</strong>: nowrap, wrap, wrap-reverse</li>
                        <li><strong>gap</strong>: المسافة بين العناصر المرنة</li>
                    </ul>
                    
                    <h3>المحور الرئيسي مقابل المحور العرضي:</h3>
                    <ul>
                        <li><strong>المحور الرئيسي</strong>: يتم تعريفه بواسطة flex-direction</li>
                        <li><strong>المحور العرضي</strong>: عمودي على المحور الرئيسي</li>
                        <li>justify-content يعمل على المحور الرئيسي</li>
                        <li>align-items يعمل على المحور العرضي</li>
                    </ul>
                    
                    <h3>خصائص العنصر المرن:</h3>
                    <ul>
                        <li><strong>flex-grow</strong>: القدرة على النمو بالنسبة للآخرين</li>
                        <li><strong>flex-shrink</strong>: القدرة على الانكماش بالنسبة للآخرين</li>
                        <li><strong>flex-basis</strong>: الحجم الأولي قبل النمو/الانكماش</li>
                        <li><strong>align-self</strong>: تجاوز align-items لعنصر فردي</li>
                        <li><strong>order</strong>: إعادة الترتيب البصري للعناصر</li>
                    </ul>
                    
                    <h3>حالات الاستخدام الشائعة:</h3>
                    <ul>
                        <li>أشرطة التنقل</li>
                        <li>تخطيطات البطاقات</li>
                        <li>عناصر المركز</li>
                        <li>شبكات متجاوبة</li>
                        <li>تخطيطات النماذج</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Flex Container Examples",
                    content: `
                        <pre class="code-block">
/* Basic flex container */
.container {
    display: flex;
    gap: 10px;
}

/* Row layout */
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

/* Column layout */
.column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
}

/* Centering with flexbox */
.center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Wrapping items */
.wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

/* Responsive navigation */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
                        </pre>
                    `
                },
                {
                    title: "Flex Item Examples",
                    content: `
                        <pre class="code-block">
/* Flex item sizing */
.item-1 {
    flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
}

.item-2 {
    flex: 2 1 200px; /* grow, shrink, basis */
}

/* Individual item alignment */
.special-item {
    align-self: flex-start;
}

/* Reordering items */
.first {
    order: 1;
}
.second {
    order: 2;
}
.third {
    order: 3;
}

/* Flexible navigation items */
.nav-item {
    flex: 1;
    text-align: center;
}

/* Card grid with flexbox */
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.card {
    flex: 1 1 300px; /* Grow, shrink, basis */
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Flexbox Practice",
                    content: `
                        <p>Practice with Flexbox layouts:</p>
                        <ol>
                            <li>Create a responsive navigation bar that wraps on mobile</li>
                            <li>Build a card grid that adapts to different screen sizes</li>
                            <li>Center elements both horizontally and vertically</li>
                            <li>Create a holy grail layout using flexbox</li>
                            <li>Experiment with different flex-grow and flex-shrink values</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between justify-content and align-items?",
                    answer: "justify-content aligns items along the main axis (defined by flex-direction). align-items aligns items along the cross axis. In a row layout, justify-content controls horizontal alignment, while align-items controls vertical alignment."
                },
                {
                    question: "When should you use flex: 1 vs width: 100%?",
                    answer: "flex: 1 makes the item grow to fill available space, while width: 100% sets a fixed width. flex: 1 is more flexible in responsive layouts and works better with sibling elements. Use width: 100% when you need exact control, and flex: 1 when you want dynamic sizing."
                }
            ]
        },
        {
            id: "css-grid",
            title: "CSS Grid Layout",
            content: `
                <h3>Grid Overview:</h3>
                <p>Two-dimensional layout system for rows and columns.</p>
                
                <h3>Grid Container Properties:</h3>
                <ul>
                    <li><strong>display: grid</strong>: Creates grid container</li>
                    <li><strong>grid-template-columns</strong>: Defines column tracks</li>
                    <li><strong>grid-template-rows</strong>: Defines row tracks</li>
                    <li><strong>grid-gap</strong>: gap, row-gap, column-gap (space between tracks)</li>
                    <li><strong>justify-items</strong>: Align items along row axis</li>
                    <li><strong>align-items</strong>: Align items along column axis</li>
                    <li><strong>grid-auto-flow</strong>: row, column, dense</li>
                </ul>
                
                <h3>Track Sizing Units:</h3>
                <ul>
                    <li><strong>fr</strong>: Fractional unit (flexible space)</li>
                    <li><strong>auto</strong>: Content-based sizing</li>
                    <li><strong>minmax()</strong>: Size range (minmax(200px, 1fr))</li>
                    <li><strong>repeat()</strong>: Repeat pattern (repeat(3, 1fr))</li>
                </ul>
                
                <h3>Grid Item Properties:</h3>
                <ul>
                    <li><strong>grid-column</strong>: start / end (grid-column: 1 / 3)</li>
                    <li><strong>grid-row</strong>: start / end (grid-row: 1 / 2)</li>
                    <li><strong>grid-area</strong>: Named area or row/column shorthand</li>
                    <li><strong>justify-self</strong>: Align individual item on row axis</li>
                    <li><strong>align-self</strong>: Align individual item on column axis</li>
                </ul>
                
                <h3>Grid Template Areas:</h3>
                <p>Visual layout system using named areas:</p>
                <pre class="code-block">
grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
                </pre>

                <br><hr><br>
                <div dir="rtl">
                    <h3>نظرة عامة على الشبكة:</h3>
                    <p>نظام تخطيط ثنائي البعد للصفوف والأعمدة.</p>
                    
                    <h3>خصائص حاوية الشبكة:</h3>
                    <ul>
                        <li><strong>display: grid</strong>: ينشئ حاوية شبكة</li>
                        <li><strong>grid-template-columns</strong>: يحدد مسارات الأعمدة</li>
                        <li><strong>grid-template-rows</strong>: يحدد مسارات الصفوف</li>
                        <li><strong>grid-gap</strong>: gap, row-gap, column-gap (المسافة بين المسارات)</li>
                        <li><strong>justify-items</strong>: محاذاة العناصر على طول محور الصف</li>
                        <li><strong>align-items</strong>: محاذاة العناصر على طول محور العمود</li>
                        <li><strong>grid-auto-flow</strong>: row, column, dense</li>
                    </ul>
                    
                    <h3>وحدات حجم المسار:</h3>
                    <ul>
                        <li><strong>fr</strong>: وحدة كسرية (مساحة مرنة)</li>
                        <li><strong>auto</strong>: تحديد الحجم بناءً على المحتوى</li>
                        <li><strong>minmax()</strong>: نطاق الحجم (minmax(200px, 1fr))</li>
                        <li><strong>repeat()</strong>: نمط التكرار (repeat(3, 1fr))</li>
                    </ul>
                    
                    <h3>خصائص عنصر الشبكة:</h3>
                    <ul>
                        <li><strong>grid-column</strong>: البداية / النهاية (grid-column: 1 / 3)</li>
                        <li><strong>grid-row</strong>: البداية / النهاية (grid-row: 1 / 2)</li>
                        <li><strong>grid-area</strong>: منطقة مسماة أو اختصار صف/عمود</li>
                        <li><strong>justify-self</strong>: محاذاة عنصر فردي على محور الصف</li>
                        <li><strong>align-self</strong>: محاذاة عنصر فردي على محور العمود</li>
                    </ul>
                    
                    <h3>مناطق قالب الشبكة:</h3>
                    <p>نظام تخطيط بصري باستخدام المناطق المسماة:</p>
                    <pre class="code-block" dir="ltr">
grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
                    </pre>
                </div>
            `,
            examples: [
                {
                    title: "Grid Container Examples",
                    content: `
                        <pre class="code-block">
/* Basic grid */
.grid {
    display: grid;
    gap: 20px;
}

/* Fixed columns */
.fixed-grid {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    gap: 10px;
}

/* Flexible columns */
.flexible-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 20px;
}

/* Responsive grid */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Complex grid layout */
.complex-grid {
    display: grid;
    grid-template-columns: 100px 1fr 2fr 100px;
    grid-template-rows: 80px 1fr 60px;
    gap: 15px;
}

/* Grid with minmax */
.minmax-grid {
    display: grid;
    grid-template-columns: minmax(200px, 300px) 1fr minmax(150px, 1fr);
}
                        </pre>
                    `
                },
                {
                    title: "Grid Item Placement Examples",
                    content: `
                        <pre class="code-block">
/* Line-based placement */
.item-1 {
    grid-column: 1 / 3; /* Start at line 1, end at line 3 */
    grid-row: 1;
}

.item-2 {
    grid-column: 3;
    grid-row: 1 / 3; /* Start at line 1, end at line 3 */
}

/* Span keyword */
.span-2 {
    grid-column: span 2;
}

.span-full {
    grid-column: 1 / -1; /* Full width */
}

/* Named grid areas */
.layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-rows: 80px 1fr 60px;
    grid-template-columns: 200px 1fr 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Self alignment */
.center-item {
    justify-self: center;
    align-self: center;
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "CSS Grid Practice",
                    content: `
                        <p>Practice with CSS Grid layouts:</p>
                        <ol>
                            <li>Create a photo gallery with auto-fill and minmax</li>
                            <li>Build a magazine-style layout with named grid areas</li>
                            <li>Create a responsive dashboard layout</li>
                            <li>Experiment with grid item placement using line numbers</li>
                            <li>Build a holy grail layout using CSS Grid</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between auto-fit and auto-fill?",
                    answer: "auto-fit expands tracks to fill available space when there are fewer items. auto-fill keeps tracks at specified size even when empty. Use auto-fit when you want items to expand, auto-fill when you want consistent track sizes regardless of item count."
                },
                {
                    question: "When should you use Grid vs Flexbox?",
                    answer: "Use Grid for two-dimensional layouts (both rows and columns). Use Flexbox for one-dimensional layouts (either row OR column). Grid is better for overall page layout, while Flexbox is better for component-level layout and content distribution within a single dimension."
                }
            ]
        },
        {
            id: "responsive-animations",
            title: "Responsive Design & Animations",
            content: `
                <h3>Media Queries:</h3>
                <ul>
                    <li><strong>@media</strong>: Rule for conditional CSS</li>
                    <li><strong>Logical operators</strong>: and, not, only</li>
                    <li><strong>Media types</strong>: screen, print, speech</li>
                    <li><strong>Media features</strong>: width, height, orientation, hover</li>
                </ul>
                
                <h3>Common Breakpoints:</h3>
                <ul>
                    <li>Mobile: 320px - 480px</li>
                    <li>Tablet: 481px - 768px</li>
                    <li>Small screens: 769px - 1024px</li>
                    <li>Large screens: 1025px+</li>
                </ul>
                
                <h3>Viewport Meta Tag:</h3>
                <pre class="code-block">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                </pre>
                
                <h3>Fluid Sizing with clamp():</h3>
                <p>clamp(min, preferred, max) - responsive values in one line</p>
                
                <h3>CSS Transitions:</h3>
                <ul>
                    <li><strong>transition-property</strong>: Which properties to animate</li>
                    <li><strong>transition-duration</strong>: How long animation takes</li>
                    <li><strong>transition-timing-function</strong>: ease, linear, ease-in-out</li>
                    <li><strong>transition-delay</strong>: When to start animation</li>
                </ul>
                
                <h3>CSS Animations:</h3>
                <ul>
                    <li><strong>@keyframes</strong>: Define animation sequence</li>
                    <li><strong>animation-name</strong>: Reference to @keyframes</li>
                    <li><strong>animation-duration</strong>: How long animation runs</li>
                    <li><strong>animation-iteration-count</strong>: infinite, number</li>
                    <li><strong>animation-direction</strong>: normal, reverse, alternate</li>
                </ul>
                
                <h3>CSS Transforms:</h3>
                <ul>
                    <li><strong>scale()</strong>: Resize element</li>
                    <li><strong>rotate()</strong>: Rotate element</li>
                    <li><strong>translate()</strong>: Move element</li>
                    <li><strong>skew()</strong>: Distort element</li>
                </ul>

                <br><hr><br>
                <div dir="rtl">
                    <h3>استعلامات الوسائط:</h3>
                    <ul>
                        <li><strong>@media</strong>: قاعدة لـ CSS الشرطي</li>
                        <li><strong>المشغلات المنطقية</strong>: and, not, only</li>
                        <li><strong>أنواع الوسائط</strong>: screen, print, speech</li>
                        <li><strong>ميزات الوسائط</strong>: width, height, orientation, hover</li>
                    </ul>
                    
                    <h3>نقاط التوقف الشائعة:</h3>
                    <ul>
                        <li>الجوال: 320px - 480px</li>
                        <li>اللوحي: 481px - 768px</li>
                        <li>الشاشات الصغيرة: 769px - 1024px</li>
                        <li>الشاشات الكبيرة: 1025px+</li>
                    </ul>
                    
                    <h3>وسم Viewport Meta:</h3>
                    <pre class="code-block" dir="ltr">
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
                    </pre>
                    
                    <h3>تحديد الحجم السائل مع clamp():</h3>
                    <p>clamp(min, preferred, max) - قيم متجاوبة في سطر واحد</p>
                    
                    <h3>انتقالات CSS:</h3>
                    <ul>
                        <li><strong>transition-property</strong>: أي الخصائص يتم تحريكها</li>
                        <li><strong>transition-duration</strong>: كم من الوقت تستغرق الرسوم المتحركة</li>
                        <li><strong>transition-timing-function</strong>: ease, linear, ease-in-out</li>
                        <li><strong>transition-delay</strong>: متى تبدأ الرسوم المتحركة</li>
                    </ul>
                    
                    <h3>رسوم CSS المتحركة:</h3>
                    <ul>
                        <li><strong>@keyframes</strong>: تعريف تسلسل الرسوم المتحركة</li>
                        <li><strong>animation-name</strong>: المرجع إلى @keyframes</li>
                        <li><strong>animation-duration</strong>: كم من الوقت تعمل الرسوم المتحركة</li>
                        <li><strong>animation-iteration-count</strong>: infinite, number</li>
                        <li><strong>animation-direction</strong>: normal, reverse, alternate</li>
                    </ul>
                    
                    <h3>تحويلات CSS:</h3>
                    <ul>
                        <li><strong>scale()</strong>: تغيير حجم العنصر</li>
                        <li><strong>rotate()</strong>: تدوير العنصر</li>
                        <li><strong>translate()</strong>: تحريك العنصر</li>
                        <li><strong>skew()</strong>: تشويه العنصر</li>
                    </ul>
                </div>
            `,
            examples: [
                {
                    title: "Media Query Examples",
                    content: `
                        <pre class="code-block">
/* Mobile first approach */
.container {
    padding: 10px;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 20px;
        max-width: 720px;
        margin: 0 auto;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
        padding: 40px;
    }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    body {
        background: #333;
        color: white;
    }
}

/* Print styles */
@media print {
    .no-print {
        display: none;
    }
}

/* Complex media query */
@media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
                        </pre>
                    `
                },
                {
                    title: "Animations & Transforms Examples",
                    content: `
                        <pre class="code-block">
/* Transitions */
.button {
    transition: all 0.3s ease;
}
.button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Keyframes animation */
@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.slide-element {
    animation: slideIn 0.5s ease-out;
}

/* Bounce animation */
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

.bounce {
    animation: bounce 2s infinite;
}

/* Transform examples */
.transform-1 {
    transform: scale(1.1);
}

.transform-2 {
    transform: rotate(45deg);
}

.transform-3 {
    transform: translate(50px, 100px);
}

.transform-4 {
    transform: skew(10deg, 5deg);
}

/* Multiple transforms */
.complex-transform {
    transform: scale(1.1) rotate(5deg) translateX(10px);
}

/* Fluid typography with clamp */
.fluid-text {
    font-size: clamp(1rem, 2.5vw, 2rem);
}
                        </pre>
                    `
                }
            ],
            practices: [
                {
                    title: "Responsive & Animations Practice",
                    content: `
                        <p>Practice with responsive design and animations:</p>
                        <ol>
                            <li>Create a mobile-first responsive layout with 3 breakpoints</li>
                            <li>Add smooth transitions to interactive elements</li>
                            <li>Create a loading spinner using CSS animations</li>
                            <li>Build a responsive navigation that transforms on mobile</li>
                            <li>Use clamp() for fluid typography and spacing</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between transition and animation?",
                    answer: "Transitions are for simple state changes (hover, focus) and need a trigger. Animations are more complex, can have multiple keyframes, run automatically, and offer more control. Use transitions for simple interactions, animations for complex sequences."
                },
                {
                    question: "Why use mobile-first approach in media queries?",
                    answer: "Mobile-first means styling for mobile first, then enhancing for larger screens. It's more efficient (less code to override), performs better, and aligns with progressive enhancement. Start with min-width queries going upward, rather than max-width going downward."
                }
            ]
        },
        {
    id: "pseudo-elements-classes",
    title: "Pseudo-elements & Pseudo-classes - Advanced Selectors",
    content: `
        <h3>Pseudo-classes (State-based):</h3>
        <p>Select elements based on their state or position</p>
        <ul>
            <li><strong>:hover</strong> - When mouse is over element</li>
            <li><strong>:focus</strong> - When element has keyboard focus</li>
            <li><strong>:active</strong> - While element is being activated</li>
            <li><strong>:visited</strong> - Links that have been visited</li>
            <li><strong>:first-child</strong> - First child of its parent</li>
            <li><strong>:last-child</strong> - Last child of its parent</li>
            <li><strong>:nth-child(n)</strong> - nth child (2, 3, even, odd, 3n)</li>
            <li><strong>:nth-of-type(n)</strong> - nth of specific type</li>
            <li><strong>:not(selector)</strong> - Elements that don't match selector</li>
            <li><strong>:checked</strong> - Checked radio/checkbox</li>
            <li><strong>:disabled</strong> - Disabled form elements</li>
        </ul>
        
        <h3>Pseudo-elements (Virtual elements):</h3>
        <p>Style specific parts of an element</p>
        <ul>
            <li><strong>::before</strong> - Insert content before element</li>
            <li><strong>::after</strong> - Insert content after element</li>
            <li><strong>::first-letter</strong> - Style first letter of text</li>
            <li><strong>::first-line</strong> - Style first line of text</li>
            <li><strong>::selection</strong> - Style highlighted text</li>
            <li><strong>::placeholder</strong> - Style input placeholder text</li>
        </ul>
        
        <h3>Common Use Cases:</h3>
        <ul>
            <li>Interactive states (hover, focus)</li>
            <li>Styling lists and tables</li>
            <li>Creating decorative elements</li>
            <li>Typography enhancements</li>
            <li>Form styling</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>الفئات الزائفة (مبنية على الحالة):</h3>
            <p>تحديد العناصر بناءً على حالتها أو موقعها</p>
            <ul>
                <li><strong>:hover</strong> - عندما يكون الفأرة فوق العنصر</li>
                <li><strong>:focus</strong> - عندما يكون العنصر لديه تركيز لوحة المفاتيح</li>
                <li><strong>:active</strong> - أثناء تنشيط العنصر</li>
                <li><strong>:visited</strong> - الروابط التي تمت زيارتها</li>
                <li><strong>:first-child</strong> - الابن الأول لوالده</li>
                <li><strong>:last-child</strong> - الابن الأخير لوالده</li>
                <li><strong>:nth-child(n)</strong> - الابن النوني (2, 3, even, odd, 3n)</li>
                <li><strong>:nth-of-type(n)</strong> - النوني من نوع محدد</li>
                <li><strong>:not(selector)</strong> - العناصر التي لا تطابق المحدد</li>
                <li><strong>:checked</strong> - زر الراديو/مربع الاختيار المحدد</li>
                <li><strong>:disabled</strong> - عناصر النموذج المعطلة</li>
            </ul>
            
            <h3>العناصر الزائفة (عناصر افتراضية):</h3>
            <p>تنسيق أجزاء محددة من العنصر</p>
            <ul>
                <li><strong>::before</strong> - إدراج محتوى قبل العنصر</li>
                <li><strong>::after</strong> - إدراج محتوى بعد العنصر</li>
                <li><strong>::first-letter</strong> - تنسيق الحرف الأول للنص</li>
                <li><strong>::first-line</strong> - تنسيق السطر الأول للنص</li>
                <li><strong>::selection</strong> - تنسيق النص المحدد</li>
                <li><strong>::placeholder</strong> - تنسيق نص العنصر النائب للإدخال</li>
            </ul>
            
            <h3>حالات الاستخدام الشائعة:</h3>
            <ul>
                <li>الحالات التفاعلية (hover, focus)</li>
                <li>تنسيق القوائم والجداول</li>
                <li>إنشاء عناصر زخرفية</li>
                <li>تحسينات الطباعة</li>
                <li>تنسيق النماذج</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Pseudo-class Examples",
            content: `
                <pre class="code-block">
/* Interactive states */
.button {
    background: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.button:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.button:active {
    transform: translateY(0);
}

.button:focus {
    outline: 3px solid rgba(0,123,255,0.3);
    outline-offset: 2px;
}

/* Link states */
a {
    color: #007bff;
    text-decoration: none;
}

a:visited {
    color: #6f42c1;
}

a:hover {
    text-decoration: underline;
}

/* Child selectors */
.list-item:first-child {
    font-weight: bold;
    border-top: 2px solid #007bff;
}

.list-item:last-child {
    border-bottom: 2px solid #007bff;
}

.list-item:nth-child(odd) {
    background: #f8f9fa;
}

.list-item:nth-child(even) {
    background: white;
}

.list-item:nth-child(3n) {
    color: #e74c3c;
}

/* Form states */
input:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0,123,255,0.1);
}

input:disabled {
    background: #f8f9fa;
    color: #6c757d;
    cursor: not-allowed;
}

input:checked + label {
    font-weight: bold;
    color: #28a745;
}

/* Negation */
.card:not(.featured) {
    opacity: 0.7;
}

.button:not(:last-child) {
    margin-right: 10px;
}
                </pre>
            `
        },
        {
            title: "Pseudo-element Examples",
            content: `
                <pre class="code-block">
/* Before and After */
.decorative-heading {
    position: relative;
    text-align: center;
}

.decorative-heading::before,
.decorative-heading::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 100px;
    height: 2px;
    background: #007bff;
}

.decorative-heading::before {
    left: 0;
}

.decorative-heading::after {
    right: 0;
}

/* Icon with ::before */
.button-with-icon::before {
    content: "→";
    margin-right: 8px;
    font-weight: bold;
}

/* Tooltip with ::after */
.tooltip {
    position: relative;
}

.tooltip:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 14px;
}

/* First letter styling */
.article-intro::first-letter {
    font-size: 3em;
    float: left;
    line-height: 1;
    margin-right: 8px;
    color: #007bff;
    font-weight: bold;
}

/* First line styling */
.article-lead::first-line {
    font-weight: bold;
    font-size: 1.2em;
    color: #2c3e50;
}

/* Selection styling */
::selection {
    background: #007bff;
    color: white;
}

::-moz-selection {
    background: #007bff;
    color: white;
}

/* Placeholder styling */
input::placeholder {
    color: #6c757d;
    font-style: italic;
}

/* Custom bullets with ::before */
.custom-list {
    list-style: none;
    padding: 0;
}

.custom-list li::before {
    content: "▸";
    color: #007bff;
    font-weight: bold;
    margin-right: 8px;
}

/* Quote styling with ::before and ::after */
.blockquote::before {
    content: "“";
    font-size: 4em;
    color: #007bff;
    line-height: 0;
    vertical-align: -0.4em;
    margin-right: 10px;
}

.blockquote::after {
    content: "”";
    font-size: 4em;
    color: #007bff;
    line-height: 0;
    vertical-align: -0.4em;
    margin-left: 10px;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Pseudo-classes & Elements Practice",
            content: `
                <p>Practice with pseudo-classes and pseudo-elements:</p>
                <ol>
                    <li>Create interactive buttons with hover, focus, and active states</li>
                    <li>Style a navigation menu with different states for current page</li>
                    <li>Build a striped table using nth-child selectors</li>
                    <li>Create decorative headings with ::before and ::after</li>
                    <li>Style form elements with :focus, :valid, and :invalid states</li>
                    <li>Add custom icons to buttons using ::before</li>
                    <li>Create a custom-styled blockquote with quotation marks</li>
                    <li>Build a tooltip system using ::after</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between pseudo-classes and pseudo-elements?",
            answer: "Pseudo-classes (single colon) select elements based on their state (:hover, :focus, :first-child). Pseudo-elements (double colon) style specific parts of an element (::before, ::after, ::first-letter). Pseudo-classes target existing elements in specific states, while pseudo-elements create virtual elements that don't exist in the DOM."
        },
        {
            question: "When should you use single colon vs double colon syntax?",
            answer: "Use single colon for pseudo-classes (:hover, :focus) and double colon for pseudo-elements (::before, ::after). While most browsers support single colon for pseudo-elements for backward compatibility, the double colon syntax is the modern standard defined in CSS3. Always use double colon for pseudo-elements in new code."
        }
    ]
},

{
    id: "image-styling",
    title: "Image Styling & Manipulation",
    content: `
        <h3>Image Display Properties:</h3>
        <ul>
            <li><strong>width/height</strong>: Control dimensions</li>
            <li><strong>object-fit</strong>: cover, contain, fill, scale-down</li>
            <li><strong>object-position</strong>: Position within container</li>
            <li><strong>border-radius</strong>: Rounded corners and circles</li>
            <li><strong>filter</strong>: Visual effects (blur, brightness, contrast)</li>
        </ul>
        
        <h3>Responsive Images:</h3>
        <ul>
            <li>max-width: 100% for responsive scaling</li>
            <li>height: auto to maintain aspect ratio</li>
            <li>srcset for different screen sizes</li>
            <li>picture element for art direction</li>
        </ul>
        
        <h3>Advanced Techniques:</h3>
        <ul>
            <li>CSS masks and clipping</li>
            <li>Blend modes for creative effects</li>
            <li>Gradient overlays</li>
            <li>Shape-outside for text wrapping</li>
            <li>Background images with multiple layers</li>
        </ul>
        
        <h3>Performance Considerations:</h3>
        <ul>
            <li>Optimize image file sizes</li>
            <li>Use modern formats (WebP, AVIF)</li>
            <li>Lazy loading with loading="lazy"</li>
            <li>Responsive images with srcset</li>
            <li>CSS filters vs image editing</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>خصائص عرض الصورة:</h3>
            <ul>
                <li><strong>width/height</strong>: التحكم في الأبعاد</li>
                <li><strong>object-fit</strong>: cover, contain, fill, scale-down</li>
                <li><strong>object-position</strong>: الموضع داخل الحاوية</li>
                <li><strong>border-radius</strong>: زوايا مستديرة ودوائر</li>
                <li><strong>filter</strong>: تأثيرات بصرية (طمس، سطوع، تباين)</li>
            </ul>
            
            <h3>الصور المتجاوبة:</h3>
            <ul>
                <li>max-width: 100% للتحجيم المتجاوب</li>
                <li>height: auto للحفاظ على نسبة العرض إلى الارتفاع</li>
                <li>srcset لأحجام الشاشات المختلفة</li>
                <li>عنصر picture للتوجيه الفني</li>
            </ul>
            
            <h3>التقنيات المتقدمة:</h3>
            <ul>
                <li>أقنعة CSS والقص</li>
                <li>أنماط المزج للتأثيرات الإبداعية</li>
                <li>تراكبات التدرج</li>
                <li>Shape-outside لتفاف النص</li>
                <li>صور الخلفية مع طبقات متعددة</li>
            </ul>
            
            <h3>اعتبارات الأداء:</h3>
            <ul>
                <li>تحسين أحجام ملفات الصور</li>
                <li>استخدم الصيغ الحديثة (WebP, AVIF)</li>
                <li>التحميل المتأخر مع loading="lazy"</li>
                <li>صور متجاوبة مع srcset</li>
                <li>مرشحات CSS مقابل تحرير الصور</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Basic Image Styling",
            content: `
                <pre class="code-block">
/* Responsive images */
.responsive-img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* Circular images */
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #007bff;
}

/* Image with object-fit */
.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: center;
}

.contain-image {
    width: 300px;
    height: 200px;
    object-fit: contain;
    background: #f8f9fa;
}

/* Image filters */
.filter-blur {
    filter: blur(2px);
}

.filter-brightness {
    filter: brightness(1.2);
}

.filter-contrast {
    filter: contrast(1.5);
}

.filter-grayscale {
    filter: grayscale(100%);
}

.filter-sepia {
    filter: sepia(100%);
}

.filter-multiple {
    filter: brightness(1.1) contrast(1.2) saturate(1.3);
}

/* Hover effects */
.image-hover {
    transition: all 0.3s ease;
}

.image-hover:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
}

/* Image with overlay */
.image-container {
    position: relative;
    display: inline-block;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-container:hover .image-overlay {
    opacity: 1;
}

/* Gradient overlay */
.gradient-overlay::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0,0,0,0.7) 100%
    );
}
                </pre>
            `
        },
        {
            title: "Advanced Image Techniques",
            content: `
                <pre class="code-block">
/* CSS Masks */
.masked-image {
    width: 300px;
    height: 300px;
    -webkit-mask-image: url('mask.png');
    mask-image: url('mask.png');
    -webkit-mask-size: cover;
    mask-size: cover;
}

/* Blend modes */
.blend-multiply {
    mix-blend-mode: multiply;
}

.blend-overlay {
    mix-blend-mode: overlay;
}

.blend-screen {
    mix-blend-mode: screen;
}

/* Text wrapping around images */
.wrap-shape {
    float: left;
    shape-outside: circle(50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-right: 20px;
}

.wrap-polygon {
    float: right;
    shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    width: 150px;
    height: 150px;
    margin-left: 20px;
}

/* Background image techniques */
.hero-background {
    background-image: 
        linear-gradient(45deg, rgba(0,0,0,0.3), rgba(0,0,0,0.7)),
        url('hero-image.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

/* Multiple background images */
.layered-background {
    background-image: 
        url('pattern.png'),
        url('main-image.jpg');
    background-size: 50px 50px, cover;
    background-position: top left, center;
    background-repeat: repeat, no-repeat;
}

/* Parallax effect */
.parallax {
    background-image: url('parallax-bg.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
}

/* Image gallery layout */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    padding: 20px;
}

.gallery-item {
    position: relative;
    overflow: hidden;
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* Loading states */
.image-loading {
    background: #f8f9fa;
    position: relative;
    overflow: hidden;
}

.image-loading::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,0.6),
        transparent
    );
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { left: -100%; }
    100% { left: 100%; }
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Image Styling Practice",
            content: `
                <p>Practice with image styling techniques:</p>
                <ol>
                    <li>Create a responsive image gallery with hover effects</li>
                    <li>Build user profile cards with circular avatars</li>
                    <li>Design hero sections with background images and overlays</li>
                    <li>Experiment with CSS filters for different visual effects</li>
                    <li>Create image cards with text that wraps around shaped images</li>
                    <li>Build a parallax scrolling section</li>
                    <li>Create loading states for images</li>
                    <li>Design a product showcase with multiple image techniques</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between object-fit: cover and contain?",
            answer: "cover scales the image to cover the entire container, potentially cropping edges to maintain aspect ratio. contain scales the image to fit entirely within the container, potentially leaving empty space but showing the whole image. Use cover for full-bleed backgrounds and contain when you need to see the entire image without cropping."
        },
        {
            question: "How do you optimize images for web performance?",
            answer: "Use modern formats (WebP, AVIF), compress images appropriately, implement responsive images with srcset, use lazy loading, consider CSS filters instead of multiple image versions, optimize loading with placeholder techniques, and use CDNs for delivery. Always balance quality with file size for optimal performance."
        }
    ]
},

{
    id: "css-transitions",
    title: "CSS Transitions - Smooth Animations",
    content: `
        <h3>Transition Properties:</h3>
        <ul>
            <li><strong>transition-property</strong>: Which properties to animate</li>
            <li><strong>transition-duration</strong>: How long animation takes</li>
            <li><strong>transition-timing-function</strong>: Animation speed curve</li>
            <li><strong>transition-delay</strong>: When to start animation</li>
            <li><strong>transition</strong>: Shorthand for all properties</li>
        </ul>
        
        <h3>Animatable Properties:</h3>
        <ul>
            <li>Colors (color, background-color, border-color)</li>
            <li>Dimensions (width, height, padding, margin)</li>
            <li>Transforms (translate, rotate, scale, skew)</li>
            <li>Opacity and visibility</li>
            <li>Position (top, right, bottom, left)</li>
            <li>Shadows (box-shadow, text-shadow)</li>
        </ul>
        
        <h3>Timing Functions:</h3>
        <ul>
            <li><strong>ease</strong>: Slow start, fast, slow end (default)</li>
            <li><strong>linear</strong>: Constant speed</li>
            <li><strong>ease-in</strong>: Slow start</li>
            <li><strong>ease-out</strong>: Slow end</li>
            <li><strong>ease-in-out</strong>: Slow start and end</li>
            <li><strong>cubic-bezier()</strong>: Custom timing function</li>
            <li><strong>steps()</strong>: Discrete steps animation</li>
        </ul>
        
        <h3>Best Practices:</h3>
        <ul>
            <li>Use transitions for simple state changes</li>
            <li>Keep durations between 200-500ms for interactions</li>
            <li>Use appropriate timing functions</li>
            <li>Test performance on mobile devices</li>
            <li>Consider prefers-reduced-motion</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>خصائص الانتقال:</h3>
            <ul>
                <li><strong>transition-property</strong>: أي الخصائص يتم تحريكها</li>
                <li><strong>transition-duration</strong>: كم من الوقت تستغرق الرسوم المتحركة</li>
                <li><strong>transition-timing-function</strong>: منحنى سرعة الرسوم المتحركة</li>
                <li><strong>transition-delay</strong>: متى تبدأ الرسوم المتحركة</li>
                <li><strong>transition</strong>: اختصار لجميع الخصائص</li>
            </ul>
            
            <h3>الخصائص القابلة للتحريك:</h3>
            <ul>
                <li>الألوان (color, background-color, border-color)</li>
                <li>الأبعاد (width, height, padding, margin)</li>
                <li>التحويلات (translate, rotate, scale, skew)</li>
                <li>الشفافية والرؤية</li>
                <li>الموضع (top, right, bottom, left)</li>
                <li>الظلال (box-shadow, text-shadow)</li>
            </ul>
            
            <h3>دوال التوقيت:</h3>
            <ul>
                <li><strong>ease</strong>: بداية بطيئة، سريعة، نهاية بطيئة (افتراضي)</li>
                <li><strong>linear</strong>: سرعة ثابتة</li>
                <li><strong>ease-in</strong>: بداية بطيئة</li>
                <li><strong>ease-out</strong>: نهاية بطيئة</li>
                <li><strong>ease-in-out</strong>: بداية ونهاية بطيئة</li>
                <li><strong>cubic-bezier()</strong>: دالة توقيت مخصصة</li>
                <li><strong>steps()</strong>: رسوم متحركة بخطوات منفصلة</li>
            </ul>
            
            <h3>أفضل الممارسات:</h3>
            <ul>
                <li>استخدم الانتقالات لتغييرات الحالة البسيطة</li>
                <li>احتفظ بالمدة بين 200-500 مللي ثانية للتفاعلات</li>
                <li>استخدم دوال التوقيت المناسبة</li>
                <li>اختبر الأداء على أجهزة الجوال</li>
                <li>ضع في الاعتبار prefers-reduced-motion</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Basic Transition Examples",
            content: `
                <pre class="code-block">
/* Simple hover transition */
.button {
    background: #007bff;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    transition: all 0.3s ease;
}

.button:hover {
    background: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Multiple properties with different durations */
.card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: 
        transform 0.3s ease,
        box-shadow 0.3s ease,
        background-color 0.5s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    background-color: #f8f9fa;
}

/* Color transitions */
.color-transition {
    background: #ff6b6b;
    color: white;
    padding: 20px;
    transition: background-color 0.4s ease, color 0.4s ease;
}

.color-transition:hover {
    background: #4ecdc4;
    color: #333;
}

/* Delayed transitions */
.delayed-element {
    opacity: 0.7;
    transition: opacity 0.3s ease 0.2s;
}

.delayed-element:hover {
    opacity: 1;
}

/* Different timing functions */
.timing-examples {
    width: 100px;
    height: 100px;
    background: #007bff;
    margin: 10px;
    transition: transform 1s;
}

.ease { transition-timing-function: ease; }
.linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.ease-in-out { transition-timing-function: ease-in-out; }

.timing-examples:hover {
    transform: translateX(200px);
}

/* Custom cubic-bezier */
.custom-timing {
    transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.custom-timing:hover {
    transform: scale(1.1);
}
                </pre>
            `
        },
        {
            title: "Advanced Transition Techniques",
            content: `
                <pre class="code-block">
/* Menu slide transition */
.mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100vh;
    background: white;
    transition: right 0.3s ease;
}

.mobile-menu.open {
    right: 0;
}

/* Accordion transition */
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.accordion-item.active .accordion-content {
    max-height: 500px;
}

/* Loading bar transition */
.loading-bar {
    width: 0%;
    height: 4px;
    background: #007bff;
    transition: width 2s ease;
}

.loading-bar.active {
    width: 100%;
}

/* Staggered transitions */
.stagger-item {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.stagger-item:nth-child(1) { transition-delay: 0.1s; }
.stagger-item:nth-child(2) { transition-delay: 0.2s; }
.stagger-item:nth-child(3) { transition-delay: 0.3s; }

.stagger-container:hover .stagger-item {
    opacity: 1;
    transform: translateY(0);
}

/* Toggle switch */
.toggle-switch {
    width: 60px;
    height: 30px;
    background: #ccc;
    border-radius: 15px;
    position: relative;
    transition: background-color 0.3s ease;
}

.toggle-switch::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    background: white;
    border-radius: 50%;
    transition: transform 0.3s ease;
}

.toggle-switch.active {
    background: #007bff;
}

.toggle-switch.active::after {
    transform: translateX(30px);
}

/* Progress bar */
.progress-bar {
    width: 100%;
    height: 8px;
    background: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
}

.progress-fill {
    width: 0%;
    height: 100%;
    background: linear-gradient(90deg, #007bff, #00d4ff);
    transition: width 0.5s ease;
}

/* Morphing button */
.morph-button {
    padding: 12px 24px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 25px;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.morph-button.loading {
    padding: 12px 12px;
    border-radius: 50%;
    width: 44px;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
    * {
        transition-duration: 0.01ms !important;
        animation-duration: 0.01ms !important;
    }
}

/* Transform transitions */
.transform-example {
    width: 100px;
    height: 100px;
    background: #007bff;
    transition: transform 0.5s ease;
}

.transform-example:hover {
    transform: 
        translate(20px, 10px)
        rotate(15deg)
        scale(1.2);
}

/* Complex property transitions */
.complex-transition {
    background: #ff6b6b;
    color: white;
    padding: 20px;
    margin: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: 
        background 0.4s ease,
        transform 0.3s ease,
        box-shadow 0.3s ease,
        border-radius 0.5s ease;
}

.complex-transition:hover {
    background: #4ecdc4;
    transform: scale(1.05);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    border-radius: 20px;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "CSS Transitions Practice",
            content: `
                <p>Practice with CSS transitions:</p>
                <ol>
                    <li>Create interactive buttons with multiple transition properties</li>
                    <li>Build a mobile navigation menu with slide transitions</li>
                    <li>Design loading animations with progress bars</li>
                    <li>Create accordion components with smooth height transitions</li>
                    <li>Experiment with different timing functions for various effects</li>
                    <li>Build a toggle switch with smooth state changes</li>
                    <li>Create staggered animations for list items</li>
                    <li>Design morphing buttons that change shape</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between CSS transitions and animations?",
            answer: "Transitions are for simple state changes between two states (like hover) and need a trigger. Animations are more complex, can have multiple keyframes, run automatically, loop, and offer more control. Use transitions for simple interactions and animations for complex sequences or when you need more control over the animation flow."
        },
        {
            question: "How do you ensure smooth animations and good performance?",
            answer: "Use transform and opacity for animations (they're GPU-accelerated), avoid animating properties that cause layout reflows (width, height, top, left), use will-change for elements you plan to animate, keep animation durations appropriate, test on target devices, and respect prefers-reduced-motion for accessibility."
        }
    ]
},
        {
    id: "centering-techniques",
    title: "Centering Elements - Complete Guide",
    content: `
        <h3>Horizontal Centering Methods:</h3>
        <ul>
            <li><strong>text-align: center</strong>: For inline/inline-block elements</li>
            <li><strong>margin: 0 auto</strong>: For block elements with defined width</li>
            <li><strong>Flexbox</strong>: justify-content: center</li>
            <li><strong>CSS Grid</strong>: justify-items: center or place-items: center</li>
        </ul>
        
        <h3>Vertical Centering Methods:</h3>
        <ul>
            <li><strong>line-height</strong>: Equal to container height (single line text)</li>
            <li><strong>Flexbox</strong>: align-items: center</li>
            <li><strong>CSS Grid</strong>: align-items: center</li>
            <li><strong>Absolute positioning</strong>: top: 50% + transform: translateY(-50%)</li>
        </ul>
        
        <h3>Perfect Center (Both Axes):</h3>
        <ul>
            <li><strong>Flexbox</strong>: justify-content: center + align-items: center</li>
            <li><strong>CSS Grid</strong>: place-items: center or place-content: center</li>
            <li><strong>Absolute positioning</strong>: top/left 50% + transform translate -50%</li>
            <li><strong>Margin auto</strong>: With absolute positioning</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>طرق المركز الأفقي:</h3>
            <ul>
                <li><strong>text-align: center</strong>: للعناصر المضمنة/المضمنة-الكتلة</li>
                <li><strong>margin: 0 auto</strong>: لعناصر الكتلة ذات العرض المحدد</li>
                <li><strong>Flexbox</strong>: justify-content: center</li>
                <li><strong>CSS Grid</strong>: justify-items: center أو place-items: center</li>
            </ul>
            
            <h3>طرق المركز العمودي:</h3>
            <ul>
                <li><strong>line-height</strong>: يساوي ارتفاع الحاوية (نص سطر واحد)</li>
                <li><strong>Flexbox</strong>: align-items: center</li>
                <li><strong>CSS Grid</strong>: align-items: center</li>
                <li><strong>الوضع المطلق</strong>: top: 50% + transform: translateY(-50%)</li>
            </ul>
            
            <h3>المركز المثالي (كلا المحورين):</h3>
            <ul>
                <li><strong>Flexbox</strong>: justify-content: center + align-items: center</li>
                <li><strong>CSS Grid</strong>: place-items: center أو place-content: center</li>
                <li><strong>الوضع المطلق</strong>: top/left 50% + transform translate -50%</li>
                <li><strong>Margin auto</strong>: مع الوضع المطلق</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "All Centering Methods",
            content: `
                <pre class="code-block">
/* Method 1: Flexbox (Recommended) */
.center-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
}

/* Method 2: CSS Grid */
.center-grid {
    display: grid;
    place-items: center;
    height: 100vh;
}

/* Method 3: Absolute Positioning */
.center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Method 4: Margin Auto */
.center-margin {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 200px;
    height: 100px;
}

/* Horizontal only */
.center-horizontal {
    margin: 0 auto;
    width: 80%;
}

/* Vertical only - line height */
.center-vertical-text {
    height: 100px;
    line-height: 100px;
}

/* Vertical only - flexbox */
.center-vertical-flex {
    display: flex;
    align-items: center;
    height: 300px;
}

/* Login form centering */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f5f5f5;
}

.login-form {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 400px;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Centering Practice",
            content: `
                <p>Practice all centering techniques:</p>
                <ol>
                    <li>Center a login form perfectly in the middle of the page</li>
                    <li>Create a hero section with centered content</li>
                    <li>Center navigation items vertically within a header</li>
                    <li>Create a modal dialog that stays centered when scrolling</li>
                    <li>Center an image gallery with consistent spacing</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "Which centering method is most recommended and why?",
            answer: "Flexbox is most recommended because it's designed for layout, has excellent browser support, works for both axes simultaneously, handles dynamic content well, and doesn't require knowing element dimensions. It's also more semantic and maintainable than absolute positioning."
        },
        {
            question: "When should you use absolute positioning for centering?",
            answer: "Use absolute positioning when you need to center within a specific positioned container, for overlay elements, or when Flexbox/Grid aren't suitable. However, it removes the element from normal document flow and requires knowing dimensions for proper centering with margin: auto."
        }
    ]
},

{
    id: "card-components",
    title: "Card Components - Modern Design Patterns",
    content: `
        <h3>Card Structure:</h3>
        <ul>
            <li><strong>Container</strong>: Main card wrapper with shadow/border</li>
            <li><strong>Header</strong>: Title, image, or avatar section</li>
            <li><strong>Body</strong>: Main content area</li>
            <li><strong>Footer</strong>: Actions, buttons, metadata</li>
        </ul>
        
        <h3>Card Design Principles:</h3>
        <ul>
            <li>Consistent spacing and typography</li>
            <li>Subtle shadows for depth</li>
            <li>Rounded corners for modern look</li>
            <li>Clear visual hierarchy</li>
            <li>Interactive states (hover, focus)</li>
        </ul>
        
        <h3>Card Variants:</h3>
        <ul>
            <li>Product cards</li>
            <li>User profile cards</li>
            <li>Blog post cards</li>
            <li>Statistics cards</li>
            <li>Testimonial cards</li>
            <li>Pricing cards</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>هيكل البطاقة:</h3>
            <ul>
                <li><strong>الحاوية</strong>: غلاف البطاقة الرئيسي بالظل/الحدود</li>
                <li><strong>الرأس</strong>: قسم العنوان، الصورة، أو الصورة الرمزية</li>
                <li><strong>الجسم</strong>: منطقة المحتوى الرئيسي</li>
                <li><strong>التذييل</strong>: الإجراءات، الأزرار، البيانات الوصفية</li>
            </ul>
            
            <h3>مبادئ تصميم البطاقة:</h3>
            <ul>
                <li>تباعد وتنظيم طباعي متناسق</li>
                <li>ظلال خفيفة للعمق</li>
                <li>زوايا مستديرة للمظهر الحديث</li>
                <li>تسلسل مرئي واضح</li>
                <li>حالات تفاعلية (تحويم، تركيز)</li>
            </ul>
            
            <h3>أنواع البطاقات:</h3>
            <ul>
                <li>بطاقات المنتج</li>
                <li>بطاقات ملف المستخدم</li>
                <li>بطاقات مقال المدونة</li>
                <li>بطاقات الإحصائيات</li>
                <li>بطاقات الشهادات</li>
                <li>بطاقات التسعير</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Card Component Examples",
            content: `
                <pre class="code-block">
/* Basic Card Structure */
.card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    overflow: hidden;
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.card-header {
    padding: 1.5rem 1.5rem 0;
}

.card-body {
    padding: 1rem 1.5rem;
}

.card-footer {
    padding: 0 1.5rem 1.5rem;
    border-top: 1px solid #f0f0f0;
    margin-top: 1rem;
}

/* Product Card */
.product-card {
    max-width: 300px;
    border: 1px solid #e0e0e0;
}

.product-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.product-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.product-price {
    color: #e53935;
    font-size: 1.5rem;
    font-weight: 700;
}

/* User Profile Card */
.profile-card {
    text-align: center;
    padding: 2rem;
}

.profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 3px solid #007bff;
}

.profile-name {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

.profile-role {
    color: #666;
    margin-bottom: 1rem;
}

/* Statistics Card */
.stats-card {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    text-align: center;
    padding: 2rem;
}

.stats-number {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.stats-label {
    opacity: 0.9;
    font-size: 1rem;
}

/* Testimonial Card */
.testimonial-card {
    background: #f8f9fa;
    border-left: 4px solid #007bff;
    position: relative;
}

.testimonial-text {
    font-style: italic;
    margin-bottom: 1rem;
    line-height: 1.6;
}

.testimonial-author {
    font-weight: 600;
    color: #333;
}

.testimonial-role {
    color: #666;
    font-size: 0.875rem;
}

/* Card with badges */
.card-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #ff4757;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Card Components Practice",
            content: `
                <p>Build various card components:</p>
                <ol>
                    <li>Create a product card with image, title, price, and CTA button</li>
                    <li>Design a user profile card with avatar, name, and social links</li>
                    <li>Build a statistics card with large numbers and labels</li>
                    <li>Create a testimonial card with quote and author info</li>
                    <li>Design a pricing card with features list and purchase button</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What makes a good card design in modern web applications?",
            answer: "Good card design has: clear visual hierarchy, consistent spacing, subtle shadows for depth, rounded corners, meaningful hover states, appropriate contrast, responsive behavior, accessible focus states, and follows the platform's design system. Cards should be self-contained and scannable."
        },
        {
            question: "How do you ensure cards are accessible?",
            answer: "Use semantic HTML (article, section), proper heading hierarchy, sufficient color contrast, focus indicators for interactive elements, alt text for images, ARIA labels when needed, and ensure the card is navigable via keyboard. Test with screen readers and maintain logical tab order."
        }
    ]
},

{
    id: "hero-sections",
    title: "Hero Sections - Landing Page Masters",
    content: `
        <h3>Hero Section Structure:</h3>
        <ul>
            <li><strong>Background</strong>: Image, gradient, or video</li>
            <li><strong>Headline</strong>: Main value proposition</li>
            <li><strong>Subheadline</strong>: Supporting description</li>
            <li><strong>Call-to-Action</strong>: Primary and secondary buttons</li>
            <li><strong>Visual Elements</strong>: Images, illustrations, or animations</li>
        </ul>
        
        <h3>Hero Design Patterns:</h3>
        <ul>
            <li>Centered content layout</li>
            <li>Split-screen design</li>
            <li>Full-screen video background</li>
            <li>Animated elements</li>
            <li>Gradient overlays</li>
            <li>Parallax effects</li>
        </ul>
        
        <h3>Key Considerations:</h3>
        <ul>
            <li>Above-the-fold content</li>
            <li>Mobile-responsive design</li>
            <li>Fast loading performance</li>
            <li>Clear visual hierarchy</li>
            <li>Strong contrast for readability</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>هيكل قسم البطل:</h3>
            <ul>
                <li><strong>الخلفية</strong>: صورة، تدرج، أو فيديو</li>
                <li><strong>العنوان الرئيسي</strong>: العرض الأساسي للقيمة</li>
                <li><strong>العنوان الفرعي</strong>: الوصف الداعم</li>
                <li><strong>دعوة إلى الإجراء</strong>: الأزرار الأساسية والثانوية</li>
                <li><strong>العناصر المرئية</strong>: الصور، الرسوم التوضيحية، أو الرسوم المتحركة</li>
            </ul>
            
            <h3>أنماط تصميم البطل:</h3>
            <ul>
                <li>تخطيط المحتوى المتمركز</li>
                <li>تصميم الشاشة المنقسمة</li>
                <li>خلفية فيديو كاملة الشاشة</li>
                <li>عناصر متحركة</li>
                <li>تراكبات متدرجة</li>
                <li>تأثيرات parallax</li>
            </ul>
            
            <h3>اعتبارات رئيسية:</h3>
            <ul>
                <li>المحتوى فوق الطية</li>
                <li>تصميم متجاوب للجوال</li>
                <li>أداء تحميل سريع</li>
                <li>تسلسل مرئي واضح</li>
                <li>تباين قوي لسهولة القراءة</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Hero Section Examples",
            content: `
                <pre class="code-block">
/* Basic Centered Hero */
.hero {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 100px 20px;
    text-align: center;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content {
    max-width: 600px;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.hero-subtitle {
    font-size: clamp(1.125rem, 2.5vw, 1.5rem);
    margin-bottom: 2rem;
    opacity: 0.9;
    line-height: 1.6;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

/* Hero with Background Image */
.hero-image {
    background: url('hero-bg.jpg') center/cover no-repeat;
    position: relative;
}

.hero-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
}

.hero-image .hero-content {
    position: relative;
    z-index: 2;
}

/* Split Screen Hero */
.hero-split {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    align-items: center;
}

.hero-text {
    padding: 4rem;
}

.hero-visual {
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Animated Hero */
.hero-animated {
    background: #000;
    overflow: hidden;
}

.hero-animated .hero-title {
    animation: fadeInUp 1s ease;
}

.hero-animated .hero-subtitle {
    animation: fadeInUp 1s ease 0.3s both;
}

.hero-animated .hero-buttons {
    animation: fadeInUp 1s ease 0.6s both;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Mobile Responsive Hero */
@media (max-width: 768px) {
    .hero-split {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-text {
        padding: 2rem 1rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .hero-buttons .btn {
        width: 100%;
        max-width: 300px;
    }
}

/* Stats Hero Section */
.hero-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    padding-top: 3rem;
    border-top: 1px solid rgba(255,255,255,0.2);
}

.stat-item {
    text-align: center;
}

.stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    display: block;
}

.stat-label {
    font-size: 1rem;
    opacity: 0.8;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Hero Section Practice",
            content: `
                <p>Create different hero section designs:</p>
                <ol>
                    <li>Build a centered hero with gradient background and CTA buttons</li>
                    <li>Create a split-screen hero with text and image sections</li>
                    <li>Design a hero with background image and overlay</li>
                    <li>Build an animated hero with staggered content reveals</li>
                    <li>Create a hero with statistics and social proof elements</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What are the key elements of an effective hero section?",
            answer: "Effective hero sections have: compelling headline that communicates value, clear subheadline explaining benefits, strong visual hierarchy, prominent call-to-action buttons, relevant imagery/graphics, mobile-responsive design, fast loading, and clear value proposition above the fold."
        },
        {
            question: "How do you optimize hero sections for mobile devices?",
            answer: "Use responsive images, stack content vertically, increase button sizes for touch, simplify animations, ensure text remains readable, use mobile-appropriate image crops, minimize file sizes, and test on actual devices. Consider using CSS clamp() for fluid typography that scales appropriately."
        }
    ]
},

{
    id: "navigation-systems",
    title: "Navigation Systems - From Simple to Complex",
    content: `
        <h3>Navigation Types:</h3>
        <ul>
            <li><strong>Horizontal Navbar</strong>: Traditional top navigation</li>
            <li><strong>Vertical Sidebar</strong>: For dashboards and web apps</li>
            <li><strong>Mobile Navigation</strong>: Hamburger menus and drawers</li>
            <li><strong>Mega Menus</strong>: Large dropdowns with multiple sections</li>
            <li><strong>Breadcrumbs</strong>: Secondary navigation for hierarchy</li>
            <li><strong>Footer Navigation</strong>: Site links and resources</li>
        </ul>
        
        <h3>Navigation Best Practices:</h3>
        <ul>
            <li>Clear visual hierarchy</li>
            <li>Consistent placement</li>
            <li>Accessible markup and interactions</li>
            <li>Mobile-first responsive design</li>
            <li>Active state indicators</li>
            <li>Search functionality when needed</li>
        </ul>
        
        <h3>Mobile Navigation Patterns:</h3>
        <ul>
            <li>Hamburger menu</li>
            <li>Bottom navigation bar</li>
            <li>Slide-out drawer</li>
            <li>Tab bar navigation</li>
            <li>Full-screen overlay</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>أنواع التنقل:</h3>
            <ul>
                <li><strong>شريط التنقل الأفقي</strong>: التنقل العلوي التقليدي</li>
                <li><strong>الشريط الجانبي العمودي</strong>: للوحات التحكم وتطبيقات الويب</li>
                <li><strong>تنقل الجوال</strong>: قوائم hamburger والأدراج</li>
                <li><strong>القوائم الضخمة</strong>: قوائم منسدلة كبيرة بأقسام متعددة</li>
                <li><strong>التنقل عبر breadcrumbs</strong>: تنقل ثانوي للتسلسل الهرمي</li>
                <li><strong>تنقل التذييل</strong>: روابط الموقع والموارد</li>
            </ul>
            
            <h3>أفضل ممارسات التنقل:</h3>
            <ul>
                <li>تسلسل هرمي مرئي واضح</li>
                <li>موضع متناسق</li>
                <li>ترميز وتفاعلات يمكن الوصول إليها</li>
                <li>تصميم متجاوب mobile-first</li>
                <li>مؤشرات الحالة النشطة</li>
                <li>وظيفة البحث عند الحاجة</li>
            </ul>
            
            <h3>أنماط تنقل الجوال:</h3>
            <ul>
                <li>قائمة hamburger</li>
                <li>شريط التنقل السفلي</li>
                <li>درج منزلق</li>
                <li>تنقل شريط التبويب</li>
                <li>تراكب كامل الشاشة</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Navigation System Examples",
            content: `
                <pre class="code-block">
/* Basic Horizontal Navigation */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding: 0;
}

.nav-link {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
}

.nav-link:hover {
    color: #007bff;
}

.nav-link.active {
    color: #007bff;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 2px;
    background: #007bff;
}

/* Mobile Navigation */
.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.mobile-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: white;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
    z-index: 2000;
}

.mobile-nav.open {
    right: 0;
}

.mobile-nav-links {
    list-style: none;
    padding: 2rem;
    margin: 0;
}

.mobile-nav-link {
    display: block;
    padding: 1rem 0;
    text-decoration: none;
    color: #333;
    border-bottom: 1px solid #f0f0f0;
    font-size: 1.1rem;
}

/* Dropdown Menu */
.dropdown {
    position: relative;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    min-width: 200px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    border-radius: 8px;
    padding: 0.5rem 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}

.dropdown:hover .dropdown-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-item {
    display: block;
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    color: #333;
    transition: background 0.3s ease;
}

.dropdown-item:hover {
    background: #f8f9fa;
}

/* Footer Navigation */
.footer-nav {
    background: #333;
    color: white;
    padding: 3rem 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-section h3 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-link {
    display: block;
    padding: 0.5rem 0;
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-link:hover {
    color: white;
}

/* Responsive Navigation */
@media (max-width: 768px) {
    .nav-links {
        display: none;
    }
    
    .mobile-menu-btn {
        display: block;
    }
    
    .navbar {
        padding: 1rem;
    }
}

/* Sticky Navigation with Scroll */
.navbar-scroll {
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
}

.navbar-scroll.scrolled {
    padding: 0.5rem 2rem;
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Navigation Practice",
            content: `
                <p>Build different navigation systems:</p>
                <ol>
                    <li>Create a responsive navbar that converts to mobile menu</li>
                    <li>Build a sidebar navigation for a dashboard layout</li>
                    <li>Design a mega menu with multiple columns and categories</li>
                    <li>Create a sticky navigation that changes on scroll</li>
                    <li>Build a footer with multiple navigation sections</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What are the most important accessibility considerations for navigation?",
            answer: "Use semantic nav elements, proper ARIA labels, keyboard navigation support, focus indicators, skip links for screen readers, meaningful link text, consistent placement, and ensure all interactive elements are accessible via keyboard and screen readers. Test with actual assistive technologies."
        },
        {
            question: "How do you decide between hamburger menu vs visible navigation on mobile?",
            answer: "Use visible navigation (tab bar) for 3-5 key destinations that users need frequent access to. Use hamburger menu for secondary navigation or when you have many items. Consider your user's goals - if they need quick access to core features, keep them visible. Test both approaches with real users."
        }
    ]
},

{
    id: "footer-designs",
    title: "Footer Design - Complete Website Closure",
    content: `
        <h3>Footer Structure:</h3>
        <ul>
            <li><strong>Main Footer</strong>: Links, content, and widgets</li>
            <li><strong>Secondary Footer</strong>: Copyright, legal links, social media</li>
            <li><strong>Sticky Footer</strong>: Always visible at bottom</li>
            <li><strong>Fixed Footer</strong>: Stays at bottom of viewport</li>
        </ul>
        
        <h3>Footer Content Areas:</h3>
        <ul>
            <li>Company information and logo</li>
            <li>Navigation links (sitemap)</li>
            <li>Contact information</li>
            <li>Social media links</li>
            <li>Newsletter signup</li>
            <li>Legal links (privacy, terms)</li>
            <li>Trust badges and certifications</li>
        </ul>
        
        <h3>Footer Design Patterns:</h3>
        <ul>
            <li>Simple single-column footer</li>
            <li>Multi-column link organization</li>
            <li>Brand-focused with large logo</li>
            <li>Content-rich with widgets</li>
            <li>Minimal with just essentials</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>هيكل التذييل:</h3>
            <ul>
                <li><strong>التذييل الرئيسي</strong>: الروابط، المحتوى، والأدوات المساعدة</li>
                <li><strong>التذييل الثانوي</strong>: حقوق النشر، الروابط القانونية، وسائل التواصل</li>
                <li><strong>التذييل اللاصق</strong>: مرئي دائمًا في الأسفل</li>
                <li><strong>التذييل الثابت</strong>: يبقى في أسفل منطقة العرض</li>
            </ul>
            
            <h3>مناطق محتوى التذييل:</h3>
            <ul>
                <li>معلومات الشركة والشعار</li>
                <li>روابط التنقل (خريطة الموقع)</li>
                <li>معلومات الاتصال</li>
                <li>روابط وسائل التواصل الاجتماعي</li>
                <li>اشتراك النشرة البريدية</li>
                <li>الروابط القانونية (الخصوصية، الشروط)</li>
                <li>شارات الثقة والشهادات</li>
            </ul>
            
            <h3>أنماط تصميم التذييل:</h3>
            <ul>
                <li>تذييل بسيط بعمود واحد</li>
                <li>تنظيم متعدد الأعمدة للروابط</li>
                <li>مركز على العلامة التجارية بشعار كبير</li>
                <li>غني بالمحتوى مع أدوات مساعدة</li>
                <li>بسيط بالضروريات فقط</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Footer Design Examples",
            content: `
                <pre class="code-block">
/* Main Footer Structure */
.footer {
    background: #2c3e50;
    color: white;
    padding: 3rem 0 0;
}

.footer-main {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 0 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.footer-section h3 {
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    color: #ecf0f1;
}

/* Footer Links */
.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-link {
    display: block;
    padding: 0.5rem 0;
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-link:hover {
    color: #3498db;
}

/* Contact Information */
.footer-contact .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    color: #bdc3c7;
}

.contact-icon {
    margin-right: 0.75rem;
    width: 20px;
    text-align: center;
}

/* Social Media Links */
.footer-social {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
}

.social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.1);
    border-radius: 50%;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
}

.social-link:hover {
    background: #3498db;
    transform: translateY(-2px);
}

/* Newsletter Signup */
.newsletter-form {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;
}

.newsletter-input {
    flex: 1;
    padding: 0.75rem;
    border: 1px solid #34495e;
    border-radius: 4px;
    background: #34495e;
    color: white;
}

.newsletter-input::placeholder {
    color: #95a5a6;
}

.newsletter-btn {
    background: #3498db;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.newsletter-btn:hover {
    background: #2980b9;
}

/* Footer Bottom */
.footer-bottom {
    background: #1a252f;
    padding: 1.5rem 2rem;
    margin-top: 3rem;
}

.footer-bottom-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 1rem;
}

.copyright {
    color: #95a5a6;
    margin: 0;
}

.footer-legal {
    display: flex;
    gap: 1.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.legal-link {
    color: #95a5a6;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s ease;
}

.legal-link:hover {
    color: #ecf0f1;
}

/* Sticky Footer */
.sticky-footer {
    position: sticky;
    top: 100vh;
}

/* Simple Footer */
.footer-simple {
    background: #f8f9fa;
    padding: 2rem;
    text-align: center;
    border-top: 1px solid #e9ecef;
}

.footer-simple .footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 1rem;
}

/* Responsive Footer */
@media (max-width: 768px) {
    .footer-main {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .footer-bottom-content {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-legal {
        justify-content: center;
    }
    
    .newsletter-form {
        flex-direction: column;
    }
}

/* Trust Badges */
.trust-badges {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1.5rem;
    flex-wrap: wrap;
}

.badge {
    background: rgba(255,255,255,0.1);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    font-size: 0.875rem;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Footer Design Practice",
            content: `
                <p>Create different footer designs:</p>
                <ol>
                    <li>Build a multi-column footer with company info, links, and contact</li>
                    <li>Create a simple minimal footer with just copyright and legal links</li>
                    <li>Design a footer with newsletter signup and social media</li>
                    <li>Build a sticky footer that always stays at bottom</li>
                    <li>Create a brand-focused footer with large logo and mission statement</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What content should always be included in a website footer?",
            answer: "Essential footer content includes: copyright notice, privacy policy and terms of service links, contact information, basic navigation links, and accessibility statement. Additional useful content: social media links, newsletter signup, sitemap, trust badges, and company information. The footer should help users complete tasks and find important information."
        },
        {
            question: "How do you design footers for different types of websites?",
            answer: "E-commerce: focus on customer service links and trust signals. Corporate: emphasize contact info and legal pages. Portfolio: keep it minimal with social links. Blog: include categories, tags, and subscription. SaaS: feature support links and documentation. Always consider your users' needs and the actions you want them to take from the footer."
        }
    ]
},

{
    id: "form-styling",
    title: "Form Styling - User-Friendly Inputs",
    content: `
        <h3>Form Components:</h3>
        <ul>
            <li><strong>Input Fields</strong>: Text, email, password, number</li>
            <li><strong>Select Menus</strong>: Dropdowns and multi-select</li>
            <li><strong>Checkboxes & Radio Buttons</strong>: Custom styling</li>
            <li><strong>Textareas</strong>: Multi-line text input</li>
            <li><strong>Buttons</strong>: Submit, reset, and action buttons</li>
            <li><strong>Labels & Validation</strong>: Error states and helper text</li>
        </ul>
        
        <h3>Form Design Principles:</h3>
        <ul>
            <li>Clear visual hierarchy</li>
            <li>Consistent spacing and alignment</li>
            <li>Meaningful placeholder text</li>
            <li>Accessible focus states</li>
            <li>Helpful error messages</li>
            <li>Progressive enhancement</li>
        </ul>
        
        <h3>Form Layout Patterns:</h3>
        <ul>
            <li>Single-column vertical forms</li>
            <li>Multi-column forms for related fields</li>
            <li>Inline forms for search and filters</li>
            <li>Wizard forms for multi-step processes</li>
            <li>Modal forms for quick actions</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>مكونات النموذج:</h3>
            <ul>
                <li><strong>حقول الإدخال</strong>: نص، بريد إلكتروني، كلمة مرور، رقم</li>
                <li><strong>قوائم التحديد</strong>: القوائم المنسدلة والتحديد المتعدد</li>
                <li><strong>مربعات الاختيار وأزرار الراديو</strong>: تنسيق مخصص</li>
                <li><strong>مناطق النص</strong>: إدخال نص متعدد الأسطر</li>
                <li><strong>الأزرار</strong>: إرسال، إعادة تعيين، وأزرار الإجراء</li>
                <li><strong>التسميات والتحقق</strong>: حالات الخطأ ونص المساعدة</li>
            </ul>
            
            <h3>مبادئ تصميم النموذج:</h3>
            <ul>
                <li>تسلسل هرمي مرئي واضح</li>
                <li>تباعد ومحاذاة متناسقة</li>
                <li>نص عنصر نائب ذو معنى</li>
                <li>حالات تركيز يمكن الوصول إليها</li>
                <li>رسائل خطأ مفيدة</li>
                <li>تحسين تدريجي</li>
            </ul>
            
            <h3>أنماط تخطيط النموذج:</h3>
            <ul>
                <li>نماذج رأسية بعمود واحد</li>
                <li>نماذج متعددة الأعمدة للحقول ذات الصلة</li>
                <li>نماذج مضمنة للبحث والمرشحات</li>
                <li>نماذج المعالج للعمليات متعددة الخطوات</li>
                <li>نماذج مشروطة للإجراءات السريعة</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Form Styling Examples",
            content: `
                <pre class="code-block">
/* Form Container */
.form-container {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    max-width: 500px;
    margin: 0 auto;
}

.form-title {
    margin-bottom: 1.5rem;
    text-align: center;
    color: #333;
}

/* Form Groups */
.form-group {
    margin-bottom: 1.5rem;
}

.form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #333;
}

.form-label.required::after {
    content: '*';
    color: #e74c3c;
    margin-left: 0.25rem;
}

/* Input Fields */
.form-input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
}

.form-input:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
}

.form-input::placeholder {
    color: #95a5a6;
}

/* Select Menus */
.form-select {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 1rem;
    background: white url("data:image/svg+xml,...") no-repeat right 1rem center;
    background-size: 12px;
    appearance: none;
}

/* Custom Checkboxes */
.checkbox-group {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
}

.custom-checkbox {
    position: relative;
    margin-right: 0.75rem;
}

.custom-checkbox input {
    position: absolute;
    opacity: 0;
}

.checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.checkbox-custom {
    width: 20px;
    height: 20px;
    border: 2px solid #e0e0e0;
    border-radius: 4px;
    margin-right: 0.75rem;
    position: relative;
    transition: all 0.3s ease;
}

.custom-checkbox input:checked + .checkbox-label .checkbox-custom {
    background: #3498db;
    border-color: #3498db;
}

.custom-checkbox input:checked + .checkbox-label .checkbox-custom::after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 14px;
}

/* Radio Buttons */
.radio-group {
    display: flex;
    gap: 1rem;
}

.custom-radio {
    position: relative;
}

.radio-label {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.radio-custom {
    width: 20px;
    height: 20px;
    border: 2px solid #e0e0e0;
    border-radius: 50%;
    margin-right: 0.75rem;
    position: relative;
    transition: all 0.3s ease;
}

.custom-radio input:checked + .radio-label .radio-custom {
    border-color: #3498db;
}

.custom-radio input:checked + .radio-label .radio-custom::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background: #3498db;
    border-radius: 50%;
}

/* Textareas */
.form-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 1rem;
    font-family: inherit;
    resize: vertical;
    min-height: 100px;
}

/* Form Validation */
.form-input.error {
    border-color: #e74c3c;
}

.form-input.success {
    border-color: #27ae60;
}

.error-message {
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.25rem;
    display: none;
}

.form-input.error + .error-message {
    display: block;
}

.helper-text {
    color: #95a5a6;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

/* Form Actions */
.form-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
}

.btn-primary {
    background: #3498db;
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.btn-primary:hover {
    background: #2980b9;
}

.btn-secondary {
    background: #95a5a6;
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
}

.btn-secondary:hover {
    background: #7f8c8d;
}

/* Inline Form */
.form-inline {
    display: flex;
    gap: 0.5rem;
}

.form-inline .form-input {
    flex: 1;
}

/* Multi-step Form */
.form-steps {
    display: flex;
    margin-bottom: 2rem;
    justify-content: space-between;
    position: relative;
}

.form-steps::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: #e0e0e0;
    transform: translateY(-50%);
}

.step {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
}

.step.active {
    background: #3498db;
    color: white;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Form Styling Practice",
            content: `
                <p>Create different form designs:</p>
                <ol>
                    <li>Build a login form with proper validation states</li>
                    <li>Create a registration form with multiple field types</li>
                    <li>Design a contact form with custom checkboxes and radio buttons</li>
                    <li>Build a search form with inline layout</li>
                    <li>Create a multi-step form with progress indicator</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What are the most important accessibility considerations for forms?",
            answer: "Always use label elements, ensure proper focus indicators, provide clear error messages, use fieldset and legend for grouped inputs, maintain logical tab order, support keyboard navigation, use ARIA attributes when needed, ensure sufficient color contrast, and test with screen readers. Every form control must have an associated label."
        },
        {
            question: "How do you handle form validation UX?",
            answer: "Provide real-time validation when possible, show errors near the relevant field, use both color and text for errors, don't rely solely on color, validate on blur and submit, show success states for correct inputs, keep error messages helpful and specific, and consider progressive enhancement for JavaScript-disabled scenarios."
        }
    ]
},
{
    id: "css-methodologies",
    title: "CSS Methodologies & Architecture",
    content: `
        <h3>Why CSS Methodologies?</h3>
        <p>As projects grow, CSS becomes harder to maintain. Methodologies provide structure and rules for scalable, maintainable code.</p>
        
        <h3>BEM (Block Element Modifier):</h3>
        <ul>
            <li><strong>Block</strong>: Standalone component (e.g., .menu, .button)</li>
            <li><strong>Element</strong>: Part of a block (e.g., .menu__item, .button__icon)</li>
            <li><strong>Modifier</strong>: Variation of a block/element (e.g., .button--large, .menu--dark)</li>
        </ul>
        
        <h3>Other Methodologies:</h3>
        <ul>
            <li><strong>SMACSS</strong>: Scalable and Modular Architecture</li>
            <li><strong>OOCSS</strong>: Object-Oriented CSS</li>
            <li><strong>ITCSS</strong>: Inverted Triangle CSS</li>
            <li><strong>Atomic CSS</strong>: Single-purpose utility classes</li>
        </ul>
        
        <h3>CSS Architecture Principles:</h3>
        <ul>
            <li>Separation of concerns (structure vs presentation)</li>
            <li>Consistent naming conventions</li>
            <li>Modular component-based structure</li>
            <li>Predictable specificity</li>
            <li>Reusable utility classes</li>
        </ul>
        
        <h3>File Organization Strategies:</h3>
        <ul>
            <li>Base/Reset styles</li>
            <li>Layout/grid systems</li>
            <li>Components/modules</li>
            <li>Utilities/helpers</li>
            <li>Themes/variants</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>لماذا منهجيات CSS؟</h3>
            <p>مع نمو المشاريع، يصبح CSS أكثر صعوبة في الصيانة. توفر المنهجيات هيكلاً وقواعدًا للقابلة للتطوير وسهلة الصيانة.</p>
            
            <h3>BEM (Block Element Modifier):</h3>
            <ul>
                <li><strong>Block</strong>: مكون مستقل (مثال: .menu, .button)</li>
                <li><strong>Element</strong>: جزء من كتلة (مثال: .menu__item, .button__icon)</li>
                <li><strong>Modifier</strong>: اختلاف في الكتلة/العنصر (مثال: .button--large, .menu--dark)</li>
            </ul>
            
            <h3>منهجيات أخرى:</h3>
            <ul>
                <li><strong>SMACSS</strong>: هندسة قابلة للتطوير ومعيارية</li>
                <li><strong>OOCSS</strong>: CSS كائنية التوجه</li>
                <li><strong>ITCSS</strong>: CSS المثلث المقلوب</li>
                <li><strong>Atomic CSS</strong>: فئات مساعدة ذات غرض واحد</li>
            </ul>
            
            <h3>مبادئ هندسة CSS:</h3>
            <ul>
                <li>فصل الاهتمامات (الهيكل مقابل العرض)</li>
                <li>اتفاقيات تسمية متناسقة</li>
                <li>هيكل معياري قائم على المكونات</li>
                <li>أولوية متوقعة</li>
                <li>فئات أدوات قابلة لإعادة الاستخدام</li>
            </ul>
            
            <h3>استراتيجيات تنظيم الملفات:</h3>
            <ul>
                <li>أنماط الأساس/إعادة التعيين</li>
                <li>أنظمة التخطيط/الشبكة</li>
                <li>المكونات/الوحدات</li>
                <li>الأدوات المساعدة</li>
                <li>السمات/المتغيرات</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "BEM Implementation Examples",
            content: `
                <pre class="code-block">
/* BEM Structure Example */
.card { /* Block */ }
.card__header { /* Element */ }
.card__title { /* Element */ }
.card__body { /* Element */ }
.card__footer { /* Element */ }
.card--featured { /* Modifier */ }
.card--dark { /* Modifier */ }

/* HTML Structure */
&lt;div class="card card--featured"&gt;
    &lt;div class="card__header"&gt;
        &lt;h3 class="card__title"&gt;Featured Card&lt;/h3&gt;
    &lt;/div&gt;
    &lt;div class="card__body"&gt;
        &lt;p&gt;Card content here&lt;/p&gt;
    &lt;/div&gt;
    &lt;div class="card__footer"&gt;
        &lt;button class="card__button"&gt;Action&lt;/button&gt;
    &lt;/div&gt;
&lt;/div&gt;

/* SMACSS Organization */
/* Base */
html, body { margin: 0; padding: 0; }
a { color: #007bff; }

/* Layout */
.l-header { grid-area: header; }
.l-main { grid-area: main; }
.l-sidebar { grid-area: sidebar; }

/* Module */
.button { /* component styles */ }
.media-object { /* component styles */ }

/* State */
.is-active { display: block; }
.is-hidden { display: none; }

/* Theme */
.theme-dark { background: #333; color: white; }

/* ITCSS Layers */
/* Settings - variables, config */
:root { --primary-color: #007bff; }

/* Tools - mixins, functions */
@mixin responsive($breakpoint) { /*...*/ }

/* Generic - reset, normalize */
* { box-sizing: border-box; }

/* Elements - base element styles */
h1, h2, h3 { margin: 0; }

/* Objects - layout patterns */
.o-container { max-width: 1200px; margin: 0 auto; }

/* Components - specific UI components */
.c-button { /*...*/ }

/* Utilities - helper classes */
.u-text-center { text-align: center; }
.u-mt-1 { margin-top: 1rem; }
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "CSS Architecture Practice",
            content: `
                <p>Practice CSS methodologies and architecture:</p>
                <ol>
                    <li>Refactor existing CSS to use BEM naming convention</li>
                    <li>Organize a project using SMACSS folder structure</li>
                    <li>Create a component library with consistent naming</li>
                    <li>Build utility classes for common patterns</li>
                    <li>Set up CSS architecture for a large-scale project</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What are the main benefits of using CSS methodologies like BEM?",
            answer: "BEM provides: Clear naming conventions that are self-documenting, reduced specificity conflicts, modular and reusable components, easier team collaboration, predictable styling, and better scalability for large projects. It makes CSS more maintainable and reduces style conflicts."
        },
        {
            question: "When should you use utility classes vs component classes?",
            answer: "Use utility classes for single-purpose, reusable styles (margin, padding, text alignment). Use component classes for complex, multi-property patterns that represent specific UI elements. Utility classes are great for layout and spacing, while component classes are better for self-contained UI components with multiple states."
        }
    ]
},
{
    id: "performance-optimization",
    title: "CSS Performance Optimization",
    content: `
        <h3>Why CSS Performance Matters:</h3>
        <p>CSS is render-blocking and affects Core Web Vitals like Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS).</p>
        
        <h3>Critical CSS:</h3>
        <ul>
            <li>Extract styles needed for above-the-fold content</li>
            <li>Inline critical CSS in &lt;head&gt;</li>
            <li>Load non-critical CSS asynchronously</li>
            <li>Tools: critical, penthouse, webpack plugins</li>
        </ul>
        
        <h3>Reducing Unused CSS:</h3>
        <ul>
            <li>Remove dead code with PurgeCSS</li>
            <li>Use CSS coverage tool in DevTools</li>
            <li>Modularize CSS with components</li>
            <li>Avoid overly generic selectors</li>
        </ul>
        
        <h3>Optimization Techniques:</h3>
        <ul>
            <li><strong>Minification</strong>: Remove whitespace and comments</li>
            <li><strong>Compression</strong>: Gzip/Brotli compression</li>
            <li><strong>Concatenation</strong>: Combine multiple files</li>
            <li><strong>CDN Delivery</strong>: Faster global distribution</li>
            <li><strong>Caching</strong>: Proper cache headers</li>
        </ul>
        
        <h3>CSS Delivery Optimization:</h3>
        <ul>
            <li>Preload important resources</li>
            <li>Use media attributes for conditional loading</li>
            <li>Implement lazy loading for non-critical CSS</li>
            <li>Reduce @import usage (causes render blocking)</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>لماذا أداء CSS مهم:</h3>
            <p>CSS تعيق التقدير وتؤثر على مؤشرات الويب الأساسية مثل أكبر رسم محتوى وتحول التخطيط التراكمي.</p>
            
            <h3>CSS الحرج:</h3>
            <ul>
                <li>استخرج الأنماط اللازمة للمحتوى فوق الطية</li>
                <li>أدرج CSS الحرج مضمنة في &lt;head&gt;</li>
                <li>حمّل CSS غير الحرجة بشكل غير متزامن</li>
                <li>الأدوات: critical, penthouse, إضافات webpack</li>
            </ul>
            
            <h3>تقليل CSS غير المستخدم:</h3>
            <ul>
                <li>أزل الكود الميت مع PurgeCSS</li>
                <li>استخدم أداة التغطية في أدوات المطور</li>
                <li>نمطية CSS مع المكونات</li>
                <li>تجنب المحددات العامة بشكل مفرط</li>
            </ul>
            
            <h3>تقنيات التحسين:</h3>
            <ul>
                <li><strong>التصغير</strong>: إزالة المسافات والتعليقات</li>
                <li><strong>الضغط</strong>: ضغط Gzip/Brotli</li>
                <li><strong>الدمج</strong>: اجمع ملفات متعددة</li>
                <li><strong>توصيل CDN</strong>: توزيع عالمي أسرع</li>
                <li><strong>التخزين المؤقت</strong>: رؤوس تخزين مؤقت مناسبة</li>
            </ul>
            
            <h3>تحسين توصيل CSS:</h3>
            <ul>
                <li>حمّل مسبقًا الموارد المهمة</li>
                <li>استخدم سمات الوسائط للتحميل الشرطي</li>
                <li>نفذ التحميل المتأخر لـ CSS غير الحرجة</li>
                <li>قلل استخدام @import (يسبب عرقلة التقديم)</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Performance Optimization Examples",
            content: `
                <pre class="code-block">
/* Critical CSS Inlining */
&lt;style&gt;
/* Above-the-fold styles only */
.header { background: #fff; }
.hero { background: url('hero.jpg'); }
/* ... other critical styles */
&lt;/style&gt;

&lt;link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'"&gt;
&lt;noscript&gt;&lt;link rel="stylesheet" href="styles.css"&gt;&lt;/noscript&gt;

/* Media Attribute for Conditional Loading */
&lt;link rel="stylesheet" href="print.css" media="print"&gt;
&lt;link rel="stylesheet" href="mobile.css" media="(max-width: 768px)"&gt;
&lt;link rel="stylesheet" href="desktop.css" media="(min-width: 769px)"&gt;

/* CSS Minification Example */
/* Before */
.button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
}

/* After */
.button{background-color:#007bff;color:#fff;padding:10px 20px;border-radius:4px}

/* Efficient Selectors */
/* Inefficient */
div nav ul li a { color: blue; }

/* Efficient */
.nav-link { color: blue; }

/* Reduce Recalculation with transforms/opacity */
/* Good for performance */
.animate-fast {
    transform: translateX(100px);
    opacity: 0.5;
}

/* May cause layout recalc */
.animate-slow {
    margin-left: 100px;
    width: 200px;
}

/* CSS Containment for Performance */
.isolated-component {
    contain: layout style paint;
    /* Browser can optimize rendering */
}

/* Reduce CSS Complexity */
/* Complex - harder to parse */
.card :not(.disabled):hover > .icon ~ .text {
    color: red;
}

/* Simple - easier to parse */
.card:hover .text {
    color: red;
}

.card.disabled { pointer-events: none; }

/* Font Loading Optimization */
@font-face {
    font-family: 'CustomFont';
    src: url('font.woff2') format('woff2');
    font-display: swap; /* Don't block rendering */
    font-weight: 400;
}

.optimized-font {
    font-family: 'CustomFont', sans-serif;
    /* Use system font until custom loads */
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Performance Optimization Practice",
            content: `
                <p>Practice CSS performance optimization:</p>
                <ol>
                    <li>Audit a website using Chrome DevTools Coverage tool</li>
                    <li>Implement critical CSS extraction and inlining</li>
                    <li>Set up PurgeCSS to remove unused styles</li>
                    <li>Optimize font loading with font-display</li>
                    <li>Create a performance budget and measure improvements</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What is the impact of CSS on Core Web Vitals?",
            answer: "CSS affects LCP (Largest Contentful Paint) by blocking rendering until downloaded and parsed. It affects CLS (Cumulative Layout Shift) through loading of fonts, images in CSS, and layout changes. FID (First Input Delay) can be impacted if CSS parsing blocks the main thread. Optimizing CSS delivery is crucial for good scores."
        },
        {
            question: "How do you identify and remove unused CSS?",
            answer: "Use Chrome DevTools Coverage tool to see unused bytes, analyze bundle size with webpack-bundle-analyzer, implement PurgeCSS in build process, regularly audit CSS with tools like CSS Stats, remove legacy features, and use component-based architecture to naturally reduce unused CSS through modularity."
        }
    ]
},
{
    id: "cross-browser-compatibility",
    title: "Cross-Browser Compatibility & Vendor Prefixes",
    content: `
        <h3>Browser Compatibility Challenges:</h3>
        <p>Different browsers implement CSS features at different times and with varying levels of support.</p>
        
        <h3>Vendor Prefixes:</h3>
        <ul>
            <li><strong>-webkit-</strong>: Chrome, Safari, newer Edge</li>
            <li><strong>-moz-</strong>: Firefox</li>
            <li><strong>-ms-</strong>: Internet Explorer, old Edge</li>
            <li><strong>-o-</strong>: Opera (older versions)</li>
        </ul>
        
        <h3>Progressive Enhancement Strategy:</h3>
        <ul>
            <li>Build for most capable browsers first</li>
            <li>Add fallbacks for older browsers</li>
            <li>Use feature detection (@supports)</li>
            <li>Provide graceful degradation</li>
        </ul>
        
        <h3>Common Compatibility Issues:</h3>
        <ul>
            <li>Flexbox and Grid in older browsers</li>
            <li>CSS Variables support</li>
            <li>Position: sticky behavior</li>
            <li>CSS Grid auto-placement differences</li>
            <li>Viewport units calculation</li>
        </ul>
        
        <h3>Tools and Resources:</h3>
        <ul>
            <li>Can I Use (caniuse.com)</li>
            <li>BrowserStack for testing</li>
            <li>Autoprefixer for automatic prefixes</li>
            <li>PostCSS with plugins</li>
            <li>Modernizr for feature detection</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>تحديات توافق المتصفحات:</h3>
            <p>تطبق المتصفحات المختلفة ميزات CSS في أوقات مختلفة وبمستويات دعم متفاوتة.</p>
            
            <h3>بادئات البائعين:</h3>
            <ul>
                <li><strong>-webkit-</strong>: Chrome, Safari, Edge الجديد</li>
                <li><strong>-moz-</strong>: Firefox</li>
                <li><strong>-ms-</strong>: Internet Explorer, Edge القديم</li>
                <li><strong>-o-</strong>: Opera (الإصدارات الأقدم)</li>
            </ul>
            
            <h3>استراتيجية التحسين التدريجي:</h3>
            <ul>
                <li>ابنِ لأقوى المتصفحات أولاً</li>
                <li>أضف بدائل للمتصفحات الأقدم</li>
                <li>استخدم كشف الميزات (@supports)</li>
                <li>وفر تدهورًا أنيقًا</li>
            </ul>
            
            <h3>مشاكل التوافق الشائعة:</h3>
            <ul>
                <li>Flexbox و Grid في المتصفحات الأقدم</li>
                <li>دعم متغيرات CSS</li>
                <li>سلوك Position: sticky</li>
                <li>اختلافات وضع CSS Grid التلقائي</li>
                <li>حساب وحدات منطقة العرض</li>
            </ul>
            
            <h3>الأدوات والموارد:</h3>
            <ul>
                <li>Can I Use (caniuse.com)</li>
                <li>BrowserStack للاختبار</li>
                <li>Autoprefixer للبادئات التلقائية</li>
                <li>PostCSS مع الإضافات</li>
                <li>Modernizr لكشف الميزات</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Cross-Browser Compatibility Examples",
            content: `
                <pre class="code-block">
/* Vendor Prefixes for Flexbox */
.container {
    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
}

/* Using @supports for Feature Detection */
@supports (display: grid) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

@supports not (display: grid) {
    .container {
        display: flex;
        flex-wrap: wrap;
    }
    
    .container > * {
        flex: 1 1 300px;
    }
}

/* Gradient with Fallbacks */
.background {
    background: #ccc; /* Fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f5f5f5, #ccc); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f5f5f5, #ccc); /* Standard syntax */
}

/* CSS Grid with Fallback */
.layout {
    display: flex; /* Fallback */
    flex-wrap: wrap;
}

@supports (display: grid) {
    .layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
    }
}

/* Sticky Positioning Fallback */
.sticky-element {
    position: relative; /* Fallback */
}

@supports (position: sticky) {
    .sticky-element {
        position: sticky;
        top: 0;
    }
}

/* CSS Variables with Fallback */
:root {
    --primary-color: #007bff;
}

.button {
    background: #007bff; /* Fallback */
    background: var(--primary-color);
}

/* Using Autoprefixer (what it does) */
/* Input */
.container {
    display: flex;
    transform: rotate(45deg);
    user-select: none;
}

/* Output */
.container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Handling IE Specific Issues */
/* IE 10+ */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .ie-only-fix {
        /* IE specific styles */
    }
}

/* Firefox Specific */
@-moz-document url-prefix() {
    .firefox-fix {
        /* Firefox specific styles */
    }
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Cross-Browser Testing Practice",
            content: `
                <p>Practice cross-browser compatibility:</p>
                <ol>
                    <li>Test a website in multiple browsers and identify issues</li>
                    <li>Implement vendor prefixes for modern CSS features</li>
                    <li>Create fallbacks for CSS Grid using Flexbox</li>
                    <li>Use @supports for progressive enhancement</li>
                    <li>Set up Autoprefixer in a build process</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "Should you always use vendor prefixes for all CSS properties?",
            answer: "No, only for properties that are still experimental or not fully standardized. Use tools like Autoprefixer to automatically add only the necessary prefixes based on your browser support requirements. For stable properties, the standard version is usually sufficient in modern browsers."
        },
        {
            question: "What's the difference between progressive enhancement and graceful degradation?",
            answer: "Progressive enhancement starts with a basic experience that works everywhere, then enhances for capable browsers. Graceful degradation starts with the full experience and provides fallbacks for older browsers. Progressive enhancement is generally preferred as it's more inclusive and future-proof."
        }
    ]
},
{
    id: "accessibility-deep-dive",
    title: "Accessibility (A11y) Deep Dive",
    content: `
        <h3>Why Web Accessibility Matters:</h3>
        <p>Accessibility ensures your website can be used by people with disabilities, including visual, auditory, motor, and cognitive impairments.</p>
        
        <h3>WCAG Guidelines (Web Content Accessibility Guidelines):</h3>
        <ul>
            <li><strong>Perceivable</strong>: Content must be presentable to users in ways they can perceive</li>
            <li><strong>Operable</strong>: Interface components must be operable by all users</li>
            <li><strong>Understandable</strong>: Content and operation must be understandable</li>
            <li><strong>Robust</strong>: Content must be robust enough to work with current and future tools</li>
        </ul>
        
        <h3>CSS Accessibility Features:</h3>
        <ul>
            <li><strong>Focus Indicators</strong>: Visible focus styles for keyboard navigation</li>
            <li><strong>Reduced Motion</strong>: Respect user motion preferences</li>
            <li><strong>High Contrast</strong>: Support for high contrast modes</li>
            <li><strong>Text Scaling</strong: Flexible layouts that support text zoom</li>
            <li><strong>Semantic Structure</strong>: Proper heading hierarchy and landmarks</li>
        </ul>
        
        <h3>Common Accessibility Issues:</h3>
        <ul>
            <li>Insufficient color contrast</li>
            <li>Missing focus styles</li>
            <li>Poor text scaling support</li>
            <li>Inaccessible form labels</li>
            <li>Non-descriptive link text</li>
            <li>Auto-playing media without controls</li>
        </ul>
        
        <h3>Testing for Accessibility:</h3>
        <ul>
            <li>Keyboard navigation testing</li>
            <li>Screen reader testing</li>
            <li>Color contrast checkers</li>
            <li>Automated accessibility scanners</li>
            <li>Manual testing with disabilities</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>لماذا إمكانية الوصول على الويب مهمة:</h3>
            <p>تضمن إمكانية الوصول أن موقعك الإلكتروني يمكن استخدامه من قبل الأشخاص ذوي الإعاقات، بما في ذلك الإعاقات البصرية والسمعية والحركية والإدراكية.</p>
            
            <h3>إرشادات WCAG (إرشادات إمكانية الوصول لمحتوى الويب):</h3>
            <ul>
                <li><strong>يمكن إدراكه</strong>: يجب أن يكون المحتوى قابلاً للتقديم للمستخدمين بطرق يمكنهم إدراكها</li>
                <li><strong>قابل للتشغيل</strong>: يجب أن تكون مكونات الواجهة قابلة للتشغيل من قبل جميع المستخدمين</li>
                <li><strong>يمكن فهمه</strong>: يجب أن يكون المحتوى والتشغيل مفهومين</li>
                <li><strong>قوي</strong>: يجب أن يكون المحتوى قويًا بما يكفي للعمل مع الأدوات الحالية والمستقبلية</li>
            </ul>
            
            <h3>ميزات إمكانية الوصول في CSS:</h3>
            <ul>
                <li><strong>مؤشرات التركيز</strong>: أنماط تركيز مرئية للتنقل بلوحة المفاتيح</li>
                <li><strong>الحركة المخفضة</strong>: احترام تفضيلات حركة المستخدم</li>
                <li><strong>التباين العالي</strong>: الدعم لأنماط التباين العالي</li>
                <li><strong>تحجيم النص</strong>: تخطيطات مرنة تدعم تكبير النص</li>
                <li><strong>الهيكل الدلالي</strong>: تسلسل عناوين سليم ومعالم</li>
            </ul>
            
            <h3>مشاكل إمكانية الوصول الشائعة:</h3>
            <ul>
                <li>تباين لوني غير كافٍ</li>
                <li>أنماط تركيز مفقودة</li>
                <li>دعم ضعيف لتحجيم النص</li>
                <li>تسميات نماذج غير قابلة للوصول</li>
                <li>نص رابط غير وصفي</li>
                <li>وسائط تشغيل تلقائي بدون ضوابط</li>
            </ul>
            
            <h3>الاختبار من أجل إمكانية الوصول:</h3>
            <ul>
                <li>اختبار التنقل بلوحة المفاتيح</li>
                <li>اختبار قارئ الشاشة</li>
                <li>مدققات تباين الألوان</li>
                <li>ماسحات إمكانية الوصول الآلية</li>
                <li>اختبار يدوي مع الإعاقات</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Accessibility Implementation Examples",
            content: `
                <pre class="code-block">
/* Focus Styles */
.button:focus {
    outline: 3px solid #007bff;
    outline-offset: 2px;
}

/* Don't remove outline completely */
.button:focus:not(:focus-visible) {
    outline: none;
}

.button:focus-visible {
    outline: 3px solid #007bff;
    outline-offset: 2px;
}

/* Reduced Motion Support */
.animation {
    animation: slideIn 0.5s ease;
}

@media (prefers-reduced-motion: reduce) {
    .animation {
        animation-duration: 0.01ms;
        animation-iteration-count: 1;
    }
}

/* High Contrast Support */
@media (prefers-contrast: high) {
    .button {
        border: 2px solid currentColor;
        background: white;
        color: black;
    }
}

/* Text Scaling Support */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}

/* Use rem/em for scalable spacing */
.text-element {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    line-height: 1.5;
}

/* Skip Links for Keyboard Users */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
}

.skip-link:focus {
    top: 6px;
}

/* Accessible Form Styling */
.form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

.form-input {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ccc;
    border-radius: 4px;
}

.form-input:invalid {
    border-color: #e74c3c;
}

.form-input:valid {
    border-color: #27ae60;
}

.error-message {
    color: #e74c3c;
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

/* Hide content visually but keep for screen readers */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Accessible Color Contrast */
.good-contrast {
    color: #000000;
    background: #ffffff;
}

.bad-contrast {
    color: #888888;
    background: #f0f0f0;
}

/* Print Styles for Accessibility */
@media print {
    .no-print {
        display: none;
    }
    
    body {
        font-size: 12pt;
        line-height: 1.4;
        color: black;
        background: white;
    }
    
    a::after {
        content: " (" attr(href) ")";
    }
}

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    :root {
        --background: #1a1a1a;
        --text: #ffffff;
        --primary: #4dabf7;
    }
}

.theme-auto {
    background: var(--background);
    color: var(--text);
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Accessibility Practice",
            content: `
                <p>Practice web accessibility implementation:</p>
                <ol>
                    <li>Test a website using only keyboard navigation</li>
                    <li>Implement proper focus indicators for all interactive elements</li>
                    <li>Add reduced motion support for animations</li>
                    <li>Ensure color contrast meets WCAG guidelines</li>
                    <li>Create accessible form validation with clear error messages</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What are the minimum WCAG compliance levels and what do they mean?",
            answer: "WCAG has three levels: A (minimum accessibility), AA (standard compliance including color contrast and navigation), and AAA (enhanced accessibility including sign language and extended color contrast). Most organizations aim for AA compliance as it addresses the major barriers for disabled users while being practically achievable."
        },
        {
            question: "Why is it important to test with actual screen readers rather than just automated tools?",
            answer: "Automated tools can only catch about 30-40% of accessibility issues. Screen reader testing reveals how users actually experience and navigate your site, uncovering issues with reading order, context, dynamic content updates, and complex interactions that automated tools miss. It provides the real user experience perspective."
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