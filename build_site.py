#!/usr/bin/env python3

import os
from pathlib import Path
# import subprocess

# os.system('echo "hello world"')
###
# print(os.getcwd())
# print(os.path.relpath(os.curdir))
# subprocess.Popen([f'cd {dir}', "yarn build", ".."])
###

p = Path('.')
dirs = [x for x in p.iterdir() if x.is_dir() if 'app' in str(x)]

for dir in dirs:
    prev = Path.cwd()
    os.chdir(prev / dir)
    os.system('yarn build')
    os.chdir(prev)

# print(idk)
