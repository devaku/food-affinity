exports.CreatePaymentDetails =
    "INSERT INTO payment_details (amount, provider, status) VALUES (<VAR1>, '<VAR2>', '<VAR3>') RETURNING id";

exports.ReadPaymentDetails = 'SELECT * FROM payment_details WHERE id = <VAR1>';

exports.UpdateStatusPaymentDetails =
    'UPDATE payment_details SET status = <VAR1> WHERE id = <VAR2>';

exports.UpdateAmountPaymentDetails =
    'UPDATE payment_details SET amount = <VAR1> WHERE id = <VAR2>';

exports.UpdateProviderPaymentDetails =
    'UPDATE payment_details SET provider = <VAR1> WHERE id = <VAR2>';

exports.UpdateFinishPaymentDetails =
    'UPDATE payment_details SET merchant_id = <VAR1>, merchant_data = "<VAR2>", amount = <VAR3>, provider = "<VAR4>", status = "<VAR5>"  WHERE id = <VAR6>';
