<script>
    import Nav from '../../../components/01light/Nav.svelte';
    import { marked } from 'marked';

    const privacyContent = `
## Open Interpreter Privacy Policy

**Last Updated:** October 25, 2024

## Introduction

Open Interpreter Inc. ("Open Interpreter," "we," "our," and/or "us") values the privacy of individuals who use our application, websites, and related services (collectively, our "Services"). This privacy policy (the “Privacy Policy”) explains how we collect, use, and disclose information from users of our Services. By using our Services, you agree to the collection, use, disclosure, and procedures this Privacy Policy describes. Beyond the Privacy Policy, your use of our Services is also subject to our Terms of Service.

## Information We Collect

We may collect a variety of information from or about you or your devices from various sources, as described below.

### A. Information You Provide to Us

- **Registration and Profile Information**: When you sign up for an account, register to use our Services, sign up for notifications or updates, or participate in our surveys, we may ask you for information such as your name and e-mail address.
- **Communications**: If you contact us directly, we may receive additional information about you, such as your name, email address, phone number, the contents of a message or attachments that you may send to us, and other information you choose to provide. When you communicate with us online, third-party vendors receive and store these communications on our behalf. If you subscribe to our newsletter, we will collect certain information from you, such as your email address. When we send you emails, we may track whether you open them to learn how to deliver a better customer experience and improve our Services.
- **Payment Information**: If you make a purchase through our Services, your payment-related information, such as credit card or other financial information, is collected by our third-party payment processor on our behalf.
- **User Inputs**: When you make inputs into large language models using our Services, we may collect those inputs.

### B. Information We Collect When You Use Our Services

- **Location Information**: When you use our Services, we infer your general location information, for example, by using your internet protocol (IP) address.
- **Device Information**: We receive information about the device and software you use to access our Services, including IP address, web browser type, operating system version, application installations (such as command line tools we check and install if necessary), and relevant desktop-specific identifiers. Additionally, if the language model executes code that reveals the contents of files on your computer, we may receive this information as well. It is important to carefully consider which permissions are granted, as allowing file access means that the application can see, modify, or delete files on your system. **By approving these actions, you acknowledge that you understand the potential consequences, including unintended system modifications or data loss.**
- **Usage Information**: To help us understand how you use our Services and to help us improve them, we automatically receive information about your interactions with our Services, like the pages or other content you view, the searches you conduct, and the dates and times of your visits.
- **Information from Cookies and Similar Technologies**: We and our third-party partners collect information using local storage or similar technologies suitable for desktop environments. Our third-party partners, such as analytics and advertising partners, may use these technologies to collect information about your online activities over time and across different services. Since this is a desktop application, we may use local storage or similar technologies to store user settings and preferences. You can control local storage settings through the application preferences, but please note that disabling local storage may affect the functionality of the Service.

### C. Information We Receive from Other Sources

- **Information from Third-Party Services**: If you choose to link our Services to a third-party account, we may receive information about you, including your profile information and your use of the third-party account. If you wish to limit the information available to us, you should visit the privacy settings of your third-party accounts to learn about your options.

## How We Use the Information We Collect

We use the information we collect for the following purposes:

- **To train models using user inputs**, including those that interact with your local files.
- **To provide, maintain, improve, and enhance our Services**.
- **To personalize your experience** on our Services by providing tailored content and recommendations.
- **To understand and analyze how you use our Services** and develop new products, services, features, and functionality.
- **To communicate with you**, provide you with updates and other information relating to our Services, provide information that you request, respond to comments and questions, and otherwise provide customer support.
- **To facilitate the connection of third-party services or applications**.
- **For marketing and advertising purposes**, such as developing and providing promotional and advertising materials that may be relevant, valuable, or otherwise of interest to you.
- **To generate anonymized, aggregate data** containing only de-identified, non-personal information that we may use for any lawful purpose.
- **To facilitate transactions and payments**.
- **To find and prevent fraud and abuse**, and respond to trust and safety issues that may arise.
- **For compliance purposes**, including enforcing our Terms of Service or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency.
- **For other purposes** for which we provide specific notice at the time the information is collected.

## How We Disclose the Information We Collect

We may disclose the information we collect as follows:

### 1. Affiliates

We may disclose any information we receive to our affiliates for any of the purposes described in this Privacy Policy.

### 2. Vendors and Service Providers

We may disclose any information we receive to vendors and service providers retained in connection with the provision of our Services.

### 3. Third-Party App Integrations

If you connect a third-party application to our Services, we may disclose certain information to that third party.

### 4. Analytics Partners

We use analytics services such as Mixpanel to collect and process certain analytics data. You can learn more about their practices by visiting the [Mixpanel Privacy Policy](https://mixpanel.com/legal/privacy-policy/).

### 5. Legal Requirements and Similar Disclosures

We may access, preserve, and disclose your information if we believe doing so is required or appropriate to: (a) comply with law enforcement requests and legal process, such as a court order or subpoena; (b) respond to your requests; or (c) protect your, our, or others’ rights, property, or safety.

### 6. Merger, Sale, or Other Asset Transfers

We may transfer your information to service providers, advisors, potential transactional partners, or other third parties in connection with the consideration, negotiation, or completion of a corporate transaction in which we are acquired by or merged with another company or we sell, liquidate, or transfer all or a portion of our assets.

### 7. Consent

We may also disclose your information with your permission.

## Your Choices

- **Location Information**: You can prevent your device from sharing precise location information at any time through your device’s operating system settings.
- **Use of Inputs for Model Training**: You can opt-out of your inputs being used for model training by changing your settings.
- **Marketing Communications**: You can unsubscribe from our promotional emails via the link provided in the emails. Even if you opt out of receiving promotional messages from us, you will continue to receive administrative messages from us.
- **Service Limitations**: If you choose not to provide us with information we request, some features of our Services may not work as intended.

## Third Parties

Our Services may contain links to other websites, products, or services that we do not own or operate. We are not responsible for the privacy practices of these third parties. Please be aware that this Privacy Policy does not apply to your activities on these third-party services or any information you disclose to these third parties. We encourage you to read their privacy policies before providing any information to them.

## Security

We make reasonable efforts to protect your information by using physical and electronic safeguards designed to improve the security of the information we maintain. However, given the nature of our Services, there is an inherent risk that executing code on your computer could lead to unintended consequences, such as modification or deletion of files. By using our Services, you acknowledge and accept this risk, including the possibility of data loss or system instability. **Open Interpreter Inc. disclaims any liability for damages or losses resulting from the use of the Services.** However, because no electronic transmission or storage of information can be entirely secure, we can make no guarantees as to the security or privacy of your information.

## Children’s Privacy

We do not knowingly collect, maintain, or use personal information from children under 13 years of age, and no part of our Services is directed to children. If you learn that a child has provided us with personal information in violation of this Privacy Policy, then you may alert us at [help@openinterpreter.com](mailto\:help@openinterpreter.com).

## International Visitors

Our Services are hosted in the United States (“U.S.”) and intended for visitors located within the U.S. If you choose to use the Services from the European Union or other regions of the world with laws governing data collection and use that may differ from U.S. law, then please note that you are transferring your personal information outside of those regions to the U.S. for storage and processing. We may also transfer your data from the U.S. to other countries or regions in connection with storage and processing of data, fulfilling your requests, and operating the Services. By providing any information, including personal information, on or to the Services, you consent to such transfer, storage, and processing.

## Update Your Information

You can update your account and profile information through your profile settings.

## Changes to this Privacy Policy

We will post any adjustments to the Privacy Policy on this page, and the revised version will be effective when it is posted. If we materially change the ways in which we use or disclose personal information previously collected from you through the Services, we will notify you through the Services, by email, or other communication.

## Contact Information

If you have any questions, comments, or concerns about our processing activities, please email us at [help@openinterpreter.com](mailto\:help@openinterpreter.com) or write to us at our address.


    `;
</script>

<svelte:head>
    <title>Privacy Policy - The Open Interpreter Project</title>
    <meta name="description" content="Privacy Policy for The Open Interpreter Project" />
</svelte:head>

<div class="invert min-h-screen bg-black text-white">
    <Nav />
    <main class="container mx-auto px-8 sm:px-16 py-8 pt-40">
        <div class="prose prose-invert prose-slate max-w-none">
            {@html marked(privacyContent)}
        </div>
    </main>
</div>

<br>

<style>
    :global(body) {
        background-color: #171717;
        margin: 0;
        padding: 0;
    }
    :global(.prose) {
        color: white;
    }
    :global(.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6) {
        color: white;
    }
</style>
