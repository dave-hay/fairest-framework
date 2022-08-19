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

dist_path = Path('./dist/')
dist_dirs = [
    str(x) for x in dist_path.iterdir() if x.is_dir() if 'app' in str(x)
]


def updateFile(dir):
    with open(dir, 'r') as fp:
        for line in fp:
            if '<base href="/">' in line: continue


# angular: rm '<base href="/">'
for dir in dist_dirs:
    if 'angular' in dir:
        ang = []
        with open(dir + "/index.html", 'r') as fp:
            for line in fp:
                if '<base href="/"' in line: continue
                else: ang.append(line)
            fp.close()
        with open(dir + "/index.html", 'w') as fp:
            for newLine in ang:
                fp.write(newLine)
            fp.close()

# TODO: svelte: rm '/' from href=" src="
# TODO: react: rm <link rel="apple-touch-icon" href="/logo192.png" /><link rel="manifest" href="/manifest.json" />
# TODO: react: rm '/' from href=" src="
# TODO: vue: rm '/' from href=" src="

# angular
