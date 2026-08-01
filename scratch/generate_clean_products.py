import openpyxl
import os
import json

wb = openpyxl.load_workbook('manjul sheet 1 - Copy (1).xlsx')
sheet = wb.active

rows = list(sheet.iter_rows(values_only=True))

data_rows = rows[1:]

all_image_files = set(os.listdir('public/images/products'))

products = []

for idx, r in enumerate(data_rows):
    if not any(r):
        continue
    
    excel_row_num = idx + 2 # row 2 is index 0
    main_image_name = f"{excel_row_num}.jpeg"
    alt_image_name = f"{excel_row_num}(1).jpeg"
    
    main_image_path = f"/images/products/{main_image_name}" if main_image_name in all_image_files else ""
    additional_images = [f"/images/products/{alt_image_name}"] if alt_image_name in all_image_files else []
    
    name = str(r[0]).strip() if r[0] else ""
    binding_type = str(r[1]).strip() if r[1] else ""
    paper_quality = str(r[2]).strip() if r[2] else ""
    page_count = str(r[3]).strip() if r[3] else ""
    size_format = str(r[4]).strip() if r[4] and str(r[4]).strip() != "None" else ""
    dimensions = str(r[5]).strip() if r[5] and str(r[5]).strip() != "None" else ""
    ruling = str(r[6]).strip() if len(r) > 6 and r[6] and str(r[6]).strip() != "None" else ""
    
    # Combine size_format and dimensions if size_format is missing
    size_display = f"{size_format} ({dimensions})" if size_format and dimensions else (dimensions or size_format or "Standard")
    
    product_obj = {
        "id": idx + 1,
        "excel_row": excel_row_num,
        "name": name,
        "binding_type": binding_type,
        "paper_quality": paper_quality,
        "page_count": page_count,
        "size_format": size_format,
        "dimensions": dimensions,
        "size_display": size_display,
        "ruling": ruling,
        "image": main_image_path,
        "additional_images": additional_images
    }
    
    products.append(product_obj)

print(f"Generated {len(products)} cleaned products.")

output_path = 'data/products.json'
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(products, f, ensure_ascii=False, indent=2)

print(f"Saved to {output_path} successfully!")
