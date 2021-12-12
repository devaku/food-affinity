exports.CreateOrderContents =
    'INSERT INTO order_items (order_id, product_id, quantity) VALUES (<VAR1>, <VAR2>, <VAR3>) RETURNING id';

exports.ReadOrderContents = 'SELECT * FROM order_items WHERE order_id = <VAR1>';

exports.UpdateQuantityOrderContents =
    'UPDATE order_items SET quantity = <VAR1> WHERE order_id = <VAR2> AND product_id = <VAR3>';

exports.DeleteOrderContents =
    'DELETE FROM order_items WHERE order_id = <VAR1> AND product_id = <VAR2>';

exports.CreateOrderEntry =
    'INSERT INTO order_details (user_id, total, payment_id) VALUES (<VAR1>, <VAR2>, <VAR3>) RETURNING id';

exports.ReadOrderEntry = 'SELECT * FROM order_details WHERE id = <VAR1>';

exports.UpdateTotalOrderEntry =
    'UPDATE order_details SET total = <VAR1> WHERE id = <VAR2> AND user_id = <VAR3>';

exports.UpdatePaymentIdOrderEntry =
    'UPDATE order_details SET payment_id = <VAR1> WHERE id = <VAR2> AND user_id = <VAR3>';

exports.DeleteOrderEntry =
    'DELETE FROM order_details WHERE id = <VAR1> AND user_id = <VAR2>';

exports.CalculateTotalOfCart =
    'SELECT SUM(quantity * price) as total FROM cart_view WHERE order_id = <VAR1>';

exports.ReadCartContentsJSON =
    'SELECT json_agg(result) FROM (SELECT * FROM cart_view WHERE order_id = <VAR1>) as result';
