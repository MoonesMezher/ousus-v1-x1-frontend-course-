// Course data structure
const courseData = {
    courseInfo: {
        name: "Frontend React",
        coach: "Moones Mezher",
        center: "Ousos"
    },
    topics: [
        {
            id: "multimedia",
            title: "Images and Multimedia",
            content: `
                <h3>Image Element: &lt;img src alt /&gt;</h3>
                <p>The img element embeds images into web pages:</p>
                
                <h3>Key Attributes:</h3>
                <ul>
                    <li><strong>src</strong>: Image source (URL or path)</li>
                    <li><strong>alt</strong>: Alternative text (required for accessibility)</li>
                    <li><strong>width/height</strong>: Image dimensions</li>
                    <li><strong>loading</strong>: lazy/eager (lazy loading optimization)</li>
                </ul>
                
                <h3>Working with Paths:</h3>
                <ul>
                    <li><strong>Relative paths</strong>: images/photo.jpg (relative to current file)</li>
                    <li><strong>Absolute paths</strong>: /images/photo.jpg (relative to root)</li>
                    <li><strong>Full URLs</strong>: https://example.com/image.jpg</li>
                </ul>
                
                <h3>Lists in HTML</h3>
                <ul>
                    <li><strong>&lt;ul&gt;</strong>: Unordered list (bullets)</li>
                    <li><strong>&lt;ol&gt;</strong>: Ordered list (numbers)</li>
                    <li><strong>&lt;li&gt;</strong>: List item</li>
                </ul>
                
                <h3>Ordered List Attributes:</h3>
                <ul>
                    <li><strong>start</strong>: Starting number</li>
                    <li><strong>type</strong>: Numbering style (1, A, a, I, i)</li>
                    <li><strong>reversed</strong>: Reverse numbering</li>
                </ul>
            `,
            examples: [
                {
                    title: "Image Examples",
                    content: `
                        <div class="code-block">
&lt;!-- Basic image --&gt;
&lt;img src="photo.jpg" alt="A beautiful landscape"&gt;

&lt;!-- Image with dimensions --&gt;
&lt;img src="photo.jpg" alt="Landscape" width="800" height="600"&gt;

&lt;!-- Image from URL --&gt;
&lt;img src="https://example.com/image.jpg" alt="Example image"&gt;

&lt;!-- Lazy loading --&gt;
&lt;img src="photo.jpg" alt="Landscape" loading="lazy"&gt;
                        </div>
                    `
                },
                {
                    title: "List Examples",
                    content: `
                        <div class="code-block">
&lt;!-- Unordered list --&gt;
&lt;ul&gt;
    &lt;li&gt;Item 1&lt;/li&gt;
    &lt;li&gt;Item 2&lt;/li&gt;
    &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Ordered list with attributes --&gt;
&lt;ol type="A" start="3"&gt;
    &lt;li&gt;Third item (C)&lt;/li&gt;
    &lt;li&gt;Fourth item (D)&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Nested lists --&gt;
&lt;ul&gt;
    &lt;li&gt;Main item
        &lt;ul&gt;
            &lt;li&gt;Sub item&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Multimedia Practice",
                    content: `
                        <p>Practice with images and lists:</p>
                        <ol>
                            <li>Add images using different path types (relative, absolute, URL)</li>
                            <li>Create both ordered and unordered lists</li>
                            <li>Make nested lists for complex structures</li>
                            <li>Experiment with different list numbering styles</li>
                            <li>Add proper alt text to all images</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why is alt text important for images?",
                    answer: "Alt text is crucial for accessibility (screen readers), SEO (search engines can't 'see' images), and when images fail to load. It should concisely describe the image's content and function. Decorative images should have empty alt text (alt='') but never omit the alt attribute."
                },
                {
                    question: "When should you use ordered vs unordered lists?",
                    answer: "Use ordered lists (&lt;ol&gt;) when the sequence matters (steps, rankings). Use unordered lists (&lt;ul&gt;) for items without specific order (features, options). Use description lists (&lt;dl&gt;) for term-definition pairs."
                }
            ]
        },
        {
            id: "tables",
            title: "HTML Tables",
            content: `
                <h3>Table Structure</h3>
                <p>Tables organize data into rows and columns:</p>
                
                <h3>Basic Table Elements:</h3>
                <ul>
                    <li><strong>&lt;table&gt;</strong>: The table container</li>
                    <li><strong>&lt;thead&gt;</strong>: Table header section</li>
                    <li><strong>&lt;tbody&gt;</strong>: Table body section</li>
                    <li><strong>&lt;tfoot&gt;</strong>: Table footer section</li>
                    <li><strong>&lt;tr&gt;</strong>: Table row</li>
                    <li><strong>&lt;th&gt;</strong>: Table header cell</li>
                    <li><strong>&lt;td&gt;</strong>: Table data cell</li>
                </ul>
                
                <h3>Advanced Table Features:</h3>
                <ul>
                    <li><strong>colspan</strong>: Merge cells horizontally</li>
                    <li><strong>rowspan</strong>: Merge cells vertically</li>
                    <li><strong>caption</strong>: Table title/description</li>
                    <li><strong>scope</strong>: Associate headers with cells (accessibility)</li>
                </ul>
                
                <h3>Span Element: &lt;span&gt;&lt;/span&gt;</h3>
                <p>The span element is an inline container for styling or scripting:</p>
                <ul>
                    <li>Inline element (doesn't break flow)</li>
                    <li>No inherent meaning</li>
                    <li>Used with CSS classes for styling</li>
                </ul>
                
                <h3>Line Breaks and Rules:</h3>
                <ul>
                    <li><strong>&lt;br&gt;</strong>: Line break</li>
                    <li><strong>&lt;hr&gt;</strong>: Horizontal rule (thematic break)</li>
                </ul>
            `,
            examples: [
                {
                    title: "Basic Table Structure",
                    content: `
                        <div class="code-block">
&lt;table&gt;
    &lt;caption&gt;Monthly Sales Report&lt;/caption&gt;
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th&gt;Month&lt;/th&gt;
            &lt;th&gt;Sales&lt;/th&gt;
            &lt;th&gt;Profit&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td&gt;January&lt;/td&gt;
            &lt;td&gt;$10,000&lt;/td&gt;
            &lt;td&gt;$2,000&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td&gt;February&lt;/td&gt;
            &lt;td&gt;$12,000&lt;/td&gt;
            &lt;td&gt;$2,500&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
&lt;/table&gt;
                        </div>
                    `
                },
                {
                    title: "Advanced Table with Merged Cells",
                    content: `
                        <div class="code-block">
&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;th rowspan="2"&gt;Name&lt;/th&gt;
        &lt;th colspan="2"&gt;Contact&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;th&gt;Email&lt;/th&gt;
        &lt;th&gt;Phone&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;John Doe&lt;/td&gt;
        &lt;td&gt;john@example.com&lt;/td&gt;
        &lt;td&gt;123-4567&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Table Creation Practice",
                    content: `
                        <p>Practice creating tables:</p>
                        <ol>
                            <li>Create a simple contact list table</li>
                            <li>Build a schedule table with time slots</li>
                            <li>Create a table with merged cells using colspan and rowspan</li>
                            <li>Add proper table headers and captions</li>
                            <li>Use span elements to style specific parts of table cells</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should you use tables vs other HTML elements?",
                    answer: "Use tables only for tabular data (data that has a natural row-column relationship). For page layout, use CSS Grid or Flexbox. Using tables for layout is outdated and creates accessibility issues. Tables should have semantic meaning, not just visual structure."
                },
                {
                    question: "What's the difference between th and td elements?",
                    answer: "&lt;th&gt; defines header cells (bold and centered by default), while &lt;td&gt; defines regular data cells. Use &lt;th&gt; for column/row headers. The scope attribute in &lt;th&gt; helps screen readers understand the header's association (scope='col' for column headers, scope='row' for row headers)."
                }
            ]
        },
        {
            id: "containers",
            title: "Container Elements and Layout",
            content: `
                <h3>Div Element: &lt;div&gt;&lt;/div&gt;</h3>
                <p>The div element is the most versatile container:</p>
                <ul>
                    <li>Block-level element</li>
                    <li>No semantic meaning</li>
                    <li>Used for grouping and styling content</li>
                    <li>Often called the 'king of elements'</li>
                </ul>
                
                <h3>Semantic HTML5 Elements</h3>
                <p>Semantic elements clearly describe their meaning to browsers and developers:</p>
                <ul>
                    <li><strong>&lt;header&gt;</strong>: Introductory content or navigation</li>
                    <li><strong>&lt;nav&gt;</strong>: Navigation links</li>
                    <li><strong>&lt;main&gt;</strong>: Main content of the document</li>
                    <li><strong>&lt;article&gt;</strong>: Self-contained composition</li>
                    <li><strong>&lt;section&gt;</strong>: Thematic grouping of content</li>
                    <li><strong>&lt;aside&gt;</strong>: Sidebar or complementary content</li>
                    <li><strong>&lt;footer&gt;</strong>: Footer for its nearest section</li>
                </ul>
                
                <h3>Website Layout Evolution</h3>
                <p>From class-based divs to semantic elements:</p>
                <ul>
                    <li><strong>Old approach</strong>: &lt;div class="header"&gt;, &lt;div class="nav"&gt;</li>
                    <li><strong>Modern approach</strong>: &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</li>
                </ul>
                
                <h3>Why Use Semantic Elements?</h3>
                <ul>
                    <li>Better accessibility (screen readers)</li>
                    <li>Improved SEO (search engines)</li>
                    <li>Cleaner, more readable code</li>
                    <li>Future-proof structure</li>
                </ul>
            `,
            examples: [
                {
                    title: "Traditional vs Semantic Layout",
                    content: `
                        <p><strong>Traditional (div-based):</strong></p>
                        <div class="code-block">
&lt;div class="header"&gt;
    &lt;div class="nav"&gt;Navigation&lt;/div&gt;
&lt;/div&gt;
&lt;div class="main"&gt;
    &lt;div class="article"&gt;Content&lt;/div&gt;
    &lt;div class="sidebar"&gt;Sidebar&lt;/div&gt;
&lt;/div&gt;
&lt;div class="footer"&gt;Footer&lt;/div&gt;
                        </div>
                        
                        <p><strong>Modern (semantic):</strong></p>
                        <div class="code-block">
&lt;header&gt;
    &lt;nav&gt;Navigation&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
    &lt;article&gt;Content&lt;/article&gt;
    &lt;aside&gt;Sidebar&lt;/aside&gt;
&lt;/main&gt;
&lt;footer&gt;Footer&lt;/footer&gt;
                        </div>
                    `
                },
                {
                    title: "Complete Semantic Layout",
                    content: `
                        <div class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Semantic Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Website Title&lt;/h1&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;article&gt;
            &lt;h2&gt;Article Title&lt;/h2&gt;
            &lt;p&gt;Article content...&lt;/p&gt;
        &lt;/article&gt;
        
        &lt;aside&gt;
            &lt;h3&gt;Related Links&lt;/h3&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/aside&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
        &lt;p&gt;Copyright 2023&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Layout Practice",
                    content: `
                        <p>Practice creating layouts:</p>
                        <ol>
                            <li>Create a basic page layout using only div elements</li>
                            <li>Convert the div layout to semantic HTML5 elements</li>
                            <li>Build a blog post with header, article, and footer</li>
                            <li>Create a product card using appropriate semantic elements</li>
                            <li>Compare the readability of both approaches</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use div vs semantic elements?",
                    answer: "Use semantic elements when they accurately describe the content's purpose. Use div for generic containers without semantic meaning, or when no semantic element fits. Semantic elements should be your first choice for better accessibility and SEO."
                },
                {
                    question: "What's the difference between article and section?",
                    answer: "&lt;article&gt; represents a self-contained composition that could be distributed independently (blog post, news article). &lt;section&gt; represents a thematic grouping of content, usually with a heading. An article can contain sections, and a section can contain articles."
                }
            ]
        },
        {
            id: "advanced-multimedia",
            title: "Advanced Multimedia",
            content: `
                <h3>Audio Element: &lt;audio&gt;&lt;/audio&gt;</h3>
                <p>The audio element embeds sound content:</p>
                
                <h3>Key Attributes:</h3>
                <ul>
                    <li><strong>src</strong>: Audio file source</li>
                    <li><strong>controls</strong>: Shows audio controls</li>
                    <li><strong>autoplay</strong>: Starts automatically (browser restrictions)</li>
                    <li><strong>loop</strong>: Repeats audio</li>
                    <li><strong>muted</strong>: Starts muted</li>
                    <li><strong>preload</strong>: How to preload audio</li>
                </ul>
                
                <h3>Multiple Source Format Support:</h3>
                <div class="code-block">
&lt;audio controls&gt;
    &lt;source src="audio.mp3" type="audio/mpeg"&gt;
    &lt;source src="audio.ogg" type="audio/ogg"&gt;
    Your browser does not support the audio element.
&lt;/audio&gt;
                </div>
                
                <h3>Video Element: &lt;video&gt;&lt;/video&gt;</h3>
                <p>The video element embeds video content with similar attributes:</p>
                <ul>
                    <li><strong>poster</strong>: Thumbnail image before playback</li>
                    <li><strong>width/height</strong>: Video dimensions</li>
                </ul>
                
                <h3>Track Element for Subtitles:</h3>
                <div class="code-block">
&lt;video controls&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    &lt;track src="subtitles.vtt" kind="subtitles" srclang="en" label="English"&gt;
    Your browser does not support the video element.
&lt;/video&gt;
                </div>
                
                <h3>Browser Support:</h3>
                <ul>
                    <li>All modern browsers support .mp3 audio</li>
                    <li>All modern browsers support .mp4 video</li>
                    <li>autoplay may be restricted by browser policies</li>
                </ul>
            `,
            examples: [
                {
                    title: "Complete Audio Example",
                    content: `
                        <div class="code-block">
&lt;audio controls loop preload="metadata"&gt;
    &lt;source src="music.mp3" type="audio/mpeg"&gt;
    &lt;source src="music.ogg" type="audio/ogg"&gt;
    &lt;source src="music.wav" type="audio/wav"&gt;
    &lt;p&gt;Your browser doesn't support HTML5 audio. 
       &lt;a href="music.mp3"&gt;Download the audio file&lt;/a&gt;.&lt;/p&gt;
&lt;/audio&gt;
                        </div>
                    `
                },
                {
                    title: "Complete Video Example",
                    content: `
                        <div class="code-block">
&lt;video controls width="640" height="360" poster="thumbnail.jpg"&gt;
    &lt;source src="movie.mp4" type="video/mp4"&gt;
    &lt;source src="movie.webm" type="video/webm"&gt;
    &lt;track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English"&gt;
    &lt;track src="subtitles_es.vtt" kind="subtitles" srclang="es" label="Spanish"&gt;
    &lt;p&gt;Your browser doesn't support HTML5 video. 
       &lt;a href="movie.mp4"&gt;Download the video&lt;/a&gt;.&lt;/p&gt;
&lt;/video&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Multimedia Practice",
                    content: `
                        <p>Practice with audio and video:</p>
                        <ol>
                            <li>Embed an audio file with multiple format support</li>
                            <li>Create a video player with custom controls</li>
                            <li>Add subtitles to a video using track element</li>
                            <li>Experiment with different video attributes</li>
                            <li>Create a fallback for unsupported browsers</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why use multiple source elements for audio/video?",
                    answer: "Different browsers support different media formats. Providing multiple sources ensures broader compatibility. The browser will use the first format it supports. Always include MP3 for audio and MP4 for video as they have the widest support."
                },
                {
                    question: "Why doesn't autoplay work in some browsers?",
                    answer: "Browsers restrict autoplay to prevent unwanted noise and data usage. Chrome, for example, blocks autoplay with sound unless the user has interacted with the site. Use muted autoplay or trigger playback through user interaction for better compatibility."
                }
            ]
        },
                {
            id: "forms",
            title: "HTML Forms",
            content: `
                <h3>Form Element: &lt;form&gt;&lt;/form&gt;</h3>
                <p>Forms collect user input and send it to a server:</p>
                
                <h3>Form Attributes:</h3>
                <ul>
                    <li><strong>action</strong>: URL where form data is sent</li>
                    <li><strong>method</strong>: HTTP method (GET, POST)</li>
                    <li><strong>novalidate</strong>: Disables browser validation</li>
                    <li><strong>target</strong>: Where to display response (_blank, _self)</li>
                    <li><strong>autocomplete</strong>: Enable/disable autocomplete</li>
                </ul>
                
                <h3>Form Controls:</h3>
                <ul>
                    <li><strong>&lt;input&gt;</strong>: Various input types (text, email, password, etc.)</li>
                    <li><strong>&lt;textarea&gt;</strong>: Multi-line text input</li>
                    <li><strong>&lt;select&gt;</strong>: Dropdown list</li>
                    <li><strong>&lt;button&gt;</strong>: Clickable button</li>
                    <li><strong>&lt;label&gt;</strong>: Label for form controls</li>
                </ul>
                
                <h3>Input Attributes:</h3>
                <ul>
                    <li><strong>type</strong>: Defines input type (text, email, number, etc.)</li>
                    <li><strong>placeholder</strong>: Hint text</li>
                    <li><strong>name</strong>: Name for form data</li>
                    <li><strong>value</strong>: Default value</li>
                    <li><strong>required</strong>: Makes field mandatory</li>
                    <li><strong>readonly</strong>: Read-only field</li>
                    <li><strong>autofocus</strong>: Auto-focus on page load</li>
                    <li><strong>pattern</strong>: Regex validation pattern</li>
                </ul>
                
                <h3>Advanced Form Features:</h3>
                <ul>
                    <li><strong>&lt;datalist&gt;</strong>: Predefined options for input</li>
                    <li><strong>&lt;fieldset&gt;</strong>: Groups related controls</li>
                    <li><strong>&lt;legend&gt;</strong>: Caption for fieldset</li>
                    <li><strong>&lt;optgroup&gt;</strong>: Groups options in dropdown</li>
                </ul>
            `,
            examples: [
                {
                    title: "Complete Contact Form",
                    content: `
                        <div class="code-block">
&lt;form action="/submit" method="POST" novalidate&gt;
    &lt;fieldset&gt;
        &lt;legend&gt;Contact Information&lt;/legend&gt;
        
        &lt;label for="name"&gt;Name:&lt;/label&gt;
        &lt;input type="text" id="name" name="name" required autofocus&gt;
        
        &lt;label for="email"&gt;Email:&lt;/label&gt;
        &lt;input type="email" id="email" name="email" required&gt;
        
        &lt;label for="phone"&gt;Phone:&lt;/label&gt;
        &lt;input type="tel" id="phone" name="phone" pattern="[0-9]{10}"&gt;
    &lt;/fieldset&gt;
    
    &lt;label for="country"&gt;Country:&lt;/label&gt;
    &lt;select id="country" name="country"&gt;
        &lt;optgroup label="North America"&gt;
            &lt;option value="us"&gt;United States&lt;/option&gt;
            &lt;option value="ca"&gt;Canada&lt;/option&gt;
        &lt;/optgroup&gt;
        &lt;option value="other"&gt;Other&lt;/option&gt;
    &lt;/select&gt;
    
    &lt;label for="message"&gt;Message:&lt;/label&gt;
    &lt;textarea id="message" name="message" rows="4"&gt;&lt;/textarea&gt;
    
    &lt;button type="submit"&gt;Send Message&lt;/button&gt;
&lt;/form&gt;
                        </div>
                    `
                },
                {
                    title: "Input with Datalist",
                    content: `
                        <div class="code-block">
&lt;label for="browser"&gt;Choose browser:&lt;/label&gt;
&lt;input list="browsers" id="browser" name="browser"&gt;

&lt;datalist id="browsers"&gt;
    &lt;option value="Chrome"&gt;
    &lt;option value="Firefox"&gt;
    &lt;option value="Safari"&gt;
    &lt;option value="Edge"&gt;
    &lt;option value="Opera"&gt;
&lt;/datalist&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Form Building Practice",
                    content: `
                        <p>Practice creating different types of forms:</p>
                        <ol>
                            <li>Create a registration form with validation</li>
                            <li>Build a survey form with various input types</li>
                            <li>Create a search form with datalist</li>
                            <li>Make a contact form with proper labels and grouping</li>
                            <li>Experiment with different form methods and actions</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between GET and POST methods?",
                    answer: "GET appends form data to the URL (visible in address bar, limited length, bookmarkable). POST sends data in the request body (not visible, no length limits, not bookmarkable). Use GET for searches, POST for sensitive data or large submissions."
                },
                {
                    question: "Why should every form control have a label?",
                    answer: "Labels improve accessibility (screen readers), usability (clicking label focuses control), and provide context. Use the for attribute on labels matching the input's id, or wrap the input inside the label for implicit association."
                }
            ]
        },
        {
            id: "pre-element",
            title: "Preformatted Text Element",
            content: `
                <h3>Pre Element: &lt;pre&gt;&lt;/pre&gt;</h3>
                <p>The &lt;pre&gt; element displays preformatted text exactly as written:</p>
                
                <h3>Key Characteristics:</h3>
                <ul>
                    <li>Preserves spaces, line breaks, and tabs</li>
                    <li>Uses monospace font by default</li>
                    <li>Useful for code blocks, poetry, ASCII art</li>
                    <li>Doesn't collapse white space like regular HTML</li>
                </ul>
                
                <h3>When to Use Pre Element:</h3>
                <ul>
                    <li>Displaying code snippets</li>
                    <li>Showing terminal output</li>
                    <li>Poetry or text with specific formatting</li>
                    <li>ASCII art or text-based diagrams</li>
                    <li>Any content where spacing matters</li>
                </ul>
                
                <h3>Combining with Code Element:</h3>
                <p>Often used with &lt;code&gt; for semantic code representation:</p>
                <div class="code-block">
&lt;pre&gt;&lt;code&gt;
function hello() {
    console.log("Hello, World!");
}
&lt;/code&gt;&lt;/pre&gt;
                </div>
                
                <h3>CSS Styling for Pre Elements:</h3>
                <ul>
                    <li>Can be styled like any other element</li>
                    <li>Common styles: background, padding, border, overflow</li>
                    <li>Use <code>overflow: auto</code> for scrollable code blocks</li>
                </ul>
            `,
            examples: [
                {
                    title: "Basic Pre Example",
                    content: `
                        <div class="code-block">
&lt;pre&gt;
This    text   will
preserve   all   spaces
and
line
breaks
exactly as written.
&lt;/pre&gt;
                        </div>
                    `
                },
                {
                    title: "Code Block with Syntax",
                    content: `
                        <div class="code-block">
&lt;pre&gt;&lt;code class="language-html"&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;
&lt;/code&gt;&lt;/pre&gt;
                        </div>
                    `
                },
                {
                    title: "ASCII Art Example",
                    content: `
                        <div class="code-block">
&lt;pre&gt;
  ______
 /      \\
/        \\
|  STOP  |
\\        /
 \\______/
    ||
    ||
&lt;/pre&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Pre Element Practice",
                    content: `
                        <p>Practice using the pre element:</p>
                        <ol>
                            <li>Create a pre block with formatted poetry</li>
                            <li>Display a code snippet with proper indentation</li>
                            <li>Create simple ASCII art using pre</li>
                            <li>Compare pre with regular paragraph spacing</li>
                            <li>Style a pre element with CSS for better presentation</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When should I use pre vs code elements?",
                    answer: "Use &lt;code&gt; for inline code snippets within sentences. Use &lt;pre&gt; for block-level code that needs formatting preservation. They're often used together: &lt;pre&gt; preserves formatting, &lt;code&gt; provides semantic meaning for code."
                },
                {
                    question: "Does pre element affect SEO?",
                    answer: "Search engines can read content within &lt;pre&gt; elements, but they don't give it special treatment. For code snippets, using &lt;pre&gt;&lt;code&gt; together provides both formatting and semantic meaning, which can be beneficial for technical content."
                }
            ]
        },
        {
            id: "iframe",
            title: "IFrame Element",
            content: `
                <h3>IFrame Element: &lt;iframe src&gt;&lt;/iframe&gt;</h3>
                <p>The &lt;iframe&gt; element embeds another HTML page within the current page:</p>
                
                <h3>Key Attributes:</h3>
                <ul>
                    <li><strong>src</strong>: URL of page to embed</li>
                    <li><strong>width/height</strong>: Dimensions of iframe</li>
                    <li><strong>title</strong>: Accessibility title (required)</li>
                    <li><strong>name</strong>: Name for target attribute</li>
                    <li><strong>sandbox</strong>: Security restrictions</li>
                    <li><strong>allowfullscreen</strong>: Allow fullscreen mode</li>
                </ul>
                
                <h3>Common Uses of IFrames:</h3>
                <ul>
                    <li>Embedding videos (YouTube, Vimeo)</li>
                    <li>Google Maps embeds</li>
                    <li>Social media widgets</li>
                    <li>Third-party content</li>
                    <li>Document previews</li>
                </ul>
                
                <h3>Security Considerations:</h3>
                <ul>
                    <li>Some websites prevent embedding via X-Frame-Options</li>
                    <li>Use sandbox attribute to restrict capabilities</li>
                    <li>Be cautious with third-party content</li>
                    <li>Always include title attribute for accessibility</li>
                </ul>
                
                <h3>Sandbox Restrictions:</h3>
                <ul>
                    <li><strong>allow-forms</strong>: Allow form submission</li>
                    <li><strong>allow-scripts</strong>: Allow JavaScript execution</li>
                    <li><strong>allow-same-origin</strong>: Allow same-origin requests</li>
                    <li><strong>allow-popups</strong>: Allow popup windows</li>
                </ul>
            `,
            examples: [
                {
                    title: "Basic IFrame Example",
                    content: `
                        <div class="code-block">
&lt;!-- Embedding a website --&gt;
&lt;iframe 
    src="https://example.com" 
    width="800" 
    height="600" 
    title="Example Website Embed"&gt;
&lt;/iframe&gt;

&lt;!-- Fallback content --&gt;
&lt;iframe src="https://example.com" title="Example"&gt;
    &lt;p&gt;Your browser does not support iframes.&lt;/p&gt;
&lt;/iframe&gt;
                        </div>
                    `
                },
                {
                    title: "YouTube Video Embed",
                    content: `
                        <div class="code-block">
&lt;iframe 
    width="560" 
    height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen&gt;
&lt;/iframe&gt;
                        </div>
                    `
                },
                {
                    title: "Google Maps Embed",
                    content: `
                        <div class="code-block">
&lt;iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.99104868459418!3d40.741177779329105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3c1dc7b07%3A0x9c4b1e6a0b2b3b4c!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890" 
    width="600" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    title="Google Office Location"&gt;
&lt;/iframe&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "IFrame Practice",
                    content: `
                        <p>Practice using iframes:</p>
                        <ol>
                            <li>Embed a YouTube video on your page</li>
                            <li>Create a Google Maps embed for a location</li>
                            <li>Experiment with different iframe dimensions</li>
                            <li>Try embedding various websites (note which ones block iframes)</li>
                            <li>Add sandbox restrictions to an iframe</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why do some websites prevent iframe embedding?",
                    answer: "Websites use X-Frame-Options or Content-Security-Policy headers to prevent iframe embedding for security reasons (clickjacking attacks), to control their content's presentation, or to protect against content scraping. This is common with banking sites and social media platforms."
                },
                {
                    question: "What's the difference between iframe and embed elements?",
                    answer: "&lt;iframe&gt; is for embedding entire HTML documents, while &lt;embed&gt; is for external content like PDFs, Flash, or plugins. &lt;iframe&gt; is more versatile and widely supported for web content. &lt;embed&gt; is older and less commonly used in modern web development."
                }
            ]
        },
        {
            id: "html-entities",
            title: "HTML Entities and Special Characters",
            content: `
                <h3>What are HTML Entities?</h3>
                <p>HTML entities are codes used to display reserved characters or special symbols:</p>
                
                <h3>Why Use Entities?</h3>
                <ul>
                    <li>Display characters that have special meaning in HTML</li>
                    <li>Show symbols not available on keyboard</li>
                    <li>Ensure proper rendering across different browsers</li>
                    <li>Prevent code interpretation issues</li>
                </ul>
                
                <h3>Common HTML Entities:</h3>
                <ul>
                    <li><strong>&amp;lt;</strong> = &lt; (less than)</li>
                    <li><strong>&amp;gt;</strong> = &gt; (greater than)</li>
                    <li><strong>&amp;amp;</strong> = &amp; (ampersand)</li>
                    <li><strong>&amp;quot;</strong> = " (quotation mark)</li>
                    <li><strong>&amp;copy;</strong> = © (copyright)</li>
                    <li><strong>&amp;nbsp;</strong> = non-breaking space</li>
                    <li><strong>&amp;euro;</strong> = € (euro currency)</li>
                </ul>
                
                <h3>Numeric Character References:</h3>
                <ul>
                    <li><strong>&amp;#169;</strong> = © (decimal)</li>
                    <li><strong>&amp;#xA9;</strong> = © (hexadecimal)</li>
                    <li><strong>&amp;#128;</strong> = € (euro)</li>
                </ul>
                
                <h3>Mathematical Symbols:</h3>
                <ul>
                    <li><strong>&amp;pi;</strong> = π (pi)</li>
                    <li><strong>&amp;sum;</strong> = ∑ (summation)</li>
                    <li><strong>&amp;infin;</strong> = ∞ (infinity)</li>
                    <li><strong>&amp;radic;</strong> = √ (square root)</li>
                </ul>
            `,
            examples: [
                {
                    title: "Reserved Characters",
                    content: `
                        <div class="code-block">
&lt;!-- Without entities (would break HTML) --&gt;
&lt;p&gt;5 &lt; 10 &amp; 10 &gt; 5&lt;/p&gt;

&lt;!-- With entities (correct) --&gt;
&lt;p&gt;5 &amp;lt; 10 &amp;amp; 10 &amp;gt; 5&lt;/p&gt;

&lt;!-- Displaying HTML code --&gt;
&lt;p&gt;Use &amp;lt;p&amp;gt; for paragraphs&lt;/p&gt;
                        </div>
                    `
                },
                {
                    title: "Special Symbols",
                    content: `
                        <div class="code-block">
&lt;p&gt;Copyright &amp;copy; 2023 My Company&lt;/p&gt;
&lt;p&gt;Price: &amp;euro;50.00&lt;/p&gt;
&lt;p&gt;Mathematical constant: &amp;pi; ≈ 3.14159&lt;/p&gt;
&lt;p&gt;Registered trademark: &amp;reg;&lt;/p&gt;
&lt;p&gt;Temperature: 25&amp;deg;C&lt;/p&gt;
&lt;p&gt;I love HTML&amp;excl;&lt;/p&gt;
                        </div>
                    `
                },
                {
                    title: "Non-Breaking Spaces",
                    content: `
                        <div class="code-block">
&lt;!-- Prevents line breaks between words --&gt;
&lt;p&gt;Dr.&amp;nbsp;John&amp;nbsp;Smith&lt;/p&gt;
&lt;p&gt;10&amp;nbsp;km/h&lt;/p&gt;
&lt;p&gt;Chapter&amp;nbsp;1: Introduction&lt;/p&gt;

&lt;!-- Multiple spaces --&gt;
&lt;p&gt;First&nbsp;&nbsp;&nbsp;Second&nbsp;&nbsp;&nbsp;Third&lt;/p&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "HTML Entities Practice",
                    content: `
                        <p>Practice using HTML entities:</p>
                        <ol>
                            <li>Display mathematical formulas using entities</li>
                            <li>Create a copyright notice with proper symbols</li>
                            <li>Write HTML code examples using entity escapes</li>
                            <li>Use non-breaking spaces in appropriate contexts</li>
                            <li>Create a list of currency symbols using entities</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "When must I use HTML entities?",
                    answer: "You must use entities for characters that have special meaning in HTML: &lt;, &gt;, &amp;, and sometimes quotes. For other characters, modern browsers usually handle Unicode well, but entities ensure consistency. Use entities when you need specific symbols not on your keyboard or want guaranteed cross-browser compatibility."
                },
                {
                    question: "What's the difference between &amp;nbsp; and regular spaces?",
                    answer: "Regular spaces allow line breaks, while &amp;nbsp; (non-breaking space) prevents browsers from breaking lines at that space. Use &amp;nbsp; between words that should stay together on the same line, like in names, dates, or measurements."
                }
            ]
        },
        {
            id: "html5-semantic",
            title: "HTML5 Semantic Elements Deep Dive",
            content: `
                <h3>Complete Semantic Elements List</h3>
                <p>HTML5 introduced semantic elements that clearly describe their meaning:</p>
                
                <h3>Document Structure:</h3>
                <ul>
                    <li><strong>&lt;header&gt;</strong>: Introductory content or navigation</li>
                    <li><strong>&lt;nav&gt;</strong>: Navigation links</li>
                    <li><strong>&lt;main&gt;</strong>: Dominant content of the document</li>
                    <li><strong>&lt;article&gt;</strong>: Self-contained composition</li>
                    <li><strong>&lt;section&gt;</strong>: Thematic grouping of content</li>
                    <li><strong>&lt;aside&gt;</strong>: Sidebar or complementary content</li>
                    <li><strong>&lt;footer&gt;</strong>: Footer for its nearest section</li>
                </ul>
                
                <h3>Content Semantics:</h3>
                <ul>
                    <li><strong>&lt;figure&gt;</strong>: Self-contained content with caption</li>
                    <li><strong>&lt;figcaption&gt;</strong>: Caption for figure</li>
                    <li><strong>&lt;mark&gt;</strong>: Highlighted text</li>
                    <li><strong>&lt;time&gt;</strong>: Machine-readable date/time</li>
                    <li><strong>&lt;details&gt;</strong>: Disclosure widget</li>
                    <li><strong>&lt;summary&gt;</strong>: Summary for details element</li>
                    <li><strong>&lt;progress&gt;</strong>: Progress indicator</li>
                    <li><strong>&lt;meter&gt;</strong>: Scalar measurement</li>
                </ul>
                
                <h3>Text-Level Semantics:</h3>
                <ul>
                    <li><strong>&lt;data&gt;</strong>: Machine-readable equivalent</li>
                    <li><strong>&lt;cite&gt;</strong>: Title of a work</li>
                    <li><strong>&lt;dfn&gt;</strong>: Defining instance of a term</li>
                    <li><strong>&lt;abbr&gt;</strong>: Abbreviation or acronym</li>
                    <li><strong>&lt;ruby&gt;</strong>: Ruby annotations (for East Asian typography)</li>
                </ul>
            `,
            examples: [
                {
                    title: "Complete Semantic Layout",
                    content: `
                        <div class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Semantic Example&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Website Title&lt;/h1&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;article&gt;
            &lt;h2&gt;Article Title&lt;/h2&gt;
            &lt;p&gt;Published on &lt;time datetime="2023-01-01"&gt;January 1, 2023&lt;/time&gt;&lt;/p&gt;
            &lt;figure&gt;
                &lt;img src="image.jpg" alt="Description"&gt;
                &lt;figcaption&gt;Image caption&lt;/figcaption&gt;
            &lt;/figure&gt;
        &lt;/article&gt;
        
        &lt;aside&gt;
            &lt;h3&gt;Related Links&lt;/h3&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/aside&gt;
    &lt;/main&gt;
    
    &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2023 Company Name&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </div>
                    `
                },
                {
                    title: "Interactive Semantic Elements",
                    content: `
                        <div class="code-block">
&lt;!-- Details and Summary --&gt;
&lt;details&gt;
    &lt;summary&gt;Click to expand&lt;/summary&gt;
    &lt;p&gt;Hidden content revealed when clicked.&lt;/p&gt;
&lt;/details&gt;

&lt;!-- Progress bar --&gt;
&lt;label for="file"&gt;Download progress:&lt;/label&gt;
&lt;progress id="file" value="70" max="100"&gt;70%&lt;/progress&gt;

&lt;!-- Meter --&gt;
&lt;label for="fuel"&gt;Fuel level:&lt;/label&gt;
&lt;meter id="fuel" min="0" max="100" value="75"&gt;75%&lt;/meter&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Semantic HTML Practice",
                    content: `
                        <p>Practice using semantic elements:</p>
                        <ol>
                            <li>Convert a div-based layout to semantic HTML5</li>
                            <li>Create a blog post with proper article structure</li>
                            <li>Build a product page using figure and figcaption</li>
                            <li>Implement an FAQ section using details and summary</li>
                            <li>Create a dashboard with progress and meter elements</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What are the SEO benefits of semantic HTML?",
                    answer: "Semantic HTML helps search engines understand your content structure and hierarchy. Proper use of header, article, section, and other semantic elements can improve your page's relevance for specific keywords and enhance rich snippets in search results."
                },
                {
                    question: "How do screen readers benefit from semantic elements?",
                    answer: "Screen readers use semantic elements to provide better navigation and context. Users can jump between headers, navigate articles, or understand content relationships. Semantic markup makes websites more accessible to people with disabilities."
                }
            ]
        },
        {
            id: "accessibility",
            title: "HTML Accessibility",
            content: `
                <h3>Web Accessibility (a11y)</h3>
                <p>Accessibility ensures websites can be used by people with disabilities:</p>
                
                <h3>Key Accessibility Principles:</h3>
                <ul>
                    <li><strong>Perceivable</strong>: Available to senses (sight, hearing, touch)</li>
                    <li><strong>Operable</strong>: Usable with various input methods</li>
                    <li><strong>Understandable</strong>: Clear and predictable</li>
                    <li><strong>Robust</strong>: Works with current and future tools</li>
                </ul>
                
                <h3>Essential HTML Accessibility Features:</h3>
                <ul>
                    <li><strong>Alt text for images</strong>: Descriptive text for screen readers</li>
                    <li><strong>Proper heading structure</strong>: Logical hierarchy (h1-h6)</li>
                    <li><strong>Form labels</strong>: Associate labels with form controls</li>
                    <li><strong>ARIA attributes</strong>: Enhance accessibility when HTML isn't enough</li>
                    <li><strong>Keyboard navigation</strong>: All functionality available via keyboard</li>
                    <li><strong>Color contrast</strong>: Sufficient contrast for readability</li>
                </ul>
                
                <h3>ARIA (Accessible Rich Internet Applications):</h3>
                <ul>
                    <li><strong>aria-label</strong>: Provides invisible label</li>
                    <li><strong>aria-describedby</strong>: References descriptive text</li>
                    <li><strong>aria-hidden</strong>: Hides from screen readers</li>
                    <li><strong>role</strong>: Defines element purpose</li>
                    <li><strong>aria-live</strong>: Announces dynamic content changes</li>
                </ul>
                
                <h3>Semantic HTML for Accessibility:</h3>
                <p>Using proper semantic elements is the foundation of accessibility:</p>
                <ul>
                    <li>Use <strong>&lt;button&gt;</strong> for buttons, not <strong>&lt;div&gt;</strong></li>
                    <li>Use <strong>&lt;nav&gt;</strong> for navigation, not <strong>&lt;div&gt;</strong></li>
                    <li>Use <strong>&lt;main&gt;</strong>, <strong>&lt;header&gt;</strong>, <strong>&lt;footer&gt;</strong></li>
                    <li>Proper form structure with <strong>&lt;label&gt;</strong> elements</li>
                </ul>
            `,
            examples: [
                {
                    title: "Accessible Form Example",
                    content: `
                        <div class="code-block">
&lt;form aria-labelledby="form-title"&gt;
    &lt;h2 id="form-title"&gt;Contact Form&lt;/h2&gt;
    
    &lt;div&gt;
        &lt;label for="name"&gt;Full Name:&lt;/label&gt;
        &lt;input type="text" id="name" aria-required="true"&gt;
        &lt;span id="name-error" aria-live="polite"&gt;&lt;/span&gt;
    &lt;/div&gt;
    
    &lt;fieldset&gt;
        &lt;legend&gt;Preferred Contact Method&lt;/legend&gt;
        &lt;input type="radio" id="email" name="contact"&gt;
        &lt;label for="email"&gt;Email&lt;/label&gt;
        
        &lt;input type="radio" id="phone" name="contact"&gt;
        &lt;label for="phone"&gt;Phone&lt;/label&gt;
    &lt;/fieldset&gt;
    
    &lt;button type="submit" aria-describedby="submit-help"&gt;Submit&lt;/button&gt;
    &lt;span id="submit-help" class="visually-hidden"&gt;Form will be sent to our team&lt;/span&gt;
&lt;/form&gt;
                        </div>
                    `
                },
                {
                    title: "Accessible Navigation",
                    content: `
                        <div class="code-block">
&lt;nav aria-label="Main navigation"&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="#home" aria-current="page"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;
            &lt;a href="#services" aria-haspopup="true" aria-expanded="false"&gt;Services&lt;/a&gt;
            &lt;ul aria-label="Services submenu"&gt;
                &lt;li&gt;&lt;a href="#web"&gt;Web Development&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#design"&gt;Design&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Accessibility Practice",
                    content: `
                        <p>Practice implementing accessibility features:</p>
                        <ol>
                            <li>Add proper alt text to all images on a page</li>
                            <li>Create a form with complete accessibility features</li>
                            <li>Implement keyboard navigation for interactive elements</li>
                            <li>Use ARIA attributes to enhance complex widgets</li>
                            <li>Test your page with screen reader software</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "What's the difference between aria-label and aria-labelledby?",
                    answer: "aria-label provides a direct text string as the label, while aria-labelledby references the ID of another element that contains the label text. Use aria-label for simple labels and aria-labelledby when you want to reference existing visible text."
                },
                {
                    question: "Why is keyboard navigation important?",
                    answer: "Keyboard navigation is essential for users who cannot use a mouse (motor disabilities), prefer keyboard efficiency, or use screen readers. All interactive elements should be focusable and operable using only the keyboard, following a logical tab order."
                }
            ]
        },
        {
            id: "html-task",
            title: "HTML Research Task",
            content: `
                <h3>Research Task: Explore Additional HTML Elements</h3>
                <p>Your task is to research and document additional HTML elements beyond what we've covered:</p>
                
                <h3>Research Categories:</h3>
                <ul>
                    <li><strong>Obsolete Elements</strong>: Elements no longer in HTML5</li>
                    <li><strong>Experimental Elements</strong>: New or proposed elements</li>
                    <li><strong>Specialized Elements</strong>: Elements for specific use cases</li>
                    <li><strong>Global Attributes</strong>: Attributes that work on all elements</li>
                </ul>
                
                <h3>Research Guidelines:</h3>
                <ul>
                    <li>Choose at least 10 less-common HTML elements</li>
                    <li>Document their purpose and usage</li>
                    <li>Provide code examples for each</li>
                    <li>Note browser support and limitations</li>
                    <li>Explain when to use (and when not to use) each element</li>
                </ul>
                
                <h3>Suggested Elements to Research:</h3>
                <ul>
                    <li><strong>&lt;template&gt;</strong>: Client-side content template</li>
                    <li><strong>&lt;slot&gt;</strong>: Placeholder in web components</li>
                    <li><strong>&lt;dialog&gt;</strong>: Modal dialog box</li>
                    <li><strong>&lt;picture&gt;</strong>: Responsive images</li>
                    <li><strong>&lt;map&gt;</strong> and <strong>&lt;area&gt;</strong>: Image maps</li>
                    <li><strong>&lt;output&gt;</strong>: Calculation results</li>
                    <li><strong>&lt;wbr&gt;</strong>: Word break opportunity</li>
                    <li><strong>&lt;bdi&gt;</strong>: Bi-directional isolation</li>
                    <li><strong>&lt;bdo&gt;</strong>: Bi-directional override</li>
                    <li><strong>&lt;canvas&gt;</strong>: Drawing graphics via JavaScript</li>
                </ul>
                
                <h3>Documentation Format:</h3>
                <p>Create a well-structured HTML file documenting your findings with:</p>
                <ul>
                    <li>Clear headings and organization</li>
                    <li>Code examples in &lt;pre&gt;&lt;code&gt; blocks</li>
                    <li>Browser compatibility notes</li>
                    <li>Practical use cases</li>
                    <li>Accessibility considerations</li>
                </ul>
            `,
            examples: [
                {
                    title: "Research Template Example",
                    content: `
                        <div class="code-block">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;title&gt;HTML Elements Research&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;HTML Elements Research&lt;/h1&gt;
    &lt;/header&gt;
    
    &lt;main&gt;
        &lt;article id="template-element"&gt;
            &lt;h2&gt;&amp;lt;template&amp;gt; Element&lt;/h2&gt;
            &lt;p&gt;Purpose: Contains client-side content that can be instantiated...&lt;/p&gt;
            
            &lt;h3&gt;Example Usage:&lt;/h3&gt;
            &lt;pre&gt;&lt;code&gt;
&amp;lt;template id="user-card"&amp;gt;
    &amp;lt;div class="card"&amp;gt;
        &amp;lt;h3&amp;gt;&amp;lt;/h3&amp;gt;
        &amp;lt;p&amp;gt;&amp;lt;/p&amp;gt;
    &amp;lt;/div&amp;gt;
&amp;lt;/template&amp;gt;
            &lt;/code&gt;&lt;/pre&gt;
            
            &lt;h3&gt;Browser Support:&lt;/h3&gt;
            &lt;p&gt;Supported in all modern browsers...&lt;/p&gt;
        &lt;/article&gt;
        
        &lt;!-- More elements here --&gt;
    &lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;
                        </div>
                    `
                }
            ],
            practices: [
                {
                    title: "Research Task Implementation",
                    content: `
                        <p>Complete the research task:</p>
                        <ol>
                            <li>Research at least 10 additional HTML elements</li>
                            <li>Create a comprehensive HTML documentation file</li>
                            <li>Include working examples for each element</li>
                            <li>Test browser compatibility</li>
                            <li>Add accessibility notes for each element</li>
                            <li>Validate your HTML using the W3C validator</li>
                        </ol>
                    `
                }
            ],
            questions: [
                {
                    question: "Why is it important to research beyond basic HTML elements?",
                    answer: "Researching advanced and specialized HTML elements helps you build more semantic, accessible, and efficient websites. Understanding the full HTML specification allows you to choose the right tool for each job, write cleaner code, and stay current with web standards evolution."
                },
                {
                    question: "How can I test browser compatibility for HTML elements?",
                    answer: "Use resources like MDN Web Docs, Can I Use, and browser developer tools to test compatibility. Create test cases in different browsers, use feature detection, and consider polyfills for older browsers. Always test on actual devices when possible."
                }
            ]
        }
        // Additional topics can be added here as needed
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
