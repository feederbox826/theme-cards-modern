# Changes from upstream theme-cards
- update VideoJS to 8.12.0 from ??
  - switch to VideoJS core with no VTT
- update lightGallery to 2.7.2 from 1.2.14
  - use bundled plugin CSS
  - always use minified JS pluigns
  - remove jQuery dependency
- default enable autoplay video with videoJS
- remove EXIF from thumbnail info

# Changes from master
- default dark theme
- add caption box at the bottom of the image
  - default for stripped filename
- video playback optimizations
  - optimize for 1x1 videos
  - disable PiP
  - working autoplay and loop
- add filename stripping plugin
- add sub-html to videos