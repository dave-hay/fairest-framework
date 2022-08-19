#!/usr/bin/env python

import logging
import os
import threading
from pathlib import Path, PurePosixPath


def update_dist(last_dir):
    pure = PurePosixPath(last_dir)
    par = str(pure.parent)
    cur = str(pure.name)
    dir = str(par + '/dist/' + cur)
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

    if 'react' in dir:
        react_html = []
        with open(dir + "/index.html", 'r') as fp:
            for line in fp:
                if '<link rel="apple-touch-icon' in line: continue
                if '<link rel="manifest' in line: continue
                else: react_html.append(line)
            fp.close()
        with open(dir + "/index.html", 'w') as fp:
            for newLine in react_html:
                fp.write(newLine)
            fp.close()

    if 'svelte' in dir or 'vue' in dir or 'react' in dir:
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


def build_dist(dir):
    logging.info("Thread %s: starting", dir)

    prev = Path.cwd()
    os.chdir(prev / dir)
    os.system('yarn build')
    os.chdir(prev)

    logging.info("Thread %s: Finish download", dir)
    logging.info("Thread %s: starting edits", dir)

    update_dist(dir)

    logging.info("Thread %s: finishing edits", dir)


if __name__ == "__main__":
    format = "%(asctime)s: %(message)s"
    logging.basicConfig(format=format, level=logging.INFO, datefmt="%H:%M:%S")
    p = Path('.')

    logging.info("Start...")
    dirs = [x for x in p.iterdir() if x.is_dir() if 'app' in str(x)]
    # dist_path = Path('./dist/')
    # dist_dirs = [
    #     str(x) for x in dist_path.iterdir() if x.is_dir() if 'app' in str(x)
    # ]

    for dir in dirs:
        x = threading.Thread(target=build_dist, args=(dir, ))
        x.start()
        # call thrud
    logging.info("Main    : all done")
