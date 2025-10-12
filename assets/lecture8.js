// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete CSS Mastery",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
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
    id: "layout-games-projects",
    title: "Flexbox & Grid Games - Interactive Learning",
    content: `
        <h3>Flexbox Froggy Game Concepts:</h3>
        <ul>
            <li><strong>justify-content</strong>: Aligning items along main axis</li>
            <li><strong>align-items</strong>: Aligning items along cross axis</li>
            <li><strong>flex-direction</strong>: Row vs column layouts</li>
            <li><strong>order</strong>: Controlling visual order</li>
            <li><strong>align-self</strong>: Individual item alignment</li>
        </ul>
        
        <h3>Grid Garden Game Concepts:</h3>
        <ul>
            <li><strong>grid-template-columns/rows</strong>: Defining track sizes</li>
            <li><strong>grid-column/row</strong>: Item placement</li>
            <li><strong>grid-area</strong>: Named area placement</li>
            <li><strong>grid-template-areas</strong>: Visual layout system</li>
            <li><strong>fr units</strong>: Fractional space distribution</li>
        </ul>
        
        <h3>Positioning Challenges:</h3>
        <ul>
            <li><strong>CSS Battle</strong>: Pixel-perfect positioning</li>
            <li><strong>CSS Diner</strong>: Selector mastery</li>
            <li><strong>Flexbox Defense</strong>: Tower defense with Flexbox</li>
            <li><strong>CSS Games</strong>: https://css.city/practice/playing-games.html</li>
        </ul>
        
        <h3>Real Project Applications:</h3>
        <ul>
            <li>CSS Art with positioning</li>
            <li>Responsive dashboards with Grid</li>
            <li>Interactive navigation with Flexbox</li>
            <li>Photo galleries with absolute positioning</li>
            <li>Modal systems with fixed positioning</li>
        </ul>
        
        <h3>Game-Based Learning Benefits:</h3>
        <ul>
            <li>Immediate visual feedback</li>
            <li>Progressive difficulty</li>
            <li>Practical problem-solving</li>
            <li>Memory retention through repetition</li>
            <li>Fun and engaging practice</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>مفاهيم لعبة Flexbox Froggy:</h3>
            <ul>
                <li><strong>justify-content</strong>: محاذاة العناصر على طول المحور الرئيسي</li>
                <li><strong>align-items</strong>: محاذاة العناصر على طول المحور العرضي</li>
                <li><strong>flex-direction</strong>: تخطيطات الصف مقابل العمود</li>
                <li><strong>order</strong>: التحكم في الترتيب البصري</li>
                <li><strong>align-self</strong>: محاذاة العناصر الفردية</li>
            </ul>
            
            <h3>مفاهيم لعبة Grid Garden:</h3>
            <ul>
                <li><strong>grid-template-columns/rows</strong>: تحديد أحجام المسارات</li>
                <li><strong>grid-column/row</strong>: وضع العنصر</li>
                <li><strong>grid-area</strong>: وضع المنطقة المسماة</li>
                <li><strong>grid-template-areas</strong>: نظام التخطيط البصري</li>
                <li><strong>وحدات fr</strong>: توزيع المساحة الكسرية</li>
            </ul>
            
            <h3>تحديات الوضع:</h3>
            <ul>
                <li><strong>CSS Battle</strong>: وضع دقيق للبكسل</li>
                <li><strong>CSS Diner</strong>: إتقان المحددات</li>
                <li><strong>Flexbox Defense</strong>: دفاع البرج مع Flexbox</li>
            </ul>
            
            <h3>تطبيقات المشاريع الحقيقية:</h3>
            <ul>
                <li>فن CSS مع الوضع</li>
                <li>لوحات تحكم متجاوبة مع الشبكة</li>
                <li>تنقل تفاعلي مع Flexbox</li>
                <li>معارض الصور مع الوضع المطلق</li>
                <li>أنظمة مشروطة مع الوضع الثابت</li>
            </ul>
            
            <h3>فوائد التعلم القائم على الألعاب:</h3>
            <ul>
                <li>ملاحظات بصرية فورية</li>
                <li>صعوبة تدريجية</li>
                <li>حل المشكلات العملي</li>
                <li>الاحتفاظ بالذاكرة من خلال التكرار</li>
                <li>ممارسة ممتعة وجذابة</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Flexbox Froggy Solutions",
            content: `
                <pre class="code-block">
/* Level 1: Basic justify-content */
#pond {
    display: flex;
    justify-content: flex-end;
}

/* Level 5: justify-content with space-between */
#pond {
    display: flex;
    justify-content: space-between;
}

/* Level 8: flex-direction column */
#pond {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

/* Level 13: align-items and justify-content */
#pond {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
}

/* Level 18: order property */
#pond {
    display: flex;
    align-items: flex-start;
}

.yellow {
    order: 1;
}

/* Level 21: align-self */
#pond {
    display: flex;
    align-items: flex-start;
}

.yellow {
    align-self: flex-end;
}

/* Level 24: All properties combined */
#pond {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: flex-end;
}
                </pre>
            `
        },
        {
            title: "Grid Garden Solutions",
            content: `
                <pre class="code-block">
/* Level 1: Basic grid-column */
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 1;
}

/* Level 5: grid-column span */
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 2 / 6;
}

/* Level 9: grid-row */
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-row: 1 / 6;
}

/* Level 13: grid-area */
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-area: 1 / 2 / 4 / 6;
}

