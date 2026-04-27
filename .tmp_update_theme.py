from pathlib import Path

root = Path('src')
replacements = [
    ('bg-blue-900', 'bg-pink-900'),
    ('bg-blue-800', 'bg-pink-800'),
    ('bg-blue-700', 'bg-pink-700'),
    ('bg-blue-600', 'bg-pink-600'),
    ('bg-blue-500', 'bg-pink-500'),
    ('bg-blue-400', 'bg-pink-400'),
    ('bg-blue-300', 'bg-pink-300'),
    ('bg-blue-200', 'bg-pink-200'),
    ('bg-blue-100', 'bg-pink-100'),
    ('bg-blue-50', 'bg-pink-50'),
    ('text-blue-900', 'text-pink-900'),
    ('text-blue-800', 'text-pink-800'),
    ('text-blue-700', 'text-pink-700'),
    ('text-blue-600', 'text-pink-600'),
    ('text-blue-500', 'text-pink-500'),
    ('text-blue-400', 'text-pink-400'),
    ('text-blue-300', 'text-pink-300'),
    ('text-blue-200', 'text-pink-200'),
    ('border-blue-900', 'border-pink-900'),
    ('border-blue-800', 'border-pink-800'),
    ('border-blue-700', 'border-pink-700'),
    ('border-blue-600', 'border-pink-600'),
    ('border-blue-500', 'border-pink-500'),
    ('border-blue-400', 'border-pink-400'),
    ('border-blue-300', 'border-pink-300'),
    ('border-blue-200', 'border-pink-200'),
    ('border-blue-100', 'border-pink-100'),
    ('text-yellow-400', 'text-white'),
    ('text-yellow-600', 'text-pink-600'),
    ('bg-yellow-400', 'bg-pink-500'),
    ('hover:bg-yellow-400', 'hover:bg-pink-400'),
    ('hover:bg-yellow-300', 'hover:bg-pink-600'),
    ('border-yellow-400', 'border-pink-400'),
    ('hover:text-blue-900', 'hover:text-white'),
    ('bg-blue-900/75', 'bg-pink-900/75'),
]
replacements = sorted(replacements, key=lambda x: -len(x[0]))
files = list(root.rglob('*.[tT][sS][xX]')) + list(root.rglob('*.[tT][sS]')) + list(root.rglob('*.css'))
changed = {}
for path in files:
    text = path.read_text(encoding='utf-8')
    out = text
    for old, new in replacements:
        out = out.replace(old, new)
    if out != text:
        path.write_text(out, encoding='utf-8')
        changed[path] = sum(text.count(old) for old, new in replacements)
print('Updated files:', len(changed))
for p, count in sorted(changed.items()):
    print(p, count)
