#!/usr/bin/env python3

# import os
from pathlib import Path
import subprocess

# os.system('echo "hello world"')
###
# print(os.getcwd())
# print(os.path.relpath(os.curdir))
###

p = Path('.')
dirs = [str(x) for x in p.iterdir() if x.is_dir() if 'app' in str(x)]

for dir in dirs:
    subprocess.run([f'cd {dir}', "yarn build", ".."])

# print(idk)
