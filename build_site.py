#!/usr/bin/env python3

import os
from pathlib import Path

p = Path('.')
dirs = [x for x in p.iterdir() if x.is_dir() if 'app' in str(x)]

for dir in dirs:
    prev = Path.cwd()
    os.chdir(prev / dir)
    os.system('yarn build')
    os.chdir(prev)

# TODO: cd to dist dir
# TODO: angular: rm '<base href="/">'
# TODO: svelte: rm '/' from href=" src="
# TODO: react: rm <link rel="apple-touch-icon" href="/logo192.png" /><link rel="manifest" href="/manifest.json" />
# TODO: react: rm '/' from href=" src="
# TODO: vue: rm '/' from href=" src="

# angular
