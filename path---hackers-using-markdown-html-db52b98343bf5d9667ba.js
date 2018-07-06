webpackJsonp([0x6570abab06b5],{534:function(e,n){e.exports={data:{markdownRemark:{html:'<p>HackerOne supports the following markdown syntax on reports, profiles, and security pages.</p>\n<h3>HEADERS</h3>\n<pre><code>A First Level Header\n=====================\n\nA Second Level Header\n---------------------\n\n### Header 3\n</code></pre>\n<h1>A First Level Header</h1>\n<h2>A Second Level Header</h2>\n<h3>Header 3</h3>\n<h3>BLOCKQUOTE</h3>\n<pre><code>>text in blockquote\n>more text in blockquote\n</code></pre>\n<blockquote>\n<p>text in blockquote</p>\n</blockquote>\n<blockquote>\n<p>more text in blockquote</p>\n</blockquote>\n<h3>TEXT EMPHASIS</h3>\n<pre><code>*This text is italicized*\n_This text is underlined_\n**This text is bold**\n__This text is bold__\n--This text is deleted--\n</code></pre>\n<p><em>This text is italicized</em></p>\n<p><u>This text is underlined</u></p>\n<p><strong>This text is bold</strong></p>\n<p><strong>This text is bold</strong></p>\n<p><del>This text is deleted</del></p>\n<h3>LISTS</h3>\n<h4>Unordered Lists</h4>\n<pre><code>* Candy.\n* Gum.\n* Juice.\n</code></pre>\n<p>this:</p>\n<pre><code>+ Candy.\n+ Gum.\n+ Juice.\n</code></pre>\n<p>and this:</p>\n<pre><code>- Candy\n- Gum.\n- Juice.\n</code></pre>\n<p>all produce the same output:</p>\n<ul>\n<li>Candy.</li>\n<li>Gum.</li>\n<li>Juice.</li>\n</ul>\n<h4>Numbered Lists</h4>\n<pre><code>1. Red\n2. Green\n3. Blue\n</code></pre>\n<ol>\n<li>Red</li>\n<li>Green</li>\n<li>Blue</li>\n</ol>\n<p>If you put blank lines between items, you’ll get <code>&#x3C;p></code> tags for the list item text. You can create multi-paragraph list items by indenting the paragraphs by 4 spaces or 1 tab:</p>\n<pre><code>* A list item.\n\n  With multiple paragraphs.\n\n* Another item in the list.\n</code></pre>\n<ul>\n<li>\n<p>A list item.</p>\n<p>With multiple paragraphs.</p>\n</li>\n<li>\n<p>Another item in the list.</p>\n</li>\n</ul>\n<h3>LINKS</h3>\n<p>Markdown supports two styles for creating links: <em>inline</em> and <em>reference</em>. With both styles, you use square brackets to delimit the text you want to turn into a link.</p>\n<p>Inline-style links use parentheses immediately after the link text. For example:</p>\n<pre><code>This is an [example link](http://example.com/).\n</code></pre>\n<p>This is an <a href="http://example.com/">example link</a>.</p>\n<p>Optionally, you may include a title attribute in the parentheses. Hover on the link to see the title:</p>\n<pre><code>This is an [example link](http://example.com/ "With a Title").\n</code></pre>\n<p>This is an <a href="http://example.com/" title="With a Title">example link</a>.</p>\n<p>Reference-style links allow you to refer to your links by names, which you define elsewhere in your document:</p>\n<pre><code>I get 10 times more traffic from [Google][1] than from\n[Yahoo][2] or [MSN][3].\n\n[1]: http://google.com/        "Google"\n[2]: http://search.yahoo.com/  "Yahoo Search"\n[3]: http://search.msn.com/    "MSN Search"\n</code></pre>\n<p>I get 10 times more traffic from <a href="http://google.com/">Google</a> than from <a href="http://search.yahoo.com/">Yahoo</a> or <a href="http://search.msn.com/">MSN</a>.</p>\n<p>The title attribute is optional. Link names may contain letters, numbers and spaces, but are not case sensitive:</p>\n<pre><code>I start my morning with a cup of coffee and\n[The New York Times][NY Times].\n\n[ny times]: http://www.nytimes.com/\n</code></pre>\n<p>I start my morning with a cup of coffee and <a href="http://www.nytimes.com/">The New York Times</a>.</p>\n<h3>CODE</h3>\n<p>In a regular paragraph, you can create code span by wrapping text in back tick quotes. Any ampersands (&#x26;) and angle brackets (&#x3C; or >) will automatically be translated into HTML entities. This makes it easy to use Markdown to write about HTML example code.</p>\n<pre><code>The text has sample `code`\n</code></pre>\n<p>The text has sample code</p>\n<p>To specify an entire block of pre-formatted code, wrap the text within 3 back tick quotes ```. Just like with code spans, &#x26;, &#x3C;, and > characters will be escaped automatically.</p>\n<pre><code>This is a multiline code block.\n</code></pre>\n<p>To use syntax highlighting, specify the content type after the three opening back tick quotes.</p>\n<pre><code>```javascript\ndocument.location = \'https://hackerone.com\';\n</code></pre>\n<p>Go to the following web page to see which content types are available for syntax highlighting: <a href="https://github.com/jneen/rouge/tree/master/lib/rouge/demos">https://github.com/jneen/rouge/tree/master/lib/rouge/demos</a>.</p>\n<h3>USER MENTIONS</h3>\n<p>You can mention a user by prefixing username with \'@\' symbol</p>\n<pre><code>@demo-member reported the issue\n</code></pre>\n<p>@demo-member reported the issue</p>\n<h3>REPORT REFERENCES</h3>\n<p>You can reference a report by prefixing report id with \'#\' symbol</p>\n<pre><code>#105887 is a publicly disclosed bug\n</code></pre>\n<p><a href="https://hackerone.com/reports/105887">#105887</a> is a publicly disclosed bug</p>\n<h3>ATTACHMENT REFERENCES</h3>\n<p>You can reference an attachment while writing reports, comments in reports and report summary. You can do this by writing \'F\' followed by attachment id (F). The attachment id is displayed before the attachment name once the upload is successful.</p>\n<p>Example: Consider a user is creating a report and uploads an attachment. Once the attachment is uploaded successfully, you will see see the reference id with the attachment name.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/markdown-1-ed165b333bbf0620a4009bda0d32f047-5f5eb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 55.984919886899156%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABP0lEQVQoz4VTXU+EMBC8//9n9EkTE33x4pmo8R5OjTFegkQ4zjuFtlAopWO3AuEzbpi0adnZ2R1YcKkQHmJwliBJEuR5DqUUtC4BY+wzRlVVvVVr7fYUi68fjpf3D3z6PjzPgxACRVGAc2bBwRhzaPZpmrr7LkgEkTpCYROjXdgmUqWyLMEsAZHkUrqEBkRAHQzRKiQSUhYEAaIoQpZl/TZcm/g3WkKqSLOjVrszGYaZYe3O1RGOKtWJ4eGI1foJN48b7L/j9m5o0EjhlIMUJ1dLnF/c4vTsGvfPrzBWtRzMM8tSxHGCY8yg7Nx7CnukNvlydYflwxqbty24SKFqN7vm0EpFMgs9bLmRPzXDRjmdN2Y1MJX5Q50/SdgqrTFnMt2oyn6LWtr3JkzpDtnM/CVdM3RVYi98BHwLWQp39guqsFvtA2phggAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="markdown-1"\n        title=""\n        src="/static/markdown-1-ed165b333bbf0620a4009bda0d32f047-e7ffa.png"\n        srcset="/static/markdown-1-ed165b333bbf0620a4009bda0d32f047-49813.png 125w,\n/static/markdown-1-ed165b333bbf0620a4009bda0d32f047-dc8a5.png 250w,\n/static/markdown-1-ed165b333bbf0620a4009bda0d32f047-e7ffa.png 500w,\n/static/markdown-1-ed165b333bbf0620a4009bda0d32f047-dda24.png 750w,\n/static/markdown-1-ed165b333bbf0620a4009bda0d32f047-c5f18.png 1000w,\n/static/markdown-1-ed165b333bbf0620a4009bda0d32f047-5f5eb.png 1061w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>Now you can reference the attachment in the report by writing \'F1\' and the attachment is referenced in the report as shown below.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/markdown-2-71108921d4ae55ba604da9b95b844b96-9406f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 43.59214218896165%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsSAAALEgHS3X78AAAA5ElEQVQoz32RXQuCMBSG+/8/pcsg6CKCKCGijwu9qYwCIQ1c6nJu7suO00rLeq62d+c9593WuwTXaxCEIWKMcc6llI57mm9sxz1LpbTWqo0QZU1h6AXGjNANJCX47nQeThbb5X4wtpzDkRKSpilrQCl9mxFCSYKhAoZIIWZbuz+ajKcra22nWaZkSXNyta3Nnuf5Fx9agERzHt2zOyFxElPGii60oTZDLCHKGHDBV8s/tMxNFSJps6gS6i6qo08zQAzsB/AuURSHERavB2uaoQL+DGPMn+R5ztuA0h37O+qv/JXlAd4aCqcNDpIEAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="markdown-2"\n        title=""\n        src="/static/markdown-2-71108921d4ae55ba604da9b95b844b96-e7ffa.png"\n        srcset="/static/markdown-2-71108921d4ae55ba604da9b95b844b96-49813.png 125w,\n/static/markdown-2-71108921d4ae55ba604da9b95b844b96-dc8a5.png 250w,\n/static/markdown-2-71108921d4ae55ba604da9b95b844b96-e7ffa.png 500w,\n/static/markdown-2-71108921d4ae55ba604da9b95b844b96-dda24.png 750w,\n/static/markdown-2-71108921d4ae55ba604da9b95b844b96-c5f18.png 1000w,\n/static/markdown-2-71108921d4ae55ba604da9b95b844b96-9406f.png 1069w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>When the link is clicked, the attachment is displayed in the modal.\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/markdown-3-66a33e690be39b401e0df94dde3c9e24-cfd25.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 110.78524124881741%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAIAAABPIytRAAAACXBIWXMAAAsSAAALEgHS3X78AAADXElEQVQ4y2MIDAz09PSsrq7eu3fvoUOHLl68eB4Gzp49e+HCxSuXr1+8cOnc+XNAcPny5ZycHA8Pj4CAAH9/fwYg5ezsPGHChP/////+/fs/AvwDifz59ubj3V9/vgDZf//+BZLl5eWOjo6+vr7e3t4MQANMTEyampog0v/+/QOSf/7+AXKPXFgRVS/slMtw7OICIPfnrx9AsqioyMbGBmi5m5sbyGZXV9fu7m6QXWCtQMbLB/ffv33UtdW8bIn4/muTIVIQm8vKyhwcHHx8fLy8vBjCIyI8vb0nTpwIUgGW/v31y+0De5bnxq7LDljTUHph7/7PHz7AnV1fX+/n5xcZGRkeHs4AxG6urv39/RBf/rp364KD6SpN1VZp2Q4+kRIugXge/mY/vw8vXkBCor6+AejY6OhooH6wZjd3iGYgeF+T88bZ7ElO2i519cVsLNO4+boExNJZeda3t0MU1NTUePv4wTRHRLp5eEGc/efP75deFh8CHH5uW3/O3HAxA8N8Pt4eXsEaLv6p4VEQzQ0NDcAwjoqKAmkODYtwcnbt7+uFRNWjYNeHKnwPnA12igss5WBZKMTfIybRyC80KywCormqqgoYSVCbIyMiPNzd+/r6IHLP6qrOaSqdMNJZIyczU1hooohQr4xMHZ/AltY2iILGxkagn6E2h4WFAWOsv38CRO7DkcOb5BVWKyjOlZZpFxVtEpesERYtV1R+fvcuFs1ABwD9MHkyKDL//gGljXNd3b1C4i28ghkcPNFs3EkCIodXrACFCDj9oWiOiYkBJm+IZlA8/wMliL2z5vSGRhZ7eucGBm1fvBASyb//gDQ3NDYgNEdGRnl5+0BCGxhgf/78gdgPTdxg8Pv3L1CSBSeShoZGRGgHh4U7OLv2gUMbmLKhyoGJHAmB3Pz397W3xx7/uAKLqkhogPn4+Obl5c2fv3AxGCwCASgbApYsXrJg4fy6yYWtMyszMzOCg4MjwYAhJCQEkjm9vb2AZGBAoJePr4+vrx8Q+fkFwUBwUHBkaHRESBQwRQK1RUREQG0GBhjQCCAnCgxiwCAaA0RFR0ZFA90bhdAchQTgongATGUEJLRRQDgYAI0IxwaAzgwNDQ0BJukIHJqDwYAczUAQBgYRMAB3CzKAqAQAgsPBnEQn4EYAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="markdown-3"\n        title=""\n        src="/static/markdown-3-66a33e690be39b401e0df94dde3c9e24-e7ffa.png"\n        srcset="/static/markdown-3-66a33e690be39b401e0df94dde3c9e24-49813.png 125w,\n/static/markdown-3-66a33e690be39b401e0df94dde3c9e24-dc8a5.png 250w,\n/static/markdown-3-66a33e690be39b401e0df94dde3c9e24-e7ffa.png 500w,\n/static/markdown-3-66a33e690be39b401e0df94dde3c9e24-dda24.png 750w,\n/static/markdown-3-66a33e690be39b401e0df94dde3c9e24-c5f18.png 1000w,\n/static/markdown-3-66a33e690be39b401e0df94dde3c9e24-cfd25.png 1057w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3>INLINE IMAGES AND VIDEOS</h3>\n<p>You can inline images and videos in the report description, comments and report summary by writing the attachment reference id within curly braces (as in {F:id}). Example: For the above attachment, the markdown</p>\n<pre><code> Here is an inlined image of an apple {F1}\n</code></pre>\n<p>will render the following:\n\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/markdown-4-94f6c12eda5e20116a53c9e302f7fee1-cfd25.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 500px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 82.40302743614002%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAABrklEQVQoz4WSu0vEQBDG054IXmGhCDYWNraCICKC2NpZ2VodYilcKYIIVmIh+AL/AsHKVhA7uUbFO1/BM4kR3dxmN9lkH3GS9eAe0fsRkuzufDszu5/hfOP7J7NefzNNMwzCKIoIIZRS3yd+ExhGLTDGhBBJkhi4gR3bxhCCfSkVrCHkIYRgDJsomfCYQ3TcjpQyFXue9/pqWpbtui4EcS58QnCjQSmJmHh3H/zgC+KUUkkLemhAFaCHJLAZTOktpUqrurw9XD+Z+ECP2YzMESft6GZix77e2d5bmjotl95rz2m07ClWSotRefVmfva4b6BsGJvTMyGlHZXniNOyITnx3aUFa3nxbHBgv1jcGhu3qtWO5H9k5hy+tbXSeX/hYHhoo1DYnZ3jcaxXe/WcidHt3dHkVKm/uDIyWrm4SA8sa6eHWJ85/HzbTuXq6uXpsfue/hRrD/GmDSAoYr/GAm+wkIELGiTg2mEdYs655yGMcRgEAaXwYi3AEMzrEyqEzC+bZkDzIoNniCYyReRfVXd7/2B0T6nsyUUo/hnUbfLCOM0X/4NKVCxYJAJt9R/N0IItjYKMBwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="markdown-4"\n        title=""\n        src="/static/markdown-4-94f6c12eda5e20116a53c9e302f7fee1-e7ffa.png"\n        srcset="/static/markdown-4-94f6c12eda5e20116a53c9e302f7fee1-49813.png 125w,\n/static/markdown-4-94f6c12eda5e20116a53c9e302f7fee1-dc8a5.png 250w,\n/static/markdown-4-94f6c12eda5e20116a53c9e302f7fee1-e7ffa.png 500w,\n/static/markdown-4-94f6c12eda5e20116a53c9e302f7fee1-dda24.png 750w,\n/static/markdown-4-94f6c12eda5e20116a53c9e302f7fee1-c5f18.png 1000w,\n/static/markdown-4-94f6c12eda5e20116a53c9e302f7fee1-cfd25.png 1057w"\n        sizes="(max-width: 500px) 100vw, 500px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',frontmatter:{title:"Using Markdown",id:"hackers/using-markdown",path:"/hackers/using-markdown.html",description:null}}},pathContext:{}}}});
//# sourceMappingURL=path---hackers-using-markdown-html-db52b98343bf5d9667ba.js.map