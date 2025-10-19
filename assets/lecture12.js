// Course data structure
const courseData = {
    courseInfo: {
        name: "Complete CSS Mastery",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
    id: "tailwind-css-intro",
    title: "Tailwind CSS - Introduction & Setup",
    content: `
        <h3>What is Tailwind CSS?</h3>
        <p>A utility-first CSS framework for rapidly building custom designs without writing custom CSS.</p>
        
        <h3>Key Features:</h3>
        <ul>
            <li><strong>Utility-First</strong>: Small, single-purpose classes</li>
            <li><strong>Responsive Design</strong>: Built-in responsive prefixes</li>
            <li><strong>Customizable</strong>: Extensible configuration</li>
            <li><strong>Component-Friendly</strong>: Easy to extract components</li>
            <li><strong>Production Ready</strong>: Purges unused CSS</li>
        </ul>
        
        <h3>Installation Methods:</h3>
        <ul>
            <li>CDN (Quick start)</li>
            <li>npm/yarn (Recommended)</li>
            <li>PostCSS (Advanced)</li>
            <li>CLI (Standalone)</li>
        </ul>
        
        <h3>Basic Setup:</h3>
        <p>Install via npm: <code>npm install -D tailwindcss</code></p>
        <p>Initialize config: <code>npx tailwindcss init</code></p>

        <br><hr><br>
        <div dir="rtl">
            <h3>ما هو Tailwind CSS؟</h3>
            <p>إطار عمل CSS يعتمد على الأدوات المساعدة لبناء تصاميم مخصصة بسرعة دون كتابة CSS مخصص.</p>
            
            <h3>الميزات الرئيسية:</h3>
            <ul>
                <li><strong>الأولوية للأدوات المساعدة</strong>: فئات صغيرة ذات غرض واحد</li>
                <li><strong>تصميم متجاوب</strong>: بادئات استجابة مدمجة</li>
                <li><strong>قابل للتخصيص</strong>: إعدادات قابلة للتوسيع</li>
                <li><strong>ملائم للمكونات</strong>: سهل لاستخراج المكونات</li>
                <li><strong>جاهز للإنتاج</strong>: يحذف CSS غير المستخدم</li>
            </ul>
            
            <h3>طرق التثبيت:</h3>
            <ul>
                <li>CDN (بدء سريع)</li>
                <li>npm/yarn (موصى به)</li>
                <li>PostCSS (متقدم)</li>
                <li>CLI (منفرد)</li>
            </ul>
            
            <h3>الإعداد الأساسي:</h3>
            <p>التثبيت عبر npm: <code>npm install -D tailwindcss</code></p>
            <p>تهيئة الإعدادات: <code>npx tailwindcss init</code></p>
        </div>
    `,
    examples: [
        {
            title: "Tailwind Config Setup",
            content: `
                <h4>Configuration File (tailwind.config.js)</h4>
                <pre class="code-block">
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        'custom': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
                </pre>

                <h4>CSS File Setup</h4>
                <pre class="code-block">
/* Add to your main CSS file */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom components using @apply */
.btn {
  @apply px-4 py-2 rounded font-medium transition-all duration-200;
}

.btn-primary {
  @apply bg-primary-500 text-white hover:bg-primary-600;
}
                </pre>

                <h4>HTML Usage</h4>
                <pre class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Tailwind Setup&lt;/title&gt;
    &lt;link href="./output.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body class="bg-gray-100"&gt;
    &lt;div class="container mx-auto p-4"&gt;
        &lt;button class="btn btn-primary"&gt;Custom Button&lt;/button&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Tailwind Setup Practice",
            content: `
                <p>Practice setting up Tailwind CSS:</p>
                <ol>
                    <li>Create a new project and install Tailwind via npm</li>
                    <li>Configure tailwind.config.js with custom colors and spacing</li>
                    <li>Set up the build process with PostCSS</li>
                    <li>Create a basic HTML file with Tailwind classes</li>
                    <li>Test the responsive prefixes</li>
                    <li>Add custom animations to the config</li>
                    <li>Configure PurgeCSS for production</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "What's the main difference between Tailwind and traditional CSS frameworks?",
            answer: "Tailwind is utility-first, meaning you build components by combining small, single-purpose classes rather than using pre-built component classes like in Bootstrap. This gives more design control but requires more HTML class attributes."
        }
    ]
},
{
    id: "tailwind-utility-classes",
    title: "Tailwind Utility Classes & Configuration",
    content: `
        <h3>Core Utility Classes:</h3>
        <ul>
            <li><strong>Layout</strong>: flex, grid, container, box-sizing</li>
            <li><strong>Spacing</strong>: p-, m-, space-, gap-</li>
            <li><strong>Sizing</strong>: w-, h-, min-w-, max-h-</li>
            <li><strong>Typography</strong>: text-, font-, leading-, tracking-</li>
            <li><strong>Colors</strong>: bg-, text-, border-, ring-</li>
            <li><strong>Effects</strong>: shadow, opacity, mix-blend</li>
            <li><strong>Transforms</strong>: rotate, scale, translate, skew</li>
        </ul>
        
        <h3>Custom Configuration:</h3>
        <ul>
            <li><strong>Colors</strong>: Extend default color palette</li>
            <li><strong>Spacing</strong>: Custom spacing scale</li>
            <li><strong>Fonts</strong>: Custom font families</li>
            <li><strong>Screens</strong>: Custom breakpoints</li>
            <li><strong>Animations</strong>: Custom keyframes and timing</li>
        </ul>
        
        <h3>Using @apply Directive:</h3>
        <p>Extract repeated utility patterns into CSS classes</p>
        
        <h3>Parent & Child States:</h3>
        <ul>
            <li><strong>group</strong>: Parent container for child states</li>
            <li><strong>peer</strong>: Style based on sibling state</li>
            <li><strong>group-hover</strong>: Child hover states</li>
            <li><strong>peer-checked</strong>: Style based on sibling checkbox</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>فئات الأدوات الأساسية:</h3>
            <ul>
                <li><strong>التخطيط</strong>: flex, grid, container, box-sizing</li>
                <li><strong>المسافات</strong>: p-, m-, space-, gap-</li>
                <li><strong>الأحجام</strong>: w-, h-, min-w-, max-h-</li>
                <li><strong>الطباعة</strong>: text-, font-, leading-, tracking-</li>
                <li><strong>الألوان</strong>: bg-, text-, border-, ring-</li>
                <li><strong>التأثيرات</strong>: shadow, opacity, mix-blend</li>
                <li><strong>التحويلات</strong>: rotate, scale, translate, skew</li>
            </ul>
            
            <h3>التخصيص في الإعدادات:</h3>
            <ul>
                <li><strong>الألوان</strong>: توسيع لوحة الألوان الافتراضية</li>
                <li><strong>المسافات</strong>: مقياس مسافات مخصص</li>
                <li><strong>الخطوط</strong>: عائلات خطوط مخصصة</li>
                <li><strong>الشاشات</strong>: نقاط التوقف المخصصة</li>
                <li><strong>الرسوم المتحركة</strong>: الإطارات الرئيسية والتوقيت المخصص</li>
            </ul>
            
            <h3>استخدام توجيه @apply:</h3>
            <p>استخراج أنماط الأدوات المتكررة إلى فئات CSS</p>
            
            <h3>حالات الوالد والابن:</h3>
            <ul>
                <li><strong>group</strong>: الحاوية الأم لحالات الأبناء</li>
                <li><strong>peer</strong>: التنسيق بناءً على حالة الشقيق</li>
                <li><strong>group-hover</strong>: حالات التحويم للأبناء</li>
                <li><strong>peer-checked</strong>: التنسيق بناءً على خانة اختيار الشقيق</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "@apply Directive - CSS Examples",
            content: `
                <h4>CSS with @apply Directive</h4>
                <pre class="code-block">
/* Using @apply to create component classes */
.btn {
  @apply px-4 py-2 rounded font-medium transition-all duration-200;
}

.btn-primary {
  @apply bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300;
}

.btn-secondary {
  @apply bg-gray-500 text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-300;
}

/* Custom component with hover states */
.card {
  @apply bg-white rounded-lg shadow-md p-6 transition-all duration-300;
}

.card:hover {
  @apply shadow-lg transform -translate-y-1;
}

/* Custom utilities with configuration */
.custom-gradient {
  @apply bg-gradient-to-r from-purple-500 to-pink-500;
}

.custom-animation {
  @apply animate-bounce-slow;
}

/* Responsive utilities */
.responsive-card {
  @apply w-full p-4 md:p-6 lg:p-8;
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
}

/* Dark mode support */
.themed-element {
  @apply bg-white dark:bg-gray-800 text-gray-900 dark:text-white;
}
                </pre>

                <h4>HTML Usage</h4>
                <pre class="code-block">
&lt;!-- Using custom component classes --&gt;
&lt;button class="btn btn-primary"&gt;Primary Button&lt;/button&gt;
&lt;button class="btn btn-secondary"&gt;Secondary Button&lt;/button&gt;

&lt;div class="card"&gt;
  This is a custom card component
&lt;/div&gt;

&lt;div class="custom-gradient text-white p-4"&gt;
  Custom Gradient Background
&lt;/div&gt;

&lt;div class="custom-animation"&gt;
  Animated Element
&lt;/div&gt;
                </pre>
            `
        },
        {
            title: "Group & Peer Classes - HTML Examples",
            content: `
                <h4>Group Hover Example</h4>
                <pre class="code-block">
&lt;!-- Group hover parent --&gt;
&lt;div class="group border rounded-lg p-4 hover:bg-gray-50 transition-colors"&gt;
  &lt;h3 class="text-lg font-semibold group-hover:text-blue-600 transition-colors"&gt;
    Group Title
  &lt;/h3&gt;
  &lt;p class="text-gray-600 group-hover:text-gray-800 transition-colors"&gt;
    Content that changes on parent hover
  &lt;/p&gt;
  &lt;button class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-500 text-white px-4 py-2 rounded"&gt;
    Action Button
  &lt;/button&gt;
&lt;/div&gt;
                </pre>

                <h4>Peer Styling Example</h4>
                <pre class="code-block">
&lt;!-- Peer example for form styling --&gt;
&lt;div class="relative"&gt;
  &lt;input type="text" class="peer border rounded p-2 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500" /&gt;
  &lt;label class="absolute left-2 top-2 text-gray-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 transition-all duration-200"&gt;
    Username
  &lt;/label&gt;
&lt;/div&gt;

&lt;!-- Peer checked example --&gt;
&lt;div class="flex items-center space-x-2"&gt;
  &lt;input type="checkbox" class="peer" id="toggle" /&gt;
  &lt;label for="toggle" class="peer-checked:text-green-600 peer-checked:font-bold transition-all"&gt;
    Toggle me
  &lt;/label&gt;
&lt;/div&gt;
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Utility Classes Practice",
            content: `
                <p>Practice with Tailwind utility classes:</p>
                <ol>
                    <li>Create button components using @apply directive</li>
                    <li>Build cards with hover effects using group classes</li>
                    <li>Style form elements with peer classes</li>
                    <li>Create responsive layouts using breakpoint prefixes</li>
                    <li>Implement dark mode support</li>
                    <li>Build navigation with hover and focus states</li>
                    <li>Create animated components with transition utilities</li>
                    <li>Style nested elements using parent-child relationships</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "When should you use @apply vs regular utility classes?",
            answer: "Use @apply when you have repeated patterns of utility classes that form a component. Use regular utility classes for one-off styles or when you need to make quick adjustments. @apply helps maintain consistency but can lead to larger CSS files if overused."
        }
    ]
},
{
    id: "responsive-mobile-first",
    title: "Responsive Design & Mobile-First Components",
    content: `
        <h3>Mobile-First Approach:</h3>
        <p>Start with mobile styles and enhance for larger screens using responsive prefixes.</p>
        
        <h3>Responsive Breakpoints:</h3>
        <ul>
            <li><strong>sm:</strong> 640px+ (Small screens)</li>
            <li><strong>md:</strong> 768px+ (Medium screens)</li>
            <li><strong>lg:</strong> 1024px+ (Large screens)</li>
            <li><strong>xl:</strong> 1280px+ (Extra large)</li>
            <li><strong>2xl:</strong> 1536px+ (2X large)</li>
        </ul>
        
        <h3>State Variants:</h3>
        <ul>
            <li><strong>hover:</strong> Mouse hover states</li>
            <li><strong>focus:</strong> Keyboard focus states</li>
            <li><strong>active:</strong> Element activation</li>
            <li><strong>disabled:</strong> Disabled elements</li>
            <li><strong>group-hover:</strong> Parent hover states</li>
            <li><strong>focus-within:</strong> Child focus states</li>
        </ul>
        
        <h3>Building Mobile-First Components:</h3>
        <ul>
            <li>Start with mobile layout</li>
            <li>Add responsive modifiers</li>
            <li>Consider touch targets (min 44px)</li>
            <li>Optimize images for different screens</li>
            <li>Test on actual devices</li>
        </ul>

        <br><hr><br>
        <div dir="rtl">
            <h3>نهج Mobile-First:</h3>
            <p>ابدأ بتصاميم الجوال وقم بالتحسين للشاشات الأكبر باستخدام البادئات المتجاوبة.</p>
            
            <h3>نقاط التوقف المتجاوبة:</h3>
            <ul>
                <li><strong>sm:</strong> 640px+ (شاشات صغيرة)</li>
                <li><strong>md:</strong> 768px+ (شاشات متوسطة)</li>
                <li><strong>lg:</strong> 1024px+ (شاشات كبيرة)</li>
                <li><strong>xl:</strong> 1280px+ (شاشات كبيرة جداً)</li>
                <li><strong>2xl:</strong> 1536px+ (شاشات كبيرة مزدوجة)</li>
            </ul>
            
            <h3>متغيرات الحالة:</h3>
            <ul>
                <li><strong>hover:</strong> حالات تحويم الماوس</li>
                <li><strong>focus:</strong> حالات تركيز لوحة المفاتيح</li>
                <li><strong>active:</strong> تنشيط العنصر</li>
                <li><strong>disabled:</strong> العناصر المعطلة</li>
                <li><strong>group-hover:</strong> حالات تحويم الوالد</li>
                <li><strong>focus-within:</strong> حالات تركيز الابن</li>
            </ul>
            
            <h3>بناء مكونات Mobile-First:</h3>
            <ul>
                <li>ابدأ بتخطيط الجوال</li>
                <li>أضف معدلات الاستجابة</li>
                <li>ضع في الاعتبار أهداف اللمس (44px كحد أدنى)</li>
                <li>حسن الصور للشاشات المختلفة</li>
                <li>اختبر على أجهزة حقيقية</li>
            </ul>
        </div>
    `,
    examples: [
        {
            title: "Mobile-First Navigation",
            content: `
                <h4>HTML - Responsive Navigation</h4>
                <pre class="code-block">
&lt;nav class="bg-white shadow-sm"&gt;
  &lt;div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"&gt;
    &lt;div class="flex justify-between items-center h-16"&gt;
      &lt;!-- Logo --&gt;
      &lt;div class="flex-shrink-0"&gt;
        &lt;img class="h-8 w-auto" src="/logo.png" alt="Logo"&gt;
      &lt;/div&gt;
      
      &lt;!-- Mobile menu button --&gt;
      &lt;div class="md:hidden"&gt;
        &lt;button class="p-2 rounded-md text-gray-400 hover:text-gray-500 
                      hover:bg-gray-100 focus:outline-none focus:ring-2 
                      focus:ring-inset focus:ring-blue-500 transition-colors"&gt;
          &lt;span class="sr-only"&gt;Open menu&lt;/span&gt;
          &lt;!-- Menu icon would go here --&gt;
          &lt;svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
            &lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /&gt;
          &lt;/svg&gt;
        &lt;/button&gt;
      &lt;/div&gt;
      
      &lt;!-- Desktop menu --&gt;
      &lt;div class="hidden md:block"&gt;
        &lt;div class="ml-10 flex items-baseline space-x-4"&gt;
          &lt;a href="#" class="px-3 py-2 rounded-md text-sm font-medium 
                           text-gray-900 hover:text-blue-600 
                           transition-colors duration-200"&gt;
            Home
          &lt;/a&gt;
          &lt;a href="#" class="px-3 py-2 rounded-md text-sm font-medium 
                           text-gray-500 hover:text-blue-600 
                           transition-colors duration-200"&gt;
            About
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/nav&gt;
                </pre>

                <h4>CSS - Custom Component Styles</h4>
                <pre class="code-block">
/* Mobile-first responsive utilities */
.nav-item {
  @apply block px-3 py-2 rounded-md text-base font-medium;
  @apply md:inline-block md:text-sm md:px-3 md:py-2;
}

.nav-item-mobile {
  @apply text-gray-700 hover:text-gray-900 hover:bg-gray-50;
  @apply md:hover:bg-transparent;
}

.nav-item-desktop {
  @apply text-gray-500 hover:text-gray-700;
}

/* Responsive container */
.responsive-container {
  @apply w-full px-4;
  @apply sm:max-w-screen-sm sm:mx-auto;
  @apply md:max-w-screen-md;
  @apply lg:max-w-screen-lg;
  @apply xl:max-w-screen-xl;
}
                </pre>
            `
        },
        {
            title: "Responsive Card Component",
            content: `
                <h4>HTML - Responsive Card</h4>
                <pre class="code-block">
&lt;div class="max-w-sm mx-auto bg-white rounded-xl shadow-md 
            overflow-hidden md:max-w-2xl hover:shadow-lg transition-shadow"&gt;
  &lt;div class="md:flex"&gt;
    &lt;div class="md:flex-shrink-0"&gt;
      &lt;img class="h-48 w-full object-cover md:w-48 
                 hover:scale-105 transition-transform duration-300" 
           src="/image.jpg" alt="Card image"&gt;
    &lt;/div&gt;
    &lt;div class="p-4 md:p-8"&gt;
      &lt;div class="uppercase tracking-wide text-sm text-blue-500 
                  font-semibold hover:text-blue-600 transition-colors"&gt;
        Category
      &lt;/div&gt;
      &lt;a href="#" class="block mt-1 text-lg leading-tight font-medium 
                        text-black hover:text-blue-600 transition-colors
                        focus:text-blue-700 focus:outline-none"&gt;
        Card Title
      &lt;/a&gt;
      &lt;p class="mt-2 text-gray-500 text-sm md:text-base"&gt;
        Card description that changes based on screen size.
      &lt;/p&gt;
      &lt;button class="mt-4 bg-blue-500 text-white px-4 py-2 rounded 
                     hover:bg-blue-600 focus:bg-blue-700 
                     focus:ring-2 focus:ring-blue-300 focus:outline-none
                     active:bg-blue-800 transition-colors duration-200
                     disabled:opacity-50 disabled:cursor-not-allowed"&gt;
        Learn More
      &lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
                </pre>

                <h4>CSS - Card Component Styles</h4>
                <pre class="code-block">
/* Mobile-first card styles */
.card {
  @apply bg-white rounded-lg shadow-md overflow-hidden;
  @apply transition-all duration-300;
}

.card:hover {
  @apply shadow-lg transform -translate-y-1;
}

.card-image {
  @apply w-full h-48 object-cover;
  @apply md:w-48 md:h-auto;
  @apply transition-transform duration-300;
}

.card-image:hover {
  @apply scale-105;
}

.card-content {
  @apply p-4;
  @apply md:p-6;
  @apply lg:p-8;
}

.card-title {
  @apply text-lg font-semibold mb-2;
  @apply md:text-xl;
  @apply hover:text-blue-600 transition-colors;
}

.card-description {
  @apply text-gray-600 text-sm;
  @apply md:text-base;
}
                </pre>
            `
        },
        {
            title: "Form with Interactive States",
            content: `
                <h4>HTML - Form with States</h4>
                <pre class="code-block">
&lt;form class="space-y-4 max-w-md mx-auto p-4 md:p-6"&gt;
  &lt;div class="space-y-2"&gt;
    &lt;label for="email" class="block text-sm font-medium text-gray-700 
                              md:text-base"&gt;
      Email Address
    &lt;/label&gt;
    &lt;input type="email" id="email" 
           class="mt-1 block w-full px-3 py-2 border border-gray-300 
                  rounded-md shadow-sm placeholder-gray-400
                  focus:outline-none focus:ring-blue-500 
                  focus:border-blue-500 transition-colors duration-200
                  hover:border-gray-400
                  disabled:bg-gray-100 disabled:text-gray-500
                  disabled:cursor-not-allowed"
           placeholder="Enter your email"&gt;
  &lt;/div&gt;
  
  &lt;div class="space-y-2"&gt;
    &lt;label for="password" class="block text-sm font-medium text-gray-700
                                 md:text-base"&gt;
      Password
    &lt;/label&gt;
    &lt;input type="password" id="password" 
           class="mt-1 block w-full px-3 py-2 border border-gray-300 
                  rounded-md shadow-sm placeholder-gray-400
                  focus:outline-none focus:ring-blue-500 
                  focus:border-blue-500 transition-colors duration-200
                  hover:border-gray-400"&gt;
  &lt;/div&gt;
  
  &lt;button type="submit" 
          class="w-full flex justify-center py-2 px-4 border border-transparent 
                 rounded-md shadow-sm text-sm font-medium text-white 
                 bg-blue-600 hover:bg-blue-700 focus:outline-none 
                 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                 disabled:opacity-50 disabled:cursor-not-allowed 
                 active:bg-blue-800 transition-all duration-200
                 md:py-3 md:text-base"&gt;
    Sign In
  &lt;/button&gt;
&lt;/form&gt;
                </pre>

                <h4>CSS - Form Component Styles</h4>
                <pre class="code-block">
/* Form input styles */
.form-input {
  @apply block w-full px-3 py-2 border border-gray-300 rounded-md;
  @apply placeholder-gray-400;
  @apply focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
  @apply hover:border-gray-400;
  @apply disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed;
  @apply transition-colors duration-200;
}

.form-input-error {
  @apply border-red-300 text-red-900 placeholder-red-300;
  @apply focus:ring-red-500 focus:border-red-500;
}

.form-label {
  @apply block text-sm font-medium text-gray-700;
  @apply md:text-base;
}

/* Button states */
.btn-submit {
  @apply w-full flex justify-center py-2 px-4 border border-transparent;
  @apply rounded-md shadow-sm text-sm font-medium text-white;
  @apply bg-blue-600 hover:bg-blue-700 focus:outline-none;
  @apply focus:ring-2 focus:ring-offset-2 focus:ring-blue-500;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
  @apply active:bg-blue-800 transition-all duration-200;
  @apply md:py-3 md:text-base;
}
                </pre>
            `
        }
    ],
    practices: [
        {
            title: "Mobile-First Practice",
            content: `
                <p>Practice building mobile-first components:</p>
                <ol>
                    <li>Create a responsive navigation that collapses on mobile</li>
                    <li>Build a card component that changes layout on different screens</li>
                    <li>Design a form with proper focus states and validation styles</li>
                    <li>Create a responsive grid layout</li>
                    <li>Build buttons with hover, focus, and active states</li>
                    <li>Implement a mobile-first pricing table</li>
                    <li>Create animated components with transition utilities</li>
                    <li>Build a responsive image gallery</li>
                </ol>
            `
        }
    ],
    questions: [
        {
            question: "Why use mobile-first approach in Tailwind?",
            answer: "Mobile-first is more efficient because it's easier to add complexity for larger screens than to remove it for smaller screens. Tailwind's responsive prefixes build upon mobile styles, making your CSS more maintainable and performance-focused."
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