# EmailJS Setup Instructions

Your contact form is now configured with EmailJS! Follow these steps to make it work:

## 📧 Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with Google or Email

## ⚙️ Step 2: Set Up Email Service

1. After login, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Click "Connect Account" and authorize your Gmail (abhishekprakash963@gmail.com)
5. Copy the **Service ID** (looks like: service_xxxxxxx)

## 📝 Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Message from {{from_name}}

**Content:**
```
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save and copy the **Template ID** (looks like: template_xxxxxxx)

## 🔑 Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Copy your **Public Key** (looks like: xxxxxxxxxxxxxx)

## 💻 Step 5: Update Your Code

Open `/Users/abhishek/Desktop/portfolio/src/components/Contact.js` and replace:

```javascript
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your Service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

With your actual values:
```javascript
const serviceID = 'service_xxxxxxx'; // Your actual Service ID
const templateID = 'template_xxxxxxx'; // Your actual Template ID
const publicKey = 'xxxxxxxxxxxxxx'; // Your actual Public Key
```

## ✅ Done!

After updating the IDs, your contact form will send real emails to: **abhishekprakash963@gmail.com**

Test it by filling out the form on your portfolio!

---

**Need help?** Let me know if you encounter any issues during setup!
