# Jupyter Extension points
def _jupyter_server_extension_paths():
    return [{
        'module': 'nbdime_tree_diff',
    }]

def _jupyter_nbextension_paths():
    return [{
        "section": "tree",
        "dest": "nbdime_tree_diff",
        "src": "static",
        "require": "nbdime_tree_diff/main"
    }]

def load_jupyter_server_extension(nbapp):
    pass