/* Level 18: grid-template-areas */
#garden {
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 20% 20% 20% 20% 20%;
    grid-template-areas: 
        ". . . . ."
        ". . . . ."
        ". . water water ."
        ". . water water ."
        ". . . . .";
}

#water {
    grid-area: water;
}

/* Level 24: fr units */
#garden {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 20% 20% 20% 20% 20%;
}

#water {
    grid-column: 1;
    grid-row: 1 / 6;
}
                </pre>
            `
        },
        {
            title: "Real Project Layouts",
            content: `
                <pre class="code-block">
/* Dashboard Layout with CSS Grid */
.dashboard {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "sidebar stats charts"
        "footer footer footer";
    grid-template-columns: 250px 1fr 1fr;
    grid-template-rows: 80px 1fr 300px 60px;
    gap: 20px;
    height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.stats { grid-area: stats; }
.charts { grid-area: charts; }
.footer { grid-area: footer; }

/* Navigation with Flexbox */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
}

.nav-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
}

/* Photo Gallery with Positioning */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 2rem;
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.gallery-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,0.7);
    color: white;
    padding: 1rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
    transform: translateY(0);
}

.gallery-item:hover img {
    transform: scale(1.1);
}

/* Modal System with Fixed Positioning */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
}

.modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

/* CSS Art with Absolute Positioning */
.face {
    position: relative;
    width: 200px;
    height: 200px;
    background: #ffdbac;
    border-radius: 50%;
    margin: 50px auto;
}

.eye {
    position: absolute;
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
    top: 50px;
}

.eye.left { left: 50px; }
.eye.right { right: 50px; }

.pupil {
    position: absolute;
    width: 15px;
    height: 15px;
    background: black;
    border-radius: 50%;
    top: 7px;
    left: 7px;
}

