from setuptools import setup, find_packages

setup(
    name='nbtime_tree_diff',
    version='0.0.1',
    description='Extension for classic jupyter allowing nbdiff-web between two notebooks in the file tree',
    url='http://github.com/mister-average/nbtime_tree_diff',
    author='mister-average',
    author_email='mister_person@averageaddress.com',
    license='BSD',
    packages=find_packages(),
    data_files=[('/static', ['main.js'])],
    python_requires='>=3.6'
)
