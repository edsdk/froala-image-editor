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

It easily installs into Froala and seamlessly interacts with your file uploader provided by [Froala File Manager](https://flmngr.com/doc/install-froala-plugin) if you have it. We strongly recommend using this image editor with the file manager.

## Installation

Install this image editor for Froala as any other Froala plugin.

Include the script into your document near the place where you include the main script of Froala:

```javascript
<script src="https://cloud.n1ed.com/v/latest/froala/froala-image-editor.js"></script>
```

That's all.


## Configuration

There is nothing to configure, it will work from the scratch. Just pass your API key after your had obtained it:

```javascript
FroalaEditor('#editor', {
    ImgPen: {
        apiKey: "YOUR_APIKEY"
    }
});
```


## Who we are

ImgPen is a part of the [Flmngr](https://flmngr.com) file manager developed by [EdSDK](https://edsdk.com) team, whose the primary product is [N1ED](https://n1ed.com).
We work on the tools for WYSIWYG editors such as CKEditor and TinyMCE about 20 years and support Froala now as well.

We've ported Flmngr file manager with image editor to Froala after a number of user requests and hope you will love it and support us by purchasing a commercial license unlocking a lot of handy features.