.mouth {
    position: absolute;
    width: 80px;
    height: 40px;
    background: #e75480;
    border-radius: 0 0 40px 40px;
    bottom: 40px;
    left: 60px;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Layout Games & Projects Practice",
            content: `
                <p>Practice with interactive layout games and projects:</p>
                <ol>
                    <li>Complete all levels of Flexbox Froggy to master Flexbox</li>
                    <li>Solve all Grid Garden challenges to master CSS Grid</li>
                    <li>Create a pixel-perfect replica using CSS Battle</li>
                    <li>Build a responsive dashboard layout using CSS Grid areas</li>
                    <li>Create an interactive navigation system with Flexbox</li>
                    <li>Build a modal system with fixed positioning</li>
                    <li>Create CSS art using absolute positioning techniques</li>
                    <li>Build a photo gallery with hover effects and overlays</li>
                    <li>Implement a sticky header that changes on scroll</li>
                    <li>Create a masonry layout using CSS Grid or Flexbox</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What are the best resources for practicing CSS layouts interactively?",
            answer: "Flexbox Froggy for Flexbox, Grid Garden for CSS Grid, CSS Battle for precision positioning, CSS Diner for selector mastery, Flexbox Defense for game-based Flexbox learning, and CodePen challenges for real-world projects. These resources provide immediate feedback and progressive learning curves."
        },
        {
            question: "How do games help in learning CSS positioning and layouts?",
            answer: "Games provide visual feedback, make learning engaging through challenges, offer progressive difficulty that builds skills gradually, create memorable scenarios that aid retention, and turn abstract concepts into concrete problems. They also encourage experimentation and immediate application of concepts in a low-stakes environment."
        },
        {
            question: "What real-world projects best demonstrate mastery of CSS layouts?",
            answer: "Responsive dashboards show Grid mastery, complex navigation systems demonstrate Flexbox skills, modal and overlay systems showcase positioning knowledge, photo galleries combine multiple layout techniques, CSS art demonstrates precision positioning, and full website layouts integrate all concepts together in practical applications."
        }
    ]
},
{
    id: "css-units",
    title: "CSS Units & Measurements - Complete Guide",
    content: `
        <h3>Absolute Units:</h3>
        <ul>
            <li><strong>px</strong>: Pixels (1px = 1/96th of 1in)</li>
            <li><strong>pt</strong>: Points (1pt = 1/72nd of 1in)</li>
            <li><strong>pc</strong>: Picas (1pc = 12pt)</li>
            <li><strong>in</strong>: Inches (1in = 96px = 2.54cm)</li>
            <li><strong>cm</strong>: Centimeters</li>
            <li><strong>mm</strong>: Millimeters</li>
        </ul>
        
        <h3>Relative Units:</h3>
        <ul>
            <li><strong>%</strong>: Percentage of parent element</li>
            <li><strong>em</strong>: Relative to font-size of element</li>
            <li><strong>rem</strong>: Relative to font-size of root element</li>
            <li><strong>vw</strong>: 1% of viewport width</li>
            <li><strong>vh</strong>: 1% of viewport height</li>
            <li><strong>vmin</strong>: 1% of viewport's smaller dimension</li>
            <li><strong>vmax</strong>: 1% of viewport's larger dimension</li>
            <li><strong>ch</strong>: Width of the "0" character</li>
            <li><strong>ex</strong>: Height of the "x" character</li>
        </ul>
        
        <h3>When to Use Which Unit:</h3>
        <ul>
            <li><strong>px</strong>: Borders, fixed-size elements</li>
            <li><strong>rem</strong>: Font sizes, padding, margins (recommended)</li>
            <li><strong>em</strong>: Components that should scale with their context</li>
            <li><strong>%</strong>: Layout containers, widths</li>
            <li><strong>vw/vh</strong>: Full-screen layouts, hero sections</li>
            <li><strong>ch</strong>: Typography, code blocks, reading measures</li>
        </ul>
        
        <h3>Best Practices:</h3>
        <ul>
            <li>Use rem for most sizing (prevents compounding issues)</li>
            <li>Set root font-size to 62.5% for easier rem calculations (1rem = 10px)</li>
            <li>Use em for properties that should scale with font-size</li>
            <li>Combine vw/vh with clamp() for fluid typography</li>
            <li>Use ch units for optimal line lengths (45-75 characters)</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>الوحدات المطلقة:</h3>
            <ul>
                <li><strong>px</strong>: البكسل (1px = 1/96 من 1 بوصة)</li>
                <li><strong>pt</strong>: النقاط (1pt = 1/72 من 1 بوصة)</li>
                <li><strong>pc</strong>: البيكا (1pc = 12pt)</li>
                <li><strong>in</strong>: البوصة (1in = 96px = 2.54cm)</li>
                <li><strong>cm</strong>: السنتيمتر</li>
                <li><strong>mm</strong>: المليمتر</li>
            </ul>
            
            <h3>الوحدات النسبية:</h3>
            <ul>
                <li><strong>%</strong>: النسبة المئوية للعنصر الأب</li>
                <li><strong>em</strong>: نسبة إلى حجم خط العنصر</li>
                <li><strong>rem</strong>: نسبة إلى حجم خط العنصر الجذر</li>
                <li><strong>vw</strong>: 1% من عرض منطقة العرض</li>
                <li><strong>vh</strong>: 1% من ارتفاع منطقة العرض</li>
                <li><strong>vmin</strong>: 1% من البعد الأصغر لمنطقة العرض</li>
                <li><strong>vmax</strong>: 1% من البعد الأكبر لمنطقة العرض</li>
                <li><strong>ch</strong>: عرض حرف "0"</li>
                <li><strong>ex</strong>: ارتفاع حرف "x"</li>
            </ul>
            
            <h3>متى تستخدم كل وحدة:</h3>
            <ul>
                <li><strong>px</strong>: الحدود، العناصر ذات الحجم الثابت</li>
                <li><strong>rem</strong>: أحجام الخطوط، الحشو، الهوامش (موصى به)</li>
                <li><strong>em</strong>: المكونات التي يجب أن تتطابق مع سياقها</li>
                <li><strong>%</strong>: حاويات التخطيط، الأعرض</li>
                <li><strong>vw/vh</strong>: تخطيطات كاملة الشاشة، أقسام البطل</li>
                <li><strong>ch</strong>: الطباعة، كتل الكود، مقاييس القراءة</li>
            </ul>
            
            <h3>أفضل الممارسات:</h3>
            <ul>
                <li>استخدم rem لمعظم الأحجام (يمنع مشاكل التراكم)</li>
                <li>اضبط حجم الخط الجذري على 62.5% لسهولة حساب rem (1rem = 10px)</li>
                <li>استخدم em للخصائص التي يجب أن تتطابق مع حجم الخط</li>
                <li>اجمع vw/vh مع clamp() للطباعة السائلة</li>
                <li>استخدم وحدات ch لأطوال الأسطر المثلى (75-45 حرفًا)</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "CSS Units Implementation",
            content: `
                <pre class="code-block">
/* Root font-size trick for easy rem calculations */
html {
    font-size: 62.5%; /* 1rem = 10px */
}

body {
    font-size: 1.6rem; /* 16px */
}

/* Using different units */
.container {
    width: 90%; /* Percentage of parent */
    max-width: 120rem; /* 1200px */
    margin: 0 auto;
    padding: 2rem; /* 20px */
}

.heading {
    font-size: 3.2rem; /* 32px */
    margin-bottom: 1.6rem; /* 16px */
}

.paragraph {
    font-size: 1.8rem; /* 18px */
    line-height: 1.6; /* Unitless - multiplies font-size */
    max-width: 60ch; /* Optimal reading width */
}

/* Fluid typography with clamp() */
.fluid-heading {
    font-size: clamp(2.4rem, 5vw, 4.8rem);
}

/* Viewport units for full-screen sections */
.hero-section {
    height: 100vh; /* Full viewport height */
    width: 100vw; /* Full viewport width */
    padding: 5vmin; /* Uses smaller viewport dimension */
}

/* Em units for scalable components */
.card {
    font-size: 1.6rem;
    padding: 1em; /* 16px - scales with font-size */
}

.card--large {
    font-size: 2rem; /* Now padding becomes 20px */
}

/* Complex unit combinations */
.responsive-container {
    width: min(90%, 120rem); /* Uses smaller value */
    height: max(50vh, 40rem); /* Uses larger value */
    padding: clamp(2rem, 4vw, 4rem);
}

/* ch units for typography */
.article-content {
    max-width: 65ch; /* Optimal line length for reading */
    line-height: 1.7;
}

/* ex units for vertical rhythm */
.icon-button::before {
    content: "↑";
    font-size: 2ex; /* Relative to font's x-height */
    vertical-align: middle;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "CSS Units Practice",
            content: `
                <p>Practice with CSS units and measurements:</p>
                <ol>
                    <li>Create a responsive layout using rem units for all spacing</li>
                    <li>Build a full-screen hero section using vw and vh units</li>
                    <li>Implement fluid typography with clamp() function</li>
                    <li>Create a reading-optimized layout using ch units</li>
                    <li>Build a component that scales using em units</li>
                    <li>Experiment with viewport units for responsive containers</li>
                    <li>Create a grid system using percentage and rem units</li>
                    <li>Implement a spacing scale using CSS custom properties with rem</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between em and rem units?",
            answer: "em is relative to the font-size of the current element (can compound), while rem is relative to the root element's font-size (consistent across all elements). Use em for properties that should scale with their local context, and rem for consistent spacing and sizing throughout your application to avoid compounding issues."
        },
        {
            question: "When should you use viewport units vs percentage units?",
            answer: "Use viewport units (vw, vh) when you want elements to scale relative to the browser window size. Use percentage units when you want elements to scale relative to their parent container. Viewport units are great for full-screen layouts, while percentage units are better for component-level responsive design within their containers."
        },
        {
            question: "Why is the 62.5% font-size trick useful?",
            answer: "Setting the root font-size to 62.5% makes 1rem equal to 10px (assuming browser default of 16px), which makes mental math much easier. 1.6rem = 16px, 2.4rem = 24px, etc. This maintains accessibility (users can still zoom) while providing a convenient calculation system."
        }
    ]
},
{
    id: "css-small-properties",
    title: "Small but Powerful CSS Properties",
    content: `
        <h3>Cursor Property:</h3>
        <p>Controls the mouse cursor appearance when hovering over an element.</p>
        <ul>
            <li><strong>pointer</strong>: Hand cursor for clickable elements</li>
            <li><strong>default</strong>: Default arrow cursor</li>
            <li><strong>text</strong>: I-beam for selectable text</li>
            <li><strong>move</strong>: Indicates draggable element</li>
            <li><strong>not-allowed</strong>: Shows action is disabled</li>
            <li><strong>wait</strong>: Loading/processing state</li>
            <li><strong>grab/grabbing</strong>: Drag and drop interactions</li>
        </ul>
        
        <h3>Scroll Behavior:</h3>
        <p>Controls smooth scrolling for the entire page or specific elements.</p>
        <ul>
            <li><strong>scroll-behavior: smooth</strong>: Enables smooth scrolling</li>
            <li><strong>scroll-behavior: auto</strong>: Default instant scrolling</li>
            <li><strong>scroll-padding</strong>: Offset for scroll targets</li>
            <li><strong>scroll-margin</strong>: Margin for scroll snapping</li>
        </ul>
        
        <h3>Container Queries:</h3>
        <p>Style elements based on their container size rather than viewport.</p>
        <ul>
            <li><strong>container-type</strong>: size, inline-size, normal</li>
            <li><strong>container-name</strong>: Named containers for specific queries</li>
            <li><strong>@container</strong>: Query container dimensions</li>
        </ul>
        
        <h3>Other Useful Properties:</h3>
        <ul>
            <li><strong>pointer-events</strong>: Control mouse interaction with elements</li>
            <li><strong>user-select</strong>: Control text selection behavior</li>
            <li><strong>visibility</strong>: Hide elements while preserving space</li>
            <li><strong>opacity</strong>: Control element transparency</li>
            <li><strong>resize</strong>: Allow users to resize elements</li>
            <li><strong>overflow</strong>: Control content overflow behavior</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>خاصية المؤشر:</h3>
            <p>تتحكم في مظهر مؤشر الفأرة عند التمرير فوق عنصر.</p>
            <ul>
                <li><strong>pointer</strong>: مؤشر يد للعناصر القابلة للنقر</li>
                <li><strong>default</strong>: مؤشر السهم الافتراضي</li>
                <li><strong>text</strong>: I-beam للنص القابل للتحديد</li>
                <li><strong>move</strong>: يشير إلى عنصر قابل للسحب</li>
                <li><strong>not-allowed</strong>: يظهر أن الإجراء معطل</li>
                <li><strong>wait</strong>: حالة التحميل/المعالجة</li>
                <li><strong>grab/grabbing</strong>: تفاعلات السحب والإفلات</li>
            </ul>
            
            <h3>سلوك التمرير:</h3>
            <p>يتحكم في التمرير السلس للصفحة بأكملها أو عناصر محددة.</p>
            <ul>
                <li><strong>scroll-behavior: smooth</strong>: يمكّن التمرير السلس</li>
                <li><strong>scroll-behavior: auto</strong>: التمرير الفوري الافتراضي</li>
                <li><strong>scroll-padding</strong>: إزاحة لأهداف التمرير</li>
                <li><strong>scroll-margin</strong>: هامش للالتقاط التمرير</li>
            </ul>
            
            <h3>استعلامات الحاوية:</h3>
            <p>تنسيق العناصر بناءً على حجم الحاوية الخاصة بها بدلاً من منطقة العرض.</p>
            <ul>
                <li><strong>container-type</strong>: size, inline-size, normal</li>
                <li><strong>container-name</strong>: حاويات مسماة لاستعلامات محددة</li>
                <li><strong>@container</strong>: استعلام أبعاد الحاوية</li>
            </ul>
            
            <h3>خصائص مفيدة أخرى:</h3>
            <ul>
                <li><strong>pointer-events</strong>: التحكم في تفاعل الفأرة مع العناصر</li>
                <li><strong>user-select</strong>: التحكم في سلوك تحديد النص</li>
                <li><strong>visibility</strong>: إخفاء العناصر مع الحفاظ على المساحة</li>
                <li><strong>opacity</strong>: التحكم في شفافية العنصر</li>
                <li><strong>resize</strong>: السماح للمستخدمين بتغيير حجم العناصر</li>
                <li><strong>overflow</strong>: التحكم في سلوك تجاوز المحتوى</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Small Properties Implementation",
            content: `
                <pre class="code-block">
/* Cursor Examples */
.clickable {
    cursor: pointer;
}

.draggable {
    cursor: grab;
}

.draggable:active {
    cursor: grabbing;
}

.text-selectable {
    cursor: text;
}

.disabled-element {
    cursor: not-allowed;
    opacity: 0.6;
}

.loading {
    cursor: wait;
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* Specific element smooth scroll */
.scroll-container {
    scroll-behavior: smooth;
    height: 300px;
    overflow-y: auto;
}

/* Scroll padding for fixed headers */
.scroll-target {
    scroll-margin-top: 80px; /* Account for fixed header */
}

/* Container Queries */
.component {
    container-type: inline-size;
    container-name: main-component;
}

@container main-component (min-width: 400px) {
    .component-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }
}

@container main-component (max-width: 399px) {
    .component-content {
        display: block;
    }
}

.card {
    container-type: inline-size;
}

@container (min-width: 300px) {
    .card {
        display: flex;
        gap: 15px;
    }
}

/* Pointer Events */
.click-through {
    pointer-events: none;
}

.interactive {
    pointer-events: auto;
}

/* User Select */
.non-selectable {
    user-select: none;
}

.text-selectable {
    user-select: text;
}

.select-all {
    user-select: all;
}

/* Visibility vs Display */
.hidden-visible {
    visibility: hidden; /* Space preserved */
}

.hidden-display {
    display: none; /* Space not preserved */
}

/* Opacity */
.transparent {
    opacity: 0.5;
}

.fade-in {
    opacity: 0;
    animation: fadeIn 1s ease forwards;
}

@keyframes fadeIn {
    to { opacity: 1; }
}

/* Resize Property */
.resizable {
    resize: both;
    overflow: auto;
    min-height: 100px;
    min-width: 100px;
}

.resizable-horizontal {
    resize: horizontal;
    overflow: auto;
    min-width: 100px;
}

.resizable-vertical {
    resize: vertical;
    overflow: auto;
    min-height: 100px;
}

/* Overflow Examples */
.overflow-hidden {
    overflow: hidden;
}

.overflow-scroll {
    overflow: scroll;
}

.overflow-auto {
    overflow: auto;
}

.overflow-x-hidden {
    overflow-x: hidden;
}

.overflow-y-scroll {
    overflow-y: scroll;
}

/* Custom Scrollbars */
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #3498db #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #3498db;
    border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #2980b9;
}

