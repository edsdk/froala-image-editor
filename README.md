<p align="center">
    <a href="https://imgpen.com/"><img src="https://imgpen.com/img/ImgPen.png" alt="ImgPen" width="90" /></a>
</p>

<h1 align="center">Froala image editor</h1>

<p align="center">
    <strong>All standard tools for editind images. </strong>
</p>

<p align="center">
    <a href="https://imgpen.com/">Home page</a> ∙ <a href="https://codepen.io/flmngr/pen/VwEvYMN">Try Online</a>
</p>

<p align="center">
    <a href="https://imgpen.com/">
        <img src="https://n1ed.com/img/screenshots/docs/addons/image-editor/froala-imgpen.png" alt="Image editor for Froala" />
    </a>
</p>

## Intro

This is ImgPen image editor add-on for Froala WYSIWYG editor. It will give you a set of tools for easy editing images: cropping, resizing, adding a text, drawing, applying some filters, etc.

It easily installs into Froala and seamlessly interacts with your file uploader, but will also perfectly extend [Froala File Manager](https://froala-file-manager.com) if you have it. 

## Installation

Install this image editor for Froala as any other Froala plugin.

Include the script into your document near the place where you include the main script of Froala:

```javascript
<script src="https://cdn.jsdelivr.net/gh/edsdk/froala-image-editor@latest/js/froala-image-editor.js"></script>
```

That's all.


## Configuration

There is nothing to configure, it will work from the scratch. But if you get the premium license but do not use [Froala File Manager](https://froala-file-manager.com) please pass `ImgPen.apiKey` parameter to the Froala configuration. Like this:

```javascript
FroalaEditor('#editor', {
    ImgPen: {
        apiKey: "YOUR_APIKEY"
    }
});
```

This key you will receive after purchasing the commercial license.

## Pricing

ImgPen comes together with Flmngr file manager and requires the annual subscription with the price of **$99 and lower** per website depending on the number of websites you use it on. Please install ImgPen plugin into your Froala and it will lead you to payment.

*Note*: one license is for one domain you publish content on (not for the domain used for editing). One domain is limited with 15 users (special pricing for big projects). We successfully collaborate with SaaS projects and will give you discounted bulk pricing - just ask for a quote writing to [support](mailto:support@helpdesk.edsdk.com).

## Who we are

ImgPen is the image editor developed by [EdSDK/N1ED](https://n1ed.com) team.
We work on the tools for WYSIWYG editors such as CKEditor and TinyMCE for about 10 years.

We've ported ImgPen image editor and [Flmngr file manager](https://froala-file-manager.com) to Froala after a number of user requests and hope you will love it and support us by purchasing a commercial license.