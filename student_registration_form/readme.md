# Student Registration Form Assignment

**Project Name:** Responsive Student Registration Form
**Deadline:** 23 Oct 2025
**Files Included:** `index.html`, `styles.css`, `README.md`

## 🚀 How to Run

1.  **Download/Clone:** Ensure you have the `index.html` and `styles.css` files in the same directory.
2.  **Open:** Simply double-click the `index.html` file.
3.  **Browser:** This will open the form in your default web browser (e.g., Chrome, Firefox, Edge).
4.  **Testing Responsiveness:** Resize your browser window or use the browser's developer tools (e.g., F12 or Cmd+Option+I) in device emulation mode to switch between desktop (two-column) and mobile (stacked) layouts.

## ✅ Assessment Fulfillment

This project was built using only HTML5 and CSS3 to meet all the specified requirements:

### HTML Semantics and Controls
* **Structure:** Uses semantic tags like `<header>`, `<main>`, `<form>`, `<fieldset>`, and `<legend>`.
* **Controls Demonstrated:**
    * `input[type=text|email|tel|date|password|file|checkbox|radio]`
    * `<select>`, `<optgroup>`
    * `<textarea>`, `<datalist>`
    * `<button type=submit|reset>`
    * `<progress>` (for file upload placeholder)

### Accessibility and Labels
* **Labels:** Every form control has an associated `<label>` using the `for` attribute.
* **Grouping:** `<fieldset>` and `<legend>` are used to logically group related controls (Personal Details, Academic Info, etc.).
* **Required Fields:** Mandatory fields are marked with the `required` attribute and a visual `*`.
* **Validation Hints:** `aria-describedby` and `<small>` tags are used to provide clear helper text, especially for the Student ID and Password patterns.
* **Focus States:** Custom, clear focus rings are applied to all interactive elements (`input`, `select`, `textarea`, `button`).

### CSS Layout and Responsiveness
* **CSS Variables:** Used for managing colors (`--color-primary`), spacing (`--spacing-md`), and maximum width.
* **Flexbox:** Used for horizontal layout of groups like radio buttons and checkboxes, and for centering content.
* **Grid:** Used for the internal layout of the `<fieldset>` sections, allowing for easy **two-column** arrangement on desktop.
* **Media Queries:** A single `min-width: 768px` breakpoint is used to switch the layout:
    * **Mobile (< 768px):** Single-column, stacked layout (default, mobile-first design).
    * **Desktop (≥ 768px):** Two-column card layout via CSS Grid and Flexbox.

### Visual Design and Polish
* The design is clean, professional, and utilizes a consistent primary color scheme (`--color-primary`).
* Custom styling is applied to radio buttons and checkboxes for a modern look.
* Simple CSS transitions are used for hover and focus effects on buttons and inputs.