/* Scroll Snap */
.scroll-snap-container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 400px;
}

.scroll-snap-item {
    scroll-snap-align: start;
    height: 100%;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Small Properties Practice",
            content: `
                <p>Practice with small but powerful CSS properties:</p>
                <ol>
                    <li>Create interactive buttons with appropriate cursor states</li>
                    <li>Implement smooth scrolling for anchor links</li>
                    <li>Build a component that uses container queries for responsive design</li>
                    <li>Create a resizable textarea or div element</li>
                    <li>Style custom scrollbars for specific containers</li>
                    <li>Implement scroll snapping for a image gallery</li>
                    <li>Create elements with different pointer-events behaviors</li>
                    <li>Build a fade-in animation using opacity property</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between display: none and visibility: hidden?",
            answer: "display: none completely removes the element from the document flow and it takes no space. visibility: hidden hides the element but it still occupies space in the layout. display: none also affects accessibility as screen readers typically skip these elements, while visibility: hidden elements are still accessible to screen readers."
        },
        {
            question: "When should you use container queries instead of media queries?",
            answer: "Use container queries when you want to style a component based on its own container size rather than the viewport. This is especially useful for reusable components that might appear in different contexts (sidebars, cards, widgets). Media queries are better for overall layout changes based on viewport size, while container queries provide component-level responsiveness."
        },
        {
            question: "How does scroll-behavior: smooth improve user experience?",
            answer: "scroll-behavior: smooth creates animated scrolling transitions instead of instant jumps, which provides visual context and reduces disorientation. It's particularly useful for single-page applications, anchor links, and navigation within long pages. However, it should be used judiciously as some users may prefer reduced motion for accessibility reasons."
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
    id: "css-transforms",
    title: "CSS Transforms - 2D & 3D Transformations",
    content: `
        <h3>What are CSS Transforms?</h3>
        <p>CSS transforms allow you to manipulate elements in 2D and 3D space, including rotation, scaling, skewing, and translation.</p>
        
        <h3>2D Transform Functions:</h3>
        <ul>
            <li><strong>translate(x, y)</strong>: Move element along X and Y axes</li>
            <li><strong>rotate(angle)</strong>: Rotate element by specified angle</li>
            <li><strong>scale(x, y)</strong>: Scale element horizontally and vertically</li>
            <li><strong>skew(x-angle, y-angle)</strong>: Skew element along X and Y axes</li>
            <li><strong>matrix(a, b, c, d, e, f)</strong>: Complex transformations using matrix</li>
        </ul>
        
        <h3>3D Transform Functions:</h3>
        <ul>
            <li><strong>translate3d(x, y, z)</strong>: Move element in 3D space</li>
            <li><strong>rotate3d(x, y, z, angle)</strong>: Rotate around 3D vector</li>
            <li><strong>scale3d(x, y, z)</strong>: Scale in 3D space</li>
            <li><strong>perspective(depth)</strong>: Set perspective for 3D transforms</li>
        </ul>
        
        <h3>Transform Properties:</h3>
        <ul>
            <li><strong>transform-origin</strong>: Change the origin point of transformations</li>
            <li><strong>transform-style</strong>: preserve-3d or flat for nested 3D elements</li>
            <li><strong>perspective</strong>: Set perspective for 3D transformations</li>
            <li><strong>backface-visibility</strong>: Control visibility of back face in 3D</li>
        </ul>
        
        <h3>Common Use Cases:</h3>
        <ul>
            <li>Hover effects and animations</li>
            <li>3D card flips and transitions</li>
            <li>Interactive UI elements</li>
            <li>Image galleries and carousels</li>
            <li>Loading animations and spinners</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>ما هي تحويلات CSS؟</h3>
            <p>تسمح تحويلات CSS بمعالجة العناصر في الفضاء ثنائي وثلاثي الأبعاد، بما في ذلك التدوير، التحجيم، الانحراف، والانتقال.</p>
            
            <h3>دوال التحويل ثنائية الأبعاد:</h3>
            <ul>
                <li><strong>translate(x, y)</strong>: تحريك العنصر على طول المحورين X و Y</li>
                <li><strong>rotate(angle)</strong>: تدوير العنصر بزاوية محددة</li>
                <li><strong>scale(x, y)</strong>: تحجيم العنصر أفقيًا وعموديًا</li>
                <li><strong>skew(x-angle, y-angle)</strong>: انحراف العنصر على طول المحورين X و Y</li>
                <li><strong>matrix(a, b, c, d, e, f)</strong>: تحويلات معقدة باستخدام المصفوفة</li>
            </ul>
            
            <h3>دوال التحويل ثلاثية الأبعاد:</h3>
            <ul>
                <li><strong>translate3d(x, y, z)</strong>: تحريك العنصر في الفضاء ثلاثي الأبعاد</li>
                <li><strong>rotate3d(x, y, z, angle)</strong>: التدوير حول متجه ثلاثي الأبعاد</li>
                <li><strong>scale3d(x, y, z)</strong>: التحجيم في الفضاء ثلاثي الأبعاد</li>
                <li><strong>perspective(depth)</strong>: ضبط المنظور للتحويلات ثلاثية الأبعاد</li>
            </ul>
            
            <h3>خصائص التحويل:</h3>
            <ul>
                <li><strong>transform-origin</strong>: تغيير نقطة الأصل للتحويلات</li>
                <li><strong>transform-style</strong>: preserve-3d أو flat للعناصر ثلاثية الأبعاد المتداخلة</li>
                <li><strong>perspective</strong>: ضبط المنظور للتحويلات ثلاثية الأبعاد</li>
                <li><strong>backface-visibility</strong>: التحكم في رؤوية الوجه الخلفي في ثلاثي الأبعاد</li>
            </ul>
            
            <h3>حالات الاستخدام الشائعة:</h3>
            <ul>
                <li>تأثيرات التحويم والرسوم المتحركة</li>
                <li>قلب البطاقات ثلاثية الأبعاد والانتقالات</li>
                <li>عناصر واجهة المستخدم التفاعلية</li>
                <li>معارض الصور والدوائر</li>
                <li>رسوم التحميل المتحركة والدوائر</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "2D Transform Examples",
            content: `
                <pre class="code-block">
/* Basic 2D Transforms */
.translate {
    transform: translate(50px, 100px);
}

.rotate {
    transform: rotate(45deg);
}

.scale {
    transform: scale(1.5);
}

.scale-x {
    transform: scaleX(2);
}

.scale-y {
    transform: scaleY(0.5);
}

.skew {
    transform: skew(30deg, 20deg);
}

/* Multiple transforms */
.multiple {
    transform: translate(50px, 50px) rotate(45deg) scale(1.2);
}

/* Transform origin */
.origin-center {
    transform-origin: center;
    transform: rotate(45deg);
}

.origin-top-left {
    transform-origin: top left;
    transform: rotate(45deg);
}

.origin-custom {
    transform-origin: 20% 80%;
    transform: rotate(45deg);
}

/* Hover effects */
.hover-scale {
    transition: transform 0.3s ease;
}

.hover-scale:hover {
    transform: scale(1.1);
}

.hover-rotate {
    transition: transform 0.3s ease;
}

.hover-rotate:hover {
    transform: rotate(15deg);
}

/* Button animations */
.button {
    transition: all 0.3s ease;
}

.button:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
                </pre>
            `
        },
        {
            title: "3D Transform Examples",
            content: `
                <pre class="code-block">
/* 3D Transform Basics */
.translate-3d {
    transform: translate3d(50px, 100px, 50px);
}

.rotate-3d {
    transform: rotate3d(1, 1, 1, 45deg);
}

.scale-3d {
    transform: scale3d(1.5, 1.5, 1.5);
}

/* 3D Card Flip */
.card-container {
    perspective: 1000px;
    width: 200px;
    height: 300px;
}

.card {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.6s;
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-back {
    transform: rotateY(180deg);
}

.card-container:hover .card {
    transform: rotateY(180deg);
}

/* 3D Cube */
.cube {
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(25deg) rotateY(-25deg);
}

.cube-face {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 2px solid #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}

.front  { transform: rotateY(0deg) translateZ(100px); }
.back   { transform: rotateY(180deg) translateZ(100px); }
.right  { transform: rotateY(90deg) translateZ(100px); }
.left   { transform: rotateY(-90deg) translateZ(100px); }
.top    { transform: rotateX(90deg) translateZ(100px); }
.bottom { transform: rotateX(-90deg) translateZ(100px); }

/* Perspective examples */
.perspective-500 {
    perspective: 500px;
}

.perspective-1000 {
    perspective: 1000px;
}

.perspective-origin {
    perspective: 500px;
    perspective-origin: 25% 75%;
}

/* 3D Hover Effects */
.flip-on-hover {
    transition: transform 0.6s;
    transform-style: preserve-3d;
}

.flip-on-hover:hover {
    transform: rotateY(180deg);
}

/* Loading Spinner with transforms */
.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "CSS Transforms Practice",
            content: `
                <p>Practice with CSS transforms:</p>
                <ol>
                    <li>Create interactive buttons with hover transform effects</li>
                    <li>Build a 3D card flip animation for a product card</li>
                    <li>Design a loading spinner using rotate transforms</li>
                    <li>Create an image gallery with scale and rotate hover effects</li>
                    <li>Build a 3D cube using multiple transform functions</li>
                    <li>Implement a flip animation for login/signup forms</li>
                    <li>Create a parallax scrolling effect with translateZ</li>
                    <li>Design a menu that slides in with 3D transforms</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between translate() and position: relative with top/left?",
            answer: "translate() uses the GPU for smoother animations and doesn't affect document flow or other elements. position: relative affects the document flow and can cause layout shifts. translate() is more performant for animations and doesn't trigger layout recalculations."
        },
        {
            question: "When should you use transform-style: preserve-3d?",
            answer: "Use transform-style: preserve-3d when you have nested elements that need to maintain their 3D positioning relative to their parent. This is essential for creating complex 3D scenes where child elements should exist in the same 3D space as their parent, like in 3D cubes or card flips with multiple layers."
        },
        {
            question: "How does perspective work in CSS 3D transforms?",
            answer: "Perspective creates the illusion of depth by making elements closer to the viewer appear larger and elements farther away appear smaller. The perspective value represents the distance between the viewer and the z=0 plane. Lower values create more dramatic 3D effects, while higher values create subtler effects."
        }
    ]
},
{
    id: "dimensions-responsive",
    title: "Width, Height & Responsive Properties",
    content: `
        <h3>Basic Dimension Properties:</h3>
        <ul>
            <li><strong>width</strong>: Sets element width</li>
            <li><strong>height</strong>: Sets element height</li>
            <li><strong>min-width</strong>: Minimum allowed width</li>
            <li><strong>max-width</strong>: Maximum allowed width</li>
            <li><strong>min-height</strong>: Minimum allowed height</li>
            <li><strong>max-height</strong>: Maximum allowed height</li>
        </ul>
        
        <h3>Responsive Without Media Queries:</h3>
        <ul>
            <li><strong>min()</strong>: Uses smallest value from list</li>
            <li><strong>max()</strong>: Uses largest value from list</li>
            <li><strong>clamp()</strong>: Clamps value between min and max</li>
            <li><strong>fit-content</strong>: Fits content while respecting min/max</li>
            <li><strong>minmax()</strong>: Defines size range (CSS Grid)</li>
            <li><strong>auto-fill/auto-fit</strong>: Automatic grid tracks</li>
        </ul>
        
        <h3>Modern CSS Functions:</h3>
        <ul>
            <li><strong>clamp(min, preferred, max)</strong>: Responsive value in one line</li>
            <li><strong>min(value1, value2, ...)</strong>: Returns smallest value</li>
            <li><strong>max(value1, value2, ...)</strong>: Returns largest value</li>
            <li><strong>calc()</strong>: Mathematical calculations</li>
        </ul>
        
        <h3>Intrinsic Sizing Keywords:</h3>
        <ul>
            <li><strong>fit-content</strong>: Fits content while respecting constraints</li>
            <li><strong>min-content</strong>: Minimum size based on content</li>
            <li><strong>max-content</strong>: Maximum size based on content</li>
            <li><strong>auto</strong>: Browser determines size</li>
        </ul>
        
        <h3>Best Practices for Responsive Design:</h3>
        <ul>
            <li>Use max-width: 100% for images and containers</li>
            <li>Set min-height instead of height for flexible containers</li>
            <li>Use clamp() for fluid typography and spacing</li>
            <li>Combine min() and max() for complex responsive logic</li>
            <li>Use fit-content for elements that should shrink-wrap</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>خصائص الأبعاد الأساسية:</h3>
            <ul>
                <li><strong>width</strong>: يحدد عرض العنصر</li>
                <li><strong>height</strong>: يحدد ارتفاع العنصر</li>
                <li><strong>min-width</strong>: الحد الأدنى المسموح به للعرض</li>
                <li><strong>max-width</strong>: الحد الأقصى المسموح به للعرض</li>
                <li><strong>min-height</strong>: الحد الأدنى المسموح به للارتفاع</li>
                <li><strong>max-height</strong>: الحد الأقصى المسموح به للارتفاع</li>
            </ul>
            
            <h3>التجاوب بدون استعلامات الوسائط:</h3>
            <ul>
                <li><strong>min()</strong>: يستخدم أصغر قيمة من القائمة</li>
                <li><strong>max()</strong>: يستخدم أكبر قيمة من القائمة</li>
                <li><strong>clamp()</strong>: يثبت القيمة بين الحد الأدنى والأقصى</li>
                <li><strong>fit-content</strong>: يناسب المحتوى مع احترام الحدود الدنيا/القصوى</li>
                <li><strong>minmax()</strong>: يحدد نطاق الحجم (شبكة CSS)</li>
                <li><strong>auto-fill/auto-fit</strong>: مسارات الشبكة التلقائية</li>
            </ul>
            
            <h3>دوال CSS الحديثة:</h3>
            <ul>
                <li><strong>clamp(min, preferred, max)</strong>: قيمة متجاوبة في سطر واحد</li>
                <li><strong>min(value1, value2, ...)</strong>: يعيد أصغر قيمة</li>
                <li><strong>max(value1, value2, ...)</strong>: يعيد أكبر قيمة</li>
                <li><strong>calc()</strong>: العمليات الحسابية</li>
            </ul>
            
            <h3>كلمات رئيسية لحجم الجوهر:</h3>
            <ul>
                <li><strong>fit-content</strong>: يناسب المحتوى مع احترام القيود</li>
                <li><strong>min-content</strong>: الحد الأدنى للحجم بناءً على المحتوى</li>
                <li><strong>max-content</strong>: الحد الأقصى للحجم بناءً على المحتوى</li>
                <li><strong>auto</strong>: المتصفح يحدد الحجم</li>
            </ul>
            
            <h3>أفضل الممارسات للتصميم المتجاوب:</h3>
            <ul>
                <li>استخدم max-width: 100% للصور والحاويات</li>
                <li>اضبط min-height بدلاً من height للحاويات المرنة</li>
                <li>استخدم clamp() للطباعة والتباعد السائل</li>
                <li>اجمع min() و max() للمنطق المتجاوب المعقد</li>
                <li>استخدم fit-content للعناصر التي يجب أن تنكمش حول المحتوى</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Responsive Dimension Examples",
            content: `
                <pre class="code-block">
/* Basic responsive container */
.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
}

