import openpyxl
import os
import json

wb = openpyxl.load_workbook('manjul sheet 1 - Copy (1).xlsx')
sheet = wb.active

rows = list(sheet.iter_rows(values_only=True))
headers = [str(h).strip() if h else '' for h in rows[0]]
print("Headers:", headers)

data_rows = rows[1:]
print(f"Total product rows in Excel: {len(data_rows)}")

image_files = sorted(os.listdir('manjul binding'))
print("Total images in 'manjul binding':", len(image_files))
print("Images list:", image_files)

# Let's inspect each row content
products = []
for idx, row in enumerate(data_rows):
    if not any(row):
        continue
    product_name = row[0]
    binding_type = row[1] if len(row) > 1 else ''
    paper_quality = row[2] if len(row) > 2 else ''
    page_count = row[3] if len(row) > 3 else ''
    size_format = row[4] if len(row) > 4 else ''
    dimensions = row[5] if len(row) > 5 else ''
    ruling = row[6] if len(row) > 6 else ''
    
    # Check if there is an image named matching index or row number
    # Let's map images logically
    products.append({
        "id": idx + 1,
        "name": product_name,
        "binding_type": binding_type,
        "paper_quality": paper_quality,
        "page_count": str(page_count) if page_count else '',
        "size_format": size_format,
        "dimensions": dimensions,
        "ruling": ruling
    })

print(f"\nParsed {len(products)} products.")
for p in products[:5]:
    print(p)
