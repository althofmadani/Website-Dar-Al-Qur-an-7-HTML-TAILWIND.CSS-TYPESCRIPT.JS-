import re

with open('index.html', 'r') as f:
    content = f.read()

# Extract all tags
start_tags = re.findall(r'<\s*([a-z][a-z0-9]*)\b[^>]*>', content, re.IGNORECASE)
end_tags = re.findall(r'<\s*/\s*([a-z][a-z0-9]*)\s*>', content, re.IGNORECASE)

# Count occurrences
tag_counts = {}
for tag in start_tags:
    tag_counts[tag.lower()] = tag_counts.get(tag.lower(), 0) + 1
for tag in end_tags:
    tag_counts[tag.lower()] = tag_counts.get(tag.lower(), 0) - 1

# Find unbalanced tags
unbalanced = {tag: count for tag, count in tag_counts.items() if count != 0}

if unbalanced:
    print("Unbalanced tags found:")
    for tag, count in unbalanced.items():
        print(f"  {tag}: {count} (opening) / {-count} (closing)")
else:
    print("✓ All HTML tags are properly balanced!")