/* Fluid typography with clamp() */
.fluid-heading {
    font-size: clamp(2rem, 5vw, 4rem);
}

.fluid-text {
    font-size: clamp(1.6rem, 2.5vw, 2rem);
}

/* Using min() and max() for responsive logic */
.responsive-card {
    width: min(100%, 400px); /* Never exceeds 400px */
    height: max(200px, 30vh); /* At least 200px, but 30vh if larger */
}

/* Complex responsive layout without media queries */
.sidebar {
    width: clamp(250px, 25vw, 300px);
}

.main-content {
    width: min(800px, 100% - 2rem);
}

/* Intrinsic sizing */
.intrinsic-width {
    width: fit-content;
    min-width: min-content;
    max-width: max-content;
}

/* Responsive images */
.responsive-image {
    max-width: 100%;
    height: auto;
}

.cover-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

/* CSS Grid with auto-fill for responsive layouts */
.auto-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
}

/* Flexbox with responsive items */
.flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.flex-item {
    flex: 1 1 300px; /* Grow, shrink, basis */
}

/* Aspect ratio containers */
.aspect-ratio-16-9 {
    aspect-ratio: 16 / 9;
    width: 100%;
}

.aspect-ratio-1-1 {
    aspect-ratio: 1 / 1;
    width: min(400px, 100%);
}

