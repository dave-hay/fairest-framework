#!/usr/bin/env python3

import os
from pathlib import Path
import sys


def build(framework):
    p = Path('.')
    dirs = [x for x in p.iterdir() if x.is_dir() if framework in str(x)]

    for dir in dirs:
        prev = Path.cwd()
        os.chdir(prev / dir)
        os.system('yarn build')
        os.chdir(prev)


def config(framework):
    dist_path = Path('./dist/')
    dist_dirs = [
        str(x) for x in dist_path.iterdir() if x.is_dir()
        if framework in str(x)
    ]

    for dir in dist_dirs:
        # angular
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

        # react
        if 'react' in dir:
            updated = []
            with open(dir + '/index.html', 'r') as fp:
                for line in fp:
                    r = line.replace('>', '>\n')
                    updated = r.split('\n')
                fp.close()

            with open(dir + '/index.html', 'w') as fp:
                for l in updated:
                    if '' == l: continue
                    if '<link rel="apple-touch-icon' in l: continue
                    if '<link rel="manifest' in l: continue
                    if 'href="/' in l or 'src="/' in l:
                        nl = l.replace('="/', '="')
                        fp.write(nl + '\n')
                    else:
                        fp.write(l + '\n')
                fp.close()

        # svelte, vue
        if 'svelte' in dir or 'vue' in dir:
            html = []
            with open(dir + "/index.html", 'r') as fp:
                for line in fp:
                    if 'href="/' in line or 'src="/' in line:
                        html.append(line.replace('="/', '="'))
                    else:
                        html.append(line)
                fp.close()
            with open(dir + "/index.html", 'w') as fp:
                for newLine in html:
                    fp.write(newLine)
                fp.close()


if __name__ == "__main__":
    args = sys.argv[1:]  # rm script name

    if len(args) == 0:
        print('building all apps')
        build('app')
        config('app')

    kywds = {'react', 'svelte', 'vue', 'angular'}

    for arg in args:
        if arg.lower() in kywds:
            print(f'building {arg}')
            build(arg.lower())
            config(arg.lower())
