exports.sql_cart_view = `
CREATE OR REPLACE VIEW public.cart_view
AS
SELECT 
	od.id as order_id,
	od.user_id,
	od.total,
	od.payment_id,
	pid.id as product_id,
	pid.name,
	pid.price,
	pid.description,
	oi.quantity
FROM
	order_items as oi
JOIN order_details AS od ON od.id = oi.order_id
JOIN product as pid on oi.product_id = pid.id
ORDER BY order_id
`;