/* Complex clamp examples */
.complex-sizing {
    width: clamp(300px, 50vw, 600px);
    height: clamp(200px, 40vh, 400px);
    padding: clamp(1rem, 3vw, 2rem);
}

/* Container queries style with min/max */
.component {
    width: 100%;
    max-width: 500px;
}

.component__inner {
    padding: max(1rem, 5%);
    font-size: min(1.6rem, 4vw);
}

/* Responsive spacing system */
:root {
    --space-xs: clamp(0.5rem, 1vw, 1rem);
    --space-sm: clamp(1rem, 2vw, 1.5rem);
    --space-md: clamp(1.5rem, 3vw, 2rem);
    --space-lg: clamp(2rem, 4vw, 3rem);
}

.card {
    padding: var(--space-md);
    margin: var(--space-sm);
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Responsive Dimensions Practice",
            content: `
                <p>Practice with responsive dimensions and properties:</p>
                <ol>
                    <li>Create a responsive container system using clamp() and min()/max()</li>
                    <li>Build a card component that scales intelligently without media queries</li>
                    <li>Implement fluid typography across different screen sizes</li>
                    <li>Create a responsive grid layout using auto-fill and minmax()</li>
                    <li>Build a sidebar that adjusts its width based on viewport size</li>
                    <li>Create responsive images that maintain aspect ratios</li>
                    <li>Implement a spacing system using CSS custom properties and clamp()</li>
                    <li>Build a component that uses intrinsic sizing keywords</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the difference between auto-fill and auto-fit in CSS Grid?",
            answer: "auto-fill creates as many tracks as possible even if they're empty, while auto-fit collapses empty tracks and expands filled ones to take available space. Use auto-fill when you want consistent track sizes regardless of item count, and auto-fit when you want items to expand and fill available space."
        },
        {
            question: "When should you use clamp() vs min()/max()?",
            answer: "Use clamp() when you want a value that has a minimum, ideal, and maximum (like fluid typography). Use min() when you want to ensure a value doesn't exceed a certain limit. Use max() when you want to ensure a value doesn't go below a certain limit. They can be combined for complex responsive logic without media queries."
        },
        {
            question: "How do intrinsic sizing keywords work?",
            answer: "min-content uses the minimum size needed to contain the content (smallest possible). max-content uses the maximum size needed to contain content without wrapping. fit-content acts like min-content but won't shrink below min-width/max-width constraints. auto lets the browser decide based on context and available space."
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
    title: "CSS Methodologies & Architecture (Advanced)",
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
    title: "CSS Performance Optimization (Advanced)",
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
    title: "Cross-Browser Compatibility & Vendor Prefixes (Advanced)",
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
    title: "Accessibility (A11y) Deep Dive (Advanced)",
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