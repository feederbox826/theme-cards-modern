# theme-cards-modern

[thumbsup/theme-cards](https://github.com/thumbsup/theme-cards) with updated VideoJS and lightGallery

see [CHANGELOG.md](CHANGELOG.md) for changes from upstream

---

## Usage

```bash
thumbsup --theme-path /theme-cards-modern
```

## Screenshots

![albums](docs/albums.png)
![media](docs/media.png)

## Options

You can use override the following variables to customise this theme:

```less
@body-background: #fff;
@body-color: #444;
@header-color: #444;
@nav-border: #ddd;
```

You can add them to your own LESS file, and run thumbsup with `--theme-style custom.less`.

## Developing

Testing the theme

```bash
thumbsup --input /photos --output ./tmp --theme-path ./theme
```

Publishing the theme:

```bash
npm publish --access=public
```
