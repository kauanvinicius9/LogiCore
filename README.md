## Technical Documentation LogiCore

### Overview

**LogiCore** is a web-based inventory product management platform. being able to view:

- Code / SKU;
- Description of the material;
- Category;
- Main plant;
- Quantity available;
- Status;
- Actions.

The project has a product table with two different forms of visualization, that is, the user can choose a table format or a card format. Products can also be filtered by:

- Plant;
- Category;
- Status.

---

## Details

Each product allows you to view its information in detail with a line graph showing the temporal evolution of the stock over the last **6 months**.

### Example table

| Plant / Unit | Physical Stock | Reserved Quantity | Quantity Available | Order Point | Situation |
|------------------------|---------------------|---------------------------------|--------------------------------|-----------------------|-------------|
| SP Plant - Headquarters | 120 UN | 20 UN | 100 UN | 30 UN | Normal |
| RJ Plant - Factory | 45 UN | 5 UN | 40 UN | 25 UN | Normal | 
| MG Plant - Log | 80 UN | 0 UN | 80 UN | 20 UN | Normal |
| RS Plant - South | 15 UN | 10 UN | 5 UN | 20 UN | Below minimum | 

### Movement history

| Date/Time | Type | Quantity | Plant of Origin / Destination | Responsible | Note |
|-----------------|-------|-----------------|--------------------------------------|-------------------|------------------|
| 2026-10-20 14:32 | Entrance | 50 | SP Plant | Aush Huse | NF #89201 - SKF Supplier |
| 2026-10-18 09:15 | Output | 10 | SP Plant | Scott Poend | OM-4022 Preventive Maintenance Line 1 |
| 2026-10-10 11:00 | Transfer | 15 |	RJ Plant | Dels Judjs | Transfer to RJ Branch

---

## Execution

To run the project, clone the repository, access the cloned folder, click on the `HTML` file, press the `F5` key and choose the browser, or right-click on the file, and click **Reveal in File Explorer**
