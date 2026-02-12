# Portfolio Website

A professional portfolio website built with HTML, CSS, and JavaScript.

## 📧 Contact Form Setup (EmailJS)
The contact form uses **EmailJS** to send emails directly from the browser.

### How to Configure:
1.  **Sign Up**: Create a free account at [emailjs.com](https://www.emailjs.com/).
2.  **Add Service**: Go to "Email Services" -> "Add New Service" -> Select "Gmail".
3.  **Add Template**: Go to "Email Templates" -> "Create New Template".
    -   Use variables `{{name}}`, `{{email}}`, and `{{message}}` in your template subject/content.
4.  **Get Keys**:
    -   **Service ID**: Found in the "Email Services" tab.
    -   **Template ID**: Found in the "Email Templates" tab.
    -   **Public Key**: Found in "Account" -> "API Keys" -> "Public Key".
5.  **Update Code**:
    -   Open `script.js`.
    -   Replace `'YOUR_SERVICE_ID'`, `'YOUR_TEMPLATE_ID'`, and `'YOUR_PUBLIC_KEY'` with the keys from your account.
