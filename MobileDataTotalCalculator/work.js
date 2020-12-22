var total = 0;
$('td[data-heading="Volume"]').each(function( index ) {
    $text = $( this ).text();
    
console.log($text.substring($text.length - 2) == "kB")

$valueToAdd = parseInt($text)

if ($text.substring($text.length - 2) == "kB") {
 $valueToAdd /= 1000; 
}

console.log( index + ": " + $valueToAdd);

total += $valueToAdd;
});
console.log("totaal is nu: " + total)

if ($('.total').length == 0) {
    $('table > tbody:last-child').append('<tr class="total data-tablestyles__DataTableBodyRow"><td data-heading="Datum en tijdstip" class="data-tablestyles__DataTableCell-kbegqQ dSPJvd">totaal</td><td data-heading="Land" class="data-tablestyles__DataTableCell-kbegqQ fccMfM">-</td><td data-heading="Gebruikte BloX" class="data-tablestyles__DataTableCell-kbegqQ fccMfM">-</td><td data-heading="Volume" class="data-tablestyles__DataTableCell-kbegqQ fccMfM">' + total + ' MB</td><td data-heading="Bedrag *" class="data-tablestyles__DataTableCell-kbegqQ fccMfM">-</td></tr>');
}