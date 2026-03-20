import re

def refactor_to_react():
    # 1. Read the huge HTML file that the user put in src/imports/
    with open('src/imports/index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # 2. Extract Head and Body
    head_match = re.search(r'<head>(.*?)</head>', html, re.DOTALL | re.IGNORECASE)
    body_match = re.search(r'<body([^>]*)>(.*?)</body>', html, re.DOTALL | re.IGNORECASE)
    
    if not head_match or not body_match:
        print("Failed to find head or body")
        return

    head = head_match.group(1)
    body_attrs = body_match.group(1)
    body_inner = body_match.group(2)

    # 3. Create a clean root index.html that loads the React app but includes all the vital <head> tags (Tailwind, fonts, metadata)
    root_html = f"""<!DOCTYPE html>
<html lang="en" class="dark">
<head>
{head}
</head>
<body{body_attrs}>
  <!-- React Mount Point -->
  <div id="root"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>"""
    
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(root_html)

    # 4. Save the pure body content so Vite can import it as raw string
    with open('src/imports/body.html', 'w', encoding='utf-8') as f:
        f.write(body_inner)

    # 5. Update App.tsx to use dangerouslySetInnerHTML instead of the iframe
    with open('src/app/App.tsx', 'r', encoding='utf-8') as f:
        app_code = f.read()
    
    # Replace the iframe with raw HTML
    app_code = app_code.replace("import '../styles/fonts.css';", "import '../styles/fonts.css';\nimport rawBody from '../imports/body.html?raw';")
    
    iframe_pattern = re.compile(r'<iframe.*?/>', re.DOTALL)
    app_code = iframe_pattern.sub('<div dangerouslySetInnerHTML={{ __html: rawBody }} />', app_code)

    with open('src/app/App.tsx', 'w', encoding='utf-8') as f:
        f.write(app_code)

    print("Refactoring complete! React will now inject the HTML directly.")

refactor_to_react()
