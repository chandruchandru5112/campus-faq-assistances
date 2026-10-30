#!/usr/bin/env python3
"""Builds dist/index.html (standalone) and dist/artifact.html (fragment for hosted preview).
Usage:  python3 build.py
Inlines the CSS, data, engine, app code and the two campus photos (assets/*.jpg) into one file."""
import base64, pathlib
root = pathlib.Path(__file__).parent
src, assets, dist = root / 'src', root / 'assets', root / 'dist'
dist.mkdir(exist_ok=True)
def b64(name):
    return 'data:image/jpeg;base64,' + base64.b64encode((assets / name).read_bytes()).decode()
html = (src / 'template.html').read_text()
css = (src / 'styles.css').read_text().replace('__ENTRANCE__', b64('entrance.jpg')).replace('__CAMPUS__', b64('campus.jpg'))
html = (html.replace('/*@STYLES*/', css)
            .replace('/*@DATA*/', (src / 'faq-data.js').read_text())
            .replace('/*@ENGINE*/', (src / 'faq-engine.js').read_text())
            .replace('/*@APP*/', (src / 'app.js').read_text()))
(dist / 'artifact.html').write_text(html)
standalone = ('<!doctype html>\n<html lang="en"><head><meta charset="utf-8">'
              '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
              '<style>html{color-scheme:light}body{margin:0}</style></head><body>\n' + html + '\n</body></html>\n')
(dist / 'index.html').write_text(standalone)
print('built', dist / 'index.html', round(len(standalone) / 1024), 'KB')
