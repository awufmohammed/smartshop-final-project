// Calculate the invoice whenever a monetary field changes.
const amounts = [...document.querySelectorAll('.amount')];
const taxRate = document.getElementById('taxRate');
const otherCosts = document.getElementById('otherCosts');
const fields = [...amounts, taxRate, otherCosts];
const money = new Intl.NumberFormat('en-US', {style:'currency', currency:'USD'});
function calculateInvoice() {
    const subtotalOutput = document.getElementById('subtotal');
    const totalOutput = document.getElementById('totalCost');
    const error = document.getElementById('error');
    if (fields.some(field => !field.validity.valid || !Number.isFinite(Number(field.value)))) {
        error.textContent = 'Enter nonnegative amounts and a tax rate from 0 to 100, using up to two decimal places.';
        subtotalOutput.textContent = totalOutput.textContent = '—';
        return;
    }
    error.textContent = '';
    // Work in cents to avoid floating-point rounding errors.
    const subtotal = amounts.reduce((sum, field) => sum + Math.round(Number(field.value) * 100), 0);
    const tax = Math.round(subtotal * Number(taxRate.value) / 100);
    const other = Math.round(Number(otherCosts.value) * 100);
    const total = subtotal + tax + other;
    subtotalOutput.textContent = money.format(subtotal / 100);
    totalOutput.textContent = money.format(total / 100);
}
fields.forEach(field => field.addEventListener('input', calculateInvoice));
document.getElementById('invoiceForm').addEventListener('submit', event => event.preventDefault());
calculateInvoice();
