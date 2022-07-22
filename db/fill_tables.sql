INSERT INTO public.category (id, name) VALUES
(1, 'Television'),
(2, 'Laptop'),
(3, 'Footwear');

INSERT INTO public.attribute (id, name, "categoryId") VALUES 
(1, 'Screen Type', 1),
(2, 'Screen Size', 1),
(3, 'Processor', 2),
(4, 'Ram', 2),
(5, 'Material', 3),
(6, 'Size', 3);

INSERT INTO public.attributes_option (id, value, "attributeId") VALUES
(1, 'LED', 1),
(2, 'LCD', 1),
(3, 'OLED', 1),
(4, 'Intel', 3),
(5, 'AMD', 3),
(6, 'Plastic', 5),
(7, 'Leather', 5);

INSERT INTO public.product (id, name, sku, brand, price, "categoryId") VALUES
(1, 'Samsung TV', 'SAMSUNG-TV', 'Samsung', 20000, 1),
(2, 'Dell Laptop', 'DELL-LAPTOP', 'Dell', 30000, 2),
(3, 'Nike Shoes', 'NIKE-SHOES', 'Nike', 5000, 3),
(4, 'Adidas Shoes', 'ADIDAS-SHOES', 'Adidas', 5000, 3),
(5, 'Samsung Laptop', 'SAMSUNG-LAPTOP', 'Samsung', 40000, 2);

INSERT INTO public.product_attribute (id, value, "attributeId", "productId") VALUES
(1, 'LED', 1, 1),
(2, '15', 2, 1),
(3, 'Intel', 4, 2),
(4, '8', 3, 2),
(5, 'AMD', 3, 5),
(6, 'Plastic', 5, 3),
(7, 'Leather', 6, 4),
(8, '8', 4, 5);
