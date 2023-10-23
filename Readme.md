### 1.HTML Introduction

HTML (Hypertext Markup Language) is the standard language used to create web pages and define their structure and content. It's a markup language that utilizes a system of tags and attributes to structure and format the content on a web page. Here's a comprehensive overview of HTML:

**1. HTML is a Markup Language:**
   - HTML is not a programming language; it's a markup language used to structure and format content on the web.
   - It consists of a series of elements or tags that define the structure of a web page.

**2. Structure of an HTML Document:**
   - An HTML document typically consists of two main sections: the head and the body.
   - The `<head>` section contains metadata, such as the title, character set, and links to external resources (e.g., stylesheets).
   - The `<body>` section contains the visible content of the web page.

**3. HTML Elements and Tags:**
   - HTML documents are built using elements (also called tags) that define the various parts of the content.
   - Elements are enclosed in angle brackets (`< >`).
   - Most elements have an opening tag (e.g., `<p>`) and a closing tag (e.g., `</p>`) to define the start and end of the element's content.
   - Some elements, like line breaks, are self-closing (e.g., `<br />`).

**4. Hierarchical Structure:**
   - HTML elements are organized hierarchically, forming a tree-like structure. Elements can be nested inside other elements.
   - The `<html>` element is the root element that encloses all other elements on the page.

**5. Attributes:**
   - HTML elements can have attributes that provide additional information or settings.
   - Attributes are added to the opening tag of an element and have a name and a value (e.g., `<img src="image.jpg" alt="An image">`).

**6. Text Content:**
   - HTML can display text content, which can include headings, paragraphs, lists, links, and more.
   - Text can be formatted using elements like `<strong>`, `<em>`, and `<span>`.

**7. Links and Anchors:**
   - The `<a>` (anchor) element is used to create hyperlinks, allowing users to navigate between web pages.

**8. Lists:**
   - HTML supports both ordered lists (with numbers) created using `<ol>` and list items (`<li>`) and unordered lists (with bullets) created using `<ul>` and `<li>`.

**9. Images:**
   - Images are displayed using the `<img>` element, with the `src` attribute specifying the image file and the `alt` attribute providing alternative text.

**10. Tables:**
   - Tables are created using the `<table>`, `<tr>` (table row), `<th>` (table header), and `<td>` (table data) elements.

**11. Forms:**
   - HTML includes form elements like `<form>`, `<input>`, `<select>`, and `<button` for collecting user input.

**12. Semantic HTML:**
   - Semantic elements like `<header>`, `<nav>`, `<section>`, and `<footer` provide meaning and structure to the content

> https://htmlreference.io/

### 2. Closing vs Self-Closing Tags

HTML tags can be categorized into two main types: closing tags and self-closing tags.

- **Closing Tags**: These tags have both an opening and a closing part. They enclose content within them.

   ```html
   <p>This is a paragraph.</p>
   <div>This is a div containing some content.</div>
   ```

- **Self-Closing Tags**: These tags don't have a closing part because they don't enclose content. They are used for standalone elements.

   ```html
   <img src="image.jpg" alt="An image" />
   <br />
   <input type="text" />
   ```

### 3. Semantic Tags vs Normal Tags

Semantic tags are HTML tags that convey meaning about the structure of the content, making it more understandable for both browsers and developers. Here are some examples of semantic tags compared to non-semantic ones:

- **Semantic Tags**:
   - `<header>`: Represents a container for introductory content or a set of navigational links.
   - `<article>`: Represents a self-contained composition in a document.
   - `<section>`: Represents a thematic grouping of content, typically with a heading.
   - `<nav>`: Represents a section with navigation links.
   - `<aside>`: Represents content that is tangentially related to the content around it.

- **Non-Semantic Tags**:
   - `<div>`: A generic container without inherent semantic meaning.
   - `<span>`: A generic inline container without inherent semantic meaning.
   - `<div id="header">` and `<div id="footer">`: These are often used as containers for headers and footers but lack semantic clarity.

### 4. Inline vs Block Tags

HTML tags can be categorized as inline or block-level elements. This classification defines how elements are displayed on a web page.

- **Inline Elements**: These elements do not create line breaks and are typically used within block-level elements to style or format part of the content.

   - Examples: `<a>`, `<span>`, `<strong>`, `<em>`, `<br>`, `<img>`

- **Block-Level Elements**: These elements create a new "block" in the content, typically starting on a new line and taking up the full width available.

   - Examples: `<div>`, `<p>`, `<h1>`, `<ul>`, `<li>`

### 5. Most Commonly Used HTML Tags

Here are some of the most commonly used HTML tags:

- `<html>`: The root element that contains all other HTML elements.
- `<head>`: Contains meta-information about the document, such as the title and links to stylesheets.
- `<title>`: Sets the title of the HTML document, which is displayed in the browser's title bar or tab.
- `<body>`: Contains the visible content of the web page.
- `<h1>`, `<h2>`, `<h3>`, etc.: Headings that define the structure and hierarchy of the content.
- `<p>`: Represents a paragraph of text.
- `<a>`: Creates hyperlinks to other web pages or resources.
- `<img>`: Embeds images in the document.
- `<ul>` and `<ol>`: Create unordered (bulleted) and ordered (numbered) lists.
- `<li>`: Represents a list item within a list.
- `<div>`: A versatile container for grouping and styling content.
- `<span>`: An inline container for styling and scripting individual pieces of content.
- `<table>`, `<tr>`, `<th>`, `<td>`: Used for creating tables to display tabular data.

These tags form the foundation of most HTML documents and are essential for structuring and styling web content.